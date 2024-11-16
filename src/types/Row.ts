/*
export interface Row {
  _id: string
  user: string
  text: string
  __v: number
  source: string
  updatedAt: string
  type: string
  createdAt: string
  deleted: boolean
  used: boolean
  status: Status
}

interface Status {
  sentCount: number
  verified: boolean
}*/

export interface Row {
  text: string
  type: string
}
