import { BusinessObject, Entity, Category, CategoryEntity, OrderItem, OrderItemEntity } from '../index'

export interface Product extends BusinessObject {
  name: string
  description: string
  price: number
  quantity: number
  size: string
  media?: ProductMedia
  categories?: Category[]
  orderItems?: OrderItem[]
}

export interface ProductEntity extends Entity {
  name: string
  description: string
  price: number
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