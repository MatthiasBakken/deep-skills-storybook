import { ITaskSet } from './TaskSet'
import { TagValuesEnum } from './enums/tags'

export interface IProject {
  id: string
  iconUrl: string
  url?: string
  tag?: TagValuesEnum
  name: string
  title: string
  dateRange?: string
  isApplicationOpen: boolean
  details: Record<string, string>[]
  applicants: string[]
  totalBudget: string
  taskSets: ITaskSet[]
}
