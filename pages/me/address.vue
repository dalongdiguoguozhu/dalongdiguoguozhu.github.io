<template>
	<view class="page-box">
		<view class="top">
			<text class="cuIcon-back_android ico-back"  @click="tosettings()"></text>
			<h3 class="addressTitle">收货地址</h3>
		</view>
		<view class="item" v-for="(res, index) in siteList" :key="res.id">
			<view class="top">
				<view class="name">{{ res.name }}</view>
				<view class="phone">{{ res.phone }}</view>
				<view class="tag">
					<text v-for="(item, index) in res.tag" :key="index" :class="{red:item.tagText=='默认'}">{{ item.tagText }}</text>
				</view>
			</view>
			<view class="bottom">
				{{ res.site }}
				<u-icon name="edit-pen" :size="40" color="#999999"></u-icon>
			</view>
		</view>
		<view class="addSite" @click="toAddSite">
			<view class="add">
				<u-icon name="plus" color="#ffffff" class="icon" :size="30"></u-icon>新建收货地址
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
		
			return {
				siteList:[]
			
		};
		
	},
	onLoad() {
		this.getData();
	},
	methods:{
		getData() {
			this.siteList = [
				{
					id: 1,
					name: '张小白',
					phone: '183****5523',
					tag: [
						{
							tagText: '默认'
						},
						{
							tagText: '学校'
						}
					],
					site: '中国矿业大学南湖校区竹二a2082'
				},
				{
					id: 2,
					name: '张小白',
					phone: '183****5555',
					tag: [
						
						
					],
					site: '中国矿业大学南湖校区竹二a2082'
				},
				{
					id: 3,
					name: '张小白',
					phone: '153****5555',
					tag: [],
					site: '中国矿业大学南湖校区竹二a2082'
				}
			];
		},
		tosettings(){
		uni.redirectTo({
			url:"settings"
		})
	},
	toAddSite(){
		uni.navigateTo({
		    url: 'addSite'
		});
	}
			

	}
		
	}
	
	
</script>

<style lang="scss" scoped>
@import url("address.css");
.item {
	padding: 40rpx 20rpx;
	.top {
		display: flex;
		font-weight: bold;
		font-size: 34rpx;
		.phone {
			margin-left: 60rpx;
		}
		.tag {
			display: flex;
			font-weight: normal;
			align-items: center;
			text {
				display: block;
				width: 60rpx;
				height: 34rpx;
				line-height: 34rpx;
				color: #ffffff;
				font-size: 20rpx;
				border-radius: 6rpx;
				text-align: center;
				margin-left: 30rpx;
				background-color:rgb(164,151,201);
			}
			.red{
				background-color:rgb(254,215,26)
			}
		}
	}
	.bottom {
		display: flex;
		margin-top: 20rpx;
		font-size: 28rpx;
		justify-content: space-between;
		color: #999999;
	}
}
.addSite {
	display: flex;
	justify-content: space-around;
	width: 600rpx;
	line-height: 100rpx;
	position: absolute;
	bottom: 30rpx;
	left: 80rpx;
	background-color: rgb(254,215,26);
	border-radius: 60rpx;
	font-size: 30rpx;
	.add{
		display: flex;
		align-items: center;
		color: #ffffff;
		.icon{
			margin-right: 10rpx;
		}
	}
}
	
	
	
	
</style>
