import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import register from "../../../src/assets/lotty_animations/register.json"
import {  NavLink, useNavigate } from 'react-router';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../contexts/AuthContext';



const Register = () => {
    // useNavigate
    const navigate = useNavigate()


    // useContexts
    const { createUserWithEmail, userWithGoogle } = useContext(AuthContext);

    // states
    const [showPass, setShowPass] = useState(false)
    const [showRePass, setShowRePass] = useState(false)



    // create user with email
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const registerData = Object.fromEntries(formData);
        const { email, password, confirmedPassword } = registerData
        console.log(email, password, confirmedPassword)

        createUserWithEmail(email, password)
            .then(res => {
                navigate("/");
                const user = res.user;
                console.log(user);
                
            })
            .catch(error => {
                console.log(error)
            })
    }




    // create user with google
    const handleGoogle = () => {
        userWithGoogle()
            .then(res => {
                navigate("/");
                const googleUser = res.user
                console.log(googleUser)
                
            }).catch((error) => {
                // Handle Errors here.
                console.log(error)
                // ...
            });
    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse gap-5">
                <div className=" w-full flex-1">
                    <Lottie animationData={register} loop={true} />
                </div>
                <div className="card bg-base-100 w-full  shrink-0 shadow-2xl flex-1 p-5">
                    <h1 className="text-5xl font-bold text-blue-500 text-center">Register <span className='text-white'>now!</span></h1>
                    <div className="card-body">
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="label">Your Email</label>
                            <input type="email" className="input w-full" name='email' placeholder="Email" />

                            <div className=' relative'>
                                <label className="label"> Your Password</label>
                                <input type={showPass ? "text" : "password"} className="input w-full" name='password' placeholder="Password" />
                                <div className=' absolute top-7 right-4'>
                                    <a type='button' onClick={() => setShowPass(!showPass)} className='text-xl'>{!showPass ? <FaRegEyeSlash /> : <FaRegEye />}</a>
                                </div>
                            </div>

                            <div className='relative'>
                                <label className="label">Confirm Your Password</label>
                                <input type={showRePass ? "text" : "password"} className="input w-full" name='confirmedPassword' placeholder="Re-type  Password" />
                                <div className=' absolute top-7 right-4'>
                                    <a type='button' onClick={() => setShowRePass(!showRePass)} className='text-xl'>{!showRePass ? <FaRegEyeSlash /> : <FaRegEye />}</a>
                                </div>
                            </div>


                            <button type='submit' className="btn bg-blue-500 rounded-full mt-4">Sign up</button>
                        </form>
                        <NavLink to={"/login"}><p>already have an account ? please Login</p></NavLink>
                    </div>
                    <div className=' divider'>or</div>
                    <div className='p-5'>
                        <button onClick={handleGoogle} className='btn bg-white text-base-300 w-full flex items-center'><p>Sign with</p><FcGoogle className='text-2xl' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;