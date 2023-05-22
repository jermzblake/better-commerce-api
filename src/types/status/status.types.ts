import { BusinessObject, Entity, Order, OrderEntity } from '../index'

export interface Status extends BusinessObject {
  name: string
  orders?: Order[]
}

export interface StatusEntity {
  id?: number
  name: string
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date
}