import Router from 'koa-router'

import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
} from '../../controller/product/product.controller'

const router = new Router({
  prefix: '/products',
})

router.post('/', createProduct)
router.get('/', getProducts)
router.get('/:productId', getProductById)
router.put('/:productId', updateProduct)
router.put('/:productId/increase/:value', increaseProductQuantity)
router.put('/:productId/decrease/:value', decreaseProductQuantity)
router.delete('/:productId', deleteProduct)

export default router
