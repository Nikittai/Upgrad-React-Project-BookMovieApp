import React from 'react';
import './Details.css';
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
                <div id="details">
                    
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