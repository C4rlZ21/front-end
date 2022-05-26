<template>
  <nav class="navbar">
    <div class="nav_bar" v-if="this.login_is==0">
      <router-link class="route" to="/about">registo</router-link> 
      <router-link class="route" to="/">login</router-link> 
    </div>
    <div class="nav_bar" v-if="this.login_is==0">
      
      <router-link class="route" to="/home">Home</router-link>
      <router-link class="route" to="/search">search</router-link> 
      <router-link class="route" to="/api2">Api2</router-link>
    </div>
    <div class="nav_bar" v-if="this.login_is==0">
      <router-link class="route" to="/admin">Admin</router-link> 
    </div>
  </nav>
  <router-view/>
</template>

<script>
export default ({
    data() {
        return {
          login_is:0,
        }
    },

})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  background-color: #42b983;
}
.navbar{
  display: flex;
  margin-top:-10px;
  margin-left:-10px;
  margin-right:-10px;
  background-color: #2c2e3b;
  margin-bottom: 10px;
}
.route{
  padding: 20px;
}
.nav_bar{
  display: flex;
}
</style>
