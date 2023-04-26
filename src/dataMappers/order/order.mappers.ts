import { Order as OrderModel, Order_Item as OrderItemModel } from '@prisma/client'
import { Order, OrderEntity } from '../../types'

export const mapOrderEntityFromOrder = (order: Order): OrderEntity => {
  return {
    customer_id: order.customerId,
    shipping_address: order.shippingAddress,
    total_amount: order.totalAmount
  }
}

export const mapOrderFromOrderModel = ( model: (OrderModel & { orderItems: OrderItemModel[] }) | OrderModel): Order => {
  return {
    id: model.id,
    customerId: model.customer_id,
    shippingAddress: model.shipping_address,
    totalAmount: model.total_amount
  }
}