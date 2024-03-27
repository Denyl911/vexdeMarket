<template>
    <div class="bg-gradient-to-b from-gray-800 via-neutral-900 to-stone-950 h-auto p-4">
      <h1 class="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">Mis compras</h1>
        <div class="bg-gray-600/50 rounded-xl p-4 h-auto flex items-center justify-center">
            
            <button class="grid grid-cols-1">
              <div v-for="(product, index) in Shopping" :key="index" class="shadow-md relative">
                <!-- Contenido del botón -->
                <div class="flex items-center justify-center bg-white py-6 md:py-8 lg:py-10 xl:py-12 px-4 md:px-6 lg:px-8 xl:px-10">
                  <div class="flex items-center justify-center w-24">
                    <img :src="product.img" alt="Img. Del producto" class="h-16 md:h-20 xl:h-24 w-auto">
                  </div>
                  <div class="ml-4 w-full text-right">
                    <div class="mb-8">
                      <button type="button" @click="agregarTarjeta" class="text-teal-900 hover:underline focus:outline-none text-xs sm:text-base">Agregar al carrito</button>
                      <button type="button" @click="agregarTarjeta" class="text-teal-900 hover:underline focus:outline-none ml-8 text-xs sm:text-base">Comprar ahora</button>
                    </div>
                    <p class="text-xs md:text-sm lg:text-base xl:text-lg text-black ml-auto">{{ product.description }}</p>
                    <p class="text-base md:text-lg lg:text-xl xl:text-2xl text-rose-950 ml-auto">{{ product.price }}</p>
                    <button type="button" @click="agregarTarjeta" class="text-gray-600 hover:underline focus:outline-none mt-8">Ver producto</button>
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
          { description: 'Mochila escolar femenina de 10 a 15 años', price: '$50.00', img:'/_nuxt/assets/mochila.png'},
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
