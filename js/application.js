new Vue({
    el: '#main',
    data: {
        idiomas: ['es','en'],
        idioma: 'es',
        alergenos: {
            moluscos:  'img_menu/moluscos.png',
            crustaceos:'img_menu/crustaceos.png',
            gluten:    'img_menu/gluten.png',
            huevos:    'img_menu/huevos.png',
            pescado:   'img_menu/pescado.png',
            cacahuetes:'img_menu/cacahuetes.png',
            soja:      'img_menu/soja.png',
            lacteos:   'img_menu/lacteos.png',
            cascara:   'img_menu/cascara.png',
            mostaza:   'img_menu/mostaza.png',
            sesamo:    'img_menu/sesamo.png',
            sulfitos:  'img_menu/sulfitos.png',
            altramuces:'img_menu/altramuces.png',
            apio:      'img_menu/apio.png',
        },
        platos_es: [
            {
                titulo: 'Navajas',
                descripcion: 'Preparadas a la plancha con nuestra salsa',
                fotografia: 'img_menu/navajas.jpg', 
                precio: '14', 
                alergenos: ['moluscos']
            },
            {
                titulo: 'Zamburiñas',
                descripcion: '',
                fotografia: 'img_menu/zamburinas.jpg', 
                precio: '14', 
                alergenos: ['moluscos']
            },
            {
                titulo: 'Gambas',
                descripcion: 'Gambas fritas',
                fotografia: 'img_menu/gambas.jpg', 
                precio: '12', 
                alergenos: ['crustaceos']
            },
            {
                titulo: 'Pulpo',
                descripcion: 'Preparado al estilo tradicional',
                fotografia: 'img_menu/pulpo.jpg', 
                precio: '14', 
                alergenos: ['moluscos']
            },
            {
                titulo: 'Calamares',
                descripcion: 'Rebozados y fritos',
                fotografia: 'img_menu/calamares.jpg', 
                precio: '9', 
                alergenos: ['moluscos','gluten']
            },
            {
                titulo: 'Croquetas',
                descripcion: 'Caseras, de pulpo, carne o jamón',
                fotografia: 'img_menu/croquetas.jpg', 
                precio: '4', 
                alergenos: ['moluscos','lacteos','gluten']
            },
            {
                titulo: 'Ensalada',
                descripcion: 'Ensalada de lechuga, tomate y cebolla',
                fotografia: 'img_menu/ensalada.jpg', 
                precio: '3', 
                alergenos: ['sulfitos']
            },
            {
                titulo: 'Ensalada Mixta',
                descripcion: 'Con lechuga, tomate, cebolla, atún, huevo, maiz y espárragos',
                fotografia: 'img_menu/mixta.jpg', 
                precio: '4', 
                alergenos: ['sulfitos','pescado','huevos']
            },
            {
                titulo: 'Pimientos de Padrón',
                descripcion: 'Simplemente deliciosos',
                fotografia: 'img_menu/pimientos.jpg', 
                precio: '4', 
                alergenos: []
            },
            {
                titulo: 'Oreja',
                descripcion: 'Preparada a la gallega',
                fotografia: 'img_menu/oreja.jpg', 
                precio: '5', 
                alergenos: []
            },
            {
                titulo: 'Chorizitos',
                descripcion: 'Freídos en aceite de oliva o en vino albariño',
                fotografia: 'img_menu/chorizos.jpg', 
                precio: '5', 
                alergenos: ['sulfitos','lacteos','soja']
            },
            {
                titulo: 'Tortilla',
                descripcion: 'Simplemente pruébala',
                fotografia: 'img_menu/tortilla.jpg', 
                precio: '9', 
                alergenos: ['huevos']
            },
            {
                titulo: 'Zorza',
                descripcion: 'Un plato único, carne adobada',
                fotografia: 'img_menu/zorza.jpg', 
                precio: '9', 
                alergenos: ['sulfitos']
            },
            {
                titulo: 'Lomo con Pimientos',
                descripcion: 'Preparadas a la plancha con nuestra salsa',
                fotografia: 'img_menu/lomo.jpg', 
                precio: '9', 
                alergenos: ['soja']
            },
            {
                titulo: 'Richada',
                descripcion: 'Una carne acompañada de pimientos',
                fotografia: 'img_menu/richada.jpg', 
                precio: '10', 
                alergenos: []
            },
            {
                titulo: 'Churrasco de Ternera',
                descripcion: '',
                fotografia: 'img_menu/churrasco.jpg', 
                precio: '14', 
                alergenos: []
            },
            {
                titulo: 'Jamón Asado',
                descripcion: '',
                fotografia: 'img_menu/asado.jpg', 
                precio: '14', 
                alergenos: ['crustaceos','huevos','apio','gluten','pescado','soja','lacteos']
            },
        ],
        platos_en: [
            {
                titulo: 'Razor Shells',
                descripcion: 'Preparadas a la plancha con nuestra salsa',
                fotografia: 'img_menu/navajas.jpg', 
                precio: '14', 
                alergenos: ['moluscos']
            },
            {
                titulo: 'Variegated scallop',
                descripcion: '',
                fotografia: 'img_menu/zamburinas.jpg', 
                precio: '14', 
                alergenos: ['moluscos']
            },
            {
                titulo: 'Prawns',
                descripcion: 'Gambas fritas',
                fotografia: 'img_menu/gambas.jpg', 
                precio: '12', 
                alergenos: ['crustaceos']
            },
            {
                titulo: 'Octupus',
                descripcion: 'Preparado al estilo tradicional',
                fotografia: 'img_menu/pulpo.jpg', 
                precio: '14', 
                alergenos: ['moluscos']
            },
            {
                titulo: 'Squids',
                descripcion: 'Rebozados y fritos',
                fotografia: 'img_menu/calamares.jpg', 
                precio: '9', 
                alergenos: ['moluscos','gluten']
            },
            {
                titulo: 'Croquettes',
                descripcion: 'Caseras, de pulpo, carne o jamón',
                fotografia: 'img_menu/croquetas.jpg', 
                precio: '4', 
                alergenos: ['moluscos','lacteos','gluten']
            },
            {
                titulo: 'Salad',
                descripcion: 'Ensalada de lechuga, tomate y cebolla',
                fotografia: 'img_menu/ensalada.jpg', 
                precio: '3', 
                alergenos: ['sulfitos']
            },
            {
                titulo: 'Mixed Salad',
                descripcion: 'Con lechuga, tomate, cebolla, atún, huevo, maiz y espárragos',
                fotografia: 'img_menu/mixta.jpg', 
                precio: '4', 
                alergenos: ['sulfitos','pescado','huevos']
            },
            {
                titulo: 'Green Peppers',
                descripcion: 'Simplemente deliciosos',
                fotografia: 'img_menu/pimientos.jpg', 
                precio: '4', 
                alergenos: []
            },
            {
                titulo: 'Pork Ear',
                descripcion: 'Preparada a la gallega',
                fotografia: 'img_menu/oreja.jpg', 
                precio: '5', 
                alergenos: []
            },
            {
                titulo: 'Sausage',
                descripcion: 'Freídos en aceite de oliva o en vino albariño',
                fotografia: 'img_menu/chorizos.jpg', 
                precio: '5', 
                alergenos: ['sulfitos','lacteos','soja']
            },
            {
                titulo: 'Omelette',
                descripcion: 'Simplemente pruébala',
                fotografia: 'img_menu/tortilla.jpg', 
                precio: '9', 
                alergenos: ['huevos']
            },
            {
                titulo: 'Zorza',
                descripcion: 'Un plato único, carne adobada',
                fotografia: 'img_menu/zorza.jpg', 
                precio: '9', 
                alergenos: ['sulfitos']
            },
            {
                titulo: 'Loin with peppers',
                descripcion: 'Preparadas a la plancha con nuestra salsa',
                fotografia: 'img_menu/lomo.jpg', 
                precio: '9', 
                alergenos: ['soja']
            },
            {
                titulo: 'Steak',
                descripcion: 'Una carne acompañada de pimientos',
                fotografia: 'img_menu/richada.jpg', 
                precio: '10', 
                alergenos: []
            },
            {
                titulo: 'Grilled skirt steak',
                descripcion: '',
                fotografia: 'img_menu/churrasco.jpg', 
                precio: '14', 
                alergenos: []
            },
            {
                titulo: 'Roast ham',
                descripcion: '',
                fotografia: 'img_menu/asado.jpg', 
                precio: '14', 
                alergenos: ['crustaceos','huevos','apio','gluten','pescado','soja','lacteos']
            },
        ],
        platos: [],
    },
    methods: {
        switchLang(idioma) {
            let pepe = "hola";
            this.idioma = idioma
            if (idioma == 'es') 
                this.platos = this.platos_es;
            else
                this.platos = this.platos_en;
        }
    },
    created() {
        console.log("Iniciada la página");
        this.switchLang();
        this.platos = this.platos_es;
    }


});