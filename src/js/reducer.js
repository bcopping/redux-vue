import initialState from './initialState';



export default (state=initialState, action) => {
	

	if (action.type === 'ADD_COLOURS') {
		console.log('colours', state.colours);
		//console.log('action payload is', action.payload)
		state.colours = state.colours.concat(action.payload)
		console.log('colours is now ', state.colours);
		//return {...state, colours: action.payload}
		//return state = Object.assign({},state, {colours: action.payload});
		return state;
	}

	if (action.type === 'CHANGE_NAME') {
		return state = Object.assign({},state, {name: action.payload});
	}
}