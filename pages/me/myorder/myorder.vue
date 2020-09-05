<template>
	<view class="wrap bg-white" >
		<view class="cu-bar search bg-mycolor" >
			<!-- <view class="cuIcon-back" style="position: fixed; z-index: 999;" @click="backtome()"></view> -->
			<view class="search-form round ">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索我的订单" confirm-type="search"></input>
				
			</view>
			<view class="action" @click="search">
				 <image src="../../../static/myorder/search.png" class="btn_img"></image>
			</view>
			
			
		</view>
		<u-tabs-swiper activeColor="#f29100" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiper-width="750">
		</u-tabs-swiper>
		<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish" >
				<!-- 全部页面 -->
				<swiper-item class="swiper-item">
						
						<scroll-view scroll-y="true" style="height: 100%;width: 100%;" @scolltolower='reachBottom'>
							<view class="univarsal_flex">
								<image src="/static/myorder/smile.png" class="smile_img"></image>
								泡泡自营
							</view>
							<view class="ordercard" v-for="(res,index) in dataList1 " :key="res.id" >
								<view class="top">{{res.deal}}</view>
							<view class="product_describtion">
								<view class="left"><image :src="res.goodsUrl" class="left_img"></image></view>
								<view class="right">
									<view class="product_desc">{{res.title}}</view>
									<view class="product_type">{{res.type}}</view>
									<view class="product_price">￥ {{res.price}}
										<text class="product_num">x{{res.number}}</text>
									</view>
								</view>
							</view>	
							</view>
						</scroll-view>
				<!--全部页面结束  -->
				<!--待付款页面  -->	
				</swiper-item>
				<swiper-item class="swiper-item swiper-item-height">
					<scroll-view scroll-y="true" style="height: 100%;width: 100%;" @scolltolower='reachBottom'>
						<view class="univarsal_flex">
							<image src="/static/myorder/smile.png" class="smile_img"></image>
							泡泡自营
						</view>
						<view class="ordercard" style="height: 360rpx;" v-for="(res,index) in dataList2 " :key="res.id" >
							<view class="top">{{res.deal}}</view>
						<view class="product_describtion">
							<view class="left"><image :src="res.goodsUrl" class="left_img"></image></view>
							<view class="right">
								<view class="product_desc">{{res.title}}</view>
								<view class="product_type">{{res.type}}</view>
								<view class="product_price">￥ {{res.price}}
									<text class="product_num">x{{res.number}}</text>
								</view>
								
							</view>							
						</view>
							<view class="bottom">
								<view class="btnlist">
									<view class="logistics btn">加入购物车</view>
									<view class="exchange btn">修改地址</view>
									<view class="evaluate btn select-item">付款</view>
								</view>
							</view>
								
						</view>
					</scroll-view>
				<!--待付款页面结束  -->	
				<!-- 待收货页面 -->
				</swiper-item>
				<swiper-item class="swiper-item">
					<scroll-view scroll-y="true" style="height: 100%;width: 100%;" @scolltolower='reachBottom'>
						<view class="univarsal_flex">
							<image src="/static/myorder/smile.png" class="smile_img"></image>
							泡泡自营
						</view>
						<view class="ordercard" style="height: 360rpx;" v-for="(res,index) in dataList3 " :key="res.id" >
							<view class="top">{{res.deal}}</view>
						<view class="product_describtion">
							<view class="left"><image :src="res.goodsUrl" class="left_img"></image></view>
							<view class="right">
								<view class="product_desc">{{res.title}}</view>
								<view class="product_type">{{res.type}}</view>
								<view class="product_price">￥ {{res.price}}
									<text class="product_num">x{{res.number}}</text>
								</view>
							</view>
							
						</view>	
						<view class="bottom">
							<view class="btnlist">
								<view class="logistics btn">加入购物车</view>
								<view class="exchange btn">查看物流</view>
								<view class="evaluate btn select-item">确认收货</view>
							</view>
						</view>
						</view>
					</scroll-view>
					<!-- 待收货页面结束 -->
					<!-- 待评价页面 -->
				</swiper-item>
				<swiper-item class="swiper-item">
					
					<scroll-view scroll-y="true" style="height: 100%;width: 100%;" @scolltolower='reachBottom'>
						<view class="univarsal_flex">
							<image src="/static/myorder/smile.png" class="smile_img"></image>
							泡泡自营
						</view>
						<view class="ordercard" style="height: 360rpx;" v-for="(res,index) in dataList4 " :key="res.id" >
							<view class="top">{{res.deal}}</view>
						<view class="product_describtion">
							<view class="left"><image :src="res.goodsUrl" class="left_img"></image></view>
							<view class="right">
								<view class="product_desc">{{res.title}}</view>
								<view class="product_type">{{res.type}}</view>
								<view class="product_price">￥ {{res.price}}
									<text class="product_num">x{{res.number}}</text>
								</view>
							</view>
						</view>
							<view class="bottom">
								<view class="btnlist" style="justify-content: space-evenly;">
									
									<view class="btn">查看物流</view>
									<view class="btn select-item">评价</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				<!-- 待评价页面结束 -->
		</swiper>
	</view>
	
