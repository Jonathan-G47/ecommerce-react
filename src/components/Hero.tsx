/**
 * Hero.tsx
 * ------------------------------------------------------
 * Sección principal de presentación.
 * Hero con video de fondo, animaciones suaves
 * y llamado claro a la acción.
 */

import { useTeam } from "../context/teamContext";

export default function Hero() {
  const { theme } = useTeam();

  const handleScrollToCatalogo = () => {
    const catalogoSection = document.getElementById("catalogo");
    if (catalogoSection) {
      catalogoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  /**
   * Overlay según tema
   */
  const overlayClasses =
    theme === "Dark"
      ? "bg-black/60"
      : theme === "Light"
      ? "bg-black/40"
      : "bg-sky-900/50";

  return (
    <section
      id="hero"
      className="relative w-full h-svh overflow-hidden"
    >
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/Tienda1.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClasses}`} />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Título */}
        <h1
          className="
            text-3xl sm:text-5xl lg:text-6xl
            font-extrabold text-white
            drop-shadow-xl
            animate-fade-in-up
          "
        >
          Compra fácil, rápido y seguro
        </h1>

        {/* Subtítulo */}
        <p
            className="
                mt-4 max-w-xl
                text-base sm:text-lg lg:text-xl
                text-white/90
                drop-shadow-md
                animate-fade-in-up
                animation-delay-200
            "
        >
            En <span className="text-yellow-300 font-semibold">Shopping Jhon</span>{" "}
            encuentras productos de calidad, precios justos y atención confiable,
            pensados para ti.
        </p>

        {/* CTA */}
        <button
            onClick={handleScrollToCatalogo}
            className="
                mt-8
                bg-linear-to-r from-sky-500 to-cyan-500
                text-white font-semibold
                px-8 py-4
                rounded-full
                shadow-lg
                transition-all duration-300
                hover:scale-105 hover:shadow-xl
                active:scale-95
                animate-fade-in-up
                animation-delay-400
            "
        >
            🛒 Ver catálogo
        </button>
    </div>
    </section>
    );
}
