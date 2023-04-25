import { Context } from 'koa' 
import * as productService from '../../services/product/product.service'
import { Product, PagingParams } from '../../types'

export const getProducts = async (ctx: Context) => {
  const query = ctx.query as any
  const params: PagingParams | undefined = query.page !== undefined ? { page: query.page, pageSize: parseInt(query.pageSize), dir: query.dir, sort: query.sort } : undefined
  const results = await productService.findProducts(params)
  ctx.body = results
}

export const getProductById = async (ctx: Context) => {
  const { productId } = ctx.params
  const product: Product = await productService.findProductById(productId)
  ctx.body = product
}

export const createProduct = async (ctx: Context) => {
  const product = await productService.createProduct(ctx.request.body as Product)
  ctx.body = product
}

export const updateProduct = async (ctx: Context) => {
  const { productId } = ctx.params
  const product = await productService.updateProduct(productId, ctx.request.body as Product)
  ctx.body = product
}

export const increaseProductQuantity = async (ctx: Context) => {
  const { productId, value } = ctx.params
  const valueNumber = parseInt(value)
  const product = await productService.increaseProductQuantity(productId, valueNumber)
  ctx.body = product
}

export const decreaseProductQuantity = async (ctx: Context) => {
  const { productId, value } = ctx.params
  const valueNumber = parseInt(value)
  const product = await productService.decreaseProductQuantity(productId, valueNumber)
  ctx.body = product
}

export const deleteProduct = async (ctx: Context) => {
  const { productId } = ctx.params
  const product = await productService.deleteProduct(productId)
  ctx.body = product
}