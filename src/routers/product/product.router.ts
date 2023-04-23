import Router from 'koa-router'

import { createProduct, getProducts , getProductById, updateProduct, deleteProduct } from '../../controller/product/product.controller'

const router = new Router({
  prefix: '/products'
})

router.get('/', getProducts)
router.get('/:productId', getProductById)
router.post('/', createProduct)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)

export default router