import Link from 'next/link'    

const Navbar=()=>{
    return(
        <>
        <ul class="nav">
            <li class="nav"><Link href='/home   '><a>Home</a></Link></li>
            <li class="nav"><Link href='/about'><a>About Us</a></Link></li>
            <li class="nav"><Link href ='/login'><a>Login</a></Link></li>
        </ul>
        </>
    )
}

export default Navbar;