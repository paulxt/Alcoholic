import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// import ProjectHeader from '../UI/ProjectHeader';
import Project3Content from '../UI/ProjectUI/Project3Content';


const Project3 = ({language}) => {

    return (
        <div className='project-3 mt-5'>
            <Project3Content  language={language} />
        </div>
    )
}

export default Project3