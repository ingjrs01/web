var urlAPI = 'https://api.randomuser.me/?results=50';

const app = new Vue({
    el: '#main',

    mounted: function(){
        this.consultarAPI();
    },

    data: {
        personas: []
    },

    methods: {
        consultarAPI: function() {
            this.$http.get(urlAPI)
                .then(function(respuesta){
                    //console.log(respuesta);
                    this.personas = respuesta.data.results;
                });
        }
    },

    components: {
        'personas': {
            template: '#personas-template',
            props: ['lista']
        }
    }
});