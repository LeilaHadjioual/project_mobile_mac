import Vue from 'vue'
import App from './App.vue'
import list from './MachinesList.vue'// nom de la props from fichier où est définit la props
import map from './MachinesMap.vue'
Vue.component('ListMachines', list); // nom que l'on définit (à appeler dans la balise) , nom de la props
Vue.component('MapMachines', map);

new Vue({
    el: '#app',
    render: h => h(App)
})
