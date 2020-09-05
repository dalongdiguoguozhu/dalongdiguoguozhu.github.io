<template>
	
	<view class="page">
		
		
		<view class="imglist">
			
			<view class="img-flex">
				<image src="/static/release/图片.png" class="img-item"></image>
			</view>
			<view class="img-flex">
				<image src="/static/release/图片.png" class="img-item"></image>
			</view>
			<view class="img-flex2">
				<image src="/static/release/add.png" class="img-item"></image>
			</view>
		</view>
		<view class="text">
			<u-input type="text" placeholder="填写标题会有更多赞哦!" inputAlign="center"  class="u_input"></u-input>
			<u-input type="textarea"  placeholder="添加正文"  class="u_textarea"></u-input>
		</view>
		<view class="product_release">
			
				<view>相关商品
				<u-icon name="plus" size="40" color="#fff"  class="ico-release" ></u-icon>
				</view>
				
				<view class="releselist" v-for="item in releaseList">
					<view class="release_url">
					<text class="id_font">{{item.id}} </text>
					<text style="margin-left: 10rpx;">{{item.text}}</text>
					<!-- fu至本段内容u2yTc0Be3yy达开泡pao或惦击链接https://m.tb.cn/h.VGt0fox?sm=e4f327 至浏览器【ins大学生宿舍神器 铁挂篮书桌柜边置物架女寝室莫兰迪桌桌面收纳架】 -->
					
					<u-icon name="minus" class="ico-delete" color="#fff"></u-icon>
					</view>
					
				</view>
				
				
			
		</view>	
		
		<button class="release_btn" @click="back()">发布搭配</button>
		<button class="release_btn" @click="back()">返回</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				releaseList:[
					{
						id:1,
						text:"fu至本段内容u2yTc0Be3yy达开泡pao或惦击"+
						"链接https://m.tb.cn/h.VGt0fox?sm=e4f327 至"
						+"浏览器【ins大学生宿舍神器 铁挂篮书桌柜边置"+
						"架女寝室莫兰迪桌桌面收纳架】"
					},
					{
						id:2,
						text:"fu至本段内容u2yTc0Be3yy达开泡pao或惦击"+"链接https://m.tb.cn/h.VGt0fox?sm=e4f327 至"
						+"浏览器【ins大学生宿舍神器 铁挂篮书桌柜边置"+"架女寝室莫兰迪桌桌面收纳架】"
					}
					
				]
			}
		},
		methods: {
			back(){
				uni.redirectTo({
					url:"../index/home"
				})
			},
			backto(){
				uni.navigateTo({
					url:"../index/home"
				})
			}
				
			
		}
	}
</script>

<style>
@import url("release.css");
</style>
