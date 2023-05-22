import { Context } from 'koa' 
import * as orderService from '../../services/order/order.service'
import { Order } from '../../types'

export const createOrder = async (ctx: Context) => {
  const order = await orderService.createOrder(ctx.request.body as Order)
  ctx.body = order
}

export const getOrder = async (ctx: Context) => {
  const { orderId } = ctx.params
  const order = await orderService.findOrderById(orderId)
  ctx.body = order 
}

export const updateOrder = async (ctx: Context) => {
  const { orderId } = ctx.params
  const updatedOrder =  await orderService.updateOrder(orderId, ctx.request.body as Order)
  ctx.body = updatedOrder
}

export const deleteOrder = async (ctx: Context) => {
  const { orderId } = ctx.params
  const deletedOrder =  await orderService.deleteOrder(orderId)
  ctx.body = deletedOrder
}