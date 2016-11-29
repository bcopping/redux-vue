//import initialState from './initialState';

export default (state, action) => {
	
	
	if (action.type === 'INITIAL') {
		
		state = Object.assign({}, action.payload)
		
		state.colours = action.payload.colours
		
		return state;
	}

	if (action.type === 'ADD_COLOURS') {
		
		state = Object.assign({}, state)
		state.colours = state.colours.concat(action.payload)
		
		return state;
	}

	if (action.type === 'CHANGE_NAME') {
		
		return state = Object.assign({},state, {name: action.payload});
		//return state// = Object.assign({},state, {name: action.payload});
	}

	if (action.type === 'CHANGE_VARIANT') {
		console.log('change variant');
		return state = Object.assign({},state, {selectedColour: action.payload});
		//return state// = Object.assign({},state, {name: action.payload});
	}
}