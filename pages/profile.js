import Navbar from '../components/navbar';
import React from 'react';
import { getUserProfile, authInitialProps  } from '../lib/auth';

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
        <Navbar />
        <pre>{JSON.stringify(this.state.user,null,2)}</pre>
        </>
    )
    }
  }
