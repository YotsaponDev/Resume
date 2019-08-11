<style scoped>
#card1{
  border: none;
  border-radius:0px;
}
</style>
<template>
  <b-container class="bv-example-row">
  <div class="mt-4">
    <b-card id="card1" class="mb-3">
      <b-card-text>
        <b-row>
          <b-col md="5" lg="3" xl="3"><b-img :src="require('@/assets/images/image1.jpg')" fluid alt="About image"></b-img></b-col>
          <b-col>
            <h2>YOTSAPON THIMAKHAM </h2>
            <p style="color:#d33400">FULL STACK WEB DEVELOPER</p>
            A Full Stack Developer with 1 year of experience with VueJs, React Native, NodeJS, Asp.Net Core, PHP(Laravel) And RESTful API
            
            <br> <br>
            Address: 
            </b-col>
        </b-row>
        
      </b-card-text>
    </b-card>
  </div>

  </b-container>
</template>

<script>
export default {
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
