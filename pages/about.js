import Navbar from '../components/navbar';
import {authInitialProps} from '../lib/auth';

function About(props) {
    About.getInitialProps = authInitialProps();
    return (
        <>
        <Navbar {...props}/>
        <div>About</div>
        </>
    )
  }
  


  export default About