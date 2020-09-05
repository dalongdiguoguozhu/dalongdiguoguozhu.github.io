<template>
	<view class="page bg-white">
		<scroll-view scroll-y="true" style="height: 100%;width: 100%;">
			
		
		<!-- 标题栏 start -->
		<view class="title">
			<!-- <text class="cuIcon-back" style="color: #FFFFFF;" @click="back"></text> -->
			<text class="title-text">相关商品</text>
			<!-- <image src="/static/shoppingcart/搬快递.png" class="title-img"></image> -->
		</view>
		<!-- 标题栏 end -->
		<!-- 购物栏 start -->
		<view class="shopping-box">
			<view class="select-all">
				<view class="checkbox-all">
					<checkbox-group class="block" @change="CheckboxChange">
	
						<checkbox class='round ' :class="checked ? 'checked':'' " :checked="checked" value="A"></checkbox>
						<text class="shopping-box-title">泡泡自营</text>
					</checkbox-group>
					
				</view>
				
			</view>
			
			<view class="wrap" v-for="item in orderlist" >
				
					<div class="content" >
						<view class="checkbox-item">
							<checkbox-group class="block" @change="CheckboxChange">
								<checkbox class='round ' :class="checked?'checked' :' ' " :checked="checked"  value="A" ></checkbox>
							</checkbox-group>
						</view>
						
						<image :src="item.product_img" mode="scaleToFill" class="image"></image>
						<view class="goods-title"@click="show = true">
							<text>{{ item.product_desc }}</text>
							<view class="select-product">请选择商品属性</view>
							<view class="wrap-bottom">
								<text style="color:rgb(229,28,35)">￥{{ priceInt(item.price)}} </text>
					
									
							</view>
						</view>
						<inputNumber style="margin-top:150rpx;"></inputNumber>
					</div>	
				
				
			</view>
		
		</view>
		<!-- 弹窗 start -->
		
		<u-popup v-model="show" mode="center" border-radius="14" width="100%" height="80%" closeable="true" mask="false">
			<view class="popup-box">
				<view class="top">
					<image src="/static/shoppingcart/摆件.png" class="top-img"></image>
					<view class="top-text">
						<text class="price">￥ 25.00</text>
						<view class="text-desc">
							<text class="weight">重量:0.558kg</text>
							<text>编号:1000001092</text>
						</view>
					</view>
				</view>
				<view class="meddium">
					<text class="med-title">颜色分类</text>
					
					<view class="btn-list">
						
					</view>
					<view class="search_btn" >
						<button class="cu-btn round btn_size btn_position" >海军蓝0015</button>
						<button class="cu-btn round btn_size btn_position" >天空蓝0016</button>
						<button class="cu-btn round btn_size btn_position" >宝石蓝0017</button>
					</view>
					<view class="search_btn" >
						<button class="cu-btn round btn_size btn_position" style="width: 35%;">北欧蓝0018</button>
						<button class="cu-btn round btn_size btn_position" style="width: 50%;">晴空蓝0018</button>
					
					</view>
					<view class="search_btn" >
						
						<button class="cu-btn round btn_size btn_position" style="width:55%">浅翡蓝0019</button>
						<button class="cu-btn round btn_size btn_position select-item" style="width: 40%;">尼罗蓝0020</button>
					</view>
					<view class="search_btn" >
						<button class="cu-btn round btn_size btn_position" style="color: rgb(180,180,180);">孔雀蓝</button>
						<button class="cu-btn round btn_size btn_position" style="color: rgb(180,180,180);">灰蓝色</button>
						<button class="cu-btn round btn_size btn_position" style="color: rgb(180,180,180);">蓝黑色</button>
						
					</view>
				</view>
				<button type="default" class="confirm-btn">确认</button>
			</view>
		</u-popup>
		<!-- 弹窗 end-->
		<!-- 购物栏 end -->
		<!-- 推荐栏 start -->
		<!-- <view class="recommend">
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
		</view> -->
		<!-- 推荐栏 end -->
		<!-- 结算栏 -->
		<view class="buttom">
			
			
			<view class="desc">
				
				<text>合计:</text>
				<text>￥0</text>
			</view>
			<view class="btn-list">
				<view class="btn1" @click="calculateAllBtn">
					加入购物车
				</view>
				<view class="btn2" @click="calculateAllBtn">
					立即购买
				</view>
			</view>
			
		</view>
		<!-- 结算栏 -->
		<!-- 底部导航栏 start -->
		<!-- <bottombar :tIndex="3"></bottombar> -->
		<!-- 底部导航栏 end -->
		</scroll-view>
	</view>
	
	
</template>

<script>
	// import bottombar from "../../components/bottombar.vue"
	import inputNumber from "../../components/input-number/input-number.vue"
	export default {
		data() {
			return {
				show:false,
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
					},
					{
						id:6,
						product_img:"/static/shoppingcart/摆件.png",
						product_desc:"ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架",
						price: '25.00',
						number: 1	
					},
					{
						id:7,
						product_img:"/static/shoppingcart/摆件.png",
						product_desc:"ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架",
						price: '25.00',
						number: 1	
					},
					{
						id:8,
						product_img:"/static/shoppingcart/摆件.png",
						product_desc:"ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架",
						price: '25.00',
						number: 1	
					},
					{
						id:9,
						product_img:"/static/shoppingcart/摆件.png",
						product_desc:"ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架",
						price: '25.00',
						number: 1	
					},
					{
						id:10,
						product_img:"/static/shoppingcart/摆件.png",
						product_desc:"ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架",
						price: '25.00',
						number: 1	
					}
					
				],
				// recommendList:[
				// 	{
						
				// 		img_num:4,
				// 		img_src:"/static/shoppingcart/style4.jpg",
				// 		text:"黑白色大理石",
				// 		username:"你的泡泡er",
				// 		headIcon:"",
				// 		star:"1.0w"
						
				// 	},
				// 	{
						
				// 		img_num:4,
				// 		img_src:"/static/shoppingcart/style4.jpg",
				// 		text:"冷酷黑白色大理石",
				// 		username:"你的泡泡er",
				// 		headIcon:"",
				// 		star:"1.0w"
						
				// 	},
				// 	{
						
				// 		img_num:4,
				// 		img_src:"/static/shoppingcart/style4.jpg",
				// 		text:"冷酷黑白色大理石",
				// 		username:"你的泡泡er",
				// 		headIcon:"",
				// 		star:"1.0w"
						
				// 	},
				// 	{
						
				// 		img_num:4,
				// 		img_src:"/static/shoppingcart/style4.jpg",
				// 		text:"冷酷黑白色大理石",
				// 		username:"你的泡泡er",
				// 		headIcon:"",
				// 		star:"1.0w"
						
				// 	}
				// ]
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
			back(){
				uni.redirectTo({
					url:"productDisplay"
				})
			},
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
			
			inputNumber
		}
	}
</script>

<style>
	@import url("relativeProduct.css");
</style>
