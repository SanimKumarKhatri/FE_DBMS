import Link from 'next/link'  
import {Button, Spacer, Text } from '@nextui-org/react'
import {Home, Plus, User} from 'react-iconly';

const Navbar=()=>{
    return(
        <div class="Nav-container">
            <div class="image"></div>
            <Spacer y={1}/>
            <div class="user"><Button icon={<User set='bold'/>} flat color="warning" auto disabled>Username</Button></div>
            <hr class="line" /> 
            <ul class="nav">
                <li class="nav"><Link href='/home   '><a>Home</a></Link></li>
                <li class="nav"><Link href='/about'><a>About Us</a></Link></li>
                <li class="nav"><Link href ='/login'><a>Login</a></Link></li>
            </ul>
        </div>
    )
}

export default Navbar;