import React, { useState } from "react";
import {Redirect } from "react-router-dom";
import axios from 'axios';
import Input from '../components/input'
import Button from '../components/button'
import { useAuth } from "../context/auth";

import './login.scss'
function Login() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
function handleSubmit(event) { 
    axios
    .post(
        "http://localhost:3000/users",
        {
            email: username,
            password: password
        }
      )
      .then(result => {
        if (result.status === 200 && result.data.length>0) {
            setAuthTokens(result.data);
            setLoggedIn(true);
        } else {
           setIsError(true);
        }
    }).catch(e => {
        setIsError(true);
        console.log(e);
    });
    
    event.preventDefault();
    }
    if (isLoggedIn) {
       return <Redirect to="/" />;
    }
return(
    <div className="login">
        <form onSubmit={handleSubmit}>
        <div className="login-card">
            <h3>Sign in to your account</h3>
                    <Input
                        name="email"
                        required
                        type="email"
                        value={username}
                        onChange={e => {
                            setUsername(e.target.value);
                        }}
                        placeholder="E-mail"
                    />
                    
                    <Input
                        name="password"
                        required
                        type="password"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                        placeholder="Password"
                    />
                    {
                        isError && <span>Incorrect email or password.</span>
                    }
                    <Button  type="submit">Sign In</Button>
        </div>
        </form>
    </div>
)}
export default Login;