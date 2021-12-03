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
                precio_p: '9',
                alergenos: ['moluscos']
            },
            {
                titulo: 'Zamburiñas',
                descripcion: '',
                fotografia: 'img_menu/zamburinas.jpg', 
                precio: '15', 
                precio_p: '10',
                alergenos: ['moluscos']
            },
            {
                titulo: 'Gambas',
                descripcion: 'Gambas fritas',
                fotografia: 'img_menu/gambas.jpg', 
                precio: '12', 
                precio_p: '8',
                alergenos: ['crustaceos']
            },
            {
                titulo: 'Pulpo',
                descripcion: 'Preparado al estilo tradicional',
                fotografia: 'img_menu/pulpo.jpg', 
                precio: '16', 
                precio_p: '10',
                alergenos: ['moluscos']
            },
            {
                titulo: 'Calamares',
                descripcion: 'Rebozados y fritos',
                fotografia: 'img_menu/calamares.jpg', 
                precio: '10', 
                precio_p: '7',
                alergenos: ['moluscos','gluten']
            },
            {
                titulo: 'Calamares a la Plancha',
                descripcion: '',
                fotografia: 'img_menu/calamares_plancha.jpg', 
                precio: '12', 
                precio_p: '9',
                alergenos: ['moluscos']
            },
            {
                titulo: 'Croquetas',
                descripcion: 'Caseras, de pulpo, carne o jamón',
                fotografia: 'img_menu/croquetas.jpg', 
                precio: '4', 
                precio_p: '3',
                alergenos: ['moluscos','lacteos','gluten']
            },
            {
                titulo: 'Ensalada',
                descripcion: 'Ensalada de lechuga, tomate y cebolla',
                fotografia: 'img_menu/ensalada.jpg', 
                precio: '3', 
                precio_p: '2',
                alergenos: ['sulfitos']
            },
            {
                titulo: 'Ensalada Mixta',
                descripcion: 'Con lechuga, tomate, cebolla, atún, huevo, maiz y espárragos',
                fotografia: 'img_menu/mixta.jpg', 
                precio: '4', 
                precio_p: '3',
                alergenos: ['sulfitos','pescado','huevos']
            },
            {
                titulo: 'Pimientos de Padrón',
                descripcion: 'Simplemente deliciosos',
                fotografia: 'img_menu/pimientos.jpg', 
                precio: '4', 
                precio_p: '3',
                alergenos: []
            },
            {
                titulo: 'Oreja',
                descripcion: 'Preparada a la gallega',
                fotografia: 'img_menu/oreja.jpg', 
                precio: '6',
                precio_p: '0',
                alergenos: []
            },
            {
                titulo: 'Choricitos',
                descripcion: 'Freídos en aceite de oliva o en vino albariño',
                fotografia: 'img_menu/chorizos.jpg', 
                precio: '5', 
                precio_p: '3',
                alergenos: ['sulfitos','lacteos','soja']
            },
            {
                titulo: 'Tortilla',
                descripcion: 'Simplemente pruébala',
                fotografia: 'img_menu/tortilla.jpg', 
                precio: '9', 
                precio_p: '6',
                alergenos: ['huevos']
            },
            {
                titulo: 'Zorza',
                descripcion: 'Un plato único, carne adobada',
                fotografia: 'img_menu/zorza.jpg', 
                precio: '9', 
                precio_p: '6',
                alergenos: ['sulfitos']
            },
            {
                titulo: 'Lomo con Pimientos',
                descripcion: 'Preparadas a la plancha con nuestra salsa',
                fotografia: 'img_menu/lomo.jpg', 
                precio: '9', 
                precio_p: '6',
                alergenos: ['soja']
            },
            {
                titulo: 'Richada',
                descripcion: 'Una carne acompañada de pimientos',
                fotografia: 'img_menu/richada.jpg', 
                precio: '10', 
                precio_p: '7',
                alergenos: []
            },
            {
                titulo: 'Churrasco de Ternera',
                descripcion: '',
                fotografia: 'img_menu/churrasco.jpg', 
                precio: '12', 
                precio_p: '8',
                alergenos: []
            },
            {
                titulo: 'Jamón Asado',
                descripcion: '',
                fotografia: 'img_menu/asado.jpg', 
                precio: '9', 
                precio_p: '7',
                alergenos: ['crustaceos','huevos','apio','gluten','pescado','soja','lacteos']
            },
        ],
        platos_en: [
            {
                titulo: 'Razor Shells',
                descripcion: 'Preparadas a la plancha con nuestra salsa',
                fotografia: 'img_menu/navajas.jpg', 
                precio: '14', 
                precio_p: '9',
                alergenos: ['moluscos']
            },
            {
                titulo: 'Variegated scallop',
                descripcion: '',
                fotografia: 'img_menu/zamburinas.jpg', 
                precio: '14', 
                precio_p: '9',
                alergenos: ['moluscos']
            },
            {
                titulo: 'Prawns',
                descripcion: 'Gambas fritas',
                fotografia: 'img_menu/gambas.jpg', 
                precio: '12', 
                precio_p: '8',
                alergenos: ['crustaceos']
            },
            {
                titulo: 'Octupus',
                descripcion: 'Preparado al estilo tradicional',
                fotografia: 'img_menu/pulpo.jpg', 
                precio: '14', 
                precio_p: '10',
                alergenos: ['moluscos']
            },
            {
                titulo: 'Squids',
                descripcion: 'Rebozados y fritos',
                fotografia: 'img_menu/calamares.jpg', 
                precio: '10', 
                precio_p: '7',
                alergenos: ['moluscos','gluten']
            },
            {
                titulo: 'Grilled Squid',
                descripcion: '',
                fotografia: 'img_menu/calamares_plancha.jpg', 
                precio: '12', 
                precio_p: '9',
                alergenos: ['moluscos']
            },
            {
                titulo: 'Croquettes',
                descripcion: 'Caseras, de pulpo, carne o jamón',
                fotografia: 'img_menu/croquetas.jpg', 
                precio: '4', 
                precio: '3',
                alergenos: ['moluscos','lacteos','gluten']
            },
            {
                titulo: 'Salad',
                descripcion: 'Ensalada de lechuga, tomate y cebolla',
                fotografia: 'img_menu/ensalada.jpg', 
                precio: '3', 
                precio_p: '2',
                alergenos: ['sulfitos']
            },
            {
                titulo: 'Mixed Salad',
                descripcion: 'Con lechuga, tomate, cebolla, atún, huevo, maiz y espárragos',
                fotografia: 'img_menu/mixta.jpg', 
                precio: '4', 
                precio_p: '3',
                alergenos: ['sulfitos','pescado','huevos']
            },
            {
                titulo: 'Green Peppers',
                descripcion: 'Simplemente deliciosos',
                fotografia: 'img_menu/pimientos.jpg', 
                precio: '4', 
                precio_p: '3',
                alergenos: []
            },
            {
                titulo: 'Pork Ear',
                descripcion: 'Preparada a la gallega',
                fotografia: 'img_menu/oreja.jpg', 
                precio: '6', 
                alergenos: []
            },
            {
                titulo: 'Sausage',
                descripcion: 'Freídos en aceite de oliva o en vino albariño',
                fotografia: 'img_menu/chorizos.jpg', 
                precio: '5', 
                precio_p: '3',
                alergenos: ['sulfitos','lacteos','soja']
            },
            {
                titulo: 'Omelette',
                descripcion: 'Simplemente pruébala',
                fotografia: 'img_menu/tortilla.jpg', 
                precio: '9', 
                precio_p: '6',
                alergenos: ['huevos']
            },
            {
                titulo: 'Zorza',
                descripcion: 'Un plato único, carne adobada',
                fotografia: 'img_menu/zorza.jpg', 
                precio: '9', 
                precio_p: '6',
                alergenos: ['sulfitos']
            },
            {
                titulo: 'Loin with peppers',
                descripcion: 'Preparadas a la plancha con nuestra salsa',
                fotografia: 'img_menu/lomo.jpg', 
                precio: '9', 
                precio_p: '6',
                alergenos: ['soja']
            },
            {
                titulo: 'Steak',
                descripcion: 'Una carne acompañada de pimientos',
                fotografia: 'img_menu/richada.jpg', 
                precio: '10', 
                precio_p: '7',
                alergenos: []
            },
            {
                titulo: 'Grilled skirt steak',
                descripcion: '',
                fotografia: 'img_menu/churrasco.jpg', 
                precio: '12', 
                precio_p: '8',
                alergenos: []
            },
            {
                titulo: 'Roast ham',
                descripcion: '',
                fotografia: 'img_menu/asado.jpg', 
                precio: '9', 
                precio_p: '6',
                alergenos: ['crustaceos','huevos','apio','gluten','pescado','soja','lacteos']
            },
        ],
        postres_es: [
            {
                titulo: 'Tarta Chocolate',
                descripcion: 'Tarta casera de chocolate',
                fotografia: 'img_menu/chocolate.jpg', 
                precio: '3', 
                alergenos: ['lacteos','gluten','soja','sulfitos']
            },
            {
                titulo: 'Tarta de Queso',
                descripcion: 'Tarta casera de queso',
                fotografia: 'img_menu/tarta_queso.jpg', 
                precio: '3', 
                alergenos: ['huevos','lacteos','gluten']
            },
            {
                titulo: 'Flan de Café',
                descripcion: 'Fresco y delicioso',
                fotografia: 'img_menu/tarta_cafe.jpg', 
                precio: '3', 
                alergenos: ['huevos','lacteos','gluten']
            },
            {
                titulo: 'Flan de Huevo',
                descripcion: 'Flan de huevo casero',
                fotografia: 'img_menu/flan_huevo.jpg', 
                precio: '3', 
                alergenos: ['huevos','lacteos']
            },
            {
                titulo: 'Tarta Helada',
                descripcion: 'No casera',
                fotografia: 'img_menu/tarta_helada.jpg', 
                precio: '3', 
                alergenos: ['lacteos','soja','cascara']
            },
            {
                titulo: 'Tetilla con Membrillo',
                descripcion: '',
                fotografia: 'img_menu/tetilla.jpg', 
                precio: '8', 
                alergenos: ['lacteos']
            },
            {
                titulo: 'Cañas de Crema',
                descripcion: '',
                fotografia: 'img_menu/canas_crema.jpg', 
                precio: '1,5', 
                alergenos: ['huevos','lacteos','gluten','sulfitos']
            },
        ],
        postres_en: [
            {
                titulo: 'Chocolate cake',
                descripcion: 'Tarta casera de chocolate',
                fotografia: 'img_menu/chocolate.jpg', 
                precio: '3', 
                alergenos: ['lacteos','gluten','soja','sulfitos']
            },
            {
                titulo: 'Cheesecake',
                descripcion: 'Tarta casera de queso',
                fotografia: 'img_menu/tarta_queso.jpg', 
                precio: '3', 
                alergenos: ['huevos','lacteos','gluten']
            },
            {
                titulo: 'Coffee cake',
                descripcion: 'Fresco y delicioso',
                fotografia: 'img_menu/tarta_cafe.jpg', 
                precio: '3', 
                alergenos: ['huevos','lacteos','gluten']
            },
            {
                titulo: 'Creme caramel',
                descripcion: 'Flan de huevo casero',
                fotografia: 'img_menu/flan_huevo.jpg', 
                precio: '3', 
                alergenos: ['huevos','lacteos']
            },
            {
                titulo: 'Iced cake',
                descripcion: 'No casera',
                fotografia: 'img_menu/tarta_helada.jpg', 
                precio: '3', 
                alergenos: ['lacteos','soja','cascara']
            },
            {
                titulo: 'Cheese with Quince',
                descripcion: '',
                fotografia: 'img_menu/tetilla.jpg', 
                precio: '8', 
                alergenos: ['lacteos']
            },
            {
                titulo: 'Stuffed canes os cream',
                descripcion: '',
                fotografia: 'img_menu/canas_crema.jpg', 
                precio: '1,5', 
                alergenos: ['huevos','lacteos','gluten','sulfitos']
            },
        ],
        platos: [],
        postres: [],
        tapas_label: 'Tapas',
        postres_label: 'Postres',
        alergenos_label: 'Tabla de Alérgenos',
        alergenos_img : 'img_menu/alergenos_es.png',
    },
    methods: {
        switchLang(idioma) {
            let pepe = "hola";
            this.idioma = idioma
            if (idioma == 'es') {
                this.platos = this.platos_es;
                this.postres = this.postres_es;
                this.postres_label = 'Postres';
                this.tapas_label = 'Tapas';
                this.alergenos_label= 'Tabla de Alérgenos';
                this.alergenos_img = 'img_menu/alergenos_es.png';
            }
            else {
                this.platos = this.platos_en;
                this.postres = this.postres_en;
                this.tapas_label = 'Menu';
                this.postres_label = 'Desserts'
                this.alergenos_label= 'List of Allergens';
                this.alergenos_img = 'img_menu/alergenos_en.png';
            }
        }
    },
    created() {
        console.log("Iniciada la página");
        this.switchLang();
        this.platos = this.platos_es;
        this.postres = this.postres_es;
        this.postres_label = 'Postres';
        this.tapas_label = 'Tapas';
        this.alergenos_label= 'Tabla de Alérgenos';
        this.alergenos_img = 'img_menu/alergenos_es.png';
    }


});