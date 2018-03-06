<template>
  <div>
    <h1>Nom de la machine : {{name}}</h1>
    <h3 v-if="status === true" :class={vrai:status}>Status : OK</h3>
    <h3 :class={faux:!status} v-else> Status : KO </h3>
    <h5>Last time checked: {{checkedAt}}</h5>
  </div>

</template>

<script>
  export default {
    name : "Machine",
    props:['name','status','checkedAt'],
  }
</script>

<style scoped>
  div{
    border: 2px solid black;
    margin: auto;
    width: 65%;
    margin-bottom: 15px;

  }

  .vrai {
    color: lawngreen;
  }


  .faux {
    color: red;
  }
</style>
