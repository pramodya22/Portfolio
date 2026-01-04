import { useState, useEffect } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('contact')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 1500)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-200 mb-6">
              Contact Information
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-300 font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    pramodyailukpitiya@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-300 font-semibold mb-1">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
                  >
                    +94 70 4996 100
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-blue-500 group-hover:shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-gray-300 font-semibold mb-1">Location</h4>
                  <p className="text-gray-400">152/B, Rathambale, Urapola</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-200 transition-all duration-300 backdrop-blur-sm group-hover:border-blue-500/50"
                  placeholder="Your Name"
                />
              </div>

              <div className="group">
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-200 transition-all duration-300 backdrop-blur-sm group-hover:border-blue-500/50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-200 transition-all duration-300 backdrop-blur-sm resize-none group-hover:border-blue-500/50"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {status === 'sending' ? (
                  <span>Sending...</span>
                ) : status === 'success' ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-center animate-fade-in">
                  Thank you for your message! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
