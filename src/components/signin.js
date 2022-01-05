import '../assets/css/signin.css'
import {Input, Form, FormGroup, Button, Alert} from 'reactstrap';
import Wave from "react-wavify";
import Logo from "./logo";
import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const Signin = () => {
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(authenticated)
            navigate('/dashboard');

        const data = {email: email, password: password};

        await axios.post('http://localhost:3005/auth/signin', data)
            .then(response => {
                    if(response.status === 201){
                        localStorage.setItem('token', JSON.stringify(response.data.token));
                        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
                        setAuthenticated(true);
                        navigate('/dashboard');
                        setFailedLogin(false);
                    }
                setFailedLogin(false);
                }
            ).catch(e => {
                setAuthenticated(false);
                setFailedLogin(true);
            });
    }

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [failedLogin, setFailedLogin] = useState(false);

    return (
        <>
            <Logo/>
            <Form className="login-form" onSubmit={handleSubmit}>
                <h3 className="text-center p-2 tittle-message">Welcome</h3>
                <FormGroup>
                    <Input
                        type="email"
                        placeholder="E-mail"
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </FormGroup>
                <div className="row">
                    <Alert color="danger" isOpen={failedLogin}>
                        Username or password is not correct, please try again !
                    </Alert>
                </div>
                <Button className="btn-dark w-100">Sign In</Button>
                <div className="text-center pt-3"> Do not you have an account?</div>
                <div className="text-center">
                    <a href="/signup">Sign Up</a>
                    <span className="p-2"> | </span>
                    <a href="/forgotpassword">Forgot Password</a>
                </div>
            </Form>
            <Wave mask="url(#mask)" fill="#1a2848" id="wave-bottom">
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(190)">
                        <stop offset="0" stopColor="white"/>
                        <stop offset="1" stopColor="black"/>
                    </linearGradient>
                    <mask id="mask">
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)"/>
                    </mask>
                </defs>
            </Wave>
        </>
    )
}