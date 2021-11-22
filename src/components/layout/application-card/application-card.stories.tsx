import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ApplicationCard } from './application-card'
import { Container } from '@chakra-ui/react'
import * as faker from 'faker'
import { generateUser } from '../../../fake-data'

export default {
  title: 'Layout/Application Card',
  component: ApplicationCard
} as ComponentMeta<typeof ApplicationCard>

const Template: ComponentStory<typeof ApplicationCard> = (args) => (
  <Container maxW={'container.lg'}>
    <ApplicationCard {...args} />
  </Container>
)

export const LeadSupport = Template.bind({})
LeadSupport.args = {
  title: 'Creative director',
  detailsUrl: faker.internet.url(),
  lead: {
    roleId: faker.datatype.uuid(),
    budget: {
      estimatedPayment: ['1,000', '5,000']
    },
    dates: 'Aug 5 - Aug 13, 2021',
    scopeOfWork: {
      tasks: 7,
      hoursAmount: 15
    }
  },
  contributor: {
    roleId: faker.datatype.uuid(),
    budget: {
      estimatedPayment: ['0', '5,000']
    },
    dates: 'Aug 5 - Aug 13, 2021',
    scopeOfWork: {
      tasks: 7,
      hoursAmount: [1, 15]
    }
  }
}

export const PendingApplication = Template.bind({})
PendingApplication.args = {
  title: 'Creative director',
  detailsUrl: faker.internet.url(),
  lead: {
    user: generateUser(),
    status: 'pending',
    roleId: faker.datatype.uuid(),
    budget: {
      estimatedPayment: ['1,000', '5,000']
    },
    dates: 'Aug 5 - Aug 13, 2021',
    scopeOfWork: {
      tasks: 7,
      hoursAmount: 15
    }
  },
  contributor: {
    roleId: faker.datatype.uuid(),
    budget: {
      estimatedPayment: ['0', '5,000']
    },
    dates: 'Aug 5 - Aug 13, 2021',
    scopeOfWork: {
      tasks: 7,
      hoursAmount: [1, 15]
    }
  }
}

export const Support = Template.bind({})
Support.args = {
  title: 'Creative director',
  detailsUrl: faker.internet.url(),
  lead: {
    user: generateUser(),
    roleId: faker.datatype.uuid(),
    budget: {
      estimatedPayment: ['1,000', '5,000']
    },
    dates: 'Aug 5 - Aug 13, 2021',
    scopeOfWork: {
      tasks: 7,
      hoursAmount: 15
    }
  },
  contributor: {
    roleId: faker.datatype.uuid(),
    budget: {
      estimatedPayment: ['0', '5,000']
    },
    dates: 'Aug 5 - Aug 13, 2021',
    scopeOfWork: {
      tasks: 7,
      hoursAmount: [1, 15]
    }
  }
}
