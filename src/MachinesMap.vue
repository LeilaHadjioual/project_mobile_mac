<template>
  <div>
    <h1>Carte des machines</h1>
    <gmap-map
      :center="{lat:45.1885, lng:5.7245}"
      :zoom="12"
      style="width: 100%; height: 800px">
    </gmap-map>
  </div>

</template>

<script>
  export default {
    name: "machinesMap",
    // props : ['map']
  }
</script>

<style scoped>

</style>
