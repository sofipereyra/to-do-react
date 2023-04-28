import React from 'react'
import { Link } from 'react-router-dom'
import LoginFormik from '../../components/pure/forms/loginFormik'
import '../../styles/login-register.scss'

const LoginPage = () => {
    return (
        <>
          <LoginFormik/>
          <Link className='link' to='/register'>Register</Link>
        </>
    )
  }

export default LoginPage