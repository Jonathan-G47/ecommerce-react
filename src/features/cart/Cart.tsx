import { useCart } from "../../context/cartContext";
import type { CartItem } from "./typesCart";
import { useTeam } from "../../context/teamContext";

export function Cart({ onClose }: { onClose: () => void }) {
    const { cart, deleteFromCart, clearCart } = useCart();
    const { theme } = useTeam();

    // 🎨 Fondos según theme
    const bgHeader = theme === "Dark" ? "bg-gray-900 text-white border-b border-white/20" :
                     theme === "Light" ? "bg-white text-gray-900 border-b border-gray-200" :
                     "bg-gradient-to-r from-sky-600 to-cyan-500 text-white";

    const bgBody = theme === "Dark" ? "bg-gray-800 text-white" :
                   theme === "Light" ? "bg-white text-gray-900" :
                   "bg-white/90 text-gray-900";

    const bgFooter = theme === "Dark" ? "bg-gray-900 text-white border-t border-white/20" :
                     theme === "Light" ? "bg-white text-gray-900 border-t border-gray-200" :
                     "bg-white/90 text-gray-900 border-t border-white/30";

    const btnPrimary = theme === "Dark" ? "bg-blue-600 hover:bg-blue-700 text-white" :
                       theme === "Light" ? "bg-blue-500 hover:bg-blue-600 text-white" :
                       "bg-blue-500 hover:bg-blue-600 text-white";

    const btnSecondary = theme === "Dark" ? "bg-green-600 hover:bg-green-700 text-white" :
                         theme === "Light" ? "bg-green-500 hover:bg-green-600 text-white" :
                         "bg-green-500 hover:bg-green-600 text-white";

    const btnDelete = theme === "Dark" ? "bg-red-600 hover:bg-red-700 text-white" :
                      theme === "Light" ? "bg-red-500 hover:bg-red-600 text-white" :
                      "bg-red-500 hover:bg-red-600 text-white";

    const btnClose = theme === "Dark" ? "bg-red-700 text-white hover:bg-red-800" :
                     theme === "Light" ? "bg-red-500 text-black hover:bg-red-600" :
                     "bg-red-500 text-black hover:bg-red-600";

    // Si el carrito está vacío
    if (cart.items.length === 0) {
        return (
            <div className="fixed right-0 top-0 w-full sm:w-96 h-screen shadow-lg flex flex-col">
                {/* Header */}
                <div className={`flex justify-between items-center p-4 ${bgHeader}`}>
                    <h2 className="text-xl font-bold">🛒 Carrito</h2>
                    <button
                        onClick={onClose}
                        className={`font-bold px-3 py-1 rounded-md transition ${btnClose}`}
                    >
                        X
                    </button>
                </div>

                {/* Body vacío */}
                <div className={`flex-1 flex items-center justify-center ${bgBody}`}>
                    <h3 className="text-2xl font-semibold">
                        El carrito está vacío
                    </h3>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed right-0 h-screen top-0 w-full sm:w-96 shadow-lg flex flex-col">
            {/* Header */}
            <div className={`flex justify-between items-center p-4 ${bgHeader}`}>
                <h2 className="text-xl font-bold">🛒 Carrito de Compras</h2>
                <button
                    onClick={onClose}
                    className={`font-bold px-3 py-1 rounded-md transition ${btnClose}`}
                >
                    X
                </button>
            </div>

            {/* Body con scroll (60vh) */}
            <div className={`flex-1 overflow-y-auto p-4 ${bgBody}`} style={{ maxHeight: "60vh" }}>
                <ul className="space-y-4">
                    {cart.items.map((item: CartItem) => (
                        <li
                            key={item.product.id}
                            className={`flex justify-between items-center rounded-lg shadow p-3 ${
                                theme === "Dark"
                                    ? "bg-gray-700 text-white"
                                    : theme === "Light"
                                    ? "bg-gray-50 text-gray-900"
                                    : "bg-white/90 text-gray-900"
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={item.product.image}
                                    alt={item.product.name}
                                    className="w-16 h-16 object-cover rounded-md"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.product.name}</h3>
                                    <p className="text-sm">Cantidad: {item.quantity}</p>
                                    <p className="text-sm">
                                        Precio: ${item.product.price}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => deleteFromCart(item.product)}
                                className={`px-3 py-1 rounded-md transition ${btnDelete}`}
                            >
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer fijo abajo */}
            <div className={`p-4 shadow-inner ${bgFooter}`}>
                <h3 className="text-lg font-bold mb-2">
                    Total: ${cart.total.toFixed(2)}
                </h3>
                <div className="flex gap-2">
                    <button
                        onClick={clearCart}
                        className={`flex-1 p-2 rounded-md transition ${btnPrimary}`}
                    >
                        Vaciar carrito
                    </button>
                    <button
                        onClick={() => alert("Comprar productos")}
                        className={`flex-1 p-2 rounded-md transition ${btnSecondary}`}
                    >
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
}
