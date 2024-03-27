import{_ as u,c as i,b as e,O as a,R as l,S as d,P as n,T as p,M as x,o as r,Q as h}from"./entry.6neTc1OB.js";import{_ as g}from"./LOGODOS.rFgEahaD.js";import{_ as b}from"./chip.OmlJ2ANK.js";const f={data(){return{isEnabled:!0,showCouponInput:!1,inputClicked:!1,negocio:{nombre:""},titular:{nTitular:""},direccion:{cp:"",municipio:"",localidad:"",numExterior:"",numInterior:"",referencias:""},tarjeta:{titular:"",numTarjeta:"",NoRef:"",TipoBanco:""}}},methods:{submitForm(){},toggleRecord(){this.showCouponInput=!this.showCouponInput,this.inputClicked=!1}}},w={class:"bg-black min-h-screen px-4 py-4"},_=e("div",{class:"text-white border-b border-blue-500 h-16 flex items-center"},[e("div",{class:"flex items-center mb-2"},[e("img",{src:g,alt:"Imagen del negocio",class:"h-12 w-16 rounded-full"}),e("h1",{class:"text-green-500 text-base font-light ml-2"}," Nombre del negocio ")])],-1),v={class:"text-white mt-4"},k=e("p",{class:"mb-4"},"Agregar productos",-1),y={class:"grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"},j={class:"shadow-md w-auto h-auto"},C=["disabled"],V=h('<div class="flex flex-col items-center justify-center bg-neutral-500 w-auto h-48 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg></div><div class="flex items-start h-20"><div class="flex flex-col items-start mt-2"><p class="text-xs text-white text-left">Agregar producto en GOING</p><p class="text-base text-rose-200 text-left">$ 00.00</p></div></div>',2),T=[V],X={class:"flex items-center justify-center mt-24 sm:mt-2 animate-bounce"},B={class:"fixed bottom-0 bg-cyan-950 text-white px-8 py-4 w-full"},I={class:"text-green-500 flex justify-between"},M=e("button",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-8 h-8 sm:w-16 sm:h-16"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"})])],-1),E=e("button",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-8 h-8 sm:w-16 sm:h-16"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"})])],-1),N=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-8 h-8 sm:w-16 sm:h-16"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"})],-1),R=[N],U={key:0,class:"overflow-y-auto overflow-x-hidden min-h-screen fixed inset-0 bg-black bg-opacity-75 z-50"},H={class:"mt-32 sm:mt-20 ml-6 sm:ml-96 rounded-lg flex flex-col items-center justify-center w-80 h-auto sm:w-96 sm:h-auto"},A={class:"bg-gray-50 rounded-lg p-2 max-w-xl w-full"},Z={class:"flex items-center justify-between mb-2 px-4"},S=e("h2",{class:"text-lg font-semibold"},"Registrar negocio",-1),z=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})],-1),F=[z],G={class:"mb-2 px-4"},O=e("label",{for:"nombre",class:"block text-sm font-medium text-gray-700"},"Nombre",-1),P={key:0,class:"text-lg font-semibold px-4"},D={class:"mb-4 px-4"},L={key:0,for:"nombreTitular",class:"block text-sm font-medium text-gray-700"},Q={key:1,class:"text-lg font-semibold mb-4 px-4"},q={class:"mb-4 px-4"},J={key:0,for:"cp",class:"block text-sm font-medium text-gray-700"},K={key:2,for:"municipio",class:"block text-sm font-medium text-gray-700"},W={key:4,for:"localidad",class:"block text-sm font-medium text-gray-700"},Y={key:6,for:"numExterior",class:"block text-sm font-medium text-gray-700"},$={key:7,for:"numExterior",class:"block text-xs font-medium text-gray-700"},ee={key:9,for:"numInterior",class:"block text-sm font-medium text-gray-700"},te={key:10,for:"numInterior",class:"block text-xs font-medium text-gray-700"},oe={key:12,for:"referencias",class:"block text-sm font-medium text-gray-700"},se={class:"mt-4 border rounded-md p-2 relative"},ie=e("h3",{class:"text-lg font-semibold"},"Tarjeta Bancaria",-1),re=e("h6",{class:"block text-xs font-medium text-gray-700 mb-2"},"Usa 16 dígitos para tarjetas y 18 para CLABE",-1),ne={class:"bg-gradient-to-b from-black to-cyan-950 text-white p-2 rounded-md relative"},le={class:"p-4"},de=e("img",{src:b,alt:"Chip",class:"px-2 h-4 w-auto mb-2"},null,-1),ce={class:"flex justify-between mt-1"},me={class:"w-1/2"},ue=e("option",{value:"Nu",class:"text-black"},"NU Banco",-1),ae=e("option",{value:"Mercado pago",class:"text-black"},"Mercado Pago",-1),pe=e("option",{value:"BBVA",class:"text-black"},"BBVA Mexico",-1),xe=e("option",{value:"Santander",class:"text-black"},"Santander",-1),he=[ue,ae,pe,xe],ge={class:"flex justify-center items-center"};function be(m,o,fe,we,t,c){return r(),i(x,null,[e("div",w,[_,e("div",v,[k,e("div",y,[e("div",j,[e("button",{disabled:t.isEnabled},T,8,C)])])]),e("div",X,[e("button",{class:"text-white text-xl bg-green-800 rounded-xl w-56 h-20",onClick:o[0]||(o[0]=(...s)=>c.toggleRecord&&c.toggleRecord(...s))}," ¡Registrar mi negocio! ")])]),e("div",B,[e("div",I,[M,E,e("button",{onClick:o[1]||(o[1]=(...s)=>m.toggleCouponInput&&m.toggleCouponInput(...s))},R)])]),t.showCouponInput?(r(),i("div",U,[e("div",H,[e("div",A,[e("form",{onSubmit:o[17]||(o[17]=a((...s)=>c.submitForm&&c.submitForm(...s),["prevent"]))},[e("div",Z,[S,e("button",{onClick:o[2]||(o[2]=(...s)=>c.toggleRecord&&c.toggleRecord(...s))},F)]),e("div",G,[O,l(e("input",{type:"text",id:"nombre","onUpdate:modelValue":o[3]||(o[3]=s=>t.negocio.nombre=s),placeholder:"GOING",class:"mt-1 p-2 border rounded-md w-full"},null,512),[[d,t.negocio.nombre]])]),t.negocio.nombre?(r(),i("h5",P,"Titular del negocio")):n("",!0),e("div",D,[t.negocio.nombre?(r(),i("label",L,"Nombre")):n("",!0),t.negocio.nombre?l((r(),i("input",{key:1,type:"text",id:"nombreTitular","onUpdate:modelValue":o[4]||(o[4]=s=>t.titular.nTitular=s),placeholder:"Eduardo Aguilar",class:"mt-1 p-2 border rounded-md w-full"},null,512)),[[d,t.titular.nTitular]]):n("",!0)]),t.titular.nTitular?(r(),i("h4",Q,"Dirección para el envío")):n("",!0),e("div",q,[t.titular.nTitular?(r(),i("label",J,"Código postal")):n("",!0),t.titular.nTitular?l((r(),i("input",{key:1,type:"text",id:"cp","onUpdate:modelValue":o[5]||(o[5]=s=>t.direccion.cp=s),placeholder:"91010",inputmode:"numeric",pattern:"[0-9]*",class:"mt-1 p-2 border rounded-md w-full"},null,512)),[[d,t.direccion.cp]]):n("",!0),t.direccion.cp?(r(),i("label",K,"Municipio")):n("",!0),t.direccion.cp?l((r(),i("input",{key:3,type:"text",id:"municipio","onUpdate:modelValue":o[6]||(o[6]=s=>t.direccion.municipio=s),placeholder:"Xalapa",class:"mt-1 p-2 border rounded-md w-full"},null,512)),[[d,t.direccion.municipio]]):n("",!0),t.direccion.municipio?(r(),i("label",W,"Localidad")):n("",!0),t.direccion.municipio?l((r(),i("input",{key:5,type:"text",id:"localidad","onUpdate:modelValue":o[7]||(o[7]=s=>t.direccion.localidad=s),placeholder:"Xalapa",class:"mt-1 p-2 border rounded-md w-full"},null,512)),[[d,t.direccion.localidad]]):n("",!0),t.direccion.localidad?(r(),i("label",Y,"Número exterior")):n("",!0),t.direccion.localidad?(r(),i("label",$,"Colocar un cero (0) sino tiene este dato")):n("",!0),t.direccion.localidad?l((r(),i("input",{key:8,type:"text",id:"numExterior","onUpdate:modelValue":o[8]||(o[8]=s=>t.direccion.numExterior=s),placeholder:"123",inputmode:"numeric",pattern:"[0-9]*",class:"mt-1 p-2 border rounded-md w-full"},null,512)),[[d,t.direccion.numExterior]]):n("",!0),t.direccion.numExterior?(r(),i("label",ee,"Número interior")):n("",!0),t.direccion.numExterior?(r(),i("label",te,"Colocar un cero (0) sino tiene este dato")):n("",!0),t.direccion.numExterior?l((r(),i("input",{key:11,type:"text",id:"numInterior","onUpdate:modelValue":o[9]||(o[9]=s=>t.direccion.numInterior=s),placeholder:"32",inputmode:"numeric",pattern:"[0-9]*",class:"mt-1 p-2 border rounded-md w-full"},null,512)),[[d,t.direccion.numInterior]]):n("",!0),t.direccion.numInterior?(r(),i("label",oe,"Referencias")):n("",!0),t.direccion.numInterior?l((r(),i("textarea",{key:13,id:"nombre","onUpdate:modelValue":o[10]||(o[10]=s=>t.direccion.referencias=s),placeholder:"Casa color verde frente a una primaria",class:"mt-1 p-2 border rounded-md w-full resize-none",onInput:o[11]||(o[11]=(...s)=>m.adjustHeight&&m.adjustHeight(...s))},null,544)),[[d,t.direccion.referencias]]):n("",!0)]),e("div",se,[ie,re,e("div",ne,[e("div",le,[de,l(e("input",{type:"text",id:"numTarjeta","onUpdate:modelValue":o[12]||(o[12]=s=>t.tarjeta.numTarjeta=s),class:"px-2 w-full bg-transparent text-xl text-center",placeholder:"XXXXXXXXXXXXXXXXXX",maxlength:"18",minlength:"16",inputmode:"numeric"},null,512),[[d,t.tarjeta.numTarjeta]]),l(e("input",{type:"text",id:"titular","onUpdate:modelValue":o[13]||(o[13]=s=>t.tarjeta.titular=s),class:"px-2 w-full bg-transparent text-xs mt-2",placeholder:"Eduardo Cruz Perez"},null,512),[[d,t.tarjeta.titular]]),e("div",ce,[e("div",me,[l(e("input",{type:"text",id:"NoRef","onUpdate:modelValue":o[14]||(o[14]=s=>t.tarjeta.NoRef=s),class:"p-2 w-16 bg-transparent text-xs",placeholder:"1234567",maxlength:"7",minlength:"7",inputmode:"numeric"},null,512),[[d,t.tarjeta.NoRef]])]),l(e("select",{id:"TipoBanco","onUpdate:modelValue":o[15]||(o[15]=s=>t.tarjeta.TipoBanco=s),class:"form-select w-1/2 p-2 w-32 bg-transparent text-xs text-right"},he,512),[[p,t.tarjeta.TipoBanco]])])])])]),e("div",ge,[e("button",{type:"submit",class:"bg-teal-800 text-white font-semibold py-2 px-4 rounded-md mt-4",onClick:o[16]||(o[16]=(...s)=>c.toggleRecord&&c.toggleRecord(...s))},"Enviar")])],32)])])])):n("",!0)],64)}const ye=u(f,[["render",be]]);export{ye as default};
