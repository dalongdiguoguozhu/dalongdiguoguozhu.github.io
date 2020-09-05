<template>
	<view class="page bg-white">
		<!-- 搜索栏 start -->
		<view class="cu-bar search bg-mycolor">
			<view class="search-form round">
				<text class="cuIcon-search" @click="Tosearch"></text>
				<input @focus="InputFocus" @click="Tosearch" @blur="InputBlur" :adjust-position="false"  placeholder="搜索你的专属宿舍搭配" confirm-type="search"></input>
			</view>
												
		</view>
		<!-- 搜索栏 end -->
		<!-- 轮播图 start -->
		<view class="screen-swiper">
			<swiper :indicator-dots="true" :autoplay="true" class="carousel">
				<swiper-item class="carousel">
					
						<image src="/static/market/swiper1.png"></image>
					
				</swiper-item>
				<swiper-item class="carousel">
					
						<image src="/static/market/swiper2.png"></image>
					
				</swiper-item>
				<swiper-item class="carousel">
					
						<image src="/static/market/swiper3.png" ></image>
					
				</swiper-item>
			</swiper>
		</view>
		<!-- 轮播图 end -->
		<!-- 切换栏 start-->
		<u-tabs-swiper activeColor="#FED71A " ref="tabs" :list="swiperlist" :current="current" @change="change" :is-scroll="false" swiper-width="750"></u-tabs-swiper>
		<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item v-for="item in swiperlist" >
				
				<view class="imglist">
					<view  v-for="img in item.imglist" class="img-item">
						
						<image :src="img.url" class="product_img"></image>
						<text>{{img.desc}}</text>
					</view>
				</view>
				<!-- <view class="imglist" v-for="img in item.imglist">
					<image :src="img.url" style="width: 50rpx;height: 50rpx;"></image>
				</view> -->
			</swiper-item>
			<!-- <swiper-item>
				墙面装饰
			</swiper-item>
			<swiper-item>
				床边装饰
			</swiper-item>
			<swiper-item>
				整体配饰
			</swiper-item>
			<swiper-item>
				收纳神器
			</swiper-item> -->
		</swiper>
		<!-- 切换栏 start-->
		
		
		
		<bottombar :tIndex="2"></bottombar>
		
	</view>
</template>

<script>
	import bottombar from "../../components/bottombar.vue"
	export default {
		data() {
			return {
				current:0,
				swiperCurrent:0,
				swiperlist:[
					{
						name:"桌面装饰",
						imglist:[
							{
								url:"/static/market/商品ui/1/桌布.png",
								desc:"桌布|贴纸"
							},
							{
								url:"/static/market/商品ui/1/闹钟.png",
								desc:"闹钟|时钟"
							},
							{
								url:"/static/market/商品ui/1/收纳盒.png",
								desc:"桌面收纳"
							},
							{
								url:"/static/market/商品ui/1/台灯.png",
								desc:"台灯|夜灯"
							},
							{
								url:"/static/market/商品ui/1/摆件.png",
								desc:"创意摆件"
							}
						]
					},
					{
						name:"墙面装饰",
						imglist:[
							{
								url:"/static/market/商品ui/2/墙纸.png",
								desc:"墙纸贴纸"
							},
							{
								url:"/static/market/商品ui/2/卡片.png",
								desc:"装饰卡片"
							},
							{
								url:"/static/market/商品ui/2/挂件.png",
								desc:"装饰挂件"
							},
							{
								url:"/static/market/商品ui/2/照片墙.png",
								desc:"照片墙"
							},
							{
								url:"/static/market/商品ui/2/串灯.png",
								desc:"串灯"
							},
						]
					},
					{
						name:"床边装饰",
						imglist:[
							{
								url:"/static/market/商品ui/3/四件套.png",
								desc:"床上四件套"
							},
							{
								url:"/static/market/商品ui/3/床帘.png",
								desc:"蚊帐床帘"
							},
							{
								url:"/static/market/商品ui/3/抱枕.png",
								desc:"抱枕娃娃"
							},
							{
								url:"/static/market/商品ui/3/背景布.png",
								desc:"背景布"
							},
							{
								url:"/static/market/商品ui/3/桌.png",
								desc:"床上桌"
							},
						]
					},
					{
						name:"整体配饰",
						imglist:[
							{
								url:"/static/market/商品ui/4/坐垫.png",
								desc:"坐垫"
							},
							{
								url:"/static/market/商品ui/4/地毯.png",
								desc:"地毯"
							},
							{
								url:"/static/market/商品ui/4/鞋架.png",
								desc:"鞋架"
							},
							{
								url:"/static/market/商品ui/4/杂物.png",
								desc:"实用杂物"
							},
						]
							
					},
					{
						name:"收纳神器",
						imglist:[
							{
								url:"/static/market/商品ui/5/挂袋.png",
								desc:"挂袋|挂篮"
							},
							{
								url:"/static/market/商品ui/5/置物架.png",
								desc:"置物架"
							},
							{
								url:"/static/market/商品ui/5/收纳盒.png",
								desc:"收纳盒"
							},
							{
								url:"/static/market/商品ui/5/挂架.png",
								desc:"挂架"
							}
						]
					}
				]
			}
		},
		methods: {
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
			},
			changebtncolor(){
				this.btnstyle= 1;
			},
			changebtncolor2(){
				this.btnstyle= 0;
			},
			Tosearch(){
				uni.redirectTo({
					url:"../index/search/search"
				})
			}
			
		},
		components:{
			bottombar
		}
	}
</script>

<style>
@import url("market.css");
</style>
