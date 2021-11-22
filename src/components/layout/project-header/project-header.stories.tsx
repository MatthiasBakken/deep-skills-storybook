import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ProjectHeader } from './project-header'
import { ProfileBox } from '../profile-box/profile-box'

export default {
  title: 'Layout/Project Header',
  component: ProjectHeader
} as ComponentMeta<typeof ProjectHeader>

const Template: ComponentStory<typeof ProjectHeader> = (args) => (
  <ProjectHeader {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Sourcecred Hypersprint',
  description:
    'In this project we are designing a new interface for SourceCred. It is a tool that tracks value creation in an online community by mapping their users, messages and upvotes on a graph. It will take a week and we will have workshops, a prototype design and user research at the end.',
  detailsUrl: 'https://google.com',
  detailsList: [
    {
      label: 'Dates',
      content: 'Aug 5 – Aug 13, 2021'
    },
    {
      label: 'Total budget',
      tooltipLabel: 'Budget label',
      content: '$16,000 USD'
    },
    {
      label: 'Organisation',
      content: (
        <ProfileBox
          size={'sm'}
          name='Deep Work Studio'
          avatarUrl='https://s3-alpha-sig.figma.com/img/a4fa/a103/7c13ae2c53bdfcff2ff59fc31ccc559e?Expires=1634515200&Signature=Bdj30grsfRD-lhnpoZwMEe8QI5osxRiaX5x8uT0eWszeNZLRX1ZRM1a6o3ZtfsmEmcu-1ygFNFoFF4y9Er3JNJtdDeIxUf6k1VHZv~YRZM93dRYGaOd0RP8HmNpYT6qtl2rT7qUsYUXR4FkJ7r-VnfaXCiR-Cc7xFq4BZWrJiYglqa6p29aegMyWVYXCgLebonlIVw~1a261Dk0RQE~rFMQrW~vyANMMErIlxWzUpHwh4wJ8YRrVOEwZ3A7vpQZKmnAXp~Pr8KWcSZXSyeibSjOYgDkAUPm5PZQaM-nS8yFXYcOZ00kBKdc-gmQz6Tr~3eox2dVJdnXpynNBayRc~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        />
      )
    },
    {
      label: 'Stakeholder',
      content: (
        <ProfileBox
          size={'sm'}
          name='Andrej Berlin'
          avatarUrl='https://s3-alpha-sig.figma.com/img/1742/c729/68917365183a2d8a2f9045663122909f?Expires=1634515200&Signature=DLoT2TlH6FoHRUdSH7Xzg8I-hfP2w--NxX6XEc546Wz6XNVP48TEac6t6ghryuf7BKaj66iqTXkCoMBpwR~J4Z~cnpKmA1NOHZ~W4okyZvVsc~rxwaVGWz3wM-kzK8c0GvUR5G0qYCrH6ECtgNer1AVC8aNZf8Be0Gru2-2w-odWElonABNTa3-cFZgRKpA5c32iuDQUWQsENLbc6M4SMRXM3meDOTiMhdjW2OEf6opnfDNLf9U17~VfGAWI2g9Cn3Q3l9VHgKdncaMl204tCae9La7duFssoy5B-NYe9mAFP3fx1uSThQlcvtgoitXnt2e1fks-x-dYnGnQ5~JnHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        />
      )
    }
  ]
}
