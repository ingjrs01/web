Vue.component('example-component',{
  template: '#example-template',
  data: function() {
    return {
      id: 1,
      nombre: 'Juan',
    }
  },
  methods: {
      dale() {
        console.debug("bla bla bla");
      }      
  }
});

const app = new Vue({
    el: '#main',
});
