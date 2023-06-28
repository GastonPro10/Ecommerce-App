import React from 'react'
import { Box, Container, Flex, Grid, GridItem, Heading } from '@chakra-ui/react'
import { log } from 'console'
import { GetServerSidePropsContext } from 'next'
import {Button} from '@chakra-ui/react'
import Header from '../components/Header';
import TopBar from '@/components/topBar'
import {Categories} from '@/models/Categories'
import CategoriesHome from '@/components/Categories'
import Middleritem from '@/components/Middleritem'
import {BsTruck, BsCcCircle} from 'react-icons/bs'
import {TfiReload} from 'react-icons/tfi'

type Product = {
  id: number;
  title: string;
  price: number;
  description: number;
  category: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  }
}

type Props = {
  products: Product[],
  categories: Categories[]
}

export default function Home({products, categories}: Props) {
  
  return (
    <main>
      <TopBar/>
      <Header/>
      <Container size="lg">
        <CategoriesHome categories= {categories}></CategoriesHome>
        <Flex justifyContent='space-between' margin='2rem 0'>
          <Middleritem title='Free Shipping' content='On All UA order or order above $100' icon={<BsTruck size={40}/>}/>
          <Middleritem title='Nicolas Mingorance' content='On All UA order or order above $100' icon={<TfiReload size={40}/>}/>
          <Middleritem title='Golazo Messi' content='On All UA order or order above $100' icon={<BsCcCircle size={40}/>}/> 
        </Flex>
      </Container>

      {products.map(product => {
        return <h2 key={product.id}>{product.title}</h2>
      })}
    </main>

  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const products = await fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
  const categories = await fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())

  return {
    props: {
      products,
      categories
    }
  }
}
