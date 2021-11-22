export const Button = {
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: '46px',
    _focus: {
      boxShadow: '0 0 0 3px #ffffff',
      outline: '2px solid #ffffff'
    },
    _disabled: {
      opacity: '1',
      bg: 'gray.28',
      color: 'gray.50'
    },
    _hover: {
      _disabled: {
        bg: 'gray.28',
        color: 'gray.50',
        boxShadow: 'none'
      }
    }
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      py: '2.5px',
      px: '16px',
      height: '24px'
    },
    md: {
      fontSize: 'md',
      py: '8.5px',
      px: '16px',
      height: '36px'
    }
  },
  variants: {
    primary: {
      color: '#ffffff',
      bg: 'primary',
      _active: {
        bg: 'primaryActive'
      },
      _hover: {
        bg: 'primaryHover',
        boxShadow: '0 0 8px 0 rgba(81, 147, 251, 1)'
      }
    },
    warning: {
      bg: 'warning',
      color: '#ffffff'
    },
    link: {
      bg: 'transparent',
      color: 'primary',
      _active: {
        color: 'primary'
      },
      _focus: {
        boxShadow: 'none',
        outline: 'none'
      }
    },
    ghost: {
      _active: {
        bg: 'unset'
      },
      _hover: {
        bg: 'unset'
      },
      _focus: {
        boxShadow: 'unset',
        outline: 'unset'
      }
    }
  },
  defaultProps: {
    variant: 'primary'
  }
}
