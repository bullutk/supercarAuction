//actions ALWAYS returns an object

import $ from 'jquery';

export default function(){
	var thePromise = $.getJSON('http://localhost:3000/GetHomeAuctions')

	return{
		type: "GET_HOME",
		payload: thePromise
	}
}