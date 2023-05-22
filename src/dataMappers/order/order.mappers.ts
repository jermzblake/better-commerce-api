import { Order as OrderModel, Order_Item as OrderItemModel } from '@prisma/client'
import { Order, OrderEntity } from '../../types'
import { mapOrderItemFromOrderItemModel } from './order.item.mappers'

export const mapOrderEntityFromOrder = (order: Order): OrderEntity => {
  return {
    member_id: order.memberId,
    shipping_address: order.shippingAddress,
    total_amount: order.totalAmount,
    customer_email: order.customerEmail,
    customer_first_name: order.customerFirstName, 
    customer_last_name: order.customerLastName, 
    customer_phone_number: order.customerPhoneNumber as string,
  }
}

export const mapOrderFromOrderModel = ( model: (OrderModel & { orderItems: OrderItemModel[] }) | OrderModel): Order => {
  return {
    id: model.id,
    memberId: model.member_id as string,
    shippingAddress: model.shipping_address,
    totalAmount: model.total_amount,
    customerEmail: model.customer_email,
    customerFirstName: model.customer_first_name,
    customerLastName: model.customer_last_name,
    customerPhoneNumber: model.customer_last_name,
    orderItems: (model as OrderModel & { order_items: OrderItemModel[] }).order_items ? (model as OrderModel & { order_items: OrderItemModel[] }).order_items.map((orderItem) =>
    mapOrderItemFromOrderItemModel(orderItem)
  ) : undefined,
  }
}