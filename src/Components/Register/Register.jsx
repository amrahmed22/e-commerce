import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Hourglass } from 'react-loader-spinner'


const Register = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    let phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    let validateSchema = Yup.object({
        name: Yup.string().min(3, 'Min Length is 3 characters !').max(10, 'Max Length is 10 characters !').required('Name Is Required ! '),
        email: Yup.string().email('Invalid Email !').required('Email Is Required !'),
        phone: Yup.string().matches(phoneRegExp, 'Invalid Phone Number !').required('Phone Number Is Required !'),
        password: Yup.string().min(3, 'Min Length is 3 characters !').max(10, 'Max Length is 10 characters !').required('Password Is Required ! '),
        rePassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match !')
            .required('rePassword Is Required ! '),
    })
    let navigate = useNavigate()
    async function submitRegister(values) {
        setIsLoading(true)
        let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values).catch((err) => {
            setError(err.response.data.message)
            setIsLoading(false)
        })
        console.log(data);


        if (data.message === 'success') {
            setIsLoading(false)
            navigate('/login')
        }
    }

    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            rePassword: ''
        }, validationSchema: validateSchema
        , onSubmit: submitRegister
    })

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return <>
        <section className='overFlowProblem d-flex align-items-center py-5'>
            <div className="container py-5">
                <form className='py-4' onSubmit={formik.handleSubmit}>
                    {error ? <div className='alert alert-danger p-2 mt-2'>{error}</div> : ""}
                    <label className=' mb-1' htmlFor='name'> Name : </label>
                    <input id='name' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} name='name' type="text" className='form-control my-1' />
                    {formik.errors.name && formik.touched.name ? <div className='alert alert-danger p-2 mt-2'>{formik.errors.name}</div> : ""}

                    <label htmlFor='email' className='my-1'> Email : </label>
                    <input id='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name='email' type="email" className='form-control my-1' />
                    {formik.errors.email && formik.touched.email ? <div className='alert alert-danger p-2 mt-2'>{formik.errors.email}</div> : ""}

                    <label htmlFor='phone' className='my-1'> phone : </label>
                    <input id='phone' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} name='phone' type="tel" className='form-control my-1' />
                    {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger p-2 mt-2'>{formik.errors.phone}</div> : ""}

                    <label htmlFor='password' className='my-1'> Password : </label>
                    <input id='password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} name='password' type="password" className='form-control my-1' />
                    {formik.errors.password && formik.touched.password ? <div className='alert alert-danger p-2 mt-2'>{formik.errors.password}</div> : ""}

                    <label htmlFor='rePassword' className='my-1'> Re-Password : </label>
                    <input id='rePassword' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} name='rePassword' type="password" className='form-control my-1' />
                    {formik.errors.rePassword && formik.touched.rePassword ? <div className='alert alert-danger p-2 mt-2'>{formik.errors.rePassword}</div> : ""}

                    <button onClick={goTop} disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white px-5 my-2'>{isLoading ? <Hourglass
                        visible={true}
                        height="20"
                        width="20"
                        ariaLabel="hourglass-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        colors={['#fff', '#000']}
                    /> : 'Register'}</button>

                </form>
            </div>
        </section>
    </>
}

export default Register;
