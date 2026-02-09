import { useContext } from "react";
import { FiltersContext } from "../context/filtersContext";
import type { Product } from "../types/product";

export function useFilters (){
    const context = useContext(FiltersContext);

    if (!context) {
        throw new Error("useFilters debe usarse dentro de un FilterProvider");
    }

    const { filter, setFilter } = context;

    const filterProducts = (products: Product[]) => {
        return products.filter((product) => {
            return (
                product.price <= filter.maxPrice &&
                (filter.category == 'Todas' || product.category == filter.category) &&
                product.inStock === true
            );
        });
    }
    return {filter , filterProducts, setFilter}
}