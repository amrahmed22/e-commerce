import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import IsLoading from '../IsLoading/IsLoading';
import ScrollTop from './../ScrollTop/ScrollTop';
import { NavbarContext } from '../../Context/NavbarContext';







const Products = () => {
    useEffect(() => {
        console.log('localStorage', localStorage.getItem('userToken'));
    }, []);
    const [products, setProducts] = useState([]);

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    async function getProducts() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
        // console.log(data.data);
        setProducts(data.data)
        setFilteredProducts(data.data)
        setIsLoading(false)
    }

    let { addToCart } = useContext(CartContext)
    let { setNumber } = useContext(NavbarContext)



    async function addProduct(id) {
        let response = await addToCart(id)
        // console.log(response);
        if (response?.data?.status === 'success') {
            setNumber(response?.data?.numOfCartItems)
            localStorage.setItem('cartProblem', response?.data?.numOfCartItems)
            toast.success('product added successfully ', { duration: 2000, className: 'mt-5' })
        }
    }


    function search(e) {
        setFilteredProducts(products.filter((x) => {
            if (x.title.toLowerCase().includes(e.target.value.toLowerCase()) || x.category.slug.toLowerCase().includes(e.target.value.toLowerCase())) return x;

        }))
    }
    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        getProducts()
    }, [ products]);



    return <>
        <ScrollTop />
        <section className='pt-4 mt-5 overFlowProblem'>
            <div className="container py-4">
                <input onChange={search} type="text" className='form-control' placeholder='Search ... ' />
                {isLoading ? <IsLoading /> : <div className="container text-center py-3">
                    <div className="row justify-content-center g-3">
                        {filteredProducts.length ? filteredProducts.map((product) =>

                            <div key={product._id} className='col-6 col-xl-3 col-lg-3'>
                                <div className='product position-relative cursor-pointer p-2'>
                                    <Link onClick={goTop} className='text-decoration-none text-black' to={`/productDetails/${product._id}`}>

                                        <img className='w-100' src={product.imageCover} alt={product.title} />
                                        <span className='text-main font-sm fw-bolder'>{product.category.name}</span>
                                        <h5 className='h6 my-2'>{product.title.split(" ").slice(0, 2).join(' ')}</h5>
                                        <div className='d-flex justify-content-between mt-3'>
                                            <span>{product.price} EGP</span>
                                            <span> <i className=' fas fa-star rating-color'></i> {product.ratingsAverage}</span>
                                        </div>
                                    </Link>
                                    <button onClick={() => addProduct(product._id)} className='btn bg-main text-white w-100 btn mt-3 mb-2'>add to cart &nbsp; <i className='fa fa-plus'></i></button>
                                 





                                </div>


                            </div>

                        ) : <div className='pb-5'>
                            <div className='pb-5'>
                                <div className='py-5'>
                                    <div className='py-5 d-flex justify-content-center align-items-center'>
                                        <p className='h1 bg-main-light text-black py-5 w-100 rounded-4 text-center'>No Results <i className="fa fa-search"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>}
            </div>
        </section>

    </>
}

export default Products;
