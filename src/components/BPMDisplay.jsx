import React from 'react'

const BPMDisplay = ({ title, icon, emoji, bpm, color, label }) => {
  const colorClasses = {
    blue: {
      text: 'text-blue-600',
      gradient: 'from-blue-400 to-blue-600'
    },
    purple: {
      text: 'text-purple-600',
      gradient: 'from-purple-400 to-purple-600'
    }
  }

  const progressWidth = `${(bpm / 120) * 100}%`

  return (
    <div className="music-card rounded-2xl shadow-xl p-8 text-center relative overflow-hidden">
      <div className="absolute top-4 right-4 text-2xl">{icon}</div>
      <h2 className="text-xl font-semibold gradient-text mb-4 flex items-center justify-center gap-2">
        <span>{emoji}</span> {title}
      </h2>
      <div className={`bpm-display ${colorClasses[color].text} mb-2`}>{bpm}</div>
      <div className="text-gray-600 text-lg font-semibold">BPM</div>
      <div className="mt-4 h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full overflow-hidden shadow-inner">
        <div 
          className={`h-full bg-gradient-to-r ${colorClasses[color].gradient} rounded-full transition-all duration-500 shadow-sm`} 
          style={{width: progressWidth}}
        ></div>
      </div>
      <div className="mt-2 text-xs text-gray-500 font-medium">{label}</div>
    </div>
  )
}

export default BPMDisplay