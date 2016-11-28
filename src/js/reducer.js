export default (state={colours: []}, action) => {
	
	if (action.type === 'ADD_COLOURS') {
		
		state.colours = state.colours.concat(action.payload)
		
		return state;
	}
}