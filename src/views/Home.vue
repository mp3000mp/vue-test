<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HttpClient @parent-event="hideTab" />
  </div>
</template>

<script>
// @ is an alias to /src
import HttpClient from '@/components/HttpClient.vue'

export default {
  name: 'Home',
  components: {
    HttpClient
  },
  methods: {
    hideTab: function (arg1) {
      this.$emit('root-event', arg1)
    }
  }
}
</script>
