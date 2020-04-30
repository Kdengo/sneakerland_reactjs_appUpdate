import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import image from './aab05c3c9e139b593b8b247358ab8014.jpg';
import image2 from './4.jpg'
import image3 from './1.jpg'
import image4 from './2.jpg'
import image5 from './3.jpg'
import image6 from './5.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1340,
        height: 500,
    },

}));
const tileData = [
    {
        img: image,
        title: 'Image',
        author: 'author',
        cols: 1,
        rows:2,
    },
    {
        img: image2,
        title: 'Image',
        author: 'author',
        cols: 2,
        rows:2,
    },
    {
        img: image3,
        title: 'Image',
        author: 'author',
        cols: 2,
        rows:2,
    },
    {
        img: image4,
        title: 'Image',
        author: 'author',
        cols: 1,
        rows:2,
    },
    {
        img: image6,
        title: 'Image',
        author: 'author',
        cols: 1,
        rows:2,
    },
    {
        img: image5,
        title: 'Image',
        author: 'author',
        cols: 2,
        rows:2,
    },

];

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ImageGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>

    );
}
