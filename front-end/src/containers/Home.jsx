import React, { Component } from 'react';
// import MainImage from './components/MainImage.jsx';
// import DescDetBox from './components/DescDetBox';
// import NavBar from './components/NavBar';
// import ThumbnailBox from './components/ThumbnailBox';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import GetHomeAction from '../actions/GetHomeAction';


class Home extends Component{
	render(){
		this.props.getHomeData();
		console.log(this.props.homeData)
		return (
			<h1>Home</h1>
		)
	}
}

function mapStateToProps(state){
	return{
		homeData: state.home
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getHomeData: GetHomeAction
	}, dispatch)
		
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);