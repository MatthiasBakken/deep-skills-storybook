import React from 'react'
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import { IOrganisation, IProject, ITask } from '../../../interfaces'
import ProjectModalHeader from '../../layout/project-modal-header/project-modal-header'
import { TaskItem } from '../../layout/task-item/task-item'
import { StaticCheckbox } from '../../data-display/statick-checkbox/statick-checkbox'

export interface TaskSummaryProps {
  isOpen: boolean
  onCloseClicked: () => void
  organisation: Pick<IOrganisation, 'name' | 'imageUrl'>
  project: Partial<IProject>
  tasks: ITask[]
}

export const TaskSummary: React.FC<TaskSummaryProps> = ({
  isOpen,
  onCloseClicked,
  organisation,
  project,
  tasks
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
            {tasks.map((item, index) => (
              <TaskItem
                key={index}
                beforeElement={
                  <StaticCheckbox
                    variant={item.isCompleted ? 'confirmed' : 'empty'}
                  />
                }
                boxProps={{ mb: '13px' }}
                {...item}
              />
            ))}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
