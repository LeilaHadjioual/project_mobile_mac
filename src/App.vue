<template>
  <div id="app">
    <img src="./assets/coffee-house-cafe-logo.png"/>
    <h1> {{ msg }} </h1>
    <!--définit les liens routes-->
    <router-link to="/machines">
      <button v-on:click="onMachinesListClick"> {{msg2}}</button>
    </router-link>
    <router-link to="/map">
      <button v-on:click="onMapClick"> {{msg3}}</button>
    </router-link>
    <!--retourne la vue-->
    <router-view v-bind:machines="machines" :loading="loading" :error="error"> </router-view>
    <!--affiche 'liste des machines' grace au composant créé dans machineslist.vue-->
    <!--<ListMachines> </ListMachines>-->
    <!--<MapMachines> </MapMachines>-->
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Gestion machines à café',
        msg2: 'Consulter la liste des machines',
        msg3: 'Voir la carte',
        machines: [],// api machine fournie
        loading: true,
        error: null,
      }
    },
    methods: {
      onMachinesListClick: function () {
        alert('Vous avez cliqué sur la liste des machines ')
      },
      onMapClick: function () {
        alert('Vous avez cliqué sur la carte des machines')
      }
    },
    created() {
      axios.get('https://machine-api-campus.herokuapp.com/api/machines')
        .then(response => {
          this.machines = response.data;
          this.loading = false;
        })
        .catch(error => {
          this.error.push(error)
        })
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;

  }

  button {
    background-color: #B4AF91;
    padding-left: 10%;
    padding-right: 10%;
    height: 50px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 120%;

  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
