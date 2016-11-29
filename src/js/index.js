import Vue from 'vue';

import {createStore, applyMiddleware} from 'redux';
import initialState from './initialState';
import reducer from './reducer'
import logger from "redux-logger"
import colorSwatches from './components/colourSwatches'
import addColour from './components/addColour'
import addName from './components/addName'

const middleware = applyMiddleware(logger());
const store = createStore(reducer, middleware);

let state;
let colorsContainer;	

//sets up our initial list of colors from default
store.dispatch({
	type: "INITIAL", payload:initialState
});


// set the state for initial load
state = store.getState();

//listen to store changes
store.subscribe(function () {
  //update state and vue model
  state = store.getState();
  colorsContainer.colours = state.colours;
  colorsContainer.selected = state.selectedColour;

});


function actionMixin() {
  return {
    methods: {
      /**
       * a generic event handler for dispatching events from internal components
       */
      dispatchAction: function (action, payload) {

        console.log('action is ' + action + ' action payload is' + payload);
		
        store.dispatch({type:action, payload:payload})
      }
    }
  }
};
console.log('selected colour ', state.colours);
colorsContainer = new Vue({
	el: '#app',
	mixins: [actionMixin()],
	data: {
		colours: state.colours,
    	selected: state.selectedColour,
		name: state.name,
		
	}
});

