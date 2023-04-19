import { Size } from '@prisma/client'
import * as sizeRepository from '../../repositories/size/size.repository'
import { Sizes } from './size.fixture'

export const createSize = async (sizeName: string): Promise<Size> => {
  const size = await sizeRepository.createSize(sizeName)
  return size
}

export const preloadBulkSizes = async () => {
  await sizeRepository.createManySizes(Sizes)
}