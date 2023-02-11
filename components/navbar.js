import NextLink from 'next/link'
import {
	Container,
	Box,
	Link,
	Stack,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
	useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
	const active = path === href
	const activeColor = useColorModeValue('#000000', '#ffffff')
  const inactiveColor = useColorModeValue('#222222', '#dddddd')
	return (
		<NextLink 
        href={href} 
        passHref 
        scroll={false}
      >
        <Box
           p={2}
           color={active ? activeColor : inactiveColor}
           as={active ? 'b' : ''}
           target={target}
           borderRadius={10}
           _hover={{ 
             bg: useColorModeValue('#dddddd', '#333333'), 
             borderColor: '#eeeeee'
           }}
           fontFamily={'Kaisei Tokumin'}
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
					<LinkItem href="/posts" path={path}>
						Blog
					</LinkItem>
					<LinkItem
						target="_blank"
						href="https://github.com/calgui1"
						path={path}
						display="inline-flex"
						alignItems="center"
						style={{ gap: 4 }}
						pl={2}
					>
						<IoLogoGithub />
            Github
					</LinkItem>
				</Stack>

				<Box flex={1} align="right">
					<Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
						<Menu isLazy id="navbar-menu">
							<MenuButton	
								as={IconButton}
								icon={<HamburgerIcon />}
								variant="outline"
								aria-label="Options"
							/>
							<MenuList>
								<NextLink href="/" passHref>
									<MenuItem as={Link}>Home</MenuItem>
								</NextLink>
								<NextLink href="/projects" passHref>
									<MenuItem as={Link}>Projects</MenuItem>
								</NextLink>
								<NextLink href="/posts" passHref>
									<MenuItem as={Link}>Posts</MenuItem>
								</NextLink>
								<MenuItem	
									as={Link}
									href="https://github.com/calgui1"
								>
									Github
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				</Box>

			</Container>
		</Box>
	)
}

export default NavBar