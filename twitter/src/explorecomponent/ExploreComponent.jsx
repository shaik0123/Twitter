import React from 'react'
import './ExploreComponent.css'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SettingsIcon from '@mui/icons-material/Settings';
import Nature from '../images/NatureLogo.jpg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function ExploreComponent() {
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
        <div className='exploremain'>
            <div className='exfixed'>
                <div className='exploresearch'>
                    <div className='exsearch'>
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
                    <div className='settings'>
                        <SettingsIcon />
                    </div>
                </div>
                <div className='exploreoptions'>
                    <div className='exhover'>For you</div>
                    <div className='exhover'>Trending</div>
                    <div className='exhover'>News</div>
                    <div className='exhover'>Sports</div>
                    <div className='exhover'>Entertainment</div>
                </div>
            </div>

            <div className='eximgmain'>
                <img id="eximg" src={Nature} alt="logo" width="680px" />
            </div>
            <div className='extrendingmain'>
                <div className='extrendingone'>
                    <div>Trending</div>
                    <div><MoreHorizIcon /></div>
                </div>
                <div className='extrendingtwo'>
                    Thalaivar
                </div>
                <div className='extrendingthree'>
                    2.2k  posts
                </div>
            </div>
            <div className='extrendingmain'>
                <div className='extrendingone'>
                    <div>Technology . Trending</div>
                    <div><MoreHorizIcon /></div>
                </div>
                <div className='extrendingtwo'>
                    #iPhone15onFlipcart
                </div>
                <div className='extrendingthree'>
                    2.2k  posts
                </div>
            </div>
            <div className='extrendingmain'>
                <div className='extrendingone'>
                    <div>Technology . Trending</div>
                    <div><MoreHorizIcon /></div>
                </div>
                <div className='extrendingtwo'>
                    #iPhone15onFlipcart
                </div>
                <div className='extrendingthree'>
                    2.2k  posts
                </div>
            </div>
            <div className='extrendingmain'>
                <div className='extrendingone'>
                    <div>Technology . Trending</div>
                    <div><MoreHorizIcon /></div>
                </div>
                <div className='extrendingtwo'>
                    #iPhone15onFlipcart
                </div>
                <div className='extrendingthree'>
                    2.2k  posts
                </div>
            </div>
        </div>
    )
}

export default ExploreComponent