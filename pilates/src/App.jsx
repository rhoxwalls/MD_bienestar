import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X, MapPin, Phone } from "lucide-react";
import { ServiciosDetallados } from "./components/Services";
import { FaInstagram, FaTiktok} from "react-icons/fa";

const PilatesSPACarousel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleWhatsAppReserve = (e) => {
    e.preventDefault();

    // 1. Capturamos los datos del formulario (puedes usar estados de React)
    const nombre = document.getElementById("nombre").value;
    const wapp = document.getElementById("wapp").value;
    const interes = document.getElementById("interes").value;
    const telefono = "5493875226742"; // <-- REEMPLAZA CON EL NÚMERO DE MD BIENESTAR (Formato internacional sin el +)

    // ENVIAR EVENTO A GOOGLE ANALYTICS
  if (window.gtag) {
    window.gtag('event', 'generar_lead', {
      'event_category': 'contacto',
      'event_label': 'WhatsApp Reserva',
      'value': 1
    });
  }

    // 2. Creamos el mensaje codificado para la URL
    const mensaje = `Hola MD Bienestar! Mi nombre es *${nombre}* mi wapp es *${wapp}*y me gustaría reservar una sesión de *${interes}*. ¿Tienen disponibilidad?`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    // 3. Abrimos WhatsApp en una nueva pestaña
    window.open(url, "_blank");

    // 4. Cerramos el modal
    setIsModalOpen(false);
  };

  // Efecto para el glassmorphism del navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  return (
    <div className="bg-pilates-beige min-h-screen font-sans text-pilates-dark overflow-x-hidden">
      {/* --- 1. NAVBAR (Con Glassmorphism) --- */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/70 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-light tracking-widest uppercase text-pilates-dark">
            MD <span className="text-2xl">Bienestar</span>
          </h1>
          <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest items-center">
            <a href="#inicio" className="hover:text-pilates-sage transition">
              Inicio
            </a>
            <a href="#filosofia" className="hover:text-pilates-sage transition">
              Filosofía
            </a>
            <a
              href="#modalidades"
              className="hover:text-pilates-sage transition"
            >
              Modalidades
            </a>
            <a href="#servicios" className="hover:text-pilates-sage transition">
              Servicios
            </a>
          </div>

          <button
            className="md:hidden z-510 text-pilates-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MENÚ DESPLEGABLE MOBILE */}
      <div
        className={`fixed inset-0 z-120 bg-pilates-beige flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a
          href="#inicio"
          onClick={closeMenu}
          className="text-2xl font-light tracking-widest text-pilates-dark"
        >
          Inicio
        </a>
        <a
          href="#modalidades"
          onClick={closeMenu}
          className="text-2xl font-light tracking-widest text-pilates-dark"
        >
          Modalidades
        </a>
        <a
          href="#filosofia"
          onClick={closeMenu}
          className="text-2xl font-light tracking-widest text-pilates-dark"
        >
          Filosofía
        </a>
        <a
          href="#servicios"
          onClick={closeMenu}
          className="text-2xl font-light tracking-widest text-pilates-dark"
        >
          Servicios
        </a>
      </div>

      {/* --- 2. HERO SECTION CON CARRUSEL DE FONDO --- */}
      <section
        id="inicio"
        className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden"
      >
        {/* FONDO ANIMADO */}
        <div className="absolute inset-0 z-0 animate-gradient bg-linear-to-br from-pilates-beige via-[#b7f7bf] to-[#e6c3a1]">
          {/* Capa de grano sutil para textura de lujo (opcional) */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>

        {/* Contenedor de Imágenes del Carrusel */}

        {/* Contenido del Hero (Texto y Botón) - Encima del Carrusel */}
        <div className="relative z-20 max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <span className="text-pilates-sage uppercase tracking-widest text-sm mb-4 block font-medium">
            Pilates Boutique & Wellness
          </span>
          <h2 className="text-5xl md:text-7xl font-light mb-6 leading-tight tracking-tight text-pilates-dark">
            Tu equilibrio perfecto,{" "}
            <span className="font-normal italic">donde tú elijas</span>.
          </h2>
          <p className="text-lg md:text-xl mb-12 text-pilates-dark/80 max-w-2xl mx-auto font-light leading-relaxed">
            Experimenta el método Pilates con un enfoque de lujo y atención
            personalizada. Clases privadas en nuestro exclusivo estudio o
            sesiones a domicilio adaptadas a tu ritmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-pilates-dark text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-pilates-sage transition-all duration-300 shadow-md"
            >
              Reserva tu clase
            </button>
            <a
              href="#servicios"
              className="border border-pilates-dark text-pilates-dark px-10 py-4 uppercase tracking-widest text-sm hover:bg-pilates-dark hover:text-white transition-all duration-300"
            >
              Explorar servicios
            </a>
          </div>
        </div>

        {/* Indicadores del Carrusel (Puntitos) */}
      </section>

      {/* --- (Opcional) Sección de Servicios breve para contexto --- */}
      <section id="modalidades" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-light mb-16 text-pilates-dark">
            Nuestras Modalidades
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-pilates-beige p-10 rounded-xl text-left hover:shadow-lg transition">
              <h4 className="text-2xl mb-4 font-normal">Estudio Boutique</h4>
              <p className="text-pilates-dark/70 mb-6 font-light">
                Sesiones privadas y semiprivadas utilizando equipos Reformer de
                última generación en un entorno sereno y exclusivo.
              </p>
              <span className="text-pilates-sage font-medium">
                Pilates Reformer • Chair • Cadillac
              </span>
            </div>
            <div className="bg-pilates-beige p-10 rounded-xl text-left hover:shadow-lg transition">
              <h4 className="text-2xl mb-4 font-normal">A Domicilio</h4>
              <p className="text-pilates-dark/70 mb-6 font-light">
                Llevamos la experiencia del bienestar a tu hogar. Clases
                personalizadas de Mat Pilates con accesorios, adaptadas a tu
                espacio y agenda.
              </p>
              <span className="text-pilates-sage font-medium">
                Mat Pilates • Accesorios • Flexibilidad total
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- BOTÓN WHATSAPP (FLOTANTE) --- */}
      <a
        href="https://wa.me/5493875226742" // Cambiar por el número real
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
        target="_blank"
        rel="noopener noreferrer"
        title="Contáctanos por WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* --- MODAL DE RESERVA (Simplicado) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-pilates-dark/50 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white p-10 rounded-2xl max-w-md w-full relative shadow-2xl animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-pilates-dark/50 hover:text-pilates-dark"
            >
              <X size={24} />
            </button>
            <h3 className="text-3xl font-light mb-2 text-pilates-dark">
              Comienza tu viaje
            </h3>
            <p className="text-pilates-dark/70 mb-8 font-light">
              Completa tus datos y nos pondremos en contacto para coordinar tu
              primera sesión.
            </p>
            <form onSubmit={handleWhatsAppReserve} className="space-y-5">
              <input
                type="text"
                id="nombre"
                placeholder="Nombre completo"
                required
                className="w-full p-4 border border-gray-100 rounded-lg focus:ring-1 focus:ring-pilates-sage focus:border-pilates-sage outline-none bg-gray-50"
              />
              <input
                type="tel"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Elimina letras y símbolos
                  e.target.setCustomValidity(""); // Limpia validaciones previas
                }}
                onInvalid={(e) => {
                  e.target.setCustomValidity(
                    "El número de WhatsApp debe tener exactamente 10 dígitos (ej: 3874402610)",
                  );
                }}
                pattern="[0-9]{10}"
                maxLength={10}
                id="wapp"
                placeholder="Teléfono / WhatsApp"
                required
                className="w-full p-4 border border-gray-100 rounded-lg focus:ring-1 focus:ring-pilates-sage focus:border-pilates-sage outline-none bg-gray-50"
              />
              <select
                id="interes"
                className="w-full p-4 border border-gray-100 rounded-lg focus:ring-1 focus:ring-pilates-sage focus:border-pilates-sage outline-none bg-gray-50 text-pilates-dark/70"
              >
                <option>Interés: Estudio Boutique</option>
                <option>Interés: A Domicilio</option>
              </select>
              <button
                type="submit"
                className="w-full bg-pilates-dark text-white py-4 rounded-lg mt-4 hover:bg-pilates-sage transition-all duration-300 uppercase tracking-widest text-sm font-medium"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      )}
      <section id="filosofia" className="max-w-7xl mx-auto text-center">
        <div className="bg-gray-300 p-2">
          <h3 className="text-4xl font-light mb-16 text-pilates-dark">
            Tu cuerpo es tu único hogar. Habítalo con fuerza y serenidad.
          </h3>
          <p className="text-pilates-dark mb-8 font-light">
            "¿Cuándo fue la última vez que te sentiste plenamente en sintonía
            con vos misma? El Pilates no es solo estiramiento; es el arte de
            recuperar el control. Es fortalecer ese centro que te sostiene todo
            el día, liberar la tensión acumulada en la espalda y descubrir una
            postura que proyecta seguridad. En MD Bienestar, creemos que el
            movimiento debe ser un placer, no una obligación. Por eso, diseñamos
            un método donde la precisión del Pilates se encuentra con la energía
            del fitness funcional. No importa si venís a nuestro estudio o si
            preferís la privacidad de tu casa: el resultado es un cuerpo más
            ágil, una mente más clara y una energía renovada para enfrentar tu
            rutina. Te merecés este espacio."
          </p>
        </div>
      </section>
      <ServiciosDetallados id="servicios" />
      <footer className="bg-pilates-dark text-pilates-beige pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* COLUMNA 1: LOGO Y FRASE */}
            <div className="space-y-4">
              <h3 className="text-2xl font-light tracking-widest uppercase">
                MD Bienestar
              </h3>
              <p className="text-pilates-beige/60 font-light leading-relaxed max-w-xs">
                Transformando cuerpos y mentes a través del movimiento
                consciente y el cuidado integral.
              </p>
            </div>

            {/* COLUMNA 2: CONTACTO RÁPIDO */}
            <div className="space-y-4">
              <h4 className="text-sm uppercase tracking-widest font-semibold border-b border-pilates-beige/10 pb-2 inline-block">
                Contacto
              </h4>
              <ul className="space-y-3 font-light text-sm">
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-pilates-sage" />
                  <span>
                    Salta, Argentina (Atención en estudio y domicilio)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-pilates-sage" />
                  <span>+54 9 387-5226742</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>contacto@mdbienestar.com</span>
                </li>
              </ul>
            </div>

            {/* COLUMNA 3: REDES SOCIALES */}
            <div className="space-y-4 text-center md:text-right">
              <h4 className="text-sm uppercase tracking-widest font-semibold border-b border-pilates-beige/10 pb-2 inline-block">
                Seguinos
              </h4>
              <div className="flex justify-center flex-col md:justify-end gap-6 pt-2">
                <a
                  href="https://instagram.com/md.entrenamiento_estetica"
                  className="hover:text-pilates-sage transition-colors flex gap-2"
                >
                  <FaInstagram className="text-2xl hover:text-pilates-sage cursor-pointer" />
                  <p>
                    <span></span>md.entrenamiento_estetica
                  </p>
                </a>
                <a
                  href="https://www.tiktok.com/md.pilates_estetica"
                  className="hover:text-pilates-sage transition-colors flex gap-2"
                >
                  <FaTiktok className="text-2xl hover:text-pilates-sage cursor-pointer" />
                  <p>
                    <span></span>md.pilates_estetica
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* LÍNEA FINAL DE DERECHOS RESERVADOS */}
          <div className="border-t border-pilates-beige/10 pt-8 flex flex-col md:row items-center justify-between gap-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-pilates-beige/40">
              © 2026 Todos los derechos reservados
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] font-medium">
              Desarrollado por{" "}
              <span className="text-pilates-sage">Eduardo Díaz</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PilatesSPACarousel;
