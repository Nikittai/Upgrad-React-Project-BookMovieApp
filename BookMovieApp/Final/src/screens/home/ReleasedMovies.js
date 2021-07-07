import React,{ useState }  from 'react';
import GridListReleasedMovies from './GridListReleasedMovies';
import './home.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import DatePicker from './DatePicker';
import Genre from './Genre';
import Artist from './Artist';
const useStyles = makeStyles({
 
    root: {
      minWidth: 240,
      maxWidth:240
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  
  });
  
export default function releasedMovies(props){
    const classes = useStyles();
    const obj = {
        title:"",
        genre:[],
        artists:[]
    }
  
    const[movieState,setMovieState] = useState(obj);
    const[movieFilter,setMovieFilter] = useState(obj);
   
    const onClickHandler = function(props){
         setMovieFilter(movieState);
         
    }

    //onChangeHandlers for setting the data selected in the Filtercard into the state
    const onChangeHandler=(e)=>{
        const st = {...movieState};
        st[e.target.name] = e.target.value;
        setMovieState(st);
      }
      const onChangeHandlerGenre=(props)=>{
        const st = {...movieState};
        st["genre"] = props;
        setMovieState(st);
      }
      const onChangeHandlerArtist=(props)=>{
        const st = {...movieState};
        st["artists"] = props;
        setMovieState(st);
      }
      
     

    return (
        <div className="movies-filtercard">
            <div className = 'movies'>
                <GridListReleasedMovies movies = {props.movies} onClickHandlerMovie={props.onClickHandlerMovie} filter={movieFilter}/>
            </div>
            <div className = 'filtercard'>
            <Card className={classes.root} variant="outlined" >
              <CardContent>
              
              <Typography component="div" variant="body1">
              <Box color="primary.light">FIND MOVIES BY:</Box>
              
              </Typography>
              <TextField id="standard-basic" label="Movie Name" name="title" value={movieState.title} onChange={onChangeHandler} />
              <Genre name="genre" value={movieState.genre} onChange={onChangeHandlerGenre} genres={props.genres}/>
              <Artist name="artists" value={movieState.artists}   onChange={onChangeHandlerArtist} artists = {props.artists}/>
              <DatePicker val="Release Date Start"/>
              
              <DatePicker val="Release Date End"/>
              </CardContent>
              
              <CardActions>
                <Button id="apply-button" size="large" variant="contained" color="primary" type="button" onClick = {onClickHandler}>APPLY</Button>
              </CardActions>
            </Card>
            </div>    
            
        </div>

    )
}
