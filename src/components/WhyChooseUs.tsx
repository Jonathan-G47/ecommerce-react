/**
 * WhyChooseUs.tsx
 * ------------------------------------------------------
 * Sección animada: ¿Por qué elegirnos? + Testimonios
 * Mobile-first | Dark / Light / Normal
 * Animaciones al entrar en viewport y responsive
 */

import { useTeam } from "../context/teamContext";
import { useEffect, useRef, useState } from "react";

export default function WhyChooseUs() {
  const { theme } = useTeam();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Detecta si la sección está visible para animar
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

  // Fondo y colores según tema
  const sectionBg =
    theme === "Dark"
      ? "bg-gray-950 text-gray-100"
      : theme === "Light"
      ? "bg-white text-gray-900"
      : "bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800";

  const cardBg =
    theme === "Dark"
      ? "bg-gray-900 border-gray-800 text-white"
      : theme === "Light"
      ? "bg-white border-gray-200 text-gray-900"
      : "bg-white border-gray-200 text-gray-900";

  // Beneficios y testimonios
  const benefits = [
    {
      icon: "📦",
      title: "Productos reales",
      text: "Todo lo que ves está disponible. Sin cuentos ni falsas promesas.",
    },
    {
      icon: "🚚",
      title: "Entrega coordinada",
      text: "Nos comunicamos contigo para garantizar una entrega segura.",
    },
    {
      icon: "📞",
      title: "Atención directa",
      text: "Te atendemos por WhatsApp o llamada antes y después de la compra.",
    },
    {
      icon: "🤝",
      title: "Confianza y seriedad",
      text: "Nuestro objetivo es que vuelvas a comprar con tranquilidad.",
    },
  ];

  const testimonials = [
    {
      text:
        "Muy buena atención. Me explicaron todo antes de comprar y cumplieron con la entrega.",
      name: "Carlos M.",
      city: "La Habana",
    },
    {
      text:
        "El producto llegó tal como lo mostraban. Me dio confianza desde el primer contacto.",
      name: "Yanelis R.",
      city: "Artemisa",
    },
    {
      text:
        "Respondieron rápido por WhatsApp y fueron muy serios. Recomiendo la tienda.",
      name: "Luis A.",
      city: "Mayabeque",
    },
  ];

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className={`${sectionBg} py-8 px-4 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto">

        {/* TÍTULO PRINCIPAL */}
        <header className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            Compras seguras, atención real y productos disponibles. Pensado para clientes en Cuba.
          </p>
        </header>

        {/* BENEFICIOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {benefits.map((item, index) => (
            <div
              key={index}
              className={`${
                cardBg
              } border rounded-xl p-6 text-center shadow-md transform transition duration-500 hover:-translate-y-1 hover:shadow-xl`}
              style={{
                animation: visible ? `slide-up 0.6s ease forwards` : "none",
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.text}</p>
            </div>
          ))}
        </div>

        {/* TESTIMONIOS */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
            Opiniones de nuestros clientes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`${cardBg} border rounded-xl p-6 shadow-md transform transition duration-500 hover:shadow-lg`}
                style={{
                  animation: visible ? `fade-in 0.6s ease forwards` : "none",
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <p className="text-sm text-gray-500 leading-relaxed">
                  “{item.text}”
                </p>
                <div className="mt-4 font-semibold">
                  — {item.name},{" "}
                  <span className="text-gray-500 font-normal">{item.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ANIMACIONES CUSTOM CSS */}
      <style>
        {`
          @keyframes slide-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </section>
  );
}
