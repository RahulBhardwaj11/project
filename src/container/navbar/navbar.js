import React from 'react'
import classes from './navbar.module.scss'
import { NavLink } from 'react-router-dom'
const navBar = () => {
    return (
        <div class={classes.NavBar}>
            <a>Demo</a>
            <NavLink exact activeClassName={classes.active} to="/">Page1</NavLink>
            <NavLink  exact activeClassName={classes.active} to="/page2">Page2</NavLink>
        </div>
    )
}
export default navBar