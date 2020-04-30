import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {

    },
});

export default function Footer() {
    const Classes = useStyles();
    return(
        <div align='center'>
            <p>Copyright © 2020 www.sneakerland.com</p>
            <Typography gutterBottom variant="h5" component="h2">
                Copyright © 2020 www.sneakerland.com            </Typography>
        </div>
    );
}