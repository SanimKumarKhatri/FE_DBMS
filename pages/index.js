import Link from 'next/link'
import {Button, Spacer, Text } from '@nextui-org/react'
import {Plus, User} from 'react-iconly';

function HomePage(){
    return(
        <>
        <div class="welcome">
            <Text size={80} 
            css={{
                    textGradient: "45deg, $blue600 -20%, $green600 50%",
                }}> Welcome to Ecole</Text>
        </div>
        <div class="cluster">
                <Link href='/login' passHref>
                <Button icon={<User set='bold'/>} bordered ghost size="lg" color="success">Login</Button>
                </Link>
            <Spacer y={1.6}/>
                <Link href='/register' passHref>
                <Button icon={<Plus set='bold'/>} bordered ghost size="lg" color="success">Register</Button>
                </Link>
        </div>
        </>
    )
}

export default HomePage;