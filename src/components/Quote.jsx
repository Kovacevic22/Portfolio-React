import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/quote.scss';

function Quote(){
    return(
        <div className='quote-container'>
            <div className='quote-box'>
                    <span className='quote'><FontAwesomeIcon icon={faQuoteLeft} /></span>
                    <p>"The only way to do great work is to love what you do."</p>
                <div className='attribution'>
                    <span className='quote'><FontAwesomeIcon icon={faQuoteLeft} /></span>
                    <span>- Steve Jobs</span>
                </div>
            </div>
        </div>
    );
}
export default Quote;