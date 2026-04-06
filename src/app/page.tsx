import Link from "next/link";

const bocatas = [
  { nombre: "Clásico de jamón y queso", desc: "Pan crujiente, jamón serrano y queso fundido", precio: "6,50 €" },
  { nombre: "Lomo con queso", desc: "Lomo a la plancha con queso cremoso y toque de alioli", precio: "7,20 €" },
  { nombre: "Pollo crujiente", desc: "Pollo rebozado, lechuga fresca y salsa especial", precio: "7,80 €" },
  { nombre: "Vegetal con atún", desc: "Lechuga, tomate, maíz, huevo y atún", precio: "6,90 €" },
  { nombre: "Marinero especial", desc: "Calamares crujientes, mahonesa cítrica y rúcula", precio: "8,40 €" },
];

const cubatas = [
  { nombre: "Ron con Coca-Cola", desc: "Ron añejo con cola bien fría y lima", precio: "7,00 €" },
  { nombre: "Ginebra con tónica", desc: "Ginebra premium con tónica y twist de limón", precio: "7,50 €" },
  { nombre: "Whisky con cola", desc: "Whisky suave con cola y hielo", precio: "7,20 €" },
  { nombre: "Vodka con limón", desc: "Vodka helado con refresco de limón", precio: "7,00 €" },
  { nombre: "Mojito de la casa", desc: "Hierbabuena fresca, lima natural y ron blanco", precio: "8,00 €" },
];

export default function Home() {
  return (
    <div className="bg-[#fffaf0] text-slate-900 selection:bg-cyan-200/70">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/80 border-b border-cyan-100">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#inicio" className="font-extrabold tracking-tight text-cyan-800">🏖️ Bar la Playa</a>
          <div className="hidden md:flex gap-5 text-sm font-medium">
            <a href="#nosotros" className="hover:text-cyan-700 transition">Nosotros</a>
            <a href="#carta" className="hover:text-cyan-700 transition">Carta</a>
            <a href="#ubicacion" className="hover:text-cyan-700 transition">Ubicación</a>
            <a href="#redes" className="hover:text-cyan-700 transition">Instagram</a>
          </div>
        </nav>
      </header>

      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center text-white pt-20"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(7, 57, 90, 0.35), rgba(7,57,90,0.65)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center animate-[fadeIn_1s_ease]">
          <p className="uppercase tracking-[0.35em] text-cyan-100 text-xs md:text-sm mb-4">Verano todo el año</p>
          <h1 className="text-4xl md:text-7xl font-extrabold drop-shadow-lg">Chiringuito Bar la Playa</h1>
          <p className="mt-5 text-lg md:text-2xl text-cyan-50">Bocatas, cubatas y buen ambiente junto al mar</p>
          <div className="mt-8 flex gap-3 justify-center flex-wrap">
            <a href="#carta" className="px-6 py-3 rounded-full bg-amber-400 text-slate-900 font-semibold hover:scale-105 transition shadow-lg">🍽️ Ver carta</a>
            <a href="#ubicacion" className="px-6 py-3 rounded-full bg-cyan-500 font-semibold hover:scale-105 transition shadow-lg">📍 Cómo llegar</a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[linear-gradient(to_top,#fffaf0,transparent)]" />
      </section>

      <section id="nosotros" className="max-w-6xl mx-auto px-4 py-20">
        <div className="rounded-3xl bg-white border border-cyan-100 shadow-xl p-8 md:p-12 hover:shadow-2xl transition">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-800 mb-4">🌴 Sobre nosotros</h2>
          <p className="text-slate-700 leading-relaxed text-lg">
            En <strong>Chiringuito Bar la Playa</strong> mezclamos sabor, brisa marina y buena música para que disfrutes cada momento.
            Somos el rincón perfecto para comer algo rico, tomarte un cubata al atardecer y vivir ese ambiente relajado que solo se encuentra junto al mar.
          </p>
        </div>
      </section>

      <section id="carta" className="py-20 bg-[linear-gradient(180deg,#e6f7ff,#fffaf0)]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-900 mb-10">📋 Carta</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-amber-700">🥖 Bocatas</h3>
              <div className="space-y-4">
                {bocatas.map((item) => (
                  <article key={item.nombre} className="group rounded-2xl bg-white border border-amber-100 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-lg">{item.nombre}</h4>
                        <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                      </div>
                      <span className="text-amber-700 font-bold whitespace-nowrap">{item.precio}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-700">🍹 Cubatas</h3>
              <div className="space-y-4">
                {cubatas.map((item) => (
                  <article key={item.nombre} className="group rounded-2xl bg-white border border-cyan-100 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-bold text-lg">{item.nombre}</h4>
                        <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                      </div>
                      <span className="text-cyan-700 font-bold whitespace-nowrap">{item.precio}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ubicacion" className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-800 mb-4">📍 Ubicación</h2>
            <p className="text-slate-700 mb-6">Estamos a pie de playa, listos para servirte bocatas, cubatas y buen rollo todos los días.</p>
            <a
              href="https://maps.app.goo.gl/agWgdR4go7Q3vLWV8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-600 text-white font-semibold hover:bg-cyan-700 hover:scale-105 transition"
            >
              🧭 Ver en Google Maps
            </a>
          </div>
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg min-h-[320px] bg-white">
            <iframe
              title="Mapa Chiringuito Bar la Playa"
              src="https://www.google.com/maps?q=41.3851,2.1734&z=14&output=embed"
              className="w-full h-full min-h-[320px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section id="redes" className="py-20 bg-[linear-gradient(180deg,#fffaf0,#e6f7ff)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-900 mb-4">📸 Redes Sociales</h2>
          <p className="text-slate-700 text-lg mb-8">
            Síguenos en Instagram para ver novedades, fotos y ambiente del chiringuito.
          </p>
          <a
            href="https://www.instagram.com/chiringuitobarlaplaya?igsh=eXA5b3hmamhjYzlq"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            <span className="text-xl">📷</span> Abrir Instagram
          </a>
        </div>
      </section>

      <footer className="bg-cyan-950 text-cyan-50">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl">Chiringuito Bar la Playa</h3>
            <p className="text-cyan-100/80 mt-2">Tu parada favorita frente al mar.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Enlaces rápidos</h4>
            <ul className="space-y-1 text-cyan-100/80">
              <li><a href="#carta" className="hover:text-white">Carta</a></li>
              <li><a href="#ubicacion" className="hover:text-white">Cómo llegar</a></li>
              <li><a href="#redes" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Ven a visitarnos</h4>
            <p className="text-cyan-100/80">Atardeceres, buena comida y cubatas bien fríos te esperan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
