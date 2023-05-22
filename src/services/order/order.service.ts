import { Order, OrderItem, PagingParams } from '../../types'
import { Order as OrderModel } from '@prisma/client'
import * as orderRepository from '../../repositories/order/order.repository'
import  { BadRequestError, NotFoundError } from '../../lib'
import { mapOrderEntityFromOrder, mapOrderFromOrderModel } from '../../dataMappers/order/order.mappers'
import { createOrderItem, deleteOrderItem } from './order.item.service'
import { findProductById } from '../product/product.service'

export const createOrder = async (order: Order): Promise<Order>  => {
  const pendingOrderItems = order.orderItems
    // order.status = 'pending'
  const orderEntity = mapOrderEntityFromOrder(order)
  const order_db_response = await orderRepository.createOrder(orderEntity)
  let createdOrderItems: OrderItem[] = []
  for (const item of pendingOrderItems as OrderItem[]) {
    const product = await findProductById(item.productId)
    if (!product.quantity || product.quantity <= 0) {
      throw new NotFoundError(__filename, `Product no longer available`)
    } else if (product.quantity as number < item.quantity){
      //TODO handle this scenario other than throwing an exception
      throw new BadRequestError(__filename, `There are not enough products with ID ${product.id} to fulfil your order`)
    }
    item.pricePerUnit = product.price
    item.orderId = order_db_response.id!
    const orderItem = await createOrderItem(item)
    createdOrderItems.push(orderItem)
  }
  return {...mapOrderFromOrderModel(order_db_response), orderItems: createdOrderItems}
}

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

export const updateOrder = async (orderId: string, order: Order): Promise<Order>  => {
  const orderEntity = mapOrderEntityFromOrder(order)
  const db_response = await orderRepository.updateOrder(orderId, orderEntity)
  return mapOrderFromOrderModel(db_response)
}

export const deleteOrder = async (orderId: string): Promise<Order>  => {
  const [db_response] = await orderRepository.deleteOrder(orderId)
  return mapOrderFromOrderModel(db_response)
}