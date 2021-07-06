import React from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            isRegistered: false,
            registerFailed: false,
            registerFailedmsg: "",
            firstname: "",
            lastname: "",
            contact: "",
            password: "",
            email: ""
        }
    }
   
    //This method handles the register request made by user
    //Data is sent through POST request
    onSubmitHandler = (e) => {
        let param = {
            email_address: this.state.email,
            first_name: this.state.firstname,
            last_name: this.state.lastname,
            mobile_number: this.state.contact,
            password: this.state.password
        }
        fetch("http://localhost:8085/api/v1/signup", {

            method: 'POST',
            body: JSON.stringify(param),
            headers: new Headers({
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            if (data.status === "ACTIVE") {
                //If the Registration is successful state is changed
                let newstate = { ...this.state }
                newstate.isRegistered = true;
                this.setState(newstate);
            }
            else {
                //If the registration fails, the registerFailedmsg message is displayed with the failure reason
                const newstate = { ...this.state };
                newstate.isRegistered = false;
                newstate.registerFailed = true;
                newstate.registerFailedmsg = data.message;
                this.setState(newstate);
            }

        })
        e.preventDefault()
    }


    onChangeHandler = function (e) {
        const st = { ...this.state }
        st[e.target.name] = e.target.value;
        this.setState(st);
    }

    //This will display the text when the registration is successful
    RegisterText = function (props) {
        if (props.isRegistered === false) {
            return (
                <span></span>
            )
        }
        return (
            <span>
                <label style={{ color: "green" }}>Registration Successful !! Please Login!</label>
            </span>
        )
    }

    //This will display the failure message when the registration fails
    RegisterFailText = function (props) {
        if (props.registerFailed === false) {
            return (
                <span></span>
            )
        }
        return (
            <span>
                <label style={{ color: "red", width: "200px", display: "inline-block" }}>{props.registerFailedmsg}</label>

            </span>
        )
    }
    render() {
        return (
            <span align="center">
                <ValidatorForm className="registration-form" onSubmit={this.onSubmitHandler} >
                    <TextValidator
                        id="firstname"
                        label="First Name*"
                        type="text"
                        name="firstname"
                        onChange={this.onChangeHandler.bind(this)}
                        value={this.state.firstname}
                        validators={['required']}
                        errorMessages={["Required"]}
                    >
                    </TextValidator>

                    <TextValidator
                        id="lastname"
                        label="Last Name*"
                        type="text"
                        name="lastname"
                        onChange={this.onChangeHandler.bind(this)}
                        value={this.state.lastname}
                        validators={['required']}
                        errorMessages={["Required"]}
                    >
                    </TextValidator>
                    <TextValidator
                        id="email"
                        label="Email*"
                        type="email"
                        name="email"
                        onChange={this.onChangeHandler.bind(this)}
                        value={this.state.email}
                        validators={['required']}
                        errorMessages={["Required"]}
                    >
                    </TextValidator>
                    <TextValidator
                        id="password"
                        label="Password*"
                        type="password"
                        name="password"
                        onChange={this.onChangeHandler.bind(this)}
                        value={this.state.password}
                        validators={['required']}
                        errorMessages={["Required"]}
                    >
                    </TextValidator>
                    <TextValidator
                        id="contact"
                        label="Contact No.*"
                        type="text"
                        name="contact"
                        onChange={this.onChangeHandler.bind(this)}
                        value={this.state.contact}
                        validators={['required']}
                        errorMessages={["Required"]}
                    >
                    </TextValidator>
                    <br />
                    <this.RegisterFailText registerFailed={this.state.registerFailed} registerFailedmsg={this.state.registerFailedmsg} />
                    <this.RegisterText isRegistered={this.state.isRegistered} />
                    <br />
                    <Button variant="contained" color="primary" type="submit">
                        REGISTER
                    </Button>
                    <br />
                    
                </ValidatorForm>
            </span>
        )
    }
}
export default Register;