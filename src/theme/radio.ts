const globalShadows = 'inset 4px 4px 4px rgba(0, 0, 0, 0.25)'
export const Radio = {
  baseStyle: {
    control: {
      borderRadius: '46px',
      bg: 'gray.22',
      border: '4px solid',
      borderColor: 'primary',
      boxShadow: globalShadows,
      _checked: {
        bg: 'gray.22',
        color: 'primary',
        border: '4px solid',
        borderColor: 'primary',
        boxShadow: globalShadows,
        _before: {
          width: '12px',
          height: '12px'
        },
        _hover: {
          bg: 'gray.22',
          borderColor: 'primary',
          boxShadow: '0 0 8px 0 #5193FB'
        },
        _focus: {
          bg: 'gray.22',
          borderColor: 'primary',
          boxShadow: '0 0 8px 0 #5193FB'
        },
        _disabled: {
          borderColor: 'gray.50',
          bg: 'gray.36',
          boxShadow: 'inset 4px 4px 4px rgba(0, 0, 0, 0.25)',
          _hover: {
            boxShadow: 'inset 4px 4px 4px rgba(0, 0, 0, 0.25)',
            borderColor: 'gray.50'
          }
        }
      },
      _hover: {
        boxShadow: `${globalShadows}, 0 0 8px 0 #5193FB`,
        borderColor: 'primaryHover'
      },
      _active: {
        border: '4px solid',
        boxShadow: globalShadows,
        borderColor: 'primaryActive'
      },
      _focus: {
        outline: '2px solid #ffffff',
        boxShadow: globalShadows
      },
      _disabled: {
        borderColor: 'gray.50',
        bg: 'gray.36',
        _hover: {
          boxShadow: 'inset 4px 4px 4px rgba(0, 0, 0, 0.25)',
          borderColor: 'gray.50'
        }
      }
    }
  },
  sizes: {
    md: {
      control: { w: '26px', height: '26px' }
    }
  },
  defaultProps: {
    size: 'md'
  }
}
