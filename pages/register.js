import {Button, Input, Spacer, Text, Grid, Row, Dropdown } from '@nextui-org/react'
import {Plus} from 'react-iconly';
import React from 'react';
import {Home} from 'react-iconly';
import Link from 'next/link' 

function Register(){

    const [count,setCount]=React.useState(0);

    const [selected, setSelected] = React.useState(new Set(["Account Type"]));

    const selectedValue = React.useMemo(
        () => Array.from(selected),
        [selected]
    );

    let pass1= React.createRef();
    let pass2= React.createRef();
    
    function handler() {
        var s1= document.getElementById("password1").value;
        var s2=document.getElementById("password2").value;
        console.log("Checking validity of password");
        console.log(s1);
        console.log(s2);
        console.log(selectedValue);
        /*console.log(pass1.current.value);
        console.log(pass2.current.value);*/
        if (pass1.current.value == pass2.current.value) {
            console.log("Password matched!");
        }
        else {
            console.log("Password doesnt match!!");
        }
    }
    const signedClick=()=>{
        setCount(count+1);
        console.log("Register Clicked",count);
    }
    return (
        <>
        <div className="Header"> 
            <Link href='/index'>
            <Button icon={<Home fill="white" />} light color = "secondary" auto ghost>
            </Button>
            </Link>
            Welcome to ecole 
            </div>
        <div className='register_center'>
            <Text size={40} css={{
                color:'#02C39A', textAlign:"center",
            }}>&nbsp;Register</Text>
            <Spacer y={1}/>
            <form>
            <Grid>
            <Row id="name">
            <Input id="first_name" name="first_name" labelPlaceholder="First Name" bordered width='200px' required color="default"/>
            <Spacer x={1}/>
            <Input id="middle_name" name="middle_name" labelPlaceholder="Middle Name" bordered width='200px' color="default"/>
            <Spacer x={1}/>
            <Input id="last_name" name="last_name" labelPlaceholder="Last Name" bordered width='200px' required color="default"/>
            <Spacer x={1}/>
            </Row>
            <Spacer x={1}/>
            <Input id="Username" name="Username" labelPlaceholder="Username" bordered width='250px' required color="default"/>
            </Grid>
            <Spacer y={1.35}/>
            <Input.Password ref={pass1} id="password1" name="password1" labelPlaceholder="Password" bordered width='250px' color="default"/>
            <Spacer y={1.35}/>
            <Input.Password ref={pass2} id="password2" name="password2" labelPlaceholder="Re-enter Password" bordered width='250px' color="default" onChange={handler}/>
            <Spacer y={1.35}/>
            <Dropdown>
                <Dropdown.Button flat color="default" css={{ tt: "capitalize" }}>
                {selectedValue}
                </Dropdown.Button>
                <Dropdown.Menu
                    aria-label="Single selection actions"
                    color="default"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selected}
                    onSelectionChange={setSelected}
                >
                <Dropdown.Item key="Administration">Administration</Dropdown.Item>
                <Dropdown.Item key="Student">Student</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Spacer y={1.6}/>
            <Button icon={<Plus set='bulk'/>} ghost size='lg' onClick={signedClick}>Register</Button>
            </form>
        </div>
        </>
)
}

export default Register;