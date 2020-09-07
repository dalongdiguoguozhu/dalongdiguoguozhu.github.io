<template>
	<view class="bg-white wrap">
		
		<!-- 切换栏 start -->
		<view class="u-tabs-swiper-box">
			<u-tabs-swiper activeColor="#FED71A " ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiper-width="750"></u-tabs-swiper>
		</view>
		<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item">
				<scroll-view scroll-y="true" style="height: 100%;width: 100%;">
					<!-- 搜索栏 start-->
					<view class="cu-bar search bg-mycolor">
						<view class="search-form round">
							<text class="cuIcon-search" @click="Tosearch"></text>
							<input @focus="InputFocus" @click="Tosearch" @blur="InputBlur" :adjust-position="false" placeholder="搜索你的专属宿舍搭配" confirm-type="search"></input>
						</view>
					</view>
					<!-- 搜索栏 end-->
					<!-- 名片 start -->
					<!-- <view class="attentionlist"> -->
						<!-- <view class="top">						
							<u-avatar src="/static/home/头像.jpg" class="head_img" size="large"></u-avatar>
							<view class="username">你的泡泡er</view>
							<view class="data">昨天</view>
						</view>
						<view class="middle">
							<text class="middle-text">
								北欧性冷淡宿舍你值得拥有 \n
								告诉你寝室美化大赛第一名 次次检查90分以上是如何拿下的！\n
								看了其他的地方，发现宿舍改造都是上床下桌的，这次分享一个上下床+书桌柜子模式！
							</text>
						</view>
						
						<view class="bottom">
							<image src="/static/home/style8.jpg" class="bottom-image"></image>
							<image src="/static/home/style8.jpg" class="bottom-image"></image>
							<image src="/static/home/style8.jpg" class="bottom-image"></image>
							<image src="/static/home/style8.jpg" class="bottom-image"></image>
							<image src="/static/home/style8.jpg" class="bottom-image"></image>
							<image src="/static/home/style8.jpg" class="bottom-image"></image>
							
						</view>
						<view class="icon-list">
							<u-icon name="star" label="收藏" size="50rpx"></u-icon>
							<u-icon name="chat" label="评论" size="50rpx"></u-icon>
							<u-icon name="heart" label="250"size="50rpx"></u-icon>
							
						</view>
					</view> -->
					<!-- 名片 end -->
					<!-- 名片 start -->
					<!-- <view class="attentionlist">
						<view class="top">						
							<u-avatar src="/static/home/头像.jpg" class="head_img" size="large"></u-avatar>
							<view class="username">你的泡泡er</view>
							<view class="data">昨天</view>
						</view>
						<view class="middle">
							<text class="middle-text">
								北欧性冷淡宿舍你值得拥有 \n
								告诉你寝室美化大赛第一名 次次检查90分以上是如何拿下的！\n
								看了其他的地方，发现宿舍改造都是上床下桌的，这次分享一个上下床+书桌柜子模式！
							</text>
						</view>
						
						<view class="bottom">
							<image src="/static/home/style8.jpg" class="bottom-image"></image>
							<image src="/static/home/style8.jpg" class="bottom-image"></image>
							<image src="/static/home/style8.jpg" class="bottom-image"></image>
							<image src="/static/home/style8.jpg" class="bottom-image"></image>
							<image src="/static/home/style8.jpg" class="bottom-image"></image>
							<image src="/static/home/style8.jpg" class="bottom-image"></image>
							
						</view>
						<view class="icon-list">
							<u-icon name="star" label="收藏" size="50rpx"></u-icon>
							<u-icon name="chat" label="评论" size="50rpx"></u-icon>
							<u-icon name="heart" label="250"size="50rpx"></u-icon>
							
						</view>
					</view> -->
					<!-- 名片 end -->
					<!-- 名片 start -->
					<view class="attentionlist" v-for="item in attentionlist" :key="index">
						<view class="top">						
							<u-avatar :src="item.head_img" class="head_img" size="large"></u-avatar>
							<view class="username">{{item.username}}</view>
							<view class="data">{{item.data}}</view>
						</view>
						<view class="middle">
							<text class="middle-text">
								{{item.text}}
							</text>
						</view>
						
						<view class="bottom">
							<text>---</text>
							<image :src="item.url1" class="bottom-image"></image>
							<image :src="item.url2" class="bottom-image"></image>
							<image :src="item.url3" class="bottom-image"></image>
							<image :src="item.url4" class="bottom-image"></image>
							<image :src="item.url5" class="bottom-image"></image>
							<image :src="item.url6" class="bottom-image"></image>
						</view>
						<view class="icon-list">
							<u-icon name="star" label="收藏" size="50rpx"></u-icon>
							<u-icon name="chat" label="评论" size="50rpx"></u-icon>
							<u-icon name="heart" label="250"size="50rpx"></u-icon>
							
						</view>
					</view>
					<!-- 名片 end -->
				</scroll-view>
				
				
			</swiper-item>
			<swiper-item class="swiper-item">
				<!-- 搜索栏 start-->
				<scroll-view scroll-y="true" style="height: 100%;width: 100%;">
					<view class="cu-bar search bg-mycolor">
						<view class="search-form round">
							<text class="cuIcon-search" @click="Tosearch"></text>
							<input @focus="InputFocus" @click="Tosearch" @blur="InputBlur" :adjust-position="false"  placeholder="搜索你的专属宿舍搭配" confirm-type="search"></input>
						</view>
						
					</view>
				<!-- 搜索栏 end-->
					<waterfall :left_list="left_list" :right_list="right_list"></waterfall>
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<!-- 搜索栏 start-->
				<scroll-view scroll-y="true" >
					
				
					<view class="cu-bar search bg-mycolor">
						<view class="search-form round">
							<text class="cuIcon-search" @click="Tosearch"></text>
							<input @focus="InputFocus" @click="Tosearch" @blur="InputBlur" :adjust-position="false" placeholder="搜索你的专属宿舍搭配" confirm-type="search"></input>
						</view>
						<view class="action">
						
						</view>
					</view>
				<!-- 搜索栏 end-->
					<view class="card" v-for="item in topiclist">
						<view class="card_text">
							<text class="text_desc">{{item.desc}}</text>
							<view class="text_text">
								<text class="text_watch">{{item.watchNum}}浏览</text>
								<text class="text_watch">{{item.dynamicNum}}动态</text>
							</view>
						
						</view>
					
						<image :src="item.img_src" class="card_img" style="height: 150rpx; width: 150rpx;"></image>
					</view>
				</scroll-view>	
			</swiper-item>
		
		</swiper>
		<!-- 切换栏 end -->
		
	
	
	
	
	
	
		<!-- 底部导航栏 start -->
		<view class="bottombar">
			<bottombar :tIndex="1"></bottombar>
		</view>
		
		<!-- 底部导航栏 end -->
	</view>
