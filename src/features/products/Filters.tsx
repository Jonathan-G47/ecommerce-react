import { useId } from "react";
import { useFilters } from "../../hooks/useFilters";
import type { FilterState } from "../../types/product";
import { useTeam } from "../../context/teamContext";

export default function Filters() {
  const { filter, setFilter } = useFilters();
  const { theme } = useTeam();

  const maxPriceFilterId = useId();
  const categoryFilterID = useId();

  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setFilter((prevState: FilterState) => ({
      ...prevState,
      maxPrice: value,
    }));
  };

  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilter((prevState: FilterState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  const cardStyle =
    theme === "Dark"
      ? "bg-zinc-900 text-white"
      : theme === "Light"
      ? "bg-white text-gray-900"
      : "bg-sky-50 text-gray-900";

  return (
    <section
      className="w-full flex justify-center px-4"
    >
      <div
        className={`
          w-full max-w-4xl
          ${cardStyle}
          rounded-2xl
          shadow-md
          p-5
          flex flex-col gap-6
          sm:flex-row sm:items-center sm:justify-between
        `}
      >
        {/* Filtro precio */}
        <div className="flex flex-col gap-2 w-full sm:w-1/2">
          <label
            htmlFor={maxPriceFilterId}
            className="text-sm font-semibold"
          >
            Precio máximo
          </label>

          <input
            id={maxPriceFilterId}
            type="range"
            min={0}
            max={10000}
            value={filter.maxPrice}
            onChange={handleChangePrice}
            className="
              w-full
              accent-sky-500
              cursor-pointer
            "
          />

          <span className="text-sm text-gray-500">
            Hasta <strong>${filter.maxPrice}</strong>
          </span>
        </div>

        {/* Filtro categoría */}
        <div className="flex flex-col gap-2 w-full sm:w-1/3">
          <label
            htmlFor={categoryFilterID}
            className="text-sm font-semibold"
          >
            Categoría
          </label>

          <select
            id={categoryFilterID}
            onChange={handleChangeCategory}
            className="
              w-full
              rounded-lg
              border
              px-3 py-2
              text-sm
              focus:outline-none
              focus:ring-2 focus:ring-sky-500
              transition
            "
          >
            <option value="Todas">Todas</option>
            <option value="Teclado">Teclado</option>
            <option value="Mouse">Mouse</option>
            <option value="Lampara">Lámpara</option>
            <option value="Audifonos">Audífonos</option>
          </select>
        </div>
      </div>
    </section>
  );
}
