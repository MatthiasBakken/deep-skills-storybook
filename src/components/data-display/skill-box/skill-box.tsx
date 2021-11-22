import React, { FC, useEffect, useState } from 'react'
import { Box, BoxProps, Text } from '@chakra-ui/react'

export interface SkillBoxProps {
  /**
   * The main label text
   */
  label?: string
  /**
   * The data object
   * @param total number
   * @param done number
   */
  data?: { done: number; total: number }
  /**
   * Color in any format.
   * @default pink
   */
  color?: string
  /**
   * BoxProps are used for extra styling on the wrapper Box
   */
  boxProps?: BoxProps
}
export const SkillBox: FC<SkillBoxProps> = ({
  label,
  data,
  color = 'pink',
  boxProps = {}
}) => {
  const [textColor, setTextColor] = useState('white')
  const [percentage, setPercentage] = useState(data ? 0 : 100)
  const [bg, setBg] = useState<Pick<BoxProps, 'bg' | 'bgGradient'>>({
    bg: 'gray.24'
  })

  useEffect(() => {
    if (data) {
      const { done, total } = data ?? {}
      const isAllDone = done === total
      const isNoneDone = done === 0
      if (isAllDone) {
        setTextColor(color)
      }
      if (isNoneDone) {
        setTextColor('gray.50')
      }

      setPercentage((100 * done) / total)
    }
  }, [color, data])

  useEffect(() => {
    setBg(
      !label
        ? { bg: 'gray.24' }
        : {
            bgGradient: `linear(to-t, ${color} ${percentage}%, gray.50 ${percentage}%)`
          }
    )
  }, [color, label, percentage])

  return (
    <Box w='105px' h='105px' borderRadius='12px' p='7px' {...bg} {...boxProps}>
      <Box
        bg='gray.22'
        display='flex'
        h='100%'
        borderRadius='6px'
        p='8px'
        flexDirection='column'
        justifyContent='space-between'
      >
        {!!label && (
          <>
            <Box>
              <Text color={textColor} variant='x.small'>
                {label}
              </Text>
            </Box>
            {!!data && (
              <Box>
                <Text color={textColor} variant='x.small'>
                  {data.done}/{data.total}
                </Text>
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  )
}
