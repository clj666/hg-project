<template>
  <div class="con">
    <div class="roll">
			<m-header></m-header>
			<m-massage :data="user" :uName="uName"></m-massage>
			<m-order></m-order>
			<m-cash :data="user"></m-cash>
			<m-admin></m-admin>
			<h-public></h-public>
		</div>
    <pub-footer></pub-footer>
  </div>
</template>

<script>
import header from './mine/header'
import massage from './mine/massage'
import order from './mine/order'
import cash from './mine/cash'
import admin from './mine/admin'
import hPublic from './home/public'
import footer from './public-footer'
export default {
  name: 'found',
	data(){
		return {
			user: false,
			uName: ''
		}
	},
  components: {
    'm-header':header,
    'm-massage':massage,
    'm-order':order,
    'm-cash':cash,
    'm-admin':admin,
		'h-public':hPublic,
    'pub-footer':footer
  },
	beforeMount() {
		if(localStorage.user1 == 'true'){
			this.user = true;
			this.uName = localStorage.user;
			console.log(22222222)
		}else{
			this.user = false;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
