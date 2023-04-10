import { db } from '../../server/db'
import { CategoryEntity } from '../../types'

export const findCategoryByName = async (categoryName: string): Promise<CategoryEntity | null> => {
  const result = await db.category.findFirst({ where: { name: categoryName }})
  return result
}

export const createCategory = async (categoryName: string): Promise<CategoryEntity> => {
  const category = await db.category.create({ data: {name: categoryName} })
  return category
}

export const createManyCategories = async (categories: CategoryEntity[]): Promise<void> => {
  const result = await db.category.createMany({ data: categories, skipDuplicates: true })
  console.log(result)
}