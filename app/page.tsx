"use client"

import { useState, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Smartphone,
  Brain,
  Cpu,
  Award,
  GraduationCap,
  Rocket,
  Wifi,
  Globe,
  Menu,
  X,
  ChevronDown,
} from "lucide-react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Sphere, Box, Cylinder, useGLTF } from "@react-three/drei"
import type * as THREE from "three"

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">WA</span>
            </div>
            <span className="text-white font-semibold text-lg">Wassim Amdouni</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700/50">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium text-left py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function MobileDeveloperModel() {
  const { scene } = useGLTF("/models/mobile_app.glb")
  const modelRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = state.clock.elapsedTime * 0.4
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.3
    }
  })

  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
      <primitive ref={modelRef} object={scene} scale={[1.5, 1.5, 1.5]} position={[0, -0.5, 0]} rotation={[0, 0, 0]} />
    </Float>
  )
}

function ProfessionalSummary3D({ currentRole }: { currentRole: string }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  // Data Scientist Scene
  if (currentRole === "Data Scientist") {
    return (
      <group ref={groupRef}>
        {/* AI Brain Core */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
          <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
            <meshStandardMaterial
              color="#8b5cf6"
              emissive="#4c1d95"
              emissiveIntensity={0.4}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        </Float>

        {/* Neural Network Nodes */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2
          const radius = 2.5
          return (
            <Float key={i} speed={1.5 + i * 0.1} rotationIntensity={0.3} floatIntensity={0.6}>
              <Sphere
                args={[0.2, 16, 16]}
                position={[Math.cos(angle) * radius, Math.sin(angle * 0.5) * 1.5, Math.sin(angle) * radius]}
              >
                <meshStandardMaterial
                  color="#06b6d4"
                  emissive="#0891b2"
                  emissiveIntensity={0.6}
                  transparent
                  opacity={0.8}
                />
              </Sphere>
            </Float>
          )
        })}

        {/* Data Visualization Charts */}
        {Array.from({ length: 6 }).map((_, i) => (
          <Float key={i} speed={1.2 + i * 0.2} rotationIntensity={0.2} floatIntensity={0.4}>
            <Box
              args={[0.1, Math.random() * 1.5 + 0.5, 0.1]}
              position={[(Math.random() - 0.5) * 4, (Math.random() * 1.5 + 0.5) / 2, (Math.random() - 0.5) * 4]}
            >
              <meshStandardMaterial color="#10b981" emissive="#047857" emissiveIntensity={0.4} />
            </Box>
          </Float>
        ))}

        {/* Connecting Neural Lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <Float key={i} speed={1 + i * 0.1} rotationIntensity={0.1} floatIntensity={0.3}>
            <Box
              args={[0.02, 0.02, 3]}
              position={[Math.cos((i / 8) * Math.PI * 2) * 1.5, Math.sin((i / 8) * Math.PI * 2) * 1, 0]}
              rotation={[0, (i / 8) * Math.PI * 2, Math.PI / 2]}
            >
              <meshStandardMaterial
                color="#8b5cf6"
                transparent
                opacity={0.4}
                emissive="#4c1d95"
                emissiveIntensity={0.3}
              />
            </Box>
          </Float>
        ))}
      </group>
    )
  }

  // Mobile Developer Scene with Custom Model
  if (currentRole === "Mobile Developer") {
    return (
      <group ref={groupRef}>
        {/* Your Custom Mobile Developer Model */}
        <MobileDeveloperModel />

        {/* Orbiting App Icons around your model */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const radius = 3.5
          return (
            <Float key={i} speed={2 + i * 0.1} rotationIntensity={0.5} floatIntensity={0.8}>
              <group
                position={[
                  Math.cos(angle + Date.now() * 0.001) * radius,
                  Math.sin(angle * 0.7) * 2,
                  Math.sin(angle + Date.now() * 0.001) * radius,
                ]}
              >
                <Box args={[0.4, 0.4, 0.1]} rotation={[0, angle, 0]}>
                  <meshStandardMaterial
                    color={i % 4 === 0 ? "#ef4444" : i % 4 === 1 ? "#10b981" : i % 4 === 2 ? "#f59e0b" : "#8b5cf6"}
                    emissive={i % 4 === 0 ? "#dc2626" : i % 4 === 1 ? "#047857" : i % 4 === 2 ? "#d97706" : "#4c1d95"}
                    emissiveIntensity={0.4}
                  />
                </Box>
              </group>
            </Float>
          )
        })}

        {/* Code Particles floating around */}
        {Array.from({ length: 15 }).map((_, i) => (
          <Float key={i} speed={1.8 + i * 0.1} rotationIntensity={0.8} floatIntensity={1.2}>
            <Box
              args={[0.1, 0.1, 0.1]}
              position={[(Math.random() - 0.5) * 7, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 7]}
            >
              <meshStandardMaterial
                color="#06b6d4"
                emissive="#0891b2"
                emissiveIntensity={0.6}
                transparent
                opacity={0.7}
              />
            </Box>
          </Float>
        ))}

        {/* Development Tools orbiting */}
        {Array.from({ length: 4 }).map((_, i) => {
          const angle = (i / 4) * Math.PI * 2
          const radius = 2.8
          return (
            <Float key={i} speed={1.5 + i * 0.2} rotationIntensity={0.3} floatIntensity={0.6}>
              <group
                position={[
                  Math.cos(angle + Date.now() * 0.0008) * radius,
                  Math.sin(i * 1.2) * 1.5,
                  Math.sin(angle + Date.now() * 0.0008) * radius,
                ]}
              >
                {/* Tool representations */}
                {i === 0 && (
                  <Box args={[0.3, 0.5, 0.05]}>
                    <meshStandardMaterial color="#10b981" emissive="#047857" emissiveIntensity={0.4} />
                  </Box>
                )}
                {i === 1 && (
                  <Cylinder args={[0.15, 0.15, 0.4, 8]}>
                    <meshStandardMaterial color="#f59e0b" emissive="#d97706" emissiveIntensity={0.4} />
                  </Cylinder>
                )}
                {i === 2 && (
                  <Sphere args={[0.2, 12, 12]}>
                    <meshStandardMaterial color="#ef4444" emissive="#dc2626" emissiveIntensity={0.4} />
                  </Sphere>
                )}
                {i === 3 && (
                  <Box args={[0.25, 0.25, 0.25]}>
                    <meshStandardMaterial color="#8b5cf6" emissive="#4c1d95" emissiveIntensity={0.4} />
                  </Box>
                )}
              </group>
            </Float>
          )
        })}
      </group>
    )
  }

  // IoT Developer Scene
  if (currentRole === "IoT Developer") {
    return (
      <group ref={groupRef}>
        {/* Central IoT Hub */}
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.7}>
          <Cylinder args={[0.8, 1.2, 1.5, 8]} position={[0, 0, 0]}>
            <meshStandardMaterial
              color="#10b981"
              emissive="#047857"
              emissiveIntensity={0.4}
              roughness={0.3}
              metalness={0.7}
            />
          </Cylinder>
        </Float>

        {/* IoT Sensors Network */}
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = (i / 10) * Math.PI * 2
          const radius = 2.8
          const height = Math.sin(i * 0.5) * 1.5
          return (
            <Float key={i} speed={1.3 + i * 0.1} rotationIntensity={0.3} floatIntensity={0.5}>
              <group position={[Math.cos(angle) * radius, height, Math.sin(angle) * radius]}>
                {/* Sensor Device */}
                <Box args={[0.3, 0.6, 0.3]}>
                  <meshStandardMaterial color="#374151" emissive="#1f2937" emissiveIntensity={0.2} />
                </Box>
                {/* Sensor Light */}
                <Sphere args={[0.1, 8, 8]} position={[0, 0.4, 0]}>
                  <meshStandardMaterial
                    color={i % 3 === 0 ? "#ef4444" : i % 3 === 1 ? "#f59e0b" : "#06b6d4"}
                    emissive={i % 3 === 0 ? "#dc2626" : i % 3 === 1 ? "#d97706" : "#0891b2"}
                    emissiveIntensity={0.8}
                  />
                </Sphere>
                {/* Antenna */}
                <Cylinder args={[0.02, 0.02, 0.5, 8]} position={[0, 0.8, 0]}>
                  <meshStandardMaterial color="#6b7280" />
                </Cylinder>
              </group>
            </Float>
          )
        })}

        {/* Data Transmission Lines */}
        {Array.from({ length: 6 }).map((_, i) => (
          <Float key={i} speed={2 + i * 0.2} rotationIntensity={0.1} floatIntensity={0.3}>
            <Box
              args={[0.03, 0.03, 4]}
              position={[Math.cos((i / 6) * Math.PI * 2) * 2, 0, Math.sin((i / 6) * Math.PI * 2) * 2]}
              rotation={[0, (i / 6) * Math.PI * 2, Math.PI / 2]}
            >
              <meshStandardMaterial
                color="#10b981"
                transparent
                opacity={0.5}
                emissive="#047857"
                emissiveIntensity={0.4}
              />
            </Box>
          </Float>
        ))}
      </group>
    )
  }

  // Web Developer Scene
  if (currentRole === "Web Developer") {
    return (
      <group ref={groupRef}>
        {/* Central Server */}
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
          <Box args={[1.5, 2, 0.8]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#1f2937" emissive="#374151" emissiveIntensity={0.3} />
          </Box>
          {/* Server Lights */}
          {Array.from({ length: 8 }).map((_, i) => (
            <Sphere key={i} args={[0.08, 8, 8]} position={[0.6, 0.8 - i * 0.2, 0.41]}>
              <meshStandardMaterial
                color={i % 2 === 0 ? "#10b981" : "#ef4444"}
                emissive={i % 2 === 0 ? "#047857" : "#dc2626"}
                emissiveIntensity={0.8}
              />
            </Sphere>
          ))}
        </Float>

        {/* Floating Web Pages */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i / 6) * Math.PI * 2
          const radius = 3.5
          return (
            <Float key={i} speed={1.2 + i * 0.15} rotationIntensity={0.4} floatIntensity={0.8}>
              <group
                position={[
                  Math.cos(angle + Date.now() * 0.0008) * radius,
                  Math.sin(i * 0.8) * 2,
                  Math.sin(angle + Date.now() * 0.0008) * radius,
                ]}
                rotation={[0, angle + Math.PI, 0]}
              >
                {/* Web Page */}
                <Box args={[1.2, 1.6, 0.05]}>
                  <meshStandardMaterial color="#374151" emissive="#1f2937" emissiveIntensity={0.2} />
                </Box>
                {/* Content Areas */}
                <Box args={[1, 0.3, 0.02]} position={[0, 0.5, 0.03]}>
                  <meshStandardMaterial color="#06b6d4" emissive="#0891b2" emissiveIntensity={0.4} />
                </Box>
                {Array.from({ length: 4 }).map((_, j) => (
                  <Box key={j} args={[0.8, 0.1, 0.01]} position={[0, 0.2 - j * 0.15, 0.04]}>
                    <meshStandardMaterial
                      color={j % 2 === 0 ? "#10b981" : "#f59e0b"}
                      emissive={j % 2 === 0 ? "#047857" : "#d97706"}
                      emissiveIntensity={0.3}
                    />
                  </Box>
                ))}
              </group>
            </Float>
          )
        })}

        {/* Code Streams */}
        {Array.from({ length: 12 }).map((_, i) => (
          <Float key={i} speed={2.5 + i * 0.1} rotationIntensity={0.6} floatIntensity={1}>
            <Box
              args={[0.05, 0.05, 0.3]}
              position={[(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 8]}
            >
              <meshStandardMaterial
                color={i % 3 === 0 ? "#ef4444" : i % 3 === 1 ? "#10b981" : "#f59e0b"}
                emissive={i % 3 === 0 ? "#dc2626" : i % 3 === 1 ? "#047857" : "#d97706"}
                emissiveIntensity={0.5}
                transparent
                opacity={0.8}
              />
            </Box>
          </Float>
        ))}
      </group>
    )
  }

  // Default fallback
  return <group ref={groupRef} />
}

