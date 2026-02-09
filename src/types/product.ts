export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    inStock: boolean;
    category: string;
}

// Definimos el tipo del estado 
export interface FilterState { 
    category: string; 
    maxPrice: number; 
} 

// Definimos el tipo del contexto 
export interface FiltersContextType { 
    filter: FilterState; 
    setFilter: React.Dispatch<React.SetStateAction<FilterState>>; 
}
