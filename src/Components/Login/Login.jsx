import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Hourglass } from 'react-loader-spinner'
import { userContext } from '../../Context/UserContext';

const Login = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    let validateSchema = Yup.object({
        email: Yup.string().email('Invalid Email !').required('Email Is Required !'),
        password: Yup.string().min(3, 'Min Length is 3 characters !').max(10, 'Max Length is 10 characters !').required('Password Is Required ! '),
    })
    let navigate = useNavigate()
    let {userToken , setUserToken} = useContext(userContext)
    async function submitLogin(values) {
        setIsLoading(true)
        let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values).catch((err) => {
            setError(err.response.data.message)
            setIsLoading(false)
        })
        // console.log(data);


        if (data.message === 'success') {
            setIsLoading(false)
            localStorage.setItem('userToken' , data.token)
            setUserToken(data.token)
            // console.log('done');
            navigate('/')
        }
    }
    let formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        }, validationSchema: validateSchema
        , onSubmit: submitLogin
    })

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return <>
        <section className='py-5 overFlowProblem'>
          <div className='py-5' >
          <div className="container py-5">
                <form className='mt-5 mb-5 py-5 ' onSubmit={formik.handleSubmit}>
                    {error ? <div className='alert alert-danger p-2 mt-2'>{error}</div> : ""}

                    <label htmlFor='email' className='my-1'> Email : </label>
                    <input id='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name='email' type="email" className='form-control my-1' />
                    {formik.errors.email && formik.touched.email ? <div className='alert alert-danger p-2 mt-2'>{formik.errors.email}</div> : ""}

                    <label htmlFor='password' className='my-1'> Password : </label>
                    <input id='password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} name='password' type="password" className='form-control my-1' />
                    {formik.errors.password && formik.touched.password ? <div className='alert alert-danger p-2 mt-2'>{formik.errors.password}</div> : ""}
                    
                    <button onClick={goTop} disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white px-5 my-2'>{isLoading ? <Hourglass
                        visible={true}
                        height="20"
                        width="20"
                        ariaLabel="hourglass-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        colors={['#fff', '#000']}
                    /> : 'Login'}</button>

                    <Link onClick={goTop} to={'/register'} className='ms-3 text-main'>Don't have an account ?</Link>

                </form>
            </div>
          </div>
        </section>

    </>
}

export default Login;
