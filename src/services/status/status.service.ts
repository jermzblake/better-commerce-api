import { Status } from '@prisma/client'
import * as statusRepository from '../../repositories/status/status.repository'
import { Statuses } from './status.fixture'

export const createStatus = async (statusName: string): Promise<Status> => {
  const status = await statusRepository.createStatus(statusName)
  return status
}

export const preloadBulkStatuses = async () => {
  await statusRepository.createManyStatuses(Statuses)
}