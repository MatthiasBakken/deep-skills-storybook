export const Input = {
  baseStyle: {
    field: {
      color: 'white',
      _placeholder: {
        color: 'gray.36'
      },
      _invalid: {
        color: 'warning'
      },
      _focus: {
        outline: '3px',
        outlineColor: 'primary',
        _invalid: {
          borderColor: 'warning',
          boxShadow: `0 0 0 1px #EB5757`,
          outlineColor: 'warning'
        }
      }
    }
  },
  sizes: {
    sm: {
      field: {
        fontSize: 'md',
        h: '45px',
        lineHeight: '26.5px',
        py: '8px',
        px: '25px'
      }
    },
    md: {
      field: {
        fontSize: 'md',
        h: '69px',
        lineHeight: '26.5px',
        py: '21px',
        px: '25px'
      }
    }
  },
  variants: {
    outline: {
      field: {
        borderRadius: '8px',
        borderColor: 'primary',
        _hover: {
          borderColor: 'primary'
        }
      }
    }
  },
  defaultProps: {
    size: 'sm'
  }
}