</template>

<script>
	import bottombar from "../../components/bottombar.vue"
	import waterfall from "../../components/waterfall.vue"
	export default {
		data() {
			return {
				current:0,
				swiperCurrent:0,
				list:[
					{	
						name:"关注",
						url:"/static/home/灯泡.png"
					},
					{	
						name:"推荐",
						url:"/static/home/smile.png"
					},
					{	
						name:"话题",
						url:"/static/home/msg_0.png"
					}
				],
				attentionlist:[
					{
						head_img:"/static/home/头像.jpg",
						username:"你的泡泡er",
						data:"昨天",
						text: "北欧性冷淡宿舍你值得拥有 \n"+
								"告诉你寝室美化大赛第一名 次次检查90分以上是如何拿下的！\n"+
								"看了其他的地方，发现宿舍改造都是上床下桌的，这次分享一个上下床+书桌柜子模式！\n",
						url1:"/static/home/style8.jpg",
						url2:"/static/home/style8.jpg",
						url3:"/static/home/style8.jpg",
						url4:"/static/home/style8.jpg",
						url5:"/static/home/style8.jpg",
						url6:"/static/home/style8.jpg",
					},
					{
						head_img:"/static/home/头像.jpg",
							username:"你的泡泡er",
							data:"昨天",
							text: "北欧性冷淡宿舍你值得拥有 \n"+
									"告诉你寝室美化大赛第一名 次次检查90分以上是如何拿下的！\n"+
									"看了其他的地方，发现宿舍改造都是上床下桌的，这次分享一个上下床+书桌柜子模式！\n",
							url1:"/static/home/style8.jpg",
							url2:"/static/home/style8.jpg",
							url3:"/static/home/style8.jpg",
							url4:"/static/home/style8.jpg",
							url5:"/static/home/style8.jpg",
							url6:"/static/home/style8.jpg",
						
					},
					{
						head_img:"/static/home/头像.jpg",
							username:"你的泡泡er",
							data:"昨天",
							text: "北欧性冷淡宿舍你值得拥有 \n"+
							
									"告诉你寝室美化大赛第一名 次次检查90分以上是如何拿下的！\n"+
									"看了其他的地方，发现宿舍改造都是上床下桌的，这次分享一个上下床+书桌柜子模式！\n",
							url1:"/static/home/style8.jpg",
							url2:"/static/home/style8.jpg",
							url3:"/static/home/style8.jpg",
							url4:"/static/home/style8.jpg",
							url5:"/static/home/style8.jpg",
							url6:"/static/home/style8.jpg",
						
					}
				],
				left_list:[
					{
						img_num:1,
						img_src:"/static/style_image/style7.jpg",
						text:"喜欢蓝白色搭配的童鞋们一定不要错过！",
						username:"你的泡泡er",
						headIcon:"",
						star:"0.7w",
						pageUrl:"/pages/index/productDisplay/productDisplay"
					},
					{	
						img_num:2,
						img_src:"/static/style_image/style2.jpg",
						text:"想住进森林里吗",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w",
						pageUrl:"/pages/index/productDisplay/productDisplay"
					},{	
						img_num:3,
						img_src:"/static/style_image/style3.jpg",
						text:"喜欢粉红色搭配吗？",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w",
						pageUrl:"/pages/index/productDisplay/productDisplay"
					}
					
				],
				right_list:[
					
					{
						img_num:5,
						img_src:"/static/style_image/style5.jpg",
						text:"喜欢整理吗？",
						username:"你的泡泡er",
						headIcon:"",
						
						pageUrl:"/pages/index/productDisplay/productDisplay"
					},
					{
						img_num:6,
						img_src:"/static/style_image/style6.jpg",
						text:"喜欢收纳吗？",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w",
						pageUrl:"/pages/index/productDisplay/productDisplay"
					},
					{
						img_num:7,
						img_src:"/static/style_image/style7.jpg",
						text:"喜欢收纳吗？",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w",
						pageUrl:"/pages/index/productDisplay/productDisplay"
					}
					
				],
				topiclist:[
					{
						desc:"你们的宿舍是什么样子？",
						watchNum:"16.8万",
						dynamicNum:"5217",
						img_src:"/static/home/图片.png"
					},
					{
						desc:"开启星空探险！",
						watchNum:"16.8万",
						dynamicNum:"5217",
						img_src:"/static/home/图片.png"
					},
					
					{
						desc:"这些收纳太神奇了",
						watchNum:"16.8万",
						dynamicNum:"5217",
						img_src:"/static/home/图片.png"
					},
					
					{
						desc:"最向往的宿舍",
						watchNum:"16.8万",
						dynamicNum:"5217",
						img_src:"/static/home/图片.png"
					},
					
					{
						desc:"好看又好用的日常单品",
						watchNum:"16.8万",
						dynamicNum:"5217",
						img_src:"/static/home/图片.png"
					},
					
					{
						desc:"文案集合",
						watchNum:"16.8万",
						dynamicNum:"5217",
						img_src:"/static/home/图片.png"
					},
					{
						desc:"最近都在追什么剧",
						watchNum:"16.8万",
						dynamicNum:"5217",
						img_src:"/static/home/图片.png"
					}
					
					
					
				]
				
				
				
			}
			
			
		},
		methods:{
			
			change(index){
				this.swiperCurrent = index;
				
			},
			transition({detail : { dx }}){
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({ detail :{ current }}){
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			changebtncolor(){
				this.btnstyle= 1;
			},
			changebtncolor2(){
				this.btnstyle= 0;
			},
			Tosearch(){
				uni.redirectTo({
					url:"search/search"
				})
			}
		},
		components:{
			bottombar,
			waterfall
			
		}
		
	}
	
	
	
</script>

<style>
@import url("home.css");	
	
</style>
