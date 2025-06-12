import aboutmeImg from '../assets/aboutme.png';
import '../styles/aboutme.scss'
function Aboutme(){

    return(
        <div className="aboutme">
            <div className="aboutme-container">
                <div className="aboutme-leftside">
                    <div className="aboutme-header">
                        <h2><span>#</span>about-me</h2>
                    </div>
                    <div className="aboutme-content">
                        <p>Hello, I’m Vukasin kovacevic!</p>
                        <p>I’m a third-year student at the Faculty of Organizational Sciences, University of Belgrade, specializing in E-Business Technologies within the Information Systems and Technologies program. I’m passionate about web development and currently focused on improving my frontend skills, with plans to expand into backend development.</p>
                        <p>Building modern and responsive web applications is what excites me the most. I’m eager to learn, collaborate in team environments, and grow through internships and real-world projects. My goal is to turn ideas into functional and user-friendly digital experiences.</p>
                        <a href="#">Read more</a>
                    </div>
                </div>
                <div className="aboutme-rightside">
                    <div className="aboutme-img">
                        <img src={aboutmeImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Aboutme;