import { Avatar } from '@mui/material'
import React from 'react'
import "./SideBar.css"

function SideBar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>        
    )

    
  return (
    <div className="sidebar">
        
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1646167858622-b94eb44d1b7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            <Avatar className='sidebar__avatar'/>
            <h2>Kenji Tagawa</h2>
            <h4>kenjitagawa.kt@gmail.com</h4>
        </div>
        
        
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">
                    2,514
                </p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">
                    25,423
                </p>
            </div>
        </div>


        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("ReactJS")}
            {recentItem("AngularJS")}
            {recentItem("Python")}
            {recentItem("Linux")}
            {recentItem("Programming")}
            {recentItem("WebDev")}
        </div>
    </div>
  )
}

export default SideBar