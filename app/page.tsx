'use client'

import { useMemo, useState } from 'react'

type Project = {
  title: string
  category: string
  image: string
  description: string
  stack: string[]
  status: string
  link?: string
}

export default function PortfolioAnderEli() {
  const [soundOn, setSoundOn] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const stats = [
    { number: '6+', label: 'Proyectos técnicos' },
    { number: '15+', label: 'Tecnologías usadas' },
    { number: 'API', label: 'REST Backend' },
    { number: 'JR', label: 'Software Developer' }
  ]

  const technologies = [
    'Python', 'Flask', 'Java', 'JavaScript', 'Android Studio', 'MySQL',
    'MariaDB', 'SQLite', 'Git', 'GitHub', 'REST APIs', 'Linux VPS',
    'Nginx', 'Retrofit', 'HTML5', 'CSS3', 'Tailwind CSS', 'PDF/CSV',
    'NetBeans', 'SCRUM básico'
  ]

  const projects: Project[] = [
    {
      title: 'Punto de Venta Empresarial',
      category: 'Sistema Administrativo',
      image: '/screenshots/sistemaVenta.png',
      description:
        'Sistema POS con módulos de ventas, compras, inventario, proveedores, productos, cajas, usuarios, sucursales y devoluciones.',
      stack: ['Java', 'Swing', 'MySQL/MariaDB', 'NetBeans'],
      status: 'Proyecto real'
    },
    {
      title: 'Login Sistema de Ventas',
      category: 'Seguridad y Acceso',
      image: '/screenshots/login_SistemVenta.png',
      description:
        'Pantalla de autenticación para sistema administrativo con acceso controlado por usuario y conexión a base de datos.',
      stack: ['Java', 'Swing', 'Base de datos', 'Login'],
      status: 'Módulo funcional'
    },
    {
      title: 'Gestor Web de Productos',
      category: 'Aplicación Web',
      image: '/screenshots/web-productos.png',
      description:
        'Aplicación web con login, CRUD de productos, subida de imágenes, exportaciones PDF/Excel y despliegue en la nube.',
      stack: ['Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
      status: 'Web app'
    },
    {
      title: 'Sistema de Asistencia Escolar',
      category: 'Backend + Android',
      image: '/screenshots/asistencia.png',
      description:
        'Sistema para registrar estudiantes, tomar asistencia, generar QR, exportar reportes PDF/CSV y enviar notificaciones automáticas por Telegram.',
      stack: ['Flask', 'Android', 'MySQL', 'Retrofit', 'Telegram', 'VPS'],
      status: 'Agregar captura'
    },
    {
      title: 'API Comercializadora',
      category: 'Backend REST',
      image: '/screenshots/api.png',
      description:
        'API REST desarrollada en Python/Flask para conectar aplicación Android con base de datos, reportes, ventas, clientes y productos.',
      stack: ['Python', 'Flask', 'MySQL', 'Nginx', 'Linux'],
      status: 'Agregar captura'
    },
    {
      title: 'App Android Comercializadora',
      category: 'Mobile App',
      image: '/screenshots/android.png',
      description:
        'Aplicación Android conectada a API REST para consumo de datos, gestión comercial y operaciones desde dispositivo móvil.',
      stack: ['Android Studio', 'Java/Kotlin', 'Retrofit', 'API REST'],
      status: 'Agregar captura'
    }
  ]

  const services = [
    {
      title: 'Desarrollo Backend',
      description: 'APIs REST con Python, Flask y conexión a bases de datos relacionales.',
      icon: '⚙️'
    },
    {
      title: 'Aplicaciones Android',
      description: 'Apps móviles conectadas a servidores usando Retrofit y arquitectura cliente-servidor.',
      icon: '📱'
    },
    {
      title: 'Bases de Datos',
      description: 'Diseño y manejo de bases de datos MySQL, MariaDB y SQLite.',
      icon: '🗄️'
    },
    {
      title: 'Despliegue Web',
      description: 'Configuración básica de VPS Linux, Nginx, dominios y publicación de APIs.',
      icon: '🚀'
    }
  ]

  const timeline = [
    {
      year: '2026',
      title: 'Aplicación a Desarrollador Junior',
      text: 'Preparación de CV técnico, portfolio profesional y proyectos reales para oportunidades de desarrollo de software.'
    },
    {
      year: '2025 - Actualidad',
      title: 'Desarrollo Full Stack Independiente',
      text: 'Desarrollo de APIs REST, aplicaciones Android, sistemas comerciales, control de asistencia, reportes y despliegues en servidor.'
    },
    {
      year: 'Formación',
      title: 'Ingeniería en Sistemas',
      text: 'Formación universitaria en programación, estructuras de datos, bases de datos, lógica, administración de sistemas y desarrollo de software.'
    }
  ]

  const featuredProjects = useMemo(() => projects.slice(0, 3), [])

  function playClickSound() {
    if (!soundOn) return

    const audioContext = new AudioContext()
    const oscillator = audioContext.createOscillator()
    const gain = audioContext.createGain()

    oscillator.connect(gain)
    gain.connect(audioContext.destination)

    oscillator.frequency.value = 520
    gain.gain.value = 0.035

    oscillator.start()
    oscillator.stop(audioContext.currentTime + 0.08)
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden selection:bg-cyan-400 selection:text-black">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:46px_46px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050816]/40 to-[#050816]" />

        {[...Array(26)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${(i * 11) % 100}%`,
              animationDelay: `${i * 0.55}s`,
              animationDuration: `${7 + (i % 7)}s`
            }}
          />
        ))}
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-2xl">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#inicio" className="font-black text-xl tracking-tight">
            Ander<span className="text-cyan-400">.dev</span>
          </a>

          <div className="hidden md:flex gap-7 text-sm text-gray-300">
            <a href="#proyectos" className="hover:text-cyan-300 transition">Proyectos</a>
            <a href="#stack" className="hover:text-cyan-300 transition">Stack</a>
            <a href="#experiencia" className="hover:text-cyan-300 transition">Experiencia</a>
            <a href="#contacto" className="hover:text-cyan-300 transition">Contacto</a>
          </div>

          <button
            onClick={() => setSoundOn(!soundOn)}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 hover:border-cyan-400/40 transition"
          >
            {soundOn ? 'Sound ON' : 'Sound OFF'}
          </button>
        </nav>
      </header>

      <section id="inicio" className="max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="fade-in">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-200 shadow-lg shadow-cyan-500/10">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              Disponible para puesto de Desarrollador Junior
            </div>

            <h1 className="mt-8 text-6xl md:text-8xl font-black leading-none tracking-tight">
              Ander Eli
              <span className="block gradient-text">Developer</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-gray-300">
              Estudiante de Ingeniería en Sistemas con experiencia práctica creando
              APIs REST, aplicaciones Android, sistemas administrativos, bases de datos
              y despliegues en servidor.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#proyectos" onClick={playClickSound} className="btn-primary">Ver proyectos</a>
              <a href="mailto:albertelias924@gmail.com" onClick={playClickSound} className="btn-secondary">Contactarme</a>
              <a href="https://github.com/Ander2024-EM" target="_blank" onClick={playClickSound} className="btn-secondary">GitHub</a>
            </div>

            <div className="mt-10 flex flex-wrap gap-5 text-sm text-gray-400">
              <span>📍 Coatepeque, Guatemala</span>
              <span>💻 Backend + Android</span>
              <span>⚡ Aprendizaje rápido</span>
            </div>
          </div>

          <div className="glass-card p-8 lg:p-10 fade-in delay-1 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <p className="text-sm text-gray-400">Perfil técnico</p>
                <h2 className="mt-2 text-3xl font-black">Junior Software Developer</h2>
              </div>
              <div className="h-16 w-16 rounded-3xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-3xl">
                👨‍💻
              </div>
            </div>

            <div className="relative mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl bg-white/5 border border-white/10 p-5 hover-card">
                  <h3 className="text-3xl font-black text-cyan-300">{stat.number}</h3>
                  <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <p className="text-sm text-cyan-200 font-semibold">Actualmente desarrollando</p>
              <p className="mt-3 text-gray-300 leading-relaxed">
                Sistemas Android conectados a APIs Flask para control de asistencia,
                inventario, ventas y reportes empresariales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="glass-card p-4 overflow-hidden">
          <div className="flex gap-5 animate-marquee whitespace-nowrap text-gray-300">
            {[...technologies, ...technologies].map((tech, index) => (
              <span key={`${tech}-${index}`} className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeader eyebrow="Servicios" title="Lo que puedo aportar" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service) => (
            <div key={service.title} className="glass-card p-6 hover-card">
              <div className="text-4xl mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-4 text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="proyectos" className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeader eyebrow="Portafolio" title="Proyectos destacados" />

        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => {
                playClickSound()
                setSelectedProject(project)
              }}
            />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeader eyebrow="Más trabajos" title="Todos mis proyectos" />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={`all-${project.title}`}
              project={project}
              onClick={() => {
                playClickSound()
                setSelectedProject(project)
              }}
            />
          ))}
        </div>
      </section>

      <section id="stack" className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeader eyebrow="Tecnologías" title="Stack tecnológico" />
        <div className="mt-12 flex flex-wrap gap-4">
          {technologies.map((tech) => (
            <span key={tech} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-gray-200 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section id="experiencia" className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeader eyebrow="Trayectoria" title="Timeline profesional" />
        <div className="mt-14 space-y-6">
          {timeline.map((item) => (
            <div key={item.title} className="grid md:grid-cols-[190px_1fr] gap-6 glass-card p-7 hover-card">
              <div className="text-cyan-300 font-black text-xl">{item.year}</div>
              <div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="glass-card p-8 md:p-12">
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm">Terminal</p>
          <div className="mt-6 rounded-3xl bg-black/60 border border-white/10 p-6 font-mono text-sm text-green-300 shadow-2xl">
            <p>&gt; initializing profile...</p>
            <p>&gt; loading backend skills: Flask, REST APIs, MySQL</p>
            <p>&gt; loading mobile skills: Android, Retrofit</p>
            <p>&gt; loading deployment skills: Linux VPS, Nginx</p>
            <p className="text-cyan-300">&gt; status: ready for Junior Developer role</p>
          </div>
        </div>
      </section>

      <section id="contacto" className="max-w-7xl mx-auto px-6 py-24">
        <div className="glass-card p-8 md:p-14">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm">Contacto</p>
              <h2 className="mt-4 text-5xl font-black leading-tight">¿Hablamos?</h2>
              <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                Estoy listo para aplicar como Desarrollador Junior y seguir creciendo
                dentro de un equipo profesional de desarrollo de software.
              </p>
              <div className="mt-8 space-y-3 text-gray-300">
                <p>📧 albertelias924@gmail.com</p>
                <p>💻 github.com/Ander2024-EM</p>
                <p>📍 Guatemala</p>
              </div>
            </div>

            <form action="https://formspree.io/f/TU_ID_AQUI" method="POST" className="space-y-4">
              <input name="name" placeholder="Nombre" className="input" required />
              <input name="email" type="email" placeholder="Correo" className="input" required />
              <textarea name="message" placeholder="Mensaje" rows={5} className="input resize-none" required />
              <button type="submit" onClick={playClickSound} className="btn-primary w-full">Enviar mensaje</button>
              <p className="text-xs text-gray-500">
                Para activar este formulario, cambia TU_ID_AQUI por tu ID de Formspree.
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 Ander Eli — Junior Software Developer
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl p-6 flex items-center justify-center" onClick={() => setSelectedProject(null)}>
          <div className="max-w-5xl w-full glass-card overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="h-[420px] bg-gradient-to-br from-cyan-400/20 to-blue-600/20">
              <img src={selectedProject.image} alt={selectedProject.title} className="h-full w-full object-contain" />
            </div>
            <div className="p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-cyan-300 font-semibold">{selectedProject.category}</p>
                  <h3 className="mt-2 text-4xl font-black">{selectedProject.title}</h3>
                  <p className="mt-4 text-gray-300 leading-relaxed">{selectedProject.description}</p>
                </div>
                <button onClick={() => setSelectedProject(null)} className="btn-secondary">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        html { scroll-behavior: smooth; }
        .gradient-text {
          background: linear-gradient(90deg, #22d3ee, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .glass-card {
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.055);
          backdrop-filter: blur(22px);
          border-radius: 2rem;
          box-shadow: 0 24px 80px rgba(0,0,0,0.28);
        }
        .hover-card {
          transition: transform .35s ease, border-color .35s ease, background .35s ease;
        }
        .hover-card:hover {
          transform: translateY(-8px);
          border-color: rgba(34,211,238,0.42);
          background: rgba(34,211,238,0.075);
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          background: #22d3ee;
          color: #020617;
          padding: 0.95rem 1.4rem;
          font-weight: 900;
          box-shadow: 0 20px 45px rgba(34,211,238,.18);
          transition: .3s ease;
        }
        .btn-primary:hover { background: #67e8f9; transform: translateY(-2px); }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.04);
          padding: 0.95rem 1.4rem;
          font-weight: 800;
          transition: .3s ease;
        }
        .btn-secondary:hover { border-color: rgba(34,211,238,.5); background: rgba(34,211,238,.08); transform: translateY(-2px); }
        .input {
          width: 100%;
          border-radius: 1rem;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.06);
          padding: 1rem 1.1rem;
          color: white;
          outline: none;
        }
        .input::placeholder { color: rgba(255,255,255,.45); }
        .input:focus { border-color: rgba(34,211,238,.55); }
        .particle {
          position: absolute;
          top: -10px;
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: rgba(34,211,238,.8);
          box-shadow: 0 0 18px rgba(34,211,238,.9);
          animation: floatDown linear infinite;
        }
        @keyframes floatDown {
          from { transform: translateY(-20px); opacity: 0; }
          15% { opacity: 1; }
          to { transform: translateY(110vh); opacity: 0; }
        }
        .fade-in { animation: fadeIn .8s ease both; }
        .delay-1 { animation-delay: .18s; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  )
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <article className="glass-card overflow-hidden hover-card group cursor-pointer" onClick={onClick}>
      <div className="h-52 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border-b border-white/10 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover opacity-90 group-hover:scale-105 transition duration-700"
        />
        <div className="absolute top-4 left-4 rounded-full bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 text-xs text-cyan-200">
          {project.status}
        </div>
      </div>
      <div className="p-7">
        <p className="text-sm text-cyan-300 font-semibold">{project.category}</p>
        <h3 className="mt-3 text-2xl font-black leading-tight">{project.title}</h3>
        <p className="mt-4 text-gray-400 leading-relaxed">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="text-xs rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-200 px-3 py-1">
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm mb-4">{eyebrow}</p>
      <h2 className="text-4xl md:text-6xl font-black tracking-tight">{title}</h2>
    </div>
  )
}
