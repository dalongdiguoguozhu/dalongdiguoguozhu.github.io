<template>
	<view class="page-box">
		<view style="display: flex;flex-direction: row;padding: 30rpx 10rpx;align-items: center;background-color: #FFFFFF;">
			<text class="cuIcon-back_android " style="position: fixed;z-index:999;font-size: large;margin: 20rpx 0 10rpx 30rpx ;" @click="toMe()"></text>
			<h3 style="margin-left: 300rpx;">默认收藏夹</h3>
		</view>
		<view class="top">
			<h3>默认收藏夹</h3>
			<view class="head-img">
				<u-avatar src="/static/me/头像.jpg" >
				</u-avatar>
				<text class="username_position">折木奉太郎</text>
			</view>
		</view>
		<view class="middle">
			<view class="u-tabs-box">
				<u-tabs-swiper activeColor="#f29100" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiper-width="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item>
					<waterfall :left_list="left_list" :right_list="right_list" ></waterfall>
				</swiper-item>
				<swiper-item>
					<waterfall :left_list="left_list" :right_list="right_list" ></waterfall>
				</swiper-item>
				<swiper-item>
					<waterfall :left_list="left_list" :right_list="right_list" ></waterfall>
				</swiper-item>
				<swiper-item>
					<waterfall :left_list="left_list" :right_list="right_list" ></waterfall>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import waterfall from "../../components/waterfall.vue"
	export default{
		data(){
			return{
				current:0,
				swiperCurrent:0,
				tabsHeight:0,
				dx:0,
				list:[
					{
						name:"全部(5)"
					},
					{
						name:"搭配(4)"
					},
					{
						name:'单品(1)'
					},
					{
						name:"动态(1)"
					}
				],
				left_list:[
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
					}
				],
				right_list:[
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
					}
				]
			};
			
			
		},
		methods:{
			toMe(){
				uni.redirectTo({
					url:"me"
				})
			},
			// 数据切换
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
		components:{
			waterfall
		}
	}
</script>

<style>
	@import url("collect.css");
	
</style>
