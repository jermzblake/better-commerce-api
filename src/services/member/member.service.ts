import { Member } from '../../types'
import { Member as MemberModel } from '@prisma/client'
import * as memberRepository from '../../repositories/member/member.repository'
import { NotFoundError } from '../../lib'
import { mapMemberFromMemberModel, mapMemberEntityFromMember } from '../../dataMappers/member/member.mappers'
import { hashPassword, comparePassword } from '../../services/admin/security.service'

export const createMember = async (member: Member) => {
  if (member.password) {
    member.passwordHash = hashPassword(member.password)
    delete member.password
  }
  const MemberEntity = mapMemberEntityFromMember(member)
  const db_response: MemberModel = await memberRepository.createMember(MemberEntity)
  return mapMemberFromMemberModel(db_response)
}

export const findMemberById = async (memberId: string) => {
  const db_response = await memberRepository.fetchMemberById(memberId)
  if (db_response == null) {
    throw new NotFoundError(__filename, `Member with ID ${memberId} does not exist`)
  }
  return mapMemberFromMemberModel(db_response)
}

export const findMemberByEmail = async (email: string) => {
  const db_response = await memberRepository.fetchMemberByEmail(email)
  if (db_response == null) {
    throw new NotFoundError(__filename, `Member with email ${email} does not exist`)
  }
  return mapMemberFromMemberModel(db_response)
}

export const updateMember = async (memberId: string, member: Member) => {
  const MemberEntity = mapMemberEntityFromMember(member)
  const db_response: MemberModel = await memberRepository.updateMember(memberId, MemberEntity)
  return mapMemberFromMemberModel(db_response)
}