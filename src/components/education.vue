<template>
  <b-container class="bv-example-row">
  <div class="mt-4">
    <b-card-group>
      <b-card header="EDUCATION" class="text-center">
          <b-card-text>
            <b-row class="text-center">
              <b-col><b-img :src="require('@/assets/images/image2.jpg')" fluid alt="Education image">
              </b-img></b-col>
            </b-row>

            <b-row class="text-center mt-2">
              <b-col>
                <h2>SURANAREE UNIVERSITY OF TECHNOLOGY</h2>
                <h4>BACHELOR OF ENGINEERING</h4>
                <h5>Computer Engineering</h5>
                <h5 style="color:#d33400">June 2013 - March 2017</h5>
                <h5></h5>
              </b-col>
              

            </b-row>

          </b-card-text>
        </b-card>
      </b-card-group>
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
<style scoped>
ul.timeline {
    list-style-type: none;
    position: relative;
}
ul.timeline:before {
    content: ' ';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
    z-index: 400;
}
ul.timeline > li {
    margin: 20px 0;
    padding-left: 20px;
}
ul.timeline > li:before {
    content: ' ';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid #d33400;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
}
</style>