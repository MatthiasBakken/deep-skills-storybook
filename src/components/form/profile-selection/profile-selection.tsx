import React, { FC, useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Text,
  Tooltip
} from '@chakra-ui/react'
import { IUser } from '../../../interfaces'
import { InfoIcon } from '@chakra-ui/icons'
import { ProfileBox } from '../../layout/profile-box/profile-box'
import { Select } from '../select/select'

export interface ProfileSelectionProps {
  label: string
  tooltipLabel?: string
  possibleProfiles: IUser[]
  onChange: (value?: IUser) => void
}

export const ProfileSelection: FC<ProfileSelectionProps> = ({
  label,
  tooltipLabel,
  onChange,
  possibleProfiles
}) => {
  const [selectedProfile, setSelectedProfile] = useState<IUser>()

  const handleSelect = (profile: unknown) => {
    setSelectedProfile(profile as IUser)
    onChange(profile as IUser)
  }

  const handleChange = () => {
    setSelectedProfile(undefined)
    onChange()
  }

  return (
    <FormControl>
      <FormLabel>
        <Box display='flex' alignItems='center'>
          <Text variant='heading.4' color='gray.79' mr='8px'>
            {label}
          </Text>
          {!!tooltipLabel && (
            <Tooltip label={tooltipLabel}>
              <InfoIcon color='gray.79' />
            </Tooltip>
          )}
        </Box>
      </FormLabel>
      {selectedProfile ? (
        <Box display='flex' justifyContent='space-between'>
          <ProfileBox
            size='sm'
            avatarUrl={selectedProfile.avatar}
            name={selectedProfile?.fullName}
          />
          <Button variant='link' onClick={handleChange}>
            Change
          </Button>
        </Box>
      ) : (
        <Select
          getId={(profile: IUser) => profile.id}
          options={possibleProfiles}
          onSelect={handleSelect}
          labelKey='fullName'
          placeholder='Andrej Berlin'
          renderOption={(profile: IUser) => (
            <ProfileBox
              key={profile.id}
              avatarUrl={profile.avatar}
              name={profile.fullName}
            />
          )}
        />
      )}
    </FormControl>
  )
}
