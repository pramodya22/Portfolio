import { useEffect, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

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

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-lg overflow-hidden backdrop-blur-sm border border-blue-500/30">
                  <div className="w-full h-full flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10"></div>
                    <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:rotate-3 shadow-2xl">
                      <div className="w-60 h-60 rounded-full overflow-hidden bg-grey-900 ring-2 ring-blue-400/40">
  <img
    src="assets/p1.png"
    alt="Profile"
    className="w-full h-full object-cover scale-110 transition-transform duration-500 hover:scale-115"
  />
</div>
                    </div>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-blue-500/5 to-pink-500/5 transform transition-transform duration-700 group-hover:scale-105"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Hello! I’m a motivated and detail-oriented 
                QA enthusiast with a strong interest 
                in both manual and automation testing. 
                
                My journey into software testing began 
                with learning testing fundamentals, 
                understanding application behavior, 
                
                and ensuring software quality through 
                well-structured test cases.



              </p>
              <p className="text-lg leading-relaxed">
               
I focus on manual testing concepts such as test case design, 
defect reporting, and different testing types, while also 
building hands-on experience in automation testing using 
tools like Selenium and PyTest. I enjoy breaking applications 
to find issues and ensuring they meet user and business requirements.
              </p>
              <p className="text-lg leading-relaxed">
                When I’m not testing applications, 
I spend time learning new testing tools, 
improving my automation skills, 
and practicing real-world testing scenarios. 
I strongly believe in continuous learning, 
quality-driven development, and growing as 
a reliable QA professional.
              </p>
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">
                  What I Do
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Manual testing & Bug Reporting
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Automation testing with Selenium
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                    Jira & Test Case Management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Performance Testing Basics with JMeter
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
