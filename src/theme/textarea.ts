import { Input } from './input'

export const Textarea = {
  baseStyle: {
    ...Input.baseStyle.field
  },
  sizes: {
    sm: {
      ...Input.sizes.sm.field
    },
    md: {
      ...Input.sizes.md.field,
      h: '125px'
    }
  },
  variants: {
    outline: {
      ...Input.variants.outline.field
    }
  }
}
