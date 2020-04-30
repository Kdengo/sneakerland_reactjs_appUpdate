import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Imagen from './1.jpg';

const useStyles = makeStyles({
    root: {
        maxWidth: 1360,
        margin: 5,
    },
    media: {
        height: 250,


    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image = {Imagen}
                    title="sneaker"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Un sneakerhead es un coleccionista de tenis experto en la materia. La mayoría de las personas usan las mismas marcas y modelos, un  sneakerhead busca calidad,  diseño e innovación que surgen entre las colaboraciones.
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Sneaker quiere decir zapatillas de deporte. Es decir, en Estados Unidos, se refieren a las zapatillas Sneakers a las zapatillas deportivas. Calzado de material flexible, con suela de goma y una parte de cuero o lona!

                        Ahora bien… no todas las zapatillas deportivas son sneakers pero sí todas las Sneakers son zapatillas deportivas!
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    );
}
