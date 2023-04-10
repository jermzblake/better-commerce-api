export interface Entity {
  id?: string
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date
}

export interface BusinessObject {
  id?: string
}

export interface PagingParams {
  page: number | 1
  pageSize: number | 10
  dir: 'asc' | 'desc'
  sort: string | 'id'
  totalCount?: number
  data?: any[]
}
