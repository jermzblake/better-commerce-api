import { BusinessObject, Entity, Category, OrderItem } from '../index'
import { Prisma } from '@prisma/client'

export interface Product extends BusinessObject {
  name: string
  description: string
  price: Prisma.Decimal
  quantity: number
  size: string
  media?: any
  categories?: Category[]
  orderItems?: OrderItem[]
}

export interface ProductEntity extends Entity {
  name: string
  description: string
  price: Prisma.Decimal
  quantity: number
  size: string
  media?: any
}

export interface ProductMedia {
  "thumbnail": string
  "hero": string
  "images"?: string[]
  "video"?: string[]
}