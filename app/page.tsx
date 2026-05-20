'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  Mail,
  Menu,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Server,
  Smartphone,
  Terminal,
  Volume2,
  VolumeX,
  X,
  Zap
} from 'lucide-react'

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
  productModule?: {
    title: string
    summary: string
    highlights: {
      label: string
      text: string
    }[]
    workflow: string[]
  }
}

type Service = {
  title: string
  description: string
  icon: LucideIcon
}

const stats = [
  { number: '5+', label: 'Proyectos reales' },
  { number: '20+', label: 'Tecnologías usadas' },
  { number: 'API', label: 'REST Backend' },
  { number: 'JR', label: 'Software Developer' }
]

const technologies = [
  'Python',
  'Flask',
  'Java',
  'JavaScript',
  'Android Studio',
  'MySQL',
  'MariaDB',
  'SQLite',
  'Git',
  'GitHub',
  'REST APIs',
  'Linux VPS',
  'Nginx',
  'Retrofit',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'PDF/CSV',
  'NetBeans',
  'Java Swing',
  'JDBC',
  'SCRUM básico'
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
      'Aplicación web administrativa para manejar un catálogo de productos con autenticación, imágenes, precios, estados, búsqueda, filtros, comentarios y exportación.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Flask/Python', 'SQLite/MySQL'],
    status: 'Módulo de productos',
    objective:
      'Lo desarrollé para practicar un flujo CRUD completo: registrar productos, mantener un catálogo visual, consultar información rápido y dejar acciones listas para operar inventario básico.',
    architecture:
      'Login → Panel de productos → CRUD → Búsqueda/Filtros → Comentarios → Exportación',
    features: [
      'Inicio de sesión para proteger el panel administrativo.',
      'Registro de productos con nombre, precio, imagen y estado.',
      'Catálogo visual con tarjetas de producto, acciones rápidas e información clave.',
      'Búsqueda, filtros y ordenamiento para encontrar productos con menos clics.',
      'Edición, deshabilitación y eliminación desde el mismo panel.',
      'Comentarios por producto para dejar observaciones operativas.',
      'Exportación de información para reportes o respaldo.'
    ],
    productModule: {
      title: 'Módulo de productos completo',
      summary:
        'El flujo queda presentado como un módulo administrativo real: entrada protegida, alta de productos, consulta del catálogo y acciones de mantenimiento sobre cada registro.',
      highlights: [
        {
          label: 'Registro',
          text: 'Formulario pensado para capturar nombre, precio, imagen y estado del producto.'
        },
        {
          label: 'Catálogo',
          text: 'Vista principal con productos, imagen, precio, estado, comentarios y acciones.'
        },
        {
          label: 'Operación',
          text: 'Búsqueda, filtros, ordenamiento y exportación para trabajar con listas grandes.'
        },
        {
          label: 'Mantenimiento',
          text: 'Editar, deshabilitar o eliminar productos sin salir del panel.'
        }
      ],
      workflow: [
        'Iniciar sesión en el panel.',
        'Registrar o actualizar productos.',
        'Buscar y filtrar el catálogo.',
        'Agregar comentarios o revisar estado.',
        'Exportar datos cuando se necesite respaldo.'
      ]
    },
    gallery: [
      {
        src: '/screenshots/WebProductos/Login.png',
        title: 'Login web',
        description:
          'Entrada protegida para separar el panel administrativo del acceso público.'
      },
      {
        src: '/screenshots/WebProductos/web-productos.png',
        title: 'Panel completo de productos',
        description:
          'Vista central del módulo: productos con imagen, precio, estado, comentarios, filtros, exportación y acciones de mantenimiento.'
      }
    ]
  }
]

const services: Service[] = [
  {
    title: 'Desarrollo Backend',
    description: 'APIs REST con Python, Flask y conexión a bases de datos relacionales.',
    icon: Server
  },
  {
    title: 'Aplicaciones Android',
    description: 'Apps móviles conectadas a servidores usando Retrofit y arquitectura cliente-servidor.',
    icon: Smartphone
  },
  {
    title: 'Sistemas Administrativos',
    description: 'Sistemas de ventas, inventario, asistencia, usuarios, reportes y gestión empresarial.',
    icon: BriefcaseBusiness
  },
  {
    title: 'Bases de Datos',
    description: 'Diseño y manejo de bases de datos MySQL, MariaDB y SQLite.',
    icon: Database
  }
]

