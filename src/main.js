import Vue from 'vue'
import App from './App.vue'
import list from './MachinesList.vue'// nom de la props from fichier où est définit la props
Vue.component('ListMachines', list); // nom que l'on définit (à appeler dans la balise) , nom de la props
import map from './MachinesMap.vue'
Vue.component('MapMachines', map);
import Machine from './Machine.vue'
// Vue.component('name', Machine);
import VueRouter from 'vue-router' //installer vue router : npm install vue-router
Vue.use(VueRouter);

//création des routes
const routes = [
  {path: '/machines', component: list},
  {path: '/map', component: map},
  {path:'/machine', component: Machine},
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,

});
