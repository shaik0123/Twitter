import React, { useReducer, useState } from 'react'
import './Dashboard.css'
import LeftSideDrawer from '../leftsidedrawer/LeftSideDrawer'
import RightSideDrawer from '../rightsidedrawer/RightSideDrawer'
import HomeComponent from '../homecomponent/HomeComponent'
import ExploreComponent from '../explorecomponent/ExploreComponent'
import NotificationComponent from '../notificationcomponent/NotificationComponent'
import MessageComponent from '../messagecomponent/MessageComponent'
import ExtraMessagecomponent from '../messagecomponent/ExtraMessagecomponent'


const initialstate = <HomeComponent />;
function Dashboard() {

    const [toggle, settoggle] = useState(false);
    const reducer = (state, action) => {
        switch (action) {
            case 'Home':
                return state = <HomeComponent />
            case 'Explore':
                return state = <ExploreComponent />
            case 'Notification':
                return state = <NotificationComponent />
            case 'Messages':
                return state = <MessageComponent />
            default:
                return state = <HomeComponent />
        }
    }

    const [component, dispatch] = useReducer(reducer, initialstate)


    return (

        <div className='dashboardmain'>
            <div className='left'><LeftSideDrawer settoggle={settoggle} dispatch={dispatch} /></div>
            <div className='middle'>
                {component}
            </div>
            {toggle ?
                <div><ExtraMessagecomponent /></div> :
                <div className='right'><RightSideDrawer /></div>
            }
        </div>

    )
}

export default Dashboard