import React, { useMemo } from 'react'

const SessionStatus = ({ 
  sessionActive, 
  sessionPaused, 
  patientBPM, 
  musicBPM, 
  selectedGenre, 
  currentMode 
}) => {
  const { statusText, indicatorColor } = useMemo(() => {
    if (!sessionActive) {
      return { statusText: 'Ready to Start', indicatorColor: 'bg-gray-400' }
    }
    
    if (sessionPaused) {
      return { statusText: 'Session Paused', indicatorColor: 'bg-yellow-500' }
    }
    
    const bpmDiff = Math.abs(patientBPM - musicBPM)
    
    if (bpmDiff <= 3) {
      return { statusText: 'In Sync ✅', indicatorColor: 'bg-green-500' }
    } else if (bpmDiff <= 8) {
      return { statusText: 'Adjusting...', indicatorColor: 'bg-yellow-500' }
    } else {
      return { statusText: 'Out of Sync', indicatorColor: 'bg-red-500' }
    }
  }, [sessionActive, sessionPaused, patientBPM, musicBPM])

  const pulseClass = sessionActive && !sessionPaused ? 'pulse-animation' : ''

  return (
    <div className="music-card rounded-2xl shadow-xl p-6 relative overflow-hidden">
      <div className="absolute top-4 right-4 text-xl">📊</div>
      <h3 className="text-lg font-bold gradient-text mb-4 flex items-center gap-2">
        <span>🎯</span> Session Status
      </h3>
      <div className="flex items-center gap-3">
        <div className={`sync-indicator w-4 h-4 ${indicatorColor} rounded-full ${pulseClass}`}></div>
        <span className="text-lg font-medium text-gray-700">{statusText}</span>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <div>Selected Genre: <span className="font-medium capitalize">{selectedGenre}</span></div>
        <div>Current Mode: <span className="font-medium capitalize">{currentMode}</span></div>
      </div>
    </div>
  )
}

export default SessionStatus