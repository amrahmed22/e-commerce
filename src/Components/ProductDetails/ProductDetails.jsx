import axios from 'axios';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import IsLoading from './../IsLoading/IsLoading';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CartContext } from '../../Context/CartContext';
import { Helmet } from "react-helmet";
import toast from 'react-hot-toast';
import ScrollTop from './../ScrollTop/ScrollTop';
import { NavbarContext } from '../../Context/NavbarContext';

const ProductDetails = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    };


    let { id } = useParams()

    function getProductDetails(id) {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    }
    let { data, isLoading, isError } = useQuery("productDetails", () => getProductDetails(id))
    // console.log(data?.data.data.images);
    let { addToCart } = useContext(CartContext)
    let { setNumber } = useContext(NavbarContext)

    async function addProduct(id) {
        let response = await addToCart(id)
        if (response?.data?.status === 'success') {
            // console.log(response?.data.numOfCartItems);
            setNumber(response?.data?.numOfCartItems)
            localStorage.setItem('cartProblem' ,response.data?.numOfCartItems)
            toast.success('product added successfully ', { duration: 2000, className: 'mt-5' })
        }
    }
    return <>
        <ScrollTop />

        <Helmet>
            <meta charSet="utf-8" />
            <title>{data?.data?.data?.title}</title>
             <link rel="icon" type="image/x-icon" href={data?.data?.data?.images[0]}></link>
        </Helmet>
        <section className='pt-5 mt-5 overFlowProblem'>
            {isLoading ? <IsLoading /> : <div className="container">
                <div className="row align-items-center mb-3 gy-4 py-5" >
                    <div className="col-md-4">
                        <div className='w-75 mx-auto '>
                            <Slider {...settings}>
                                {data?.data.data.images[0] ? <div className=''>
                                    <img className='w-100 ' src={data?.data.data.images[0]} alt="" />
                                </div> : ''}
                                {data?.data.data.images[1] ? <div className=''>
                                    <img className='w-100' src={data?.data.data.images[1]} alt="" />
                                </div> : ''}
                                {data?.data.data.images[2] ? <div className=''>
                                    <img className='w-100' src={data?.data.data.images[2]} alt="" />
                                </div> : ''}
                                {data?.data.data.images[3] ? <div className=''>
                                    <img className='w-100' src={data?.data.data.images[3]} alt="" />
                                </div> : ''}
                                {data?.data.data.images[4] ? <div className=''>
                                    <img className='w-100' src={data?.data.data.images[4]} alt="" />
                                </div> : ''}
                                {data?.data.data.images[5] ? <div className=''>
                                    <img className='w-100' src={data?.data.data.images[5]} alt="" />
                                </div> : ''}
                            </Slider>
                        </div>

                    </div>
                    <div className="col-md-8">
                        <div className='py-3'>
                            <h3 className=''>{data?.data.data.title}</h3>
                            <p className='text-muted my-3'>{data?.data.data.description}</p>
                            <h4 className='text-main'>{data?.data.data.category.name}</h4>
                            <div className='d-flex justify-content-between my-3'>
                                <h4>price : {data?.data.data.price} EGP</h4>
                                <h4><i className='fas fa-star rating-color'></i> {data?.data.data.ratingsAverage}</h4>
                            </div>
                            <button onClick={() => addProduct(data?.data.data._id)} className='btn bg-main w-100 text-white my-1 py-2'>Add To Cart &nbsp; <i className='fa fa-plus'></i> </button>

                        </div>
                    </div>
                </div>
            </div>}
        </section>

    </>
}

export default ProductDetails;
