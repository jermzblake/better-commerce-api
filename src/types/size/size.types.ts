import { BusinessObject } from '../index'

export interface Size extends BusinessObject {
  name: string
}

export interface SizeEntity {
  id?: number
  name: string
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date
}