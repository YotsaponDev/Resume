<template>
  <div>
    <v-layout>
      <v-flex xs sm md>
        <v-card class="mx-auto" :height="screenHeight" width="300" left>
          <v-navigation-drawer absolute dark :src="require('@/assets/nav.jpg')" width="100%" permanent>
            <v-list>
              <v-list-item link>
                <router-link to="/" tag="v-list-item-content">
                  <center><span>ABOUT</span></center>
                </router-link>
              </v-list-item>

              <v-list-item link>
                <router-link to="/experience" tag="v-list-item-content">
                  <center><span>EXPERIENCE</span></center>
                </router-link>
              </v-list-item>

              <v-list-item link>
                <router-link to="/education" tag="v-list-item-content">
                  <center><span>EDUCATION</span></center>
                </router-link>
              </v-list-item>

              <v-list-item link>
                <router-link to="/skills" tag="v-list-item-content">
                  <center><span>SKILLS</span></center>
                </router-link>
              </v-list-item>

            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-flex>
      <v-flex xs sm md>
        <router-view></router-view>
      </v-flex>
    </v-layout>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        screenHeight: "",
        items: [
          ['mdi-email', 'Inbox'],
          ['mdi-account-supervisor-circle', 'Supervisors'],
          ['mdi-clock-start', 'Clock-in'],
        ],
      }
    },
    mounted() {
      this.screenHeight = document.documentElement.clientHeight
    },
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

</style>
