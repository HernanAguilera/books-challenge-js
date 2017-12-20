<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
        <h1>Listado de libros</h1>
      </div>
      <div class="col-md-2">
        <span v-show="loading">
          <vue-loading type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
        </span>
      </div>
      <div class="col-md-4"></div>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import vueLoading from 'vue-loading-template'
export default {
  name: 'app',
  components: {
    vueLoading
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style src='bootstrap/dist/css/bootstrap.css'></style>
<style src='font-awesome/css/font-awesome.css'></style>
<style src="bootstrap-vue/dist/bootstrap-vue.css"></style>
