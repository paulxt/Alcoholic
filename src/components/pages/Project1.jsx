import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Project1Content from '../UI/ProjectUI/Project1Content';

const Project1 = ({language}) => {

    return (
        <div className='project-1 mt-5'>
            <Project1Content language={language} />
        </div>
    )
}

export default Project1