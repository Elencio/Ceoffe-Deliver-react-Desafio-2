import { DataClientValidation } from '../contexts/context'
import { TypeElementsOfArray } from './interfaces'

import * as zod from 'zod'

export type CartItem = {
  product: TypeElementsOfArray
  quantity: number
}

export type CartProps = {
  product: TypeElementsOfArray
}

export type CoffeeDataClients = zod.infer<typeof DataClientValidation>
