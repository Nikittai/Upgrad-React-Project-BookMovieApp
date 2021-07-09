import React from 'react';
import './Details.css';
import MovieImage from './MovieImage';
import MovieDetails from './MovieDetails';
import BackToHome from './BackToHome';
import '../../common/header/Header.css';


class Details extends React.Component {

    constructor() {
        super();
        this.state = {
            bookShowComponent: false,
            movieid: 0
        }
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
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <this.MovieDetailsComponent {...this.props} bookShowComponent={this.props.bookShowComponent} />

            </div>
        )
    }
}
export default Details;