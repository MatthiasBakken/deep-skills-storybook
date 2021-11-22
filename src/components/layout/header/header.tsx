import React, { FC } from 'react'
import {
  Avatar,
  Box,
  Button,
  Icon,
  IconButton,
  Link,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { IUser } from '../../../interfaces'

interface Props {
  links: { label: string; route: string }[]
  user?: IUser
  onNavigationLinkClick: (route: string) => void
  onLoginClick?: () => void
  onAvatarClick?: () => void
}
export const Header: FC<Props> = ({
  links,
  user,
  onLoginClick,
  onAvatarClick,
  onNavigationLinkClick
}) => {
  const { isOpen, onToggle } = useDisclosure()
  const menuItemProps = {
    color: 'white',
    variant: 'ghost',
    bg: 'gray.18',
    borderRadius: 0,
    w: '100%',
    mb: '1px',
    py: '21px',
    height: 'unset',
    justifyContent: 'left',
    px: '20px',
    _hover: { bg: 'gray.18' },
    _active: { bg: 'gray.18' },
    _focus: { bg: 'gray.18' }
  }

  const handleNavigationLinkClick = (route: string) => () => {
    onNavigationLinkClick(route)
  }
  return (
    <Box display='flex' alignItems='center' justifyContent='space-between'>
      <Box>
        <Icon
          width='84'
          height='35'
          viewBox='0 0 84 35'
          fill='none'
          color='white'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M43.0939 15.5223H40.0685C39.8217 15.5223 39.6216 15.3235 39.6216 15.0784V6.44393C39.6216 6.19875 39.8217 6 40.0685 6H43.1073C46.5126 6 48.242 7.69137 48.242 10.6479V10.7545C48.242 13.7244 46.4724 15.5223 43.0939 15.5223ZM42.3833 8.10423V13.4181H43.0135C44.6491 13.4181 45.373 12.5657 45.373 10.7944V10.6879C45.373 8.87666 44.6491 8.10423 42.9866 8.10423H42.3833ZM50.0296 15.5223H56.4201V13.4181H52.3176V11.6867H55.4146V9.74233H52.3176V8.10423H56.2056V6H50.0296C49.7828 6 49.5827 6.19875 49.5827 6.44393V15.0784C49.5827 15.3235 49.7828 15.5223 50.0296 15.5223ZM64.6249 15.5223H58.2344C57.9876 15.5223 57.7875 15.3235 57.7875 15.0784V6.44393C57.7875 6.19875 57.9876 6 58.2344 6H64.4104V8.10423H60.5225V9.74233H63.6194V11.6867H60.5225V13.4181H64.6249V15.5223ZM66.4393 15.5223H68.7273V12.3127H69.7596C72.1029 12.3127 73.4527 11.2607 73.486 9.31073L73.4867 9.18298C73.4867 7.15866 72.2667 6 69.639 6H66.4393C66.1925 6 65.9924 6.19875 65.9924 6.44393V15.0784C65.9924 15.3235 66.1925 15.5223 66.4393 15.5223ZM68.7273 8.05096V10.4482H69.5183C70.4031 10.4482 70.8724 10.0353 70.8724 9.24957V9.19629C70.8724 8.3839 70.3897 8.05096 69.5317 8.05096H68.7273Z'
            fill='white'
          />
          <circle cx='17.5' cy='17.5' r='17.5' fill='white' />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M47.2 24.4322C47.2 26.1208 45.8739 27.5 43.5275 27.5C41.0197 27.5 39.6147 26.5679 39.6147 24.6284C39.6147 24.5598 39.7082 24.4193 39.8373 24.4193H42.0866C42.1504 25.0767 42.4437 25.618 43.5275 25.618C44.2799 25.618 44.7007 25.2442 44.7007 24.7028C44.7007 24.1357 44.3564 23.981 43.2598 23.8134C40.6839 23.5041 39.8168 22.7307 39.8168 20.8745C39.8168 19.2117 41.1685 18 43.349 18C45.5423 18 46.7792 18.9281 46.945 20.8745H44.5222C44.4329 20.2171 44.0631 19.882 43.349 19.882C42.6477 19.882 42.2906 20.2042 42.2906 20.6682C42.2906 21.1839 42.5712 21.4159 43.7061 21.5706C46.0141 21.8284 47.2 22.4342 47.2 24.4322ZM83.7 24.4322C83.7 26.1208 82.3739 27.5 80.0275 27.5C77.5197 27.5 76.1147 26.5679 76.1147 24.6284C76.1147 24.5598 76.2082 24.4193 76.3373 24.4193H78.5866C78.6504 25.0767 78.9437 25.618 80.0275 25.618C80.7799 25.618 81.2007 25.2442 81.2007 24.7028C81.2007 24.1357 80.8564 23.981 79.7598 23.8134C77.1839 23.5041 76.3168 22.7307 76.3168 20.8745C76.3168 19.2117 77.6685 18 79.849 18C82.0423 18 83.2792 18.9281 83.445 20.8745H81.0222C80.9329 20.2171 80.5631 19.882 79.849 19.882C79.1477 19.882 78.7906 20.2042 78.7906 20.6682C78.7906 21.1839 79.0712 21.4159 80.2061 21.5706C82.5141 21.8284 83.7 22.4342 83.7 24.4322ZM51.3139 27.5V23.5273L54.0278 27.5H57.15L53.514 22.4112L56.9656 18H54.1463L51.3139 21.7601V18H49.1C48.8239 18 48.6 18.2239 48.6 18.5V27C48.6 27.2761 48.8239 27.5 49.1 27.5H51.3139ZM60.95 18V27.5H58.6C58.3239 27.5 58.1 27.2761 58.1 27V18.5C58.1 18.2239 58.3239 18 58.6 18H60.95ZM68.55 27.5V25.3874H65.3168V18H63.35C63.0739 18 62.85 18.2239 62.85 18.5V27C62.85 27.2761 63.0739 27.5 63.35 27.5H68.55ZM75.2 25.3874V27.5H70C69.7239 27.5 69.5 27.2761 69.5 27V18.5C69.5 18.2239 69.7239 18 70 18H71.9668V25.3874H75.2Z'
            fill='white'
          />
        </Icon>
      </Box>
      <Box display={{ base: 'none', md: 'flex' }} alignItems='center'>
        <Box as='nav'>
          {links.map((item, index) => (
            <Link
              key={index}
              variant='nav.link'
              color='gray.50'
              cursor='pointer'
              onClick={handleNavigationLinkClick(item.route)}
              mx='20px'
              _first={{ ml: '0' }}
              _last={{ mr: '0' }}
            >
              {item.label}
            </Link>
          ))}
        </Box>
        <Box ml='40px'>
          {user ? (
            <Avatar
              onClick={onAvatarClick}
              src={user.avatar}
              size='xs'
              borderWidth='2px'
              borderColor='primary'
              cursor='pointer'
            />
          ) : (
            onLoginClick && (
              <Button variant='primary' onClick={onLoginClick}>
                Log in / Sign up
              </Button>
            )
          )}
        </Box>
      </Box>
      <Box display={{ base: 'flex', md: 'none' }} alignItems='center'>
        <IconButton
          variant='ghost'
          aria-label='menu-button'
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        />
        {isOpen && (
          <Box position='absolute' left='0' right='0' top='100%'>
            {links.map((item, index) => (
              <Button
                key={index}
                _last={{ mr: '0' }}
                onClick={handleNavigationLinkClick(item.route)}
                {...menuItemProps}
              >
                {item.label}
              </Button>
            ))}
            {user ? (
              <Button onClick={onLoginClick} {...menuItemProps}>
                <Avatar
                  onClick={onAvatarClick}
                  src={user.avatar}
                  size='xs'
                  borderWidth='2px'
                  borderColor='primary'
                  cursor='pointer'
                />
                <Text as='span' ml={4} variant='heading.4' color='white'>
                  {user.fullName}
                </Text>
              </Button>
            ) : (
              onLoginClick && (
                <Button onClick={onLoginClick} {...menuItemProps}>
                  Log in / Sign up
                </Button>
              )
            )}
          </Box>
        )}
      </Box>
    </Box>
  )
}
