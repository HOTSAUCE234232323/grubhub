import React from 'react'
import './header.css'

function homeClick(){
    console.log("Home")
}
function coursesClick(){
    console.log("Courses")
}

function header() {
  return (
    <div>
        <ul id="header_list">
            <li id="home"><a onClick={homeClick}>Home</a></li>
            <li onClick={coursesClick}>Courses</li>
        </ul>
    </div>
  )
}
export default header