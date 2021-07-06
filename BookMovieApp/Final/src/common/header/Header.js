import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';

class header extends React.Component {

    render() {

        return (
            <div id='header'>
                <img id='logo' src={logo} alt="logo" />

            </div>
        )


    }

}
export default header;

