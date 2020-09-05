<template>
	<view class="page bg-white">
		<scroll-view scroll-y="true" style="height: 100%;width: 100%;">
			
		
		<!-- 标题栏 start -->
		<view class="title">
			<text class="title-text">购物车</text>
			<image src="/static/shoppingcart/搬快递.png" class="title-img"></image>
		</view>
		<!-- 标题栏 end -->
		<!-- 购物栏 start -->
		<view class="shopping-box">
			
			<!-- <text class="shopping-box-title">泡泡自营</text> -->
			<view class="wrap" v-for="item in orderlist" >
				<div class="content">
					<view class="checkbox-item">
						<checkbox-group class="block" @change="CheckboxChange">
							<checkbox class='round ' :class="checked?'checked' :' ' " :checked="checked"  value="A" ></checkbox>
						</checkbox-group>
					</view>
					
					<image :src="item.product_img" mode="scaleToFill" class="image"></image>
					<view class="goods-title">
						<text>{{ item.product_desc }}</text>
						
						<view class="wrap-bottom">
							<text style="color:rgb(229,28,35)">￥{{ priceInt(item.price)}} </text>
							<inputNumber></inputNumber>
								
						</view>
					</view>
				</div>	
			</view>
		
		</view>
		<!-- 购物栏 end -->
		<!-- 推荐栏 start -->
		<view class="recommend">
			<view class="recommend_top">
				<image src="/static/shoppingcart/recommend.png" class="top-img"></image>
				<text class="top-text">为你推荐</text>
			</view>
			<view class="recommend-card" >
				<view class="card" v-for="item in recommendList">
				    <image class="card-img" :src="item.img_src" mode="widthFix"></image>
					<text class="txt_describtion">{{item.text}}</text>
				    <view class="cuIcon-friendfavor ico-positon">
						{{item.username}}
						<view class="cuIcon-like ico-positon">
						{{item.star}}
						</view>
					</view>
				    <view class="card-bottm row">  
				        <view class="car-title-view row">  
				            <text class="card-title">{{item.title}}</text>  
				        </view>  
				        <view class="card-share-view"></view>  
				    </view>  
				</view>
			</view>
		</view>
		<!-- 推荐栏 end -->
		<!-- 结算栏 -->
		<view class="buttom">
			<view class="select-all">
				<view class="checkbox-all">
					<checkbox-group class="block" @change="CheckboxChange">
						<checkbox class='round ' :class="checked ? 'checked':'' " :checked="checked" value="A"></checkbox>
					</checkbox-group>
				</view>
				<text>全选</text>
			</view>
			
			<view class="desc">
				<text>不含运费</text>
				<text>合计:</text>
				<text>￥39.9</text>
			</view>
			<view class="btn" @click="calculateAllBtn">
				去结算
			</view>
		</view>
		<!-- 结算栏 -->
		<!-- 底部导航栏 start -->
		<bottombar :tIndex="3"></bottombar>
		<!-- 底部导航栏 end -->
		</scroll-view>
	</view>
</template>

<script>
	import bottombar from "../../components/bottombar.vue"
	import inputNumber from "../../components/input-number/input-number.vue"
	export default {
		data() {
			return {
				checked:false,
				orderlist:[
					{
						id:1,
						product_img:"/static/shoppingcart/摆件.png",
						product_desc:"ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架",
						price: '25.00',
						number: 2
					
					},
					{
						id:2,
						product_img:"/static/shoppingcart/摆件.png",
						product_desc:"ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架",
						price: '25.00',
						number: 1	
					},
					{
						id:3,
						product_img:"/static/shoppingcart/摆件.png",
						product_desc:"ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架",
						price: '25.00',
						number: 1	
					},
					{
						id:4,
						product_img:"/static/shoppingcart/摆件.png",
						product_desc:"ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架",
						price: '25.00',
						number: 1	
					},
					{
						id:5,
						product_img:"/static/shoppingcart/摆件.png",
						product_desc:"ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架",
						price: '25.00',
						number: 1	
					}
					
					
				],
				recommendList:[
					{
						
						img_num:4,
						img_src:"/static/shoppingcart/style4.jpg",
						text:"黑白色大理石",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w"
						
					},
					{
						
						img_num:4,
						img_src:"/static/shoppingcart/style4.jpg",
						text:"冷酷黑白色大理石",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w"
						
					},
					{
						
						img_num:4,
						img_src:"/static/shoppingcart/style4.jpg",
						text:"冷酷黑白色大理石",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w"
						
					},
					{
						
						img_num:4,
						img_src:"/static/shoppingcart/style4.jpg",
						text:"冷酷黑白色大理石",
						username:"你的泡泡er",
						headIcon:"",
						star:"1.0w"
						
					}
				]
			}
		},
		computed:{
			// 价格小数
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
			},
			
		},
		methods: {
			CheckboxChange(){
				if(this.checked){
					this.checked = false
				}else{
					this.checked = true
				}
				
			},
			// 总价
			totalPrice(item) {
				let price = 0;
				item.map(val => {
					price += parseFloat(val.price);
				});
				return price.toFixed(2);
			},
			// 总件数
			totalNum(item) {
				let num = 0;
				item.map(val => {
					num += val.number;
				});
				return num;
			},
			calculateAllBtn() {
				uni.redirectTo({
					url:""
				})
			}
			
			
					
			
		},
		components:{
			bottombar,
			inputNumber
		}
	}
</script>

<style>
@import url("shoppingcart.css");
</style>
