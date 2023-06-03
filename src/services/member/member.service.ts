import { Member } from '../../types'
import { Member as MemberModel } from '@prisma/client'
import * as memberRepository from '../../repositories/member/member.repository'
import { NotFoundError } from '../../lib'
import { mapMemberFromMemberModel, mapMemberEntityFromMember } from '../../dataMappers/member/member.mappers'

export const createMember = async (member: Member) => {
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