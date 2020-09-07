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
        <view class="wrap" v-for="(item, index) in orderlist">
          <div class="content">
            <view class="checkbox-item">
              <checkbox-group class="block" @change="CheckboxChangeOne(index)">
                <checkbox
                  class="round "
                  :class="item.checked?'checked' :' ' "
                  :checked="checked"
                  value="A"
                ></checkbox>
              </checkbox-group>
            </view>

            <image
              :src="item.product_img"
              mode="scaleToFill"
              class="image"
            ></image>
            <view class="goods-title">
              <text>{{ item.product_desc }}</text>

              <view class="wrap-bottom">
                <text style="color:rgb(229,28,35)"
                  >￥{{ priceInt(item.price)}}
                </text>
                <view class="container">
                  <view class="sub" @click="clickItem(1, index)"> </view>
                  <view class="text-wrap">
                    <input
                      type="number"
                      v-model="item.number"
                      maxlength="3"
                      class="input"
                    />
                  </view>
                  <view class="add" @click="clickItem(2, index)"> </view>
                </view>
              </view>
            </view>
          </div>
        </view>
      </view>
      <!-- 购物栏 end -->
      <!-- 推荐栏 start -->
      <view class="recommend">
        <view class="recommend_top">
          <image
            src="/static/shoppingcart/recommend.png"
            class="top-img"
          ></image>
          <text class="top-text">为你推荐</text>
        </view>
        <view class="recommend-card">
          <view class="card" v-for="item in recommendList">
            <image class="card-img" :src="item.img_src" mode="widthFix"></image>
            <text class="txt_describtion">{{item.text}}</text>
            <view class="cuIcon-friendfavor ico-positon">
              {{item.username}}
              <view class="cuIcon-like ico-positon"> {{item.star}} </view>
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
              <checkbox
                class="round "
                :class="checked ? 'checked':'' "
                :checked="checked"
                value="A"
              ></checkbox>
            </checkbox-group>
          </view>
          <text>全选</text>
        </view>

        <view class="desc">
          <text>不含运费</text> <text>合计:</text> <text>￥{{total}}</text>
        </view>
        <view class="btn" @click="calculateAllBtn"> 去结算 </view>
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
			inputValue:1,
			checked:false,
			total: 0.00,
			orderlist:[
				{
					id:1,
					product_img:"/static/shoppingcart/摆件.png",
					product_desc:"ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架",
					price: '25.00',
					number: 1,
					checked: false
				},
				{
					id:2,
					product_img:"/static/shoppingcart/摆件.png",
					product_desc:"ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架",
					price: '25.00',
					number: 1,
					checked: false
				},
				{
					id:3,
					product_img:"/static/shoppingcart/摆件.png",
					product_desc:"ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架",
					price: '25.00',
					number: 1,
						checked: false
				},
				{
					id:4,
					product_img:"/static/shoppingcart/摆件.png",
					product_desc:"ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架",
					price: '25.00',
					number: 1	,
					checked: false
				},
				{
					id:5,
					product_img:"/static/shoppingcart/摆件.png",
					product_desc:"ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架",
					price: '25.00',
					number: 1	,
					checked: false
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
		clickItem(e, v){
			const orderList = this.orderlist
			if(e === 1){
				this.orderlist.forEach(vv =>{
					if (vv.id === v + 1) {
						if (vv.number > 1 ) {
							vv.number -= 1;
							let totalPrice = 0;
							orderList.forEach(v => {
								if (v.checked) {
									const price = Number(v.price);
									const number = v.number;
									const total = price * number;
									totalPrice += total;
								}
							})
							this.total = totalPrice;
						}
					}
				})
			}else{
				this.orderlist.forEach(vv =>{
					if (vv.id === v + 1) {
						vv.number = Number(vv.number) + 1;
														let totalPrice = 0;
							orderList.forEach(v => {
								if (v.checked) {
									const price = Number(v.price);
									const number = v.number;
									const total = price * number;
									totalPrice += total;
								}
							})
							this.total = totalPrice;
					}
				})
			}
		},
		CheckboxChange(){
			if(this.checked){
				this.checked = false
				this.orderlist.forEach(v => {
					v.checked = false
				})
				this.total = 0;
			}else{
				this.checked = true
				this.orderlist.forEach(v => {
					v.checked = true;
				})
				let total = 0;
				this.orderlist.forEach(v => {
					total += v.number * v.price
				})
				this.total = total
			} 
		},
		CheckboxChangeOne(index) {
			const id = index + 1;
			let orderList = this.orderlist;
			let totalPrice = 0;
			orderList.forEach((v) => {
				if (v.id === id) {
					v.checked = !v.checked;
				}
			})
			orderList.forEach(v => {
				if (v.checked) {
					const price = Number(v.price);
					const number = v.number;
					const total = price * number;
					totalPrice += total;
				}
			})
			this.total = totalPrice;
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
			localStorage.setItem("price", this.total)
			uni.redirectTo({
				url:"compute"
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
.container {
  display: flex;
  flex-direction: row;

  text-align: center;
  width: 150rpx;
  height: 45rpx;
  background-color: #fff;
  /* border: 1px solid #808080; */
  border-radius: 5rpx;
}
.container .add,
.sub {
  position: relative;
  left: 0;
  top: 0;
  background-color: #ffffff;

  /* width: 30px; */
  flex: 1;
}
.container .add::after,
.sub::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 1px;
  background-color: #666666;
}

.container .add::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40%;
  height: 1px;
  background-color: #666666;
  transform: translate(-50%, -50%) rotate(-90deg);
}
.text-wrap {
  flex: 1.6;

  background-color: rgb(248, 248, 248);
  /* border: 1px solid #808080; */

  display: flex;
  justify-content: center;
  align-items: center;
}
.text-wrap .input {
  color: #808080;

  font-size: 24rpx;
  /* line-height: 40rpx; */
}
</style>
