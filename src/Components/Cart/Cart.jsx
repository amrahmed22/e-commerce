import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import IsLoading from '../IsLoading/IsLoading';
import ScrollTop from './../ScrollTop/ScrollTop';
import toast from 'react-hot-toast';
import { NavbarContext } from '../../Context/NavbarContext';




const Cart = () => {
    let { getUserCart, removeProduct, updateProduct, clearCart } = useContext(CartContext)

    const [cartDetails, setCartDetails] = useState(null);
    let [isLoading, setIsLoading] = useState(true);
    let { setNumber } = useContext(NavbarContext)





    async function getCart() {
       if (Number(localStorage.getItem('cartProblem')) !== 0) {
        let { data } = await getUserCart();
        // console.log(data);
        setCartDetails(data);
        setIsLoading(false);
       }
       else
       {
        
        setCartDetails(null);
        setIsLoading(false);    
       }
    }


    async function remove(id) {
        
        let { data } = await removeProduct(id)
        // console.log(data);
        if (data?.status === 'success') {
            setCartDetails(data)
            setNumber(data?.numOfCartItems)
            
            localStorage.setItem('cartProblem' , data?.numOfCartItems)


            toast.success('product Removed successfully ', { duration: 4000, className: 'mt-5' })
            // window.scrollTo({
            //     top: 0,
            //     behavior: 'smooth',
            // });
        }

    }
    async function clear() {
        let { data } = await clearCart()
        // console.log(data.numOfCartItems);
        setNumber(data?.numOfCartItems)

        setCartDetails(null)
        localStorage.setItem('cartProblem' , 0)

        toast.success('Cart Cleared successfully ', { duration: 4000, className: 'mt-5' })
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

    }



    async function update(id, count) {
        let { data } = await updateProduct(id, count)
        // console.log(data);
        if (data.status === 'success') {
            setCartDetails(data)
            console.log(data.numOfCartItems);
            setNumber(data.numOfCartItems)
            localStorage.setItem('cartProblem' , data?.numOfCartItems)
            toast.success('product updated successfully ', { duration: 4000, className: "mt-5" })

        }

    }
    useEffect(() => {
        getCart()
    }, []);

    return <>
        <ScrollTop />
        <section className='pt-4 mt-5 px-2 overFlowProblem'>
            <div className="container">
                <div className="row my-3 gy-2 align-items-center py-4 text-center bg-main-light rounded-4">
                    <div className="col-md-6">
                        <div>
                            <h2 className='fw-bold'>Shopping Cart <i className='fa fa-shopping-cart'></i> <sup className='text-main fs-4 fw-bold'>{cartDetails?.numOfCartItems ? cartDetails?.numOfCartItems : 0}</sup></h2>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h4 className=' fw-bold'>Total Price : <span className='text-main'>{cartDetails?.data.totalCartPrice ? cartDetails?.data.totalCartPrice : 0}</span> EGP</h4>
                        </div>
                    </div>
                </div>
                {isLoading ? <IsLoading /> : <>


                    {
                        cartDetails == null ? <div className='pb-5'>
                            <div className='pb-5'>
                                <div className='py-5'>
                                    <div className='py-5 d-flex justify-content-center align-items-center'>
                                        <p className='h1 bg-main-light text-black py-5 w-100 rounded-4 text-center'>Cart is Empty <i className="fa-solid fa-ban"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div> :
                            <div className='pb-5'>
                                {cartDetails?.data.products.map((product) =>
                                    <div key={product.product._id} className="row shadow-sm align-items-center bg-main-light rounded-4 my-3">
                                        <div className=" col-4 col-md-1">
                                            <div className=''>
                                                <img className='w-100 py-3 rounded-4' src={product.product.imageCover} alt="" />

                                            </div>
                                        </div>
                                        <div className=" col-8 col-md-11">
                                            <div className='d-flex justify-content-between align-items-center p-3'>
                                                <div>
                                                    <h5 className='fw-bold '>{product.product.title}</h5>
                                                    <h5 className='my-3 fw-bold  my-3 '>Price : {product.price} EGP</h5>
                                                    {/* <h5 className='fw-bold'>category : {product.product.category.name}</h5> */}
                                                    <button className='btn btn-danger' onClick={() => remove(product.product._id)}>Remove &nbsp; <i className="fa-solid fa-trash-can"></i></button>
                                                </div>
                                                <div className=''>
                                                    <button className='btn bg-main text-white' onClick={() => update(product.product._id, product.count + 1)}><i className='fa fa-plus'></i></button>
                                                    <h5 className='text-center my-3 fw-bolder'>{product.count}</h5>
                                                    <button className='btn bg-main text-white' onClick={() => update(product.product._id, product.count - 1)} ><i className='fa fa-minus'></i></button>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className='text-center'>
                                    {
                                        cartDetails?.data.products.length == 0 ? <div className='pb-5'>
                                            <div className='pb-5'>
                                                <div className='py-5'>
                                                    <div className='py-5 d-flex justify-content-center align-items-center'>
                                                        <p className='h1 bg-main-light text-black py-5 w-100 rounded-4 text-center'>Cart is Empty <i className="fa-solid fa-ban"></i></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> : <button className='btn btn-danger py-2 w-75 my-3' onClick={() => clear()}>Clear Cart &nbsp; <i className="fa-solid fa-trash-can"></i></button>
                                    }
                                </div>
                            </div>
                    }


                </>}

            </div>


        </section>

    </>
}

export default Cart;
