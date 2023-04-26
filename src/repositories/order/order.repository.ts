import { db } from '../../server/db'
import { Order as OrderModel } from '@prisma/client'
import { OrderEntity, OrderItemEntity, PagingParams } from '../../types'

export const fetchOrders = async (params?: PagingParams) => {
  if (params) {
    const offset = (params.page < 1 ? 1 : params.page - 1) * params.pageSize
    const result = await db.order.findMany({
      where: { deleted_at: null },
      skip: offset,
      take: params.pageSize,
      orderBy: { created_at: 'desc' },
    })
    params.data = result
    return params
  }
  const result = await db.order.findMany({ where: { deleted_at: null } })
  return result
}

export const fetchOrderById = async (orderId: string) => {
  const result = await db.order.findFirst({ where: { id: orderId, deleted_at: null }, include: { order_items: true } })
  return result
}

export const createOrder = async (order: OrderEntity, orderItems?: OrderItemEntity[]) => {
  const result = await db.order.create({ data: { ...order, order_items: { connect: orderItems } } })
  return result
}

export const updateOrder = async (orderId: string, order: OrderEntity, orderItems?: OrderItemEntity[]) => {
  const result = await db.order.update({
    where: { id: orderId },
    data: { ...order, order_items: { connect: orderItems } },
  })
  return result
}

export const deleteOrder = async (orderId: string) => {
  const result: OrderModel[] = await db.$queryRaw`UPDATE "Order" SET deleted_at = 'now()' WHERE id = ${orderId} RETURNING *;`
  return result
}
