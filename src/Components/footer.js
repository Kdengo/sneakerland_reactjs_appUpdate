import React from 'react';
import {makeStyles, withTheme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Logo from './logooo.png';
import FbIcon from "./FbIcon.js"
import CardMedia from '@material-ui/core/CardMedia';
const useStyles = makeStyles({
    root: {
        
        backgroundColor: 'black',
        fontfamily: 'Bebas Neue',
        textAlign: 'center',
        color:'white',
    },
    media: {
        height: 260,
        
    },
    icon:{
        position: 'relative',
        float: 'right',
        top: -50,
        right:50,
    },
    
});

export default function Footer() {
    const classes = useStyles();
    return(
        <div className={classes.root} >
            <p>Copyright © 2020 www.sneakerland.com</p>
            <CardMedia
                    className={classes.media}
                    image = {Logo}
                    title="sneaker"
                />
                
            <Typography className={classes.root} gutterBottom variant="h3" component="h5">
                Copyright © 
                
                 2020 www.sneakerland.com            
                 </Typography>
                 <FbIcon className={classes.icon}/>
        </div>
        
    );
}