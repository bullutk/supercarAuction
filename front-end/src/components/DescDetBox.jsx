import React,{ Component } from 'react';
import ItemDescription from './ItemDescription';
import ShippingDetails from './ShippingDetails';
import PaymentDetails from './PaymentDetails';
import AdditionalInfo from './AdditionalInfo';
import SellerPolicy from './SellerPolicy';

class DescDetBox extends Component{
	render(){
		return(
			<div className="col-xs-6">
				<ItemDescription />
				<ShippingDetails />
				<PaymentDetails />
				<AdditionalInfo />
				<SellerPolicy />
				<SellerPolicy />
				<SellerPolicy />
			</div>
		)
	}
}



export default DescDetBox;

