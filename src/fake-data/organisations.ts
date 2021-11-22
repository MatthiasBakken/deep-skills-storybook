import * as faker from 'faker'
import { generateProject } from './projects'
import { IOrganisation, TagValuesEnum } from '../interfaces'

export const MOCK_ORGANISATIONS: IOrganisation[] = [
  {
    uuid: faker.datatype.uuid(),
    name: faker.company.companyName(),
    tag: TagValuesEnum.design,
    details: [{ label: 'Projects', value: '10' }],
    description:
      'A collective of designers doing meanful projects in web3 with shared profits. ',
    imageUrl: faker.image.business(),
    colleagues: [
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar()
    ],
    links: [{ label: 'Website', href: faker.internet.url() }],
    representedSkills: [
      faker.name.jobTitle(),
      faker.name.jobTitle(),
      faker.name.jobTitle(),
      faker.name.jobTitle()
    ],
    projects: [generateProject(), generateProject(), generateProject()]
  },
  {
    uuid: faker.datatype.uuid(),
    name: faker.company.companyName(),
    tag: TagValuesEnum.dataScience,
    details: [{ label: 'Projects', value: '5' }],
    description:
      'Engineering and R&D firm focused on the design and analysis of complex networks.',
    imageUrl: faker.image.business(),
    colleagues: [
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar()
    ],
    links: [{ label: 'Website', href: faker.internet.url() }],
    representedSkills: [
      faker.name.jobTitle(),
      faker.name.jobTitle(),
      faker.name.jobTitle(),
      faker.name.jobTitle()
    ],
    projects: [generateProject(), generateProject(), generateProject()]
  },
  {
    uuid: faker.datatype.uuid(),
    name: faker.company.companyName(),
    tag: TagValuesEnum.foodIndustry,
    details: [{ label: 'Projects', value: '2' }],
    description:
      'Craft beers and sandwiches at the Vallehermoso Market, Madrid',
    imageUrl: faker.image.business(),
    colleagues: [
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar(),
      faker.image.avatar()
    ],
    links: [{ label: 'Website', href: faker.internet.url() }],
    representedSkills: [
      faker.name.jobTitle(),
      faker.name.jobTitle(),
      faker.name.jobTitle(),
      faker.name.jobTitle()
    ],
    projects: [generateProject(), generateProject(), generateProject()]
  }
]
