<template>
	<view class="page">
		<view class="page-top">
			<!-- <text class="cuIcon-back top-ico" @click="backTohome"></text> -->
			<u-avatar :src="productDisplaylist.head_img" class="head-img" size=large></u-avatar>
			<text class="username">{{ productDisplaylist.username }}</text>
			<text class="attentionBtn" >已关注</text>
			<text class="cuIcon-share share-ico"></text>
		</view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="swiper-box">
			<swiper-item>
				<image src="/static/home/productDisplay/style8.jpg" class="swiper-box"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/home/productDisplay/style8.jpg" class="swiper-box"></image>
			</swiper-item>
		</swiper>
		
		<view class="middle">
			
				<button  class="product_ico" plain="false" @click="toMarket">相关商品
				<text class="cuIcon-cart cart-style"></text>
				</button>
			
			
			<view class="text_desc">
				<h3>{{ productDisplaylist.title }}</h3>
				<text class="text-box">
					今天终于拍了一个全景图~
					
					这次改造是以蓝色和白色为主要风格，改变了之前的黑白的风格，更加清新了！~
					
					喜欢蓝色的姐妹一定不要错过蓝白色的搭配喔！
					
					不过我还是有不满意的地方，想要再买块桌布装饰一下。
					
					关于我的物品放置都标注在图二里面了，我的东西可能相比于其他女孩子来说也不是很多，三个大包包三个小包包，鞋子差不多十双，衣柜里面的衣服都是当季的，过季衣服放在箱子里了，化妆品也是一个收纳盒就能装完。
					
					我最难收拾的是小东西，比如螺丝刀、小刀、针线、四六级耳机、明信片、数据线等超多东西···因为太小太杂了所以我就用了很多合资分类装起来，就比较整洁啦~
					
					希望我的收纳能够给大家一些参考~
					
					
				</text>
			</view>
		</view>
		<button type="default" class="bottom_btn">
			<text class="cuIcon-favor favor-ico"></text>
			<text style="font-size: small;">收藏</text>
			<text class="cuIcon-like like-ico" ></text>
			<text style="font-size: small;">喜爱</text>
		</button>
		<view class="bottom-view">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				productDisplaylist:{
					head_img:"/static/home/productDisplay/头像.jpg",
					username:"你的泡泡er",
					title:"喜欢蓝白色搭配的童鞋们一定不要错过!",
					attentionStatus:1
					
				}
			}
		},
		methods: {
			toMarket(){
				uni.redirectTo({
					url:"../relativeProduct"
				})
			},
			backTohome(){
				uni.navigateTo({
					url:"../home"
				})
			}
		}
	}
</script>

<style>
@import url("productDisplay.css");
</style>
