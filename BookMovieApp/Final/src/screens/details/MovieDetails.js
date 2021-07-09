
import React from 'react';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from "react-player";
import './Details.css'

class MovieDetails extends React.Component {
    title = this.props.details.title;
    Genre = this.props.details.genres;
    Duration = this.props.details.duration;
    Release_Date = this.props.details.release_date;
    Rating = this.props.details.rating;
    Plot = this.props.details.storyline;
    wiki_url = this.props.details.wiki_url;
    trailer_url = this.props.details.trailer_url;

   
    render() {
        let genreVal = "";
        for(let i =0;i<this.Genre.length-1;i++){
            genreVal = this.Genre[i]+",";
        }
        genreVal = genreVal + this.Genre[this.Genre.length-1];
        return (
            <div>
                <Typography variant="h6" component="h2">
                    {this.title}
                </Typography>
                <Typography variant="subtitle1" component="h2">
                    <b>Genre:</b> {genreVal}
                </Typography>
                <Typography variant="subtitle1" component="h2">
                    <b>Duration:</b>{this.Duration}
                </Typography>
                <Typography variant="subtitle1" component="h2">
                    <b>Release Date:</b> {this.Release_Date}
                </Typography>
                <Typography variant="subtitle1" component="h2">
                    <b>Rating:</b> {this.Rating}
                </Typography>
                <Typography variant="subtitle1" component="h2" id="plot">
                    <b>Plot:</b>
                    (<a href={this.wiki_url}>Wiki Link</a>)
                    {this.Plot}
                </Typography>
                <Typography variant="subtitle1" component="h2">
                    <b>Trailer:</b>
                </Typography>

                <ReactPlayer id="trailer"
                    url={this.trailer_url} width="100%" playing
                />
            </div>
        )
    }

}

export default MovieDetails;

