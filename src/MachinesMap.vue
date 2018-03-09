<template>
  <div>
    <h1>Carte des machines</h1>
    <gmap-map class="map"
              :center="{lat:45.16667, lng: 5.71667}"
              :zoom="2">
      <div>
        <gmap-marker :key="machine.id"
                     v-for="machine in machines"
                     :position="{lat:Number(machine.latitude),lng:Number(machine.longitude)}"
                     :draggable="true">
        <!--:position="{lat : mark.latitude, mark.longitude"-->

        </gmap-marker>
      </div>
    </gmap-map>
  </div>

</template>

<script>
  // import axios from 'axios'

  export default {
    name: "machinesMap",
    props : ['machines', 'loading', 'error']
    // data() {
    //   return {
    //     markers: [{
    //       id: 1,
    //       latitude: 45.165133,
    //       longitude: 5.767761,
    //     },
    //       {
    //         id: 2,
    //         latitude: 45.142151,
    //         longitude: 5.718034,
    //       }]
    //   }
    // },
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
    //       this.machines = response.data;
    //     })
    //     .catch(error => {
    //       this.errors.push(error)
    //     })
    // }
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
