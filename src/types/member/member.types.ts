import { BusinessObject, Entity, Order, OrderEntity } from '../index'

export type AuthType = 'sso' | 'creds'

export interface Member extends BusinessObject {
  email: string
  firstName: string
  lastName: string
  phoneNumber?: string
  passwordHash?: string
  authType: AuthType
  ssoType?: string
  orders?: Order[]
}

export interface MemberEntity extends Entity {
  email: string
  first_name: string
  last_name: string
  phone_number?: string
  password_hash?: string
  auth_type: AuthType
  sso_type: string
}
