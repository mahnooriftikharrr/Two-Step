import React from 'react'

const SessionData = ({ saveSessionData, clearSessionData }) => {
  return (
    <div className="music-card rounded-2xl shadow-xl p-6 relative overflow-hidden">
      <div className="absolute top-4 right-4 text-xl">💾</div>
      <h3 className="text-lg font-bold gradient-text mb-4 flex items-center gap-2">
        <span>📁</span> Session Data
      </h3>
      <div className="space-y-3">
        <button 
          onClick={saveSessionData}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
          Download Session Log
        </button>
        <button 
          onClick={clearSessionData}
          className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd"></path>
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 012 0v4a1 1 0 11-2 0V7zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V7a1 1 0 00-1-1z" clipRule="evenodd"></path>
          </svg>
          Clear Session Data
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-2">Download includes BPM data, duration, genre, and sync information</p>
    </div>
  )
}

export default SessionData