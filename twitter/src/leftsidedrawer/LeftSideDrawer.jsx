import React, { useState } from 'react'
import './LeftSideDrawer.css'
import DashboardLogo from '../images/X-imagelogo.png'
import { Avatar, IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import { Button, Menu, MenuItem } from '@mui/base';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ViewList from '@mui/icons-material/ViewList';
import Person from '@mui/icons-material/Person';
import People from '@mui/icons-material/People';
import Pending from '@mui/icons-material/Pending';
import { useNavigate } from 'react-router';

function LeftSideDrawer({dispatch}) {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const handleprofile = () => {
        setToggle(!toggle)
    }
    const handlelogout=()=>{
        localStorage.removeItem("Token")
            navigate("/")
    }
    return (
        <div className='leftmain'>
            <div className='leftcontent'>
                <div className='ximg'><img src={DashboardLogo} alt="logo" width="40px" /></div>
                <div className='iconsbtns'>
                    <div className='hovereffect'>
                        <IconButton className='icon' onClick={()=>dispatch('Home')}>
                            <div className='contentcolour' ><HomeIcon /> Home</div>
                        </IconButton>
                    </div>
                    <div className='hovereffect'>
                        <IconButton className='icon' onClick={()=>dispatch('Explore')}>
                            <div className='contentcolour'>< SearchIcon /> Explore</div>
                        </IconButton>
                    </div>
                    <div className='hovereffect'>
                        <IconButton className='icon' onClick={()=>dispatch('Notification')}>
                            <div className='contentcolour'>< NotificationsIcon /> Notifications</div>
                        </IconButton>
                    </div>
                    <div className='hovereffect'>
                        <IconButton className='icon'>
                            <div className='contentcolour'>< EmailIcon /> Messages</div>
                        </IconButton>
                    </div>
                    <div className='hovereffect'>
                        <IconButton className='icon'>
                            <div className='contentcolour'><ViewList /> Lists</div>
                        </IconButton>
                    </div>
                    <div className='hovereffect'>
                        <IconButton className='icon'>
                            <div className='contentcolour'><Person /> Communities</div>
                        </IconButton>
                    </div>
                    <div className='hovereffect'>
                        <IconButton className='icon'>
                            <div className='contentcolour'><img src={DashboardLogo} alt="logo" width="25px" /> Premium</div>
                        </IconButton>
                    </div>
                    <div className='hovereffect'>
                        <IconButton className='icon'>
                            <div className='contentcolour'><People /> Profile</div>
                        </IconButton>
                    </div>
                    <div className='hovereffect'>
                        <IconButton className='icon'>
                            <div className='contentcolour'><Pending /> More</div>
                        </IconButton>
                    </div>
                    <div><Button className='postbtn'>Post</Button></div>
                </div>
                {toggle && <div className='xlogout'>
                    <div><Button className='logoutbtn'>Add account</Button></div>
                    <div onClick={handlelogout}><Button className='logoutbtn'>Logout</Button></div>
                </div>}
                <div className='profile' onClick={handleprofile}>
                    <div><Avatar>SI</Avatar></div>
                    <div className='profilecontent'>
                        <div>Shaik Ismail</div>
                        <div>@Shaik_Ismail</div>
                    </div>
                    <div><MoreHorizIcon /></div>
                </div>


            </div>
        </div>
    )
}

export default LeftSideDrawer