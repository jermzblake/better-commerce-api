import { db } from '../../server/db'
import { Size } from '@prisma/client'
import { SizeEntity } from '../../types'

export const createSize = async (sizeName: string): Promise<Size> => {
  const size = await db.size.create({ data: {name: sizeName} })
  return size
}

export const createManySizes = async (sizes: SizeEntity[]): Promise<void> => {
  const result = await db.size.createMany({ data: sizes, skipDuplicates: true })
  console.log(result) // TODO remove this!!!
}