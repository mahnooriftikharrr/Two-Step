import React from 'react'

const ControlPanel = ({
  currentMode,
  setCurrentMode,
  targetBPM,
  setTargetBPM,
  sessionDuration,
  sessionActive,
  sessionPaused,
  startSession,
  pauseSession,
  stopSession
}) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleModeChange = (mode) => {
    setCurrentMode(mode)
  }

  const modeDescription = currentMode === 'follow' 
    ? "Music matches patient's walking pace"
    : "Therapist sets music BPM for patient to match"

  return (
    <div className="music-card rounded-2xl shadow-xl p-6 mb-8 relative overflow-hidden">
      <div className="absolute top-4 right-4 text-2xl">🎛️</div>
      <h3 className="text-xl font-bold gradient-text mb-6 flex items-center gap-3">
        <span className="text-2xl">🎚️</span> Therapy Control Center
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mode Toggle */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-3 block">Therapy Mode</label>
          <div className="flex bg-gray-100 rounded-xl p-1">
            <button 
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                currentMode === 'follow' 
                  ? 'bg-orange-500 text-white' 
                  : 'text-gray-600'
              }`}
              onClick={() => handleModeChange('follow')}
            >
              Follow
            </button>
            <button 
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                currentMode === 'set' 
                  ? 'bg-orange-500 text-white' 
                  : 'text-gray-600'
              }`}
              onClick={() => handleModeChange('set')}
            >
              Set
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">{modeDescription}</p>
        </div>

        {/* Target BPM */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-3 block">Target BPM</label>
          <input 
            type="number" 
            value={targetBPM}
            onChange={(e) => setTargetBPM(parseInt(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-400" 
            min="40" 
            max="180" 
            disabled={currentMode === 'follow'}
          />
        </div>

        {/* Session Timer */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-3 block">Session Duration</label>
          <div className="bg-gray-50 px-4 py-3 rounded-xl">
            <div className="text-2xl font-bold text-gray-800">{formatTime(sessionDuration)}</div>
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex flex-wrap gap-4 mt-8 justify-center">
        <button 
          onClick={startSession}
          disabled={sessionActive && !sessionPaused}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
          </svg>
          {sessionPaused ? 'Resume Session' : 'Start Session'}
        </button>
        
        <button 
          onClick={pauseSession}
          disabled={!sessionActive || sessionPaused}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
          </svg>
          Pause
        </button>
        
        <button 
          onClick={stopSession}
          disabled={!sessionActive}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd"></path>
          </svg>
          Stop
        </button>
      </div>
    </div>
  )
}

export default ControlPanel