import Vue from 'vue';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer'
import logger from "redux-logger";

/*
const reducer = (state=[], action) => {
	if (action.type === 'TEST_ACTION') {
		console.log('payload is', action.payload);
		state = state.concat(action.payload);
		console.log(state)
		return state;
	}
}*/

const middleware = applyMiddleware(logger());
const store = createStore(reducer, middleware);

const initialState = [ { colour: 'red', availability: 'unavailable' },
            { colour: 'teal', availability: 'available' },
            { colour: 'blue', availability: 'unavailable' },
            { colour: 'yellow', availability: 'available' },
            { colour: 'green', availability: 'unavailable' },
            { colour: 'black', availability: 'available' } ]
	


store.dispatch({
	type: "ADD_COLOURS", payload: initialState 
});


let state;
// set the state for initial load
state = store.getState();
let colorsContainer;


store.subscribe(function () {
  //update state and vue model
  state = store.getState();
  colorsContainer.colours = state.colours;
});

/*
//export an add color action
export function addColorAction(type, payload) {
	store.dispatch({
		type: type, 
		payload: payload
	})
}
*/
function actionMixin() {
  return {
    methods: {
      /**
       * a generic event handler for dispatching events from internal components
       * @param  string a    the action name
       * @param  array args rest parameter for accepting arguments from the event
       */
      dispatchAction: function (action, payload) {

        console.log('action payload is', payload);

        store.dispatch({type:action, payload:payload})
      }
    }
  }
};


export function init() {
  
  colorsContainer = new Vue({
  	el: '#app',
  	mixins: [actionMixin()],
  	data: {
  		colours: state.colours,
  	}

  });

}



/*
export function addOne(n){
	return n + 1;
}


export function addTwo(n) {
	return n + 2;	
}*/
