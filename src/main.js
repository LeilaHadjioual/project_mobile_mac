import Vue from 'vue'
import App from './App.vue'
import machinesList from './MachinesList.vue'// nom de la variable from fichier où est définit le composanr
Vue.component('ListMachines', machinesList); // nom que l'on définit (à appeler dans la balise) , nom de la variable du composant

import machinesMap from './MachinesMap.vue'
Vue.component('MapMachines', machinesMap);

import Machine from './Machine.vue'
// Vue.component('test', Machine);

import VueRouter from 'vue-router' //installer vue router : npm install vue-router
Vue.use(VueRouter);

import * as VueGoogleMaps from 'vue2-google-maps'//installer vue map : npm install vue2-google-maps

Vue.use(VueGoogleMaps, {
  load: {
    key: ' AIzaSyAFitITUROy2w4_WCjA92S0Axj-Hc2WCDA ',//clé API récupérée sur googlemap api
    libraries: 'places',
  }
});

//création des routes
const routes = [
  {path: '/machines', component: machinesList},
  {path: '/map', component: machinesMap},
  {path: '/machine', component: Machine},
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
