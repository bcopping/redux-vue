import Vue from 'vue';

const fs = require('fs');
const template = fs.readFileSync(`${__dirname}/template.html`, 'utf8');

var componentState = {
	hoverColour: '',
    notHovering: true,
}

export default Vue.component('colour-swatch', {
  props: ['colours', 'selected'],
 
  template,
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