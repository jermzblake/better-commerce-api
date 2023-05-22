import Router from 'koa-router'

import { createOrder, getOrder, updateOrder, deleteOrder } from '../../controller/order/order.controller'

const router = new Router({
  prefix: '/orders',
})

router.post('/', createOrder)
router.get('/:orderId', getOrder)
router.put('/:orderId', updateOrder)
router.delete('/:orderId', deleteOrder)

export default router