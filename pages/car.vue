<template>
    <div class="flex justify-center items-center bg-gradient-to-b from-gray-800 via-neutral-900 to-blue-950 to-stone-950 text-white p-8">
      <div class="fixed top-0 left-0">
        <button class="mt-4 ml-2" @click="Back">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </div>

      <!-- Rectángulo central -->
      <div class="p-4 md:p-8 lg:p-12 xl:p-24 bg-gradient-to-b from-gray-700 via-neutral-900 to-blue-950 to-stone-900 rounded-xl mb-48 mt-8">
        <div class="text-white">
          <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 mr-2">Mi Carrito</h1>
            <div class="flex items-center mb-4 mt-4 text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-12 animate-slide">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />        
              </svg>
            </div>        
            <p class="mb-4">GOING - ¡Llega hasta tu casa!</p>
    
            <!-- SLIDER CARRITO -->
            <button class="grid grid-cols-1">
              <div v-for="(product, index) in products" :key="index" class="shadow-md relative">
                <!-- Icono de X -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="absolute top-5 right-5 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 text-gray-500 hover:text-red-500 cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>

                <!-- Contenido del botón -->
                <div class="flex items-center justify-center bg-white py-4 md:py-6 lg:py-8 xl:py-10 px-4 md:px-6 lg:px-8 xl:px-10">
                  <div class="flex items-center justify-center w-20">
                    <img :src="product.img" alt="Img. Del producto" class="h-16 md:h-20 xl:h-24 w-auto">
                  </div>
                  <div class="ml-4 w-full text-right">
                    <p class="text-xs md:text-sm lg:text-base xl:text-lg text-black ml-auto">{{ product.description }}</p>
                    <p class="text-base md:text-lg lg:text-xl xl:text-2xl text-rose-950 ml-auto">{{ product.price }}</p>
                  </div>
                </div>
              </div>
            </button>
        </div>
      </div>     

      <!-- Barra estática en la parte inferior -->
      <div class="fixed bottom-0 bg-gray-600 text-white px-12 py-4 w-full">
        <div class="grid grid-cols-2 gap-8">
          <div class="text-left">
            <p class="text-base">Producto:</p>
            <p class="text-base">Envío:</p>
            <p class="text-xl font-bold">Total:</p>
          </div>
          <div class="text-right">
            <p class="text-base" v-for="(buy, index) in buys" :key="index">{{ buy.Producto }}</p>
            <p class="text-base text-green-300" v-for="(buy, index) in buys" :key="index">{{ buy.Envio }}</p>
            <p class="text-xl ml-auto font-bold" v-for="(buy, index) in buys" :key="index">{{ buy.Total }}</p>
          </div>       
        </div>

        <div class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50" v-if="showCouponInput" @click="toggleCouponInput">
    <div class="bg-white p-4 rounded-lg">
      <input type="text" placeholder="Introduce tu cupón" class="border border-gray-300 p-2 rounded-md text-black" @click.stop>

    </div>
  </div>
        <div class="flex justify-start mt-4 mb-6"> 
          <button class="flex text-emerald-200" @click="toggleCouponInput">
    <!-- Ícono del cupón -->
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
    </svg>
    <span>Agregar cupón</span>
  </button>
        </div>  
        <div class="flex justify-center mt-2">
          <button class="bg-green-500 px-4 py-2 rounded-xl w-full animate-bounce">Completar envío</button>
        </div>  
      </div>      
    </div>
</template>



<script>
export default {
  data() {
    return {
      showCouponInput: false,
      //Productos destacados
      //Importante * para la descripción solamente se permiten 79 caracteres como maximo.
      products: [
        { description: 'Galletas goting en forma de estrella', price: '$10.00', img:'/_nuxt/assets/PruebaUno.png'},
        { description: 'Bebida Going de 500ml _ energetizante', price: '$30.00', img:'/_nuxt/assets/drink.png'},
        { description: 'Libreta con pasta de cuero de caballo', price: '$40.00', img:'/_nuxt/assets/libreta.png'},
        { description: 'Mochila escolar femenina de 10 a 15 años', price: '$50.00', img:'_nuxt/assets/mochila.png'},
        { description: 'Tenis rojos GOING talla 27 cm con suela de hule', price: '$60.00', img:'/_nuxt/assets/tenis.png'},
        { description: 'Collar con dije en forma de corazón GOING', price: '$70.00', img:'/_nuxt/assets/collar.png'},
        { description: 'Hamburguesa cheveRe sencilla de una sola pieza de carne', price: '$45.00', img:'/_nuxt/assets/hamburguesa.png'},
        { description: '1 kilo de tortillas', price: '$12.00', img:'/_nuxt/assets/tortillas.png'},
        { description: 'Tarro de michelada con o sin clamato y cerveza de su preferencia', price: '$40.00', img:'/_nuxt/assets/michelada.png'},
      ],
      
      //Para terminar de realizar el pedido
      buys: [
        { Producto: '$357.00', Envio: 'Gratis', Total: '$357.00'},      
      ],
    };
  },
  methods: {
    Back() {
      // Navegar a la otra página utilizando Vue Router
      this.$router.push('/');
    },
    toggleCouponInput() {
    this.showCouponInput = !this.showCouponInput;
  }
  }
};
</script>

<style>
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .animate-slide {
    animation: slide 2s infinite;
  }
</style>