import axios from 'axios'

import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import { useQuery } from 'react-query'
import Loading from '../Loading/Loading'

export default function Products() {
function getProducts(){
   return axios.get('https://ecommerce.routemisr.com/api/v1/products')
}
let {data, isLoading} = useQuery('getProducts',getProducts,{
    // cacheTime:1000
    // refetchOnMount:false
    // refetchInterval:1000
})

if (isLoading) return <Loading/>
    return (
        <>
 <div className="container my-3">
     <div className="row">
      {data?.data.data.map(item => <Product key={item._id} item={item}/>)}
     </div>
     </div>
        </>
    )
}
