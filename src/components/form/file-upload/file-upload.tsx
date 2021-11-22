import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { Avatar, Box, Input } from '@chakra-ui/react'
import { CameraIcon } from '../../../icons'

export interface FileUploadProps {
  /**
   * Avatar preview url
   */
  avatar?: string
  onChange?: (name: string, file: File) => void
  accept?: string
  name?: string
}

export const FileUpload: FC<FileUploadProps> = ({
  accept = 'image/*',
  avatar,
  name,
  onChange
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      setPreview(URL.createObjectURL(file))
      onChange && onChange(event.target.name, file)
    }
  }

  useEffect(() => {
    if (avatar) {
      setPreview(avatar)
    }
  }, [avatar])

  return (
    <Box
      w='130px'
      height='130px'
      borderRadius='50%'
      position='relative'
      cursor='pointer'
      onClick={() => inputRef.current?.click()}
    >
      <Avatar
        w='100%'
        height='100%'
        position='absolute'
        left='0'
        top='0'
        borderRadius='full'
        src={preview}
        zIndex='1'
      />
      <Box
        w='100%'
        h='100%'
        borderRadius='50%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        position='relative'
        bg='rgba(0,0,0, .5)'
        zIndex='2'
      >
        <CameraIcon width='32px' height='32px' />
        <Input
          ref={inputRef}
          type='file'
          name={name}
          accept={accept}
          style={{ display: 'none' }}
          onChange={handleChange}
        />
      </Box>
    </Box>
  )
}
