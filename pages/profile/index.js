
 import Navbar from '../../components/navbar'
 import Homestyles from '../../styles/Home.module.css'
 import React from 'react';
 import { getUsersubject, getUserProfile, authInitialProps} from '../../lib/auth';
 import Link from 'next/link';
 
 export default class Profile extends React.Component{

    state ={
        user: [], 
        subject: []
    };

    componentDidMount(){
        getUserProfile().then(user => this.setState({user}));
        if(this.props.auth.role === 'student'){
            getUsersubject().then((data)=>{
            this.setState({subject: data})
        });}
        //for temporary purpose
        // fetch('/data.json').then((res)=>res.json()).then((data)=>{
        //     console.log(data)
        //     this.setState({user: data});
        // })  
    }

    render(){
    return (
        <>
        <div className={Homestyles.container}>
            <Navbar {...this.props}/>
            <div>
            <h2>Welcome <strong>{this.props.auth.name}</strong></h2>
            <p>Role: {this.props.auth.role}</p>
            {this.state.subject.map((data,key)=>(
                <div class="sub-content">
                    <Link href={`/profile/${data.title}`}>
                        {data.id + '. ' + data.title}
                    </Link>
                </div>
            ))}
            </div>
        </div>
        </>
    )
    }
  }

  Profile.getInitialProps = authInitialProps(true);