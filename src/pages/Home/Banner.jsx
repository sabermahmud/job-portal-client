import React from 'react';
import { motion } from 'motion/react';
import team1 from "../../assets/hero/team1.jpg"
import team2 from "../../assets/hero/team2.jpg"
import team3 from "../../assets/hero/team3.jpg"


const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='hidden  lg:flex flex-1 w-full '>

                    

                    <motion.img  src={team1}
                     animate = {{x:[-10, 350, -10],  transition:{duration:19, repeat: Infinity},
                    }}
                     className=' w-50  h-60 object-cover rounded-l-full' alt="" />
                     
                   <motion.img  src={team3}
                     animate = {{y:[6, -70, 6],  transition:{duration:13, repeat: Infinity},
                    }}

                     className='w-30  object-cover' alt="" />

                     <motion.img  src={team2}
                     animate = {{x:[10, -350,10],  transition:{duration:19, repeat: Infinity},
                    }}
                     className='w-50  h-60 object-cover rounded-r-full' alt="" />


                     

                </div>
                <div className='flex-1 w-full'>
                    <h2 className="text-5xl font-bold"> Jobs For You</h2>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;