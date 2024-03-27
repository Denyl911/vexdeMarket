<template>
  <div class="bg-black min-h-screen px-4 py-4">
    <div class="text-white border-b border-blue-500 h-16 flex items-center">
      <div class="flex items-center mb-2">
        <img src="@/assets/LOGODOS.png" alt="Imagen del negocio" class="h-12 w-16 rounded-full"/>
        <h1 class="text-green-500 text-base font-light ml-2">
          Nombre del negocio
        </h1>
      </div>
    </div>

    <div class="text-white mt-4">
      <p class="mb-4">Agregar productos</p>
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">  
        <!-- Productos -->        
        <div class="shadow-md w-auto h-auto">          
          <button :disabled="isEnabled">                                 
            <div class="flex flex-col items-center justify-center bg-neutral-500 w-auto h-48 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <div class="flex items-start h-20">
                <div class="flex flex-col items-start mt-2">
                    <p class="text-xs text-white text-left">Agregar producto en GOING</p>
                    <p class="text-base text-rose-200 text-left">$ 00.00</p>  
                </div>
            </div>
          </button>
        </div>          
      </div>
    </div>

    <div class="flex items-center justify-center mt-24 sm:mt-2 animate-bounce">
      <button class="text-white text-xl bg-green-800 rounded-xl w-56 h-20" @click="toggleRecord">
        ¡Registrar mi negocio!
      </button>
    </div>
  </div>

  <div class="fixed bottom-0 bg-cyan-950 text-white px-8 py-4 w-full">
    <div class="text-green-500 flex justify-between">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-16 sm:h-16">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
              </svg>
            </button>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-16 sm:h-16">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
            </button>
            <button @click="toggleCouponInput">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 sm:w-16 sm:h-16">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
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
            <input type="text" id="nombre" v-model="negocio.nombre" placeholder="GOING" class="mt-1 p-2 border rounded-md w-full">
          </div>
          <h5 v-if="negocio.nombre" class="text-lg font-semibold px-4">Titular del negocio</h5>
          <div class="mb-4 px-4">
            <label v-if="negocio.nombre" for="nombreTitular" class="block text-sm font-medium text-gray-700">Nombre</label>
            <input v-if="negocio.nombre" type="text" id="nombreTitular" v-model="titular.nTitular" placeholder="Eduardo Aguilar" class="mt-1 p-2 border rounded-md w-full">
          </div>
          <!-- Inputs para los datos de direccion a donde se enviaran los productos -->
          <h4 v-if="titular.nTitular" class="text-lg font-semibold mb-4 px-4">Dirección para el envío</h4>
          <div class="mb-4 px-4">
            <label v-if="titular.nTitular" for="cp" class="block text-sm font-medium text-gray-700">Código postal</label>
            <input v-if="titular.nTitular" type="text" id="cp" v-model="direccion.cp" placeholder="91010" inputmode="numeric" pattern="[0-9]*" class="mt-1 p-2 border rounded-md w-full">
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

          <div class="mt-4 border rounded-md p-2 relative">
            <h3 class="text-lg font-semibold">Tarjeta Bancaria</h3>
            <h6 class="block text-xs font-medium text-gray-700 mb-2">Usa 16 dígitos para tarjetas y 18 para CLABE</h6>
            <div class="bg-gradient-to-b from-black to-cyan-950 text-white p-2 rounded-md relative">
                <div class="p-4">
                    <img src="@/assets/tarjetaBancaria/chip.png" alt="Chip" class="px-2 h-4 w-auto mb-2">
                    <input type="text" id="numTarjeta" v-model="tarjeta.numTarjeta" class="px-2 w-full bg-transparent text-xl text-center" placeholder="XXXXXXXXXXXXXXXXXX" maxlength="18" minlength="16" inputmode="numeric">
                    <input type="text" id="titular" v-model="tarjeta.titular" class="px-2 w-full bg-transparent text-xs mt-2" placeholder="Eduardo Cruz Perez">                                
                    <div class="flex justify-between mt-1">
                        <div class="w-1/2">
                            <input type="text" id="NoRef" v-model="tarjeta.NoRef" class="p-2 w-16 bg-transparent text-xs" placeholder="1234567" maxlength="7" minlength="7" inputmode="numeric">
                        </div>
                        <select id="TipoBanco" v-model="tarjeta.TipoBanco" class="form-select w-1/2 p-2 w-32 bg-transparent text-xs text-right">
                            <option value="Nu" class="text-black">NU Banco</option>
                            <option value="Mercado pago" class="text-black">Mercado Pago</option>
                            <option value="BBVA" class="text-black">BBVA Mexico</option>
                            <option value="Santander" class="text-black">Santander</option>
                        </select>
                    </div>
                </div>
            </div>
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
        isEnabled: true,
        showCouponInput: false,
        inputClicked: false,

        negocio: {
          nombre: '',
        },
        titular: {
          nTitular: '',          
        },
        direccion: {
          cp: '',
          municipio: '',
          localidad: '',
          numExterior: '',
          numInterior: '',
          referencias: '',
        },
        tarjeta: {
          titular: '',
          numTarjeta: '',
          NoRef: '',
          TipoBanco: '',
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
