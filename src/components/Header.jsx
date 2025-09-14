import React from 'react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-50 to-yellow-50 shadow-lg border-b border-orange-200 px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="music-note text-2xl">🎵</span>
            <span className="music-note text-xl">🎶</span>
            <span className="music-note text-2xl">🎵</span>
          </div>
          <h1 className="text-4xl font-bold music-title">Rhythm Therapy</h1>
          <div className="hidden md:flex items-center gap-1 ml-4">
            <div className="w-1 bg-orange-400 music-wave" style={{height: '20px'}}></div>
            <div className="w-1 bg-orange-500 music-wave" style={{height: '30px', animationDelay: '0.2s'}}></div>
            <div className="w-1 bg-orange-600 music-wave" style={{height: '25px', animationDelay: '0.4s'}}></div>
            <div className="w-1 bg-orange-400 music-wave" style={{height: '35px', animationDelay: '0.6s'}}></div>
            <div className="w-1 bg-orange-500 music-wave" style={{height: '20px', animationDelay: '0.8s'}}></div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-200 to-yellow-200 px-4 py-2 rounded-full shadow-md float-animation">
          <span className="text-sm text-orange-800 font-semibold">🎧 Powered by Suno</span>
        </div>
      </div>
    </header>
  )
}

export default Header