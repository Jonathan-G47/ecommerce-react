/**
 * Header.tsx
 * ------------------------------------------------------
 * Header principal de la tienda.
 * Incluye navegación, selector de tema y carrito con vida.
 * Optimizado para mobile-first.
 */

import { useEffect, useMemo, useState } from "react";
import { useTeam } from "../context/teamContext";
import { useCart } from "../context/cartContext";
import { Cart } from "./cart/Cart";
import WhatsAppOrderButton from "../components/WhatsAppOrderButton";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartPulse, setCartPulse] = useState(false);

  const { theme, setTheme } = useTeam();
  const { cart } = useCart();

  /* 🔢 Total de productos en carrito */
  const totalItems = useMemo(
    () => cart.items.reduce((acc, item) => acc + item.quantity, 0),
    [cart.items]
  );

  /* 🚫 Bloquear scroll cuando hay drawer */
  useEffect(() => {
    document.body.classList.toggle(
      "overflow-hidden",
      isCartOpen || isMenuOpen
    );
  }, [isCartOpen, isMenuOpen]);

  /* 🛒 Abrir carrito SOLO cuando se agrega un producto */
  useEffect(() => {
    const handleAddToCart = () => {
      setIsCartOpen(true);
      setCartPulse(true);
      setTimeout(() => setCartPulse(false), 350);
    };

    window.addEventListener("cart:add", handleAddToCart);
    return () => window.removeEventListener("cart:add", handleAddToCart);
  }, []);

  // 🎨 Fondos según tema (HEADER)
  const sectionBg =
    theme === "Dark"
      ? "bg-gray-900 text-white border-b border-white/10"
      : theme === "Light"
      ? "bg-white text-gray-900 border-b border-gray-200"
      : "bg-gradient-to-r from-sky-600 to-cyan-500 text-white";

  // 🎨 Fondos menú móvil
  const mobileMenuBg =
    theme === "Dark"
      ? "bg-gray-900 text-white"
      : theme === "Light"
      ? "bg-white text-gray-900"
      : "bg-gradient-to-b from-sky-600 to-cyan-500 text-white";

  return (
    <header className={`fixed top-0 left-0 w-full z-40 shadow-md ${sectionBg}`}>
    
    {/* Botón de WhatsApp */}
    <WhatsAppOrderButton
    openCart={() => setIsCartOpen(true)}
    isCartOpen={isCartOpen}
    />

      {/* Barra principal */}
      <div className="flex justify-between items-center px-4 py-3 lg:px-8">
        {/* Logo */}
        <h1 className="font-extrabold text-xl sm:text-2xl tracking-wide">
          Shopping
          <span className={theme === "Light" ? "text-sky-600" : "text-yellow-300"}>
            Jhon
          </span>
        </h1>

        {/* Navegación desktop */}
        <nav className="hidden lg:flex gap-8 text-sm font-medium">
          <a href="#hero" className="hover:text-yellow-300 transition">Inicio</a>
          <a href="#catalogo" className="hover:text-yellow-300 transition">Catálogo</a>
          <a href="#why-choose-us" className="hover:text-yellow-300 transition">
            ¿Por qué elegirnos?
          </a>
          <a href="#where-we-are" className="hover:text-yellow-300 transition">
            Ubicación
          </a>
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-4">
          {/* Selector de tema */}
          <select
            value={theme}
            onChange={(e) =>
              setTheme(e.target.value as "Light" | "Dark" | "Normal")
            }
            className={`
              hidden sm:block
              appearance-none
              rounded-md
              px-3 py-1.5
              text-sm font-medium
              cursor-pointer
              transition
              border
              ${
                theme === "Dark"
                  ? "bg-gray-800 text-white border-white/20 hover:bg-gray-700"
                  : theme === "Light"
                  ? "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                  : "bg-white/90 text-gray-900 border-white/40 hover:bg-white"
              }
            `}
          >
            <option value="Normal">🌈 Normal</option>
            <option value="Light">☀️ Light</option>
            <option value="Dark">🌙 Dark</option>
          </select>

          {/* 🛒 Carrito */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Abrir carrito"
            className={`relative text-2xl transition-transform duration-200 ${
              cartPulse ? "scale-125" : "hover:scale-110"
            }`}
          >
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 min-w-5 text-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* Menú móvil */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-3xl"
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <aside
            className={`absolute left-0 top-0 w-72 h-full shadow-2xl animate-slide-in ${mobileMenuBg}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-white/20">
              <h2 className="text-lg font-bold">Menú</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl hover:text-yellow-300"
              >
                ✖
              </button>
            </div>

            <nav className="flex flex-col gap-5 p-6 text-base font-medium">
              <a href="#hero" onClick={() => setIsMenuOpen(false)}>🏠 Inicio</a>
              <a href="#catalogo" onClick={() => setIsMenuOpen(false)}>🛍️ Catálogo</a>
              <a href="#why-choose-us" onClick={() => setIsMenuOpen(false)}>
                🔥 ¿Por qué elegirnos?
              </a>
              <a href="#where-we-are" onClick={() => setIsMenuOpen(false)}>
                📞 Ubicación
              </a>
            </nav>
          </aside>
        </div>
      )}

      {/* Drawer carrito */}
      {isCartOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsCartOpen(false)}
        >
          <div className="absolute inset-0 bg-black/30"></div>

          <aside
            className={`
              absolute right-0 top-0 w-full sm:w-96 h-full shadow-xl animate-slide-in
              ${theme === "Dark" ? "bg-gray-900 text-white" : "bg-white"}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            <Cart onClose={() => setIsCartOpen(false)} />
          </aside>
        </div>
      )}
    </header>
  );
}
