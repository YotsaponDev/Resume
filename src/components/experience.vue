<template>
  <b-container class="bv-example-row">
  <div class="mt-4">
    <ul class="timeline">
				<li>
					<a style="color:#d33400">New Web Design</a>
					<a style="color:#d33400" class="float-right">21 March, 2014</a>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
				</li>
				<li>
					<a style="color:#d33400">21 000 Job Seekers</a>
					<a style="color:#d33400" class="float-right">4 March, 2014</a>
					<p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
				</li>
				<li>
					<a style="color:#d33400">Awesome Employers</a>
					<a style="color:#d33400" class="float-right">1 April, 2014</a>
					<p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
          <b-row>
            <b-col>
<b-img :src="require('@/assets/images/image1.jpg')" fluid alt="About image"></b-img>
            </b-col>
            <b-col>
              <b-img :src="require('@/assets/images/image1.jpg')" fluid alt="About image"></b-img>
            </b-col>
            <b-col>
              <b-img :src="require('@/assets/images/image1.jpg')" fluid alt="About image"></b-img>
            </b-col>
          </b-row>
				</li>
			</ul>
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