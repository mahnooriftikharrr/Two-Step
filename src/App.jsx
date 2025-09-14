import React, { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import BPMDisplay from './components/BPMDisplay'
import MusicGeneration from './components/MusicGeneration'
import ControlPanel from './components/ControlPanel'
import SessionStatus from './components/SessionStatus'

function App() {
  // Session state
  const [sessionActive, setSessionActive] = useState(false)
  const [sessionPaused, setSessionPaused] = useState(false)
  const [sessionStartTime, setSessionStartTime] = useState(null)
  const [sessionDuration, setSessionDuration] = useState(0)
  const [currentMode, setCurrentMode] = useState('follow')
  const [selectedGenre, setSelectedGenre] = useState('pop')
  const [sessionData, setSessionData] = useState([])

  // BPM state
  const [patientBPM, setPatientBPM] = useState(72)
  const [musicBPM, setMusicBPM] = useState(75)
  const [targetBPM, setTargetBPM] = useState(80)

  // Intervals
  const timerInterval = useRef(null)
  const bpmInterval = useRef(null)

  // Timer effect
  useEffect(() => {
    if (sessionActive && !sessionPaused) {
      timerInterval.current = setInterval(() => {
        const duration = Math.floor((Date.now() - sessionStartTime) / 1000)
        setSessionDuration(duration)
      }, 1000)
    } else {
      clearInterval(timerInterval.current)
    }

    return () => clearInterval(timerInterval.current)
  }, [sessionActive, sessionPaused, sessionStartTime])

  // BPM simulation effect
  useEffect(() => {
    if (sessionActive && !sessionPaused) {
      bpmInterval.current = setInterval(() => {
        setPatientBPM(prev => {
          const newBPM = prev + (Math.random() - 0.5) * 4
          return Math.max(50, Math.min(120, Math.round(newBPM)))
        })

        setMusicBPM(prev => {
          let newMusicBPM
          if (currentMode === 'follow') {
            const diff = patientBPM - prev
            newMusicBPM = prev + diff * 0.3
          } else {
            const diff = targetBPM - prev
            newMusicBPM = prev + diff * 0.2
          }
          return Math.round(newMusicBPM)
        })

        // Store session data
        const bpmDiff = Math.abs(patientBPM - musicBPM)
        setSessionData(prev => [...prev, {
          timestamp: Date.now(),
          patientBPM,
          musicBPM,
          targetBPM: currentMode === 'set' ? targetBPM : null,
          mode: currentMode,
          genre: selectedGenre,
          inSync: bpmDiff <= 3
        }])
      }, 1000)
    } else {
      clearInterval(bpmInterval.current)
    }

    return () => clearInterval(bpmInterval.current)
  }, [sessionActive, sessionPaused, patientBPM, musicBPM, targetBPM, currentMode, selectedGenre])

  const startSession = () => {
    if (!sessionActive) {
      setSessionActive(true)
      setSessionStartTime(Date.now())
    } else if (sessionPaused) {
      setSessionPaused(false)
      setSessionStartTime(Date.now() - sessionDuration * 1000)
    }
  }

  const pauseSession = () => {
    if (sessionActive && !sessionPaused) {
      setSessionPaused(true)
    }
  }

  const stopSession = () => {
    setSessionActive(false)
    setSessionPaused(false)
  }

  const clearSessionData = () => {
    if (window.confirm('Are you sure you want to clear all session data? This action cannot be undone.')) {
      setSessionData([])
      setSessionDuration(0)
      alert('Session data has been cleared successfully!')
    }
  }

  const saveSessionData = () => {
    const sessionSummary = {
      sessionDate: new Date().toISOString(),
      duration: sessionDuration,
      mode: currentMode,
      genre: selectedGenre,
      targetBPM: currentMode === 'set' ? targetBPM : null,
      averagePatientBPM: sessionData.length > 0 ? Math.round(sessionData.reduce((sum, d) => sum + d.patientBPM, 0) / sessionData.length) : 0,
      averageMusicBPM: sessionData.length > 0 ? Math.round(sessionData.reduce((sum, d) => sum + d.musicBPM, 0) / sessionData.length) : 0,
      syncPercentage: sessionData.length > 0 ? Math.round((sessionData.filter(d => d.inSync).length / sessionData.length) * 100) : 0,
      detailedData: sessionData
    }
    
    const dataStr = JSON.stringify(sessionSummary, null, 2)
    const dataBlob = new Blob([dataStr], {type: 'application/json'})
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `rhythm-therapy-session-${new Date().toISOString().split('T')[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-gradient-to-br from-orange-100 via-yellow-50 to-amber-100 min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* BPM Displays */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <BPMDisplay 
            title="Patient's Pace"
            icon="🚶‍♂️"
            emoji="👤"
            bpm={patientBPM}
            color="blue"
            label="Walking Rhythm"
          />
          <BPMDisplay 
            title="Music's Pace"
            icon="🎼"
            emoji="🎵"
            bpm={musicBPM}
            color="purple"
            label="Musical Beat"
          />
        </div>

        {/* Music Generation */}
        <MusicGeneration 
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />

        {/* Control Panel */}
        <ControlPanel
          currentMode={currentMode}
          setCurrentMode={setCurrentMode}
          targetBPM={targetBPM}
          setTargetBPM={setTargetBPM}
          sessionDuration={sessionDuration}
          sessionActive={sessionActive}
          sessionPaused={sessionPaused}
          startSession={startSession}
          pauseSession={pauseSession}
          stopSession={stopSession}
        />

        {/* Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SessionStatus
            sessionActive={sessionActive}
            sessionPaused={sessionPaused}
            patientBPM={patientBPM}
            musicBPM={musicBPM}
            selectedGenre={selectedGenre}
            currentMode={currentMode}
          />
        </div>
      </div>
    </div>
  )
}

export default App
