import { Order_Item as OrderItemModel } from '@prisma/client'
import { OrderItem, OrderItemEntity } from '../../types'

export const mapOrderItemEntityFromOrderItem = (orderItem: OrderItem): OrderItemEntity => {
  return {
    order_id: orderItem.orderId,
    product_id: orderItem.productId,
    price_per_unit: orderItem.pricePerUnit,
    quantity: orderItem.quantity
  }
}

export const mapOrderItemFromOrderItemModel = (model: OrderItemModel): OrderItem => {
  return {
    id: model.id,
    orderId: model.order_id,
    productId: model.product_id,
    pricePerUnit: model.price_per_unit,
    quantity: model.quantity
  }
}