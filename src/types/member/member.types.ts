import { BusinessObject, Entity, Order, OrderEntity } from '../index'

export interface Member extends BusinessObject {
  email: string
  firstName: string
  lastName: string
  phoneNumber?: string
  orders?: Order[]
}

export interface MemberEntity extends Entity {
  email: string
  first_name: string
  last_name: string
  phoneNumber?: string
  orders?: OrderEntity[]
}
