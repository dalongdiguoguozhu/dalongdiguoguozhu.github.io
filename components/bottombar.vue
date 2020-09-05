<template>
	<view>
			<!-- <view class="cu-bar tabbar bg-white">
				<view class="action">
					<view class="cuIcon-cu-image">
						<image src="/static/tabbar/basics_cur.png"></image>
					</view>
					<view class="text-green">元素</view>
				</view>
				<view class="action">
					<view class="cuIcon-cu-image">
						<image src="/static/tabbar/component.png"></image>
					</view>
					<view class="text-gray">组件</view>
				</view>
				<view class="action">
					<view class="cuIcon-cu-image">
						<image src="/static/tabbar/plugin.png"></image>
						<view class="cu-tag badge">99</view>
					</view>
					<view class="text-gray">扩展</view>
				</view>
				<view class="action">
					<view class="cuIcon-cu-image">
						<image src="/static/tabbar/about.png"></image>
						<view class="cu-tag badge"></view>
					</view>
					<view class="text-gray">关于</view>
				</view>
			</view> -->
			<!-- <view class="cu-bar tabbar myTabbar bg-mycolor">
				<view class="action" :class="1===tIndex?'text-yellow':'text-white'" @click="skip00">
					<view class="cuIcon-home"></view> 首页
				</view>
				<view class="action" :class="2===tIndex?'text-yellow':'text-white'"  @click="skip01">
					<view class="cuIcon-similar"></view> 商城
				</view>
				<view class="action" :class="5===tIndex?'text-yellow':'text-white'"  @click="skip02">
					<view class="cuIcon-roundaddfill ico-size"></view> 发布
				</view>
				<view class="action" :class="3===tIndex?'text-yellow':'text-white'"  @click="skip03">
					<view class="cuIcon-cart"></view> 购物车
				</view>
				<view class="action" :class="4===tIndex?'text-yellow':'text-white'"  @click="skip04">
					<view class="cuIcon-my"></view> 我的
				</view>
			</view>	 -->
			<view class="cu-bar tabbar myTabbar bg-mycolor">
				<view class="action " :class="1===tIndex?'text-yellow my-font':'text-white'" @click="skip00">
					<view class="cuIcon-home"></view> 首页
				</view>
				<view class="action" :class="2===tIndex?'text-yellow my-font':'text-white'"  @click="skip01">
					<view class="cuIcon-similar"></view> 商城
				</view>
				<view class="action add-action" :class="5===tIndex?'text-yellow my-font':'text-white'"  @click="skip02">
					<button class="cu-btn cuIcon-add bg-myyellow shadow"></button>
					发布
				</view>
				<view class="action" :class="3===tIndex?'text-yellow my-font':'text-white'"  @click="skip03">
					<view class="cuIcon-cart">
						<view class="cu-tag badge bg-myyellow">{{count}}</view>
					</view>
						购物车
					</view>
				<view class="action" :class="4===tIndex?'text-yellow my-font':'text-white'"  @click="skip04">
					<view class="cuIcon-my">
						<view class="cu-tag badge bg-myyellow"></view>
					</view>
						我的
				</view>
			</view>
				<!-- <template v-if="isStudent">
					<view class="action text-red">
						<view class="cuIcon-activityfill" style="font-size: 70rpx;color:#FF0000"></view>
					</view>
				</template>
				<template v-else>
					<view class="action text-gray add-action" @click="skip02">
							<view class="cu-btn cuIcon-add shadow bg-red btn"></view>
						发布
					</view>
				</template> -->
				
				<!-- <view class="action" :class="3===tIndex?'text-red':'text-gray'" @click="skip03">
					<view class="cuIcon-notice">
					</view>
					通知
				</view> -->
				<!-- <view class="action" :class="4===tIndex?'text-red':'text-gray'" @click="skip04"> -->
					<!-- <view class="cuIcon-my"> -->
						<!-- <view class="cu-tag badge"></view> -->
				<!-- 	</view>
					我的
				</view> -->
			
			
	</view>
</template>

<script>
	export default {
		props:{
			tIndex:{
				type:Number,
				default:0
			}
		},
		data() {
			return {
				InputBottom: 0,
				isStudent:true,
				count:99
			};
		},
		methods: {
			// InputFocus(e) {
			// 	this.InputBottom = e.detail.height
			// },
			// InputBlur(e) {
			// 	this.InputBottom = 0
			// },
			// 跳转设置start
			skip00(){
				
				uni.redirectTo({
					url:"../index/home"
				});
				
			},
			skip01(){
				console.log("nihao")
				uni.redirectTo({
					url:"../market/market"
				});
			},
			skip02(){
				uni.redirectTo({
					url:"../release/release"
				});
			},
			skip03(){
				uni.redirectTo({
					url:"../shoppingcart/shoppingcart"
				})
				
			},
			skip04(){
				uni.redirectTo({
				    url: '../me/me'
				});
			}
			// 跳转设置end
		
		}
	}
</script>

<style>
	
	
	.myTabbar{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999;
		/* margin-top: 100upx; */
		background-color: #FFFEFF;
	}
	.bg-mycolor{
		background-color: #A497C9;
	}
	
	.bg-myyellow{
		background-color: #FED71A;
		color: #fff;
	}
	.my-font{
		font-weight: bold;
	}
	
</style>
