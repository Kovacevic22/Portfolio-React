import ProjectCard from './ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/projects.scss';
import webappImg from '../assets/webapp.png';
import countriesImg from '../assets/countriesapp.png';
import tvtimetripImg from '../assets/tvtimetrip.png';
function Projects(){
    return(
        <div className='projects'>
            <div className='projects-container'>
                <div className='projects-header'>
                    <h2><span>#</span>projects</h2>
                    <a href="#">View all <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} /></a>
                </div>
                <div className='projects-list'>
                    <ProjectCard project={{
                        title: 'Basic Weather App',
                        description: 'Displays current weather conditions using data from the OpenWeatherMap API.',
                        image: webappImg,
                        link: '#',
                        techs: 'HTML CSS JavaScript API'
                    }} />

                    <ProjectCard project={{
                        title: 'Country Search App', 
                        description: 'An application that allows users to search for countries via a REST API and view basic information. Favorite countries can be saved and viewed later.',
                        image: countriesImg,
                        link: '#',
                        techs: 'REACT SCSS API'
                    }} />

                    <ProjectCard project={{
                        title: 'TV Time Trip',
                        description: 'An interactive app that simulates TV control using a remote. Users can change channels with sound effects and content previews', 
                        image: tvtimetripImg,
                        link: '#',
                        techs: 'HTML SCSS JavaScript'
                    }} />
                </div>
            </div>
        </div>
    );
}
export default Projects;