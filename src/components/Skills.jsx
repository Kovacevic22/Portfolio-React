import skillsImg from '../assets/skills-pins.png'
import '../styles/skills.scss'
function Skills (){
    return (
        <div className='skills-container'>
            <div className='skills'>
                <div className='skills-title'>
                    <h2><span>#</span>skills</h2>
                </div>
                <div className='skills-content'>
                    <div className='skills-left-side'>
                        <img src={skillsImg} alt="Loading..." />
                    </div>
                    <div className='skills-right-side'>
                        <div className='skills-right-side-content'>
                            <h3>Language</h3>
                            <p>JavaScript, HTML, CSS, C#, Java</p>
                        </div>
                        <div className='skills-right-side-content'>
                            <h3>Frameworks</h3>
                            <p>React</p>
                        </div>
                        <div className='skills-right-side-content'>
                            <h3>Databases</h3>
                            <p>MongoDB</p>
                        </div>
                        <div className='skills-right-side-content'>
                            <h3>Tools & Others</h3>
                            <p>Git, Wordpress, Figma</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;