import { db } from '../../server/db'
import { Category } from '@prisma/client'
import { CategoryEntity } from '../../types'

export const createCategory = async (categoryName: string): Promise<Category> => {
  const category = await db.category.create({ data: {name: categoryName} })
  return category
}

export const createManyCategories = async (categories: CategoryEntity[]): Promise<void> => {
  await db.category.createMany({ data: categories, skipDuplicates: true })
}