import { p } from 'motion/react-client';
import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

const JobsCard = ({ job }) => {
    const { title, location, jobType, applicationDeadline, salaryRange, description, company, requirements, status,  company_logo } = job;
    return (
        <div className="card bg-base-100 w-full shadow-sm border-2 flex-1">
            <figure >
                <div className='p-2 flex items-center gap-5 justify-center w-full mx-auto '> 
                    <div className='w-1/2' >
                        <img
                            src={company_logo} className='mx-auto'
                            alt="Company Logo" />
                    </div>
                    <div className='w-full'>
                        <h4 className='text-purple-400 text-lg font-semibold ' >{company}</h4>
                        <p className='text-sm text-gray-500 flex gap-2 items-center mt-2'><FaLocationDot />{location}</p>
                    </div>
                </div>
            </figure>
            <hr />
            <div className="card-body">
                <h2 className="card-title text-xl text-blue-400 font-bold">{title}</h2>
                <div className='flex ' >
                    <p className='text-blue-200/50'>Type: {jobType}</p>
                    <p className='text-red-300'>Deadline: {applicationDeadline}</p>
                </div>
                <p className='text-base my-2'>{description}</p>
                <div className='flex flex-wrap gap-2'>
                    {
                        requirements.map(requirement => <p className='btn btn-xs border-2 border-purple-300 text-xs rounded-full '>{requirement}</p>)
                    }
                </div>
                
                <hr />

                <div className="card-actions justify-between items-center">
                    <div >
                        <h4 className='text-xl'><span className='text-blue-300 text-2xl'>{salaryRange.min}/-</span>{salaryRange.currency}</h4>
                    </div>
                    <button className="btn btn-primary">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;