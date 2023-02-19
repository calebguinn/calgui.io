import NextLink from 'next/link'
import {
	Container,
	Box,
	Stack,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
	useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, target, children, ...props }) => {
	const active = path === href
	const activeColor = useColorModeValue('#000000', '#ffffff')
  const inactiveColor = useColorModeValue('#222222', '#dddddd')
  const backgroundColor = useColorModeValue('#eeeeee', '#222222')
	return (
		<NextLink 
        href={href} 
        passHref 
        scroll={false}
      >
        <Box
           p={2}
           color={active ? activeColor : inactiveColor}
           bg={active ? backgroundColor : ''}
           target={target}
           borderRadius={10}
           fontFamily={'Kaisei Tokumin'}
           as={active ? "b" : ''}
           _hover={{
            fontWeight: 'bold',
            color: activeColor
           }}
           {...props}
           >
            {children}
        </Box>
		</NextLink>
	)
}

const NavBar = props => {
	const { path } = props
	
	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			bg={useColorModeValue('#ffffff40', '#1111140')}
			css={{ backdropFilter: 'blur(10px)' }}
			zIndex={2}
			{...props}
		>
			<Container
				display="flex"
				p={4}
				maxW="container.md"
				wrap="wrap"
				align="center"
				justify="space-between"
			>
				<Stack
					direction= {{ base: 'column', md: 'row' }}
					display={{ base: 'none', md: 'flex' }}
					width={{ base: 'full', md: 'auto' }}
					alignItems="center"
					flexGrow={1}
					mt={{ base: 4, md: 0 }}
				>
          <LinkItem href="/" path={path}>
            Home
          </LinkItem>
					<LinkItem href="/projects" path={path}>
						Projects
					</LinkItem>
					<LinkItem href="/blog" path={path}>
						Blog
					</LinkItem>
          <LinkItem href="/contact" path={path}>
            Contact
          </LinkItem>
				</Stack>

				<Box flex={1} align="right">
          <ThemeToggleButton />
					<Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
						<Menu isLazy id="navbar-menu">
							<MenuButton	
								as={IconButton}
								icon={<HamburgerIcon />}
								variant="outline"
								aria-label="Options"
							/>
							<MenuList
                bg={useColorModeValue('#ffffff','#111111')}
                >
								<NextLink href="/" passHref>
									<MenuItem
                    bg={useColorModeValue('#ffffff','#111111')}
                  >
                  Home
                  </MenuItem>
								</NextLink>
								<NextLink href="/projects" passHref>
									<MenuItem bg={useColorModeValue('#ffffff','#111111')}>
                    Projects
                  </MenuItem>
								</NextLink>
								<NextLink href="/blog" passHref>
									<MenuItem bg={useColorModeValue('#ffffff','#111111')}>
                    Blog
                  </MenuItem>
								</NextLink>
                <NextLink href="contact" passHref>
                  <MenuItem bg={useColorModeValue('#ffffff','#111111')}>
                    Contact
                  </MenuItem>
                </NextLink>
							</MenuList>
						</Menu>
					</Box>
				</Box>

			</Container>
		</Box>
	)
}

export default NavBar