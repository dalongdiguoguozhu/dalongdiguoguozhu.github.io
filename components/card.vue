<template name="card">
	<view class="cu-card article" :class="isCard?'no-card':''">
		<view class="cu-item">
			<view>
				<view class="cu-tag bg-mycolor light sm  my-btn1"  :class="0===stylenum?'bg-white':'bg-yellow'" @click="changestyle1">颜色泡</view>
				<view class="cu-tag bg-mycolor light sm  my-btn2" :class="1===stylenum?'bg-white':'bg-yellow'" @click="changestyle2">风格泡</view>
			</view>
			<view class="content">
				<view v-for="colorimg in imgList" class="img_style">
					<image :src="colorimg.url" class="my-img"></image>
				</view>
				
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				stylenum:1,
				imgList:[
					{
							
						url:"/static/colorStyleui/red.png"
					},
					{
						url:"/static/colorStyleui/yellow.png"
					},
					{
						url:"/static/colorStyleui/blue.png"
					},
					{
						url:"/static/colorStyleui/green.png"
					},
					{
						url:"/static/colorStyleui/pink.png"
					},
					{
						url:"/static/colorStyleui/purple.png"
					},
					{
						url:"/static/colorStyleui/black.png"
					},
					{
						url:"/static/colorStyleui/white.png"
					},{
						url:"/static/colorStyleui/colorful.png"
					},
					{
						url:"/static/colorStyleui/brown.png"
					}
				],
				styleList:[
					{
						url:"/static/styleui/图片2.png"
					},{
						url:"/static/styleui/图片3.png"
					},
					{
						url:"/static/styleui/图片4.png"
					},
					{
						url:"/static/styleui/图片5.png"
					},
					{
						url:"/static/styleui/图片6.png"
					},
					{
						url:"/static/styleui/图片7.png"
					}
				]
			
					
			
			}
			
		},
		props:{
			// 当showName为0时隐藏,为1时展示
			showName:0
		},
		
		
		methods:{
			changestyle1(){
				// 按钮1为黄色 ，0为正常
				this.stylenum = 1;
			},
			changestyle2(){
				// 按钮1为黄色 ，0为正常
				this.stylenum = 0;
			}
		}
		
	}
</script>

<style>
.my-img{
	width: 128upx;
	height: 128upx;
}
/* 主题颜色 */
.bg-mycolor{
	background-color:rgb(164,152,202);
	
}
.btn-white{
	color: #fff;
}
.btn-yellow{
	color:#FED71A;
}
/* 按钮样式 */
.my-btn1{
	margin-left: 270upx;
	margin-right: -5upx;
	border-radius: 50upx;
}
.my-btn2{
	margin-left: 0;
	border-radius: 50upx;
}
.clickmybtn{
	color: #FED71A;
}


.cu-card{
	overflow: visible;
	margin-top: -80upx;
}
.cu-card .cu-item{
	margin:auto 10upx ;
}
.content{
	flex-wrap: wrap;
	text-align: center;
	left: 10upx;
	margin: 15upx;
	background-color: rgb(255,255,255);
}

.sm{
	font-size: 30upx;
	font-weight: bold;
}

</style>
