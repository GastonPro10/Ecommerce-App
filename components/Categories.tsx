import { Box, Flex, Grid, GridItem } from "@chakra-ui/react"
import Image from 'next/image'
import { type } from "os"
import {Categories} from '@/models/Categories'
import React from 'react';


const LabelCategory = ({label}) => {
    return <Flex display='flex' alignItems='center' justifyContent='center' height='100%' >
      <Box bgColor='white' padding='1rem 1.5rem' position='relative' width='fit-content' zIndex='1' textTransform='uppercase'
    fontWeight='bold' borderRadius='0.25rem'>{label}
      </Box>
    </Flex>
  }



type Props = {
    categories: Categories[]
  }

export default function CategoriesHome(props: Props){
    return(
    <div>
    <Grid templateColumns='540px 255px 255px' templateRows='200px 260px' gap='1rem'>
    {props.categories.map((cat, key) => {
      if(key === 0){
        return <GridItem position='relative' w='100%' h='100%' bg='blue.500' rowSpan={2}key={key}><LabelCategory label={cat}/><Image src='/modelo4.jpg' alt='imagen1' fill={true}/></GridItem>
      }
      if(cat === "women's clothing"){
        return <GridItem position='relative' w='100%' h='100%' bg='green.500' colSpan={2} key={key}><LabelCategory label={cat}/><Image src='/modelo1.jpg' alt='imagen1' fill={true}/></GridItem>
      }

      return <GridItem position='relative' gap="2rem" w='100%' h='100%' bg='blue.500' key={key}>{key == 1 ?(<Image src='/modelo3.jpg' alt='imagen3' fill={true}/>):(<Image src='/modelo2.jpg' alt='imagen1' fill={true}/>)}<LabelCategory label={cat}/></GridItem>
   })}
  </Grid>
  </div>
  )
}