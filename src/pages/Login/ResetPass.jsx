import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Lottie from 'lottie-react';
import forgot from '../../assets/lotty_animations/forgot.json'

const ResetPass = () => {
    // useContexts
    const { resetPass } = useContext(AuthContext);
    // reset password
    const handleResetPass = (e) => {
        const email = e.target.value;
        resetPass(email)
    }
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse gap-5">
                <div className=" w-full flex-1 m-5">
                    <h2 className='text-4xl font-bold text-red-300'>Forgot yor password ? <span className='text-green-300'>Don't Worry</span></h2>
                    <Lottie animationData={forgot} loop={true} />
                </div>
                <div className="card bg-base-100 w-full  shrink-0 shadow-2xl flex-1 p-5">
                    <h1 className="text-5xl font-bold text-blue-500 text-center">Type <span className='text-white'>Your Email</span></h1>
                    <div className="card-body">
                        <form onSubmit={handleResetPass} className="fieldset">
                            <label className="label">Your Email</label>
                            <input type="email" className="input w-full" name='email' placeholder="Email" />
                            <button type='submit' className="btn bg-blue-500 rounded-full mt-4">Get Reset Code</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPass;