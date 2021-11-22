import React, { FC } from 'react'
import {
  Box,
  BoxProps,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react'
import { IOrganisation, IProject, IUser } from '../../../interfaces'
import { CollapsableTaskSet } from '../../layout/collapsable-task-set/collapsable-task-set'
import {
  FeedbackItem,
  FeedbackItemProps
} from '../../layout/feedback-item/feedback-item'
import ProjectModalHeader from '../../layout/project-modal-header/project-modal-header'
import { TaskItem } from '../../layout/task-item/task-item'
import { StaticCheckbox } from '../../data-display/statick-checkbox/statick-checkbox'

export interface ProjectSummaryProps {
  isOpen: boolean
  onCloseClicked: () => void
  organisation: IOrganisation
  project: IProject
  user: Partial<IUser>
  goodFeedback: FeedbackItemProps[]
  canBeImproved: FeedbackItemProps[]
  personalReflection: FeedbackItemProps[]
}

export const ProjectSummary: FC<ProjectSummaryProps> = ({
  isOpen,
  onCloseClicked,
  organisation,
  project,
  user,
  goodFeedback,
  canBeImproved,
  personalReflection
}) => {
  return (
    <Modal size='2xl' isOpen={isOpen} onClose={onCloseClicked}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg='gray.22' pb='30px'>
          <ProjectModalHeader organisation={organisation} project={project} />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody bg='gray.24' p='0'>
          <Box
            p='18px 25px 21px'
            borderBottom='1px solid'
            borderColor='gray.18'
          >
            <Text variant='heading.3' color='white' mb='18px'>
              Completed work
            </Text>
            {project.taskSets.map((taskSet, index) => (
              <Box key={index} mb='15px'>
                <CollapsableTaskSet
                  label={taskSet.title}
                  helperText={`${
                    taskSet.tasks.filter((item) => item.isCompleted).length
                  }/${taskSet.tasks?.length}`}
                  boxProps={{
                    bg: 'gray.22'
                  }}
                >
                  <Box
                    bg='gray.22'
                    p='17px 17px 25px 17px'
                    borderRadius='0 0 12px 12px'
                  >
                    {taskSet.tasks.map((item, index) => (
                      <TaskItem
                        key={index}
                        beforeElement={
                          <StaticCheckbox
                            variant={item.isCompleted ? 'confirmed' : 'empty'}
                          />
                        }
                        boxProps={{ bg: 'gray.24', mb: '13px' }}
                        title={item.title}
                      />
                    ))}
                  </Box>
                </CollapsableTaskSet>
              </Box>
            ))}
          </Box>
          <FeedbackBlock title={`What ${user.firstName} did well`}>
            {goodFeedback.map((item, index) => (
              <FeedbackItem
                key={index}
                content={item.content}
                user={item.user}
              />
            ))}
          </FeedbackBlock>
          <FeedbackBlock title={`What ${user.firstName} can improve upon`}>
            {canBeImproved.map((item, index) => (
              <FeedbackItem
                key={index}
                content={item.content}
                user={item.user}
              />
            ))}
          </FeedbackBlock>
          <FeedbackBlock
            title={`${user.firstName}'s personal reflection`}
            boxProps={{
              borderBottom: 'none'
            }}
          >
            {personalReflection.map((item, index) => (
              <FeedbackItem
                key={index}
                content={item.content}
                user={item.user}
              />
            ))}
          </FeedbackBlock>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

interface FeedbackBlockProps {
  title: string
  boxProps?: BoxProps
}
const FeedbackBlock: React.FC<FeedbackBlockProps> = ({
  title,
  children,
  boxProps
}) => (
  <Box
    p='18px 25px 21px'
    borderBottom='1px solid'
    borderColor='gray.18'
    {...boxProps}
  >
    <Text variant='heading.3' color='white' mb='18px'>
      {title}
    </Text>
    {children}
  </Box>
)
