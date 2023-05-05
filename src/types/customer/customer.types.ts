import { BusinessObject, Entity, Order, OrderEntity } from '../index'

export interface Customer extends BusinessObject {
  email: string
  firstName: string
  lastName: string
  phoneNumber?: string
  orders?: Order[]
}

export interface CustomerEntity extends Entity {
  email: string
  first_name: string
  last_name: string
  phoneNumber?: string
  orders?: OrderEntity[]
}
