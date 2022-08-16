import axios from 'axios';
import Router from 'next/router';

axios.defaults.withCredentials = true;


//to get token from server when loading or reloading
export const getServerSideToken = req =>{
    if(req){
        if(req.signedCookies){
            //console.log(req.signedCookies.token);
            return req.signedCookies.token;
        }
    }
    return {user: {}}
};

const WINDOW_USER_SCRIPT_VARIABLE = '__USER__';

//to get token from the client or browser
export const getClientSideToken = () =>{
    if(typeof window !== 'undefined'){
        const user = window[WINDOW_USER_SCRIPT_VARIABLE] || {};
        return user;
    }
    return {user : {}}
}

export const getUserScript = user => {
    return `${WINDOW_USER_SCRIPT_VARIABLE} = ${JSON.stringify(user)};`;
};

export const authInitialProps = isProtectedRoute =>({req,res})=>{
    const auth = req ? getServerSideToken(req) : getClientSideToken();
    const  currentpath = req ? req.url : window.location.pathname;
    const user = auth;
    const isAnonymous= !user || user.type !== "authenticated";
    if(isProtectedRoute && isAnonymous && currentpath !== '/login'){
        return redirectUser(res, '/login');
    }
    console.log(auth);
    return { auth };
}

//toredirect protected paths
const redirectUser=(res, path)=>{
    if(res){
        res.redirect(302,path);
        res.finished = true;
        return {};
    }
    Router.replace('/login');
    return {};
}

export const loginUser = async (username, password) =>{
    const { data } = await axios.post('/api/login',{ username, password });
    
    if(typeof window !== 'undefined'){
        window[WINDOW_USER_SCRIPT_VARIABLE] = data || {};
    }
}

export const logoutUSer = async() =>{
    if(typeof window !== 'undefined'){
        window[WINDOW_USER_SCRIPT_VARIABLE] = {};
    }
    await axios.post('/api/logout');
    Router.push('/');
}

export const getUserProfile = async () =>{
    const { data } = await axios.get('/api/profile');
    return data;
}