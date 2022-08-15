import axios from 'axios';

axios.defaults.withCredentials = true;

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

export const getClientSideToken = () =>{
    if(typeof window !== 'undefined'){
        const user = window[WINDOW_USER_SCRIPT_VARIABLE] || {};
        return {user};
    }
    return {user : {}}
}

export const getUserScript = user => {
    return `${WINDOW_USER_SCRIPT_VARIABLE} = ${JSON.stringify(user)}`;
};

export const authInitialProps = () =>({req})=>{
    const auth = req ? getServerSideToken(req) : getClientSideToken();
    console.log("auth")
    console.log(auth);
    return { auth };
}

export const loginUser = async (username, password) =>{
    const { data } = await axios.post('/api/login',{ username, password });
    
    if(typeof window !== 'undefined'){
        window[WINDOW_USER_SCRIPT_VARIABLE] = data || {};
    }
}

export const getUserProfile = async () =>{
    const { data } = await axios.get('/api/profile');
    return data;
}