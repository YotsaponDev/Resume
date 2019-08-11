<style scoped>
.bg-custom{
  background-color: #d33400;
}
</style>
<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="custom">
    <b-img height="40" rounded="circle" alt="Avatar" :src="require('@/assets/images/avatar.jpg')"></b-img>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-brand class="ml-2">YOTSAPON THIMAKHAM</b-navbar-brand>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <router-link to="/" tag="b-nav-item">
            <span>ABOUT</span>
          </router-link>
          <router-link to="/experience" tag="b-nav-item">
            <span>EXPERIENCE</span>
          </router-link>
          <router-link to="/education" tag="b-nav-item">
            <span>EDUCATION</span>
          </router-link>
          <router-link to="/skills" tag="b-nav-item">
            <span>SKILLS</span>
          </router-link>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <router-view></router-view>
  </div>

</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {

    },
  }

</script>