import { BusinessObject, Entity } from '../index'
import { Prisma } from '@prisma/client'

export interface OrderItem extends BusinessObject {
  orderId: string
  productId: string
  quantity: number
  pricePerUnit: Prisma.Decimal
}

export interface OrderItemEntity extends Entity {
  order_id: string
  product_id: string
  quantity: number
  price_per_unit: Prisma.Decimal
}
