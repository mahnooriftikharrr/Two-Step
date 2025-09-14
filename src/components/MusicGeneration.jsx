import React, { useState } from 'react'

const MusicGeneration = ({ selectedGenre, setSelectedGenre }) => {
  const [musicPrompt, setMusicPrompt] = useState('')
  const [tempo, setTempo] = useState('moderate')
  const [mood, setMood] = useState('uplifting')
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    const prompt = musicPrompt.trim()
    if (!prompt) {
      alert('Please enter a music prompt first!')
      return
    }

    setIsGenerating(true)
    
    // Simulate API call delay
    setTimeout(() => {
      setIsGenerating(false)
      alert(`Music generation request sent to Suno!\n\nPrompt: "${prompt}"\nGenre: ${selectedGenre}\nTempo: ${tempo}\nMood: ${mood}`)
    }, 2000)
  }

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value)
  }

  return (
    <div className="music-card rounded-2xl shadow-xl p-6 mb-8 relative overflow-hidden">
      <div className="absolute top-4 right-4 text-2xl">🎹</div>
      <h3 className="text-xl font-bold gradient-text mb-6 flex items-center gap-3">
        <span className="text-2xl">🎼</span> Music Generation Studio
      </h3>
      
      {/* Prompt Input */}
      <div className="mb-6">
        <label className="text-sm font-medium text-gray-700 mb-2 block">Music Prompt for Suno</label>
        <textarea 
          value={musicPrompt}
          onChange={(e) => setMusicPrompt(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none" 
          rows="3" 
          placeholder="Describe the music you want... e.g., 'Upbeat pop song with steady rhythm for walking therapy'"
        />
      </div>
      
      {/* Music Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Genre</label>
          <select 
            value={selectedGenre}
            onChange={handleGenreChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="pop">Pop</option>
            <option value="jazz">Jazz</option>
            <option value="electronic">Electronic</option>
            <option value="classical">Classical</option>
            <option value="rock">Rock</option>
            <option value="ambient">Ambient</option>
            <option value="folk">Folk</option>
            <option value="r&b">R&B</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Tempo</label>
          <select 
            value={tempo}
            onChange={(e) => setTempo(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="slow">Slow (60-80 BPM)</option>
            <option value="moderate">Moderate (80-120 BPM)</option>
            <option value="fast">Fast (120-140 BPM)</option>
            <option value="custom">Custom BPM</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Mood</label>
          <select 
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="uplifting">Uplifting</option>
            <option value="calm">Calm</option>
            <option value="energetic">Energetic</option>
            <option value="motivational">Motivational</option>
            <option value="peaceful">Peaceful</option>
          </select>
        </div>
      </div>
      
      {/* Generate Button */}
      <button 
        onClick={handleGenerate}
        disabled={isGenerating}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2 disabled:opacity-50"
      >
        {isGenerating ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"></path>
            </svg>
            Generating Music...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd"></path>
            </svg>
            Generate Music with Suno
          </>
        )}
      </button>
    </div>
  )
}

export default MusicGeneration