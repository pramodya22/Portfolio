import { useEffect, useState } from 'react'
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react'

const Resume = () => {
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

    const element = document.getElementById('resume')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const experiences = [
    {
      title: 'Intern Computer Operator',
      company: 'Sri Lanka Telecom ',
      period: '2023 April - 2023 June',
      description: 'After completing CAIT course, I joined Sri Lanka Telecom as an Intern Computer Operator. During this internship, I gained practical experience through supporting daily IT operations.'}
  ]

  const education = [
    {
      degree: 'Undergraduate',
      school: 'University of Sri Jayewardenepura',
      period: '2023-Present',
      description: 'Specialized in Software Engineering Bachelor of Information and Communication Technology (BICT Hons) ',
    },
    {
      degree: 'GCE Advanced Level',
      school: 'Rathnavali Balika Vidyalaya, Gampaha',
      period: '2020 - 2022',
      description: 'Technology Stream - EngineeringTechnology ( 1A s , 2B ).',
    },
    {
      degree: 'GCE Ordinary Level',
      school: 'Sanghabodhi Central College, Nittambuwa',
      period: '2018',
      description: '6 A passes, 3 B passes including Mathematics, English Literature and Science.',
    },
  ]

  const certifications = [
    'Software Testing Masterclass (2025) From Novice to Expert - Udemy',
    'Test Automation Foundations - Udemy',
    'Quality Assurance Mastery Manual Software Testing - Udemy',
    'Postman API fundamentals Student Expert Certification - Postman',
    'Jmeter training for Beginners - Simplilearn',
    'DevOps and Jenkins Fundamentals - LearnKarts'
  ]

  return (
    <section id="resume" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">
          Resume
        </h2>

        <div className="text-center mb-12">
          <a
    href="assets/Pramodya_Kithmini_CV_InternQA.pdf"
    download
    className="group relative inline-flex items-center space-x-3 px-8 py-4 
               bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg 
               font-semibold text-white transition-all duration-300 
               hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105"
  >
            <Download size={20} className="transition-transform duration-300 group-hover:-translate-y-1" />
            <span>Download Resume</span>
      </a>
        </div>

        <div className="space-y-12">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Briefcase className="text-blue-400" size={28} />
              <h3 className="text-2xl font-bold text-gray-200">Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className="group relative"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-100">{exp.title}</h4>
                      <span className="text-sm text-blue-400 font-medium">{exp.period}</span>
                    </div>
                    <p className="text-pink-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="text-pink-400" size={28} />
              <h3 className="text-2xl font-bold text-gray-200">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.degree} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-pink-500/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-100">{edu.degree}</h4>
                      <span className="text-sm text-pink-400 font-medium">{edu.period}</span>
                    </div>
                    <p className="text-blue-400 font-medium mb-2">{edu.school}</p>
                    <p className="text-gray-400">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Award className="text-purple-400" size={28} />
              <h3 className="text-2xl font-bold text-gray-200">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="group relative"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                    <p className="text-gray-300 font-medium">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
