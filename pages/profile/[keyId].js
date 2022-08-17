import Navbar from '../../components/navbar'
 import Homestyles from '../../styles/Home.module.css'
 import React from 'react';
 import { getUsersubject, authInitialProps} from '../../lib/auth';
 import {useRouter, withRouter} from 'next/router';

class subjectDetails extends React.Component{
    state ={
        subdet: [{
            marks:20,
            teacher: "sanim"
        }]
    };

    //to mount the data after fetching from api
    // componentDidMount(){
        
    //     //getUserSubject().then(subdet => this.setState({subdet}));

    //     //temporary without api(simulating data from api)  
    //     fetch('/data.json').then((res)=>res.json()).then((data)=>{
    //         console.log(data)
    //         this.setState({user: data});
    //     })     
    // }

    render(){
        const keyId = this.props.router.query.keyId;
    return(
        <>
        <div className={Homestyles.container}>
            <Navbar {...this.props}/>
            <div>
                <h2>Details about subject {keyId}</h2>
                <p>{JSON.stringify(this.state.subdet)}</p>
            </div>
        </div>
        </>
    )
    }
}

subjectDetails.getInitialProps = authInitialProps(true);

export default withRouter(subjectDetails);