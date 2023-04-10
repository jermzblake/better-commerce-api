import { BusinessObject, Entity, Product, ProductEntity } from '../index'

export interface Category extends BusinessObject {
  name: string
  products?: Product[]
}

export interface CategoryEntity extends Entity {
  name: string
  products?: ProductEntity[]
}
