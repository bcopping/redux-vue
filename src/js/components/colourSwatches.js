import Vue from 'vue';

var componentState = {
	hoverColour: '',
    notHovering: true,
}

export default Vue.component('colour-swatch', {
  props: ['colours', 'selected'],
 
  template: `
    <div class="colourSwatchWrapper">
        <div v-for="colour in colours" 
        v-bind:class="colour.availability" 
        v-text="colour.colour"
        v-on:mouseover="onSwatchHover(colour.colour)"
        v-on:mouseleave="onSwatchLeave"
        v-on:click="onSwatchClick(colour.colour)"></div>

        <br /><hr />
        <div>Selected Color: <span v-show="notHovering">{{selectedColour}}</span><span>{{hoverColour}}</span></div>
    </div>`,
    data: function(){
    	return componentState
    },
    methods: {
        onSwatchClick: function(payload) {
            //set the selected colour in the state (other components rely on this and would need to react to it)
            this.$emit('action','CHANGE_VARIANT', payload);
        },
        onSwatchHover: function(i) {
            this.hoverColour = i
            this.notHovering = false
        },
        onSwatchLeave: function() {
            this.hoverColour = ''
            this.notHovering = true
        }
    },
    computed: {
        selectedColour: function(){
            console.log('this selected is', this.selected)
            return this.selected;
        }
    }
});