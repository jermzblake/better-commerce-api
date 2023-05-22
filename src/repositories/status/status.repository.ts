import { db } from '../../server/db'
import { Status } from '@prisma/client'
import { StatusEntity } from '../../types'

export const createStatus = async (statusName: string): Promise<Status> => {
  const status = await db.status.create({ data: {name: statusName} })
  return status
}

export const createManyStatuses = async (statuses: StatusEntity[]): Promise<void> => {
  await db.status.createMany({ data: statuses, skipDuplicates: true })
}