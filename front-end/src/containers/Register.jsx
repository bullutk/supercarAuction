import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import RegisterAction from '../actions/RegisterAction';
import {connect } from 'react-redux';

class Register extends Component{
	constructor(props) {
		super(props);
		this.registerForm = this.registerForm.bind(this);
		this.state = {
			registrationResponse: "",
			message: ""
		}
	}

	registerForm(event){
		event.preventDefault();
		if(event.target[1].value === event.target[2].value){
			this.props.registerAction({
				username: event.target[0].value,
				password: event.target[1].value,
				email: event.target[3].value,
				name: event.target[4].value
			});
		}else{
			this.setState({
				message: "password does not match"
			});
		}

	}
	componentDidUpdate(){
		if(this.props.registerResponse.msg === "userNameTaken"){
			this.setState({
				message: "User name is taken"
			})
		}else if(this.props.registerResponse.msg === "userInserted"){
			this.setState({
				message: "Your account has been created!"
			})
		}
	}

	render(){
		return (
			<div>
				<h1>{this.state.message}</h1>
				<form onSubmit={this.registerForm}>
					<input type="text" placeholder="User Name" />
					<input type="password" placeholder="Enter Password" />
					<input type="password" placeholder="Enter Password Again" />
					<input type="text" placeholder="Email" />
					<input type="text" placeholder="First and Last Name" />
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



