import React from 'react'
import './SignUp.css'
import TextField from '@mui/material/TextField';


function SignUp({setcreateToggle}) {
    const handlexsignup=()=>{
        setcreateToggle(false)
    }
    return (
        <div className='signupouter'>
            <div className='signuptwtmain'><div className='closebtn' onClick={handlexsignup}><button className='closeX'>x</button></div>
                <div className='signupheading'>
                    Create your account
                </div>
                <div className='twtfeilds'>
                    <div><TextField className='feilds' label="Name" variant="outlined" InputLabelProps={{style:{color:'grey'}}} InputProps={{style:{color:'white'}}}/></div>
                    <div><TextField className='feilds' label="Phone" variant="outlined" InputLabelProps={{style:{color:'grey'}}} InputProps={{style:{color:'white'}}}/></div>
                    <div><TextField className='feilds' label="Password" variant="outlined" type='password' InputLabelProps={{style:{color:'grey'}}} InputProps={{style:{color:'white'}}}/></div>
                    <div><TextField className='feilds' label="Confirmpassword" variant="outlined" type='password' InputLabelProps={{style:{color:'grey'}}} InputProps={{style:{color:'white'}}}/></div>
                </div>
                <div className='signupcontent'>
                    <h4>Date of birth</h4>
                    This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                </div>
                <div className='signupnextmain'>
                    
                    <button className='signupnext'>Next</button>
                </div>

            </div>
        </div>
    )
}

export default SignUp