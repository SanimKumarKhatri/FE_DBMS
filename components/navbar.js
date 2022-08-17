import Link from 'next/link'  
import {Button, Spacer, Text } from '@nextui-org/react'
import {Home, Plus, User} from 'react-iconly';
import React from 'react';
import { logoutUSer } from '../lib/auth';

const Navbar=({auth})=>{
    const user = auth || {};
    return(
        <div className="Nav-container">
            <div className="image"></div>
            <Spacer y={1}/>
            <div className="user"><Button icon={<User set='bold'/>} light color="currentcolor" auto>{user.name || "Guest"}</Button></div>
            <ul className="nav">
                {user.name ? (
                    <React.Fragment>
                <li className="nav"><Link href='/home   '><a>Home</a></Link></li>
                <li className="nav"><Link href='/about'><a>About Us</a></Link></li>
                <li className="nav"><Button onClick={logoutUSer} light color='secondary' ghost auto>Logout</Button></li>
                </React.Fragment>):(
                <li className="nav"><Link href ='/login'><a>Login</a></Link></li>)
                }   
            </ul>
        </div>
    )
}

export default Navbar;