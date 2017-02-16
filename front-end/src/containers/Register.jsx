import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import RegisterAction from '../actions/RegisterAction';
import {connect } from 'react-redux';

class Register extends Component{
	constructor(props) {
		super(props);
		this.registerForm = this.registerForm.bind(this);
		this.state = {
			registrationResponse: ""
		}
	}

	registerForm(event){
		event.preventDefault();
		this.props.registerAction({
			username: event.target[0].value,
			password: event.target[1].value
		});
	}

	render(){
		if(this.props.registerResponse.msg === "userNameTaken"){
			var message = "User name is taken";
		}else if(this.props.registerResponse.msg === "userInserted"){
			var message = "Your account has been created!";
		}else{
			var message = "";
		}

		return (
			<div>
				<h1>{message}</h1>
				<form onSubmit={this.registerForm}>
					<input type="text" name="username" placeholder="UserName" />
					<input type="password" name="password" placeholder="Password" />
					<input className="btn btn-success" type="submit" value="Register!" />
				</form>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		registerResponse: state.register
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		registerAction: RegisterAction
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);



