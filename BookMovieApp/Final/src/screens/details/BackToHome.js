import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Details.css';


class BackToHome extends React.Component {

    render() {
        return (
            <div>
                <Typography variant="h6" component="h2" id="backtohome" onClick={this.props.onClickHandlerBack}>
                    &lt; BACK TO HOME
                </Typography>
            </div>
        )
    }
}
export default BackToHome;