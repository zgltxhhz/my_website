<template>
	<div id="study">
		<div class="show-title">
			<!--<div class="classification">-->
				
				<div class="row visible-md-block visible-lg-block show-top">
				  	<div class="col-md-6">
				  		<ul>
							<li v-for="(item, index) in titleData" :key="index">
								<span @click="change_nav(index)" :style="item.styles">
									{{item.name}}
								</span>
							</li>
						</ul>
					</div>
					<div class="col-md-6">
					  	<form class="form-inline">
						  <div class="form-group">
						    <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
						  </div>
						  <button type="submit" class="btn btn-primary">搜索</button>
						</form>
				  	</div>
				</div>
				
				<div class="row visible-xs-block visible-sm-block">
					<div class="col-md-3">
				  		<ul>
							<li v-for="(item, index) in titleData" :key="index">
								<span @click="change_nav(index)" :style="item.styles">
									{{item.name}}
								</span>
							</li>
						</ul>
					</div>
					<div class="col-md-9">
						<input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
						<button type="submit" class="btn btn-primary">搜索</button>
				  	</div>
				</div>
				
			<!--</div>-->
		</div>
	</div>
</template>

<script>
	export default {
		name: 'study',
		data() {
			return {
				titleData: [
					{name: '话题', styles: 'color: #007FFF;'},
					{name: '回答', styles: ''},
					{name: '讨论', styles: ''}
				]
			}
		},
		created(){
			document.documentElement.scrollTop = 0
		},
		mounted(){},
		methods:{
			change_nav(e){
				// tab切换
				this.titleData.forEach(v=>{v.styles = ''})
				this.titleData[e].styles='color: #007FFF;'
			}
		}
	}
</script>

<style lang="scss" scoped>
	#study{
		.show-title{
			width: 100%;
			background: #fff;
			.show-top{
				margin: 0;
				.col-md-6{
					min-height: 5rem;
					display: flex;
					flex-direction: row;
					align-items: center;
					ul{
						list-style: none;
						display: flex;
						flex-direction: row;
						align-items: center;
						li{
							width: 8rem;
							text-align: center;
							/*padding: 1.5rem 0;*/
							font-size: 2rem;
							margin-right: 10px;
							span:hover{
								color: #007FFF;
								cursor: pointer;
							}
						}
						
					}	
				}
				.col-md-3{
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;
					padding: 1.5rem 0;
					ul{
						list-style: none;
						display: flex;
						flex-direction: row;
						align-items: center;
						li{
							width: 8rem;
							text-align: center;
							/*padding: 1.5rem 0;*/
							font-size: 2rem;
							margin-right: 10px;
							span:hover{
								color: #007FFF;
								cursor: pointer;
							}
						}
						
					}
				}
				.col-md-9{
					display: flex;
					flex-direction: row;
					padding: 0 2rem;
				}
			}
			// @media only screen and( max-width: 792px) {
			// 	.show-top{
			// 		padding-bottom: 2rem;
			// 	}
			// }
			/*.classification{*/
				/*width: 80%;
				margin: 0 auto;
				display: flex;
				flex-direction: row;
				align-items: center;*/
				/*ul{
					list-style: none;
					display: flex;
					flex-direction: row;
					align-items: center;
					li{
						width: 8rem;
						text-align: center;
						padding: 1.5rem 0;
						font-size: 2rem;
						margin-right: 10px;
						
					}
					span:hover{
						color: #007FFF;
						cursor: pointer;
					}
				}
				.form-inline{
					background: red;
				}*/
			/*}*/
		}
	}
</style>