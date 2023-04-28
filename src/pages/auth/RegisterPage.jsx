import React from 'react'
import { Link } from 'react-router-dom'
import RegisterFormik from '../../components/pure/forms/registerFormik'
import '../../styles/login-register.scss'

const RegisterPage = () => {
    return (
        <>
            <RegisterFormik/>
            <Link className='link' to='/login'>Login</Link>
        </>
    )
}

export default RegisterPage