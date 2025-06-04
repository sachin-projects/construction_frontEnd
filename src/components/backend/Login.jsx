import React, { useContext } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/Auth';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const res = await fetch('http://localhost:8000/api/authenticate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if (result.status == false) {
            toast.error("Login Failed");
        }
        else {
            const userinfo = {
                id: result.id,
                token: result.token,
            }
            localStorage.setItem('userinfo', JSON.stringify(userinfo));
            login(userinfo);


            navigate('/admin/dashboard');
        }

        console.log(result);

    }

    return (
        <>
            <Header />
            <main>
                <div className='container my-5 d-flex justify-content-center'>
                    <div className='login-form my-5'>
                        <div className='card shadow border-0'>

                            <div className='card-body py-5 '>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h4 className='mb-3'>Login here</h4>
                                    <div className='mb-3'>
                                        <label htmlFor='#' className='form-label'>Email</label>
                                        <input
                                            {
                                            ...register('email', {
                                                required: "Email field is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: 'Please enter a valid email address'
                                                }
                                            })
                                            }
                                            type='text' className={`form-control ${errors.email && 'is-invalid'}`} placeholder='Enter Email' />
                                        {
                                            errors.email && <p className='invalid-feedback'>{errors.email.message}</p>
                                        }
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='#' className='form-label'>Password</label>
                                        <input {
                                            ...register('password', {
                                                required: "Password field is required"
                                            })
                                        }
                                            type='password' className={`form-control ${errors.password && 'is-invalid'}`} placeholder='password' />

                                        {
                                            errors.password && <p className='invalid-feedback'>{errors.password.message}</p>
                                        }
                                    </div>

                                    <button type='submit' className='btn-primary large'>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <ToastContainer />
            <Footer />

        </>
    )
}

export default Login;
