<template>
	<div class="index">
		
		<div class="bg-image">
			<img src="../assets/images/banner.jpg" alt="头部背景图片" title="头部背景图片"></img>
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
			<div class="col-sm-12 col-md-6" v-for="(item, index) in thumbnail_data" :key="index">
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
		
		<div class="bottom-explain">
			<h2>即使VEROEROS LOREM</h2>
			<div class="explanation">
				由于大部分的时间，因此，Phasellus交流augue笔者
				accumsan拉克丝一个NIBH commodo Pellentesque DUI 
				此书签。
			</div>
			<button type="button" class="btn btn-default btn-group-lg">入门</button>
			
			<div class="hr"></div>
		</div>
		
	</div>
</template>

<script>
	import img1 from '../assets/images/pic01.jpg'
	import img2 from '../assets/images/pic02.jpg'
	import img3 from '../assets/images/pic03.jpg'
	import img4 from '../assets/images/pic04.jpg'
	export default {
		name: 'index',
		data() {
			return {
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
					transition: all 1s;
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
		.bottom-explain{
			width: 30%;
			margin: 5em auto;
			text-align: center;
			.explanation{
				font-size: 1.3em;
				margin-top: 3rem;
				line-height: 2rem;
				color: #666;
				font-family: inherit;
			}
			.btn{
				margin-top: 2rem;
				padding: 1rem 3rem;
			}
			.hr{
				width: 8rem;
				height: 4px;
				background: #666;
				margin: 6rem auto;
				border-radius: 15px;
			}
		}
	}
	@media only screen and (max-width: 1170px) {
		.index{
			.bottom-explain{
				width: 60%;
			}
		}	
	}
	@media only screen and (max-width: 970px) {
		.index{
			.jumbotron{
				.content{
					width: 100%;
				}
			}
			.bottom-explain{
				width: 80%;
			}
		}
	}
</style>