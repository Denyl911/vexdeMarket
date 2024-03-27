<template>
    <div class="bg-black min-h-screen px-4 py-4">
      <div class="text-white border-b border-blue-500 h-16 flex items-center">
        <div class="flex items-center mb-2">
          <img src="@/assets/LOGODOS.png" alt="Imagen del repartidor" class="h-12 w-16 rounded-full"/>
          <h1 class="text-green-500 text-base font-light ml-2">
            RepartiGoing
          </h1>
        </div>
      </div>
  
      <div class="text-white mt-4">
        <p>Pendientes de entrega</p>
        <div class="mt-4 rounded-xl w-full h-auto text-base text-black flex items-center justify-between bg-gradient-to-tr from-neutral-400 via-teal-200 to-sky-500">
          <div class="px-4 py-3">
            <p>Para: Eduardo Vexde Going</p>
            <p>Recoger en: BBB</p>
            <p>Llevar a: Otilpan, Tlalnelhuayocan</p>
          </div>
          <button class="text-base text-black w-16 h-auto flex justify-center hover:bg-cyan-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-20">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>          
        </div>
      </div>

      <div class="flex items-center justify-center mt-72 sm:mt-48 animate-bounce">
        <button class="text-white text-xl bg-green-800 rounded-xl w-56 h-20" @click="toggleRecord">
          ¡Quiero ser RepartiGoing!
        </button>
      </div>
    </div>    
    
    <div class="fixed bottom-0 bg-cyan-950 text-white px-8 py-4 w-full">
      <div class="text-green-500 flex justify-between">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-16 sm:h-16">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                </svg>
              </button>
              <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-16 sm:h-16">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
              </button>
              <button @click="toggleCouponInput">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-16 sm:h-16">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
              </button>
          </div>
    </div>





    <!-- Formulario para registrar tienda -->
    <div class="overflow-y-auto overflow-x-hidden min-h-screen fixed inset-0 bg-black bg-opacity-75 z-50" v-if="showCouponInput">
      <div class="mt-32 sm:mt-20 ml-6 sm:ml-96 rounded-lg flex flex-col items-center justify-center w-80 h-auto sm:w-96 sm:h-auto">
        <div class="bg-gray-50 rounded-lg p-2 max-w-xl w-full">
          <!-- Formulario de registro de la tienda -->
          <form @submit.prevent="submitForm">
            <div class="flex items-center justify-between mb-2 px-4">
              <h2 class="text-lg font-semibold">Registrar negocio</h2>
              <button @click="toggleRecord">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg> 
              </button>                 
            </div>              
            <!-- Inputs para los datos del negocio -->
            <div class="mb-2 px-4">
              <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
              <input type="text" id="nombre" v-model="Repartidor.nombre" placeholder="Eduardo" class="mt-1 p-2 border rounded-md w-full">        
              <label v-if="Repartidor.nombre" for="apellidoUno" class="block text-sm font-medium text-gray-700">Primer apellido</label>
              <input v-if="Repartidor.nombre" type="text" id="apellidoUno" v-model="Repartidor.apellidoUno" placeholder="Cruz" class="mt-1 p-2 border rounded-md w-full">        
              <label v-if="Repartidor.apellidoUno" for="apellidoDos" class="block text-sm font-medium text-gray-700">Segundo apellido</label>
              <input v-if="Repartidor.apellidoUno" type="text" id="apellidoDos" v-model="Repartidor.apellidoDos" placeholder="Perez" class="mt-1 p-2 border rounded-md w-full">            
              <label v-if="Repartidor.apellidoDos" for="sexo" class="block text-sm font-medium text-gray-700">Sexo</label>
              <select v-if="Repartidor.apellidoDos" id="sexo" v-model="Repartidor.sexo" class="mt-1 p-2 border rounded-md w-full">
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
              </select>
              <label v-if="Repartidor.sexo" for="edad" class="block text-sm font-medium text-gray-700">Edad</label>
              <input v-if="Repartidor.sexo" type="text" id="edad" v-model="Repartidor.edad" placeholder="18" maxlength="2" minlength="2" inputmode="numeric" pattern="[0-9]*" class="mt-1 p-2 border rounded-md w-full">
              <label v-if="Repartidor.edad" for="numTelefonico" class="block text-sm font-medium text-gray-700">Telefono</label>
              <input v-if="Repartidor.edad" type="text" id="nombre" v-model="Repartidor.numTelefonico" placeholder="2283000000" maxlength="10" minlength="10" inputmode="numeric" pattern="[0-9]*" class="mt-1 p-2 border rounded-md w-full">
              <label v-if="Repartidor.numTelefonico" for="facebook" class="block text-sm font-medium text-gray-700">Facebook actual</label>
              <label v-if="Repartidor.numTelefonico" for="facebook" class="block text-xs font-medium text-gray-700">Colocar un punto (.) sino tiene este dato</label>
              <input v-if="Repartidor.numTelefonico" type="text" id="nombre" v-model="Repartidor.facebook" placeholder="Eduardo Cruz" class="mt-1 p-2 border rounded-md w-full">
            </div>
            <!-- Inputs para los datos de direccion a donde se enviaran los productos -->
            <h4 v-if="Repartidor.facebook" class="text-lg font-semibold mb-4 px-4">Domicilio del repartidor</h4>
            <div class="mb-4 px-4">
              <label v-if="Repartidor.facebook" for="cp" class="block text-sm font-medium text-gray-700">Código postal</label>
              <input v-if="Repartidor.facebook" type="text" id="cp" v-model="direccion.cp" placeholder="91010" inputmode="numeric" pattern="[0-9]*" class="mt-1 p-2 border rounded-md w-full">
              <label v-if="direccion.cp" for="municipio" class="block text-sm font-medium text-gray-700">Municipio</label>
              <input v-if="direccion.cp" type="text" id="municipio" v-model="direccion.municipio" placeholder="Xalapa" class="mt-1 p-2 border rounded-md w-full">
              <label v-if="direccion.municipio" for="localidad" class="block text-sm font-medium text-gray-700">Localidad</label>
              <input v-if="direccion.municipio" type="text" id="localidad" v-model="direccion.localidad" placeholder="Xalapa" class="mt-1 p-2 border rounded-md w-full"> 
              <label v-if="direccion.localidad" for="numExterior" class="block text-sm font-medium text-gray-700">Número exterior</label>
              <label v-if="direccion.localidad" for="numExterior" class="block text-xs font-medium text-gray-700">Colocar un cero (0) sino tiene este dato</label>
              <input v-if="direccion.localidad" type="text" id="numExterior" v-model="direccion.numExterior" placeholder="123" inputmode="numeric" pattern="[0-9]*" class="mt-1 p-2 border rounded-md w-full">         
              <label v-if="direccion.numExterior" for="numInterior" class="block text-sm font-medium text-gray-700">Número interior</label>
              <label v-if="direccion.numExterior" for="numInterior" class="block text-xs font-medium text-gray-700">Colocar un cero (0) sino tiene este dato</label>
              <input v-if="direccion.numExterior" type="text" id="numInterior" v-model="direccion.numInterior" placeholder="32" inputmode="numeric" pattern="[0-9]*" class="mt-1 p-2 border rounded-md w-full"> 
              <label v-if="direccion.numInterior" for="referencias" class="block text-sm font-medium text-gray-700">Referencias</label>
              <textarea v-if="direccion.numInterior" id="nombre" v-model="direccion.referencias" placeholder="Casa color verde frente a una primaria" class="mt-1 p-2 border rounded-md w-full resize-none" @input="adjustHeight"></textarea> 
            </div>

            <!-- Botón de enviar -->
            <div class="flex justify-center items-center">
              <button type="submit" class="bg-teal-800 text-white font-semibold py-2 px-4 rounded-md mt-4" @click="toggleRecord">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          showCouponInput: false,
          inputClicked: false,

          Repartidor: {
            nombre: '',
            apellidoUno: '',
            apellidoDos: '',
            sexo: '',
            edad: '',
            numTelefonico: '',
            facebook: '',
          },
          direccion: {
            cp: '',
            municipio: '',
            localidad: '',
            numExterior: '',
            numInterior: '',
            referencias: '',
          },
        };
      },
      methods: {
        submitForm() {
          // Lógica para enviar el formulario
        },
        toggleRecord() {
          this.showCouponInput = !this.showCouponInput;
          this.inputClicked = false;
        },
      },
    };
  </script>
  