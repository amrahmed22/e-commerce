import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/freshcart-logo.svg'
import { userContext } from '../../Context/UserContext';
import { NavbarContext } from '../../Context/NavbarContext';

const Navbar = () => {

    let location = useLocation()

    function open() {
        document.querySelector('.menu').style.right = '0'

    }

    function close() {
        document.querySelector('.menu').style.right = '-100%'
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    let { userToken, setUserToken } = useContext(userContext)

    function logout() {
        localStorage.removeItem('userToken')
        setUserToken(null)

    }

    let { number } = useContext(NavbarContext)
    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    return <>



        <nav className='fixed-top overFlowProblem'>
            <ul className='nav-bar container'>
                <div className="logo">
                    <Link to='/' onClick={goTop}>
                    <img src={logo} alt="" className='w-100' />
                    </Link>
                </div>
                <span className="menu fw-bold d-flex align-items-center">
                    {userToken ? <>  <li onClick={close}><Link className={location.pathname=='/'?'nav-item active-link':'nav-item'} to={'/'}>Home </Link></li>
                        <li onClick={close}><Link className={location.pathname.includes('product')?'nav-item active-link':'nav-item'} to={'/products'}>Products </Link></li>
                        {/* <li onClick={close}><Link className={location.pathname=='/wishlist'?'nav-item active-link':'nav-item'} to={'/wishlist'}><i className='fs-4 fa-regular fa-heart'></i> <sup className='text-main fw-bold fs-5'>{ 0 }</sup> </Link></li> */}
                        <li onClick={close}><Link className={location.pathname=='/cart'?'nav-item active-link':'nav-item'} to={'/cart'}><i className='fs-4 fas fa-shopping-cart'></i> <sup className='text-main fw-bold fs-5'>{number?number: 0 }</sup></Link> </li>
                        <li onClick={close}><Link className={location.pathname=='/profile'?'nav-item active-link':'nav-item'} to={'/profile'}><i className='fs-4 fa fa-user'></i>  </Link></li>

                    </> : ''}
                    <li className=' d-flex justify-content-center align-items-center mx-5'>
                        <i className='fa-brands fa-facebook mx-2'></i>
                        <i className='fa-brands fa-twitter mx-2'></i>
                        <i className='fa-brands fa-instagram mx-2'></i>
                        <i className='fa-brands fa-tiktok mx-2'></i>
                        <i className='fa-brands fa-youtube mx-2'></i>
                    </li>
                    {!userToken ? <>   <li className='no'>
                        <Link className='text-decoration-none text-white' to={'/register'}><button className=' btn bg-main text-white mx-2' onClick={close}>Register</button></Link>
                    </li>
                        <li className='no '>
                            <Link className='text-decoration-none text-white' to={'/login'}><button className=' btn bg-main text-white mx-2 ' onClick={close}>Login</button></Link>
                        </li></> : <li className='no '>
                        <Link className='text-decoration-none text-white' to={'/login'} onClick={logout}><button className=' btn bg-main text-white mx-2 ' onClick={close}>Logout</button></Link>
                    </li>}

                    <span onClick={close} className="close-menu"><i className="fas fa-times fs-1"></i></span>
                </span>

                <span className='d-flex justify-content-between'>
                    <span onClick={open} className="open-menu"><i className="fas fa-bars fs-1"></i></span>
                    {
                        userToken?<Link to={'/cart'}><span className='icon'><i className='fas fa-shopping-cart'></i><sup className='text-black fw-bold'> {number?number: 0 } </sup></span></Link>:''

                    }
                </span>

            </ul>
        </nav>
    </>

}

export default Navbar;
