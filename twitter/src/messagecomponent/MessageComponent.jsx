import React from 'react';
import './MessageComponent.css';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function MessageComponent() {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        top: '2ch',
        right: '1%',
        borderRadius: "50px",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '36ch',
            },
        },
    }));
    return (
        <div className='msgmain'>
            <div className='msgcontainer'>
                <div className='msgbtns'>
                    <div className='messagehead'><h2>Messages</h2></div>
                    <div className='msgicons'>
                        <div><SettingsIcon /></div>
                        <div><UnsubscribeIcon /></div>
                    </div>
                </div>
                <div className='msgsearch'>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search Direct Messages"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </div>
            </div>
            <div className='msgcontent'>
                <div className='msgrequesticon'><AttachEmailIcon /></div>
                <div className='noofrequest'>
                    <div>Message Requests</div>
                    <div>143 new requests</div>
                </div>
                <div className='doticon'><FiberManualRecordIcon /></div>
            </div>
            <div className='title'><h3>Pinned conversations</h3></div>
            <div className='newmsgcontent'>
                <div className='newmsgrequesticon'><AccountCircleIcon /></div>
                <div className='newnoofrequest'>
                    <div>Shaik <span className="msgid">@prince_1424</span></div>
                    <div className='sharedpost'>Shared a post</div>
                </div>
                <div className='doticon'><FiberManualRecordIcon /></div>
            </div>
            <div className='title'><h3>All conversations</h3></div>
                <div className='newmsgcontent'>
                    <div className='newmsgrequesticon'><AccountCircleIcon /></div>
                    <div className='newnoofrequest'>
                        <div>Sreedhar <span className="msgid">@sri_1918</span></div>
                        <div className='sharedpost'>Shared a post</div>
                    </div>
                </div>
                <div className='newmsgcontent'>
                    <div className='newmsgrequesticon'><AccountCircleIcon /></div>
                    <div className='newnoofrequest'>
                        <div>Prakash <span className="msgid">@prakash_1010</span></div>
                        <div className='sharedpost'>Shared a post</div>
                    </div>
                </div>
                <div className='newmsgcontent'>
                    <div className='newmsgrequesticon'><AccountCircleIcon /></div>
                    <div className='newnoofrequest'>
                        <div>Yashwanth <span className="msgid">@yashwanth_1119</span></div>
                        <div className='sharedpost'>Shared a post</div>
                    </div>
                </div>
                <div className='newmsgcontent'>
                    <div className='newmsgrequesticon'><AccountCircleIcon /></div>
                    <div className='newnoofrequest'>
                        <div>Pavan <span className="msgid">@pavan_0007</span></div>
                        <div className='sharedpost'>Shared a post</div>
                    </div>
                </div>
        </div>
    )
}

export default MessageComponent