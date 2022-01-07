<template>
  <div id="app">
    <div id="banner">
      <div class="container-fluid h-100">
        <div class="row align-items-center h-100">
          <div class="col-12 col-md-6">
            x
          </div>
          <div class="col-12 col-md-6 text-center text-md-left">
            <div>
              <h3 id="text-hello">
                HELLO! I AM
              </h3>
              <h5 id="text-develop">
                {{banner_text_render}}
                <!-- FULL STACK WEB DEVELOPER -->
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col text-center" id="about">
          <p style="font-size:28px;">
            Be a full stack web developer that can work in a variety of ways and flexibility
          </p>
          <div class="d-flex justify-content-center">
            <a href="https://github.com/YotsaponDev" style="text-decoration: none; color: unset;">
              <i class="devicon-github-original mr-2" style="font-size: 2.0em;cursor:pointer;"></i>
            </a>
            <a href="https://www.linkedin.com/in/boss-yotsapon/" style="text-decoration: none; color: unset;">
              <i class="devicon-linkedin-plain colored mr-2" style="font-size: 2.0em;cursor:pointer;"></i>
            </a>
            <a href="https://www.facebook.com/boss.yotsapon" style="text-decoration: none; color: unset;">
              <i class="devicon-facebook-original colored mr-2" style="font-size: 2.0em;cursor:pointer;"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid pl-0 pr-0" id="biography">
      <div class="row">
        <div class="col">
          <div class="container">
            <div class="row p-0 text-center">
              <div class="col">
                <h2 class="mb-4">BIOGRAPHY</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-6">
                <p>
                  I'm a full stack web developer with 3 years of experience. I'm from Bangkok, Thailand.
                  I love coding as my soul to get the best results for work and believe that working with
                  a good teamwork will give good results as well.
                </p>
              </div>
              <div class="col-12 col-md-6 d-flex justify-content-center">
                <div>
                  <table style="width:100%">
                    <tr>
                      <td style="width: 120px;">Name:</td>
                      <td>Yotsapon Thimakham</td>
                    </tr>
                    <tr>
                      <td>Birthday:</td>
                      <td>February 27, 1995</td>
                    </tr>
                    <tr>
                      <td>Age:</td>
                      <td>{{calculateAge(new Date(1995, 2, 27))}} Years</td>
                    </tr>
                    <tr>
                      <td>Language:</td>
                      <td>Thai, English</td>
                    </tr>
                    <tr>
                      <td>Address:</td>
                      <td>Bangkok, Thailand</td>
                    </tr>
                    <tr>
                      <td>Tel:</td>
                      <td>(+66)95-742-4839</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>boss.yotsapon@gmail.com</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid pl-0 pr-0" id="technical-skill">
      <div class="container">
        <div class="row p-0 text-center">
          <div class="col">
            <h2 class="mb-4">TECHNICAL SKILL</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 text-center mb-4">
            <h4>Language/Library</h4>
            <div class="d-flex flex-wrap justify-content-center">
              <i class="devicon-javascript-plain colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-typescript-plain colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-jquery-plain-wordmark colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-csharp-plain colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-c-plain colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-php-plain colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-html5-plain colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-css3-plain colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-sass-original colored ml-1 mr-1 dev-icon"></i>
            </div>
          </div>
          <div class="col-12 col-md-6 text-center mb-4">
            <h4>Framework/Environment etc.</h4>
            <div class="d-flex flex-wrap justify-content-center">
              <i class="devicon-nuxtjs-plain colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-vuejs-plain-wordmark colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-react-original-wordmark colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-wordpress-plain-wordmark colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-bootstrap-plain colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-nodejs-plain colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-express-original colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-socketio-original-wordmark colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-sequelize-plain-wordmark colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-laravel-plain-wordmark colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-codeigniter-plain-wordmark colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-dotnetcore-plain colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-docker-plain colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-nginx-original-wordmark ml-1 mr-1 dev-icon"></i>
              <i class="devicon-linux-plain colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-centos-plain-wordmark colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-digitalocean-plain-wordmark colored ml-1 mr-1 dev-icon"></i>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 text-center mb-4">
            <h4>Software/Tools</h4>
            <div class="d-flex flex-wrap justify-content-center">
              <i class="devicon-vscode-plain colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-visualstudio-plain colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-atom-original colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-git-plain colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-sourcetree-original-wordmark colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-putty-plain colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-jenkins-plain ml-1 mr-1 dev-icon"></i>
              <i class="devicon-composer-line-wordmark colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-npm-original-wordmark colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-trello-plain-wordmark colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-filezilla-plain-wordmark colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-photoshop-plain colored ml-1 mr-1 dev-icon"></i>
            </div>
          </div>
          <div class="col-12 col-md-6 text-center mb-4">
            <h4>Database</h4>
            <div class="d-flex flex-wrap justify-content-center">
              <i class="devicon-mysql-plain-wordmark colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-postgresql-plain colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-oracle-original colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-mongodb-plain-wordmark colored ml-1 mr-1 dev-icon"></i>
              <i class="devicon-firebase-plain-wordmark colored ml-1 mr-1 dev-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid pl-0 pr-0" id="education">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2 class="mb-4">EDUCATION</h2>
          </div>
        </div>
        <div class="row p-0 text-center">
          <div class="col-md-5 text-center text-sm-center text-md-right">
            <v-avatar height="200" width="200">
              <b-img :src="require('@/assets/images/image2.jpg')" fluid alt="Responsive image">
              </b-img>
            </v-avatar>
          </div>
          <div class="col-md-7 text-md-left text-center text-sm-center align-self-center mt-3 mt-md-0">
            <div>
              <h5>Suranaree University of Technology</h5>
              <h5>Bachelor of Engineering</h5>
              <h5>Computer Engineering</h5>
              <h5 style="color:#d33400">June 2013 - March 2017</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid pl-0 pr-0" id="work-experience">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h2 class="mb-4">WORK EXPERIENCE</h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h5>EGP - The Thai Bar Under The Royal Patronage</h5>
            <font>Jan 2020 – Mar 2020</font><br><br>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      let text = "FULL STACK WEB DEVELOPER"
      return {
        windowsize: {
          width: 0,
          height: 0,
        },
        banner_text: text,
        banner_text_render: "",
        count_banner_text: text.length,
        counter_banner_text: 0
      }
    },
    mounted() {
      this.$nextTick(() => {
        if (process.browser) {
          window.addEventListener("resize", this.handleResize);
        }
        this.handleResize();
      });
      this.WriteText()
      console.log(this.count_banner_text);
    },
    methods: {
      WriteText() {
        let sto = setTimeout(() => {
          if (this.counter_banner_text < this.count_banner_text) {
            this.banner_text_render = this.banner_text_render + this.banner_text.charAt(this.counter_banner_text)
              ++this.counter_banner_text
            this.WriteText()
          }
        }, 180);
        // if(this.counter_banner_text == (this.count_banner_text-1)){
        //     clearTimeout(sto);
        //     console.log("Ssss");
        //     this.counter_banner_text = 0
        //     this.banner_text_render = ""
        //     this.WriteText()
        //   }
      },
      calculateAge(dob) {
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
      },
      handleResize() {
        if (process.browser) {
          this.windowsize.width = window.innerWidth;
          this.windowsize.height = window.innerHeight;
        }
        let banner = document.getElementById("banner")
        banner.style.width = this.windowsize.width + "px"
        banner.style.height = this.windowsize.height + "px"
      },
    },
    destroyed() {
      window.removeEventListener("resize", this.handleResize);
    },
  }
</script>
<style>
  .bg-custom {
    background-color: #d33400;
  }

  #banner {
    background-color: #ebfdff;
  }

  #about {
    margin-top: 128px;
    margin-bottom: 128px;
  }

  #text-hello {
    font-size: 48px;
  }

  #text-develop {
    font-family: consolas;
    font-size: 36px;
  }

  #biography {
    background-color: #f8f8f8;
    padding-top: 96px;
    padding-bottom: 96px;
    overflow: hidden;
  }

  #technical-skill {
    padding-top: 96px;
    padding-bottom: 96px;
  }

  #education {
    background-color: #f8f8f8;
    padding-top: 96px;
    padding-bottom: 96px;
  }

  #work-experience{
    padding-top: 96px;
    padding-bottom: 96px;
  }

  .dev-icon {
    font-size: 2.3em;
    margin-bottom: 8px;
    margin-top: 8px;
  }

  @media (max-width:1024px) {
    #text-hello {
      font-size: 36px;
    }

    #text-develop {
      font-size: 28px;
    }
  }

  @media (max-width: 768px) {
    #text-hello {
      font-size: none;
    }

    #text-develop {
      font-size: none;
    }
  }
</style>