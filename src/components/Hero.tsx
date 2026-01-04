import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = "Aspiring QA Engineer | Passionate about Software Quality Assurance"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index])
        setIndex(index + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>
      <br></br>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in-down">
          <h1 className="text-4xl sm:text-5xl md:text-6xl whitespace-nowrap font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Hi, I'm Pramodya Kithmini
          </h1><br></br>
          <div className="h-12 md:h-16">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-300">
              {text}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
        </div>
        <br></br>

        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in">
          A dedicated QA enthusiast eager to contribute to software quality
          assurance through testing and continuous learning.
        </p>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up">
          <a
            href="https://github.com/pramodya22"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/50"
          >
            <Github size={24} className="text-white" />
          </a>
          <a
            href="http://www.linkedin.com/in/pramodya-kithmini-578b14313"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/50"
          >
            <Linkedin size={24} className="text-white" />
          </a>
          <a
            href="mailto:pramodyailukpitiya@gmail.com"
            className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-pink-500/50"
          >
            <Mail size={24} className="text-white" />
          </a>
        </div>

        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="inline-block animate-bounce"
        >
          <ArrowDown size={32} className="text-blue-400" />
        </a>
      </div>
    </section>
  )
}

export default Hero
