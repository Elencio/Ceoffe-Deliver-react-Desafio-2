import { createContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  TypeElementsOfArray,
  ContextCoffeeType,
  TypeOptionPayment,
  ContextProviderProps,
} from './interfaces'
import { CartItem, CoffeeDataClients } from '../@types/context'

export const CoffeeContext = createContext({} as ContextCoffeeType)

export const DataClientValidation = zod.object({
  CEP: zod.string().min(8),
  Rua: zod.string().min(3).max(2000),

  numero: zod.number().min(1).max(2000),
  complemento: zod
    .string()
    .min(2, { message: 'Bairro deve ter pelo menos 2 caracteres' }),
  Bairro: zod
    .string()
    .min(2, { message: 'Cidade deve ter pelo menos 2 caracteres' }),
  cidade: zod.string().nonempty('Coloca o nome da sua cidade'),
  UF: zod.string().min(1).max(1000).nonempty('informe a UF'),
})

export function ContextProvider({ children }: ContextProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const { register, handleSubmit, reset } = useForm<CoffeeDataClients>({
    resolver: zodResolver(DataClientValidation),
    defaultValues: {
      Bairro: '',
      CEP: '',
      cidade: '',
      complemento: '',
      numero: 0,
      Rua: '',
      UF: '',
    },
  })

  const [formData, setFormData] = useState<CoffeeDataClients>({
    Bairro: '',
    CEP: '',
    cidade: '',
    complemento: '',
    numero: 0,
    Rua: '',
    UF: '',
  })

  const [selectedOption, setSelectedOption] = useState<TypeOptionPayment>({
    Option: '',
  })

  const handleOptionSelect = (option: TypeOptionPayment) => {
    setSelectedOption(option)
  }

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)
  console.log(totalQuantity)

  const addToCart = (product: TypeElementsOfArray) => {
    const index = cart.findIndex((item) => item.product.id === product.id)
    if (index !== -1) {
      // if product already exists in the cart, increase its quantity
      const updatedCart = [...cart]
      updatedCart[index].quantity += 1
    } else {
      // if product does not exist in the cart, add it
      const updatedCart = [...cart, { product, quantity: 1 }]
      setCart(updatedCart)
    }
    const totalPrice = Math.round(totalAmount + product.price)
    setTotalAmount(totalPrice)
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

  function takeData(data: CoffeeDataClients) {
    setFormData(data)
    reset()
  }

  function CountNUmbers(item: TypeElementsOfArray) {
    const itemAdd =
      cart.find((itemCart) => itemCart.product.id === item.id)?.quantity || 0

    return itemAdd
  }

  return (
    <CoffeeContext.Provider
      value={{
        addToCart,
        removeFromCart,
        totalQuantity,
        CountNUmbers,
        cart,
        totalAmount,
        register,
        takeData,
        handleSubmit,
        formData,
        setFormData,
        handleOptionSelect,
        selectedOption,
        setSelectedOption,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
