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
				<div class="gao-btn" @click="controlMenu">
						<span></span>
						<span></span>
						<span></span>
				</div>
				<div class="gao-nav">
					<div class="gao-title-menu">
						<div class="gao-title" v-for="item in menuData" :key="item.id">
							<router-link :to="item.route">{{item.menu}}</router-link>
						</div>
					</div>
				</div>
			</div>
		</nav>
		<div class="gao-menu animated fadeInDown" v-show="show_menu">
			<div class="gao-title" v-for="item in menuData" :key="item.id">
				<router-link :to="item.route">{{item.menu}}</router-link>
			</div>
		</div>
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
				menuData: [
					{id: 1, menu: '首页', route: '/index'},
					{id: 2, menu: '学习', route: '/study'},
					{id: 3, menu: '追番', route: '/watching'}
				],
				show_menu: false
			}
		},
		created(){},
		mounted() {
			console.log(111)
			window.addEventListener('scroll', this.handleScroll)
		},
		methods:{
			handleScroll(){
				let scroll = document.documentElement.scrollTop
				if (scroll>100) {
					this.nav_style = 'top: 0'
				} else {
					this.nav_style = 'top: -5rem;box-shadow: 0 0 0 #fff;'
					this.show_menu = false
				}
				// scroll >100? this.nav_style = 'top: 0' : this.nav_style = 'top: -5rem;box-shadow: 0 0 0 #fff;'
			},
			// 导航按钮点击，控制菜单显示与否
			controlMenu() {
				this.show_menu = !this.show_menu
			},
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
				// background: #e8e8e8;
				background: linear-gradient(#f2f2f2, #fff);
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
						width: 3.2rem;
						height: 2.8rem;
						border: 1px solid #999;
						border-radius: 5px;
						transition: all .3s;
						cursor: pointer;
						span{
							display: block;
							width: 60%;
							border-top: .7px solid #999;
							border-bottom: .7px solid #999;
							margin: calc(0.7rem - 1.4px) auto 0;
						}
					}
					.gao-btn:hover{
							background: #f2f2f2;
						}
					.gao-nav{
						position: absolute;
						right: 3rem;
						.gao-title-menu{
							display: flex;
							flex-direction: row;
							.gao-title{
								padding: 0 1.5rem;
								cursor: pointer;
								a{
									text-decoration:none;
									color: #000;
								}
							}
							.gao-active{
								color: rgb(21, 116, 241) !important;
							}
						}
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
			.gao-menu{
				width: 100%;
				background:  linear-gradient(#fff, #f2f2f2);;
				position: fixed;
				top: calc(5rem - 1px);
				border-top: 1px solid #e8e8e8;
				z-index: 999;
				padding: 1rem 0;
				transition: all 1s;
				overflow: hidden;
				box-shadow: 0px 7px 10px #d2d2d2;
				.gao-title{
					width: 100%;
					padding: 0.8rem 0;
					text-align: center;
					border-bottom: 1px solid #e8e8e8;
					cursor: pointer;
					a{
						text-decoration:none;
						color: #000;
					}
				}
				.gao-active{
					color: rgb(21, 116, 241) !important;
				}
				.gao-title:last-child{
					border-bottom: 0px solid #ccc;
				}
			}
			@media only screen and (min-width: 782px) {
				.gao-menu{
					display: none !important;
				}
			}
			footer{
				width: 100%;
				margin: 0 auto;
				text-align: center;
			}
		}
</style>
