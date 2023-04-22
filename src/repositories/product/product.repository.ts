import { db } from '../../server/db'
import { ProductEntity, CategoryEntity, PagingParams } from '../../types'

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
  const result = await db.product.findFirst({ where: { id: productId }, include: { categories: true } })
  return result
}

export const createProduct = async (product: ProductEntity, categories?: CategoryEntity[]) => {
  const result = await db.product.create({ data: { ...product, categories: { connect: categories } } })
  return result
}