</template>

<script>
	
	export default {
		data() {
			return {
				list:[
					{
						name:"全部"
					},
					{
						name:"待付款"
					},
					{
						name:"待收货"
					},
					{
						name:"待评价"
					}
				],
				// 全部订单栏
				dataList1:[
				{
					id:1,
					deal:'买家已付款',
					goodsUrl:'/static/style_image/style7.jpg',
					title:'ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架',
					type:'黑-L型上架+2铁栏',
					price:'29.9',
					number:1	
				},
				{
					id:2,
					deal:'待付款',
					goodsUrl:'/static/style_image/style7.jpg',
					title:'ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架',
					type:'黑-L型上架+2铁栏',
					price:'29.9',
					number:1	
				},
				{
					id:3,
					deal:'泡泡已发货',
					goodsUrl:'/static/style_image/style7.jpg',
					title:'ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架',
					type:'黑-L型上架+2铁栏',
					price:'29.9',
					number:1	
				},
				{
					id:4,
					deal:'待评价',
					goodsUrl:'/static/style_image/style7.jpg',
					title:'ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架',
					type:'黑-L型上架+2铁栏',
					price:'29.9',
					number:1	
				}	
				],
				dataList2:[
					{
						id:2,
						deal:'待付款',
						goodsUrl:'/static/style_image/style7.jpg',
						title:'ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架',
						type:'黑-L型上架+2铁栏',
						price:'29.9',
						number:1	
					}		
				],
				dataList3:[
					{
						id:3,
						deal:'泡泡已发货',
						goodsUrl:'/static/style_image/style7.jpg',
						title:'ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架',
						type:'黑-L型上架+2铁栏',
						price:'29.9',
						number:1	
					}
				],
				dataList4:[
					{
						id:4,
						deal:'待评价',
						goodsUrl:'/static/style_image/style7.jpg',
						title:'ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架',
						type:'黑-L型上架+2铁栏',
						price:'29.9',
						number:1	
					}	
				],
				current:0,
				swiperCurrent:0,
				
				
			}
		},
		onLoad(){
			
		},
		computed:{
			//价格小数
			priceDecimal() {
				return val => {
					if (val !== parseInt(val)) return val.slice(-2);
					else return '00';
				};
			},
			// 价格整数
			priceInt() {
				return val => {
					if (val !== parseInt(val)) return val.split('.')[0];
					else return val;
				};
			}
		},
		methods: {
			search(){
				
			},
			backtome(){
				uni.redirectTo({
					url:"../me"
				})
			},
			
			// 局部数据切换
			
				change(index){
					this.swiperCurrent = index;
					this.getOrderList();
				},
				transition({detail : { dx }}){
					this.$refs.tabs.setDx(dx);
				},
				animationfinish({ detail :{ current }}){
					this.$refs.tabs.setFinishCurrent(current);
					this.swiperCurrent = current;
					this.current = current;
				}
			}		
				
			
	}
</script>

<style lang="scss" scoped>
@import url("myorder.css");

</style>
