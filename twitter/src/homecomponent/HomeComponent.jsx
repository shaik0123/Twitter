import React from 'react'
import './HomeComponent.css'
import { Avatar } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GifBoxIcon from '@mui/icons-material/GifBox';
import BallotIcon from '@mui/icons-material/Ballot';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import PlaceIcon from '@mui/icons-material/Place';
import { Button } from '@mui/base';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import NatureLogo from '../images/NatureLogo.jpg';


function HomeComponent() {
    return (
        <div>
            <div className='homecomponentmain'>
                <div className='homediv'>
                    Home
                </div>
                <div className='ffoptions'>
                    <div className='for'>For you</div>
                    <div className='following'>Following</div>
                </div>
                <div className='whathappen'>
                    <div className='avataricon'>
                        <div id="avatar"><Avatar>SI</Avatar></div>
                        <div id="whatishpn">What is happening?!</div>
                    </div>
                    <div className='homeicons'>
                        <div className='homeiconone'>
                            <div className='homeicon'><InsertPhotoIcon /></div>
                            <div className='homeicon'><GifBoxIcon /></div>
                            <div className='homeicon'><BallotIcon /></div>
                            <div className='homeicon'><SentimentSatisfiedAltIcon /></div>
                            <div className='homeicon'><WorkHistoryIcon /></div>
                            <div className='homeicon'><PlaceIcon /></div>
                        </div>
                        <div className='homepost'>
                            <Button className='homehashbtn'>#</Button>
                            <Button className='homepostbtn'>Post</Button>
                        </div>
                    </div>
                </div>
                <div className='postdiv'>
                    <div className='postavatar'><Avatar>SI</Avatar></div>
                    <div className='namedicrp'>
                        <div className='nameandid'>
                            <div>Shaik Ismail</div>&nbsp;&nbsp;
                            <div className='upload'>@Shaik_Ismail</div>&nbsp;&nbsp;
                            <div className='upload'>. oct 2</div>
                        </div>
                        <div className='discription'>
                            <div>Nature never goes out of style</div>&nbsp;&nbsp;
                            <div className='unknown'> #Unknown</div>
                        </div>
                    </div>
                    <div className='moreicon'>
                        <MoreHoriz />
                    </div>
                </div>
                <div className='picture'><img src={NatureLogo} alt="logo" width="500px"/></div>
            </div>
        </div >
    )
}

export default HomeComponent