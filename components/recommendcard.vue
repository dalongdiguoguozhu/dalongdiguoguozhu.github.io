<template name="recommendcard">
	<view class="recommend">
		<view class="recommend_top">
			<image src="/static/shoppingcart/recommend.png" class="top-img"></image>
			<text class="top-text">猜你喜欢</text>
		</view>
		<view class="recommend-card" >
			<view class="card" v-for="item in recommendList">
			    <image class="card-img" :src="item.img_src" mode="widthFix"></image>
				<text class="txt_describtion">{{item.text}}</text>
			    <view class="cuIcon-friendfavor ico-positon">
					{{item.username}}
					<view class="cuIcon-like ico-positon">
					{{item.star}}
					</view>
				</view>
			    <view class="card-bottm row">  
			        <view class="car-title-view row">  
			            <text class="card-title">{{item.title}}</text>  
			        </view>  
			        <view class="card-share-view"></view>  
			    </view>  
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			recommendList:{
				type:Array,
				default:() =>[
					{
						
						img_num:4,
						img_src:"/static/shoppingcart/style4.jpg",
						text:"黑白色大理石",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w"
						
					},
					{
						
						img_num:4,
						img_src:"/static/shoppingcart/style4.jpg",
						text:"冷酷黑白色大理石",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w"
						
					},
					{
						
						img_num:4,
						img_src:"/static/shoppingcart/style4.jpg",
						text:"冷酷黑白色大理石",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w"
						
					},
					{
						
						img_num:4,
						img_src:"/static/shoppingcart/style4.jpg",
						text:"冷酷黑白色大理石",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w"
						
					}
				]
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.recommend{
	display: flex;
	flex-direction: column;
	background-color: #A497C9;
}
.recommend_top{
	display: flex;
	flex-direction: row;
	height: 80rpx;
	justify-content: center;
	align-items: center;
}
.top-img{
	width: 90rpx;
	height: 70rpx;
}
.top-text{
	color: #fff;
}


.recommend-card{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	
}
.card{
	background-color: #fff;
	margin: 20rpx 5rpx 20rpx 5rpx;
	border-radius: 20rpx;
	width: 48%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 30rpx;
	padding-top: 30rpx;
}
.card-img{
	
	width: 300upx;
	margin-bottom: 10rpx;
}
.index{
	background-color:#A497C9;
		
}
.btn-index{
	background-color:#A497C9;
	display: flex;
	justify-content: center;
	justify-items: center;
}
	
.txt_describtion{
	font-size: 10px;
	font-weight: bold;
	
}
.ico-positon{		
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	
}
.user_style{
	font-size: 8px;
}
</style>
