import React from 'react'
import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react'
import { FileUpload } from '../../form/file-upload/file-upload'
import { useFormik } from 'formik'

interface FormValues {
  name: string
  email: string
  password: string
  linkToWork: string
  photo: any
  agreed: boolean
}
interface Props {
  isOpen: boolean
  onClose: () => void
  onSignUpClicked: (values: FormValues) => void
}
export const RegisterModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSignUpClicked
}) => {
  const { errors, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      linkToWork: '',
      photo: '',
      agreed: false
    },
    onSubmit: handleSubmitForm
  })

  function handleSubmitForm(values: FormValues) {
    onSignUpClicked(values)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New to Deep Skills?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text variant='heading.6' color='white' mb='28px'>
            Create an account for free, start working with various DAOs on
            amazing projects, and get paid and attested for the work you do!
          </Text>
          <form onSubmit={handleSubmit}>
            <FormControl id='name' isInvalid={!!errors.name} mb='21px'>
              <FormLabel>Name</FormLabel>
              <Input type='text' name='name' required />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl id='email' isInvalid={!!errors.email} mb='21px'>
              <FormLabel>Email</FormLabel>
              <Input type='email' name='email' required />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl id='password' isInvalid={!!errors.password} mb='21px'>
              <FormLabel>Password</FormLabel>
              <Input type='password' name='password' required />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <FormControl
              id='linkToWork'
              isInvalid={!!errors.linkToWork}
              mb='21px'
            >
              <FormLabel>Link to work</FormLabel>
              <Input type='text' name='linkToWork' />
              <FormErrorMessage>{errors.linkToWork}</FormErrorMessage>
            </FormControl>
            <FormControl id='photo' mb='21px' isInvalid={!!errors.photo}>
              <FormLabel>Photo</FormLabel>
              <FileUpload name='photo' />
              <FormErrorMessage>{errors.photo}</FormErrorMessage>
            </FormControl>
            <FormControl mb='21px' isInvalid={!!errors.agreed}>
              <Checkbox name='agreed' required>
                <Text variant='heading.6' as='span'>
                  I agree to the Deep Skills terms and conditions
                </Text>
              </Checkbox>
              <FormErrorMessage>{errors.agreed}</FormErrorMessage>
            </FormControl>
            <Button type='submit'>Sign up</Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
