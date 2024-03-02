<template>
    <h3 class="text-lg text-white font-bold mb-4 mt-4">Productos destacados</h3>
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">  
        <!-- Productos -->        
        <div v-for="(product, index) in products" :key="index" class="shadow-md w-auto h-auto">          
          <button @click="Onproduct">                                 
            <div class="flex flex-col items-center justify-center bg-white w-auto h-48 rounded-lg">
                <img :src="product.img" alt="Img. Del producto" class="h-32 w-auto">
            </div>
            <div class="flex items-start h-20">
                <div class="flex flex-col items-start mt-2">
                    <p class="text-xs text-white text-left">{{ product.description }}</p>
                    <p class="text-base text-rose-200 text-left">{{ product.price }}</p>  
                </div>
            </div>
          </button>
        </div>          
      </div>
</template>

<script>
    export default{
        data() {
            return{
                products: [
                { description: 'Galletas goting en forma de estrella', price: '$10.00', img:'/_nuxt/assets/PruebaUno.png'},
                { description: 'Anillo brillante con 950 de plata de la marca GOING', price: '$20.00', img:'/_nuxt/assets/anillo.png'},
                { description: 'Bebida Going de 500ml _ energetizante', price: '$30.00', img:'/_nuxt/assets/drink.png'},
                { description: 'Libreta con pasta de cuero de caballo', price: '$40.00', img:'/_nuxt/assets/libreta.png'},
                { description: 'Mochila escolar femenina de 10 a 15 años', price: '$50.00', img:'/_nuxt/assets/mochila.png'},
                { description: 'Tenis rojos GOING talla 27 cm con suela de hule', price: '$60.00', img:'/_nuxt/assets/tenis.png'},
                { description: 'Collar con dije en forma de corazón GOING', price: '$70.00', img:'/_nuxt/assets/collar.png'},
                { description: 'Logo en formato png de la empresa GOING', price: '$80.00', img:'/_nuxt/assets/LOGODOS.png'},
                { description: 'Hamburguesa cheveRe sencilla de una sola pieza de carne', price: '$45.00', img:'/_nuxt/assets/hamburguesa.png'},
                { description: '1 kilo de tortillas', price: '$12.00', img:'/_nuxt/assets/tortillas.png'},
                { description: 'Tarro de michelada con o sin clamato y cerveza de su preferencia', price: '$40.00', img:'/_nuxt/assets/michelada.png'},
                { description: 'Cubo rubik anti-estres de 3x3 de buena calidad', price: '$60.00', img:'/_nuxt/assets/cuborubik.png'},
                { description: 'Agendar servicio de fletes y mudanzas', price: 'Cotizar', img:'/_nuxt/assets/fletes.png'},
                { description: 'Carretilla truper para la construcción', price: '$430.00', img:'/_nuxt/assets/carretilla.png'},
                { description: 'Curso de matemáticas para jovenes de 12 a 18 años de edad', price: 'Cotizar', img:'/_nuxt/assets/curso.png'},
                { description: 'Agendar cita para la barbería la PELONA', price: 'Cotizar', img:'/_nuxt/assets/servicioBarber.png'},
                { description: 'Oferta de trabajo para mesera en el restaurante QueCheve-Re', price: 'Ver oferta', img:'/_nuxt/assets/Solicitud.png'}

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