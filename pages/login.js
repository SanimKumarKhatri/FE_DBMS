import { Input, Spacer, Button, Text, Link  } from "@nextui-org/react";
import {UserIcon} from '../components/Usericon';
import React from 'react';
import Footer from '../components/footer';
import { render } from "react-dom";
import {loginUser} from '../lib/auth';
import Router from "next/router";
import {Home} from 'react-iconly';


class login extends React.Component {
    state ={
        username: '',
        password:'',
        error: '',
        isloading: false,
        csrfToken: ''
    };

   componentDidMount(){
    React.useEffect(()=>{
        //fetching url
        fetch("http://localhost:8000/account/csrf/")
        .then((res)=>{
            let csrfToken = res.headers.get("X-CSRFToken",{
                credentials: "include",
            })
            this.state.csrfToken =csrfToken;
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
   }

    handleChange =  event =>{
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = event =>{
        const {username, password, error, isloading, csrfToken} =this.state;

        event.preventDefault();
        this.setState({error: ''});
        fetch("http://localhost:8000/account/login/",{
        method: "POST",
        headers:{
            "Content-Type" : "application/json",
            "X-CSRFToken": csrfToken,
        },
        credentials: "include",
        body: JSON.stringify({username: username, password: password}),
        }).then(response=>{
            if(!response.ok){
                throw new Error('Couldnt connect to server')
            }
        }).then((data)=>{
            console.log(data);
            Router.push('/profile')
        })
        .catch((err)=>{
            console.log(err);
            this.state.error="Username or password incorrect";
        })
        // loginUser(username,password).then(()=>{
        //     Router.push('/profile');
        // })
        // .catch(this.showError);
    };

    showError = err =>{
        console.error(err);
        const error = err.response && err.response.data || err.message;
        this.setState({error, isloading: false});
    }

    render(){
        const { email, password, error, isloading} = this.state
    return(
        <>
        <div class="login-container">
            <div className="Header"> 
            <Link href='/'>
            <Button icon={<Home fill="white" />} light color = "secondary" auto ghost>
            </Button>
            </Link>
            Welcome to ecole 
            
            </div>
            <div className="login"> LOGIN </div>
            <div className="center">
                <form onSubmit={this.handleSubmit}>
                    <Spacer y={1.6} />  
                    <div className="username">
                        <Input  
                        id="username" 
                        name="username"
                        labelPlaceholder="Username"
                        onChange={this.handleChange} 
                        bordered fullWidth="true"  color="default"/>
                    </div>
                    <div className="password">
                        <Spacer y={1.6} />  
                        <Input.Password  
                        id="password" 
                        name="password" 
                        labelPlaceholder="Password"
                        onChange={this.handleChange}  
                        bordered fullWidth color="default"/>
                    </div>
                    <div className="login_button">
                        <Spacer y={1.6} />
                        <Button disabled={isloading} type="submit" icon={<UserIcon fill='currentcolor'/>} 
                        bordered color='primary' ghost size='lg'>Sign in</Button>
                    </div>
                    {error && <div>
                        {error} 
                    </div>} 
                </form>
                
            </div>
            
        </div>
        <Footer />
        </>
    )
    }
}
export default login;   