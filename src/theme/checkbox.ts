export const Checkbox = {
  baseStyle: {
    control: {
      borderRadius: '46px'
    }
  },
  sizes: {
    lg: {
      control: { w: '27px', height: '27px' },
      icon: { fontSize: '0.7rem' }
    }
  },
  variants: {
    default: {
      control: {
        boxShadow: 'inset 4px 4px 4px rgba(0, 0, 0, 0.25)',
        bg: 'gray.22',
        borderColor: 'primary',
        _hover: {
          borderColor: 'primaryHover',
          boxShadow:
            'inset 4px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 8px #5193FB'
        },
        _active: {
          borderColor: 'primaryActive'
        },
        _disabled: {
          bg: 'gray.28',
          borderColor: 'gray.50',
          _hover: {
            borderColor: 'gray.50',
            boxShadow: 'inset 4px 4px 4px rgba(0, 0, 0, 0.25)'
          }
        },
        _focus: {
          outline: '2px solid #fff'
        },
        _checked: {
          bg: 'gray.22',
          borderColor: 'primary',
          boxShadow: 'inset 4px 4px 4px rgba(0, 0, 0, 0.25)',
          _disabled: {
            borderColor: 'gray.28',
            bg: 'gray.28',
            _hover: {
              borderColor: 'gray.28'
            }
          },
          _active: {
            borderColor: 'primaryActive'
          },
          _hover: {
            bg: 'gray.22',
            borderColor: 'primaryHover',
            boxShadow:
              'inset 4px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 8px #5193FB'
          },
          _focus: {
            outline: '2px solid #fff'
          }
        }
      }
    }
  },
  defaultProps: {
    size: 'lg',
    variant: 'default'
  }
}
