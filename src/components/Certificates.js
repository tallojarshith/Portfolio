import React from 'react'
import { Link } from 'react-router-dom'

const Certificates = () => {
    return (
        <div id='certificates' className='certificatesContainer d-flex  justify-content-center pt-5 pb-5 '>
            <div className="innerContainer">
                <h2>Certificates</h2>
                <div className='spacer'></div>
                <div className='certificate'>
                    <h5>Python for Data Science-Intellipaat</h5>
                    <Link to=''>View Certificate</Link>
                </div>
            </div>

        </div>
    )
}

export default Certificates
