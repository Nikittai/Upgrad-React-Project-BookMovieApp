import React from 'react';
import Typography from '@material-ui/core/Typography';
import ArtistGrid from './ArtistGrid';
import Rating from './Rating';
import './Details.css';

class RateMovie extends React.Component {


    render() {
        return (
            <div>
                <Typography variant="body1" component="h2">
                    <b>Rate this movie:</b>
                </Typography>
                <Rating />
                <Typography variant="body1" component="h2" id="artists">
                    <b>Artists:</b>
                </Typography>
                <ArtistGrid artists={this.props.artists} />
            </div>
        )
    }

}

export default RateMovie;