/**
 * ProductCard.tsx
 * ------------------------------------------------------
 * Tarjeta de producto compacta y consistente
 * Optimizada para móvil y desktop
 * Animaciones y colores profesionales para tienda moderna
 */

import type { Product } from "../../types/product";
import { useTeam } from "../../context/teamContext";
import { useCart } from "../../context/cartContext";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { theme } = useTeam();
  const [addedPulse, setAddedPulse] = useState(false);

  // Clase de tema
  const themeClasses =
    theme === "Dark"
      ? "bg-gray-900 text-white border-gray-800"
      : theme === "Light"
      ? "bg-white text-gray-900 border-gray-200"
      : "bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-gray-800 border-transparent";

  // Agregar producto al carrito con animación de pulse
  const handleAddToCart = () => {
    addToCart(product);
    setAddedPulse(true);
    setTimeout(() => setAddedPulse(false), 400);
  };

  return (
    <article
      className={`
        flex flex-col
        w-full
        max-w-[180px] sm:max-w-[200px] lg:max-w-[230px]
        border rounded-xl
        shadow-md
        transition-transform duration-300
        hover:-translate-y-1 hover:shadow-xl
        ${themeClasses}
      `}
    >
      {/* Imagen */}
      <div className="h-[120px] sm:h-[130px] lg:h-[140px] overflow-hidden rounded-t-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Contenido */}
      <div className="px-3 py-2 flex flex-col gap-1 flex-1">
        {/* Nombre */}
        <h3 className="text-xs sm:text-sm font-semibold line-clamp-2 min-h-8">
          {product.name}
        </h3>

        {/* Precio */}
        <span className="text-sm sm:text-base font-bold">
          ${product.price.toFixed(2)}
        </span>

        {/* Botón agregar */}
        <button
          onClick={handleAddToCart}
          aria-label={`Agregar ${product.name} al carrito`}
          className={`
            mt-2
            w-full py-1.5
            rounded-md
            bg-indigo-600
            text-white text-sm font-semibold
            flex items-center justify-center gap-1
            transition-all duration-200
            hover:bg-purple-600
            active:scale-95
            ${addedPulse ? "animate-pulse" : ""}
            focus:outline-none focus:ring-2 focus:ring-indigo-400
          `}
        >
          Agregar 🛒
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
