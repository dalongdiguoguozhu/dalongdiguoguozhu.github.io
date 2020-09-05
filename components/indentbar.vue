<template name="indentbar">

	<view class="cu-bar tabbar bg-white">
		<view class="action" @click="toPay" >
			<view class="cuIcon-cu-image">
				<image src="../static/me/待付款.png"></image>
			</view>
			<view class="text-gray font-style">待付款</view>
		</view>
		<view class="action" @click="toReceive" >
			<view class="cuIcon-cu-image">
				<image src="../static/me/待收货.png"></image>
			</view>
			<view class="text-gray font-style">待收货</view>
		</view>
		<view class="action" @click="toComment" >
			<view class="cuIcon-cu-image">
				<image src="../static/me/待评价.png"></image>
				
			</view>
			<view class="text-gray font-style">待评价</view>
		</view>
		<view class="action" @click="toAftersale">
			<view class="cuIcon-cu-image">
				<image src="../static/me/售后.png"></image>
				
			</view>
			<view class="text-gray font-style" >退款/售后</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			toPay(){
				uni.navigateTo({
					url:'/pages/me/myorder/myorder'
				})
			},
			toReceive(){
				uni.navigateTo({
					url:'/pages/me/myorder/myorder'
				})
					
				
			},
			toComment(){
				uni.redirectTo({
					url:'/pages/me/myorder/myorder'
				})
			},
			toAftersale(){
				uni.redirectTo({
					url:('/pages/me/myorder/aftersell')
				})
			}
		}
	}
</script>


<style>
.font-style{
	font-weight: 500;
	color:#808080
}
.text-gray{
	color:#808080;
}
</style>
