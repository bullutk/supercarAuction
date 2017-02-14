import React,{ Component } from 'react';
import AuctionTitle from './AuctionTitle'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class MainImage extends Component{
	render(){
		return(
			<div className="container">
				<div className="col-xs-12">
					<img className="main-image" src="https://www.base64-image.de/build/img/mr-base64-482fa1f767.png" />
					<AuctionTitle />
				</div>
			</div>
		)
	}
}



export default MainImage;