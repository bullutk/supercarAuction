import React, {Component} from 'react';

class Auction extends Component{
	render(){
		return(
			<div> 
				<h1>an auction</h1>
				<div className="Title">
					{this.props.item.carName}
				</div>
			</div>
		)
	}
}

export default Auction;