import React from "react";
import '../assets/css/signin.css'
import {Input, Form, FormGroup, Button} from 'reactstrap';
import Wave from "react-wavify";
import Logo from "./logo";

export const Signin = () => {
    return (
        <>
            <Logo/>
            <Form className="login-form">
                <h3 className="text-center p-2 tittle-message">Welcome</h3>
                <FormGroup>
                    <Input type="email" placeholder="E-mail"/>
                </FormGroup>
                <FormGroup>
                    <Input type="password" placeholder="Password"/>
                </FormGroup>
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