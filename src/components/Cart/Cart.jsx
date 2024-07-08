import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';
import { toast } from 'react-toastify';

export default function Cart() {
    let { getUserCart, deleteFromCart , updateQTY ,createCheckout} = useContext(cartContext);
    const [items, setItems] = useState([]);
    // const [OrderId, setOrderId] = useState('');

    async   function checkOut(id){
        let data =  await createCheckout(id)
        console.log(data.session.url);
        window.location.href=data.session.url;
       }

 async   function removeFromCart(id){
    let data =  await deleteFromCart(id)
    console.log(data);
    setItems(data?.data);
   }

   async   function updateItemQuantity(id,count){
    let data =  await updateQTY(id ,count)
    if(data.status=='success'){
        toast.success('Product Updated Successfuly')
        setItems(data?.data);
    }
   }

    useEffect(() => {
        const fetchCartData = async () => {
            let data = await getUserCart();
            if(data?.response?.data?.statusMsg == 'fail'){
                return   setItems({statusMsg: 'fail'});
            }
            setItems(data?.data);
       
        };

        fetchCartData();
    }, []);

    if(items?.statusMsg=='fail') return <h1 className='text-main text-center my-3'>No items in cart</h1>
    return (
        <>
            {items?.totalCartPrice ? (
                <div className="container bg-main-light my-5 p-3">
                    <h2>Shop Cart:</h2>
                    <p className='text-main'>Total Cart Price: {items?.totalCartPrice} EGP</p>

                    {items.products.map(item => (
                        <div key={item._id} className="row border-bottom p-2">
                            <div className="col-md-1 ">
                                {/* Ensure to return the image element */}
                                <img src={item.product.imageCover} className='w-100' alt="" />
                            </div>
                            <div className="col-md-11 d-flex justify-content-between">
                                <div>
                                    <p className='m-0'>{item.product.title}</p>
                                    <p className='text-main m-0'>Price :{item.price} EGP</p>
                                    <button onClick={()=>removeFromCart(item.product._id)} className='btn m-0 mt-2 p-0'><i className='fa-solid fa-trash-can text-main'></i> Remove</button>
                                </div>
                                <div>
                                    <button className='btn brdr' onClick={()=>updateItemQuantity(item.product._id , item.count + 1)}>+</button>
                                    <span className='mx-2'>{item.count}</span>
                                    <button disabled={item.count==1} className='btn brdr' onClick={()=>updateItemQuantity(item.product._id , item.count - 1)}>-</button>
                                </div>
                            </div>
                        </div>
                    ))}
                  <div className="d-flex justify-content-center my-4">
    <button onClick={()=>checkOut(items._id)} className="btn bg-main text-white w-25">Place Order</button>
</div>

                </div>
            ) : 'Loading...'}
        </>
    );
}
