import {AiOutlineSearch} from 'react-icons/ai'
import {GiWorld} from 'react-icons/gi'
import {BsPerson} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'
import {Flex, Spacer, Box, Container, Menu, MenuButton, MenuList, MenuItem, IconButton} from '@chakra-ui/react'
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from '@chakra-ui/icons'

const menu = [
    {
        tittle: 'About Us',
        href: '#'
    },
    {
        tittle: 'Woman',
        href: '#'
    },
    {
        tittle: 'Men',
        href: '#'
    },
    {
        tittle: 'Beauty',
        href: '#'
    },
    {
        tittle: 'Accesories',
        href: '#'
    },
    {
        tittle: 'Blog',
        href: '#'
    },
    {
        tittle: 'Contact',
        href: '#'
    },
]

export default function Header(){
    return(
        <Box marginBottom="25px" width='100%' borderBottom='solid 2px' borderColor='gray.100'>
            <Container as={Flex} justifyContent='space-between' alignItems='center' size="lg">
                <Flex margin='1rem 0'>
                    <Box as= 'nav' display={{md:'none'}}>
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<HamburgerIcon />}
                                    variant='outline'
                                />
                                <MenuList>
                                    {
                                        menu.map((item, index) => {
                                            return <MenuItem key={index}>
                                                <Link href={item.href}>{item.tittle}</Link>
                                            </MenuItem>
                                        })
                                    }
                                </MenuList>
                            </Menu>
                        </Box>
                    <Image src='/images.png' alt='' width={100} height={48}></Image>
                </Flex>
                <nav>
                    
                    <Box as='nav' display={{base:'none', sm: 'block'}}>
                        <Flex as='ul' listStyleType='none' gap='2rem'>
                            {
                                menu.map((item, index) => {
                                    return <li key={index}><Link href={item.href}>{item.tittle}</Link></li>
                                })
                            }
                        </Flex>
                    </Box>
                </nav>

                <div className="ecommercemenu">
                    <Flex as= 'ul' listStyleType='none' gap='1.5rem' margin='0.5rem'>
                        <li>
                            <Link href= '#'><AiOutlineSearch size={24}/></Link>
                        </li>
                        <li>
                            <Link href= '#'><GiWorld size={24}/></Link>
                        </li>
                        <li>
                            <Link href= '#'><BsPerson size={24}/></Link>
                        </li>
                        <li>
                            <Link href= '#'><AiOutlineShoppingCart size={24}/></Link>
                        </li>
                    </Flex>
                </div>
            </Container>
        </Box>
    )
}
