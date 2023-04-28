import React from 'react'
import { Link } from 'react-router-dom'
import LoginFormik from '../../components/pure/forms/loginFormik'

const LoginPage = () => {
    return (
        <>
          <LoginFormik/>
          <Link to='/register'>Register</Link>
        </>
    )
  }

export default LoginPage