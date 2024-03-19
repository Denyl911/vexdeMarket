<template>
    <div class="bg-gradient-to-b from-gray-800 via-neutral-900 to-stone-950 h-auto p-4">
        <div class="bg-gray-600/50 rounded-xl p-4 h-auto text-white">
            Mis compras
            <div class="mt-4">
                COMPRA 1
            </div>
            <div>
                COMPRA 2
            </div>
            <!-- SLIDER CARRITO -->
            <button class="grid grid-cols-1">
              <div v-for="(product, index) in Shopping" :key="index" class="shadow-md relative">
                <!-- Icono de X -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="absolute top-5 right-5 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-8 sm:h-8 text-gray-500 hover:text-red-500 cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                <!-- Contenido del botón -->
                <div class="flex items-center justify-center bg-white py-6 md:py-8 lg:py-10 xl:py-12 px-4 md:px-6 lg:px-8 xl:px-10">
                  <div class="flex items-center justify-center w-24">
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
</template>

<script>
  export default {
    data() {
      return {
        Shopping:[
          { description: 'Galletas goting en forma de estrella', price: '$10.00', img:'/_nuxt/assets/PruebaUno.png'},
          { description: 'Bebida Going de 500ml _ energetizante', price: '$30.00', img:'/_nuxt/assets/drink.png'},
          { description: 'Libreta con pasta de cuero de caballo', price: '$40.00', img:'/_nuxt/assets/libreta.png'},
          { description: 'Mochila escolar femenina de 10 a 15 años', price: '$50.00', img:'_nuxt/assets/mochila.png'},
          { description: 'Tenis rojos GOING talla 27 cm con suela de hule', price: '$60.00', img:'/_nuxt/assets/tenis.png'},
          { description: 'Collar con dije en forma de corazón GOING', price: '$70.00', img:'/_nuxt/assets/collar.png'},
          { description: 'Hamburguesa cheveRe sencilla de una sola pieza de carne', price: '$45.00', img:'/_nuxt/assets/hamburguesa.png'},
          { description: '1 kilo de tortillas', price: '$12.00', img:'/_nuxt/assets/tortillas.png'},
          { description: 'Tarro de michelada con o sin clamato y cerveza de su preferencia', price: '$40.00', img:'/_nuxt/assets/michelada.png'},
        ]
      }
    }
  }
</script>
