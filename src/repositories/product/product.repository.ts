import { db } from '../../server/db'
import { ProductEntity, CategoryEntity, PagingParams } from '../../types'
import { Product as ProductModel } from '@prisma/client'

export const fetchProducts = async (params?: PagingParams) => {
  if (params) {
    const offset = (params.page < 1 ? 1 : params.page - 1) * params.pageSize
    const result = await db.product.findMany({
      where: { deleted_at: null },
      skip: offset,
      take: params.pageSize,
      orderBy: { created_at: 'desc' },
    })
    params.data = result
    return params
  }
  const result = await db.product.findMany({ where: { deleted_at: null } })
  return result
}

export const fetchProductById = async (productId: string) => {
  const result = await db.product.findFirst({ where: { id: productId, deleted_at: null }, include: { categories: true } })
  return result
}

export const createProduct = async (product: ProductEntity, categories?: CategoryEntity[]) => {
  const result = await db.product.create({ data: { ...product, categories: { connect: categories } } })
  return result
}

export const updateProduct = async (productId: string, product: ProductEntity, categories?: CategoryEntity[]) => {
  const result = await db.product.update({ where: {id: productId}, data: {...product, categories: { connect: categories }} })
  return result
}

export const increaseProductQuantity = async (productId: string, value: number) => {
  const result = await db.product.update({ where: {id: productId}, data: { quantity: { increment: value }} })
  return result
}

export const decreaseProductQuantity = async (productId: string, value: number) => {
  const result = await db.product.update({ where: {id: productId}, data: { quantity: { decrement: value }} })
  return result
}

export const deleteProduct = async (productId: string): Promise<ProductModel[]> => {
  const result: ProductModel[] = await db.$queryRaw`UPDATE "Product" SET deleted_at = 'now()' WHERE id = ${productId} RETURNING *;`
  return result
}