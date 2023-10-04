import React, { useReducer, useState } from 'react'
import './Dashboard.css'
import LeftSideDrawer from '../leftsidedrawer/LeftSideDrawer'
import RightSideDrawer from '../rightsidedrawer/RightSideDrawer'
import HomeComponent from '../homecomponent/HomeComponent'
import ExploreComponent from '../explorecomponent/ExploreComponent'
import NotificationComponent from '../notificationcomponent/NotificationComponent'


const initialstate =<HomeComponent/>;
function Dashboard() {
   

    const reducer = (state,action)=>{
        switch(action){
            case 'Home':
                return state=<HomeComponent/>
            case 'Explore':
                return state=<ExploreComponent/>
            case 'Notification':
                return state=<NotificationComponent/>
            default:
                return state=<HomeComponent/>
        }
    }

    const [component,dispatch]=useReducer(reducer,initialstate)
           

    return (

        <div className='dashboardmain'>
            <div className='left'><LeftSideDrawer  dispatch={dispatch}/></div>
            <div className='middle'>
                {component}
            </div>

            <div className='right'><RightSideDrawer /></div>
        </div>

    )
}

export default Dashboard