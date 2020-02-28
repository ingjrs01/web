Vue.component('example-component',{
  template: '#example-template',
  data: function() {
    return {
      id: 1,
      nombre: 'Juan',
    }
  },
  methods: {
      agregarTarea: function() {
        console.log("Probando cosas")
      }
  }
});

const app = new Vue({
    el: '#main',
});
