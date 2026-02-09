import { createContext, useContext, useState , type ReactNode} from "react";
import type { Product } from "../types/product";

interface CartProviderProps { children: ReactNode; }

interface CartItem{
    product: Product;
    quantity: number;
};

interface CartState{
    items: CartItem[];
    total: number;
};

interface CartContextType {
    cart: CartState;
    addToCart: (product: Product) => void;
    deleteFromCart: (product: Product) => void;
    clearCart: () => void;
    setCart: React.Dispatch<React.SetStateAction<CartState>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider ({children} : CartProviderProps) {

    const [cart, setCart] = useState<CartState>({
        items: [],
        total: 0,
    });

    const addToCart = (product: Product) => {
        setCart(prevCart => {
             // Verificamos si el producto ya está en el carrito
            const existingItem = prevCart.items.find(item => item.product.id === product.id);

            let newItems;
            // Si el producto ya está, aumentamos la cantidad
            if (existingItem) {
                newItems = prevCart.items.map(item =>
                    item.product.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                );
                
            // Si el producto no está, lo agregamos al carrito
            } else {
                newItems = [...prevCart.items, { product, quantity: 1 }];
            }
            // Recalcular el total
            const total = newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
        return { items: newItems, total };
        });
    };

    const clearCart = () => {
        setCart({
            items: [],
            total: 0,
        })
    }

    const deleteFromCart = (product: Product) => {
        setCart(prevCart => {
            const existingItem = prevCart.items.find(item => item.product.id === product.id);

            let newItems = prevCart.items;
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    newItems = prevCart.items.map(item =>
                    item.product.id === product.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
                    );
                } else {
                newItems = prevCart.items.filter(item => item.product.id !== product.id);
                }
            }
            const total = newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
            return { items: newItems, total };
        });
    };

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            deleteFromCart,
            clearCart,
            setCart
        }}>
            {children}
        </CartContext.Provider>
    );
}

// Custom Hook para consumir el contexto 
// eslint-disable-next-line react-refresh/only-export-components
export function useCart() { 
    const context = useContext(CartContext); 
    if (!context) { 
        throw new Error("useCart debe usarse dentro de un CartProvider"); 
    } 
    return context;
}