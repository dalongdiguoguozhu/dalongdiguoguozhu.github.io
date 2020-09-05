<template>
	<view class="wrap">
		<view style="display: flex;flex-direction: row;padding: 30rpx 10rpx;align-items: center;background-color: #FFFFFF;">
			<text class="cuIcon-back_android " style="position: fixed;z-index:999;font-size: large;margin: 20rpx 0 10rpx 30rpx ;" @click="tosettings()"></text>
			<h3 style="margin-left: 300rpx;">登录</h3>
		</view>
		<view class="top"></view>
		<view class="content">
			<view class="content_display">
				<view class="title">HELLO! 
				<text class="title_desc">终于等到你</text>
				</view>
				<image src="/static/me/喇叭.png" class="title-img"></image>
			</view>
			
			
			<u-input  type="number" v-model="tel" placeholder="请输入手机号" ></u-input>
			<view class="tips">未注册的手机号验证后自动创建泡泡账号</view>
			<button @tap="submit" :style="[inputStyle]" class="getCaptcha">获取短信验证码</button>
			<view class="alternative">
				<view class="password">密码登录</view>
				<view class="issue">遇到问题</view>
			</view>
		</view>
		<view class="buttom">
			<view class="loginType">
				<view class="wechat item">
					<view class="icon"><u-icon size="70" name="weixin-fill" color="rgb(83,194,64)"></u-icon></view>
					微信
				</view>
				<view class="QQ item">
					<view class="icon"><u-icon size="70" name="qq-fill" color="rgb(17,183,233)"></u-icon></view>
					QQ
				</view>
			</view>
			<view class="hint">
				登录代表同意
				<text class="link">美卧泡泡用户协议、隐私政策，</text>
				并授权使用您的泡泡账号信息（如昵称、头像、收获地址）以便您统一管理
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				tel: ''
			}
		},
		computed: {
			inputStyle() {
				let style = {};
				if(this.tel) {
					style.color = "#fff";
					style.backgroundColor = this.$u.color['warning'];
				}
				return style;
			}
		},
		methods: {
			submit() {
				
			},
			tosettings(){
				uni.redirectTo({
					url:"../settings"
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
.wrap {
	font-size: 28rpx;
	background-color: #FFFFFF;
	.content {
		width: 600rpx;
		margin-left: 80rpx ;
		padding-top: 100rpx;
		.content_display{
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
		}
		.title {
			text-align: left;
			font-size: 60rpx;
			font-weight: 500;
			margin-bottom: 100rpx;
			display: flex;
			flex-direction: column;
		}
		.title_desc{
			font-size: 30rpx;
			font-weight: 600;
			margin-top: 30rpx;
		}
		.title-img{
			width: 450rpx; 
			height: 300rpx;
		}
		input {
			text-align: left;
			margin-bottom: 10rpx;
			padding-bottom: 6rpx;
		}
		.tips {
			color: #808080;
			margin-bottom: 60rpx;
			margin-top: 8rpx;
		}
		.getCaptcha {
			background-color: rgb(253,190,0);
			border-radius: 80rpx;
			color: #FFFFFF;
			border: none;
			font-size: 30rpx;
			padding: 12rpx 0;
			
			&::after {
				border: none;
			}
		}
		.alternative {
			color: $u-tips-color;
			display: flex;
			justify-content: space-between;
			margin-top: 30rpx;
		}
	}
	.buttom {
		.loginType {
			display: flex;
			padding: 350rpx 150rpx 150rpx 150rpx;
			justify-content:space-between;
			
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				color: #808080;
				font-size: 28rpx;
			}
		}
		
		.hint {
			padding: 20rpx 40rpx;
			font-size: 20rpx;
			color: black;
			
			.link {
				color: rgb(253,190,0);
			}
		}
	}
}	
</style>
