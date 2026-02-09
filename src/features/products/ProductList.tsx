/**
 * ProductList.tsx
 * ------------------------------------------------------
 * Grid de productos con animación al entrar en viewport
 * Paleta de colores moderna y consistente con ProductCard
 * Animación en cascada para tarjetas
 */

import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "../../types/product";
import { useTeam } from "../../context/teamContext";

interface ProductListProps {
  filterProd: Product[];
}

const ProductList = ({ filterProd }: ProductListProps) => {
  const { theme } = useTeam();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Animación al entrar en viewport
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

  if (filterProd.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No hay productos disponibles
      </p>
    );
  }

  // Fondo según tema
  const bgTheme =
    theme === "Dark"
      ? "bg-gray-900"
      : theme === "Light"
      ? "bg-gray-100"
      : "bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50";

  return (
    <section
      ref={sectionRef}
      id="catalogo"
      className={`w-full transition-all mb-3.5 duration-700 ${bgTheme} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Encabezado */}
      <header className="text-center py-10 px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
          Nuestro Catálogo
        </h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto">
          Productos seleccionados con calidad y precios pensados para ti
        </p>
      </header>

      {/* Grid */}
      <main
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 px-3 max-w-7xl mx-auto"
        aria-live="polite"
      >
        {filterProd.map((product, index) => (
          <div
            key={product.id}
            className={`transform transition duration-500 delay-${
              index * 100
            } opacity-0 ${visible ? "opacity-100 translate-y-0" : "translate-y-10"}`}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </main>
    </section>
  );
};

export default ProductList;
