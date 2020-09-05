<template>
	<view>
		<!-- 名片 start -->
		<view class="personal_card bg-white">
			<view>
				<u-avatar :src="src" class="head_img" size="large"></u-avatar>
				
			</view>
			<view class="infor">
				<view class="username_position username">
					{{name}}
					<image src="../../static/me/VIP.png" class="ico-vip"></image>	
				</view>
				<view class="intro_style">
					{{intro}}	
				</view>	
			</view>
			<view class="ico-positon">
				<view class="cuIcon-settings ico-size" style=" z-index: 999;margin-left: 150rpx;" @click="tosettings()"></view>
				<view class="cuIcon-message ico-size" style=" z-index: 999;margin-left: 50rpx;"></view>
			</view>	
		</view>
		<!-- 名片 end -->
		<!-- 关注粉丝 start -->
		<view class="text_position bg-white">
			<view class="attention_num">
				{{fanNum}}
			</view>
			<view class="attention font-style">
				{{attention}}
			</view>
			<view class="attention_num" >
				{{fanNum}}
			</view>
			<view class="attention font-style">
				{{fans}}
			</view>
		</view>
		
		<!--关注粉丝 end -->
		<!-- 我的订单 start -->
		<view class="my-order-style bg-white">
			<view class="bg-white text-box">
				<view class="text-myorder" >
					{{myorder}}
				</view>
				<view class="text-all" @click="Toall()">
					{{toall}}
				</view>
			</view>
			
			<indentbar></indentbar>
		</view>
		<!--我的订单 end -->
	<!-- 局部切换 stat -->
		<!-- 我的发布 start -->
		<view class="wrap border-top-style" >
			<view class="u-tabs-box">
				<u-tabs-swiper activeColor="#FED71A" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiper-width="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item bg-white">
					
					<waterfall :left_list="left_list" :right_list="right_list" ></waterfall>
		
				</swiper-item>
				<!-- 收藏栏 -->
					
				<swiper-item class="swiper-item bg-white colletc-flex">
					<view class="collect_item" v-for="(item,index) in collect_list">
						<button type="" class="collect_btn" @click="toCollect">{{ item.name }}</button>
						<view class="img-flex" >
							<image :src="item.url1" class="collect-img"></image>
							<image :src="item.url2" class="collect-img"></image>
							<image :src="item.url3" class="collect-img"></image>
						</view>
						
						
					</view>
				</swiper-item>
				<!-- 点赞部分 -->
				<swiper-item class="swiper-item bg-white">
					<waterfall :left_list="left_list" :right_list="right_list" ></waterfall>
				</swiper-item>
				<!-- 浏览历史部分 -->
				<swiper-item class="swiper-item bg-white">
					<waterfall :left_list="left_list" :right_list="right_list" ></waterfall>
				</swiper-item>
			</swiper>
		</view>
		<!-- 我的发布 end -->
	<!-- 局部切换 end -->
		<!-- 底部导航栏 start -->
		<view class="bottombar">
			<bottombar :tIndex="4" ></bottombar>
		</view>
		
		
		
		<!-- 底部导航栏 end -->
	</view>
</template>

<script>
	import bottombar from "../../components/bottombar.vue"
	import indentbar from "../../components/indentbar.vue"
	import waterfall from "../../components/waterfall.vue"
	import uAvatar from "../../uview-ui/components/u-avatar/u-avatar.vue"
	import uTabSwiper from "../../uview-ui/components/u-tabs-swiper/u-tabs-swiper.vue"
	export default {
		data() {
			return {
				src:"/static/me/头像.jpg",
				name:"折木奉太郎",
				intro:"简介：大龙帝国国主的弟弟",
				watchNum:60,
				attention:"关注",
				fanNum:1.6+"w",
				fans:"粉丝",
				myorder:"我的订单",
				toall:"查看全部 >",
				list:[
					{
						name:"我的发布"
					},
					{
						name:"收藏"
					},
					{
						name:"点赞"
					},
					{
						name:"浏览历史"
					}
				],
				left_list:[
					{
						img_num:1,
						img_src:"/static/style_image/style7.jpg",
						text:"喜欢蓝白色搭配的童鞋们一定不要错过！",
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
					}
					
				],
				right_list:[
					{
						img_num:3,
						img_src:"/static/style_image/style5.jpg",
						text:"喜欢整理吗？",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w",
						pageUrl:"/pages/index/productDisplay/productDisplay"
					},
					{
						img_num:4,
						img_src:"/static/style_image/style6.jpg",
						text:"喜欢收纳吗？",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w",
						pageUrl:"/pages/index/productDisplay/productDisplay"
					}
					
				],
				collect_list:[
					{
						name:"默认收藏夹",
						url1:"/static/me/图片.png",
						url2:"/static/me/图片.png",
						url3:"/static/me/图片.png"
		
					},
					{
						name:"我的喜爱",
						url1:"/static/me/图片.png",
						url2:"/static/me/图片.png",
						url3:"/static/me/图片.png"
							
					},
					{
						name:"有艺术美感",
						url1:"../../static/me/图片.png",
						url2:"../../static/me/图片.png",
						url3:"../../static/me/图片.png"
						
							
					},
				],
				current:0,
				swiperCurrent:0,
				tabsHeight:0,
				dx:0
			}
		},
		methods: {
			// reachBottom() {
			// 	// 此tab为空数据
			// 	if(this.current != 2) {
			// 		this.loadStatus.splice(this.current,1,"loading")
			// 		setTimeout(() => {
			// 			this.getOrderList(this.current);
			// 		}, 1200);
			// 	}
			// },
			tosettings(){
				uni.redirectTo({
					url:"settings"
				})
			},
			Tomyorder(){
				uni.redirectTo({
					url:"myorder/myorder"
				})
			},
			Toall(){
				uni.redirectTo({
					url:"myorder/myorder"
				})
			},
			toCollect(){
				uni.redirectTo({
					url:"collect"
				})
			},
			//页面数据
		
			change(index){
				this.swiperCurrent = index;
				
			},
			transition({detail : { dx }}){
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({ detail :{ current }}){
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			}
		},
		onLoad() {
			
		},
		components:{
			bottombar,
			indentbar,
			waterfall,
			
			
		}
	}
</script>

<style>
@import url("me.css");
</style>
