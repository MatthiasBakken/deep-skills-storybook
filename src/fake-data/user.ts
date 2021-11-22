import { IUser } from '../interfaces'
import faker from 'faker'

const firstAndLast = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
})

export const generateUser = (): IUser => {
  const { firstName, lastName } = firstAndLast()
  return {
    ...firstAndLast(),
    id: faker.datatype.uuid(),
    fullName: `${firstName} ${lastName}`,
    avatar: faker.image.avatar(),
    jobTitle: faker.name.jobTitle()
  }
}
