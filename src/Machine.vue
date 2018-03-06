<template>
  <div>
    <h1>Nom de la machine : {{name}}</h1>
    <h3 v-if="!status === true" :class={vrai:status}>Status : OK</h3>
    <h3 :class={faux:!status} v-else> Status : KO </h3>
    <h5>Last time checked: {{checkedAt}}</h5>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        name: 'What else ?',
        status: true,
        checkedAt: new Date().toLocaleString(), //pour changer le format de la date
      }
    }
  }
</script>

<style scoped>

  .vrai {
    color: lawngreen;
  }

  .faux {
    color: red;
  }
</style>
