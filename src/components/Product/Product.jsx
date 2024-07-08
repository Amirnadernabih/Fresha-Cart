import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../../context/cartContext'
import { toast } from 'react-toastify'

export default function Product({ item }) {
    const { counter, setCounter, addToCart } = useContext(cartContext)
    const [btnLoading, setBtnLoading] = useState(false) // Changed initial state to false

    async function addProductToCart(id) {
        setBtnLoading(true) // Set loading to true when button is clicked
        try {
            const data = await addToCart(id)
            console.log(data)
            if (data.status === 'success') {
                toast.success('Product added successfully')
                setCounter(data.numOfCartItems)
            } else {
                toast.error('Failed to add product to cart')
            }
        } catch (error) {
            console.error('Error adding product to cart:', error)
            toast.error('Failed to add product to cart')
        } finally {
            setBtnLoading(false) // Reset loading state regardless of success or failure
        }
    }

    return (
        <div className="col-md-2">
            <div className="product py-3 px-3 rounded-3 cursor-pointer">
                <Link to={'/product-details/' + item._id}>
                    <img src={item.imageCover} className='w-100' alt="" />
                    <span className='text-main'>{item.category.name}</span>
                    <h6 className='mt-3'>{item.title.split(' ').slice(0, 2).join(' ')}</h6>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <p>{item.price} EGP</p>
                        </div>
                        <div>
                            <p><i className='fa-solid fa-star rating-color'></i> {item.ratingsAverage}</p>
                        </div>
                    </div>
                </Link>
                <button disabled={btnLoading} onClick={() => addProductToCart(item._id)} className='btn bg-main w-100 text-white'>
                    {btnLoading ? <i className='fa fa-spin fa-spinner'></i> : 'Add To Cart'}
                </button>
            </div>
        </div>
    )
}
