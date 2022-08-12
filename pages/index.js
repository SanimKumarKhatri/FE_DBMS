import Link from 'next/link'
import {Button, Spacer, Text } from '@nextui-org/react'
import {Home, Plus, User} from 'react-iconly';
import Indexstyles from '../styles/Index.module.css'

function HomePage(){
    return(
        <div class="flex-container">
            <div class = "group">
                <div className={Indexstyles.image}></div>
                <hr className={Indexstyles.line} />   
                <div className={Indexstyles.title}>
                    <head><title> ecole</title></head>
                    <h1> Welcome to ecole </h1>
                </div>
            </div>
            <div>
                    <Link href='/login' passHref>
                    <Button icon={<User set='bold'/>} bordered ghost size="lg" color="primary">Login</Button>
                    </Link>
                <Spacer y={1}/>
                    <Link href='/register' passHref>
                    <Button icon={<Plus set='bold'/>} bordered ghost size="lg" color="primary">Register</Button>
                    </Link>
                <Spacer y={1}/>
            </div>
            <div className={Indexstyles.description}> <p> A DBMS project named ecole which is an online education and collaborative platform for school, university or any educational
            institution.</p>
            <p> By: Krishbin Poudel, Sanim Kumar Chhetri, Kailash Pantha, Aditya Raj Pandey</p></div>
            
        </div>
    )
}

export default HomePage;