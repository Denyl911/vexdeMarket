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
          <button v-for="(categorie, index) in categories" :key="index" class="flex flex-col items-center justify-center text-center" @click="navigateToCategory(categorie.dir)">
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

      <ItemsProd/>
      
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        categories: [
          { name: 'Puntos', imgen: '@/assets/Categorias/puntos.png', dir: 'puntos'},
          { name: 'Ofertas', imgen: '@/assets/Categorias/ofertas.png', dir: 'ofertas'},
          { name: 'Súper', imgen: '@/assets/Categorias/super.png', dir: 'super'},
          { name: 'Moda', imgen: '@/assets/Categorias/moda.jpeg', dir: 'moda'},
          { name: 'Papeleria', imgen: '@/assets/Categorias/papeleria.jpeg', dir: 'papeleria'},
          { name: 'Artículos', imgen: '@/assets/Categorias/articulos.jpeg', dir: 'articulos'},
          { name: 'Material', imgen: '@/assets/Categorias/materiales.jpeg', dir: 'material'},
          { name: 'Servicios', imgen: '@/assets/Categorias/servicios.jpeg', dir: 'servicios'}                  
        ]
      };    
    },
    methods: {
      navigateToCategory(dir) {
        // Navegar a la ruta correspondiente utilizando Vue Router
        this.$router.push(`/categories/${dir}`);
      }
    },
  };
</script>

<style>
  .text-xxs {
    font-size: 0.5rem; /* Puedes ajustar el valor según tus necesidades */
  }
</style>