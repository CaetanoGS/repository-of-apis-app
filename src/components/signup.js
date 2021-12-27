import React from "react";
import '../assets/css/signup.css'
import {Label, Input, Form, FormGroup, Button} from 'reactstrap';
import Wave from "react-wavify";
import Logo from "./logo";
import PasswordStrengthMeter from "./passwordStrengthMeter";
import {useState} from "react";

export const Signup = () => {

    const [password, setPassword] = useState('');
    console.log(password);
    return (
        <>
            <div className="container-signup">
                <Logo/>
                <Form className="signup-form">
                    <h3 className="text-center p-2 registration-message">Registration</h3>
                    <div className="row">
                        <div className="col-sm">
                            <FormGroup>
                                <Input placeholder="Full name" required/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="password"
                                       placeholder="Password"
                                       required
                                       onChange={e => setPassword(e.target.value)}/>
                                <PasswordStrengthMeter password={password}/>
                            </FormGroup>
                        </div>
                        <div className="col-sm">
                            <FormGroup>
                                <Input type="email" placeholder="E-mail" required/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" placeholder="Password confirmation" required/>
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <FormGroup>
                            <Input type="checkbox" id="terms_conditions" required/>
                            <Label for="terms_conditions" className="terms-check">I agree with all terms and conditions</Label>
                        </FormGroup>
                    </div>
                    <div className="row">
                        <Button className="signup-btn btn-dark w-50">Sign up</Button>
                        <div className="text-center pt-3"> Do you already have an account?</div>
                        <div className="text-center">
                            <a href="/">Sign In</a>
                            <span className="p-2"> | </span>
                            <a href="/forgotpassword">Forgot Password</a>
                        </div>
                    </div>
                </Form>
            </div>
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