export default function Portfolio() {
  const [currentRole, setCurrentRole] = useState("Data Scientist")

  const roles = [
    {
      title: "Data Scientist",
      icon: <Brain className="w-6 h-6" />,
      description: "AI & Machine Learning Expert",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      title: "Mobile Developer",
      icon: <Smartphone className="w-6 h-6" />,
      description: "Flutter & Android Specialist",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "IoT Developer",
      icon: <Wifi className="w-6 h-6" />,
      description: "Embedded Systems & IoT Solutions",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Web Developer",
      icon: <Globe className="w-6 h-6" />,
      description: "Full-Stack Web Applications",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const currentRoleData = roles.find((role) => role.title === currentRole) || roles[0]

  const skills = {
    "Programming Languages": ["Python", "R", "Kotlin", "Dart", "Java", "C"],
    "Data Science & AI": ["Pandas", "Scikit-learn", "TensorFlow", "Matplotlib", "Power BI"],
    "Mobile Development": ["Flutter", "Android Studio", "Firebase"],
    "Embedded Systems": ["Arduino", "ESP32", "Raspberry Pi", "VHDL"],
    Databases: ["MySQL", "SQLite", "PostgreSQL", "SQL Server"],
    "Tools & Methods": ["Git", "GitHub", "Agile", "UML", "Microsoft Office"],
    "Operating Systems": ["Windows", "Linux", "Yocto"],
    "Design Tools": ["Figma", "Canva", "Blender"],
  }

  const experiences = [
    {
      title: "Data Scientist (Internship)",
      company: "Limtic",
      period: "Feb 2024 – Jun 2024",
      description:
        "Developed AI models to classify and segment lung infections and COVID-19 using chest X-ray images. Applied deep learning with TensorFlow and Keras for automated medical image analysis.",
      icon: <Brain className="w-5 h-5" />,
      color: "purple",
    },
    {
      title: "Mobile Developer",
      company: "Neapolis Car",
      period: "Jul 2023 – Sep 2023",
      description:
        "Built mobile apps for car reservation and transaction management. Designed interfaces for clients and admins, including secure payment and real-time tracking.",
      icon: <Smartphone className="w-5 h-5" />,
      color: "blue",
    },
    {
      title: "Higher Technician in Electronics",
      company: "METROCAL",
      period: "Apr 2023 – May 2023",
      description:
        "Calibrated precision instruments to meet manufacturing standards. Ensured electronic equipment met technical specifications.",
      icon: <Cpu className="w-5 h-5" />,
      color: "green",
    },
    {
      title: "Mobile Developer (Internship)",
      company: "Slama Best Choice",
      period: "Feb 2022 – Jun 2022",
      description:
        "Developed mobile applications for event registration and real-time notifications. Designed UI for both clients and administrators.",
      icon: <Smartphone className="w-5 h-5" />,
      color: "cyan",
    },
    {
      title: "Web Developer (Internship)",
      company: "Siege STB",
      period: "Aug 2021 – Sep 2021",
      description:
        "Built a web app to extract and digitize ID card data using OCR. Automated and simplified data collection and processing.",
      icon: <Code className="w-5 h-5" />,
      color: "orange",
    },
  ]

  const projects = [
    {
      title: "Smart Room",
      type: "Freelance",
      description: "IoT-based room automation using ESP32, Flutter, and Django. Backend deployed on Heroku.",
      tech: ["ESP32", "Flutter", "Django", "Heroku"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Flow Controller",
      type: "ODC Hackathon",
      description: "Built a system to detect water levels and alert rescue services using ESP32 and Android.",
      tech: ["ESP32", "Android", "IoT"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Resto Reservation",
      type: "Academic Project",
      description: "Online restaurant ticket system using ESP32, CH-926, and Django.",
      tech: ["ESP32", "CH-926", "Django"],
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Control the Class",
      type: "Academic Project",
      description: "Classroom management and security system using ESP32, RC522, and Android.",
      tech: ["ESP32", "RC522", "Android"],
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const education = [
    {
      degree: "Professional Master's in Business Analytics & Data Science",
      institution: "Virtual University of Tunis",
      period: "Sep 2022 – Jun 2024",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      degree: "Bachelor's in Computer Science (Embedded & Mobile Systems)",
      institution: "Higher Institute of Technological Studies of Kairouan",
      period: "Sep 2019 – Jun 2022",
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ]

  const certifications = [
    "Internet of Things 2.0 – Cisco Networking Academy",
    "Soft Skills Training – ANETI",
    "3D Printing Training – El Fab Space Lac",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden min-h-screen flex items-center pt-16">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-20 z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - 3D Animation */}
              <div className="hidden lg:block h-96">
                <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
                  <ambientLight intensity={0.6} />
                  <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
                  <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8b5cf6" />
                  <spotLight position={[5, 5, 5]} intensity={1.2} angle={0.3} penumbra={0.5} color="#06b6d4" />
                  <ProfessionalSummary3D currentRole={currentRole} />
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    maxPolarAngle={Math.PI / 1.8}
                    minPolarAngle={Math.PI / 2.2}
                  />
                </Canvas>
              </div>

              {/* Right side - Content */}
              <div className="text-center lg:text-left">
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 mx-auto lg:mx-0 mb-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
                  WA
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  WASSIM AMDOUNI
                </h1>

                {/* Dynamic Job Title Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <div className={`p-4 bg-gradient-to-br ${currentRoleData.gradient} rounded-xl shadow-lg`}>
                      {currentRoleData.icon}
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white">{currentRole}</h2>
                  </div>
                  <p className="text-lg text-gray-300 mb-6">{currentRoleData.description}</p>

                  {/* Role Selection Buttons */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                    {roles.map((role) => (
                      <Button
                        key={role.title}
                        onClick={() => setCurrentRole(role.title)}
                        variant={currentRole === role.title ? "default" : "outline"}
                        className={`transition-all duration-300 ${
                          currentRole === role.title
                            ? `bg-gradient-to-r ${role.gradient} hover:scale-105 text-white shadow-lg border-0`
                            : "border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`}
                      >
                        {role.icon}
                        <span className="ml-2">{role.title}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                  Motivated professional with a strong background in business analytics, data science, mobile app
                  development, and embedded systems. Passionate about solving real-world problems using data-driven
                  insights and innovative applications.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Projects
                  </Button>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-gray-300">
                  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-3 rounded-xl border border-slate-700">
                    <MapPin className="w-4 h-4" />
                    <span>Tunis, Tunisia</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-3 rounded-xl border border-slate-700">
                    <Phone className="w-4 h-4" />
                    <span>+216 28 776 290</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-3 rounded-xl border border-slate-700">
                    <Mail className="w-4 h-4" />
                    <span>wassim.amdouni28@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-3 rounded-xl border border-slate-700">
                    <Linkedin className="w-4 h-4" />
                    <span>linkedin.com/in/wassim-amdouni</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <p className="text-gray-300 text-lg">Technologies and tools I work with</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card
                key={category}
                className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-purple-400 flex items-center gap-2">
                    {category === "Programming Languages" && <Code className="w-5 h-5" />}
                    {category === "Data Science & AI" && <Brain className="w-5 h-5" />}
                    {category === "Mobile Development" && <Smartphone className="w-5 h-5" />}
                    {category === "Embedded Systems" && <Cpu className="w-5 h-5" />}
                    {category === "Databases" && <Database className="w-5 h-5" />}
                    {![
                      "Programming Languages",
                      "Data Science & AI",
                      "Mobile Development",
                      "Embedded Systems",
                      "Databases",
                    ].includes(category) && <Award className="w-5 h-5" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-purple-600/20 text-purple-300 border-purple-500/30 hover:bg-purple-600/30 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
            <p className="text-gray-300 text-lg">My journey in tech and data science</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-${exp.color}-600/20 rounded-lg group-hover:scale-110 transition-transform`}>
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-purple-300 font-medium">
                        {exp.company} • {exp.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-300 text-lg">Some of my notable work and achievements</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-105 group overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Rocket className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                      {project.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-purple-600/20 text-purple-300 border-purple-500/30 hover:bg-purple-600/30 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Education & Certifications</h2>
            <p className="text-gray-300 text-lg">Academic background and professional development</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="p-2 bg-purple-600/20 rounded-lg">{edu.icon}</div>
                    <div>
                      <h3 className="text-white font-semibold">{edu.degree}</h3>
                      <p className="text-purple-300">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Work Together</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2" />
              wassim.amdouni28@gmail.com
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn Profile
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Wassim Amdouni. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
