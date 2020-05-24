import React from 'react'
import classes from './textCard.module.css'
const textCard = (props) => {
    return (
        <div className={classes.TextCard}>
            <h3>{props.title}</h3>
            <p>{props.line1}</p>
            <p>{props.line2}</p>
        </div>
    )
}
export default textCard