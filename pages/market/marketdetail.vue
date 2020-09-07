<template>
  <view class="page-box">
    <!-- 搜索栏 start -->
    <view class="cu-bar search bg-mycolor position">
      <text
        class="cuIcon-back"
        style="margin-left: 20rpx;"
        @click="Toindex"
      ></text>
      <view class="search-form round">
        <text class="cuIcon-search"></text>
        <input
          @focus="InputFocus"
          @blur="InputBlur"
          :adjust-position="false"
          type="text"
          placeholder="搜索你的专属宿舍搭配"
          confirm-type="search"
        />
      </view>
      <view class="action"> <text class="cuIcon-moreandroid"></text> </view>
    </view>
    <!-- 搜索栏 end -->
    <view class="wrap">
      <HMfilterDropdown
        :menuTop="0"
        :filterData="filterData"
        :defaultSelected="defaultSelected"
        :updateMenuName="true"
        @confirm="confirm"
        dataFormat="Object"
      ></HMfilterDropdown>
      <!-- 占位 -->
      <view class="place"></view>
      <!-- 商品列表 -->
      <view class="goods-list">
        <view class="product-list">
          <view
            class="product"
            v-for="(goods) in goodsList"
            :key="goods.goods_id"
            @tap="toGoods(goods)"
          >
            <image mode="widthFix" :src="goods.img"></image>
            <view class="name">{{goods.name}}</view>
            <view class="info">
              <view class="price">{{goods.price}}</view>
              <view class="slogan">{{goods.slogan}}</view>
            </view>
          </view>
        </view>
        <view class="loading-text">{{loadingText}}</view>
      </view>
    </view>
  </view>
</template>

<script>
import HMfilterDropdown from '@/components/HM-filterDropdown/HM-filterDropdown.vue';
import data from '@/common/data.js';//筛选菜单数据
export default {
	components: {
		'HMfilterDropdown':HMfilterDropdown
	},
	data() {
		return {
			indexArr:'',
			valueArr:'',

			//商品数据
			goodsList:[
				{ goods_id: 0, img: '/static/market/商品ui/1/摆件.png', name: '摆件', price: '￥168', slogan:'1235人付款' },
				{ goods_id: 1, img: '/static/market/商品ui/1/摆件.png',name: '摆件', price: '￥168', slogan:'1235人付款' },
				{ goods_id: 2, img: '/static/market/商品ui/1/摆件.png', name: '摆件', price: '￥168', slogan:'1235人付款' },
				{ goods_id: 3, img: '/static/market/商品ui/1/摆件.png', name: '摆件', price: '￥168', slogan:'1235人付款' },
				{ goods_id: 4, img: '/static/market/商品ui/1/摆件.png', name: '摆件', price: '￥168', slogan:'1235人付款' },
				{ goods_id: 5, img: '/static/market/商品ui/1/摆件.png', name: '摆件', price: '￥168', slogan:'1235人付款' },
				{ goods_id: 6, img: '/static/market/商品ui/1/摆件.png', name: '摆件', price: '￥168', slogan:'1235人付款' },
				{ goods_id: 7, img: '/static/market/商品ui/1/摆件.png', name: '摆件', price: '￥168', slogan:'1235人付款' },
				{ goods_id: 8, img: '/static/market/商品ui/1/摆件.png', name: '摆件', price: '￥168', slogan:'1235人付款' },
				{ goods_id: 9, img: '/static/market/商品ui/1/摆件.png', name: '摆件', price: '￥168', slogan:'1235人付款' }
			],
			loadingText:"正在加载...",
			defaultSelected:[],
			filterData:[]
		};
	},
	filters: {
		　　outData(value) {
		　　　　return JSON.stringify(value);
		　　}
		},
		onLoad: function () {
			//定时器模拟ajax异步请求数据
			setTimeout(()=>{
				this.filterData = data; 
				//设置选中项
				// 一下的注释是针对测试数据说明结构的意思，具体传入什么数据，要看你自己数据。如果data.js数据有修改，注意defaultSelected也要修改
				//传入defaultSelected的结构不能错，错了就报错运行异常。 不想选中的请传入null
				// this.defaultSelected = [
				// 	[1,1,0],				//第0个菜单选中 一级菜单的第1项，二级菜单的第1项，三级菜单的第3项
				// 	[null,null],			//第1个菜单选中 都不选中
				// 	[1],					//第2个菜单选中 一级菜单的第1项
				// 	[[0],[1,2,7],[1,0]],	//筛选菜单选中 第一个筛选的第0项，第二个筛选的第1,2,7项，第三个筛选的第1,0项
				// 	[[0],[1],[1]]			//单选菜单选中 第一个筛选的第0项，第二个筛选的第1项，第三个筛选的第1项
				// ];
			},100);
	
			//模拟ajax请求子菜单数据。
			setTimeout(()=>{
				this.filterData[1].submenu[0].submenu = [{"name": "附近","value": "附近"},{"name": "1km","value": "1km"},{"name": "2km","value": "2km"},{"name": "3km","value": "3km"},{"name": "4km","value": "4km"},{"name": "5km","value": "5km"}];
			},1000)
		},
		methods:{
			//接收菜单结果
			confirm(e){
				this.indexArr = e.index;
				this.valueArr = e.value;
				
			},
			//修改选中项-示例
			changeSelected(){
				this.defaultSelected = [];
				this.$nextTick(()=>{
					this.defaultSelected = [
						[1,1,0],				//第0个菜单选中 一级菜单的第1项，二级菜单的第1项，三级菜单的第3项
						[null,null],			//第1个菜单选中 都不选中
						[1],					//第2个菜单选中 一级菜单的第1项
						[[0],[1,2,7],[1,0]],	//筛选菜单选中 第一个筛选的第0项，第二个筛选的第1,2,7项，第三个筛选的第1,0项
						[[0],[1],[1]]			//单选菜单选中 第一个筛选的第0项，第二个筛选的第1项，第三个筛选的第1项
					];
				})
			},
			//轮播图指示器
			swiperChange(event) {
				//this.currentSwiper = event.detail.current;
			},
		},
		//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		onReachBottom(){
			uni.showToast({title: '触发上拉加载'});
			let len = this.goodsList.length;
			if(len>=80){
				this.loadingText="到底了";
				return false;
			}else{
				this.loadingText="正在加载...";
			}
			let end_goods_id = this.goodsList[len-1].goods_id;
			for(let i=1;i<=10;i++){
				let goods_id = end_goods_id+i;
				let p = { goods_id: goods_id, img: '/static/img/goods/p'+(goods_id%10==0?10:goods_id%10)+'.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '￥168', slogan:'1235人付款' };
				this.goodsList.push(p);
			}
		},
	}
