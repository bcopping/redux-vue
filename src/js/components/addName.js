var addNameData = {
    	name: '',
}

//add color component
import Vue from 'vue';

export default Vue.component('add-name', {
	props: [],
	template: `
    <div class="add-name">
    	<span>Name</span>
        <input type="text" v-model="name"><br />
    	<button @click="addName">Add Name</button><hr />
    </div>`,
    data: function(){
    	return addNameData
    },
    methods: {
    	addName: function(){
    		//console.log('add colour ', this.colour + ' add availability', this.availability);
    		const payload = this.name
    		//addColorAction("TEST_ACTION",  {colour: this.colour, availability : this.availability})
    		this.$emit('action','CHANGE_NAME', payload);
    	}
    }
})

