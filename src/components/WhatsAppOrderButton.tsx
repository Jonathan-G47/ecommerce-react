/**
 * WhatsAppOrderButton.tsx
 * ------------------------------------------------------
 * Botón flotante que indica al usuario que hay productos en el carrito.
 * - Aparece solo si hay productos en el carrito y el drawer del carrito está cerrado.
 * - Abre el carrito al hacer click.
 * - Colores y animaciones se ajustan según el theme (Dark, Light, Normal).
 */

import { useEffect, useState } from "react";
import { useCart } from "../context/cartContext"; // Hook para acceder al carrito
import { useTeam } from "../context/teamContext"; // Hook para acceder al theme

// Tipado de las props del componente
interface WhatsAppOrderButtonProps {
  openCart: () => void; // Función que abre el drawer del carrito
  isCartOpen: boolean;   // Estado que indica si el carrito está abierto
}

// Componente principal
export default function WhatsAppOrderButton({
  openCart,
  isCartOpen,
}: WhatsAppOrderButtonProps) {
  // 🔹 Obtener carrito desde el contexto
  const { cart } = useCart();

  // 🔹 Obtener theme desde el contexto (Dark, Light, Normal)
  const { theme } = useTeam();

  // 🔹 Estado interno para controlar visibilidad del botón
  const [show, setShow] = useState<boolean>(false);

  /**
   * useEffect: decidir si el botón se muestra
   * - Solo se muestra si hay productos en el carrito
   * - Solo se muestra si el carrito está cerrado
   */
  useEffect(() => {
    if (cart && Array.isArray(cart.items)) {
      setShow(cart.items.length > 0 && !isCartOpen);
    }
  }, [cart, isCartOpen]); // Se actualiza cuando cambian los items o el estado del carrito

  // Si no debe mostrarse, retornar null (no renderiza nada)
  if (!show) return null;

  /**
   * Colores y estilos según theme
   * - Dark: verde oscuro
   * - Light: verde claro
   * - Normal: gradiente verde llamativo
   */
  const bgButton: string =
    theme === "Dark"
      ? "bg-green-600 hover:bg-green-700 text-white"
      : theme === "Light"
      ? "bg-green-500 hover:bg-green-600 text-white"
      : "bg-gradient-to-r from-green-400 to-green-500 text-white hover:from-green-500 hover:to-green-600";

  return (
    /**
     * Botón flotante
     * - Fijo en esquina inferior derecha
     * - Animación de bounce para llamar atención
     * - Efecto hover con ligero zoom
     */
    <button
      onClick={openCart} // Llama la función que abre el carrito
      className={`
        fixed bottom-5 right-5 z-50
        ${bgButton}       // Colores según theme
        font-bold
        py-3 px-5
        rounded-full
        shadow-2xl
        animate-bounce
        hover:scale-110
        transition-all duration-300
        flex items-center gap-2
      `}
    >
      🛒 Abrir carrito
    </button>
  );
}
