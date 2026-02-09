/**
 * Footer.tsx
 * ------------------------------------------------------
 * Footer moderno y responsive
 * Mobile-first | Dark / Light | UX profesional
 * Incluye contacto vía WhatsApp al hacer clic en tu nombre
 */

import { useTeam } from "../context/teamContext";

export default function Footer() {
  const { theme } = useTeam();

  // Fondos según tema
  const footerBg =
    theme === "Dark"
      ? "bg-gray-900 text-gray-100"
      : theme === "Light"
      ? "bg-white text-gray-900"
      : "bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 text-gray-800";

  return (
    <footer className={`${footerBg} py-8 px-4`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Información de la tienda */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold">Shopping Jhon</h3>
          <p className="text-sm text-gray-500">
            Todos los derechos reservados © {new Date().getFullYear()}
          </p>
        </div>

        {/* Contacto */}
        <div className="text-center md:text-right">
          <p className="text-sm">
            Creado por{" "}
            <a
              href="https://wa.me/5355555555" // Cambia este número por tu WhatsApp real
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-indigo-600 hover:text-indigo-400 transition-colors"
            >
              Jonathan García
            </a>
          </p>
          <p className="text-sm text-gray-500">
            Contáctame para una web como esta
          </p>
        </div>
      </div>

      {/* Separador animado */}
      <div className="mt-6 h-px w-full bg-gray-300/40 dark:bg-gray-700/40 animate-pulse"></div>
    </footer>
  );
}
