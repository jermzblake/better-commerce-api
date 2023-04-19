import { preloadBulkCategories } from '../services/category/category.service'
import { preloadBulkSizes } from '../services/size/size.service'
export const dataPreload = async () => {
  await preloadBulkCategories()
  await preloadBulkSizes()
}