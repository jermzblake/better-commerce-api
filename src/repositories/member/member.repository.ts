import { db } from '../../server/db'
import { MemberEntity } from '../../types'
import { Member as MemberModel } from '@prisma/client'

export const createMember = async (member: MemberEntity): Promise<MemberModel> => {
  const result = await db.member.create({ data: member })
  return result
}

export const fetchMemberById = async (memberId: string): Promise<MemberModel | null> => {
  const result = await db.member.findFirst({ where: { id: memberId, deleted_at: null }})
  return result
}

export const fetchMemberByEmail = async (email: string): Promise<MemberModel | null> => {
  const result = await db.member.findFirst({ where: { email, deleted_at: null }})
  return result
}

export const updateMember = async (memberId: string, member: MemberEntity): Promise<MemberModel> => {
  const result = await db.member.update({ where: { id: memberId }, data: member })
  return result
}