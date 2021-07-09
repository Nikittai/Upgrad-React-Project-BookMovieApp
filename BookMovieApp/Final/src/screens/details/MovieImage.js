import React from 'react';

class MovieImage extends React.Component{
  
   render(){
       return (
           <div>
               <img src={this.props.image} alt='movie' id="movie-image" width="300px" height="560px"/>
           </div>
       )
   }

}

export default MovieImage;