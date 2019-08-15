<template>
  <b-container class="bv-example-row">
    <div class="mt-4">

      <b-row class="mb-2">
        <b-col>
          <h3>PROGRAMMING LANGUAGES & DEVELOPMENT TOOLS</h3>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col>

          <i class="devicon-vuejs-plain-wordmark colored mr-2" style="font-size: 4em;"></i>
          <i class="devicon-bootstrap-plain-wordmark colored mr-2" style="font-size: 4em;"></i>
          <i style="font-size: 4em;" class="devicon-dot-net-plain-wordmark colored  mr-2"></i>
          <i class="devicon-laravel-plain-wordmark colored  mr-2" style="font-size: 4em;"></i>
          <i class="devicon-nodejs-plain colored mr-2" style="font-size: 4em;"></i>
          <i class="devicon-express-original colored mr-2" style="font-size: 4em;"></i>
          <i class="devicon-docker-plain-wordmark colored mr-2" style="font-size: 4em;"></i>
          <i class="devicon-apache-line-wordmark  colored mr-2" style="font-size: 4em;"></i>
        </b-col>
      </b-row>
      <br>
      <b-row class="mb-4">
        <b-col>
          <i class="devicon-csharp-plain-wordmark  colored mr-2" style="font-size: 4em;"></i>
          <i class="devicon-c-plain-wordmark colored mr-2" style="font-size: 4em;"></i>
          <i class="devicon-php-plain  colored mr-2" style="font-size: 4em;"></i>
          <i class="devicon-javascript-plain  colored mr-2" style="font-size: 4em;"></i>
          <i class="devicon-jquery-plain-wordmark  colored mr-2" style="font-size: 4em;"></i>
          <i class="devicon-html5-plain-wordmark  colored mr-2" style="font-size: 4em;"></i>
          <i class="devicon-css3-plain-wordmark  colored mr-2" style="font-size: 4em;"></i>
        </b-col>
      </b-row>

      <br>
      <b-row class="mb-4">
        <b-col>
          <i class="devicon-git-plain-wordmark  colored mr-2" style="font-size: 4em;"></i>
          <i class="devicon-github-plain-wordmark  colored mr-2" style="font-size: 4em;"></i>
          <i class="devicon-gitlab-plain-wordmark  colored mr-2" style="font-size: 4em;"></i>
          <i class="devicon-sourcetree-plain-wordmark  colored mr-2" style="font-size: 4em;"></i>
          <i class="devicon-trello-plain-wordmark  colored mr-2" style="font-size: 4em;"></i>
        </b-col>
      </b-row>

      <br>
      <b-row class="mb-4">
        <b-col>
          <i class="devicon-mysql-plain-wordmark  colored mr-2" style="font-size: 4em;"></i>
          <i class="devicon-postgresql-plain-wordmark  colored mr-2" style="font-size: 4em;"></i>
        </b-col>
      </b-row>

    </div>

  </b-container>
</template>

<script>
  export default {
    data() {
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

  ul.timeline>li {
    margin: 20px 0;
    padding-left: 20px;
  }

  ul.timeline>li:before {
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
