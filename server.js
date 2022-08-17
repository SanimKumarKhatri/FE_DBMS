const next = require('next');
const express = require('express');
const axios = require('axios');
const  cookieParser = require('cookie-parser');
const { signedCookies } = require('cookie-parser');

const dev = process.env.NODE_ENV !=='production';
const port = process.env.PORT || 3000;
const app = next({dev});
const handle = app.getRequestHandler();

const AUTH_USER_TYPE = "authenticated";
const COOKIE_SECRECT = 'adsdsa35435';
const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: !dev,
    signed: true
};

async function authenticate(username, password){
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data.find(user=>{
        if(user.username === username && user.website === password){
            return user;
        }
    });
}

app.prepare().then(()=>{
    const server= express();

    server.use(express.json());

    server.use(cookieParser(COOKIE_SECRECT));

    server.post('/api/login', async (req,res)=>{
        const {username,password} = req.body;
        const user = await authenticate(username, password);
        if(!user){
            console.log('No such user');
            return res.status(403).send("Invalid username or password");           
        }
        const userData = {
            name: user.name,
            email: user.email,
            phone: user.phone,
            type: AUTH_USER_TYPE             
        }
        console.log(userData);  
        res.cookie('token', userData, COOKIE_OPTIONS);
        res.json(userData);
    })

    server.post('/api/logout',(req,res)=>{
        res.clearCookie('token', COOKIE_OPTIONS);
        res.sendStatus(204);
    })

    server.get('/api/profile', async (req,res)=>{
        const {signedCookies = {} } = req;
        const {token}=signedCookies;
        if( token && token.email){
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
            const userProfile = data.find(user => user.email === token.email);
            console.log(userProfile);
            return res.json([userProfile]);
        }
        res.sendStatus(404);
    })

    server.get('*', (req,res)=>{
        return handle(req,res);
    })

    server.listen(port, err=>{
        if(err) throw err;
        console.log( `listening on PORT ${port}`);
    })
})