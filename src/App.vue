<template>
  <div id="app">
  	<!-- <nav class="navbar navbar-default navbar-fixed-top" :style="nav_style">
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
				<div class="show" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav navbar-right">
						<li><router-link to="/index">首页</router-link></li>
						<li @click="hide_nav"><router-link to="/study" @click="hide_nav">学习</router-link></li>
						<li @click="hide_nav"><router-link to="/watching" @click="hide_nav">追番</router-link></li>
						<li>login</li>
					</ul>
				</div>
			</div>
		</nav> -->
		<nav class="head-nav" :style="nav_style">
			<div class="gao-logo">
				<span>这里是logo</span>
			</div>
			<div class="gao-link">
				<div class="gao-btn">
						<span></span>
						<span></span>
						<span></span>
				</div>
				<div class="gao-nav">
					导航
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
				nav_style: 'top: -5rem',
			}
		},
		created(){},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		},
		methods:{
			handleScroll(){
				let scroll = document.documentElement.scrollTop
				scroll >100? this.nav_style = 'top: 0' : this.nav_style = 'top: -5rem;box-shadow: 0 0 0 #fff;'
			}
		}
	}
</script>

<style lang="scss" scoped>
	#app{
		background: #f4f4f4;
		padding-bottom: 1rem;
		min-height: calc(100vh - 1rem);
		// .navbar{
		// 		transition: all .5s;
		// 		box-shadow: 0px 0px 10px #c1c1c1;
		// 		li{
		// 			width: 60px;
		// 			min-height: 50px;
		// 			display: flex;
		// 			flex-direction: row;
		// 			align-items: center;
		// 			justify-content: center;
		// 		}
		// 	}
			.head-nav{
				width: 100%;
				height: 5rem;
				background: #e8e8e8;
				position: fixed;
				top: 0;
				transition: all .5s;
				box-shadow: 0px 0px 10px #c1c1c1;
				z-index: 999;
				display: flex;
				flex-direction: row;
				align-items: center;
				.gao-logo{
					width: 40%;
					height: 100%;
					display: flex;
					flex-direction: row;
					align-items: center;
					span{
						margin-left: 3rem;
					}
				}
				.gao-link{
					width: 60%;
					height: 100%;
					display: flex;
					flex-direction: row;
					align-items: center;
					position: relative;
					.gao-btn{
						position: absolute;
						right: 3rem;
						width: 3.5rem;
						height: 3rem;
						border: 1px solid #ccc;
						border-radius: 5px;
						transition: all 0;
						span{
							display: block;
							width: 70%;
							border-top: .7px solid red;
							border-bottom: .7px solid red;
							margin: calc(0.7rem - 1.4px) auto 0;
						}
					}
					.gao-nav{
						position: absolute;
						right: 3rem;
					}
					@media only screen and (max-width: 782px) {
						.gao-btn{
							display: block;
						}
						.gao-nav{
							display: none;
						}
					}
					@media only screen and (min-width: 782px) {
						.gao-btn{
							display: none;
						}
						.gao-nav{
							display: block;
						}
					}
				}
			}
			footer{
				width: 100%;
				margin: 0 auto;
				text-align: center;
			}
		}
</style>
