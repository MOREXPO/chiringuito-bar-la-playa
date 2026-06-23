const menuSections = [
  {
    title: "🍽️ Raciones",
    accent: "cyan",
    items: [
      ["Ensalada simple (tomate, lechuga y cebolla)", "7,50 €"],
      ["Ensalada con atún", "8,50 €"],
      ["Tortilla española", "15,00 €"],
      ["Patatas fritas", "4,50 €"],
      ["Criollo con patatas", "10,00 €"],
      ["Croquetas de jamón ibérico", "13,00 €"],
      ["Croquetas de centolla", "16,00 €"],
      ["Croquetas de choco en tinta", "14,00 €"],
      ["Fingers de pollo", "9,00 €"],
      ["Jamón asado", "12,00 €"],
      ["Pan", "2,00 €"],
    ],
  },
  {
    title: "🥖 Bocatas",
    accent: "amber",
    items: [
      ["Tortilla", "7,00 €"],
      ["Criollo", "7,00 €"],
      ["Jamón asado", "8,00 €"],
      ["Jamón asado con queso", "8,50 €"],
    ],
  },
  {
    title: "🥪 Sándwiches",
    accent: "cyan",
    items: [
      ["Mixto", "4,00 €", "jamón y queso"],
      ["Sándwich de Sempre Pero Mellor", "8,00 €", "jamón, queso, lomo, bacon y huevo"],
    ],
  },
  {
    title: "🍔 Hamburguesas",
    accent: "amber",
    items: [
      ["Hamburguesa simple", "6,50 €", "queso"],
      ["Hamburguesa Chiringuito Bar La Playa", "9,50 €", "queso, bacon, huevo y cebolla caramelizada"],
    ],
  },
  {
    title: "🍕 Pizzas",
    accent: "cyan",
    items: [
      ["Salami", "14,50 €"],
      ["Prosciutto", "14,50 €"],
      ["BBQ de pollo", "15,50 €"],
    ],
  },
  {
    title: "🍰 Postres",
    accent: "amber",
    items: [
      ["Cheesecake de frutos rojos", "6,00 €"],
      ["Tres chocolates", "6,00 €"],
    ],
  },
  {
    title: "🥐 Desayunos",
    accent: "cyan",
    items: [
      ["Donut de azúcar", "1,80 €"],
      ["Donut de chocolate", "1,80 €"],
      ["Croissant", "1,80 €"],
      ["Napolitana de chocolate", "2,00 €"],
      ["Tostada con mantequilla y mermelada", "2,50 €"],
      ["Tostada con aceite, tomate y jamón serrano", "4,50 €"],
    ],
  },
  {
    title: "☕ Cafetería",
    accent: "amber",
    showPrices: false,
    items: [
      ["Café solo", "1,40 €"],
      ["Espresso americano", "1,60 €"],
      ["Café con leche pequeño", "1,60 €"],
      ["Café con leche grande", "1,80 €"],
      ["Descafeinado de máquina", "1,50 €"],
      ["Descafeinado de sobre", "1,50 €"],
      ["Descafeinado grande (máquina)", "1,80 €"],
      ["Descafeinado grande (sobre)", "1,80 €"],
      ["Colacao", "2,20 €"],
      ["Infusiones", "1,80 €"],
      ["Zumo natural", "3,00 €"],
    ],
  },
  {
    title: "🥤 Refrescos",
    accent: "cyan",
    showPrices: false,
    items: [
      ["Agua pequeña", "1,50 €"],
      ["Agua grande", "2,50 €"],
      ["Agua con gas", "2,50 €"],
      ["Coca-Cola", "2,70 €"],
      ["Coca-Cola Zero", "2,70 €"],
      ["Aquarius Limón", "2,70 €"],
      ["Aquarius Naranja", "2,70 €"],
      ["Lipton Limón", "2,70 €"],
      ["Lipton Maracuyá", "2,70 €"],
      ["Kas Limón lata", "2,70 €"],
      ["Kas Naranja lata", "2,70 €"],
      ["Kas Limón botella", "2,80 €"],
      ["Kas Naranja botella", "2,80 €"],
      ["Seven Up", "2,70 €"],
      ["Trina Manzana", "2,70 €"],
      ["Tónica", "2,50 €"],
      ["Mosto Blanco", "2,50 €"],
      ["Cacaolat", "2,50 €"],
      ["Zumo de Piña", "2,50 €"],
      ["Zumo de Melocotón", "2,50 €"],
    ],
  },
  {
    title: "🍺 Cervezas",
    accent: "amber",
    showPrices: false,
    items: [
      ["Mahou caña", "2,50 €"],
      ["Mahou Radler", "2,50 €"],
      ["Mahou Maestra", "2,80 €"],
      ["Alhambra Reserva 1925", "2,80 €"],
      ["Mahou Tostada 0,0", "2,50 €"],
      ["Mahou Sin Gluten", "2,80 €"],
    ],
  },
  {
    title: "🍷 Aperitivos",
    accent: "cyan",
    showPrices: false,
    items: [
      ["Martini Rojo", "3,00 €"],
      ["Martini Blanco", "3,00 €"],
      ["Tinto de Verano", "3,00 €"],
    ],
  },
  {
    title: "🥃 Chupitos",
    accent: "amber",
    showPrices: false,
    items: [
      ["Chupito", "2,50 €"],
      ["Chupito con hielo", "3,00 €"],
    ],
  },
  {
    title: "🍸 Copas",
    accent: "cyan",
    showPrices: false,
    items: [
      ["Ginebra + refresco", "7,00 €"],
      ["Ron + refresco", "7,00 €"],
      ["Whisky + refresco", "7,00 €"],
      ["+1 con Red Bull", "1,00 €"],
    ],
  },
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
          <div className="mt-5 space-y-2 text-cyan-50">
            <p className="text-lg md:text-2xl">De Queiruga a Coroso, manteniendo viva una tradición familiar.</p>
            <p className="text-base md:text-xl">Pizzas, hamburguesas, bocatas, postres y el mejor ambiente frente al mar.</p>
          </div>
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
          <div className="space-y-4 text-slate-700 leading-relaxed text-lg">
            <p>
              <strong>Chiringuito Bar La Playa</strong> nace como homenaje a nuestros abuelos/bisabuelos, que durante años regentaron el mítico Bar La Playa de Queiruga.
            </p>
            <p>
              Hoy recuperamos su nombre y su esencia para seguir compartiendo lo que mejor sabemos hacer: buena comida, momentos junto al mar y el sabor de las cosas hechas con cariño.
            </p>
            <p>
              Bienvenidos a nuestra historia. Bienvenidos al chiringuito Bar La Playa.
            </p>
          </div>
        </div>
      </section>

      <section id="carta" className="py-20 bg-[linear-gradient(180deg,#e6f7ff,#fffaf0)]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-900 mb-4">📋 Carta</h2>
          <p className="text-slate-600 mb-8 italic">Consulte información sobre alérgenos al personal.</p>
          <div className="grid lg:grid-cols-2 gap-8">
            {menuSections.map((section) => (
              <div
                key={section.title}
                className={`rounded-3xl border bg-white p-8 shadow-xl ${
                  section.accent === "amber" ? "border-amber-100" : "border-cyan-100"
                }`}
              >
                <h3
                  className={`text-2xl font-bold mb-5 ${
                    section.accent === "amber" ? "text-amber-700" : "text-cyan-700"
                  }`}
                >
                  {section.title}
                </h3>
                <div className="space-y-3 text-slate-800">
                  {section.items.map(([name, price, detail]) => (
                    <div key={name} className="flex items-start justify-between gap-4 border-b border-slate-100 pb-2">
                      <p className="font-medium leading-snug">
                        {name}
                        {detail ? <span className="block text-sm font-normal text-slate-500">{detail}</span> : null}
                      </p>
                      {section.showPrices !== false ? (
                        <span className="font-semibold whitespace-nowrap">{price}</span>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ubicacion" className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-800 mb-4">📍 Ubicación</h2>
            <p className="text-slate-700 mb-6">Estamos a pie de playa, listos para servirte bocatas, cubatas y buen rollo todos los días.</p>
            <a
              href="https://maps.app.goo.gl/rKDeL2gdtwhgYnD26"
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
              src="https://maps.google.com/maps?output=embed&q=Av.+de+la+Coru%C3%B1a,+178,+15968+Ribeira,+A+Coru%C3%B1a&ll=42.5635,-8.9916&z=16&t=m"
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
            <p className="text-cyan-100/90 mt-3">📞 Teléfono: <a href="tel:+34634086988" className="hover:text-white font-semibold">634 086 988</a></p>
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
            <p className="text-cyan-100/80 mt-3">Web hecha por <a href="https://morexpo.iamoex.com" target="_blank" rel="noreferrer" className="font-semibold hover:text-white">MOREXPO</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
