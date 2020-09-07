<template>
	<view class="page-box">
		<view  style="display: flex;flex-direction: row;padding: 30rpx 10rpx;align-items: center;background-color: #FFFFFF;">
			<text class="cuIcon-back_android " style="position: relative;z-index:999;font-size: large;margin: 0 0 0rpx 20rpx ;" @click="toShop()"></text>
			<h3 style="margin-left: 10rpx;">结算</h3>	
		</view>
		<!-- 地址信息栏 start -->
		<view class="address_info">		
			<image src="/static/me/坐标.png" class="location_ico"></image>
			<view class="address_desc">
				<text class="buyer_name" >{{ order_detail.name }}
				<text class="phone_number">{{ order_detail.phone_number }}</text>
				</text>
				
				<text class="address_detail">{{ order_detail.address_detail }}</text>
			</view>			
		</view>
		<!-- 地址信息栏 end -->
		<!-- 订单信息 start -->
		<view class="ordercard" v-for="item in orderlist" :key="item">
			<view class="title">{{ item.shopname }}</view>
			<view class="order_top">
				<image :src="item.img" class="product_img"></image>
				<view class="order_desc">
					<text class="descintro">{{ item.desc}}</text>
					<text class="desctype">颜色分类：{{item.color}}；尺码：{{item.size}}</text>
				</view>
				<view class="orderprize">
					<view class="prize">￥{{item.prize}}</view>
					<text class="num">x {{item.num}}</text>
				</view>
			</view>
			<view class="form">
				<u-form :model="form" ref="uForm">
					<u-form-item label="配送方式" label-width="200rpx"><u-input v-model="form.delivery" placeholder="普通配送 快递 免邮"/></u-form-item>
					<u-form-item label="店铺优惠" label-width="200rpx"><u-input v-model="form.discount" placeholder="无优惠"/></u-form-item>
					<u-form-item label="订单备注" label-width="200rpx"><u-input v-model="form.remark" placeholder="选填,请先和商家协商一致"/></u-form-item>
				</u-form>
			</view>
			<view class="price-calculate">
				<text class="num">共{{item.num}}件</text>
				<text> 小计: <text class="red"> ￥{{item.prize}}</text></text>
			</view>
		</view>
		<!-- 订单信息 end -->
		<!-- 结算栏 start -->
		<view class="buttom">
			<view class="desc">
				<text>共2件，</text>
				<text>合计:</text>
				<text>￥{{total}}</text>
			</view>
			<view class="btn" @click="calculateAllBtn">
				提交订单
			</view>
		</view>
		<!-- 结算栏 end -->
	</view>
</template>

<script>
	export default{
		data(){
			return {
				order_detail:{
					name:"大龙帝国国主",
					phone_number:"86-13160246277",
					address_detail:"江苏省 徐州市 铜山区 铜山街道 大学路1号中国矿业大学南湖校区",
					data:"2020-07-21 10:22:28",
					address_desc:"您已在中国矿业大学南湖校区菜鸟驿站完成取件，感谢使用菜鸟驿站，期待再次为您服务"
							
				},
				total: 0,
				form: {
							delivery: '',
							discount: '',
							remark:''
				},
				orderlist:[
					{
						shopname:"泡泡自营",
						img:"/static/shoppingcart/摆件.png",
						desc:"ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架",
						color:"黄色",
						size:"90cm",
						prize:"25.00",
						num:"1",
						delivery:"普通配送 快递 免邮",
						discount:"无优惠",
						remark:"",
					},
					{
						shopname:"折木自营",
						img:"/static/shoppingcart/摆件.png",
						desc:"ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架",
						color:"红色",
						size:"110cm",
						prize:"25.00",
						num:"1",
						delivery:"普通配送 快递 免邮",
						discount:"无优惠",
						remark:"",
					},
				]
				
				
			}
		},
		mounted() {
			const price = localStorage.getItem("price");
			this.total = Number(price)
		},
		methods:{
			toShop(){
				uni.redirectTo({
					url:"shoppingcart"
				})
			}
		}
		
	}
</script>

<style>
	@import url("compute.css");
	.page-box {
		margin-bottom: 4rem;
	}
	/* .page-box: first-child {
		margin
	} */
</style>
