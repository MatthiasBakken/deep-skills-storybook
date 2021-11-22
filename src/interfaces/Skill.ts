import { ITask } from './Task'

export interface ISkill {
  id: string
  title: string
  assignee: string
  tasks: ITask[]
}
