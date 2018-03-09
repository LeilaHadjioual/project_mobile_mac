<template>
  <div>
    <h1>Carte des machines</h1>
    <div>
      <!--animation-->
      <transition name="bounce">
        <!--affiche le nom de la machine si clic marqueurs-->
        <Machine v-if="afficheMachine"
                 v-bind:name="afficheMachine.name"
                 :status="afficheMachine.status"
                 :checkedAt="afficheMachine.checkedAt">
        </Machine>
      </transition>
    </div>
    <!--affiche la map-->
    <gmap-map class="map"
              :center="{lat:position.latitude, lng:position.longitude}"
              :zoom="7">
              <!--:center="{lat:45.16667, lng: 5.71667}"-->

      <div>
        <!--affiche les marqueurs-->
        <gmap-marker :key="machine.id"
                     v-for="machine in machines"
                     :position="{lat:Number(machine.latitude),lng:Number(machine.longitude)}"
                     :draggable="true"
                     @click="affichage(machine)">
          <!--:position="{lat : mark.latitude, mark.longitude"-->
        </gmap-marker>
      </div>
    </gmap-map>
  </div>

</template>

<script>
  // import axios from 'axios'
  import Machine from './Machine.vue'

  export default {
    name: "machinesMap",
    components: {Machine},//pour utiliser la balise Machine
    props: ['machines', 'loading', 'error'],
    data() {
      return {
        afficheMachine: '',
        position: {
          latitude: 45.16667,
          longitude: 5.71667,
        }
      }
    },
    methods: {
      affichage: function (uneMachine,) {
        this.afficheMachine = uneMachine; //récupérer les infos de la machine
      }
    },
    mounted() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (pos) {
          this.position = pos.coords;
        })
      } else {
        alert("Sorry, no position available.");
      }
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
  }
</script>

<style scoped>
  .map {
    width: 60%;
    height: 800px;
    margin: auto;
    border: 2px solid;
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
