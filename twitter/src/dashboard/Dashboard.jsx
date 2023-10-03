import React from 'react'
import './Dashboard.css'
import LeftSideDrawer from '../leftsidedrawer/LeftSideDrawer'
import RightSideDrawer from '../rightsidedrawer/RightSideDrawer'
import HomeComponent from '../homecomponent/HomeComponent'

function Dashboard() {
    return (

        <div className='dashboardmain'>
            <div className='left'><LeftSideDrawer /></div>
            <div><HomeComponent /></div>
            <div className='right'><RightSideDrawer /></div>
        </div>

    )
}

export default Dashboard