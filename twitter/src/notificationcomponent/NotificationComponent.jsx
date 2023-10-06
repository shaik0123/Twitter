import React from 'react'
import './NotificationComponent.css'
import SettingsIcon from '@mui/icons-material/Settings';
import NotifyLogo from '../images/X-imagelogo.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotifyNature from '../images/NatureLogo.jpg';
import NotifyNatureone from '../images/NatureLogo.jpeg';


function NotificationComponent() {


    return (
        <div className='notifymain'>
            <div className='notifyfixed'>
                <div className='notifysettings'>
                    <div>
                        <h2>Notifications</h2>
                    </div>
                    <div id="notifysettingsicon" >
                        <SettingsIcon />
                    </div>
                </div>
                <div className='notifyoptions'>
                    <div className='notifyoption'>All</div>
                    <div className='notifyoption'>Verified</div>
                    <div className='notifyoption'>Mentioned</div>
                </div>
            </div>
            <div className='firstnotify'>
                <div id="notifylogo"><img src={NotifyLogo} alt="logo" width="40px" /></div>
                <div id="notifymsg">There was a login to your account @Shaik_Ismail from a new device on 30 sep 2023. Review it now. </div>
            </div>
            <div className='notifylikedpost'>
                <div className='notifylikemgs'>
                    <div className="likeicon"><FavoriteIcon /></div>
                    <div><AccountCircleIcon /></div>
                </div>
                <div className='postliked'>#Jaanu liked your post</div>
                <div>
                    <img src={NotifyNature} alt="logo" width="550px" />
                </div>
            </div>
            <div className='firstnotify'>
                <div id="notifylogo"><img src={NotifyLogo} alt="logo" width="40px" /></div>
                <div id="notifymsg">There was a susspicious activity for your account @Shaik_Ismail from a new device on 30 sep 2023. </div>
            </div>
            <div className='notifylikedpost'>
                <div className='notifylikemgs'>
                    <div className="likeicon"><FavoriteIcon /></div>
                    <div><AccountCircleIcon /></div>
                </div>
                <div className='postliked'>#Salman liked your post</div>
                <div>
                    <img src={NotifyNatureone} alt="logo" width="400px" />
                </div>
            </div>
            <div className='firstnotify'>
                <div id="notifylogo"><img src={NotifyLogo} alt="logo" width="40px" /></div>
                <div id="notifymsg">There was a login to your account @Shaik_Ismail from a new device on 24 sep 2023. Review it now. </div>
            </div>
        </div>
    )
}

export default NotificationComponent