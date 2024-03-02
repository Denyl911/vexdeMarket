<template>
  <div>
    <!-- Barra superior -->
    <div class="bg-black text-white fixed top-0 left-0 right-0 shadow-md flex items-center h-16 justify-between">
      <!-- Ícono apertura -->
      <button class="bg-transparent ml-2" @click="openMenu" v-if="!showMenu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />        
        </svg>
      </button>
      
      <!-- Input para búsqueda -->
      <input type="text" class="bg-transparent text-white border-b border-blue-500 rounded-xl mx-2 w-56 sm:w-96 focus:border-red-500 outline-none" placeholder="   Buscar en GOING" />

      <!-- Ícono carrito -->
      <button class="bg-transparent mr-2" @click="navigateToPage">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />        
        </svg>
      </button>
    </div>

    <!-- Ícono de ubicación y texto -->
    <div class="bg-black text-indigo-400 fixed top-14 left-0 right-0 flex items-center justify-start h-10 px-2">
      <button class="flex items-center">
        <div class="bg-transparent">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </div>
          <span class="text-xs ml-1">Código postal</span>
      </button>
    </div>
  </div>

    <!-- Contenedor de fondo semitransparente -->
    <div class="bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm" @click="closeMenu" v-if="showMenu">
      
      <!-- Contenido del menú lateral -->
    <div class="min-h-screen w-60 fixed top-0 left-0 bg-gradient-to-r from-neutral-900 via-teal-900 to-emerald-800">
      <div>
          <!-- Ícono cierre -->
          <button @click="closeMenu" v-if="showMenu" class="mt-4 ml-2 text-white">                               
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
            <div class="flex items-center text-white text-x1 hover:bg-orange-400 cursor-pointer py-3 mb-2 mt-1 ml-4 border-b border-blue-500 rounded-xl" @click="ToPerfil">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="w-12 h-12 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <span class="text-x1">PERFIL</span>
            </div>
            <div class="flex items-center text-white text-x1 hover:bg-orange-400 cursor-pointer py-3 mb-2 mt-1 ml-6 rounded-xl" @click="ToQuieroComprar">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
              </svg>
              <span class="text-x1 ml-6">Quiero comprar</span>
            </div>
            <div class="flex items-center text-white text-x1 hover:bg-orange-400 cursor-pointer py-3 mb-2 mt-1 ml-6 rounded-xl" @click="ToMisCompras">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span class="text-x1 ml-6">Mis compras</span>
            </div>
            <div class="flex items-center text-white text-x1 hover:bg-orange-400 cursor-pointer py-3 mb-2 mt-1 ml-6 rounded-xl" @click="ToFavoritos">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
              <span class="text-x1 ml-6">Favoritos</span>
            </div>
            <div class="flex items-center text-white text-x1 hover:bg-orange-400 cursor-pointer py-3 mb-2 mt-1 ml-6 rounded-xl" @click="ToOfertas">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
              </svg>
              <span class="text-x1 ml-6">Ofertas</span>
            </div>
            <div class="flex items-center text-white text-x1 hover:bg-orange-400 cursor-pointer py-3 mb-2 mt-1 ml-6 rounded-xl" @click="ToSoyVendedor">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              <span class="text-x1 ml-6">Soy vendedor</span>
            </div>
            <div class="flex items-center text-white text-x1 hover:bg-orange-400 cursor-pointer py-3 mb-2 mt-1 ml-6 rounded-xl" @click="ToSoyRepartidor">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <span class="text-x1 ml-6">Soy repartidor</span>
            </div>
        </div>
      </div>
    </div>
  
</template>


<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    openMenu() {
      this.showMenu = true;
    },
    closeMenu() {
      this.showMenu = false;
    },
    navigateToPage() {
      // Navegar a la otra página utilizando Vue Router
      this.$router.push('/car');
    },
    ToPerfil() {
      // Navegar a la otra página utilizando Vue Router
      this.$router.push('/itemBar/Perfil');
    },
    ToQuieroComprar() {
      // Navegar a la otra página utilizando Vue Router
      this.$router.push('/itemBar/QuieroComprar');
    },
    ToMisCompras() {
      // Navegar a la otra página utilizando Vue Router
      this.$router.push('/itemBar/MisCompras');
    },
    ToFavoritos() {
      // Navegar a la otra página utilizando Vue Router
      this.$router.push('/itemBar/Favoritos');
    },
    ToOfertas() {
      // Navegar a la otra página utilizando Vue Router
      this.$router.push('/itemBar/Ofertas');
    },
    ToSoyVendedor() {
      // Navegar a la otra página utilizando Vue Router
      this.$router.push('/itemBar/SoyVendedor');
    },
    ToSoyRepartidor() {
      // Navegar a la otra página utilizando Vue Router
      this.$router.push('/itemBar/SoyRepartidor');
    }
  }
}
</script>