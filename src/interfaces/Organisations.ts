import { IProject } from './Projects'
import { TagValuesEnum } from './enums/tags'

export interface IOrganisation {
  uuid: string
  name: string
  imageUrl: string
  description: string
  tag: TagValuesEnum
  details: Record<string, string>[]
  colleagues: string[]
  links: { label: string; href: string }[]
  representedSkills?: string[]
  projects: IProject[]
}
