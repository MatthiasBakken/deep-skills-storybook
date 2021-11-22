import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import { Button } from './button'
import { Checkbox } from './checkbox'
import { Radio } from './radio'
import { Tooltip } from './tooltip'
import { Text } from './text'
import { Avatar } from './avatar'
import { Input } from './input'
import { Textarea } from './textarea'
import { Slider } from './slider'
import { Modal } from './modal'
import { CloseButton } from './close-button'
import { FormLabel } from './form-label'
import { Menu } from './menu'
import { FormError } from './form-error'

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        bg: 'gray.12',
        color: 'gray.79'
      }
    }
  },
  colors,
  sizes: {
    container: {
      lg: 'calc(930px + 2rem)',
      xl: 'calc(1300px + 2rem)'
    }
  },
  components: {
    Button,
    Checkbox,
    Radio,
    Tooltip,
    Text,
    Avatar,
    Input,
    Textarea,
    Slider,
    Modal,
    Menu,
    CloseButton,
    FormLabel,
    FormError
  }
})