const timeline = [
  {
    year: '2026',
    title: 'Aplicación a Desarrollador Junior',
    text: 'Preparación de CV técnico, portafolio profesional y proyectos reales para oportunidades de desarrollo de software.'
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
const featuredProjects = projects.slice(0, 3)
const navigationItems = [
  { href: '#inicio', id: 'inicio', label: 'Inicio' },
  { href: '#proyectos', id: 'proyectos', label: 'Proyectos' },
  { href: '#stack', id: 'stack', label: 'Stack' },
  { href: '#experiencia', id: 'experiencia', label: 'Experiencia' },
  { href: '#contacto', id: 'contacto', label: 'Contacto' }
]

const premiumEase = [0.22, 1, 0.36, 1] as const
const revealViewport = { once: true, amount: 0.18 }

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.72, ease: premiumEase }
  }
}

const staggerGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08
    }
  }
}

const sectionReveal = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: premiumEase }
  }
}

export default function PortfolioAnderEli() {
  const [soundOn, setSoundOn] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [activeSection, setActiveSection] = useState('inicio')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Todos') return projects

    return projects.filter((project) => {
      const text = `${project.title} ${project.category} ${project.stack.join(' ')}`.toLowerCase()
      return text.includes(activeFilter.toLowerCase())
    })
  }, [activeFilter])

  const currentGalleryItem = selectedProject?.gallery[selectedImageIndex]

  useEffect(() => {
    let ticking = false

    function updateActiveSection() {
      const checkpoint = window.scrollY + 140
      const currentSection = navigationItems.reduce((current, item) => {
        const section = document.getElementById(item.id)
        if (!section) return current

        return section.offsetTop <= checkpoint ? item.id : current
      }, 'inicio')

      setActiveSection(currentSection)
      ticking = false
    }

    function requestUpdate() {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMobileMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  useEffect(() => {
    if (!selectedProject) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setSelectedProject(null)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

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
    setMobileMenuOpen(false)
    setSelectedProject(project)
    setSelectedImageIndex(0)
  }

  function closeProject() {
    playClickSound()
    setSelectedProject(null)
  }

  function handleNavClick(id: string) {
    playClickSound()
    setActiveSection(id)
    setMobileMenuOpen(false)
  }

  return (
    <MotionConfig reducedMotion="user">
    <main className="min-h-screen overflow-hidden bg-[#090a0f] text-white selection:bg-emerald-300 selection:text-black">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(120deg,rgba(45,212,191,0.10),transparent_28%,rgba(245,158,11,0.08)_58%,transparent_76%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:100%_100%,44px_44px,44px_44px]" />

      <motion.header
        className="nav-shell sticky top-0 z-50 border-b border-white/10 bg-[#090a0f]/85 backdrop-blur-xl"
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: premiumEase }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 md:px-6">
          <a
            href="#inicio"
            onClick={() => handleNavClick('inicio')}
            className="nav-brand group inline-flex items-center gap-3 text-xl font-black tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
            aria-label="Ir al inicio"
          >
            <span className="nav-brand-mark" aria-hidden="true">A</span>
            <span>Ander<span className="text-emerald-300">.dev</span></span>
          </a>

          <div className="nav-pill hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1 text-sm text-zinc-300 shadow-2xl shadow-black/20 md:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={`nav-link rounded-full px-3 py-2 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 lg:px-4 ${
                  activeSection === item.id ? 'is-active text-white' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="desktop-nav-active"
                    className="nav-active-indicator"
                    transition={{ duration: 0.32, ease: premiumEase }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contacto"
              onClick={() => handleNavClick('contacto')}
              className="nav-cta hidden items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm font-black text-emerald-100 transition hover:border-emerald-300/50 hover:bg-emerald-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 sm:inline-flex"
            >
              Hablemos
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={() => {
                playClickSound()
                setSoundOn(!soundOn)
              }}
              aria-label={soundOn ? 'Desactivar sonido' : 'Activar sonido'}
              className="btn-icon nav-icon-button"
            >
              {soundOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </button>

            <button
              type="button"
              onClick={() => {
                playClickSound()
                setMobileMenuOpen((isOpen) => !isOpen)
              }}
              aria-label={mobileMenuOpen ? 'Cerrar navegación' : 'Abrir navegación'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="btn-icon nav-icon-button nav-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              className="nav-mobile-panel border-t border-white/10 bg-[#090a0f]/96 px-5 pb-5 pt-2 shadow-2xl shadow-black/40 backdrop-blur-xl md:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: premiumEase }}
            >
              <motion.div
                className="mx-auto grid max-w-7xl gap-2"
                variants={staggerGroup}
                initial="hidden"
                animate="visible"
              >
                {navigationItems.map((item) => (
                  <motion.a
                    key={`mobile-${item.href}`}
                    href={item.href}
                    onClick={() => handleNavClick(item.id)}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                    className={`nav-mobile-link flex items-center justify-between rounded-lg border px-4 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${
                      activeSection === item.id
                        ? 'border-emerald-300/30 bg-emerald-300/10 text-emerald-100'
                        : 'border-white/10 bg-white/[0.035] text-zinc-300 hover:border-emerald-300/35 hover:text-white'
                    }`}
                    variants={fadeUp}
                  >
                    {item.label}
                    <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" aria-hidden="true" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <motion.section
        id="inicio"
        className="hero-section relative mx-auto grid max-w-7xl gap-12 overflow-hidden px-5 pb-16 pt-20 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24 lg:pt-28"
        variants={staggerGroup}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="hero-ambient"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 0.82, scale: 1 }}
          transition={{ duration: 1.2, ease: premiumEase }}
        />

        <motion.div className="relative z-10 min-w-0" variants={fadeUp}>
          <div className="premium-pill inline-flex items-center gap-3 rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-100">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Disponible para puesto de Desarrollador Junior
          </div>

          <h1 className="hero-title mt-8 max-w-4xl break-words text-5xl font-black leading-none tracking-tight sm:text-6xl md:text-8xl">
            Ander Eli
            <span className="block gradient-text">Software Developer</span>
          </h1>

          <p className="hero-copy mt-8 max-w-2xl break-words text-lg leading-relaxed text-zinc-300 md:text-xl">
            Estudiante de Ingeniería en Sistemas con experiencia práctica creando APIs REST,
            aplicaciones Android, sistemas administrativos, bases de datos y despliegues en servidor.
          </p>

          <motion.div className="mt-10 flex flex-wrap gap-3" variants={staggerGroup}>
            <a href="#proyectos" onClick={playClickSound} className="btn-primary">
              Ver proyectos
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/50254266873" target="_blank" rel="noopener noreferrer" onClick={playClickSound} className="btn-secondary">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a href="mailto:albertelias924@gmail.com" onClick={playClickSound} className="btn-secondary">
              <Mail className="h-4 w-4" />
              Correo
            </a>
            <a href="https://github.com/Ander2024-EM" target="_blank" rel="noopener noreferrer" onClick={playClickSound} className="btn-secondary">
              <GitBranch className="h-4 w-4" />
              GitHub
            </a>
          </motion.div>

          <motion.div className="mt-10 grid gap-3 text-sm text-zinc-400 sm:grid-cols-3" variants={staggerGroup}>
            <ProfileFact icon={MapPin} text="Coatepeque, Guatemala" />
            <ProfileFact icon={MonitorSmartphone} text="Backend + Android + Web" />
            <ProfileFact icon={Zap} text="Aprendizaje rápido" />
          </motion.div>
        </motion.div>

        <motion.aside
          className="hero-profile-card surface-card relative z-10 min-w-0 p-6 lg:p-8"
          variants={fadeUp}
          whileHover={{ y: -4, transition: { duration: 0.28, ease: premiumEase } }}
        >
          <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-6">
            <div className="min-w-0">
              <p className="text-sm font-medium text-zinc-400">Perfil técnico</p>
              <h2 className="mt-2 break-words text-3xl font-black">Junior Software Developer</h2>
            </div>
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-emerald-300/25 bg-emerald-300/10 text-emerald-200">
              <Code2 className="h-7 w-7" />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7">
            {stats.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-3xl font-black text-emerald-300">{stat.number}</h3>
                <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-sm font-semibold text-amber-200">Actualmente desarrollando</p>
            <p className="mt-3 leading-relaxed text-zinc-300">
              Sistemas Android conectados a APIs Flask para control de asistencia,
              inventario, ventas y reportes empresariales.
            </p>
          </div>

          <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 text-sm text-zinc-400">
            <div className="flex items-center justify-between gap-4">
              <span>Producto</span>
              <span className="font-semibold text-zinc-200">Sistemas reales</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>Enfoque</span>
              <span className="font-semibold text-zinc-200">Backend + Mobile</span>
            </div>
          </div>
        </motion.aside>
      </motion.section>

      <section className="border-y border-white/10 bg-white/[0.025] py-5">
        <div className="mx-auto max-w-7xl overflow-hidden px-5 md:px-6">
          <div className="flex gap-3 whitespace-nowrap text-zinc-300 animate-marquee">
            {[...technologies, ...technologies].map((tech, index) => (
              <span key={`${tech}-${index}`} className="rounded-lg border border-white/10 bg-black/20 px-4 py-2 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <motion.section
        className="premium-section mx-auto max-w-7xl px-5 py-20 md:px-6"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <SectionHeader eyebrow="Servicios" title="Lo que puedo aportar" />
        <motion.div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4" variants={staggerGroup}>
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="proyectos"
        className="premium-section border-y border-white/10 bg-white/[0.025]"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-6">
          <SectionHeader eyebrow="Portafolio" title="Proyectos destacados" />

          <motion.div className="case-study-intro mt-8 flex flex-col gap-4 text-zinc-400 md:flex-row md:items-end md:justify-between" variants={fadeUp}>
            <p className="max-w-2xl leading-relaxed">
              Cada proyecto funciona como una prueba de producto: flujo, arquitectura, pantallas y decisiones listas para explicar en una entrevista técnica.
            </p>
            <span className="inline-flex w-fit items-center rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-100">
              Case studies reales
            </span>
          </motion.div>

          <motion.div className="mt-10 grid gap-6 lg:grid-cols-3" variants={staggerGroup}>
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index + 1} onClick={() => openProject(project)} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="premium-section mx-auto max-w-7xl px-5 py-20 md:px-6"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <SectionHeader eyebrow="Más trabajos" title="Todos mis proyectos" />

        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${
                activeFilter === filter
                  ? 'bg-emerald-300 text-black'
                  : 'border border-white/10 bg-white/5 text-zinc-300 hover:border-emerald-300/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3" variants={staggerGroup}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`all-${project.title}`} project={project} index={index + 1} onClick={() => openProject(project)} />
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="stack"
        className="border-y border-white/10 bg-white/[0.025]"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-6">
          <SectionHeader eyebrow="Tecnologías" title="Stack tecnológico" />
          <motion.div className="mt-10 flex flex-wrap gap-3" variants={staggerGroup}>
            {technologies.map((tech) => (
              <motion.span key={tech} className="rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-zinc-200 transition hover:border-emerald-300/50 hover:bg-emerald-300/10" variants={fadeUp}>
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="experiencia"
        className="mx-auto max-w-7xl px-5 py-20 md:px-6"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <SectionHeader eyebrow="Trayectoria" title="Timeline profesional" />
        <motion.div className="mt-12 space-y-5" variants={staggerGroup}>
          {timeline.map((item) => (
            <motion.div key={item.title} className="surface-card grid gap-5 p-6 md:grid-cols-[180px_1fr]" variants={fadeUp}>
              <div className="text-xl font-black text-emerald-300">{item.year}</div>
              <div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="border-y border-white/10 bg-white/[0.025]"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-6">
          <motion.div className="surface-card p-6 md:p-8" variants={fadeUp}>
            <div className="flex items-center gap-3 text-emerald-300">
              <Terminal className="h-5 w-5" />
              <p className="text-sm font-bold uppercase tracking-[0.22em]">Terminal</p>
            </div>
            <div className="mt-6 overflow-x-auto rounded-lg border border-white/10 bg-black/55 p-5 font-mono text-sm text-emerald-200">
              <p>&gt; loading backend skills: Flask, REST APIs, MySQL</p>
              <p>&gt; loading mobile skills: Android, Retrofit</p>
              <p>&gt; loading desktop skills: Java Swing, JDBC, POS</p>
              <p>&gt; loading deployment skills: Linux VPS, Nginx</p>
              <p className="text-amber-200">&gt; status: ready for Junior Developer role</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="contacto"
        className="mx-auto max-w-7xl px-5 py-20 md:px-6"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        <motion.div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start" variants={staggerGroup}>
          <motion.div variants={fadeUp}>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">Contacto</p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Trabajemos juntos
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Estoy disponible para oportunidades como Desarrollador Junior,
              proyectos de software, aplicaciones Android, APIs REST, sistemas administrativos
              y soluciones empresariales.
            </p>
          </motion.div>

          <motion.div className="grid gap-4 md:grid-cols-2" variants={staggerGroup}>
            <a
              href="https://wa.me/50254266873"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              className="surface-card group p-6 transition hover:border-emerald-300/50"
            >
              <MessageCircle className="h-8 w-8 text-emerald-300" />
              <p className="mt-6 text-sm font-bold uppercase tracking-widest text-emerald-200">WhatsApp</p>
              <h3 className="mt-2 text-3xl font-black transition group-hover:text-emerald-300">
                5426-6873
              </h3>
              <p className="mt-2 text-zinc-400">Contacto directo para oportunidades y proyectos.</p>
            </a>

            <a
              href="mailto:albertelias924@gmail.com"
              onClick={playClickSound}
              className="surface-card group p-6 transition hover:border-amber-300/50"
            >
              <Mail className="h-8 w-8 text-amber-300" />
              <p className="mt-6 text-sm font-bold uppercase tracking-widest text-amber-200">Correo electrónico</p>
              <h3 className="mt-2 break-all text-xl font-black transition group-hover:text-amber-300 md:text-2xl">
                albertelias924@gmail.com
              </h3>
              <p className="mt-2 text-zinc-400">Disponible para entrevistas, propuestas y colaboración.</p>
            </a>
          </motion.div>
        </motion.div>
      </motion.section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-500">
        © 2026 Ander Eli · Junior Software Developer
      </footer>

      <AnimatePresence>
      {selectedProject && currentGalleryItem && (
        <motion.div
          className="project-modal-overlay fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black/85 p-3 backdrop-blur-xl sm:p-4 md:p-6"
          onClick={closeProject}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: premiumEase }}
        >
          <motion.button
            type="button"
            onClick={closeProject}
            aria-label="Cerrar detalle del proyecto"
            className="project-modal-close btn-icon fixed right-4 top-4 z-[130] border-white/20 bg-black/70 text-white shadow-2xl shadow-black/40 backdrop-blur-md hover:bg-emerald-300 hover:text-black"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.22, ease: premiumEase }}
          >
            <X className="h-4 w-4" />
          </motion.button>

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-detail-title"
            className="project-modal surface-card relative grid h-[calc(100dvh-1.5rem)] min-h-0 w-full max-w-7xl overflow-y-auto overscroll-contain sm:h-[calc(100dvh-2rem)] lg:h-[min(900px,calc(100dvh-3rem))] lg:grid-cols-[minmax(0,1.18fr)_minmax(380px,0.82fr)] lg:overflow-hidden"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.985 }}
            transition={{ duration: 0.32, ease: premiumEase }}
          >
            <div className="project-gallery-panel border-b border-white/10 bg-black/25 p-4 pt-16 sm:p-5 sm:pt-16 md:p-6 md:pt-6 lg:min-h-0 lg:h-full lg:overflow-y-auto lg:overscroll-contain lg:border-b-0 lg:border-r">
              <div className="relative flex h-[42vh] min-h-[250px] max-h-[520px] items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-black/40 sm:h-[48vh] md:h-[560px] lg:h-[min(560px,calc(100dvh-14rem))] lg:min-h-[360px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentGalleryItem.src}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.015 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.28, ease: premiumEase }}
                  >
                    <Image
                      src={currentGalleryItem.src}
                      alt={currentGalleryItem.title}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-contain p-2"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5">
                {selectedProject.gallery.map((item, index) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setSelectedImageIndex(index)}
                    aria-label={`Ver captura: ${item.title}`}
                    aria-current={selectedImageIndex === index ? 'true' : undefined}
                    className={`project-thumb relative h-20 overflow-hidden rounded-lg border bg-white/5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 ${
                      selectedImageIndex === index ? 'border-emerald-300 shadow-lg shadow-emerald-950/30' : 'border-white/10 hover:border-emerald-300/50'
                    }`}
                  >
                    <Image src={item.src} alt="" fill sizes="120px" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="project-editorial-panel min-w-0 p-5 pt-7 sm:p-6 md:p-8 lg:min-h-0 lg:h-full lg:overflow-y-auto lg:overscroll-contain lg:pr-10">
              <div className="project-detail-header flex items-start justify-between gap-4 rounded-lg border border-white/10 bg-black/20 p-5">
                <div className="min-w-0 pr-12 sm:pr-14 lg:pr-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-100">
                      {selectedProject.status}
                    </span>
                    <span className="text-sm font-semibold text-emerald-300">{selectedProject.category}</span>
                  </div>
                  <h3 id="project-detail-title" className="mt-2 break-words text-3xl font-black leading-tight md:text-5xl">{selectedProject.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">{selectedProject.objective}</p>
                </div>
              </div>

              <div className="project-spotlight mt-7 rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-5">
                <p className="text-sm font-bold text-emerald-100">Recorrido actual</p>
                <h4 className="mt-2 text-2xl font-black">{currentGalleryItem.title}</h4>
                <p className="mt-3 leading-relaxed text-zinc-300">{currentGalleryItem.description}</p>
              </div>

              <ProjectDetail title="¿Qué hace?" text={selectedProject.description} />

              {selectedProject.productModule && (
                <ProductModuleSection module={selectedProject.productModule} />
              )}

              <div className="project-copy-block mt-8">
                <h4 className="text-xl font-black">Arquitectura</h4>
                <p className="mt-3 overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4 font-mono text-sm text-emerald-200">
                  {selectedProject.architecture}
                </p>
              </div>

              <div className="project-copy-block mt-8">
                <h4 className="text-xl font-black">Funciones principales</h4>
                <ul className="mt-4 space-y-3 text-zinc-300">
                  {selectedProject.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-copy-block mt-8 pb-6">
                <h4 className="text-xl font-black">Tecnologías</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.stack.map((item) => (
                    <span key={item} className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 5rem;
        }

        .nav-shell {
          box-shadow: 0 1px 0 rgba(255,255,255,0.04), 0 18px 60px rgba(0,0,0,0.18);
        }

        .nav-brand {
          min-height: 2.5rem;
        }

        .nav-brand-mark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 2.25rem;
          width: 2.25rem;
          border: 1px solid rgba(110,231,183,0.24);
          border-radius: 999px;
          background: linear-gradient(145deg, rgba(110,231,183,0.18), rgba(103,232,249,0.08));
          color: #d1fae5;
          font-size: .92rem;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.12), 0 14px 34px rgba(16,185,129,0.12);
          transition: transform .24s ease, border-color .24s ease, background .24s ease;
        }

        .nav-brand:hover .nav-brand-mark {
          transform: translateY(-1px);
          border-color: rgba(110,231,183,0.54);
          background: linear-gradient(145deg, rgba(110,231,183,0.28), rgba(103,232,249,0.12));
        }

        .nav-pill {
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 18px 48px rgba(0,0,0,0.20);
        }

        .nav-link {
          position: relative;
          isolation: isolate;
        }

        .nav-link::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(110,231,183,0.16), rgba(103,232,249,0.08));
          opacity: 0;
          transition: opacity .22s ease;
        }

        .nav-link:hover::before,
        .nav-link.is-active::before {
          opacity: 1;
        }

        .nav-link.is-active {
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.09);
        }

        .nav-active-indicator {
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(110,231,183,0.18), rgba(103,232,249,0.10));
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .nav-cta,
        .nav-icon-button {
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .nav-menu-toggle {
          display: inline-flex;
        }

        @media (min-width: 768px) {
          .nav-menu-toggle {
            display: none;
          }
        }

        .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 18px 42px rgba(16,185,129,.16);
        }

        .nav-mobile-panel {
          animation: mobileNavIn .24s cubic-bezier(.2,.8,.2,1) both;
        }

        .nav-mobile-link {
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.045);
        }

        .hero-section {
          isolation: isolate;
        }

        .hero-ambient {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(115deg, rgba(110,231,183,0.13), transparent 42%),
            linear-gradient(235deg, rgba(103,232,249,0.12), transparent 48%),
            linear-gradient(180deg, rgba(255,255,255,0.065), transparent 36%);
          -webkit-mask-image: linear-gradient(180deg, rgba(0,0,0,0.95), rgba(0,0,0,0.18) 78%, transparent);
          mask-image: linear-gradient(180deg, rgba(0,0,0,0.95), rgba(0,0,0,0.18) 78%, transparent);
          opacity: .82;
        }

        .gradient-text {
          background: linear-gradient(90deg, #6ee7b7, #67e8f9, #fbbf24);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .premium-pill {
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.16),
            0 18px 50px rgba(16,185,129,0.12);
        }

        .premium-pill span {
          box-shadow: 0 0 24px rgba(110,231,183,0.72);
        }

        .hero-title {
          letter-spacing: 0;
          text-wrap: balance;
        }

        .hero-copy {
          text-wrap: pretty;
        }

        .surface-card {
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.055);
          backdrop-filter: blur(18px);
          border-radius: 0.5rem;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.055),
            0 24px 70px rgba(0,0,0,0.24);
        }

        .hover-card {
          transition: transform .28s ease, border-color .28s ease, background .28s ease, box-shadow .28s ease;
        }

        .hover-card:hover {
          transform: translateY(-4px);
          border-color: rgba(110,231,183,0.45);
          background: rgba(110,231,183,0.075);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.07),
            0 30px 85px rgba(0,0,0,0.32);
        }

        .hero-profile-card {
          overflow: hidden;
        }

        .hero-profile-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(145deg, rgba(255,255,255,0.13), transparent 42%, rgba(103,232,249,0.055));
          pointer-events: none;
        }

        .hero-profile-card > * {
          position: relative;
          z-index: 1;
        }

        .premium-section {
          position: relative;
          isolation: isolate;
        }

        .premium-section::before {
          content: "";
          position: absolute;
          left: 1.25rem;
          right: 1.25rem;
          top: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(110,231,183,0.22), rgba(103,232,249,0.16), transparent);
          pointer-events: none;
          opacity: .75;
        }

        .premium-reveal {
          animation: premiumReveal .72s cubic-bezier(.2,.8,.2,1) both;
        }

        .project-card {
          position: relative;
          isolation: isolate;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.055),
            0 26px 72px rgba(0,0,0,0.25);
        }

        .project-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(110,231,183,0.10), transparent 34%, rgba(103,232,249,0.06));
          opacity: 0;
          pointer-events: none;
          transition: opacity .3s ease;
        }

        .project-card > * {
          position: relative;
          z-index: 2;
        }

        .project-card-media::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(180deg, transparent 46%, rgba(0,0,0,0.44));
          pointer-events: none;
        }

        .project-card-sheen {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(105deg, transparent 34%, rgba(255,255,255,0.17), transparent 66%);
          opacity: 0;
          pointer-events: none;
          transform: translateX(-120%);
          transition: transform .82s cubic-bezier(.2,.8,.2,1), opacity .3s ease;
        }

        @media (hover: hover) and (pointer: fine) {
          .project-card:hover {
            transform: translateY(-6px);
          }

          .project-card:hover::before {
            opacity: 1;
          }

          .project-card:hover .project-card-sheen {
            opacity: .55;
            transform: translateX(120%);
          }
        }

        .project-modal {
          scrollbar-gutter: stable;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 40px 120px rgba(0,0,0,0.52);
        }

        .project-gallery-panel {
          background:
            linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.18)),
            rgba(0,0,0,0.25);
        }

        .project-editorial-panel {
          background: linear-gradient(180deg, rgba(255,255,255,0.035), transparent 44%);
        }

        .project-detail-header {
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
        }

        .project-detail-header::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(110,231,183,0.08), transparent 48%, rgba(103,232,249,0.045));
          pointer-events: none;
        }

        .project-detail-header > * {
          position: relative;
          z-index: 1;
        }

        .project-spotlight {
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.06),
            0 18px 54px rgba(16,185,129,0.08);
        }

        .project-copy-block {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 1.75rem;
        }

        .project-thumb {
          transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease;
        }

        .project-thumb:hover {
          transform: translateY(-2px);
        }

        .project-modal-close {
          transition: transform .2s ease, background .2s ease, color .2s ease, border-color .2s ease;
        }

        .project-modal-close:hover {
          transform: translateY(-1px) scale(1.03);
        }

        .btn-primary,
        .btn-secondary,
        .btn-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.5rem;
          transition: .22s ease;
        }

        .btn-primary,
        .btn-secondary {
          gap: 0.5rem;
          padding: 0.9rem 1.1rem;
          font-weight: 900;
        }

        .btn-primary {
          background: #6ee7b7;
          color: #020617;
          box-shadow: 0 18px 42px rgba(16,185,129,.16);
        }

        .btn-primary:hover {
          background: #a7f3d0;
          transform: translateY(-2px);
        }

        .btn-secondary,
        .btn-icon {
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.04);
        }

        .btn-secondary:hover,
        .btn-icon:hover {
          border-color: rgba(110,231,183,.48);
          background: rgba(110,231,183,.08);
          transform: translateY(-2px);
        }

        .btn-icon {
          height: 2.5rem;
          width: 2.5rem;
          color: #d4d4d8;
        }

        @media (min-width: 768px) {
          .btn-icon.nav-menu-toggle {
            display: none;
          }
        }

        .fade-in {
          animation: fadeIn .65s ease both;
        }

        .delay-1 {
          animation-delay: .12s;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes premiumReveal {
          from {
            opacity: 0;
            transform: translateY(18px) scale(.992);
            filter: blur(6px);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes mobileNavIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes modalBackdrop {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes modalPanel {
          from {
            opacity: 0;
            transform: translateY(16px) scale(.985);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
    </MotionConfig>
  )
}

function ProfileFact({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <span className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-emerald-300" />
      {text}
    </span>
  )
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon

  return (
    <motion.article className="surface-card hover-card p-6" variants={fadeUp}>
      <Icon className="h-9 w-9 text-emerald-300" />
      <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
      <p className="mt-4 leading-relaxed text-zinc-400">{service.description}</p>
    </motion.article>
  )
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  return (
    <motion.button
      type="button"
      className="project-card surface-card hover-card group w-full overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
      onClick={onClick}
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.28, ease: premiumEase } }}
      whileTap={{ scale: 0.985 }}
    >
      <span className="project-card-media relative block h-60 overflow-hidden border-b border-white/10 bg-black/30">
        <Image
          src={project.image}
          alt={`Captura de ${project.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover opacity-90 transition duration-700 group-hover:scale-105"
        />
        <span className="project-card-sheen" aria-hidden="true" />

        <span className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-emerald-100 backdrop-blur-md">
          {project.status}
        </span>

        <span className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 rounded-lg bg-emerald-300 px-3 py-2 text-xs font-black text-black opacity-0 shadow-xl shadow-emerald-950/30 transition group-hover:opacity-100">
          Ver recorrido
          <ExternalLink className="h-3.5 w-3.5" />
        </span>
      </span>

      <span className="block p-6">
        <span className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm font-semibold text-emerald-300">{project.category}</span>
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">Case {String(index).padStart(2, '0')}</span>
        </span>
        <span className="mt-3 block text-2xl font-black leading-tight">{project.title}</span>
        <span className="mt-4 block leading-relaxed text-zinc-400">{project.description}</span>

        <span className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-zinc-500">
          <span>{project.gallery.length} pantallas</span>
          <span className="font-semibold text-emerald-200">Abrir recorrido</span>
        </span>

        <span className="mt-6 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((item) => (
            <span key={item} className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-100">
              {item}
            </span>
          ))}
        </span>
      </span>
    </motion.button>
  )
}

function ProductModuleSection({ module }: { module: NonNullable<Project['productModule']> }) {
  return (
    <section className="mt-8 rounded-lg border border-amber-300/20 bg-amber-300/10 p-5">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-200">Módulo de productos</p>
      <h4 className="mt-3 text-2xl font-black">{module.title}</h4>
      <p className="mt-3 leading-relaxed text-zinc-300">{module.summary}</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {module.highlights.map((item) => (
          <div key={item.label} className="rounded-lg border border-white/10 bg-black/25 p-4">
            <p className="font-bold text-amber-200">{item.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p className="font-bold">Flujo del módulo</p>
        <ol className="mt-3 space-y-2 text-sm text-zinc-300">
          {module.workflow.map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-300 text-xs font-black text-black">
                {index + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function ProjectDetail({ title, text }: { title: string; text: string }) {
  return (
    <div className="project-copy-block mt-8">
      <h4 className="text-xl font-black">{title}</h4>
      <p className="mt-3 leading-relaxed text-zinc-400">{text}</p>
    </div>
  )
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-emerald-300">{eyebrow}</p>
      <h2 className="text-4xl font-black tracking-tight md:text-6xl">{title}</h2>
    </div>
  )
}

