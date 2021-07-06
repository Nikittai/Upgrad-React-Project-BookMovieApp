
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import './form.css';
import '../common/header/Header.css'
import LoginRegister from './LoginRegister';


//This method set the visibility of bookshow button on the basis of value received from props
//Also this method will define the behaviour of BookShow button on the basis of user LOGIN/LOGOUT status
//If the user is logged in, it will display the book show component otherwise it will show Login/Register popover
const BookShowButton = (props) => {
    if (false === props.val.bookShow) {
        return (
            <span />
        )
    }
    else {
        const obj = { button_value: "LOGIN" };
        if (props.val.button_value === obj.button_value) {
            return (
                <Button name="Book Show" id="book-show-button" variant="contained" color="primary" {...props.trigger}>
                    BOOK SHOW
                </Button>
            )
        }
        else {
            return (
                <Button name="Book Show" id="book-show-button" variant="contained" color="primary" onClick={props.val.onClickHandlerBookShow}>
                    BOOK SHOW
                </Button>
            )
        }

    }
}

//This method is responsible for displaying Login/Register component or popover
const LoginLogoutButton = (props) => {

    const obj = { button_value: "LOGIN" };
    if (props.val.button_value === obj.button_value) {
        //When the user is not logged in login/Register page displayed
        return (
            <span>
                <Button id="login-logout-button" variant="contained" color="default" {...props.trigger} >
                    {props.val.button_value}
                </Button>
                <Popover
                    {...bindPopover(props.popupState)}
                    anchorReference="anchorPosition"
                    anchorPosition={{ top: 200, left: 750 }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',

                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',

                    }}
                >
                    <Box p={2}>
                        <Typography component={'span'}>
                            <LoginRegister onClickHandler={props.val.onClickHandler} />
                        </Typography>
                    </Box>
                </Popover>
            </span>

        )
    }
    else {
        //When the user is logged in button value is set to Logout and onClickHandlerlogout is called onClick
        return (
            <Button id="login-logout-button" variant="contained" color="default" onClick={props.val.onClickHandlerlogout}>
                {props.val.button_value}
            </Button>
        )

    }
}

export default function PopoverPopupState(props) {
    return (
        <PopupState id="login-logout-button" variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                    <LoginLogoutButton val={props} popupState={popupState} trigger={bindTrigger(popupState)} />
                    <BookShowButton val={props} popupState={popupState} trigger={bindTrigger(popupState)} />

                </div>
            )}
        </PopupState>
    );
}
