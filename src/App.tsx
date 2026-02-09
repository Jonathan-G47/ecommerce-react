/**
 * App.tsx
 * ------------------------------------------------------
 * Componente raíz de la aplicación.
 * Define el layout general, tema visual
 * y estructura principal de la tienda.
 */

import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Header from "./features/Header";
import Filters from "./features/products/Filters";
import ProductList from "./features/products/ProductList";

import { useTeam } from "./context/teamContext";
import { useFilters } from "./hooks/useFilters";

import products from "./data/products";
import WhereWeAre from "./components/WhereWeAre";
import Footer from "./components/Footer";

function App() {
  const { theme } = useTeam();
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  /**
   * Clases base según tema
   * El tema NORMAL es el diseño principal de la tienda
   */
  const baseThemeClasses =
    theme === "Dark"
      ? "bg-neutral-950 text-neutral-100"
      : theme === "Light"
      ? "bg-white text-neutral-900"
      : // NORMAL (tienda por defecto)
        "bg-slate-50 text-neutral-900";

  return (
    <div className={`min-h-screen w-full ${baseThemeClasses}`}>
      {/* Header fijo */}
      <Header />

      {/* Contenido principal */}
      <main className="flex flex-col gap-12">
        {/* Hero */}
        <Hero />

        {/* Catálogo */}
        <section
          id="catalogo"
          className="w-full max-w-7xl mx-auto px-4 flex flex-col gap-6"
        >
          {/* Título */}
          <header 
            id="catalogo" className=" text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-600">
              Nuestro Catálogo
            </h2>
            <p className="text-sm text-neutral-500 mt-1">
              Productos seleccionados para ti
            </p>
          </header>

          {/* Filtros */}
          <Filters />

          {/* Productos */}
          <ProductList filterProd={filteredProducts} />
        </section>

      </main>
      
        {/* Por qué elegirnos */}
        <WhyChooseUs />
        <WhereWeAre></WhereWeAre>
      <Footer></Footer>
    </div>
  );
}

export default App;
