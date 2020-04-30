import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Imagen from './6.jpg';

const useStyles = makeStyles({
    root: {
        maxWidth: 1340,
    },
    media: {
        height: 200,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        SER UN SNEAKERHEAD NO ES UN PASATIEMPO, ES UN ESTILO DE VIDA QUE AUMENTA CADA VEZ MÁS.
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardMedia
                className={classes.media}
                image={Imagen}
                title="Contemplative Reptile"
            />
            </CardActionArea>

        </Card>




    );
}

