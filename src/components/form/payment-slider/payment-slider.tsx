import React, { useState } from 'react'
import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text
} from '@chakra-ui/react'

interface Props {
  colleagueName: string
  onChange: (value: number[]) => void
}
export const PaymentSlider: React.FC<Props> = ({ colleagueName, onChange }) => {
  const [percentages, setPercentages] = useState([50, 50])

  const handleSliderChange = (value: number) => {
    const newValue = [value, 100 - value]
    setPercentages(newValue)
    onChange(newValue)
  }

  return (
    <Box>
      <Box display='flex' justifyContent='space-between' mb='9px'>
        <Box display='flex' flexDirection='column'>
          <Text variant='small' color='gray.79'>
            You
          </Text>
          <Text variant='heading.2' color='white'>
            {percentages[0]}%
          </Text>
        </Box>
        <Box display='flex' flexDirection='column'>
          <Text variant='small' color='gray.79'>
            {colleagueName}
          </Text>
          <Text variant='heading.2' color='white'>
            {percentages[1]}%
          </Text>
        </Box>
      </Box>
      <Box>
        <Slider onChange={handleSliderChange} step={5} min={0} max={100}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </Box>
  )
}
