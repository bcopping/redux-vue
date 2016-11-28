import initialState from './initialState';



export default (state=initialState, action) => {
	

	if (action.type === 'ADD_COLOURS') {
		
		state = Object.assign({}, state)
		state.colours = state.colours.concat(action.payload)
		
		return state;
	}

	if (action.type === 'CHANGE_NAME') {
		
		return state = Object.assign({},state, {name: action.payload});
		//return state// = Object.assign({},state, {name: action.payload});
	}
}