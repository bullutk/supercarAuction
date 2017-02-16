import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import LoginAction from '../actions/LoginAction';
import {connect } from 'react-redux';
import { hashHistory } from 'react-router';

class Login extends Component{
	constructor(props) {
		super(props);
		this.state = {
			loginResponse: "",
			message: ""
		}
		this.loginSubmit = this.loginSubmit.bind(this);
	}

	loginSubmit(event){
		event.preventDefault();
		this.props.loginAction({
			username: event.target[0].value,
			password: event.target[1].value
		})
	}

	componentDidUpdate() {
		if(this.props.loginResponse.msg === "badUsername"){
			this.setState({
				message: "User name does not exist"
			}) 
		}else if(this.props.loginResponse.msg === "foundUser"){
			hashHistory.push('/')
		}
	}

	render(){	
		return (
			<div>
				<h1>Login Page</h1>
				<h3>{this.state.message}</h3>
				<form onSubmit={this.loginSubmit}>
					<input type="text" placeholder="UserName" />
					<input type="password" placeholder="Password" />
					<input className="btn btn-success" type="submit" value="Login!" />
				</form>
			</div>
		)	
	}
}

function mapStateToProps(state){
	return{
		loginResponse: state.login
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		loginAction: LoginAction
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);