var addColorData = {
	availability: null,
    	colour: '',
}

//add color component
import Vue from 'vue';

export default Vue.component('add-colour', {
	props: [],
	template: `
    <div class="add-colours">
    	<span>Colour</span>
        <input type="text" v-model="colour"><br />
    	<span>availability</span>
    	<input type="text" v-model="availability"><br />
    	<button @click="addColour">Add Colour</button><hr />
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

