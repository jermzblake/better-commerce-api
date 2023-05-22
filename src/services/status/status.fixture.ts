import { StatusEntity } from "../../types"

export const Statuses: StatusEntity[] = [
  {name: 'pending'},
  {name: 'cancelled'},
  {name: 'complete'},
  {name: 'confirmed'},
  {name: 'in-transit'},
  {name: 'refund-pending'},
  {name: 'refunded'},
  {name: 'ready'},
]