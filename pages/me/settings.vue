<template>
	<view class="page-box">
		<view class="top">
			<text class="cuIcon-back_android ico-positon"  @click="toMe()"></text>
			<h3 class="settingTitle">设置</h3>
		</view>
		<view class="avatar">
			<u-avatar src="/static/me/头像.jpg" size="large" ></u-avatar>
		</view>
		<u-form :model="form" ref="uForm" label-align="center" class="u_form">
			<u-form-item label="泡泡昵称" label-width="200rpx" ><u-input v-model="form.name" placeholder="折木奉太郎" inputAlign="left"></u-input></u-form-item>
			<u-form-item label="性别" label-width="200rpx" ><u-input v-model="form.sex" placeholder="男" inputAlign="left"></u-input></u-form-item>
			<u-form-item label="手机号" label-width="200rpx" ><u-input v-model="form.phone" placeholder="131******6277" inputAlign="left"></u-input></u-form-item>
			<u-form-item label="我的收获地址" label-width="200rpx"  >
				<text class="cuIcon-right ico_right" @click="toaddress"></text>
			</u-form-item>
			<u-form-item label="问题反馈" label-width="200rpx">
				<text class="cuIcon-right ico_right" ></text>
			</u-form-item>
		</u-form>
		<button class="change_btn" @click="Tologin">切换账号</button>
		<button class="change_btn" @click="Tologin">退出登录</button>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				form:{
					name:'',
					intro:'',
					sex:'',
					phone:''
					
				},
			}
			
		},
		methods:{
			toMe(){
				uni.redirectTo({
					url:"me"
				})
			},
			toaddress(){
				uni.redirectTo({
					url:"address"
				})
			},
			Tologin(){
				uni.redirectTo({
					url:"login/login"
				})
			}
			
		}
	}
	
	
</script>

<style>
@import url("settings.css");	
</style>
