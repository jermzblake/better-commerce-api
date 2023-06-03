import { Context } from 'koa'
import * as memberService from '../../services/member/member.service'
import { Member } from '../../types'

export const createMember = async (ctx: Context) => {
  const member = await memberService.createMember(ctx.request.body as Member)
  ctx.body = member
}

export const gethMemberById = async (ctx: Context) => {
  const { memberId } = ctx.params
  const member = await memberService.findMemberById(memberId)
  ctx.body = member
}

export const updateMember = async (ctx: Context) => {
  const { memberId } = ctx.params
  const updatedMember =  await memberService.updateMember(memberId, ctx.request.body as Member)
  ctx.body = updatedMember
}