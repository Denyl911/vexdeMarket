<template>
    <div class="bg-black p-4">
        <h3 class="text-lg text-white font-bold mb-4">Tiendas registradas en GOING</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">  
            <!-- Productos -->        
            <div v-for="(product, index) in products" :key="index" class="shadow-md w-auto h-auto">          
            <button @click="Onproduct">                                 
                <div class="flex flex-col items-center justify-center bg-white w-auto h-48 rounded-lg">
                    <img :src="product.img" alt="Img. Del producto" class="h-48 w-auto rounded-lg">
                </div>
                <div class="flex items-start h-12 w-40">
                    <div class="flex flex-col items-start mt-2">
                        <p class="text-base text-white text-left">{{ product.name }}</p> 
                    </div>
                </div>
            </button>
            </div>          
        </div>
    </div>        
</template>

<script>
    export default{
        data() {
            return{
                //Productos destacados
                //Importante * para la descripción solamente se permiten 79 caracteres como maximo.
                products: [
                { name: 'GalleTon', img:'/vexdeMarket/assets/assets/PruebaUno.png'},
                { name: 'Joyeria', img:'/vexdeMarket/assets/assets/anillo.png'},
                { name: 'Tony', img:'/vexdeMarket/assets/assets/drink.png'},
                { name: 'Peleria sonic', img:'/vexdeMarket/assets/assets/libreta.png'},
                { name: 'Monchos', img:'/vexdeMarket/assets/assets/mochila.png'},
                { name: 'Calzado Any', img:'/vexdeMarket/assets/assets/tenis.png'},
                { name: 'Joyeria', img:'/vexdeMarket/assets/assets/collar.png'},
                { name: 'Logos', img:'/vexdeMarket/assets/assets/LOGODOS.png'},
                { name: 'CheveRe', img:'/vexdeMarket/assets/assets/hamburguesa.png'},
                { name: 'Tortilleria Juan', img:'/vexdeMarket/assets/assets/tortillas.png'},
                { name: 'QueCheveRe', img:'/vexdeMarket/assets/assets/michelada.png'},
                { name: 'Chacharas', img:'/vexdeMarket/assets/assets/cuborubik.png'},
                { name: 'Fletes y mudanzas', img:'/vexdeMarket/assets/assets/fletes.png'},
                { name: 'Ferreteria Zamora', img:'/vexdeMarket/assets/assets/carretilla.png'},
                { name: 'Escuela VIN', img:'/vexdeMarket/assets/assets/curso.png'},
                { name: 'Barberia Lok', img:'/vexdeMarket/assets/assets/servicioBarber.png'},
                { name: 'Line', img:'/vexdeMarket/assets/assets/Solicitud.png'}

                // Puedes agregar más productos aquí
                ],
            }
        },
        methods: {
            Onproduct() {
                // Navegar a la otra página utilizando Vue Router
                this.$router.push('/products/product');
            },
        },
    };
</script>