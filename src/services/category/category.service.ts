import { Category } from '@prisma/client'
import * as categoryRepository from  '../../repositories/category/category.repository'
import { Categories } from './category.fixture'

export const createCategory = async (categoryName: string): Promise<Category> => {
  const category = await categoryRepository.createCategory(categoryName)
  return category
}

export const preloadBulkCategories = async () => {
  await categoryRepository.createManyCategories(Categories)
}