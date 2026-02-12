'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [stage, setStage] = useState(0)
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const [flickerText, setFlickerText] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setFlickerText(prev => !prev)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  const checkAnswer = (answer: string, correct: string) => {
    if (answer.toLowerCase().trim() === correct.toLowerCase()) {
      setStage(stage + 1)
      setInput('')
      setError('')
      return true
    }
    setError('The shadows whisper... try again.')
    setTimeout(() => setError(''), 3000)
    return false
  }

  const goBack = () => {
    setStage(stage - 1)
    setInput('')
    setError('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    switch(stage) {
      case 1:
        // Caesar cipher answer: "RAVEN" (shifted from UDYHQ)
        checkAnswer(input, 'raven')
        break
      case 2:
        // Riddle answer
        checkAnswer(input, 'echo')
        break
      case 3:
        // Morse code answer
        checkAnswer(input, 'basement')
        break
      case 4:
        // Hitchcock numbers sum: 39 + 26 + 13 + 6 = 84
        checkAnswer(input, '84')
        break
      case 5:
        // Final cipher
        checkAnswer(input, 'mirror')
        break
      default:
        break
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        
        {stage === 0 && (
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-6xl font-bold text-blood-red animate-pulse-slow">
              THE VALLEY
            </h1>
            <p className="text-xl text-gray-400 italic">
              Where secrets lie buried in shadow
            </p>
            <button
              onClick={() => setStage(1)}
              className="mt-8 px-8 py-4 bg-blood-red hover:bg-red-900 text-white font-bold rounded shadow-pulse transition-all"
            >
              Enter the Valley
            </button>
          </div>
        )}

        {stage === 1 && (
          <div className="space-y-6 p-8 bg-gray-900 bg-opacity-50 rounded-lg border border-blood-red shadow-pulse">
            <h2 className="text-3xl font-bold text-blood-red">The Letter</h2>
            <div className="text-gray-300 leading-relaxed space-y-4 font-serif">
              <p className="italic">A yellowed letter, stained with age:</p>
              <div className="border-l-4 border-blood-red pl-4 py-2">
                <p>Dearest,</p>
                <p className="mt-2">
                  The valley knows what you seek. But first, you must prove yourself worthy.
                </p>
                <p className="mt-2">
                  In Poe's darkest tale, a bird of omen speaks but one word.
                  To find your path, decipher this:
                </p>
                <p className="mt-4 text-center text-xl font-mono tracking-widest text-blood-red">
                  UDYHQ
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  (The answer shifts by three in the shadows)
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-6">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter the bird's name..."
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:border-blood-red focus:outline-none"
              />
              {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
              <div className="flex gap-3 mt-4">
                <button
                  type="button"
                  onClick={goBack}
                  className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded transition-all"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blood-red hover:bg-red-900 text-white rounded transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}

        {stage === 2 && (
          <div className="space-y-6 p-8 bg-gray-900 bg-opacity-50 rounded-lg border border-blood-red shadow-pulse">
            <h2 className="text-3xl font-bold text-blood-red">The Courtyard</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>You find yourself in a forgotten courtyard. The walls seem to whisper.</p>
              <div className="border border-gray-700 p-6 rounded bg-black">
                <p className="text-center text-lg italic mb-4">A riddle carved in stone:</p>
                <div className="text-blood-red text-center space-y-2">
                  <p>"I speak without a mouth,"</p>
                  <p>"I hear without ears,"</p>
                  <p>"I have no body,"</p>
                  <p>"But come alive with fears."</p>
                  <p className="mt-4 text-gray-400">What am I?</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-6">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Your answer..."
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:border-blood-red focus:outline-none"
              />
              {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
              <div className="flex gap-3 mt-4">
                <button
                  type="button"
                  onClick={goBack}
                  className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded transition-all"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blood-red hover:bg-red-900 text-white rounded transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}

        {stage === 3 && (
          <div className="space-y-6 p-8 bg-gray-900 bg-opacity-50 rounded-lg border border-blood-red shadow-pulse">
            <h2 className="text-3xl font-bold text-blood-red">The Hallway</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>A long, dark hallway stretches before you. A light flickers at the end.</p>
              <div className="border border-gray-700 p-6 rounded bg-black">
                <p className="mb-4">The light pulses in a strange pattern:</p>
                <div className="text-center space-y-2 font-mono text-2xl">
                  <div className={`transition-opacity ${flickerText ? 'opacity-100' : 'opacity-20'}`}>
                    <p>▄▄▄ ▄▄▄ ▄▄▄   █   ▄▄▄   █ ▄▄▄   ▄▄▄ ▄ ▄▄▄   █ █ █   ▄▄▄ █ ▄▄▄</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    (Long flashes and short flashes... like a message)
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    ▄▄▄ = dash (long), █ = dot (short), space = letter break
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 italic">
                Where does this pattern lead you?
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-6">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Where should you go?"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:border-blood-red focus:outline-none"
              />
              {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
              <div className="flex gap-3 mt-4">
                <button
                  type="button"
                  onClick={goBack}
                  className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded transition-all"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blood-red hover:bg-red-900 text-white rounded transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}

        {stage === 4 && (
          <div className="space-y-6 p-8 bg-gray-900 bg-opacity-50 rounded-lg border border-blood-red shadow-pulse">
            <h2 className="text-3xl font-bold text-blood-red">The Basement</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>You descend into the basement. The air is thick with dust and dread.</p>
              <p>On an old film reel canister, a note is taped with trembling handwriting:</p>
              <div className="border border-gray-700 p-6 rounded bg-black">
                <p className="text-center italic mb-4 text-gray-400">The Final Clue:</p>
                <div className="space-y-3 text-center">
                  <p className="text-blood-red font-bold">39 STEPS lead you higher,</p>
                  <p className="text-blood-red font-bold">North by Northwest, 26 more aspire,</p>
                  <p className="text-blood-red font-bold">In the BIRDS, they number 13 with dark desire,</p>
                  <p className="text-blood-red font-bold">PSYCHO adds 6 to the funeral pyre.</p>
                  <p className="mt-6 text-gray-300">Sum Hitchcock's numbers, what do you find?</p>
                  <p className="text-gray-300">The total unlocks what lurks in your mind.</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <p className="text-sm text-gray-500 text-center">
                    (Hint: Look for the numbers hidden in the titles and verses)
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-600 italic">
                All references to classic Hitchcock films... but what do they add up to?
              </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-6">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="The sum of Hitchcock's numbers..."
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:border-blood-red focus:outline-none"
              />
              {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
              <div className="flex gap-3 mt-4">
                <button
                  type="button"
                  onClick={goBack}
                  className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded transition-all"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blood-red hover:bg-red-900 text-white rounded transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}

        {stage === 5 && (
          <div className="space-y-6 p-8 bg-gray-900 bg-opacity-50 rounded-lg border border-blood-red shadow-pulse">
            <h2 className="text-3xl font-bold text-blood-red">The Hidden Room</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>Behind a false wall, you find a small room. On the wall, written in blood-red paint:</p>
              <div className="border border-gray-700 p-6 rounded bg-black">
                <div className="text-center space-y-4">
                  <p className="text-xl text-blood-red italic">
                    "I show you what you seek,"
                  </p>
                  <p className="text-xl text-blood-red italic">
                    "But reversed and complete."
                  </p>
                  <p className="text-xl text-blood-red italic">
                    "Look into me to find,"
                  </p>
                  <p className="text-xl text-blood-red italic">
                    "The darkness in your mind."
                  </p>
                  <div className="mt-6 p-4 bg-gray-950 rounded">
                    <p className="text-3xl font-bold tracking-widest">RORRIM</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    What am I, reversed?
                  </p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-6">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="The answer lies in reverse..."
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:border-blood-red focus:outline-none"
              />
              {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
              <div className="flex gap-3 mt-4">
                <button
                  type="button"
                  onClick={goBack}
                  className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded transition-all"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blood-red hover:bg-red-900 text-white rounded transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}

        {stage === 6 && (
          <div className="space-y-8 p-8 bg-gray-900 bg-opacity-50 rounded-lg border border-blood-red shadow-pulse text-center">
            <h2 className="text-4xl font-bold text-blood-red animate-pulse-slow">
              The Black Heart
            </h2>
            <div className="text-gray-300 leading-relaxed space-y-6">
              <p className="text-xl">
                You approach the mirror. In its reflection, you see yourself... and something else.
              </p>
              <div className="my-8 flex justify-center">
                <div className="relative animate-pulse-slow">
                  <svg width="200" height="200" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 0 20px rgba(0, 87, 183, 0.8))' }}>
                    <defs>
                      <linearGradient id="ukraineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#0057B7', stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: '#0057B7', stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      fill="url(#ukraineGradient)"
                      stroke="#FFFFFF"
                      strokeWidth="0.3"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-2xl italic text-blood-red">
                "Люблю тебе 3000!!!"
              </p>
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-sm text-gray-500">
                  The quest is complete. The black heart has been found.
                </p>
                <p className="text-xs text-gray-600 mt-4 italic">
                  "We all go a little mad sometimes." — Norman Bates, Psycho
                </p>
                <button
                  onClick={goBack}
                  className="mt-6 px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded transition-all"
                >
                  ← Back
                </button>
              </div>
            </div>
          </div>
        )}
        
      </div>
    </div>
  )
}
