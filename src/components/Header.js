import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';



function Header() {
  return (
    <div className='header'>

        <div className="header__left">
            <img src="https://www.flaticon.com/premium-icon/linkedin_3536505?term=linkedin&page=1&position=2&page=1&position=2&related_id=3536505&origin=search" alt="none" />
            <div className="header__search">
                <SearchIcon />
                <input type="text" />

            </div>
        </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Chat" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4E03AQG2heFbosAT9g/profile-displayphoto-shrink_100_100/0/1600218673970?e=1651708800&v=beta&t=Hx_8YQvY2BdSY4QbntjTm_xCvno-3vxiRR9eTFOQPw8" title="Me" />
        </div>

    </div>
  )
}

export default Header