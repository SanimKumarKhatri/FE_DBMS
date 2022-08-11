import { Input, Spacer, Button, Text  } from "@nextui-org/react";
import {UserIcon} from '../components/Usericon';
import React from 'react';

var clickcount=0;

function login(){
    let username_input= React.createRef();
    let password_input=React.createRef();
    function signedClick() {
        clickcount++;
        var x = username_input.current.value;
        var y= password_input.current.value;
        console.log("Signed in clicked!", clickcount);
        console.log("Username entered:",x);
        console.log("Password entered:",y);      
    }
    return(
        <>
        <div class="center">
            <Text size={40} 
            css={{
                    textGradient: "45deg, $blue600 -20%, $green600 50%",
                }}>&nbsp;&nbsp;Welcome to Ecole</Text>
            <form>
                <Spacer y={1.6} />  
                <div class="username">
                    <Input ref={username_input} id="user_name" labelPlaceholder="Username" bordered fullWidth="true"  color="default"/>
                </div>
                <div class="password">
                    <Spacer y={1.6} />  
                    <Input.Password ref={password_input} id="user_password" name="user_password" labelPlaceholder="Password" bordered fullWidth color="default"/>
                </div>
                <div class="login_button">
                    <Spacer y={1.6} />
                    <Button icon={<UserIcon fill='currentcolor'/>} color='success' ghost size='lg' onClick={signedClick}>Sign in</Button>
                </div>
            </form>
        </div>
        </>
    )
}
export default login;   