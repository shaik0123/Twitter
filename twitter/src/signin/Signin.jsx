import React, { useState } from 'react'
import './Signin.css'
import SignInlogo from '../images/X-imagelogo.png';
import SignInGoogleLogo from '../images/GoogleLogo.png';
import SignInAppleLogo from '../images/AppleLogo.png';
import TextField from '@mui/material/TextField';
import { color } from '@mui/system';
import SignUp from '../signup/SignUp';

function Signin({setToggle}) {
    const [signintoggle,setsigninToggle]=useState(false);
    const handlesignup=()=>{
        setsigninToggle(true)
    }
    const handlexbtn=()=>{
        setToggle(false)
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
                    <div><TextField className='xfeilds' label="Phone" variant="outlined" InputLabelProps={{style:{color:'grey'}}} InputProps={{style:{color:'white'}}}/></div>
                    <div><TextField className='xfeilds' label="Password" variant="outlined" InputLabelProps={{style:{color:'grey'}}} InputProps={{style:{color:'white'}}}/></div>
                    <div><button className='xnextbtn'>Next</button></div>
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