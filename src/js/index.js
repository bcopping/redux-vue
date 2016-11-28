import Vue from 'vue';

import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer'
import logger from "redux-logger";
import colorSwatches from './components/colourSwatches'
import addColour from './components/addColour'
import addName from './components/addName'

const middleware = applyMiddleware(logger());
const store = createStore(reducer, middleware);

const defaultValues = [ 
  { colour: 'red', availability: 'available' },
  { colour: 'teal', availability:   'available'},
  { colour: 'blue', availability:  'available' },
  { colour: 'yellow', availability:  'available' },
  { colour: 'green', availability:  'available' },
  { colour: 'black', availability:  'available' } ]

let state;
let colorsContainer;	

//sets up our initial list of colors from default
store.dispatch({
	type: "ADD_COLOURS", payload: defaultValues
	 
});

// set the state for initial load
state = store.getState();

//listen to store changes
store.subscribe(function () {
  //update state and vue model
  state = store.getState();
  colorsContainer.colours = state.colours;

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

colorsContainer = new Vue({
	el: '#app',
	mixins: [actionMixin()],
	data: {
		colours: state.colours,
    name: state.name,
	}
});

