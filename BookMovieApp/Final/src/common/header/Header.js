import React from 'react';
import './Header.css';
import PopoverPopupState from '../PopoverLoginRegister';
import logo from '../../assets/logo.svg';

class header extends React.Component {
    constructor() {
        super();
        this.state = {
            sessionToken: '',
            button_value: 'LOGIN',
        }
    }

    //Set the session as per the value of newstate passed by Login/Logout Component
    onClickHandler = function (newState) {
        this.setState(newState);
        localStorage.setItem('sessionToken', newState.sessionToken);

    }

    //Handle the log out event
    onClickHandlerlogout = function () {


        const newState = {
            sessionToken: '',
            button_value: 'LOGIN',


        }
        this.setState(newState);
        localStorage.clear();

    }


    render() {

        return (
            <div id='header'>
                <img id='logo' src={logo} alt="logo" />

                <PopoverPopupState id="login-logout-button" button_value={this.state.button_value} onClickHandler={this.onClickHandler.bind(this)}
                    onClickHandlerBookShow={this.props.onClickHandlerBookShow} sessionToken={this.state.sessionToken} bookShow={this.props.bookShow}
                    onClickHandlerlogout={this.onClickHandlerlogout.bind(this)} />

            </div>
        )


    }

}
export default header;

