import { ITask, ITaskSet } from '../interfaces'
import * as faker from 'faker'

export const generateTaskSet = (): ITaskSet => ({
  tasks: new Array(5).fill(undefined).map(() => generateTask()),
  title: faker.name.jobTitle()
})

export const generateTask = (): ITask => ({
  id: faker.datatype.uuid(),
  title: faker.lorem.words(3),
  description: faker.lorem.paragraphs(2),
  duration: faker.random.word(),
  isCompleted: faker.datatype.boolean()
})
