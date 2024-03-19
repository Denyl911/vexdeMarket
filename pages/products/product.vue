<template>
    <SideBar/>
    <div class="bg-gradient-to-b from-gray-800 via-neutral-900 to-stone-950 h-auto mt-24">           
        <div class="flex justify-between items-center px-4 py-4">
            <button class="flex items-center mt-4">
                <img src="@/assets/LOGODOS.png" alt="Imagen del negocio" class="h-6 w-8 rounded-full">
                <h1 class="text-green-500 text-xs font-light ml-2">Nombre del negocio</h1>
            </button>
                <h2 class="text-green-500 text-lg font-semibold flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                </h2>
        </div>      
        <div class="px-4 py-2">
            <h3 class="text-white text-lg font-semibold">Descripción</h3>
            <p class="text-white">Aquí va la descripción de tu negocio... estas solo son imagenes ilustrativas para demostrar su movimiento y realización de efectos, también para ver que tanto texto puede caber y se se acomodaría bien al diseño aunque al principio digimos que la base de datos solo almacenaria 69 caracteres, pero esta podría ser una descripción dos con mucha más información.</p>
        </div>
      
        <!-- Slider -->
        <div class="p-4" >
            <div class="overflow-x-auto" v-if="!showOverlay">
                <div class="flex space-x-4">
                    <button v-for="(categorie, index) in categories" :key="index" class="flex flex-col items-center justify-center text-center">
                        <div class="flex items-center">
                            <div class="bg-zinc-200 w-80 h-80 lg:w-96 lg:h-96 rounded-xl flex items-center justify-center">
                                <img :src="categorie.imgen" alt="Img. Del producto" class="h-auto w-auto rounded-xl" @click="showImage(categorie.imgen, index)">
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <!-- Overlay para mostrar la imagen en pantalla completa -->
        <div class="overlay" v-if="showOverlay">
            <img :src="selectedImage" alt="Imagen en pantalla completa" class="centered-image rounded-xl">
            <!-- Botones de navegación -->
            <button class="nav-btn left" @click="prevImage">&#10094;</button>
            <button class="nav-btn right" @click="nextImage">&#10095;</button>
            <!-- Botón para cerrar el overlay -->
            <button class="close-btn" @click="hideImage">&times;</button>
        </div>

        <!-- Para el icono de favoritos y compartir-->
        <div class="text-green-500 flex justify-between p-8">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-16 sm:h-16">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            </button>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-16 sm:h-16">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-16 sm:h-16">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button> 
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-16 sm:h-16">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                </svg>
            </button>
        </div>

        <div class="px-4 text-white">
            <button class="bg-blue-950 rounded-xl h-10 w-full mr-2">
                Comprar ahora
            </button>
            <button class="bg-sky-950 rounded-xl h-10 w-full mt-4 mb-4">
                Agregar al carrito
            </button>                
        </div>

        <div class="px-4">
            <ItemsProd/>
        </div>
        
    </div>
  </template>
  
<script>
  export default {
    data() {
      return {
        showOverlay: false,
        selectedImage: null,
        currentIndex: 0, // Índice de la imagen actual
        categories: [
            { name: 'Puntos', imgen: '/vexdeMarket/assets/assets/Categorias/puntos.png'},
            { name: 'Ofertas', imgen: '/vexdeMarket/assets/assets/Categorias/ofertas.png'},
            { name: 'Súper', imgen: '/vexdeMarket/assets/assets/Categorias/super.png'},
            { name: 'Moda', imgen: '/vexdeMarket/assets/assets/Categorias/moda.png'},
            { name: 'Papeleria', imgen: '/vexdeMarket/assets/assets/Categorias/papeleria.png'},
            { name: 'Artículos', imgen: '/vexdeMarket/assets/assets/Categorias/articulos.png'},
            { name: 'Material', imgen: '/vexdeMarket/assets/assets/Categorias/materiales.png'},
            { name: 'Servicios', imgen: '/vexdeMarket/assets/assets/Categorias/servicios.png'}                  
        ],
      }
    },
    methods: {
        showImage(imageUrl, index) {
            this.selectedImage = imageUrl;
            this.showOverlay = true;
            this.currentIndex = index; // Al hacer clic en una imagen, actualiza el índice actual
        },
        hideImage() {
            this.showOverlay = false;
            this.selectedImage = null;
        },
        prevImage() {
            this.currentIndex = (this.currentIndex - 1 + this.categories.length) % this.categories.length;
            this.selectedImage = this.categories[this.currentIndex].imgen;
        },
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.categories.length;
            this.selectedImage = this.categories[this.currentIndex].imgen;
        }
        }
    };
</script>
  
<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black; /* Fondo oscuro */
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .centered-image {
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
    }

    .nav-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: transparent;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
    }

    .left {
        left: 10px;
    }

    .right {
        right: 10px;
    }

    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: transparent;
        border: none;
        color: white;
        font-size: 40px;
        cursor: pointer;
    }

</style>