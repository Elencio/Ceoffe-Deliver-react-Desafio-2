import { ReactNode, createContext, useState } from 'react'
export interface TypeElementsOfArray {
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
