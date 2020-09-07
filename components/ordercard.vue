<template name="ordercard">
  <view>
    <!-- <view class="univarsal_flex">
			
		</view> -->
    <view class="ordercard" style="height: 360rpx;" v-for="res in dataList">
      <view class="ordercard_top">
        <image src="/static/myorder/smile.png" class="smile_img"
          ><text class="shop_name">泡泡自营</text></image
        >
        <view class="top">{{res.deal}}</view>
      </view>

      <view class="product_describtion">
        <view class="left"
          ><image :src="res.goodsUrl" class="left_img"></image
        ></view>
        <view class="right">
          <view class="product_desc">{{res.title}}</view>
          <view class="product_type">{{res.type}}</view>
          <view class="product_price"
            >￥ {{res.price}} <text class="product_num">x{{res.number}}</text>
          </view>
        </view>
      </view>
      <view class="bottom">
        <view class="btnlist">
          <view class="logistics btn">联系客服</view>
          <view class="exchange btn">加入购物车</view>
          <view class="evaluate btn select-item">退换</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
	props:{
		dataList:{
			typer:Array,
			default:() => [
				{
					id:3,
					shopname:"泡泡自营",
					deal:'交易成功',
					goodsUrl:'/static/style_image/style7.jpg',
					title:'ins大学生宿舍神器 铁挂篮书桌柜边置物架收纳架',
					type:'黑-L型上架+2铁栏',
					price:'29.9',
					number:1,
					btn1:"联系客服",
					btn2:"加入购物车",
					btn3:"退换"
					
				}
			]
	}
		
	},
	data() {
		return {
			
		};
	}
}
</script>

<style>
.univarsal_flex {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  font-weight: bold;
}
.left_img {
  width: 140rpx;
  height: 140rpx;
}
.smile_img {
  height: 50rpx;
  width: 50rpx;
  margin-left: 10rpx;
  margin-right: 20rpx;
}
.shop_name {
  font-weight: 700;
}
.ordercard {
  /* border: 2px solid rgb(254,215,26); */
  height: 300rpx;
  margin: 20rpx;
  border-radius: 100rpx;
}
.ordercard_top {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.top {
  display: flex;
  flex-direction: row-reverse;
  font-size: 15rpx;
  margin-left: 400rpx;
  margin-top: 10rpx;
  color: #a497c9;
}
.left {
  height: 200rpx;
  width: 200rpx;
  margin-left: 20rpx;
  position: relative;
}
.product_describtion {
  display: flex;
  flex-direction: row;
  margin: 20rpx;
}
.right {
  display: flex;
  flex-direction: column;
}
.product_desc {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  margin: 10rpx 15rpx;
}
.product_type {
  background-color: rgb(254, 215, 26);
  width: max-content;
  font-weight: 700;
  margin: 10rpx;
  padding: 5rpx 10rpx;
}
.product_price {
  font-size: medium;
  font-weight: 600;
  color: #a497c9;
  margin-left: 30rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.product_num {
  font-size: small;
  color: #808080;
  margin-left: 50rpx;
}
.bottom {
  margin-top: -50rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btnlist {
  width: 80%;
  display: flex;
  flex-direction: row;
  margin-top: 40rpx;
  padding: 0 10rpx;
  justify-content: space-between;
  align-items: center;
}
.btn {
  line-height: 52rpx;
  width: 160rpx;
  border-radius: 26rpx;
  border: 1rpx solid rgba(128, 128, 128, 0.5);
  font-size: 26rpx;
  text-align: center;
  color: rgba(128, 128, 128, 0.7);
}
</style>
