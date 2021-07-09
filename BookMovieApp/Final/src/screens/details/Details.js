import React from 'react';
import './Details.css';
import MovieImage from './MovieImage';
import MovieDetails from './MovieDetails';
import RateMovie from './RateMovie';
import BackToHome from './BackToHome';
import '../../common/header/Header.css';
import BookShow from '../../screens/bookshow/BookShow';
import Typography from '@material-ui/core/Typography';


class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            bookShowComponent: false,
            movieid: 0
        }
    }

    //This will display the Book Show Component if the user click Book Show button
    BookShowComponent = function (props) {
        if (props.bookShowComponent === false) {
            //If bookShowComponent is false, it means this component should not be displayed
            //Therefore returning empty div 
            return (
                <div></div>
            )
        }
        return (
            <div>
                <Typography align='center' variant="h6" component="h2" id="backtohome" onClick={props.onClickHandlerBackBookShow}>
                    &lt; Back To Movie Details
                </Typography>
                <BookShow baseUrl="http://localhost:8085/api/v1/" id={props.id} />
            </div>
        )
    }

    //This method will return the movie details page
    MovieDetailsComponent = function (props) {
        if (props.bookShowComponent === true) {
            //If bookShowComponent is set to true, it means this component should not be displayed
            //Therefore returning empty div
            return (
                <div></div>
            )
        }
        return (
            <div>
                <BackToHome onClickHandlerBack={props.onClickHandlerBack} />
                <div id="details">
                    <div >
                        <MovieImage id="details-movie-image" image={props.movie.poster_url} />
                    </div>
                    <div id="details-movie-details" >
                        <MovieDetails details={props.movie} />
                    </div>
                    <div id="details-movie-rate">
                        <RateMovie artists={props.movie.artists} />
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <this.BookShowComponent bookShowComponent={this.props.bookShowComponent} id={this.props.movie.id} onClickHandlerBackBookShow={this.props.onClickHandlerBackBookShow} />
                <this.MovieDetailsComponent {...this.props} bookShowComponent={this.props.bookShowComponent} />

            </div>
        )
    }
}
export default Details;