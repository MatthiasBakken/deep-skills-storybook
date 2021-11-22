import React, { ChangeEvent, useState } from 'react'
import { RoundedBox } from '../../data-display/rounded-box/rounded-box'
import { Box, Button, Collapse, Text, useDisclosure } from '@chakra-ui/react'
import { AddIcon, ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { ITask, ITaskSet } from '../../../interfaces'
import { TaskItem } from '../task-item/task-item'
import { v4 as uuidv4 } from 'uuid'
import { Form, Formik } from 'formik'
import { FormikInputControl } from '../../form/formik-wrappers'
import * as Yup from 'yup'
import { AdminCreateButton } from '../admin-create-button/admin-create-button'
import { pluralise } from '../../../utils/texts';

export interface TaskSetProps {
  title: string
  existingTaskSet?: ITaskSet
  onSaveTaskSet: (taskSet: ITaskSet) => void
}

export const CreateTaskSet: React.FC<TaskSetProps> = ({
  onSaveTaskSet,
  title,
  existingTaskSet
}) => {
  const [processStarted, setProcessStarted] = useState(true)
  const [taskSet, setTaskSet] = useState<ITaskSet>({
    title: '',
    tasks: []
  })
  const { isOpen, onToggle } = useDisclosure()

  const handleSaveTaskSet = () => {
    setProcessStarted(false)
    onToggle()
    onSaveTaskSet(taskSet)
  }

  const handleCreateTaskTest = () => {
    setProcessStarted(true)
  }

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskSet({ ...taskSet, title: event.target.value })
  }

  const handleAddTask = (task: ITask) => {
    setTaskSet({ ...taskSet, tasks: [...taskSet.tasks, task] })
  }

  const handleEditTask = (task: ITask) => {
    const updatedTasks = taskSet.tasks.map((item) =>
      item.id === task.id ? { ...task } : item
    )
    setTaskSet({ ...taskSet, tasks: updatedTasks })
  }

  const handleDeleteTask = (id: string) => {
    const updatedTasks = taskSet.tasks.filter((item) => item.id !== id)
    setTaskSet({ ...taskSet, tasks: updatedTasks })
  }

  return (
    <>
      <RoundedBox
        borderRadius={isOpen ? '12px 12px 0 0' : '12px'}
        py='21.5px'
        bg='gray.24'
        display='flex'
        alignItems={{ base: 'unset', md: 'center' }}
        justifyContent='space-between'
        flexDirection={{ base: 'column', md: 'row' }}
      >
        {!processStarted && !taskSet.title && (
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            flex='1 0 auto'
            onClick={handleCreateTaskTest}
          >
            <Text variant='heading.3' color='primary'>
              Create a task set
            </Text>
            <AddIcon color='primary' />
          </Box>
        )}
        {processStarted && (
          <>
            <Box
              display='flex'
              justifyContent='space-between'
              flex='0.1 0 auto'
              mb={{ base: '12px', md: '0' }}
            >
              <Text variant='heading.4' color='white'>
                {title || 'Untitled'}
              </Text>
              <Text variant='heading.6' color='white'>
                {taskSet.tasks.length} task{pluralise(taskSet.tasks.length)}
              </Text>
            </Box>
            <Button
              onClick={onToggle}
              variant='link'
              rightIcon={
                <Box
                  height='16px'
                  width='16px'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  borderRadius='50%'
                  bg='primary'
                >
                  {isOpen ? (
                    <ArrowUpIcon color='#2D3A4A' />
                  ) : (
                    <ArrowDownIcon color='#2D3A4A' />
                  )}
                </Box>
              }
            >
              {isOpen ? 'Close' : 'Expand'}
            </Button>
          </>
        )}
      </RoundedBox>
      <Collapse in={isOpen} animateOpacity>
        <Box
          bg='gray.24'
          p='17px 17px 25px 17px'
          borderRadius='0 0 12px 12px'
          mb='32px'
        >
          <Tasks
            onAddTask={handleAddTask}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
            tasks={taskSet.tasks}
          />
        </Box>
        <Box mt={'32px'} display='flex' justifyContent='flex-end'>
          <Button onClick={handleSaveTaskSet} size='sm'>
            Save task set
          </Button>
        </Box>
      </Collapse>
    </>
  )
}

