import { db } from '../../server/db'
import { Category } from '@prisma/client'
import { CategoryEntity } from '../../types'

export const findCategoryByName = async (categoryName: string): Promise<Category | null> => {
  const result = await db.category.findFirst({ where: { name: categoryName }})
  return result
}

export const createCategory = async (categoryName: string): Promise<Category> => {
  const category = await db.category.create({ data: {name: categoryName} })
  return category
}

export const createManyCategories = async (categories: CategoryEntity[]): Promise<void> => {
  await db.category.createMany({ data: categories, skipDuplicates: true })
}