import { Category } from '../../types'
import { Category as CategoryModel } from '@prisma/client'

export const mapCategoryFromCategoryModel = (model: CategoryModel): Category => {
  return {
    name: model.name
  }
}