import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ProductDetails() {
 
    let { id } = useParams()
    
    let [product, setProduct] = useState(null)
    // let[loading, setLoading] = useState(true)
    
    async function getProduct() {
        try {
            let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
            console.log(data)
            const foundProduct = data.data.find(item => item._id === id) // Find the product by id
            setProduct(foundProduct)
            // setLoading(false)
        } catch (error) {
            console.error('Error fetching product:', error)
        }
    }

    useEffect(() => {
        getProduct()
    }, [id])

    if (!product) {
        return <div>Loading...</div> // Show a loading indicator or a message
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src={product.imageCover} className='w-100' alt={product.title} />
                    </div>
                    <div className="col-md-9">
                     
                    </div>
                </div>
            </div>
        </>
    )
}
