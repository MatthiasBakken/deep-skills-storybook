function getSize(size: string) {
  return {
    container: {
      width: size,
      height: size
    },
    excessLabel: {
      width: size,
      height: size
    }
  }
}

const sizes = {
  xs: getSize('25px'),
  sm: getSize('32px'),
  md: getSize('60px'),
  lg: getSize('130px'),
  full: getSize('100%')
}

export const Avatar = {
  sizes
}
