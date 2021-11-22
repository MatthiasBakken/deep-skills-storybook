import faker from 'faker'
import { IProject, TagValuesEnum } from '../interfaces'

export const generateProject = (): IProject => ({
  iconUrl: faker.image.business(),
  title: faker.name.title(),
  name: faker.company.companyName(),
  dateRange: 'Aug 5 - Aug 13, 2021',
  tag: TagValuesEnum.design,
  details: [{ label: 'Total Budget', value: '$16,000 USD' }],
  id: faker.datatype.uuid(),
  isApplicationOpen: true,
  url: faker.internet.url(),
  applicants: [
    faker.image.avatar(),
    faker.image.avatar(),
    faker.image.avatar(),
    faker.image.avatar()
  ],
  taskSets: []
})