</script>

<style lang="scss">
@import url("marketdetail.css");
.place {
  background-color: #ffffff;
  height: 44px;
}
.swiper {
  width: 100%;
  margin-top: 10upx;
  display: flex;
  justify-content: center;
  .swiper-box {
    width: 92%;
    height: 230rpx;

    overflow: hidden;
    border-radius: 15rpx;
    box-shadow: 0upx 8upx 25rpx rgba(0, 0, 0, 0.2);
    //兼容ios，微信小程序
    position: relative;
    z-index: 1;
    swiper {
      width: 100%;
      height: 230rpx;
      swiper-item {
        image {
          width: 100%;
          height: 230rpx;
        }
      }
    }
    .indicator {
      position: absolute;
      bottom: 20upx;
      left: 20upx;
      background-color: rgba(255, 255, 255, 0.4);
      width: 150upx;
      height: 5upx;
      border-radius: 3upx;
      overflow: hidden;
      display: flex;
      .dots {
        width: 0upx;
        background-color: rgba(255, 255, 255, 1);
        transition: all 0.3s ease-out;
        &.on {
          width: (100%/3);
        }
      }
    }
  }
}
.goods-list {
  padding-top: 10px;
  .loading-text {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    color: #979797;
    font-size: 12px;
  }
  .product-list {
    width: 92%;
    position: relative;
    left: 4%;
    padding: 0 4% 3vw 4%;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .product {
      width: 48%;
      border-radius: 10px;
      background-color: #fff;
      margin: 0 0 7px 0;
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
      image {
        width: 100%;
        border-radius: 10px 10px 0 0;
      }
      .name {
        width: 92%;
        padding: 5px 4%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-align: justify;
        overflow: hidden;
        font-size: 15px;
      }
      .info {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 92%;
        padding: 5px 4% 5px 4%;
        .price {
          color: #e65339;
          font-size: 15px;
          font-weight: 600;
        }
        .slogan {
          color: #807c87;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
