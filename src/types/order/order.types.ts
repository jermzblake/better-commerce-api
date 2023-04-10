import { BusinessObject, Entity, OrderItem, OrderItemEntity } from '../index'

export interface Order extends BusinessObject {
  customerId: string
  shippingAddress: ShippingAddress
  totalAmount: number
  orderItems?: OrderItem[]
}

export interface OrderEntity extends Entity {
  customer_id: string
  shipping_address: ShippingAddress
  total_amount: number
  order_items: OrderItemEntity
}

export interface ShippingAddress {
  street: string
  apt?: string
  city: string
  province: string
  country: string
  notes?: string
}
