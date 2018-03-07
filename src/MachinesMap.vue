<template>
  <div>
    <h1>Carte des machines</h1>
    <gmap-map class="map"

              :center="{lat:45.16667, lng: 5.71667}"
              :zoom="12">
      <div>
        <gmap-marker :key="markers.id"
                     v-for="mark in markers"
                     :position="{lat:mark.latitude, lng:mark.longitude}"
                     :draggable="true">

        </gmap-marker>
      </div>
    </gmap-map>
  </div>

</template>

<script>
  export default {
    name: "machinesMap",
    data() {
      return {
        markers: [{
          id: 1,
          latitude: 45.165133,
          longitude: 5.767761,
        },
          {
            id: 2,
            latitude: 45.142151,
            longitude: 5.718034,
          }]
      }
    }
  }
</script>

<style scoped>
  .map {
    width: 60%;
    height: 800px;
    margin: auto;
    border: 2px solid;
  }
</style>
