import React from 'react'
import { Link } from 'react-router-dom'
import RegisterFormik from '../../components/pure/forms/registerFormik'

const RegisterPage = () => {
    return (
        <>
            <RegisterFormik/>
            <Link to='/login'>Login</Link>
        </>
    )
}

export default RegisterPage