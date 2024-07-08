import React from 'react'
import Carousel from '../Carousel/Carousel'
import Categories from '../Categories/Categories'
import Products from '../Products/Products'

export default function Home() {


    
    return (
        <div className='my-2'>
            <Carousel />
            <Categories />
            <Products />
        </div>
    )
}
