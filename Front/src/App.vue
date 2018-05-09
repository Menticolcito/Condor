<template>
<div id="app"><img src="./assets/logo.png" />
    <h1>Condor</h1>
    <select v-model="selectedState">
      <option v-for="state in states" v-bind:value="state.value">{{ state.name }}</option>
    </select>
    <ul>
        <log v-for="log in logs" v-bind:log="log" v-bind:key="log.cd_machine"></log>
    </ul>
</div>
</template>

<script>
import Logs from './components/logs.vue'
import getLogs from './api'

export default {
  name: 'app',
  data () {
    return {
      logs: [],
      states: [
        { name: 'Florida', value: 'FL' },
        { name: 'Ohaio', value: 'OH' },
        { name: 'Georgia', value: 'GA' },
        { name: 'Luisiana', value: 'LA' },
      ],
      selectedState: 'Florida'
    }
  },
  components: {
    Logs
  },
  methods: {
    refreshLogs() {
      const self = this
      getLogs(this.selectedState)
        .then(function (logs) {
          self.logs = logs
        })
    }
  },
  mounted() {
    this.refreshLogs()
  },
  watch: {
    selectedState() {
      this.refreshLogs()
    }
  }
}
</script>

<style>
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
