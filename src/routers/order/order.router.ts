import Router from 'koa-router'

import { createOrder, updateOrder, deleteOrder } from '../../controller/order/order.controller'

const router = new Router({
  prefix: '/orders',
})

router.post('/', createOrder)
router.put('/:orderId', updateOrder)
router.delete('/:orderId', deleteOrder)

export default router