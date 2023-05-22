import { BusinessObject, Entity, OrderItem } from '../index'
import { Prisma } from '@prisma/client'

export interface Order extends BusinessObject {
  memberId?: string
  shippingAddress: any
  totalAmount: Prisma.Decimal
  orderItems?: OrderItem[]
  customerEmail: string
  customerFirstName: string 
  customerLastName: string 
  customerPhoneNumber?: string
}

export interface OrderEntity extends Entity {
  member_id?: string
  customer_email: string
  customer_first_name: string 
  customer_last_name: string 
  customer_phone_number: string
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
