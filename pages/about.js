import Navbar from '../components/navbar';
import {authInitialProps} from '../lib/auth';

function About(props) {
    return (
        <>
        <Navbar {...props}/>
        <div>About</div>
        </>
    )
  }
  
  About.getInitialProps = authInitialProps();

  export default About;