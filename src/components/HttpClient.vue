<template>
  <div class="hello">
    <h1>Hola</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <input v-model="search" type="text" />
    <ul>
      <li v-for="item in items" :key="item.type">
        {{ item.properties.label }}
      </li>
    </ul>
    <p>Thanks <a target="_blank" href="https://geo.api.gouv.fr/adresse">French government</a> !</p>
  </div>
</template>

<script>
export default {
  name: 'HttpClient',
  data () {
    return {
      search: '',
      refreshHandler: null,
      items: []
    }
  },
  props: {
    msg: String
  },
  methods: {
    refresh: function (val) {
      const uri = 'https://api-adresse.data.gouv.fr/search/?q='
      this.$http.get(uri + val.replace(' ', '+') + '&limit=10&type=street')
        .then(res => {
          console.log(res.data)
          this.items = res.data.features
          this.$notification.fire('oui')
        })
    }
  },
  watch: {
    search: function (val) {
      if (val.length > 2) {
        const me = this
        clearTimeout(this.refreshHandler)
        me.refreshHandler = setTimeout(function () {
          me.refresh(val)
          me.$emit('parent-event', val)
        }, 200)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/mixin';
h1 {
  @include mixintest;
}
h3 {
  margin: 40px 0 0;
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
