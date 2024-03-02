<template>
  <div class="flex flex-col h-screen bg-gray-800">
    
    <!-- Barra flotante superior -->
    <SideBar/>

    <!-- Nombre de la empresa y logo -->
    <div class="flex items-center justify-center p-6 mt-20 rounded-xl bg-gradient-to-r from-neutral-900 via-teal-900 to-purple-950 to-violet-800">
      <img src="@/assets/LOGODOS.png" alt="Logo empresa" class="h-32 w-auto mr-4">
      <h1 class="text-white">
        <span style="font-size: 48px;" class="block font-bold">GOING</span>
        <span class="block">¡Llega hasta tu casa!</span>
      </h1>
    </div>

    <!-- Slider -->
    <div class="p-4 bg-gradient-to-b from-gray-800 via-neutral-900 to-blue-950 to-stone-950">    
      <div class="overflow-x-auto">
        <div class="flex space-x-4">
          <!-- Categorias -->
          <button v-for="(categorie, index) in categories" :key="index" class="flex flex-col items-center justify-center text-center">
            <div class="flex items-center">
              <!-- Rectángulo con imagen a la izquierda y texto a la derecha -->              
              <div class="rounded-xl w-32 h-12 flex items-center justify-between px-2 bg-gradient-to-r from-gray-800 via-neutral-900 to-blue-950 to-stone-950">
                <div class="bg-zinc-200 w-12 h-12 rounded-full flex items-center justify-center">
                  <img :src="categorie.imgen" alt="Img. Del producto" class="h-12 w-12 rounded-full">
                </div>
                <p class="text-xs text-white font-semibold">{{ categorie.name }}</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      <!--<h2 class="text-lg text-white font-bold mt-2 mb-2">Ofertas</h2>
      <div class="overflow-x-auto">
    <div id="carousel" class="flex space-x-4">-->
      <!-- Categorias -->
      <!--<button v-for="(product, index) in categories" :key="index" class="p-0 rounded-lg flex items-center justify-start text-left carousel-item">
        <div class="flex items-center bg-white rounded-lg p-2 w-72 h-24">
          <img src="@/assets/carretilla.png" alt="Img. Del producto" class="h-10 w-10 rounded-lg mr-2">
          <p class="text-sm text-black">{{ product.name }}</p>
        </div>
      </button>
    </div>
  </div>-->



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
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //Productos destacados
        //Importante * para la descripción solamente se permiten 79 caracteres como maximo.
        products: [
          { description: 'Galletas goting en forma de estrella', price: '$10.00', img:'/_nuxt/assets/PruebaUno.png'},
          { description: 'Anillo brillante con 950 de plata de la marca GOING', price: '$20.00', img:'/_nuxt/assets/anillo.png'},
          { description: 'Bebida Going de 500ml _ energetizante', price: '$30.00', img:'/_nuxt/assets/drink.png'},
          { description: 'Libreta con pasta de cuero de caballo', price: '$40.00', img:'/_nuxt/assets/libreta.png'},
          { description: 'Mochila escolar femenina de 10 a 15 años', price: '$50.00', img:'_nuxt/assets/mochila.png'},
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
        categories: [
          { name: 'Puntos', imgen: '/_nuxt/assets/Categorias/puntos.png'},
          { name: 'Ofertas', imgen: '/_nuxt/assets/Categorias/ofertas.png'},
          { name: 'Súper', imgen: '/_nuxt/assets/Categorias/super.png'},
          { name: 'Moda', imgen: '/_nuxt/assets/Categorias/moda.jpeg'},
          { name: 'Papeleria', imgen: '/_nuxt/assets/Categorias/papeleria.jpeg'},
          { name: 'Artículos', imgen: '/_nuxt/assets/Categorias/articulos.jpeg'},
          { name: 'Material', imgen: '/_nuxt/assets/Categorias/materiales.jpeg'},
          { name: 'Servicios', imgen: '/_nuxt/assets/Categorias/servicios.jpeg'}                  
        ]
      };    
    },
    mounted() {
      let carouselItems = document.querySelectorAll('.carousel-item');

      function toggleCarousel() {
        let activeItemIndex = 0;

        setInterval(function() {
          carouselItems[activeItemIndex].classList.remove('carousel-item');
          activeItemIndex = (activeItemIndex + 1) % carouselItems.length;
          carouselItems[activeItemIndex].classList.add('carousel-item');
        }, 5000); // Cambia este valor para ajustar la velocidad de movimiento
      }

      toggleCarousel();
    },
    methods: {
      Onproduct() {
        // Navegar a la otra página utilizando Vue Router
        this.$router.push('/products/product');
      },
    },
  };
</script>

<style>
  .text-xxs {
    font-size: 0.5rem; /* Puedes ajustar el valor según tus necesidades */
  }

  @keyframes moveRight {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .carousel-item {
    animation: moveRight 10s linear infinite;
  }
</style>