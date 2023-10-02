import React, { useState } from 'react'
import './SignUp.css'
import TextField from '@mui/material/TextField';
import { SignUpService } from '../services/UserServices';


function SignUp({ setcreateToggle }) {
    const [signup, setsignup] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    });

    const handlename = (event) => {
        setsignup({ ...signup, name: event.target.value })
    }
    const handleemail = (event) => {
        setsignup({ ...signup, email: event.target.value })
    }
    const handlepassword = (event) => {
        setsignup({ ...signup, password: event.target.value })
    }
    const handleconfirmpassword = (event) => {
        setsignup({ ...signup, confirmpassword: event.target.value })
    }

    const nameRegex = /^[A-Za-z( )]{2,30}$/;
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
    const [errorObj, seterrorObj] = useState({
        nameError: false,
        nameHelper: "",
        emailError: false,
        emailHelper: "",
        passwordError: false,
        passwordHelper: "",
        conpasswordError: false,
        conpasswordHelper: "",
    });


    const handlexsignup = () => {
        setcreateToggle(false)
    }
    const handlenext = async () => {
        
        let nameTest = nameRegex.test(signup.name);
        let emailTest = emailRegex.test(signup.email);
        let passwordTest = passwordRegex.test(signup.password);
        let confirmpasswordTest = signup.password === signup.confirmpassword;
        

        if (nameTest === false) {
            seterrorObj((prev) => ({
                ...prev,
                nameError: true,
                nameHelper: "enter correct name"
            }))
        } else {
            seterrorObj((prev) => ({
                ...prev,
                nameError: false,
                nameHelper: ""
            }))
        }
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
        if (confirmpasswordTest === false) {
            seterrorObj((prev) => ({
                ...prev,
                conpasswordError: true,
                conpasswordHelper: "enter correct password"
            }))
        } else {
            seterrorObj((prev) => ({
                ...prev,
                conpasswordError: false,
                conpasswordHelper: ""
            }))
        }
        console.log(signup);
        if (nameTest === true && emailTest === true && passwordTest === true && confirmpasswordTest === true) {
            let response = await SignUpService(signup);
            console.log(response);

        }
        
    }
    return (
        <div className='signupouter'>
            <div className='signuptwtmain'><div className='closebtn' onClick={handlexsignup}><button className='closeX'>x</button></div>
                <div className='signupheading'>
                    Create your account
                </div>
                <div className='twtfeilds'>
                    <div className='twtfeild'><TextField className='feilds' label="Name" variant="outlined" InputLabelProps={{ style: { color: 'grey' } }} InputProps={{ style: { color: 'white' } }} onChange={handlename} error={errorObj.nameError} helperText={errorObj.nameHelper} /></div>
                    <div className='twtfeild'><TextField className='feilds' label="Email" variant="outlined" InputLabelProps={{ style: { color: 'grey' } }} InputProps={{ style: { color: 'white' } }} onChange={handleemail} error={errorObj.emailError} helperText={errorObj.emailHelper} /></div>
                    <div className='twtfeild'><TextField className='feilds' label="Password" variant="outlined" type='password' InputLabelProps={{ style: { color: 'grey' } }} InputProps={{ style: { color: 'white' } }} onChange={handlepassword} error={errorObj.passwordError} helperText={errorObj.passwordHelper} /></div>
                    <div className='twtfeild'><TextField className='feilds' label="Confirmpassword" variant="outlined" type='password' InputLabelProps={{ style: { color: 'grey' } }} InputProps={{ style: { color: 'white' } }} onChange={handleconfirmpassword} error={errorObj.conpasswordError} helperText={errorObj.conpasswordHelper} /></div>
                </div>
                <div className='signupcontent'>
                    <h4>Date of birth</h4>
                    This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                </div>
                <div className='signupnextmain'>
                    <input className='dateofbirth' type='date'></input>
                    <button className='signupnext' onClick={handlenext}>Next</button>
                </div>

            </div>
        </div>
    )
}

export default SignUp