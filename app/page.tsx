'use client'

import { useMemo, useState } from 'react'

type GalleryItem = {
  src: string
  title: string
  description: string
}

type Project = {
  title: string
  category: string
  image: string
  description: string
  stack: string[]
  status: string
  objective: string
  architecture: string
  features: string[]
  gallery: GalleryItem[]
  link?: string
}

export default function PortfolioAnderEli() {
  const [soundOn, setSoundOn] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [activeFilter, setActiveFilter] = useState('Todos')

  const stats = [
    { number: '5+', label: 'Proyectos reales' },
    { number: '20+', label: 'Tecnologías usadas' },
    { number: 'API', label: 'REST Backend' },
    { number: 'JR', label: 'Software Developer' }
  ]

  const technologies = [
    'Python', 'Flask', 'Java', 'JavaScript', 'Android Studio', 'MySQL',
    'MariaDB', 'SQLite', 'Git', 'GitHub', 'REST APIs', 'Linux VPS',
    'Nginx', 'Retrofit', 'HTML5', 'CSS3', 'Tailwind CSS', 'PDF/CSV',
    'NetBeans', 'Java Swing', 'JDBC', 'SCRUM básico'
  ]

  const projects: Project[] = [
    {
      title: 'Sistema AVL de Estudiantes',
      category: 'Java Swing + Estructuras de Datos',
      image: '/screenshots/ArbolAVL/PanelInicio.png',
      description:
        'Sistema de gestión de estudiantes basado en Árbol AVL. Permite registrar estudiantes, visualizar el árbol balanceado, consultar recorridos, generar reportes y usar un asistente inteligente integrado.',
      stack: ['Java', 'Java Swing', 'Árbol AVL', 'MySQL/MariaDB', 'PDF', 'CSV', 'IA integrada'],
      status: 'Sistema académico funcional',
      objective:
        'Construí este proyecto para aplicar estructuras de datos en un sistema visual, mostrando cómo un Árbol AVL puede organizar información estudiantil de forma ordenada y eficiente.',
      architecture:
        'Java Swing → Árbol AVL → Base de datos → Reportes PDF/CSV/TXT → Asistente integrado',
      features: [
        'Registro, búsqueda, modificación y eliminación de estudiantes.',
        'Visualización gráfica del Árbol AVL.',
        'Recorridos Inorden, Preorden y Postorden.',
        'Generación de reportes PDF, CSV y TXT.',
        'Configuración visual en modo claro y oscuro.',
        'Asistente inteligente integrado para explicar el sistema.'
      ],
      gallery: [
        {
          src: '/screenshots/ArbolAVL/PanelInicio.png',
          title: 'Panel principal',
          description:
            'Pantalla inicial con acceso a estudiantes, árbol AVL, recorridos, reportes y configuración general.'
        },
        {
          src: '/screenshots/ArbolAVL/Estudiantes.png',
          title: 'Gestión de estudiantes',
          description:
            'Módulo para administrar estudiantes, cargar datos, buscar registros y mantener la información ordenada.'
        },
        {
          src: '/screenshots/ArbolAVL/MostrarArbolAVL.png',
          title: 'Visualización del árbol',
          description:
            'Representación visual del Árbol AVL, mostrando nodos, estructura y balanceo.'
        },
        {
          src: '/screenshots/ArbolAVL/MostrarOrdenes.png',
          title: 'Recorridos del árbol',
          description:
            'Módulo para mostrar recorridos Inorden, Preorden y Postorden.'
        },
        {
          src: '/screenshots/ArbolAVL/DescargarRegistros.png',
          title: 'Descarga de registros',
          description:
            'Centro de reportes para generar archivos PDF, CSV y TXT.'
        },
        {
          src: '/screenshots/ArbolAVL/ConfiguracionesModoClaro.png',
          title: 'Configuración modo claro',
          description:
            'Panel de configuración para cambiar opciones visuales y de actualización.'
        },
        {
          src: '/screenshots/ArbolAVL/Configuraciones_ModoOscuro.png',
          title: 'Configuración modo oscuro',
          description:
            'Versión oscura de la configuración del sistema.'
        },
        {
          src: '/screenshots/ArbolAVL/MostrarRecorridodelaAPPconIA.png',
          title: 'Asistente inteligente',
          description:
            'Asistente integrado que explica módulos y ayuda al usuario dentro del sistema.'
        }
      ]
    },
    {
      title: 'Sistema de Asistencia Escolar',
      category: 'Android + Flask + Telegram',
      image: '/screenshots/Asistencia/ModuloPrincipal_asistencia.jpg',
      description:
        'Aplicación móvil para registrar estudiantes, tomar asistencia, descargar registros y enviar notificaciones automáticas mediante Telegram.',
      stack: ['Android Studio', 'Flask', 'MySQL', 'Retrofit', 'Telegram Bot', 'CSV'],
      status: 'App móvil conectada a API',
      objective:
        'Desarrollé este sistema para facilitar el control de asistencia escolar desde una aplicación móvil conectada a un backend propio.',
      architecture:
        'Android → Retrofit → API Flask → MySQL → Telegram Bot → Reportes CSV',
      features: [
        'Inicio de sesión desde la app móvil.',
        'Registro de estudiantes.',
        'Gestión de estudiantes con edición y eliminación.',
        'Búsqueda de registros por nombre, código o fecha.',
        'Descarga de registros en CSV.',
        'Notificaciones automáticas mediante Telegram.'
      ],
      gallery: [
        {
          src: '/screenshots/Asistencia/login_asistencia.jpg',
          title: 'Login móvil',
          description:
            'Pantalla de acceso al sistema con diseño moderno.'
        },
        {
          src: '/screenshots/Asistencia/ModuloPrincipal_asistencia.jpg',
          title: 'Panel principal',
          description:
            'Menú principal con acceso a registro, asistencia, descarga y gestión de estudiantes.'
        },
        {
          src: '/screenshots/Asistencia/crearEstudiante_Asistencia.jpg',
          title: 'Registro de estudiante',
          description:
            'Formulario para guardar estudiante con código, nombre, edad y teléfono.'
        },
        {
          src: '/screenshots/Asistencia/GestionEstudiante_Asitencia.jpg',
          title: 'Gestión de estudiantes',
          description:
            'Listado de estudiantes con opciones para editar y eliminar.'
        },
        {
          src: '/screenshots/Asistencia/Buscar_Asistencia.jpg',
          title: 'Búsqueda de asistencia',
          description:
            'Módulo para buscar registros y descargar información por fecha o estudiante.'
        },
        {
          src: '/screenshots/Asistencia/boot_Asitencia.jpg',
          title: 'Notificación Telegram',
          description:
            'Mensaje automático enviado al registrar asistencia.'
        }
      ]
    },
    {
      title: 'Comercializadora Los 3 Hermanos',
      category: 'Android POS + API REST',
      image: '/screenshots/Comercializadora/PanelInicio1_Comercializadora.jpg',
      description:
        'Sistema comercial móvil para ventas, inventario, clientes, productos, proveedores, tickets, historial y reportes.',
      stack: ['Android Studio', 'Retrofit', 'Flask', 'MySQL', 'Nginx', 'Linux VPS', 'PDF'],
      status: 'Sistema comercial móvil',
      objective:
        'Mi objetivo fue construir una app comercial completa para apoyar la administración de productos, ventas, clientes y reportes de una comercializadora.',
      architecture:
        'Android → Retrofit → API Flask → MySQL → VPS Linux → Reportes PDF',
      features: [
        'Login empresarial.',
        'Panel ejecutivo con ventas, clientes, productos y stock bajo.',
        'Gestión de productos con imágenes, precios y stock.',
        'Gestión de clientes y proveedores.',
        'Ventas con carrito, total, pago y cambio.',
        'Ticket digital con opción de PDF e impresión.',
        'Historial de ventas con filtros.',
        'Catálogo comercial exportado en PDF.'
      ],
      gallery: [
        {
          src: '/screenshots/Comercializadora/Login_Comercializadora.jpg',
          title: 'Login comercial',
          description:
            'Pantalla de inicio de sesión para acceder al sistema.'
        },
        {
          src: '/screenshots/Comercializadora/PanelInicio1_Comercializadora.jpg',
          title: 'Panel ejecutivo',
          description:
            'Resumen con ventas del día, productos, clientes, stock bajo y gráfica semanal.'
        },
        {
          src: '/screenshots/Comercializadora/PanelIncio2_Comercializadora.jpg',
          title: 'Accesos rápidos',
          description:
            'Accesos directos a ventas, productos, clientes, proveedores e historial.'
        },
        {
          src: '/screenshots/Comercializadora/CrearProductos1_Comercializadora.jpg',
          title: 'Nuevo producto',
          description:
            'Formulario para crear productos con imagen, código, nombre y escaneo.'
        },
        {
          src: '/screenshots/Comercializadora/CrearProductos2_Comercializadora.jpg',
          title: 'Datos del producto',
          description:
            'Registro de marca, categoría, proveedor, costos y precios.'
        },
        {
          src: '/screenshots/Comercializadora/CrearProductos3_Comercializadora.jpg',
          title: 'Inventario del producto',
          description:
            'Control de stock por cajas, unidades, stock mínimo y guardado.'
        },
        {
          src: '/screenshots/Comercializadora/VerProductos_Comercializadora.jpg',
          title: 'Listado de productos',
          description:
            'Vista de productos con precio por unidad, caja y stock disponible.'
        },
        {
          src: '/screenshots/Comercializadora/CrearClientes.jpg',
          title: 'Crear clientes',
          description:
            'Formulario para registrar clientes dentro del sistema.'
        },
        {
          src: '/screenshots/Comercializadora/VerClientes.jpg',
          title: 'Ver clientes',
          description:
            'Listado de clientes registrados en la aplicación.'
        },
        {
          src: '/screenshots/Comercializadora/VenderProducto_Comercializadora.jpg',
          title: 'Venta POS',
          description:
            'Carrito de venta con cantidad, subtotal, efectivo recibido, total y cambio.'
        },
        {
          src: '/screenshots/Comercializadora/TicketVenta_Comercializadora.jpg',
          title: 'Ticket de venta',
          description:
            'Ticket generado con productos, cantidad, pago y total.'
        },
        {
          src: '/screenshots/Comercializadora/VerTicketVenta.jpg',
          title: 'Ticket PDF',
          description:
            'Vista de ticket comercial con opción de guardar e imprimir.'
        },
        {
          src: '/screenshots/Comercializadora/VerRegistroVentas.jpg',
          title: 'Historial de ventas',
          description:
            'Listado de ventas con filtros por fecha y búsqueda por ticket.'
        },
        {
          src: '/screenshots/Comercializadora/CatalogoProductosPDF_Comercializadora.jpg',
          title: 'Catálogo PDF',
          description:
            'Catálogo de productos exportado en PDF.'
        }
      ]
    },
    {
      title: 'Sistema de Venta de Escritorio',
      category: 'Java Swing + MySQL',
      image: '/screenshots/SistemaVenta/sistemaVenta.png',
      description:
        'Sistema de escritorio para punto de venta con módulos de ventas, compras, inventario, proveedores, productos, devoluciones, sucursales, cajas y usuarios.',
      stack: ['Java', 'Swing', 'JDBC', 'MySQL/MariaDB', 'NetBeans'],
      status: 'POS escritorio',
      objective:
        'Este proyecto me permitió construir lógica administrativa completa: ventas, inventario, compras, devoluciones, roles, usuarios, cajas y sucursales.',
      architecture:
        'Java Swing → JDBC → MySQL/MariaDB → Inventario → Ventas → Reportes',
      features: [
        'Login con usuario, rol, sucursal y caja.',
        'Nueva venta con productos, cantidades, pago y cambio.',
        'Inventario por sucursal.',
        'Registro de productos, proveedores y compras.',
        'Control de devoluciones.',
        'Administración de usuarios, roles, cajas y sucursales.',
        'Historial de ventas.'
      ],
      gallery: [
        {
          src: '/screenshots/SistemaVenta/Login1.png',
          title: 'Login con caja',
          description:
            'Inicio de sesión con correo, contraseña y selección de caja.'
        },
        {
          src: '/screenshots/SistemaVenta/Login2.png',
          title: 'Acceso autorizado',
          description:
            'Mensaje de bienvenida con usuario, sucursal y caja seleccionada.'
        },
        {
          src: '/screenshots/SistemaVenta/sistemaVenta.png',
          title: 'Panel principal',
          description:
            'Menú lateral con acceso a todos los módulos administrativos.'
        },
        {
          src: '/screenshots/SistemaVenta/NuevaVenta.png',
          title: 'Nueva venta',
          description:
            'Módulo POS para agregar artículos, calcular total, recibir pago y cambio.'
        },
        {
          src: '/screenshots/SistemaVenta/ventas.png',
          title: 'Historial de ventas',
          description:
            'Tabla de ventas con fecha, sucursal, caja, usuario, total y estado.'
        },
        {
          src: '/screenshots/SistemaVenta/Inventario.png',
          title: 'Inventario',
          description:
            'Control de existencias y stock mínimo por producto.'
        },
        {
          src: '/screenshots/SistemaVenta/CrearProductos.png',
          title: 'Productos',
          description:
            'CRUD de productos con categoría, proveedor, unidad de medida y precios.'
        },
        {
          src: '/screenshots/SistemaVenta/Compra.png',
          title: 'Compras',
          description:
            'Registro de compras por proveedor, factura, cantidad y total.'
        },
        {
          src: '/screenshots/SistemaVenta/Proveedores.png',
          title: 'Proveedores',
          description:
            'Administración de proveedores con NIT, teléfono, dirección y estado.'
        },
        {
          src: '/screenshots/SistemaVenta/Devoluciones.png',
          title: 'Devoluciones',
          description:
            'Control de devoluciones con venta asociada, motivo y acción tomada.'
        },
        {
          src: '/screenshots/SistemaVenta/Sucursales.png',
          title: 'Sucursales',
          description:
            'Gestión de sucursales con dirección, teléfono y estado.'
        },
        {
          src: '/screenshots/SistemaVenta/cahas.png',
          title: 'Cajas',
          description:
            'Administración de cajas por sucursal y estado.'
        },
        {
          src: '/screenshots/SistemaVenta/Usuarios.png',
          title: 'Usuarios',
          description:
            'Gestión de usuarios con nombre, correo, rol, sucursal y estado.'
        }
      ]
    },
    {
      title: 'Gestor Web de Productos',
      category: 'Aplicación Web',
      image: '/screenshots/WebProductos/web-productos.png',
      description:
        'Aplicación web para gestionar productos con login, carga de imágenes, búsqueda, filtros, exportación, comentarios y control de estado.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Flask/Python', 'SQLite/MySQL'],
      status: 'Web app',
      objective:
        'Lo hice para practicar desarrollo web completo con autenticación, formularios, manejo de imágenes, filtros y comentarios por producto.',
      architecture:
        'Frontend Web → Backend → Base de datos → Imágenes → Comentarios → Exportación',
      features: [
        'Login de usuario.',
        'Agregar productos con nombre, precio e imagen.',
        'Buscar, filtrar y ordenar productos.',
        'Editar, deshabilitar y eliminar productos.',
        'Sistema de comentarios por producto.',
        'Exportación de datos.'
      ],
      gallery: [
        {
          src: '/screenshots/WebProductos/login-web-productos.png',
          title: 'Login web',
          description:
            'Inicio de sesión para acceder al panel administrativo.'
        },
        {
          src: '/screenshots/WebProductos/web-productos.png',
          title: 'Panel de productos',
          description:
            'Gestión de productos con imagen, precio, estado, comentarios, filtros y acciones.'
        }
      ]
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
      title: 'Sistemas Administrativos',
      description: 'Sistemas de ventas, inventario, asistencia, usuarios, reportes y gestión empresarial.',
      icon: '🧩'
    },
    {
      title: 'Bases de Datos',
      description: 'Diseño y manejo de bases de datos MySQL, MariaDB y SQLite.',
      icon: '🗄️'
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

  const filters = ['Todos', 'Android', 'Java Swing', 'Web', 'Backend']
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Todos') return projects

    return projects.filter((project) => {
      const text = `${project.title} ${project.category} ${project.stack.join(' ')}`.toLowerCase()
      return text.includes(activeFilter.toLowerCase())
    })
  }, [activeFilter])

  const featuredProjects = useMemo(() => projects.slice(0, 3), [])
  const currentGalleryItem = selectedProject?.gallery[selectedImageIndex]

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

  function openProject(project: Project) {
    playClickSound()
    setSelectedProject(project)
    setSelectedImageIndex(0)
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
              <a href="https://wa.me/50254266873" target="_blank" rel="noopener noreferrer" onClick={playClickSound} className="btn-secondary">WhatsApp</a>
              <a href="mailto:albertelias924@gmail.com" onClick={playClickSound} className="btn-secondary">Correo</a>
              <a href="https://github.com/Ander2024-EM" target="_blank" rel="noopener noreferrer" onClick={playClickSound} className="btn-secondary">GitHub</a>
            </div>

            <div className="mt-10 flex flex-wrap gap-5 text-sm text-gray-400">
              <span>📍 Coatepeque, Guatemala</span>
              <span>💻 Backend + Android + Web</span>
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
            <ProjectCard key={project.title} project={project} onClick={() => openProject(project)} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeader eyebrow="Más trabajos" title="Todos mis proyectos" />

        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm transition ${
                activeFilter === filter
                  ? 'bg-cyan-400 text-black font-black'
                  : 'border border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={`all-${project.title}`} project={project} onClick={() => openProject(project)} />
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
          <div className="mt-6 rounded-3xl bg-black/60 border border-white/10 p-6 font-mono text-sm text-green-300 shadow-2xl overflow-x-auto">
            <p>&gt; initializing profile...</p>
            <p>&gt; loading backend skills: Flask, REST APIs, MySQL</p>
            <p>&gt; loading mobile skills: Android, Retrofit</p>
            <p>&gt; loading desktop skills: Java Swing, JDBC, POS</p>
            <p>&gt; loading deployment skills: Linux VPS, Nginx</p>
            <p className="text-cyan-300">&gt; status: ready for Junior Developer role</p>
          </div>
        </div>
      </section>

      <section id="contacto" className="max-w-7xl mx-auto px-6 py-24">
        <div className="glass-card p-8 md:p-14 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

          <div className="relative z-10">
            <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm">Contacto</p>

            <h2 className="mt-4 text-5xl md:text-6xl font-black leading-tight">
              Trabajemos juntos
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-3xl">
              Estoy disponible para oportunidades como Desarrollador Junior,
              proyectos de software, aplicaciones Android, APIs REST, sistemas administrativos
              y soluciones empresariales.
            </p>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <a
                href="https://wa.me/50254266873"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="group rounded-3xl border border-green-500/20 bg-green-500/10 p-8 hover:bg-green-500/20 transition duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="text-5xl">💬</div>
                  <div>
                    <p className="text-green-300 text-sm uppercase tracking-widest">WhatsApp</p>
                    <h3 className="text-3xl font-black mt-2 group-hover:text-green-300 transition">
                      5426-6873
                    </h3>
                    <p className="text-gray-400 mt-2">
                      Haz clic para escribirme directamente.
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="mailto:albertelias924@gmail.com"
                onClick={playClickSound}
                className="group rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8 hover:bg-cyan-400/20 transition duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="text-5xl">📧</div>
                  <div>
                    <p className="text-cyan-300 text-sm uppercase tracking-widest">Correo electrónico</p>
                    <h3 className="text-xl md:text-2xl font-black mt-2 break-all group-hover:text-cyan-300 transition">
                      albertelias924@gmail.com
                    </h3>
                    <p className="text-gray-400 mt-2">
                      Disponible para oportunidades y proyectos.
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="https://github.com/Ander2024-EM"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="btn-secondary"
              >
                GitHub
              </a>

              <a href="#proyectos" onClick={playClickSound} className="btn-primary">
                Ver proyectos
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 Ander Eli — Junior Software Developer
      </footer>

      {selectedProject && currentGalleryItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-xl p-4 md:p-6 flex items-center justify-center"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-w-7xl w-full max-h-[94vh] glass-card overflow-hidden grid lg:grid-cols-[1.25fr_0.75fr]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-br from-cyan-400/10 to-blue-600/10 p-4 md:p-6 overflow-y-auto">
              <div className="rounded-3xl bg-black/40 border border-white/10 overflow-hidden min-h-[320px] md:h-[560px] flex items-center justify-center">
                <img
                  src={currentGalleryItem.src}
                  alt={currentGalleryItem.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="mt-5 grid grid-cols-3 md:grid-cols-5 gap-3">
                {selectedProject.gallery.map((item, index) => (
                  <button
                    key={item.src}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`rounded-2xl overflow-hidden border transition bg-white/5 h-20 ${
                      selectedImageIndex === index ? 'border-cyan-400' : 'border-white/10 hover:border-cyan-400/50'
                    }`}
                  >
                    <img src={item.src} alt={item.title} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-cyan-300 font-semibold">{selectedProject.category}</p>
                  <h3 className="mt-2 text-3xl md:text-5xl font-black leading-tight">{selectedProject.title}</h3>
                </div>
                <button onClick={() => setSelectedProject(null)} className="btn-secondary shrink-0">
                  Cerrar
                </button>
              </div>

              <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                <p className="text-sm text-cyan-200 font-bold">Recorrido actual</p>
                <h4 className="mt-2 text-2xl font-black">{currentGalleryItem.title}</h4>
                <p className="mt-3 text-gray-300 leading-relaxed">{currentGalleryItem.description}</p>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-black">¿Qué hace?</h4>
                <p className="mt-3 text-gray-400 leading-relaxed">{selectedProject.description}</p>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-black">Objetivo</h4>
                <p className="mt-3 text-gray-400 leading-relaxed">{selectedProject.objective}</p>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-black">Arquitectura</h4>
                <p className="mt-3 rounded-2xl border border-white/10 bg-black/40 p-4 font-mono text-sm text-green-300 overflow-x-auto">
                  {selectedProject.architecture}
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-black">Funciones principales</h4>
                <ul className="mt-4 space-y-3 text-gray-300">
                  {selectedProject.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="text-cyan-300">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-black">Tecnologías</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.stack.map((item) => (
                    <span key={item} className="text-xs rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-200 px-3 py-1">
                      {item}
                    </span>
                  ))}
                </div>
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

        .btn-primary:hover {
          background: #67e8f9;
          transform: translateY(-2px);
        }

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

        .btn-secondary:hover {
          border-color: rgba(34,211,238,.5);
          background: rgba(34,211,238,.08);
          transform: translateY(-2px);
        }

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
          from {
            transform: translateY(-20px);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          to {
            transform: translateY(110vh);
            opacity: 0;
          }
        }

        .fade-in {
          animation: fadeIn .8s ease both;
        }

        .delay-1 {
          animation-delay: .18s;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-marquee {
          animation: marquee 28s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  )
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <article className="glass-card overflow-hidden hover-card group cursor-pointer" onClick={onClick}>
      <div className="h-56 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border-b border-white/10 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover opacity-90 group-hover:scale-105 transition duration-700"
        />

        <div className="absolute top-4 left-4 rounded-full bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 text-xs text-cyan-200">
          {project.status}
        </div>

        <div className="absolute bottom-4 right-4 rounded-full bg-cyan-400 text-black px-4 py-2 text-xs font-black opacity-0 group-hover:opacity-100 transition">
          Ver recorrido
        </div>
      </div>

      <div className="p-7">
        <p className="text-sm text-cyan-300 font-semibold">{project.category}</p>
        <h3 className="mt-3 text-2xl font-black leading-tight">{project.title}</h3>
        <p className="mt-4 text-gray-400 leading-relaxed">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((item) => (
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