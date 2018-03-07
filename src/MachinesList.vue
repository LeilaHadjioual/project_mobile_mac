<template>
  <div>
    <h1> Liste des machines </h1>
     <Machine v-for= "machine in machines"
              :key ="machine.id"
              v-bind:name="machine.name"
              :status="machine.status"
              :checkedAt="machine.checkedAt.toLocaleString()">
     </Machine>
  </div>

</template>

<script>
  import Machine from './Machine.vue' // import du composant pour pouvoir l'utiliser

  export default {
    components: {Machine},//récup le composant machine
    name: "machinesList",
    data() {
      return {
        machines: [{
          id: 1,
          name: 'What else ?',
          status: true,
          checkedAt: new Date(),
        }, {
          id: 2,
          name: 'Broken',
          status: false,
          checkedAt: new Date(),
        }]
      }
    }
  }
</script>

<style scoped>



</style>
