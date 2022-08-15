import Navbar from '../components/navbar'
import Homestyles from '../styles/Home.module.css'
import { authInitialProps} from '../lib/auth';

function  home(props) {
    return (
        <div className={Homestyles.container}>
            <Navbar {...props}/>
            <h1> Welcome {props.auth? props.auth.name : 'Guest'} </h1>
        </div>
    )
  }
  
  home.getInitialProps = authInitialProps();

  export default home;