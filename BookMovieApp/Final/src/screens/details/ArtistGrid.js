import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    float: 'left',
  },
  gridList: {
    width: 250,
  },
}));


export default function ArtistImageGridList(props) {
  const classes = useStyles();
  //tileData is taken from the props coming from parent component
  let tileData = props.artists;

  return (
    <div className={classes.root}>
      <GridList cellHeight={150} className={classes.gridList} cols={2} >
        {tileData.map((tile) => (
          <GridListTile key={tile.profile_url} cols={tile.cols || 1}>
            <img src={tile.profile_url} alt={tile.first_name} />
            <GridListTileBar
              title={`${tile.first_name} ${tile.last_name}`}
              actionIcon={
                <IconButton aria-label={`info about ${tile.first_name}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
