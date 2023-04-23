import { Product, PagingParams } from '../../types'
import { Product as ProductModel } from '@prisma/client'
import * as productRepository from  '../../repositories/product/product.repository'
import { mapProductEntityFromProduct, mapProductFromProductModel } from '../../dataMappers/product/product.mappers'
import { NotFoundError } from '../../lib'

export const findProducts = async (params?: PagingParams): Promise<PagingParams | Product[]> => {
  const result = await productRepository.fetchProducts(params)
  if (params) {
    return {...result, data: (result as PagingParams)?.data?.map((product: ProductModel) => mapProductFromProductModel(product))}
  }
  const products = await productRepository.fetchProducts()
  return (products as ProductModel[]).map((product) => mapProductFromProductModel(product))
}

export const findProductById = async (productId: string) => {
  const db_response = await productRepository.fetchProductById(productId)
  if (db_response == null) {
    throw new NotFoundError(__filename, `Product with ID ${productId} does not exist`)
  }
  return mapProductFromProductModel(db_response)
}

export const createProduct = async (product: Product) => {
  const productEntity = mapProductEntityFromProduct(product)
  const db_response = await productRepository.createProduct(productEntity, product.categories)
  return mapProductFromProductModel(db_response)
}

export const updateProduct = async (productId: string, product: Product) => {
  const productEntity = mapProductEntityFromProduct(product)
  const db_response = await productRepository.updateProduct(productId, productEntity, product.categories)
  return mapProductFromProductModel(db_response)
}

export const deleteProduct = async (productId: string) => {
  const [db_response] = await productRepository.deleteProduct(productId)
  return mapProductFromProductModel(db_response)
}