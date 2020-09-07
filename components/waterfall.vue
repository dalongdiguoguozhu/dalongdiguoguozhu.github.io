<template>
	<view>
		<view class="waterfallIndex">
			<view class="left">
			    <view v-for="(item, index) in left_list"  class="itemlist">
					<navigator :url="item.pageUrl">
			        <view class="card">  
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
					</navigator> 
			    </view>  
			</view>  
					
			<view class="right">  
			    <view v-for="(item, index) in right_list" :key="index" class="itemlist" >  
					<navigator :url="item.pageUrl">
			        <view class="card">  
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
			                <view  class="card-share-view"></view>  
			            </view>  
			        </view> 
					</navigator>
			    </view>  
			</view>  	
		</view>
	</view>
</template>

<script>
	export default {
		name:'waterfall',
		props:{
			bgColor:{
				type:String,
				default:'#ffffff'
			},
			left_list:{
				type:Array,
				default (){
					return [
						{
							img_num:0,
							img_src:"/static/style_image/style7.jpg",
							text:"喜欢蓝白色搭配的童鞋们一定不要错过！",
							username:"你的泡泡er",
							headIcon:"",
							star:"0.7w",
							pageUrl:"/pages/index/productDisplay/productDisplay"
					
							
						},
						{
							img_num:1,
							img_src:"/static/style_image/style1.jpg",
							text:"鬼马少女来了",
							username:"你的泡泡er",
							headIcon:"",
							star:"0.7w",
							pageUrl:"/pages/index/productDisplay/productDisplay"
						},{	
							img_num:2,
							img_src:"/static/style_image/style2.jpg",
							text:"想住进森林里吗",
							username:"你的泡泡er",
							headIcon:"",
							star:"1.0w",
							pageUrl:"/pages/index/productDisplay/productDisplay"
						},{	
							img_num:3,
							img_src:"/static/style_image/style3.jpg",
							text:"喜欢粉红色搭配吗？",
							username:"你的泡泡er",
							headIcon:"",
							star:"1.0w",
							pageUrl:"/pages/index/productDisplay/productDisplay"
						}
						
						
						
						
						
					];
				}
			},
			right_list:{
				type:Array,
				default (){
					return [
						{
							img_num:5,
							img_src:"/static/style_image/style5.jpg",
							text:"喜欢整理吗？",
							username:"你的泡泡er",
							headIcon:"",
							star:"1.0w",
							pageUrl:"/pages/index/productDisplay/productDisplay"
						},
						{
							img_num:6,
							img_src:"/static/style_image/style6.jpg",
							text:"喜欢收纳吗？",
							username:"你的泡泡er",
							headIcon:"",
							star:"1.0w",
							pageUrl:"/pages/index/productDisplay/productDisplay"
						},
						{
							img_num:7,
							img_src:"/static/style_image/style7.jpg",
							text:"喜欢收纳吗？",
							username:"你的泡泡er",
							headIcon:"",
							star:"1.0w",
							pageUrl:"/pages/index/productDisplay/productDisplay"
						}
					];
				}
			},
			
		},
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>

<style>
.itemlist{  
	border: rgba(128,128,128,0.5) 1px solid;
	border-radius: 25rpx;
	background-color: #fff;  
	margin: 1%;   
	margin-bottom: 20rpx;  
	display: inline-block;  
	padding:15rpx;
}
.card-img{
	width: 300upx;
	border-radius:10px;
}

.btn-index{
	background-color:#BFB6D8 ;
	display: flex;
	justify-content: center;

}
.waterfallIndex{
	
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	
}
.txt_describtion{
	font-size: 25rpx;
	font-weight: bold;
	margin:15rpx 15rpx;
}
.ico-positon{
	margin-left: 5rpx;
	margin-top: 9rpx;
	font-size: 25rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: nowrap;
}
.user_style{
	font-size: 12rpx;
}
.left{
	display: inline-block;  
	vertical-align: top;  
	width: 40%;  
	background-color: #fff;
	padding: 10rpx;
	border-radius: 10px;
}  
.right{
	display: inline-block;  
	vertical-align: top;  
	width: 40%;  
	background-color: #fff;
	margin-right: 25rpx;
	padding: 10rpx;
	border-radius: 10px;
}
	
</style>
