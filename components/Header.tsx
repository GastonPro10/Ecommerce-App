import {AiOutlineSearch} from 'react-icons/ai'
import {GiWorld} from 'react-icons/gi'
import {BsPerson} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'
import {Flex, Spacer, Box, Container} from '@chakra-ui/react'

export default function Header(){
    return(
        <Box marginBottom="25px" width='100%' borderBottom='solid 2px' borderColor='gray.100'>
            <Container as={Flex} justifyContent='space-between' alignItems='center' size="lg">
                <Box margin='1rem 0'>
                    <Image src='/images.png' alt='' width={100} height={48}></Image>
                </Box>
                <nav>
                    <Flex as='ul' listStyleType='none' gap='2rem'>
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Woman</Link></li>
                        <li><Link href="#">Men</Link></li>
                        <li><Link href="#">Beauty</Link></li>
                        <li><Link href="#">Accesories</Link></li>
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </Flex>
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
