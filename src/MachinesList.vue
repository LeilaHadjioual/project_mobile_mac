<template>
  <div>
    <h1> Liste des machines </h1>
    <Machine v-for="machine in machines"
             :key="machine.id"
             v-bind:name="machine.name"
             :status="machine.status"
             :checkedAt="machine.checkedAt">
    </Machine>

    </div>
</template>

<script>
  import Machine from './Machine.vue' // import du composant pour pouvoir l'utiliser
  // import axios from 'axios' //pour pouvoir utiliser la bibliothèque axios (get-post)

  export default {
    components: {Machine},//récup le composant machine pour pouvoir l'utiliser
    props : ['machines', 'loading', 'error'],
    name: "machinesList",
    // data: function () {
    //   return {
    //     machines: [],// api machine fournie
    //     loading: true,
    //     error: null,
    //   }
    // },
    // created() {
    //   axios.get('https://machine-api-campus.herokuapp.com/api/machines')
    //     .then(response => {
    //       this.loading = true;
    //       this.machines = response.data
    //     })
    //     .catch(error => {
    //       this.errors.push(error)
    //     })
    // }
  }
</script>

<style scoped>


</style>
