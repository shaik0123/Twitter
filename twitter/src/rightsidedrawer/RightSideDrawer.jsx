import React from 'react'
import './RightSideDrawer.css'
import DashboardLogo from '../images/X-imagelogo.png'
import { Avatar, IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import ViewListIcon from '@mui/icons-material/ViewList';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import PendingIcon from '@mui/icons-material/Pending';
import { Button } from '@mui/base';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Search from '@mui/icons-material/Search';
import Notifications from '@mui/icons-material/Notifications';
import ViewList from '@mui/icons-material/ViewList';
import Person from '@mui/icons-material/Person';
import People from '@mui/icons-material/People';
import Pending from '@mui/icons-material/Pending';

function RightSideDrawer() {
    return (
        <div className='rightmain'>
            <div className='rightcontent'>
                <div className='ximg'><img src={DashboardLogo} alt="logo" width="40px" /></div>
                <div className='iconsbtns'>
                    <IconButton className='icon'>
                        <div className='contentcolour'><HomeIcon /> Home</div>
                    </IconButton>
                    <IconButton className='icon'>
                        <div className='contentcolour'>< SearchIcon /> Explore</div>
                    </IconButton>
                    <IconButton className='icon'>
                        <div className='contentcolour'>< NotificationsIcon/> Notifications</div>
                    </IconButton>
                    <IconButton className='icon'>
                        <div className='contentcolour'>< EmailIcon/> Messages</div>
                    </IconButton>
                    <IconButton className='icon'>
                        <div className='contentcolour'><ViewList /> Lists</div>
                    </IconButton>
                    <IconButton className='icon'>
                        <div className='contentcolour'><Person /> Communities</div>
                    </IconButton>
                    <IconButton className='icon'>
                        <div className='contentcolour'><HomeIcon /> Premium</div>
                    </IconButton>
                    <IconButton className='icon'>
                        <div className='contentcolour'><People /> Profile</div>
                    </IconButton>
                    <IconButton className='icon'>
                        <div className='contentcolour'><Pending /> More</div>
                    </IconButton>
                    <div><Button className='postbtn'>Post</Button></div>
                </div>
                <div className='profile'>
                    <div><Avatar></Avatar></div>
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

export default RightSideDrawer