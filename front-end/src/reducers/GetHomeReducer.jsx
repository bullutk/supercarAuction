//RETURNS STATE!!!!!
export default function(state=[], action){
	switch(action.type){
		case "GET_HOME":
			console.log("im the gethomereducer, and some action called GET_HOME")
			return action.payload
	}
	return state;
}