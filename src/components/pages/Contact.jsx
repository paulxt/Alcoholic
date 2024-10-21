import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Newsletter from '../UI/HomeUI/Newsletter';

const ContactPage = ({language}) => {

    return (
        <div className='contact-page mt-5'>
            <Newsletter language={language} />
        </div>
    )
}

export default ContactPage