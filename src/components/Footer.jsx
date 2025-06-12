import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/footer.scss';
function Footer(){
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="footer-leftside">
                    <div className="footer-logo">
                        <a href="#"><h2><span>&lt;/&gt;</span>Kovac</h2></a>
                        <p>vukasinkue22@gmail.com</p>
                    </div>
                    <div className="footer-text">
                        <p>Web designer and front-end developer</p>
                    </div>
                </div>
                <div className="footer-rightside">
                    <div className="footer-links">
                        <h3>Media</h3>
                        <div className="footer-media">
                            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2024 Vukasin Kovacevic</p>
            </div>
        </div>
    )
}
export default Footer;