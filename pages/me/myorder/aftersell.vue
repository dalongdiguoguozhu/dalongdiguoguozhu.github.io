<template>
	<view class="page-box">
		<view  style="display: flex;flex-direction: row;padding: 30rpx 10rpx;align-items: center;background-color: #FFFFFF;">
			<!-- <text class="cuIcon-back_android " style="position: fixed;z-index:999;font-size: large;margin: 20rpx 0 10rpx 30rpx ;" @click="toMe()"></text> -->
			<h3 style="margin-left: 20rpx;">退款/售后</h3>	
		</view>
		<view class="wrap">
			<view class="univarsal_flex">
				<image src="/static/myorder/smile.png" class="smile_img"></image>
				泡泡自营
			</view>
			<view class="ordercard" style="height: 400rpx;" v-for="(res,index) in dataList2 " :key="res.id" >
				<view class="top">{{res.deal}}</view>
			<view class="product_describtion">
				<view class="left"><image :src="res.goodsUrl" class="left_img"></image></view>
				<view class="right">
					<view class="product_desc">{{res.title}}</view>
					<view class="product_type">{{res.type}}</view>
					<view class="product_price">￥ {{res.price}}
						<text class="product_num">x{{res.number}}</text>
					</view>
					<text class="back_status">{{res.backmoney}}</text>
				</view>							
			</view>
				<view class="bottom">
					<view class="btnlist">
						<view class="logistics btn">{{ res.btn1 }}</view>
						<view class="exchange btn">{{ res.btn2 }}</view>
						<view class="evaluate btn select-item">{{ res.btn3 }}</view>
					</view>
				</view>
					
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data (){
			return{
				dataList2:[
					{
						id:1,
						deal:'退款',
						goodsUrl:'/static/style_image/style7.jpg',
						title:'ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架',
						type:'黑-L型上架+2铁栏',
						price:'29.9',
						number:1,
						backmoney:"退款关闭 退款已关闭",
						btn1:"删除记录",
						btn2:"售后评价",
						btn3:"查看详情"
					},
					{
						id:2,
						deal:'退款',
						goodsUrl:'/static/style_image/style7.jpg',
						title:'ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架',
						type:'黑-L型上架+2铁栏',
						price:'29.9',
						number:1,
						backmoney:"退款成功， 退款成功￥29.9元",
						btn1:"删除记录",
						btn2:"退款评价",
						btn3:"查看详情"
					},
					
					{
						id:3,
						deal:'退款',
						goodsUrl:'/static/style_image/style7.jpg',
						title:'ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架',
						type:'黑-L型上架+2铁栏',
						price:'29.9',
						number:1,
						backmoney:"退款成功， 退款成功￥29.9元",
						btn1:"删除记录",
						btn2:"退款评价",
						btn3:"查看详情"
					}				
							
				],
					
			};
			
			
		},
		methods:{
			toMe(){
				uni.redirectTo({
					url:"myorder"
				})
			}
		}
	}
</script>

<style>
	@import url("aftersell.css");
</style>
