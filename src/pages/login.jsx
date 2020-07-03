import React, { useState } from "react";
import {Redirect } from "react-router-dom";
import axios from 'axios';
import Input from '../components/input'
import Button from '../components/button'
import BaseUrl from '../components/custom'
import { useAuth } from "../context/auth";

import './login.scss'
function Login() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

function handleSubmit(event) {
    event.preventDefault();
    axios.post(BaseUrl,{username,password}).then(result => {
        if (result.status === 200) {
            setAuthTokens(result.data);
            setLoggedIn(true);
        } else {
           setIsError(true);
        }
    }).catch(e => {
        setIsError(true);
        console.log("hata");
    });
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
                        required
                        type="username"
                        value={username}
                        onChange={e => {
                            setUsername(e.target.value);
                        }}
                        placeholder="email"
                    />
                    
                    <Input
                        required
                        type="password"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                        placeholder="password"
                    />
                    <Button  type="submit">Sign In</Button>
        </div>
        </form>
    </div>
)}
export default Login;