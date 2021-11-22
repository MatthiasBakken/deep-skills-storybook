export const capitalizeFirstLetter = (value: string): string =>
  value.charAt(0).toUpperCase() + value.slice(1)

export const pluralise = (value: number): string => (value > 1 ? 's' : '')
