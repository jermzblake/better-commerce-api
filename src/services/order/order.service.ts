import { Order, PagingParams } from '../../types'
import { Order as OrderModel } from '@prisma/client'
import * as orderRepository from '../../repositories/order/order.repository'
import  { NotFoundError } from '../../lib'
import { mapOrderEntityFromOrder, mapOrderFromOrderModel } from '../../dataMappers/order/order.mappers'

export const findOrders = async (params?: PagingParams): Promise<PagingParams | Order[]> => {
  const result = await orderRepository.fetchOrders(params)
  if (params) {
    return {...(result as PagingParams), data: (result as PagingParams)?.data?.map((order: OrderModel) => mapOrderFromOrderModel(order))}
  }
  return (result as OrderModel[]).map((order) => mapOrderFromOrderModel(order))
}

export const findOrderById = async (orderId: string): Promise<Order> => {
  const db_response = await orderRepository.fetchOrderById(orderId)
  if (db_response == null) {
    throw new NotFoundError(__filename, `order with ID ${orderId} does not exist`)
  }
  return mapOrderFromOrderModel(db_response)
}

export const createOrder = async (order: Order): Promise<Order>  => {
  const orderEntity = mapOrderEntityFromOrder(order)
  const db_response = await orderRepository.createOrder(orderEntity)
  return mapOrderFromOrderModel(db_response)
}

export const updateOrder = async (orderId: string, order: Order): Promise<Order>  => {
  const orderEntity = mapOrderEntityFromOrder(order)
  const db_response = await orderRepository.updateOrder(orderId, orderEntity)
  return mapOrderFromOrderModel(db_response)
}

export const deleteOrder = async (orderId: string): Promise<Order>  => {
  const [db_response] = await orderRepository.deleteOrder(orderId)
  return mapOrderFromOrderModel(db_response)
}