import Navbar from '../components/navbar'
import Homestyles from '../styles/Home.module.css'

function  home() {
    return (
        <div className={Homestyles.container}>
            <Navbar />
            <h1> Welcome User </h1>
        </div>
    )
  }
  
  export default home;