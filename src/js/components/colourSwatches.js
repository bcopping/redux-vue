import Vue from 'vue';
//color swatch list component

export default Vue.component('colour-swatch', {
  props: ['colours', 'selected'],
 
  template: `
    <div class="colourSwatchWrapper">
        <div v-for="colour in colours" 
        v-bind:class="colour.availability" 
        v-text="colour.colour"
        v-on:click="onSwatchClick(colour.colour)"></div>
        <div>Selected Color: <span>{{selectedColour}}</span></div>
    </div>`,
    
    methods: {
        onSwatchClick: function(payload) {
            console.log(payload)
            //this.selected = i
            //console.log(this.selected)
            this.$emit('action','CHANGE_VARIANT', payload);
            
        }
    },
    computed: {
        selectedColour: function(){
            console.log('this selected is', this.selected)
            return this.selected;
        }
    }
});