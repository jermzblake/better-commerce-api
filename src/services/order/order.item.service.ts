import { OrderItem } from '../../types'
import * as orderItemRepository from '../../repositories/order/order.item.repository'
import  { NotFoundError } from '../../lib'
import { mapOrderItemFromOrderItemModel, mapOrderItemEntityFromOrderItem } from '../../dataMappers/order/order.item.mappers'

export const findOrderItemsByOrderId = async (orderId: string) => {
 const orderItems = await orderItemRepository.fetchOrderItemsByOrderId(orderId)
 return orderItems.map(order => mapOrderItemFromOrderItemModel(order))
}

export const findOrderItemById = async (orderItemId: string) => {
  const orderItem = await orderItemRepository.fetchOrderItemById(orderItemId)
  if (!orderItem) {
    throw new NotFoundError(__filename, `order with ID ${orderItemId} does not exist`)
  }
  return mapOrderItemFromOrderItemModel(orderItem)
}

export const createOrderItem = async (orderItem: OrderItem) => {
  const orderItemEntity = mapOrderItemEntityFromOrderItem(orderItem)
  const db_response = await orderItemRepository.createOrderItem(orderItemEntity)
  return mapOrderItemFromOrderItemModel(db_response)
}

export const increaseOrderItemQuantity = async (orderItemId: string, value: number) => {
  const db_response = await orderItemRepository.increaseOrderItemQuantity(orderItemId, value)
  return mapOrderItemFromOrderItemModel(db_response)
}

export const decreaseOrderItemQuantity = async (orderItemId: string, value: number) => {
  const db_response = await orderItemRepository.decreaseOrderItemQuantity(orderItemId, value)
  return mapOrderItemFromOrderItemModel(db_response)
}

export const deleteOrderItem = async (orderItemId: string) => {
  const [db_response] = await orderItemRepository.deleteOrderItem(orderItemId)
  return mapOrderItemFromOrderItemModel(db_response) 
}