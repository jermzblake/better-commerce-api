import { Member as MemberModel } from '@prisma/client'
import { Member, MemberEntity } from '../../types'

export const mapMemberEntityFromMember = (member: Member): MemberEntity => {
  return {
    id: member.id,
    first_name: member.firstName,
    last_name: member.lastName,
    email: member.email,
    phone_number: member.phoneNumber,
    password_hash: member.passwordHash,
    auth_type: member.authType,
    sso_type: member.ssoType as string,
  }
}

export const mapMemberFromMemberModel = (model: MemberModel): Member => {
  return {
    id: model.id,
    firstName: model.first_name,
    lastName: model.last_name,
    email: model.email,
    phoneNumber: model.phone_number as string,
    passwordHash: model.password_hash as string,
    authType: model.auth_type,
    ssoType: model.sso_type as string,
  }
}