<template>
	<view class="page-box">
		<view style="display: flex;flex-direction: row;padding: 30rpx 10rpx;align-items: center;background-color: #FFFFFF;">
			<text class="cuIcon-back_android " style="position: fixed;z-index:999;font-size: large;margin: 20rpx 0 10rpx 30rpx ;" @click="toMe()"></text>
			<h3 style="margin-left: 300rpx;">订单详情</h3>
		</view>
		<view class="top" v-show="order_status===1?true:false">
			<view class="top-position">
				<image src="/static/me/搬快递.png" class="top_img"></image>
				<text>泡泡已发货</text>
			</view>
		</view>
		<view class="top" v-if="order_status===0?true:false">
			<view class="top-position">
				<text class="text-position">等待买家付款</text>
				<image src="/static/me/睡觉.png" class="top_img"></image>
				
			</view>
		</view>
		<view class="middle">
			<view class="order_status" v-if="order_status===1?true:false">
				
				<image src="/static/me/快递货车.png" class="delivery_ico"></image>
				<text class="order_desc">
					<text class="finish_pick_up">{{ order_detail.address_desc }}</text>
					<text class="finish_date">{{ order_detail.data }}</text>
				</text>
				<text class="cuIcon-right finish_pick_up"></text>
			</view>
			<view class="address_infor">
				
				<image src="/static/me/坐标.png" class="location_ico"></image>
				<view class="address_desc">
					<text class="buyer_name" >{{ order_detail.name }}
					<text class="phone_number">{{ order_detail.phone_number }}</text>
					</text>
					
					<text class="address_detail">{{ order_detail.address_detail }}</text>
				</view>
				
			</view>
			<view class="ordercard">
				<ordercard ></ordercard>
			</view>
			<view class="recommend-card">
				<recommendcard></recommendcard>
			</view>
		</view>
	</view>
</template>

<script>
	import ordercard from "../../../components/ordercard.vue"
	import recommendcard from "../../../components/recommendcard.vue"
	export default{
		
		data(){
			return {
				order_status:1,
				order_detail:{
					name:"大龙帝国国主",
					phone_number:"86-13160246277",
					address_detail:"江苏省 徐州市 铜山区 铜山街道 大学路1号中国矿业大学南湖校区",
					data:"2020-07-21 10:22:28",
					address_desc:"您已在中国矿业大学南湖校区菜鸟驿站完成取件，感谢使用菜鸟驿站，期待再次为您服务"
			
				}				
			}
			
		},
		onLoad: function (option){
			
			// this.order_status = option.number;
			 console.log(option.number);
			// this.order_status = number;
		},
		methods:{
			toMe(){
				uni.redirectTo({
					url:"../me"
				})
			},
		},
		components:{
			ordercard,
			recommendcard
		}
		
	}
</script>

<style>
	@import url("allorder.css");
</style>
