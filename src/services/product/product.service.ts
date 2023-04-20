import { Product } from '../../types'
import * as productRepository from  '../../repositories/product/product.repository'

export const findProductById = async (productId: string) => {
  const db_response = await productRepository.fetchProductById(productId)
  return db_response
}

export const createProduct = async (product: Product) => {
  const productEntity = {
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: product.quantity,
    size: product.size
  }
  const db_response = await productRepository.createProduct(productEntity, product.categories)
  return db_response
}