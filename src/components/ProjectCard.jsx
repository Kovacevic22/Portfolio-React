import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/projectcard.scss'
function ProjectCard ({project}){
    return (
        <div className='project-card'>
            <div className='project-image'>
                <img src={project.image} alt={project.title} />
            </div>
            <div className='project-details'>
                <div className='project-techs'>
                    <h5>{project.techs}</h5>
                </div>
                <div className='project-content'>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank">View project <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} /></a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;