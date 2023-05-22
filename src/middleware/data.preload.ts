import { preloadBulkCategories } from '../services/category/category.service'
import { preloadBulkSizes } from '../services/size/size.service'
import { preloadBulkStatuses } from '../services/status/status.service'

export const dataPreload = async () => {
  await preloadBulkCategories()
  await preloadBulkSizes()
  await preloadBulkStatuses()
}