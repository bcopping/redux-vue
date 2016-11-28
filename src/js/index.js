import Vue from 'vue';
import {init} from './test';




Vue.component('colour-swatch', {
  props: ['colours'],
  template: `
    <div class="colourSwatchWrapper">
        <div v-for="colour in colours" 
        v-bind:class="colour.availability" 
        v-text="colour.colour"></div>
    </div>`,
});

var addColorData = {
	availability: '',
    	colour: '',
}

Vue.component('add-colour', {
	props: [],
	template: `
    <div class="add-colours">
    	<span>Colour</span>
        <input type="text" v-model="colour"><br />
    	<span>availability</span>
    	<input type="text" v-model="availability"><br />
    	<button @click="addColour">Add Colour</button>
    </div>`,
    data: function(){
    	return addColorData
    },
    methods: {
    	addColour: function(){
    		//console.log('add colour ', this.colour + ' add availability', this.availability);
    		const payload = {colour: this.colour, availability : this.availability};
    		//addColorAction("TEST_ACTION",  {colour: this.colour, availability : this.availability})
    		this.$emit('action','ADD_COLOURS', payload);
    	}
    }

})


init();
//module.exports = init;