import React from 'react'
import './RightSideDrawer.css'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';




function RightSideDrawer() {
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
        <div className='rightmain'>
            <div className='rightdrawer'>
                <div className='search'>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </div>
                <div className='subscribe'>
                    <div className='subscribesub'>
                        <p id="premium">Subscribe to Premium</p>
                        <p id="premiumcontent">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                    </div>
                </div>
                <div className='trendingdiv'>
                        <div className='trendingcontent'>
                            <h2>What's happening</h2>
                        </div>
                        <div className='trendingmain'>
                            <div className='trendingone'>
                                <div>Trending</div>
                                <div><MoreHorizIcon/></div>
                            </div>
                            <div className='trendingtwo'>
                                Thalaivar
                            </div>
                            <div className='trendingthree'>
                                2.2k  posts
                            </div>  
                        </div>
                        <div className='trendingmain'>
                            <div className='trendingone'>
                                <div>Technology . Trending</div>
                                <div><MoreHorizIcon/></div>
                            </div>
                            <div className='trendingtwo'>
                                #iPhone15onFlipkart
                            </div>
                            <div className='trendingthree'>
                                3.4k  posts
                            </div>
                        </div>
                        <div className='trendingmain'>
                            <div className='trendingone'>
                                <div>Trending</div>
                                <div><MoreHorizIcon/></div>
                            </div>
                            <div className='trendingtwo'>
                                #SalarTrailer
                            </div>
                            <div className='trendingthree'>
                                4.2k  posts
                            </div>
                        </div>
                        <div className='trendingmain'>
                            <div className='trendingone'>
                                <div>Trending</div>
                                <div><MoreHorizIcon/></div>
                            </div>
                            <div className='trendingtwo'>
                                #BoatEarbuds
                            </div>
                            <div className='trendingthree'>
                                3.2k  posts
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default RightSideDrawer