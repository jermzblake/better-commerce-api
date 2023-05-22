import { Product as ProductModel, Category as CategoryModel } from '@prisma/client'
import { Product, ProductEntity } from '../../types'
import { mapCategoryFromCategoryModel } from '../category/category.mappers'

export const mapProductEntityFromProduct = (product: Product): ProductEntity => {
  return {
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: product.quantity,
    size: product.size,
    media: product.media,
  }
}

export const mapProductFromProductModel = (
  model: (ProductModel & { categories: CategoryModel[] }) | ProductModel
): Product => {
  return {
    id: model.id,
    name: model.name,
    description: model.description,
    price: model.price,
    quantity: model.quantity,
    size: model.size,
    media: model.media,
    categories: (model as ProductModel & { categories: CategoryModel[] }).categories ? (model as ProductModel & { categories: CategoryModel[] }).categories.map((category) =>
      mapCategoryFromCategoryModel(category)
    ) : undefined,
  }
}
