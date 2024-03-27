<template>
    <div class="grid grid-cols-2 justify-items-center items-center h-screen">
        <button class="flex items-center justify-center p-6 bg-gradient-to-t from-neutral-900 via-lime-800 to-lime-500 to-lime-200 w-full h-full" @click="ToPuntos">
            <img src="@/assets/Categorias/puntos.png" alt="Logo empresa" class="w-auto h-16 sm:w-auto sm:h-40 mr-4">
            <h1 class="text-white">
                <span class="block font-bold text-xl sm:text-4xl">PUNTOS</span>
                <span class="block text-xs sm:text-xl mt-1">¡GOING está contigo!</span>
            </h1>
        </button>
        <button class="flex items-center justify-center p-6 bg-gradient-to-t from-neutral-900 via-sky-800 to-sky-400 to-sky-200 w-full h-full" @click="ToOfertas">
            <img src="@/assets/Categorias/ofertas.png" alt="Logo empresa" class="w-auto h-16 sm:w-auto sm:h-40 mr-4">
            <h1 class="text-white">
                <span class="block font-bold text-xl sm:text-4xl">OFERTAS</span>
                <span class="block text-xs sm:text-xl mt-1">¡Por el bienestar de tu bolsillo!</span>
            </h1>
        </button>
        <button class="flex items-center justify-center p-6 bg-gradient-to-t from-neutral-900 via-orange-700 to-orange-400 to-orange-200 w-full h-full" @click="ToSuper">
            <img src="@/assets/Categorias/super.png" alt="Logo empresa" class="w-auto h-16 sm:w-auto sm:h-40 mr-4">
            <h1 class="text-white">
                <span class="block font-bold text-xl sm:text-4xl">SUPER</span>
                <span class="block text-xs sm:text-xl mt-1">¡Calidad para toda la familia!</span>
            </h1>
        </button>
        <button class="flex items-center justify-center p-6 bg-gradient-to-t from-neutral-900 via-teal-900 to-purple-600 to-teal-300 w-full h-full" @click="ToModa">
            <img src="@/assets/Categorias/moda.png" alt="Logo empresa" class="w-auto h-16 sm:w-auto sm:h-40 mr-4">
            <h1 class="text-white">
                <span class="block font-bold text-xl sm:text-4xl">MODA</span>
                <span class="block text-xs sm:text-xl mt-1">¡Exprésate viviendo con estilo!</span>
            </h1>
        </button>
        <button class="flex items-center justify-center p-6 bg-gradient-to-t from-neutral-900 via-pink-600 to-pink-400 to-pink-100 w-full h-full" @click="ToPapeleria">
            <img src="@/assets/Categorias/papeleria.png" alt="Logo empresa" class="w-auto h-16 sm:w-auto sm:h-40 mr-4">
            <h1 class="text-white">
                <span class="block font-bold text-xl sm:text-4xl">PAPELERIA</span>
                <span class="block text-xs sm:text-xl mt-1">¡Los mejores productos escolares!</span>
            </h1>
        </button>
        <button class="flex items-center justify-center p-6 bg-gradient-to-t from-neutral-900 via-purple-800 to-purple-950 to-purple-200 w-full h-full" @click="ToArticulos">
            <img src="@/assets/Categorias/articulos.png" alt="Logo empresa" class="w-auto h-16 sm:w-auto sm:h-40 mr-4">
            <h1 class="text-white">
                <span class="block font-bold text-xl sm:text-4xl">ARTÍCULOS</span>
                <span class="block text-xs sm:text-xl mt-1">¡No lo quieres, lo necesitas!</span>
            </h1>
        </button>
        <button class="flex items-center justify-center p-6 bg-gradient-to-t from-neutral-900 via-teal-900 to-slate-950 to-violet-800 w-full h-full" @click="ToMaterial">
            <img src="@/assets/Categorias/materiales.png" alt="Logo empresa" class="w-auto h-16 sm:w-auto sm:h-40 mr-4">
            <h1 class="text-white">
                <span class="block font-bold text-xl sm:text-4xl">MATERIAL</span>
                <span class="block text-xs sm:text-xl mt-1">¡Repara y construye todo lo que te imaginas!</span>
            </h1>
        </button>
        <button class="flex items-center justify-center p-6 bg-gradient-to-t from-neutral-900 via-green-800 to-cyan-500 to-cyan-200 w-full h-full" @click="ToServicios">
            <img src="@/assets/Categorias/servicios.png" alt="Logo empresa" class="w-auto h-16 sm:w-auto sm:h-40 mr-4 rounded-full">
            <h1 class="text-white">
                <span class="block font-bold text-xl sm:text-4xl">SERVICIOS</span>
                <span class="block text-xs sm:text-xl mt-1">¡Lleva una vida más tranquila, no te estreses!</span>
            </h1>
        </button>
    </div>
</template>

<script>
    export default {
        methods: {
            ToPuntos() {
            this.$router.push('/categories/puntos');
            },
            ToOfertas() {
            this.$router.push('/categories/ofertas');
            },
            ToSuper() {
            this.$router.push('/categories/super');
            },
            ToModa() {
            this.$router.push('/categories/moda');
            },
            ToPapeleria() {
            this.$router.push('/categories/papeleria');
            },
            ToArticulos() {
            this.$router.push('/categories/articulos');
            },
            ToMaterial() {
            this.$router.push('/categories/material');
            },
            ToServicios() {
            this.$router.push('/categories/servicios');
            },
        }
    }
</script>