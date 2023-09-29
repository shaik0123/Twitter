import React, { useState } from 'react'
import './HomePage.css'
import HomeLogo from '../images/X-imagelogo.png';
import GoogleLogo from '../images/GoogleLogo.png';
import AppleLogo from '../images/AppleLogo.png';
import Signin from '../signin/Signin';
import SignUp from '../signup/SignUp';

export default function HomePage() {
    const [toggle, setToggle] = useState(false);
    const [createtoggle,setcreateToggle]=useState(false);

    const handlesignin = () => {
        setToggle(true)
    }
    const handlecreateaccount=()=>{
        setcreateToggle(true)
    }
    return (
        <div className='homeouter'>
            <div className='homemain'>
                <div className='left'>
                    <div><img src={HomeLogo} alt="logo" /></div>
                </div>
                <div className='right'>
                    <div className='rightfirst'>
                        <div className='Xheading'>Happening now</div>
                    </div>
                    <div className='rightscnd'>
                        <div className='nextheading'>Join today.</div>
                        <div><button className='signbtn'><img src={GoogleLogo} width="15px" alt="logo" />  Sign Up With Google</button></div>
                        <div><button className='signbtn'><img src={AppleLogo} width="15px" alt="logo" />  Sign Up With Apple</button></div>
                        <div className='or ors' ><hr className='twitterhr'></hr>or<hr className='twitterhr'></hr></div>
                        <div><button className='creatbtn' onClick={handlecreateaccount}>Create account</button></div>
                        <div className='ors'><p>By signing up, you agree to the <a className='anchertwitter' href=''>Terms of Service</a> and <a className='anchertwitter' href=''>Privacy Policy</a>, including <a className='anchertwitter' href=''>Cookie Use.</a></p></div>
                    </div>
                    <div className='rightthird'>
                        <div className='alreadycontent'>Already have an account?</div>
                        <div><button className='signinbtn' onClick={handlesignin}>Sign In</button></div>
                    </div>
                </div>
                <div className='newpage'>
                    {toggle ? <Signin setToggle={setToggle}/> : ""}
                    {createtoggle?<SignUp setcreateToggle={setcreateToggle}/>:""}
                </div>
            </div>
        </div>
    )
}
