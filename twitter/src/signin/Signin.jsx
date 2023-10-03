import React, { useState } from 'react'
import './Signin.css'
import SignInlogo from '../images/X-imagelogo.png';
import SignInGoogleLogo from '../images/GoogleLogo.png';
import SignInAppleLogo from '../images/AppleLogo.png';
import TextField from '@mui/material/TextField';
import { color } from '@mui/system';
import SignUp from '../signup/SignUp';
import { SignInService } from '../services/UserServices';
import { useNavigate } from 'react-router';

function Signin({setToggle}) {
    const [signintoggle,setsigninToggle]=useState(false);
    const navigate = useNavigate();
    const [signin, setsignin] = useState({
        email: "",
        password: ""
    });
    const handleemail = (event) => {
        setsignin({ ...signin, email: event.target.value })
    }
    const handlepassword = (event) => {
        setsignin({ ...signin, password: event.target.value })
    }
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
    const [errorObj, seterrorObj] = useState({
        emailError: false,
        emailHelper: "",
        passwordError: false,
        passwordHelper: "",
    });
    
    const handlesignup=()=>{
        setsigninToggle(true)
    }
    const handlexbtn=()=>{
        setToggle(false)
    }
    const handlenext=async()=>{
        let emailTest = emailRegex.test(signin.email);
        let passwordTest = passwordRegex.test(signin.password);

        if (emailTest === false) {
            seterrorObj((prev) => ({
                ...prev,
                emailError: true,
                emailHelper: "enter correct email"
            }))
        } else {
            seterrorObj((prev) => ({
                ...prev,
                emailError: false,
                emailHelper: ""
            }))
        }
        if (passwordTest === false) {
            seterrorObj((prev) => ({
                ...prev,
                passwordError: true,
                passwordHelper: "enter correct password"
            }))
        } else {
            seterrorObj((prev) => ({
                ...prev,
                passwordError: false,
                passwordHelper: ""
            }))
        }
        console.log(signin);
        if (emailTest === true && passwordTest === true) {
            let response = await SignInService(signin);
            console.log(response);
            localStorage.setItem("Token",response.data.data)
            navigate('/dashboard')

        }
    }
    return (
        <div className='outerx'>
            <div className='signinxmain'>
                <div className='xsigninfirst'>
                    <div className='signinclosebtn'><button className='signincloseX' onClick={handlexbtn}>x</button></div>
                    <div className='signinlogo'><img src={SignInlogo} width="30px" alt="logo" />y</div>
                </div>
                <div className='xsigninscnd'>
                    <div className='xsigninheading'>Sign in to x</div>
                    <div><button className='xsigninbtn'><img src={SignInGoogleLogo} width="15px" alt="logo" />  Sign Up With Google</button></div>
                    <div><button className='xsigninbtn'><img src={SignInAppleLogo} width="15px" alt="logo" />  Sign Up With Apple</button></div>
                    <div className='xor xors' ><hr className='xtwitterhr'></hr>or<hr className='xtwitterhr'></hr></div>
                    <div className="twtfeildin"><TextField className='xfeilds' label="Email"  variant="outlined" InputLabelProps={{style:{color:'grey'}}} InputProps={{style:{color:'white'}}} onChange={handleemail} error={errorObj.emailError} helperText={errorObj.emailHelper} /></div>
                    <div className="twtfeildin"><TextField className='xfeilds' label="Password" variant="outlined" type="password" InputLabelProps={{style:{color:'grey'}}} InputProps={{style:{color:'white'}}} onChange={handlepassword} error={errorObj.passwordError} helperText={errorObj.passwordHelper} /></div>
                    <div><button className='xnextbtn'onClick={handlenext}>Next</button></div>
                    <div><button className='xforgotbtn'>Forgot password?</button></div>
                </div>
                <div className='xsignincontent'>
                    Don't have an account?<a className='ancherxsignin' href='' onClick={handlesignup}>Sign up</a>
                </div>
                <div>
                    {signintoggle?<SignUp/>:""}
                </div>
            </div>
        </div>
    )
}

export default Signin