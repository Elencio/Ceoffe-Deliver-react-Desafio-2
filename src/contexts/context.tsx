import { ReactNode, createContext, useState } from 'react'
interface TypeElementsOfArray {
  id: number
  title: string
  price: number
  image: string
  description: string
  type: string[]
  type1?: string[]
  type2?: string[]
  quantity: number
}

type CartItem = {
  product: TypeElementsOfArray
  quantity: number
}

interface ContextCoffeeType {
  addToCart: (product: TypeElementsOfArray) => void
  removeFromCart: (product: TypeElementsOfArray) => void
  totalQuantity: number
  CountNUmbers: (product: TypeElementsOfArray) => number
}

export const MenuCoffes: TypeElementsOfArray[] = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    type: ['tradicional'],
    price: 9.9,
    description: 'O tradicional café feito com água quente e grãos moídos.',
    image: 'https://i.ibb.co/Vqkm6s1/cafe-expresso.png',
    quantity: 0,
  },
  {
    id: 2,
    title: 'Expresso Americano',
    type: ['tradicional'],
    price: 9.9,
    description: 'Expresso diluído, menos intenso que o tradicional.',
    image: 'https://i.ibb.co/MVzwRVB/cafe-americano.png',
    quantity: 0,
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    type: ['tradicional'],
    price: 9.9,
    description: 'Café expresso tradicional com espuma cremosa.',
    image: 'https://i.ibb.co/Tm0L253/cafe-expresso-cremoso.png',
    quantity: 0,
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    type: ['tradicional'],
    type1: ['gelado'],
    price: 9.9,
    description: 'Bebida preparada com café expresso e cubos de gelo.',
    image: 'https://i.ibb.co/bK0scLW/cafe-gelado.png',
    quantity: 0,
  },
  {
    id: 5,
    title: 'Café com Leite',
    type: ['tradicional'],
    type1: ['com leite'],
    price: 9.9,
    description: 'Meio a meio de expresso tradicional com leite vaporizado.',
    image: 'https://i.ibb.co/10kjkrd/cafe-leite.png',
    quantity: 0,
  },
  {
    id: 6,
    title: 'Latte',
    type: ['tradicional'],
    type1: ['com leite'],
    price: 9.9,
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa.',
    image: 'https://i.ibb.co/NYn6VCQ/cafe-latte.png',
    quantity: 0,
  },
  {
    id: 7,
    title: 'Capuccino',
    type: ['tradicional'],
    type1: ['com leite'],
    price: 9.9,
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma.',
    image: 'https://i.ibb.co/G0bHstW/cafe-capuccino.png',
    quantity: 0,
  },
  {
    id: 8,
    title: 'Macchiato',
    type: ['tradicional'],
    type1: ['com leite'],
    price: 9.9,
    description:
      'ECafé expresso misturado com um pouco de leite quente e espuma.',
    image: 'https://i.ibb.co/nMTJ34b/cafe-macchiato.png',
    quantity: 0,
  },
  {
    id: 9,
    title: 'Mocaccino',
    type: ['tradicional'],
    type1: ['com leite'],
    price: 9.9,
    description: 'Café expresso com calda de chocolate, pouco leite e espuma.',
    image: 'https://i.ibb.co/G5ZyWWG/cafe-mocaccino.png',
    quantity: 0,
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    type: ['especial'],
    type1: ['Gelado'],
    price: 9.9,
    description:
      'Bebida feita com chocolate dissolvido no leite quente e café.',
    image: 'https://i.ibb.co/Db9v12R/cafe-chocolate-quente.png',
    quantity: 0,
  },
  {
    id: 11,
    title: 'Cubano',
    type: ['especial'],
    type1: ['alcóolico'],
    type2: ['gelado'],
    price: 9.9,
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã.',
    image: 'https://i.ibb.co/JBgKZmk/cafe-cubano.png',
    quantity: 0,
  },
  {
    id: 12,
    title: 'Havaiano',
    type: ['especial'],
    price: 9.9,
    description: 'Bebida adocicada preparada com café e leite de coco.',
    image: 'https://i.ibb.co/7GZ071s/cafe-havaiano.png',
    quantity: 0,
  },
  {
    id: 13,
    title: 'Árabe',
    type: ['especial'],
    price: 9.9,
    description: 'Bebida preparada com grãos de café árabe e especiarias.',
    image: 'https://i.ibb.co/MkwRxWB/cafe-arabe.png',
    quantity: 0,
  },
  {
    id: 14,
    title: 'Irlandês',
    type: ['especial'],
    type1: ['alcóolico'],
    price: 9.9,
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly.',
    image: 'https://i.ibb.co/kB4jzJj/cafe-irlandes.png',
    quantity: 0,
  },
]

export const CoffeeContext = createContext({} as ContextCoffeeType)

interface ContextProviderProps {
  children: ReactNode
}

export function ContextProvider({ children }: ContextProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [totalAmount, setTotalAmount] = useState<number>(0)

  const addToCart = (product: TypeElementsOfArray) => {
    const index = cart.findIndex((item) => item.product.id === product.id)
    if (index !== -1) {
      // if product already exists in the cart, increase its quantity
      const updatedCart = [...cart]
      updatedCart[index].quantity += 1
      setCart(updatedCart)
    } else {
      // if product does not exist in the cart, add it
      const updatedCart = [...cart, { product, quantity: 1 }]
      setCart(updatedCart)
      console.log(updatedCart)
    }
    setTotalAmount(totalAmount + product.price)
  }

  const removeFromCart = (product: TypeElementsOfArray) => {
    const index = cart.findIndex((item) => item.product.id === product.id)
    if (index !== -1) {
      const updatedCart = [...cart]
      updatedCart[index].quantity -= 1
      if (updatedCart[index].quantity === 0) {
        updatedCart.splice(index, 1)
      }
      setCart(updatedCart)
      console.log(updatedCart)
      setTotalAmount(totalAmount - product.price)
    }
  }
  function CountNUmbers(item: TypeElementsOfArray) {
    const itemAdd =
      cart.find((itemCart) => itemCart.product.id === item.id)?.quantity || 0

    return itemAdd
  }

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)
  console.log(totalQuantity)

  return (
    <CoffeeContext.Provider
      value={{
        addToCart,
        removeFromCart,
        totalQuantity,
        CountNUmbers,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
