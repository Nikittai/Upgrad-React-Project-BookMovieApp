import React from 'react';

import './home.css';
import Heading from './Heading';
import Header from '../../common/header/Header';



class Homepage extends React.Component {

    constructor() {
        super();
        this.state = {
            movieList: [],
            movieDetail: {},
            bookShow: false,
            bookShowComponent: false,
            movieid: 0,
            artists: [],
            genres: []


        }
    }

    componentDidMount() {
        let movies = [];
        let artists = [];
        let genres = [];

        //Sending request for fetching the movies from the database
        fetch('http://localhost:8085/api/v1/movies')
            .then(response => response.json())
            .then(posts => {
                movies = posts.movies;
                let newState = { ...this.state };

                newState.movieList = movies;
                this.setState(newState);
            })
            .then((err) => {
                // console.log(err);
            })

        //Sending request for fetching the artists from the database for showing on FIltercard
        fetch('http://localhost:8085/api/v1/artists')
            .then(response => response.json())
            .then(posts => {
                artists = posts.artists;
                let newState = { ...this.state };

                newState.artists = artists;
                this.setState(newState);
            })
            .then((err) => {
                //   console.log(err);
            })

        //Sending request for fetching the Genres from the database for showing on Filtercard
        fetch('http://localhost:8085/api/v1/genres')
            .then(response => response.json())
            .then(posts => {
                genres = posts.genres;
                let newState = { ...this.state };

                newState.genres = genres;
                this.setState(newState);
            })
            .then((err) => {
                // console.log(err);
            })



    }
    //When back button is clicked on the book show component, changing the state to hide the bookshowcomponent
    onClickHandlerBackBookShow = function () {
        let newState = { ...this.state };
        newState.bookShowComponent = false;
        newState.bookShow = true;
        this.setState(newState);
    }

    //When BookShow button is clicked on details page, changing the state to make bookshowcomponent visible
    onClickHandlerBookShow = function (props) {
        let newState = { ...this.state };
        newState.bookShowComponent = true;
        newState.bookShow = false;
        this.setState(newState);
    }
    //When user clicks on movie, the state is changed to display the moviedetail page and setting the id og the clicked movie
    //Book Show button's visibility is also set to true
    onClickHandlerMovie(movie) {
        let newState = { ...this.state };
        newState.movieDetail = movie;
        newState.movieid = movie.id;
        newState.bookShow = true;
        this.setState(newState);

    }
    //When the Back to Home button is clicked from the movie details page, this method will change the state to show again the homepage.
    onClickHandlerBack() {
        let newState = { ...this.state };
        newState.movieDetail = {};
        newState.bookShow = false;
        this.setState(newState);
    }

    //This will display the homepage 
    ShowHomePage = function (props) {
        if (Object.keys(props.movieDetail).length === 0) {
            //If there is no movie in the movieDetail array it means no movie is corrently selected by the user and homepage should be displayed
            return (
                <div>

                    <Heading />
                     </div>
            );
        }
        else {
            //If there is movie in the movieDetail array it means movie is selected  by the user and homepage should not be displayed
            //Therefore returning empty div from here
            return (
                <div></div>
            )
        }
    }



    render() {
        return (
            <div>
                <Header bookShow={this.state.bookShow} onClickHandlerBookShow={this.onClickHandlerBookShow.bind(this)} />
                <this.ShowHomePage movies={this.state.movieList} onClickHandlerMovie={this.onClickHandlerMovie.bind(this)} onClickHandlerBack={this.onClickHandlerBack.bind(this)} movieDetail={this.state.movieDetail} artists={this.state.artists} genres={this.state.genres} />
            </div>
        )


    }
}
export default Homepage;