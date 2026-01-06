import React, { useEffect, useState } from 'react';
import JobsCard from '../../Sheared/JobsCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/jobs').then(res => res.json()).then(jobsData => {
            setJobs(jobsData)
        })
    }, [])

    console.log(jobs)

    return (
        <div className='p-5'>
            <div className='my-10'>
                <h2 className='text-center text-5xl font-bold mb-5'>Hot Jobs Today</h2>
            <p className='text-center text-xl text-blue-300/30'>Find and connect with the right candidates—faster and smarter.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full'>
                {
                    jobs.map(job => <JobsCard key={job._id} job={job}></JobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;