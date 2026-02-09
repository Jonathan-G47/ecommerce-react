/**
 * WhereWeAre.tsx
 * ------------------------------------------------------
 * Sección de localización de la tienda
 * Mobile-first | Dark / Light / Normal
 * Mapas integrados + dirección + animaciones al scroll
 */

import { useTeam } from "../context/teamContext";
import { useEffect, useRef, useState } from "react";

export default function WhereWeAre() {
  const { theme } = useTeam();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Detectar entrada en viewport para animación
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Fondos según tema
  const sectionBg =
    theme === "Dark"
      ? "bg-gray-900 text-white"
      : theme === "Light"
      ? "bg-white text-gray-900"
      : "bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800";

  const cardBg =
    theme === "Dark"
      ? "bg-gray-800 border-gray-700 text-white"
      : theme === "Light"
      ? "bg-white border-gray-200 text-gray-900"
      : "bg-white border-gray-200 text-gray-900";

  return (
    <section
      ref={sectionRef}
      className={`w-full py-15 px-4 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${sectionBg}`}
      id="where-we-are"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Encabezado */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
          Dónde Estamos
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mb-12 max-w-xl mx-auto">
          Visítanos en nuestra tienda física en Cuba. Estamos listos para atenderte y ofrecerte los mejores productos.
        </p>

        {/* Card de ubicación + mapa */}
        <div
          className={`${cardBg} border rounded-xl shadow-md p-6 mx-auto max-w-3xl transition-transform transform hover:-translate-y-1 hover:shadow-xl`}
        >
          {/* Dirección */}
          <div className="mb-4 text-left">
            <h3 className="font-semibold text-lg mb-2">Nuestra Dirección</h3>
            <p>Av. 23, esquina a Calle 12, Plaza Central, La Habana, Cuba</p>
            <p>Horario: Lunes a Sábado 9:00 AM – 6:00 PM</p>
          </div>

          {/* Mapa incrustado */}
          <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-300">
            <iframe
              title="Mapa de la tienda"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.732617676945!2d-82.38168968468091!3d23.11359268488701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd4f0c3a54b4d5%3A0x123456789abcdef0!2sAv.%2023%2C%20La%20Habana%2C%20Cuba!5e0!3m2!1ses!2sus!4v1670000000000!5m2!1ses!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Animaciones custom CSS */}
      <style>
        {`
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}
