import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import ServiceContent from '../UI/ServiceUI/ServiceContent';

const Service = ({language}) => {

    return (
        <div className='service-page mt-5'>
            <ServiceContent language={language} />
        </div>
        
    )
}

export default Service