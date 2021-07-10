import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import './home.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    //height: 1000,
  },
}));

const onClickHandler = function (props, tile) {
  props.onClickHandlerMovie(tile);
}

export default function ImageGridList(props) {
  const classes = useStyles();
  let tiles = props.movies;

  //Filters for filtering the movies based on the input provided by the user in the Filtercard
  let tileData = tiles.filter((tile) => {
    var filtermovie = true;

    //Filter for checking the status of movie.
    if (tile.status !== "RELEASED") {
      filtermovie = false;
    }

    //Filter for the name in case the user provide the movie name in Filtercard
    else if (props.filter.title !== "" && tile.title !== props.filter.title) {
      filtermovie = false;
    }

    //Filter for the Geners as per the values selected by the user in Filtercard
    if (filtermovie && props.filter.genre.length > 0) {
      filtermovie = false;
      for (let gen in props.filter.genre) {

        if (tile.genres.includes(props.filter.genre[gen])) {
          filtermovie = true;
          break;
        }
      }

    }
   //Filter for the artists as per the value selected by the user in the filtercard
    if (filtermovie && props.filter.artists.length > 0) {
      filtermovie = false;
      for (let art in tile.artists) {
        let name = `${tile.artists[art].first_name} ${tile.artists[art].last_name}`;
        if (props.filter.artists.includes(name)) {
          filtermovie = true;
          break;
        }
      }
    }

    return filtermovie;

  })

  return (
    <div className={classes.root}>
      <GridList cellHeight={350} className={classes.gridList} cols={4} >
        {tileData.map((tile) => (

          <GridListTile key={tile.poster_url} cols={tile.cols || 1}>
            <img className="movie-list-hover" src={tile.poster_url} alt={tile.title} onClick={onClickHandler.bind(this, props, tile)} />
            <GridListTileBar
              title={tile.title}
              subtitle={`Release Date: ${tile.release_date}`}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
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
