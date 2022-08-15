import Link from 'next/link'  
import {Button, Spacer, Text } from '@nextui-org/react'
import {Home, Plus, User} from 'react-iconly';
import React from 'react';

const Navbar=({auth})=>{
    const user = auth || {};
    return(
        <div className="Nav-container">
            <div className="image"></div>
            <Spacer y={1}/>
            <div className="user"><Button icon={<User set='bold'/>} flat color="warning" 
            auto disabled>{user.name || "Guest"}</Button></div>
            <hr className="line" /> 
            <ul className="nav">
                {user.name ? (
                    <React.Fragment>
                <li className="nav"><Link href='/home   '><a>Home</a></Link></li>
                <li className="nav"><Link href='/about'><a>About Us</a></Link></li>
                <li className='nav'><button>Logout</button></li>
                </React.Fragment>):(
                <li className="nav"><Link href ='/login'><a>Login</a></Link></li>)
                }   
            </ul>
        </div>
    )
}

export default Navbar;