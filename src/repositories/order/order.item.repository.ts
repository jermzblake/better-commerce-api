import { db } from '../../server/db'
import { Order_Item as OrderItemModel } from '@prisma/client'
import { OrderItemEntity } from '../../types'

export const fetchOrderItemsByOrderId = async (orderId: string) => {
  const result = await db.order_Item.findMany({ where: { deleted_at: null, order_id: orderId } })
  return result
}

export const fetchOrderItemById = async (orderItemId: string) => {
  const result = await db.order_Item.findFirst({ where: { id: orderItemId, deleted_at: null }})
  return result
}

export const createOrderItem = async (orderItem: OrderItemEntity) => {
  const result = await db.order_Item.create({ data: { ...orderItem } })
  return result
}

export const increaseOrderItemQuantity = async (orderItemId: string, value: number) => {
  const result = await db.order_Item.update({ where: {id: orderItemId}, data: { quantity: { increment: value }} })
  return result
}

export const decreaseOrderItemQuantity = async (orderItemId: string, value: number) => {
  const result = await db.order_Item.update({ where: {id: orderItemId}, data: { quantity: { decrement: value }} })
  return result
}

export const deleteOrderItem = async (orderItemId: string): Promise<OrderItemModel[]> => {
  const result: OrderItemModel[] = await db.$queryRaw`UPDATE "Order_Item" SET deleted_at = 'now()' WHERE id = ${orderItemId} RETURNING *;`
  return result
}