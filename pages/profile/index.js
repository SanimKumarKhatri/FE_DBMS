
 import Navbar from '../../components/navbar'
 import Homestyles from '../../styles/Home.module.css'
 import React from 'react';
 import { getUserProfile, authInitialProps} from '../../lib/auth';
 import Link from 'next/link';
 
 export default class Profile extends React.Component{

    state ={
        user: null
    };

    componentDidMount(){
        getUserProfile().then((data) => {
            console.log(data);
            this.setState({user: data})
            });
    }

    render(){
    return (
        <>
        <div className={Homestyles.container}>
            <Navbar {...this.props}/>
            <div>
            <pre>{JSON.stringify(this.state.user)}</pre>
            {/* {this.state.user.map((data,key)=>(
                <div key={key}>
                    <Link href={`/profile/${data.name}`}>
                        {data.id + '. ' + data.name}
                    </Link>
                </div>
            ))} */}
            </div>
        </div>
        </>
    )
    }
  }

  Profile.getInitialProps = authInitialProps(true);