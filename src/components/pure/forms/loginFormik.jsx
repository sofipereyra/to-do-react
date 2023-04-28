import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
  {
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .required('Password required')
  }
)

const LoginFormik = () => {

  const initialCredentials = {
    email: '',
    password: ''
  }

  return (
    <div >
      <h4 className='title'>Login</h4>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >

        {({ errors, touched, isSubmitting }) => (
          <Form className='form'>
            <label htmlFor='email'>Email</label>
            <Field
              className = 'input-form'
              id='email'
              name='email'
              type='email'
              placeholder='Enter your Email'
              >
            </Field>
            {
              errors.email && touched.email &&
              (
                <ErrorMessage name='email'  component='div'></ErrorMessage>
              )
            }
            <label htmlFor='password'>Password</label>
            <Field
              className = 'input-form'
              id='password'
              name='password'
              type='password'
              placeholder='Enter your password'>
            </Field>
            {
              errors.password && touched.password &&
              (
                <ErrorMessage name='password'  component='div'></ErrorMessage>
              )
            }
            <button className = 'btn-form' type='submit'>Login</button>
            {isSubmitting ? (<p>Login...</p>) : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginFormik;
