import '../styles/first.scss';
import firstImg from '../assets/first-img.png';

function First(){
    return(
        <div className='first-container'>
            <div className='first-text'>
                <h1>Kovac is a <span>web developer</span></h1>
                <p>He crafts digital experiences & builds modern <br/> web solutions</p>
                <button className='contact-btn'>Contact me!!</button>
            </div>
            <div className='first-image'>
                <img src={firstImg} alt="" />
                <div className='fi-text'>
                    <span className='square'></span>
                    <p>Currently working on <span>Portfolio</span></p>
                </div>
            </div>
        </div>
    );
}
export default First;