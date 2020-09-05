<template>
	<view class="page">
		<!-- 搜索栏 start -->
		
		<view class="cu-bar search bg-mycolor">
			<view class="search-form round">
				<text class="cuIcon-search" @click="Tosearch"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
			</view>
			<view class="action">
				
			</view>
		</view>
		<!-- 搜索栏 end -->
		<!-- 轮播图 start -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
			<swiper-item>
				<image src="../../static/今日推荐.png" class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/今日推荐.png" class="carousel"></image>
			</swiper-item>
		</swiper>
		<!-- 轮播图 end -->
		<view class="simleface">
			<image src="../../static/smile.png" class="smile_img"></image>
		</view>
		<!-- 卡片组件 start -->
		<card></card>
		<!-- 卡片组件end -->
		<!-- 瀑布流	start	 -->
		 <view class="index">
			<view class="padding flex justify-between align-center btn-index">
				<button class="cu-btn mybtn1" :class="0===btnstyle?'unclickmybtn':'clickmybtn'" @click="changebtncolor">
				<view class="cuIcon-emoji" :class="0===btnstyle?'unclickmybtn':'clickmybtn'" @click="changebtncolor"></view>	
				{{mybtn1}}
				</button>
				<button class="cu-btn mybtn2" :class="0===btnstyle?'clickmybtn':'unclickmybtn'" @click="changebtncolor2">
				<view class="cuIcon-favor" :class="0===btnstyle?'clickmybtn':'unclickmybtn'" @click="changebtncolor2"></view>
				{{mybtn2}}
				</button>
			</view>
			<view class="waterfallIndex">
				<view class="left">
				    <block v-for="(item, index) in list1" :key="item.img_num" class="itemlist">  
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
				    </block>  
				</view>  
						
				<view class="right">  
				    <block v-for="(item, index) in list2" :key="item.img_num" class="itemlist">  
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
				    </block>  
				</view>  	
		        
		</view>
		<!-- 瀑布流	end	 -->
		<!-- 底部导航栏 start -->
		<!-- <bottombar :tIndex="1"></bottombar> -->
		<!-- 底部导航栏 end -->
		</view>
		</view>
</template>

<script>
	import bottombar from "../../components/bottombar.vue"
	import card	from "../../components/card.vue"
 
	export default {
		data() {
			return {
				mybtn1:"推荐",
				mybtn2:"关注",
				btnstyle: 0,
				title: 'Hello',
				list1:[
					{	
						img_num:1,
						img_src:"../../static/style_image/style1.jpg",
						text:"鬼马少女来了",
						username:"你的泡泡er",
						headIcon:"",
						star:"0.7w"
					},{	
						img_num:2,
						img_src:"../../static/style_image/style2.jpg",
						text:"想住进森林里吗",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w"
					},{	
						img_num:3,
						img_src:"../../static/style_image/style3.jpg",
						text:"喜欢粉红色搭配吗？",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w"
					},{	
						img_num:4,
						img_src:"../../static/style_image/style4.jpg",
						text:"黑白色大理石",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w"
					},
					
				],
				list2:[
					{
						img_num:5,
						img_src:"../../static/style_image/style5.jpg",
						text:"喜欢整理吗？",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w"
					},
					{
						img_num:6,
						img_src:"../../static/style_image/style6.jpg",
						text:"喜欢收纳吗？",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w"
					},
					{
						img_num:7,
						img_src:"../../static/style_image/style7.jpg",
						text:"喜欢收纳吗？",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w"
					},
					{
						img_num:8,
						img_src:"../../static/style_image/style8.jpg",
						text:"喜欢电脑吗？",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w"
					}
					
				]
			}
		},
		onLoad() {
			this.btnstyle= null;
		},
		onUnload() {
			this.btnstyle=0;
		},
		methods: {
			
			changebtncolor(){
				this.btnstyle= 1;
			},
			changebtncolor2(){
				this.btnstyle= 0;
			},
			Tosearch(){
				uni.redirectTo({
					url:"search/search"
				})
			}
			
			

		},
		components:{
			bottombar,
			card
		}
		
	}
</script>

<style>
	@import url("index.css");
	
	
	
</style>
