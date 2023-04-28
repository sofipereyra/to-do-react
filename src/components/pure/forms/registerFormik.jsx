import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { User } from '../../../models/user.class'
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {
    let user = new User();

    const initialCredentials = {
        userName: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username too short')
                .max(12, 'Username too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
                .required('Role is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        '¡Passwords must match!'
                    )
                }).required('You must confirm the password')
        }
    )

    const submit = (values) => {
        alert('register user')
    }

    return (
        <div>
            <h4>Register Form</h4>
            <Formik
                initialValues={initialCredentials}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ errors, touched, isSubmitting }) => (

                    <Form>
                        <label htmlFor='userName'>Name</label>
                        <Field
                            id='userName'
                            name='userName'
                            type='text'
                            placeholder='Enter your name'
                        >
                        </Field>
                        {
                            errors.userName && touched.userName &&
                            (
                                <ErrorMessage name='userName' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor='email'>Email</label>
                        <Field
                            id='email'
                            name='email'
                            type='email'
                            placeholder='Enter your email'
                        >
                        </Field>
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name='email' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor='password'>Password</label>
                        <Field
                            id='password'
                            name='password'
                            type='password'
                            placeholder='Enter your password'
                        >
                        </Field>
                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name='password' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor='confirm'>Confirm password</label>
                        <Field
                            id='confirm'
                            name='confirm'
                            type='password'
                            placeholder='Confirm your password'
                        >
                        </Field>
                        {
                            errors.confirm && touched.confirm &&
                            (
                                <ErrorMessage name='confirm' component='div'></ErrorMessage>
                            )
                        }
                        <button type='submit'>Register Account</button>
                        {isSubmitting ? (<p>Sending your credentials...</p>) : null}
                    </Form>
                )}


            </Formik>
        </div>
    )
}

export default RegisterFormik;