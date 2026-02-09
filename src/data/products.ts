import type  {Product}  from "../types/product";

const products: Product[] = [
{
    id: 1,
    name: "Audifonos inalambricos", 
    price: 2300, 
    description: "Se escuchan muy bien y le dura la carga", 
    image: "/src/assets/products/audifonos.webp",
    inStock: true,
    category: 'Audifonos',
},
{
    id: 2,
    name: "Audifonos MAX",
    price: 4000,
    description: "Son de alta calidad y prometen mucho",
    image: "/src/assets/products/cascos.webp",
    inStock: true,
    category: 'Audifonos',
},
{
    id: 3,
    name: "keyboard-gamer",
    price: 8000,
    description: "De muy buena calidad para jugar y facil de adaptarse",
    image: "/src/assets/products/keyboard-gamer.webp",
    inStock: true,
    category: 'Teclado',
},
{
    id: 4,
    name: "lampara",
    price: 3500,
    description: "Muy buena luz para trabajar, es conectada a la corriente",
    image: "/src/assets/products/lampara.webp",
    inStock: true,
    category: 'Lampara',
},
{
    id: 5,
    name: "Lampara de Lava",
    price: 5000,
    description: "Muy relajante para las noches es una decoracion perfecta",
    image: "/src/assets/products/lampara-lava.webp",
    inStock: true,
    category: 'Lampara',
},
{
    id: 6,
    name: "Mouse",
    price: 2500,
    description: "Muy comodo para trabajar",
    image: "/src/assets/products/mouse.webp",
    inStock: true,
    category: 'Mouse',
},
{
    id: 7,
    name: "Teclado ASUS",
    price: 2800,
    description: "Teclado comun con luces, especial para trabajar de noche",
    image: "/src/assets/products/teclado.webp",
    inStock: true,
    category: 'Teclado',
},
];

export default products;
