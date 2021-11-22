import React from 'react'
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { FormikInputControl } from '../../form/formik-wrappers'

interface FormValues {
  email: string
  password: string
}
const INITIAL_VALUES = {
  email: '',
  password: ''
}
export interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onForgotPassword?: () => void
  onLogin: (values: FormValues) => void
  onRegister: () => void
}
export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLogin,
  onForgotPassword,
  onRegister
}) => {
  const handleHandleLogIn = (values: FormValues) => {
    onLogin(values)
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in or Sign up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            enableReinitialize
            noValidate
            initialValues={INITIAL_VALUES}
            onSubmit={handleHandleLogIn}
            validationSchema={Yup.object({
              email: Yup.string().email().required('Email is required'),
              password: Yup.string().required('Password is required')
            })}
          >
            {() => (
              <Form noValidate>
                <FormikInputControl
                  type='email'
                  label='Email address'
                  name='email'
                  styleProps={{ mb: '21px' }}
                />
                <FormikInputControl
                  type='password'
                  label='Password'
                  name='password'
                  styleProps={{ mb: '28px' }}
                />
                <Box display='flex' mb='28px'>
                  <Button mr='28px' type='submit'>
                    Log in
                  </Button>
                  <Button variant='link' onClick={onForgotPassword}>
                    Forgot Password?
                  </Button>
                </Box>
                <Button variant='link' onClick={onRegister}>
                  Sign up for a new account
                </Button>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
