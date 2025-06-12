import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/contacts.scss';

function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts-container">
        <div className="contacts-leftside">
          <div className="contacts-header">
            <h2><span>#</span>contacts</h2>
          </div>
          <div className='contacts-content'>
            <p>I’m interested in freelance opportunities. However, if you have other requests or questions, don’t hesitate to contact me.</p>
          </div>
        </div>
        <div className="contacts-rightside">
          <div className='contact-message'>
            <h3>Message me here</h3>
            <div className="contact-item">
              <FontAwesomeIcon icon={faDiscord} />
              <span>kovac22_</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>vukasinkue22@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
