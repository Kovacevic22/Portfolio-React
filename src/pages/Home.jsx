import Header from '../components/Header';
import First from '../components/First';
import Quote from '../components/Quote';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Aboutme from '../components/Aboutme';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
function Home() {
  return (
    <div className='home-container'>
        <Header/>
        <First/>
        <Quote/>
        <Projects/>
        <Skills/>
        <Aboutme/>
        <Contacts/>
        <Footer/>
    </div>
  );
}
export default Home;