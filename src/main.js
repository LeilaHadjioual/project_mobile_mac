import Vue from 'vue'
import App from './App.vue'
import list from './MachinesList.vue'// nom de la props from fichier où est définit la props
Vue.component('ListMachines', list); // nom que l'on définit (à appeler dans la balise) , nom de la props
import map from './MachinesMap.vue'

Vue.component('MapMachines', map);
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {path: '/machines', component: list},
  {path: '/map', component: map}
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,

});
