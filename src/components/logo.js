import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import logoSvg from '../logo.svg'

const styles = {
    logo: {
        color: 'red'
    },
    avatar: {
        height: 40,
        width: 40,
        margin: 10
    }
}

const Logo = (props) => {
    const { classes } = props
    return (
        <div className={classes.logo}>
            <Avatar alt='Logo' src={logoSvg} className={classes.avatar} />
        </div>
    )
}

export default withStyles(styles)(Logo)