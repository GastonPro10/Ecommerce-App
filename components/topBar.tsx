import {BsFillTelephoneFill, BsClockFill, BsPinMapFill} from 'react-icons/bs'
import {RiFacebookCircleLine, RiTwitterLine, RiInstagramLine, RiPinterestLine} from 'react-icons/ri'
import Image from 'next/image'
import Link from 'next/link'
import {Flex, Spacer} from '@chakra-ui/react'

export default function TopBar(){
    return(
        <Flex bg='black' w= '100%' p={2} color='white' justifyContent={'space-between'} fontSize='xs'>
            <Flex gap='1.5rem'>
                <Flex as={Link} href= '#' alignItems='center' gap='0.5rem'><BsFillTelephoneFill size={14}/>553535353</Flex>

                <Flex as={Link} display={{base: 'none', sm: 'flex'}} href= '#' alignItems='center' gap='0.5rem'><BsPinMapFill size={14}/>Ubication 1 , 2</Flex>

                <Flex as={Link} display={{base: 'none', sm: 'flex'}} href= '#' alignItems='center' gap='0.5rem'><BsClockFill size={14}/>All Week 24/7</Flex>
            </Flex>
            <Flex gap='1rem'>
                <Link href="#"><RiFacebookCircleLine size={24}/></Link>

                <Link href="#"><RiInstagramLine size={24}/></Link>

                <Link href="#"><RiTwitterLine size={24}/></Link>

                <Link href="#"><RiPinterestLine size={24}/></Link>
            </Flex>
        </Flex>
    )
}
