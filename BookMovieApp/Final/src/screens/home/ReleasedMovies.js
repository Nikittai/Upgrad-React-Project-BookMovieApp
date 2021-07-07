import React,{ useState }  from 'react';
import GridListReleasedMovies from './GridListReleasedMovies';
import { makeStyles } from '@material-ui/core/styles';
import './home.css'
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
         </div>

    )
}
