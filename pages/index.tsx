import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react'
import { log } from 'console'
import { GetServerSidePropsContext } from 'next'
import {Button} from '@chakra-ui/react'
import Header from '../components/Header';
import TopBar from '@/components/topBar'
import {Categories} from '@/models/Categories'
import CategoriesHome from '@/components/Categories'


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
      <CategoriesHome categories= {categories}></CategoriesHome>

{/*       {products.map(product => {
        return <h2 key={product.id}>{product.title}</h2>
      })} */}
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
