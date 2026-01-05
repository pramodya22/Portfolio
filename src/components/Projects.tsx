import { useEffect, useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import projectImage1 from '../assets/weather.png'
import projectImage2 from '../assets/testProject.jpg'
import projectImage3 from '../assets/aloe.png'
import projectImage4 from '../assets/restaurant.png'
import projectImage5 from '../assets/figma.png'


const Projects = () => {
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

    const element = document.getElementById('projects')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const projects = [
    {
      title: 'OpenCart E-commerce Application – QA Testing Project',
      description:
        'This project demonstrates end-to-end Quality Assurance testing performed on the OpenCart e-commerce application, focusing on the User Registration and Login modules. The project covers the complete QA lifecycle including test planning, manual testing, defect management, and automation testing using industry-standard tools and methodologies.',
      image: projectImage2,
      tags: ['java', 'Selenium', 'Jira', 'TestNG', 'Zephyr'],
      github: 'https://github.com/pramodya22/OpenCart_Testing_Project.git',
      //demo: 'https://demo.com',
    },
    {
      title: 'OpenCart Performance Testing using Apache JMeter',
      description:
        'Performed performance testing on an OpenCart e-commerce application using Apache JMeter. Designed and executed functional, load, stress, spike, and endurance tests to evaluate application behavior under different user loads. Analyzed key performance metrics such as response time, throughput, latency, and error rate. Identified performance bottlenecks and documented results with detailed reports and graphs.',
      image: 'https://jmeter.apache.org/images/asf-logo.png',
      tags: ['Apache JMeter', 'Performance Testing', 'Load Testing', 'Stress Testing'],
      github: 'https://github.com/pramodya22/Performance-Testing_OpenCart.git',
      //demo: 'https://demo.com',
    },
    {
      title: 'Weather Application',
      description:
        'A simple weather application that displays current weather conditions, hourly forecasts, and a 5-day forecast for any city using the OpenWeatherMap API. The app features a dynamic interface with a video background and a responsive design.',
      image: projectImage1,
      tags: ['HTML 5', 'CSS 3', 'JavaScript', 'OpenWeatherMap API'],
      github: 'https://github.com/pramodya22/weather-application.git',
      //demo: 'https://demo.com',
    },
     {
      title: 'A Smart App for Aloe Vera Disease Detection',
      description:
        'AloeGuard is an offline Android app that helps farmers detect Aloe Vera leaf diseases in real-time using AI. It identifies conditions like Leaf Spot, Aloe Rust, Anthracnose, and Sunburn with a TensorFlow Lite model, providing instant diagnoses and treatment advice. Designed for rural farmers, it’s lightweight and works on low-end smartphones without internet.',
      image:projectImage3,
      tags: ['TypeScript','PostgreSQL','TensorFlow','Python','Tailwind CSS','Express.js'],
      github: 'https://github.com/pramodya22/ALO_PK-123-.git',
      //demo: 'https://demo.com',
    },
    {
      title: 'Restaurant App',
      description:
        'A simple and responsive restaurant website created using HTML, CSS, and Bootstrap .Features Home, About, Menu, and Contact sections ,Interactive navigation bar.Stylish layout with Bootstrap. Menu categories',
      image: projectImage4,
      tags: ['HTML5', 'CSS3', 'Bootstrap 5'],
      github: 'https://github.com/pramodya22/Restaurant-website.git',
      //demo: 'https://demo.com',
    },
   
    
    {
      title: 'Study Buddy – AI-Powered Study Assistant (Figma UI/UX Design)',
      description:
        'Study Buddy is a Figma-based UI/UX design for an intelligent, web-based study assistant. It’s crafted to help students plan, focus, and learn effectively by combining smart AI tools, productivity systems, and motivational design elements in a single digital workspace.The goal of Study Buddy is to make studying more structured, enjoyable, and personalized. The design encourages productivity through simplicity — blending AI-driven assistance, calendar-based organization, and focus tools to help students achieve consistency in learning.',
      image: projectImage5,
      tags: ['Figma', 'UI/UX Design', 'Prototyping'],
      github: 'https://github.com/pramodya22/Study-Buddy.git',
      //demo: 'https://demo.com',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-pink-500/20 text-blue-300 rounded-full border border-blue-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                      >
                        <Github size={20} />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
