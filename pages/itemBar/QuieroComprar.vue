<template>
    <div class="bg-gradient-to-b from-black to-cyan-950 min-h-screen flex justify-center items-center px-4 py-4">
      <div class="bg-gray-50 rounded-lg p-4 max-w-xl w-full">
        <!-- Formulario de registro de cliente -->
        <form @submit.prevent="submitForm">
          <h2 class="text-lg font-semibold mb-4 px-4">Registro de Cliente</h2>
  
          <!-- Inputs para los datos del cliente -->
          <div class="mb-4 px-4">
            <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
            <input type="text" id="nombre" v-model="cliente.nombre" placeholder="Eduardo" class="mt-1 p-2 border rounded-md w-full">        
            <label v-if="cliente.nombre" for="apellidoUno" class="block text-sm font-medium text-gray-700">Primer apellido</label>
            <input v-if="cliente.nombre" type="text" id="apellidoUno" v-model="cliente.apellidoUno" placeholder="Cruz" class="mt-1 p-2 border rounded-md w-full">        
            <label v-if="cliente.apellidoUno" for="apellidoDos" class="block text-sm font-medium text-gray-700">Segundo apellido</label>
            <input v-if="cliente.apellidoUno" type="text" id="apellidoDos" v-model="cliente.apellidoDos" placeholder="Perez" class="mt-1 p-2 border rounded-md w-full">            
            <label v-if="cliente.apellidoDos" for="sexo" class="block text-sm font-medium text-gray-700">Sexo</label>
            <select v-if="cliente.apellidoDos" id="sexo" v-model="cliente.sexo" class="mt-1 p-2 border rounded-md w-full">
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
            </select>
            <label v-if="cliente.sexo" for="edad" class="block text-sm font-medium text-gray-700">Edad</label>
            <input v-if="cliente.sexo" type="text" id="edad" v-model="cliente.edad" placeholder="18" maxlength="2" minlength="2" inputmode="numeric" pattern="[0-9]*" class="mt-1 p-2 border rounded-md w-full">
            <label v-if="cliente.edad" for="numTelefonico" class="block text-sm font-medium text-gray-700">Telefono</label>
            <input v-if="cliente.edad" type="text" id="nombre" v-model="cliente.numTelefonico" placeholder="2283000000" maxlength="10" minlength="10" inputmode="numeric" pattern="[0-9]*" class="mt-1 p-2 border rounded-md w-full">
            <label v-if="cliente.numTelefonico" for="facebook" class="block text-sm font-medium text-gray-700">Facebook actual</label>
            <label v-if="cliente.numTelefonico" for="facebook" class="block text-xs font-medium text-gray-700">Colocar un punto (.) sino tiene este dato</label>
            <input v-if="cliente.numTelefonico" type="text" id="nombre" v-model="cliente.facebook" placeholder="Eduardo Cruz" class="mt-1 p-2 border rounded-md w-full">
          </div>
          
          <!-- Inputs para los datos de direccion a donde se enviaran los productos -->
          <h4 v-if="cliente.facebook" class="text-lg font-semibold mb-4">Dirección para el envío</h4>
          <div class="mb-4">
            <label v-if="cliente.facebook" for="cp" class="block text-sm font-medium text-gray-700">Código postal</label>
            <input v-if="cliente.facebook" type="text" id="cp" v-model="direccion.cp" placeholder="91010" inputmode="numeric" pattern="[0-9]*" class="mt-1 p-2 border rounded-md w-full">
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
            <h3 class="text-lg font-semibold mb-2">Tarjeta Bancaria</h3>
            <div class="bg-gradient-to-b from-black to-cyan-950 text-white p-2 rounded-md relative">
                <div class="p-4">
                    <img src="@/assets/tarjetaBancaria/chip.png" alt="Logo empresa" class="px-2 h-4 w-auto mb-2">
                    <input type="text" id="numTarjeta" v-model="tarjeta.numTarjeta" class="px-2 w-full bg-transparent text-xl text-center" placeholder="XXXX  XXXX  XXXX  XXXX">
                    <input type="text" id="titular" v-model="tarjeta.titular" class="px-2 w-32 bg-transparent text-xs mt-2" placeholder="Eduardo Cruz Perez">                                
                    <div class="flex justify-between mt-1">
                        <div class="w-1/2">
                            <input type="text" id="fechaC" v-model="tarjeta.fechaC" class="p-2 w-16 bg-transparent text-xs" placeholder="MM/AA">
                        </div>
                        <div class="w-1/2">
                            <input type="text" id="Cvv" v-model="tarjeta.Cvv" class="p-2 w-16 bg-transparent text-xs" placeholder="CVV">
                        </div>
                        <select id="VisaMaster" v-model="tarjeta.Vm" class="w-1/2 p-2 w-32 bg-transparent text-xs text-right">
                            <option value="visa" class="text-black">VISA</option>
                            <option value="mastercard" class="text-black">MASTERCARD</option>
                        </select>
                    </div>
                </div>
            </div>
          </div>

          <!-- Botón de enviar -->
          <div class="flex justify-center items-center">
            <button type="submit" class="bg-teal-800 text-white font-semibold py-2 px-4 rounded-md mt-4">Enviar</button>
          </div>

        </form>
      </div>
    </div>
  </template>
  
<script>
    export default {
        data() {
        return {
            cliente: {
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
            tarjeta: {
                titular: '',
                numTarjeta: '',
                fechaC: '',
                Vm: '',
                Cvv: '',
            },
            mostrarTarjeta: false
            };
        },
        methods: {
            submitForm() {
                // Lógica para enviar el formulario
            },
            agregarTarjeta() {
                this.mostrarTarjeta = true;
            },
            adjustHeight(event) {
            const textarea = event.target;
            textarea.style.height = "auto";
            textarea.style.height = (textarea.scrollHeight) + "px";
            }
        }
    };
  </script>