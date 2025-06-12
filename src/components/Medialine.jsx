import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/medialine.scss';
function Medialine() {
  return (
    <div className='header-medialine'>
        <div className='line'></div>
        <div className="icons">
            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
    </div>
  );
}
export default Medialine;