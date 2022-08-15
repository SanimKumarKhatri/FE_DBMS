
 import Navbar from '../components/navbar'
 import Homestyles from '../styles/Home.module.css'
 import { getUserProfile, authInitialProps} from '../lib/auth';
 
function  Profile(props) {
    return (
        <div className={Homestyles.container}>
            <Navbar {...props}/>
            <h1> Welcome {props.auth? props.auth.name : 'Guest'} </h1>
        </div>
    )
  }
  
  Profile.getInitialProps = authInitialProps();

  export default Profile;
   /*function Profile {

    state ={
        user: null
    };
    getUserProfile()
    return (
        <>
        <Navbar />
        <pre>{JSON.stringify(this.state.user,null,2)}</pre>
        </>
    )
  }*/
