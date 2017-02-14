import React,{ Component } from 'react';
import Logo from './Logo';
import AboutUs from './AboutUs';
import StoreNav from './StoreNav';
import SupercarAuctionLinks from './SupercarAuctionLinks';

class NavBar extends Component{
	render(){
		return(
			<div className='col-xs-4'>
				NavBar
				<Logo />
				<AboutUs />
				<StoreNav />
				<SupercarAuctionLinks />
			</div>
		)
	}
}



export default NavBar;