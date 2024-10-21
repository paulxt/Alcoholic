import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/project2.css';

import Project2Content from '../UI/ProjectUI/Project2Content';

    
const Project2 = ({language}) => {
    return (
        <div className='project-2 mt-5'>
            <Project2Content language={language} />
        </div>
        
    )
}

export default Project2