import React,{ Component } from 'react';
import Thumbnail from './Thumbnail';

class ThumbnailBox extends Component{
	render(){
		return(
			<div className="col-xs-2">
				<Thumbnail />
				<Thumbnail />
				<Thumbnail />
				<Thumbnail />
				<Thumbnail />
				<Thumbnail />
			</div>
		)
	}
}



export default ThumbnailBox;