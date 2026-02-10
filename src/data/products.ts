import type  {Product}  from "../types/product";
import audifonos from '../assets/products/audifonos.webp'
import cascos from '../assets/products/cascos.webp'
import keyboard from '../assets/products/keyboard-gamer.webp'
import lampara from '../assets/products/lampara.webp'
import lava from '../assets/products/lampara-lava.webp'
import mouse from '../assets/products/mouse.webp'
import teclado from '../assets/products/teclado.webp'

const products: Product[] = [
  {
    id: 1,
    name: "Audifonos inalambricos",
    price: 2300,
    description: "Se escuchan muy bien y le dura la carga",
    image: audifonos,
    inStock: true,
    category: 'Audifonos',
  },
  {
    id: 2,
    name: "Audifonos MAX",
    price: 4000,
    description: "Son de alta calidad y prometen mucho",
    image: cascos,
    inStock: true,
    category: 'Audifonos',
  },
  {
    id: 3,
    name: "keyboard-gamer",
    price: 8000,
    description: "De muy buena calidad para jugar y facil de adaptarse",
    image: keyboard,
    inStock: true,
    category: 'Teclado',
  },
  {
    id: 4,
    name: "lampara",
    price: 3500,
    description: "Muy buena luz para trabajar, es conectada a la corriente",
    image: lampara,
    inStock: true,
    category: 'Lampara',
  },
  {
    id: 5,
    name: "Lampara de Lava",
    price: 5000,
    description: "Muy relajante para las noches es una decoracion perfecta",
    image: lava,
    inStock: true,
    category: 'Lampara',
  },
  {
    id: 6,
    name: "Mouse",
    price: 2500,
    description: "Muy comodo para trabajar",
    image: mouse,
    inStock: true,
    category: 'Mouse',
  },
  {
    id: 7,
    name: "Teclado ASUS",
    price: 2800,
    description: "Teclado comun con luces, especial para trabajar de noche",
    image: teclado,
    inStock: true,
    category: 'Teclado',
  },
]


export default products;

