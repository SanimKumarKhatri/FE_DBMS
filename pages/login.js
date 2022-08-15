import { Input, Spacer, Button, Text  } from "@nextui-org/react";
import {UserIcon} from '../components/Usericon';
import React from 'react';
import Footer from '../components/footer';
import { render } from "react-dom";
import {loginUser} from '../lib/auth';
import Router from "next/router";

class login extends React.Component{
    
    state ={
        username: '',
        password:'',
        error: '',
        isloading: false
    };

    handleChange =  event =>{
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = event =>{
        const {username, password } =this.state;

        event.preventDefault();
        this.setState({error: ''});
        loginUser(username,password).then(()=>{
            Router.push('/profile');
        })
        .catch(this.showError);
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
        <div className="center">
            <Text size={40} 
            css={{
                    textGradient: "45deg, $blue600 -20%, $green600 50%",
                }}>&nbsp;&nbsp;Welcome to Ecole</Text>
            <form>
                <Spacer y={1.6} />  
                <div className="username">
                    <Input  
                    id="username"
                    name="username" 
                    labelPlaceholder="Username" 
                    onChange={this.handleChange}
                    bordered fullWidth="true"  
                    color="default"/>
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
                    <Button disabled={isloading}
                    type="submit" 
                    icon={<UserIcon fill='currentcolor'/>} 
                    color='success' ghost size='lg'>Sign in</Button>
                </div>
                {error && <div>
                    {error} 
                </div>} 
            </form>
        </div>
        <Footer />
        </>
    )
    }
}
export default login;   