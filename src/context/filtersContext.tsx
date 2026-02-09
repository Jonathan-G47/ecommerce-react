/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode} from "react";
import type { FiltersContextType, FilterState } from "../types/product";
interface FilterProviderProps { children: ReactNode; }

//1- Crear el contexto, este es el que se consume
export const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

//2- Crear el Provedier, para proveer el contexto, este es el que nos provee el acceso
export function FilterProvider({ children } : FilterProviderProps){
    const [filter, setFilter] = useState<FilterState>({
        category: "Todas",
        maxPrice: 10000, 
    });

    return(
        <FiltersContext.Provider value={{
            filter,
            setFilter
        }}
        >
            {children}
        </FiltersContext.Provider>
    );
};

// Custom Hook para consumir el contexto 
export function useFilters() { 
    const context = useContext(FiltersContext); 
    if (!context) { 
        throw new Error("useFilters debe usarse dentro de un CartProvider"); 
    } 
    return context;
}