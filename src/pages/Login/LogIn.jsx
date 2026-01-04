import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import login from "../../../src/assets/lotty_animations/login.json"
import { NavLink, useNavigate } from 'react-router';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../contexts/AuthContext';



const Login = () => {
    // useNavigate
    const navigate = useNavigate()


    // useContexts
    const { loginWithEmail, userWithGoogle } = useContext(AuthContext);

    // states
    const [showPass, setShowPass] = useState(false)



    //  user Login with email
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const registerData = Object.fromEntries(formData);
        const { email, password } = registerData
        console.log(email, password)

        loginWithEmail(email, password)
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
                <div className=" w-full flex-1 m-5">
                    <Lottie animationData={login} loop={true} />
                </div>
                <div className="card bg-base-100 w-full  shrink-0 shadow-2xl flex-1 p-5">
                    <h1 className="text-5xl font-bold text-blue-500 text-center">Please <span className='text-white'>Log in</span></h1>
                    <div className="card-body">
                        <form onSubmit={handleLogin} className="fieldset">
                            <label className="label">Your Email</label>
                            <input type="email" className="input w-full" name='email' placeholder="Email" />

                            <div className=' relative'>
                                <label className="label"> Your Password</label>
                                <input type={showPass ? "text" : "password"} className="input w-full" name='password' placeholder="Password" />
                                <div className=' absolute top-7 right-4'>
                                    <a type='button' onClick={() => setShowPass(!showPass)} className='text-xl'>{!showPass ? <FaRegEyeSlash /> : <FaRegEye />}</a>
                                </div>
                            </div>

                            <div>
                                <NavLink to={"/reset"}>
                                    <p className="link link-hover">Forgot password?</p>
                                </NavLink>
                            </div>



                            <button type='submit' className="btn bg-blue-500 rounded-full mt-4">Log in</button>
                        </form>
                        <NavLink to={"/register"}><p>Don't have an account ? please Register</p></NavLink>
                    </div>
                    <div className=' divider'>or</div>
                    <div className='p-5'>
                        <button onClick={handleGoogle} className='btn bg-white text-base-300 w-full flex items-center'><p>Sign in</p><FcGoogle className='text-2xl' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;