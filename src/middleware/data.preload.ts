import { preloadBulkCategories } from '../services/category/category.service'
export const dataPreload = async () => {
  await preloadBulkCategories()
}