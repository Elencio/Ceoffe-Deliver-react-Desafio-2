import React, { ReactNode } from 'react'
import { UseFormRegister, UseFormHandleSubmit } from 'react-hook-form'
import { CartItem, CoffeeDataClients } from '../@types/context'

export interface TypeElementsOfArray {
  id: number
  title: string
  price: number
  image: string
  description: string
  type: string[]
  quantity: number
}

export interface TypeOptionPayment {
  Option: string
}

export interface ContextCoffeeType {
  addToCart: (product: TypeElementsOfArray) => void
  removeFromCart: (product: TypeElementsOfArray) => void
  totalQuantity: number
  CountNUmbers: (product: TypeElementsOfArray) => number
  cart: CartItem[]
  totalAmount: number
  takeData: (data: CoffeeDataClients) => void
  handleSubmit: UseFormHandleSubmit<CoffeeDataClients>
  register: UseFormRegister<CoffeeDataClients>
  formData: CoffeeDataClients // add the type here
  setFormData: React.Dispatch<React.SetStateAction<CoffeeDataClients>>
  selectedOption: TypeOptionPayment
  setSelectedOption: React.Dispatch<React.SetStateAction<TypeOptionPayment>>
  handleOptionSelect: (option: TypeOptionPayment) => void
  JustToResetTheForm: () => void
}

export interface ContextProviderProps {
  children: ReactNode
}
