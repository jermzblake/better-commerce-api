import { BusinessObject, Entity, OrderItem } from '../index'
import { Prisma } from '@prisma/client'

export interface Order extends BusinessObject {
  customerId: string
  shippingAddress: any
  totalAmount: Prisma.Decimal
  orderItems?: OrderItem[]
}

export interface OrderEntity extends Entity {
  customer_id: string
  shipping_address: any
  total_amount: Prisma.Decimal
}

export interface ShippingAddress {
  street: string
  apt?: string
  city: string
  province: string
  country: string
  notes?: string
}
