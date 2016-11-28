import Vue from 'vue';
//color swatch list component

export default Vue.component('colour-swatch', {
  props: ['colours'],
  template: `
    <div class="colourSwatchWrapper">
        <div v-for="colour in colours" 
        v-bind:class="colour.availability" 
        v-text="colour.colour"></div>
    </div>`,
});