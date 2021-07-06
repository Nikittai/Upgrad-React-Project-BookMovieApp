import React from 'react';
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            loginFailed:false,
            loginFailedmsg:"",
            username:'',
            password:''
        }
    }
    
    //On clicking on the login button, sending the entered username and password in the request
    onSubmitHandler = (event) => {

         const param = window.btoa(`${this.state.username}:${this.state.password}`);
  
     
         fetch("http://localhost:8085/api/v1/auth/login", {
          
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept':'application/json;charset=UTF-8',
            
                "authorization":`Basic ${param}`
              })
        }).then(
            (response) => response.json()
        ).then((data) => {
            if(data.status==="ACTIVE"){
               //When the login is successful or the login credentials are correct
               //Setting the value of the button to LOGOUT and storing the access-token
                const newstate = {
                    sessionToken : data.sessionToken,
                    button_value : 'LOGOUT'
                }
                this.props.onClickHandler(newstate);
            }
            else{
                //When the login credentials are not correct
                //updating the state variables as per the response message received
                const newstate = {...this.state};
                newstate.loginFailed=true;
                newstate.loginFailedmsg=data.message;
                this.setState(newstate);
            }
            
        },(err)=>{
            console.log("error",err);
            
        });
     
        event.preventDefault()
    }

 
    onChangeHandler=function(e){
      const st = {...this.state}
      st[e.target.name] = e.target.value;
      this.setState(st);
    }
    
   //This text will appear when the login credential are not correct.
    LoginFailText = function (props) {
       
        if (props.loginFailed === false) {
            return (
                <div></div>
            )
        }
        return (
            <div>
                <label style={{ color: "red" ,width:"200px", display:"inline-block"}}>{props.loginFailedmsg}</label>
            </div>
        )
    }
    render(){
        return (
            <span align = "center">
               <ValidatorForm className="login-form" onSubmit={this.onSubmitHandler.bind(this)} >
                   <TextValidator
                       id="username"
                       label = "UserName*"
                       type="text"
                       name="username"
                       onChange={this.onChangeHandler.bind(this)}
                       value={this.state.username}
                       validators={['required']}
                       errorMessages={["Required"]}
                   >
                   </TextValidator>
                   <br/>
                   <TextValidator
                       id="password"
                       label = "Password*"
                       type="password"
                       name="password"
                       onChange={this.onChangeHandler.bind(this)}
                       value={this.state.password}
                       validators={['required']}
                       errorMessages={["Required"]}
                   >
                   </TextValidator>
                   <br/>
                   <br/>
                   <this.LoginFailText loginFailed={this.state.loginFailed} loginFailedmsg={this.state.loginFailedmsg}/>
                   <br/>
                   <Button variant="contained" color="primary" type="submit" >
                    LOGIN
                   </Button>
                   
                  
               </ValidatorForm>
            </span>
        )
    }
}
export default Login; 