interface TasksProps {
  onAddTask: (task: ITask) => void
  onEditTask: (task: ITask) => void
  onDeleteTask: (taskId: string) => void
  tasks: ITask[]
}
const INITIAL_TASK_VALUES = {
  title: '',
  duration: '',
  description: ''
}
const Tasks: React.FC<TasksProps> = ({
  onAddTask,
  onEditTask,
  onDeleteTask,
  tasks
}) => {
  const [openForm, setOpenForm] = useState(true)
  const [editItem, setEditItem] = useState('')
  const [initialValues, setInitialValues] = useState(INITIAL_TASK_VALUES)

  const handleCreateTaskTest = () => {
    setOpenForm(true)
  }

  function handleSubmitTask(values: Omit<ITask, 'id'>) {
    if (editItem) {
      setEditItem('')
      onEditTask({ ...values, id: editItem })
    } else {
      onAddTask({ ...values, id: uuidv4() })
    }
    setOpenForm(false)
    setInitialValues(INITIAL_TASK_VALUES)
  }

  const handleDeleteTask = () => {
    if (editItem) {
      onDeleteTask(editItem)
      setEditItem('')
      setInitialValues(INITIAL_TASK_VALUES)
    }
  }

  const handleTaskEdit = (id: string) => () => {
    const foundTask = tasks.find((task) => task.id === id)
    if (foundTask) {
      setEditItem(id)
      setInitialValues({
        title: foundTask.title,
        duration: foundTask.duration,
        description: foundTask.description
      })
    }
  }

  return (
    <>
      {tasks.length > 0 && (
        <Box m='17px 0 25px'>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              title={task.title}
              description={task.description}
              onEditClick={handleTaskEdit(task.id)}
              boxProps={{
                _notLast: {
                  mb: '13px'
                }
              }}
            />
          ))}
        </Box>
      )}
      {(openForm || editItem) && (
        <RoundedBox bg='gray.22' mb='10px'>
          <Text variant='heading.3' mb='32px'>
            {editItem ? 'Edit task' : `Add task #${tasks.length + 1}`}
          </Text>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={handleSubmitTask}
            validationSchema={Yup.object({
              title: Yup.string().required('Title is required'),
              duration: Yup.string().required('Duration is required'),
              description: Yup.string().required('Description is required')
            })}
          >
            {() => (
              <Form noValidate>
                <Box display='flex' justifyContent='space-between' mb='32px'>
                  <FormikInputControl
                    label='Task set title'
                    type='text'
                    name='title'
                    placeholder='Prepare Miro Board...'
                    styleProps={{ mr: '30px' }}
                  />
                  <FormikInputControl
                    label='Estimated duration'
                    type='text'
                    name='duration'
                    placeholder='15 minutes'
                  />
                </Box>
                <FormikInputControl
                  label='Description'
                  type='text'
                  name='description'
                  placeholder='Enter task description or task document URL'
                  styleProps={{ mr: '30px' }}
                />
                <Box
                  display='flex'
                  mt='32px'
                  justifyContent={editItem ? 'space-between' : 'flex-end'}
                >
                  {editItem && (
                    <Button
                      variant='link'
                      color='warning'
                      onClick={handleDeleteTask}
                    >
                      Delete task
                    </Button>
                  )}
                  <Button type='submit' variant='link' size='sm'>
                    Save task
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </RoundedBox>
      )}
      {!openForm && (
        <AdminCreateButton bg='gray.22' onClick={handleCreateTaskTest}>
          Add a new task
        </AdminCreateButton>
      )}
    </>
  )
}
