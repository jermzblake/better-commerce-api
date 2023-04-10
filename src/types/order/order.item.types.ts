import { BusinessObject, Entity } from '../index'

export interface OrderItem extends BusinessObject {
  orderId: string
  productId: string
  quantity: number
  pricePerUnit: number
}

export interface OrderItemEntity extends Entity {
  order_id: string
  product_id: string
  quantity: number
  price_per_unit: number
}
