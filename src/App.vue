<template>
  <div id="app">
    <div id="banner">
      <div class="container-fluid h-100">
        <div class="row align-items-center h-100">
          <div class="col pl-0 pr-0 pr-md-4 h-100">
            <div class="d-flex h-100 align-items-center">
              <div class="text-center banner-left" v-if="windowsize.width >= 768">
                <div class="banner-left-content">
                  <b-avatar :src="require('@/assets/images/avatar.jpg')" alt="avatar" size="200px" class="avatar"></b-avatar>
                  <h5 class="mt-4" style="color: white;">
                    YOTSAPON THIMAKHAM
                  </h5>
                  <span style="font-size: 14px;color: #c1c1c1;">FULL STACK WEB DEVELOPER</span><br />
                  <div class="d-flex justify-content-center mt-4">
                    <a href="https://github.com/YotsaponDev" style="text-decoration: none;">
                      <i class="devicon-github-original mr-2" style="font-size: 1.4em;cursor:pointer; color: #ffffff;"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/boss-yotsapon/" style="text-decoration: none;">
                      <i class="devicon-linkedin-plain colored mr-2" style="font-size: 1.4em;cursor:pointer;color: #ffffff;"></i>
                    </a>
                    <a href="https://www.facebook.com/boss.yotsapon" style="text-decoration: none;">
                      <i class="devicon-facebook-original colored mr-2" style="font-size: 1.4em;cursor:pointer; color: #ffffff;"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="text-center w-100">
                <div>
                  <b-avatar v-if="windowsize.width < 768" :src="require('@/assets/images/avatar.jpg')" alt="avatar" size="170px" class="avatar mb-5"></b-avatar>
                  <h3 id="text-hello">
                    YOTSAPON THIMAKHAM
                  </h3>
                  <h5 id="text-develop">
                    {{banner_text_render}}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="col-12 col-md-4 text-center banner-left">
            <div class="banner-left-content">
              <b-avatar :src="require('@/assets/images/avatar.jpg')" alt="avatar" size="200px"></b-avatar>
            </div>
          </div>
          <div class="col-12 col-md text-center">
            <div>
              <h3 id="text-hello">
                YOTSAPON THIMAKHAM
              </h3>
              <h5 id="text-develop">
                {{banner_text_render}}
              </h5>
            </div>
          </div> -->
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
                  I'm a full stack web developer with 4 years of experience. I'm from Bangkok, Thailand.
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
                      <td>Age:</td>
                      <td>{{calculateAge(new Date("1995/02/27"))}}</td>
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
                      <td>(+66)9-5742-4839</td>
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
            <h5>Marketplace to buy, rent and sell property</h5>
            <font>Mar. 2020 - Currently</font><br>
            <font>Thathrit Co., Ltd.</font><br><br>
            <div class="text-center">
              <b-img :src="require('@/assets/images/hautse1.jpg')" fluid alt="Responsive image"></b-img><br><br>
              <b-img :src="require('@/assets/images/hautse2.jpg')" fluid alt="Responsive image"></b-img>
            </div><br>
            <p>
              &emsp;&emsp;&emsp;The company is a startup company that wants to develop their own website. 
              Therefore, I have an idea to develop a website about the marketing of leasing, buying and 
              selling assets in the form of long-term leases contracts which all processes can be carried out 
              through the entire website or the website as a one stop service, whether contacting via chat system, 
              making an appointment to view the room and making a contract.
            </p>
            <h5>Roles / Responsibilities</h5>
            <p>
              &emsp;&emsp;&emsp;Perform tasks assigned to front-end, back-end, and saver.
              The main work done is The structure of the entire web application layer, whether it is a front end 
              that uses Nuxt.Js to develop which is suitable for SEO, in the back end is used PHP(Laravel), 
              Node.JS with Express.JS as a service or server, uses Docker as a building environment, and works with 
              NGINX to reverse-proxy.
            </p>
            <h5>Language and development tools </h5>
            <p>
              Front-end<br>
              - Nuxt.Js (Vue.Js Framwork) <br>
              - - BootstrapVue <br>
              - - Vuetify.Js <br>
              - - JavaScript <br><br>
              Back-end<br>
              - Laravel (php) <br>
              - Node.Js <br>
              - Express.Js <br>
              - Socket.IO <br>
              - MySql Database<br><br>
              Docker<br>
              Nginx<br>
              Jenkins<br>
              NPM<br>
              Git Source Control<br>
            </p>
            <hr>
            <h5>Engagement and Advertising</h5>
            <font>May. 2020 - Feb. 2021</font><br>
            <font>Thathrit Co., Ltd.</font><br><br>
            <div class="text-center">
              <b-img :src="require('@/assets/images/cmmnground1.jpg')" fluid alt="Responsive image"></b-img><br><br>
              <b-img :src="require('@/assets/images/cmmnground2.jpg')" fluid alt="Responsive image"></b-img>
            </div><br>
            <p>
              &emsp;&emsp;&emsp;The company is a startup company that wants to develop their own website. 
              Therefore, I have an idea to develop a website about advertising, marketing online in 
              conjunction with the world's leading brands, products and companies. Polls are included in the 
              content to keep users engaged with the website. Which is a key feature in web development.
            </p>
            <h5>Roles / Responsibilities</h5>
            <p>
              &emsp;&emsp;&emsp;Perform tasks assigned to front-end, back-end, and saver.
              The main work done is The structure of the entire web application layer, whether it is a front end 
              that uses Nuxt.Js to develop which is suitable for SEO, in the back end is used PHP(Laravel),
              uses Docker as a building environment, and works with NGINX to reverse-proxy.
            </p>
            <h5>Language and development tools </h5>
            <p>
              Front-end<br>
              - Nuxt.Js (Vue.Js Framwork) <br>
              - - BootstrapVue <br>
              - - Vuetify.Js <br>
              - - JavaScript <br><br>
              Back-end<br>
              - Laravel (php) <br>
              - MySql Database<br><br>
              Docker<br>
              Nginx<br>
              Jenkins<br>
              NPM<br>
              Git Source Control<br>
            </p>
            <hr>
            <h5>EGP - The Thai Bar Under The Royal Patronage</h5>
            <font>Jan. 2020 - Feb. 2020</font><br>
            <font>Zawanna Technology Co., Ltd.</font><br><br>
            <div class="text-center">
              <b-img :src="require('@/assets/images/tb1.jpg')" fluid alt="Responsive image"></b-img>
            </div><br>
            <p>
              &emsp;&emsp;&emsp;Create an overall corporate business resource planning program.
              To achieve maximum utilization of the business resources of the organization.
              Is a system that is used to manage and plan the use of various resources of the organization.
              It is a system that connects various systems of the organization together, for example,
              if it is an ERP of a company, it will include from accounting and financial systems, work systems
              human resources production management system Including a distribution system to help the planning
              and management of the company's resources more efficiently, reducing time and procedures. working as well
            </p>
            <h5>Language and development tools </h5>
            <p>
              Front-end<br>
              - Vue.Js Framework <br>
              - - Bootstrap 4 <br>
              - - JavaScript <br><br>
              Back-end<br>
              - Laravel (php) <br>
              - Postgresql Database<br><br>
              NPM<br>
              Git Source Control<br>
            </p>
            <hr>
            <h5>EGP - Rajamangala University of Technology Tawan-ok</h5>
            <font>Jan. 2019 - Feb. 2020</font><br>
            <font>Zawanna Technology Co., Ltd.</font><br><br>
            <div class="text-center">
              <b-img :src="require('@/assets/images/rmutto1.jpg')" fluid alt="Responsive image"></b-img>
            </div><br>
            <p>
              &emsp;&emsp;&emsp;Create an overall corporate business resource planning program.
              To achieve maximum utilization of the business resources of the organization.
              Is a system that is used to manage and plan the use of various resources of the organization.
              It is a system that connects various systems of the organization together, for example,
              if it is an ERP of a company, it will include from accounting and financial systems, work systems
              human resources production management system Including a distribution system to help the planning
              and management of the company's resources more efficiently, reducing time and procedures. working as well
            </p>
            <h5>Language and development tools </h5>
            <p>
              Front-end<br>
              - Vue.Js Framework <br>
              - - Bootstrap 4 <br>
              - - JavaScript <br><br>
              Back-end<br>
              - Laravel (php) <br>
              - Postgresql Database<br><br>
              NPM<br>
              Git Source Control<br>
            </p>
            <hr>
            <h5>EGP - Srisavarindhira Thai Red Cross Institute of Nursing</h5>
            <font>Jan. 2019 - Feb. 2020</font><br>
            <font>Zawanna Technology Co., Ltd.</font><br><br>
            <div class="text-center">
              <b-img :src="require('@/assets/images/stin1.jpg')" fluid alt="Responsive image"></b-img>
            </div><br>
            <p>
              &emsp;&emsp;&emsp;Create an overall corporate business resource planning program.
              To achieve maximum utilization of the business resources of the organization.
              Is a system that is used to manage and plan the use of various resources of the organization.
              It is a system that connects various systems of the organization together, for example,
              if it is an ERP of a company, it will include from accounting and financial systems, work systems
              human resources production management system Including a distribution system to help the planning
              and management of the company's resources more efficiently, reducing time and procedures. working as well
            </p>
            <h5>Language and development tools </h5>
            <p>
              Front-end<br>
              - Vue.Js Framework <br>
              - - Bootstrap 4 <br>
              - - JavaScript <br><br>
              Back-end<br>
              - Laravel (php) <br>
              - Postgresql Database<br><br>
              NPM<br>
              Git Source Control<br>
            </p>
            <hr>
            <h5>Procurement announcement system from e-GP system (Bangkok)</h5>
            <font>Oct. 2019 - Nov. 2019</font><br>
            <font>Zawanna Technology Co., Ltd.</font><br><br>
            <div class="text-center">
              <b-img :src="require('@/assets/images/bkk1.jpg')" fluid alt="Responsive image"></b-img>
            </div><br>
            <p>
              &emsp;&emsp;&emsp;Bangkok is a government agency. which is subject to the Procurement Act 2017 and
              the Ministry of Finance's Regulations on Public Procurement and Supplies Management B.E. 2560,
              require government agencies to announce information dissemination in information technology
              systems. of government agencies (Bangkok website www.bangkok.go.th)<br>
              &emsp;&emsp;&emsp;Therefore, in order to establish a system for disseminating information about Bangkok Procurement,
              to be transparent and to allow fair competition Encourage the public to participate in the audit
              Prevent corruption and misconduct in procurement Build public confidence by ensuring that
              Bangkok Metropolitan Administration's procurement operations rely on four principles: cost-effectiveness,
              transparency, efficiency and effectiveness. and can check In accordance with the government procurement
              and supplies management regulations, B.E. 2560,
              therefore, one system for disseminating information on procurement under the new Act (e-GP) should be
              developed.
            </p>
            <h5>Language and development tools </h5>
            <p>
              Front-end<br>
              - Nuxt.Js (Vue.Js Framwork) <br>
              - - BootstrapVue <br>
              - - JavaScript <br><br>
              Back-end<br>
              - C# Asp.net core 2 <br>
              - OAuth 2 for authentication <br>
              - Postgresql Database<br><br>
              NPM<br>
              Git Source Control<br>
            </p>
            <hr>
            <h5>Online service system (e-Service) - Thailand Institute of Nuclear Technology (Public Organization)</h5>
            <font>May 2018 - Jan 2019</font><br>
            <font>Zawanna Technology Co., Ltd.</font><br><br>
            <div class="text-center">
              <b-img :src="require('@/assets/images/tint1.jpg')" fluid alt="Responsive image"></b-img>
            </div><br>
            <p>Nuclear Technology Service System Development Project to support Smart Service</p>
            <p>
              1. Background <br>
              &emsp;&emsp;&emsp;Currently, Thailand is having a policy to develop the economy and society 
              towards the digital age. Government agencies will be transformed into Digital Government, 
              so government agencies need to increase service efficiency to be faster, more convenient 
              and improve quality to meet the needs of users.<br>
              &emsp;&emsp;&emsp;So that people can access services by themselves (Self-Service) through 
              online channels from computer or portable devices (Smart Devices), such as Smart Phones 
              and Tablets, etc., by improving the services, such as repairing radiological equipment, radiation 
              meter calibration services, radiography equipment inspection services. and analytical measurement 
              services of the Institute.<br>
              &emsp;&emsp;&emsp;The Institute of Nuclear Technology recognizes the importance of upgrading such services. 
              Therefore, a project to develop a nuclear technology service system was established. To support the service 
              of Smart Service for the people to be convenient to receive the service. Reduce costs and time to contact 
              government agencies and can track the service status easily and quickly.
              <br><br>

              2. Objectives <br>
              &emsp;&emsp;&emsp;In this field of work, the institute has a desire to develop a commercial online 
              service system. This will be a channel for institutional customers to access various services by 
              themselves (service portal) through a web browser and also as a tool for institutional staff to 
              provide various services (back office process management). Develop this online service system to 
              make this online service system look like a platform for all institutional services. both existing 
              and services that will be developed in the future The institution's clients will be able to log in 
              to request a quote, order a service, track job status, notify payment of services and receive reports 
              from the one stop service institute
            </p>
            <h5>Language and development tools </h5>
            <p>
              Front-end<br>
              - Razor Pages Asp.net Core<br>
                - Bootstrap 4<br>
                - JavaScript<br>
                - jQuery<br>
                - Ajax<br><br>
              Back-end<br>
              - C# Asp.net core 2 <br>
              - OAuth 2 for authentication <br>
              - Postgresql Database<br><br>
              NPM<br>
              Git Source Control<br>
            </p>
            <hr>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid" id="footer">
      <div class="container">
        <div class="row p-0 text-center">
          <div class="col text-center">
            Presented by Yotsapon Thimakham © 2023 <br>
            Tel. +669 5742 4839
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
    },
    methods: {
      WriteText() {
        setTimeout(() => {
          if (this.counter_banner_text < this.count_banner_text) {
            this.banner_text_render = this.banner_text_render + this.banner_text.charAt(this.counter_banner_text)
              ++this.counter_banner_text
            this.WriteText()
          }
        }, 100);
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
    background-color: rgb(18, 18, 18);
  }

  .banner-left{
    /* background: linear-gradient(180deg, rgba(147,251,255,1) 0%, rgba(41,253,204,1) 100%); */
    background-color: rgb(49, 49, 49);
    height: inherit;
    width: 450px;
  }

  .banner-left-content{
    margin-top: 150px;
  }

  .avatar{
    border: 5px solid #ffffff;
  }

  #about {
    margin-top: 128px;
    margin-bottom: 128px;
  }

  #text-hello {
    font-size: 48px;
    color: white;
  }

  #text-develop {
    font-family: consolas;
    font-size: 28px;
    color: white;
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

  #work-experience {
    padding-top: 96px;
    padding-bottom: 96px;
  }

  #footer {
    background-color: #f8f8f8;
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