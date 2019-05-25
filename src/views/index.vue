<template>
	<div class="index">
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
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav navbar-right">
						<li>首页</li>
						<li>学习</li>
						<li>追番</li>
						<li>login</li>
					</ul>
				</div>
			</div>
		</nav>
		
		<div class="bg-image">
			<img src="../assets/images/home-bg.jpg" alt="头部背景图片" title="头部背景图片"></img>
		</div>
		
		<div class="jumbotron">
			<div class="container">
				<div class="content">
					<div class="glyphicon glyphicon-grain title-logo"></div>
					<h2>最大的门</h2>
					<div class="texts">
						Lorem存有悲坐阿梅德，consectetur adipiscing ELIT。但生活
						malesuada turpis。对于一些孩子，并在。Aliquam tempor 
						儿子，最大的交流奥奇欧盟tortor Lorem存有悲的。
					</div>
					<div class="btn-group btn-group-lg" role="group" aria-label="...">
						<button type="button" class="btn btn-default">了解更多</button>
					</div>
				</div>
			</div>
		</div>
		
		<div class="row abbreviation">
			<div class="col-sm-6 col-md-6" v-for="(item, index) in thumbnail_data" :key="index">
				<div class="thumbnail">
					<img :src="item.imgUrl"></img>
					<!--<div class="tits">111</div>-->
				    <div class="caption">
				        <p>{{item.dec}}</p>
				        <button type="button" class="btn btn-default">了解更多</button>
				    </div>
				</div>
			</div>
		</div>
		
		
		

		
		
		
	</div>
</template>

<script>
	import img1 from '../assets/images/pic01.jpg'
	import img2 from '../assets/images/pic02.jpg'
	import img3 from '../assets/images/pic03.jpg'
	import img4 from '../assets/images/pic04.jpg'
	export default {
		name: 'HelloWorld',
		data() {
			return {
				nav_style: 'opacity: 1;',
				thumbnail_data: [
					{
						imgUrl: img1,
						title: 'VEL和喉咙',
						dec: 'Fusce造成堵塞。但孩子在质量局局。在欧盟和规划足球比赛。到大的栅或蚤vulputate。直到它从该装饰蛋白池。'
					},
					{
						imgUrl: img2,
						title: 'ADIPISCING',
						dec: 'Fusce造成堵塞。但孩子在质量局局。在欧盟和规划足球比赛。到大的栅或蚤vulputate。直到它从该装饰蛋白池。'
					},
					{
						imgUrl: img3,
						title: '没有质量LOREM',
						dec: 'Fusce造成堵塞。但孩子在质量局局。在欧盟和规划足球比赛。到大的栅或蚤vulputate。直到它从该装饰蛋白池。'
					},
					{
						imgUrl: img4,
						title: '但非常时期',
						dec: 'Fusce造成堵塞。但孩子在质量局局。在欧盟和规划足球比赛。到大的栅或蚤vulputate。直到它从该装饰蛋白池。'
					}
				]
			}
		},
		created(){},
		mounted() {},
		methods:{}
	}
</script>

<style scoped lang="scss">
	.index {
		background: #f4f4f4;
		padding-bottom: 80px;
		.navbar{
			transition: all 1s;
			opacity: 1;
			li{
				width: 60px;
				min-height: 50px;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}
		}
		.bg-image {
			width: 100%;
			img {
				width: 100%;
			}
		}
		.jumbotron{
			width: 85%;
			margin: 80px auto 0;
			background: #fff;
			
			.content{
				width: 60%;
				padding: 40px 0 20px;
				margin: 0 auto;
				text-align: center;
				.title-logo{
					font-size: 120px;
				}
				h2{
					margin: 40px 0 60px;
				}
				.texts{
					width: 80%;
					margin: 0 auto;
					text-align: center;
					color: #999;
					font-family: inherit;
					line-height: 30px;
					font-size: 1.4em;
				}
				.btn-group{
					margin: 40px 0 0;
				}
			}
		}
		.abbreviation{
			width: 85%;
			margin: 80px auto 0;
			.thumbnail{
				padding: 0;
				position: relative;
				overflow: hidden;
				img{
					cursor: pointer;
				}
				img:hover{
					transform: scale(1.02);
					transition: all .5s;
				}
				.tits{
					width: 100%;
					position: absolute;
					top: 0;
					left: 0;
					background: red;
				}
				.caption{
					width: 80%;
					margin: 0 auto;
					padding: 3.5rem 0;
					text-align: center;
					p{
						font-family: inherit;
						color: #999;
						font-size: 2rem;
						line-height: 2.5rem;
					}
					button{
						margin-top: 30px;
					}
				}
			}
		}
	}
	/*.title-nav{
		min-height: 120px;
	}
	@media only screen and (max-width: 792px) {
		.title-nav{
			min-height: 50px;
		}
	}*/
</style>