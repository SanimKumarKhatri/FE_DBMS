
 import Navbar from '../components/navbar'
 import Homestyles from '../styles/Home.module.css'
 import React from 'react';
 import { getUserProfile, authInitialProps} from '../lib/auth';
 
 export default class Profile extends React.Component{

    state ={
        user: null
    };

    componentDidMount(){
        getUserProfile().then(user => this.setState({user}));
    }

    render(){
    return (
        <>
        <div className={Homestyles.container}>
            <Navbar {...this.props}/>
            <pre>{JSON.stringify(this.state.user,null,2)}</pre>
        </div>
        </>
    )
    }
  }

  Profile.getInitialProps = authInitialProps(true);