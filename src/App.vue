<template>
  <div id="app">
  	<nav class="navbar navbar-default navbar-fixed-top" :style="nav_style">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" 
						data-toggle="collapse" 
						data-target="#bs-example-navbar-collapse-1"
						aria-expanded="false">
				        <span class="sr-only">Toggle navigation</span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				    </button>
					<a class="navbar-brand" href="#">logo</a>
				</div>
				<div :class="showClass" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav navbar-right">
						<li @click="hide_nav"><router-link to="/index">首页</router-link></li>
						<li @click="hide_nav"><router-link to="/study" @click="hide_nav">学习</router-link></li>
						<li @click="hide_nav"><router-link to="/watching" @click="hide_nav">追番</router-link></li>
						<li @click="hide_nav">login</li>
						<!--<li><router-link to="/index">login</router-link></li>-->
					</ul>
				</div>
			</div>
		</nav>
    <router-view/>
    <footer>
    	这里是域名信息
    </footer>
  </div>
</template>

<script>
export default {
		name: 'app',
		data() {
			return {
				nav_style: 'top: -50px',
				showClass: 'collapse navbar-collapse'
			}
		},
		created(){},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		},
		methods:{
			handleScroll(){
				let scroll = document.documentElement.scrollTop
				scroll >100? this.nav_style = 'top: 0' : this.nav_style = 'top: -50px;box-shadow: 0 0 0 #fff;'
			},
			hide_nav(){
				document.documentElement.scrollTop = 0
				// this.nav_style = 'top: -50px;box-shadow: 0 0 0 #fff;'
				// console.log(111)
				this.showClass = 'collapse navbar-collapse'
			}
		}
	}
</script>

<style lang="scss" scoped>
	#app{
		background: #f4f4f4;
		padding-bottom: 1rem;
		min-height: calc(100vh - 1rem);
		.navbar{
				transition: all .5s;
				box-shadow: 0px 0px 10px #c1c1c1;
				li{
					width: 60px;
					min-height: 50px;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;
				}
			}
			footer{
				width: 100%;
				margin: 0 auto;
				text-align: center;
			}
		}
</style>
