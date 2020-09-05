<template>
	<view class="page-box">
		<!-- 搜索栏 start -->
		<view class="cu-bar search bg-mycolor">
			<text class="cuIcon-back" style="margin-left: 20rpx;" @click="Toindex"></text>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索你的专属宿舍搭配" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-mycolor round btn_txt">搜索</button>
			</view>
		</view>
		<!-- 搜索栏 end -->
		<view class="recent">
			<view class="rencent_title">最近搜索
				<text class="cuIcon-delete delete-position"></text>
			</view>
			<button class="cu-btn round btn_size btn_position">星空装扮</button>
			
		</view>
		<view class="recent">
			<view class="rencent_title">搜索发现
				
			</view>
			
			<view class="search_btn" >
				<button class="cu-btn round btn_size btn_position" style="color: red;">少女心</button>
				<button class="cu-btn round btn_size btn_position" >黄色</button>
				<button class="cu-btn round btn_size btn_position" >蓝色</button>
			</view>
			<view class="search_btn" >
				<button class="cu-btn round btn_size btn_position" >白色</button>
				<button class="cu-btn round btn_size btn_position" >黑白</button>
				<button class="cu-btn round btn_size btn_position" style="color: red;">搞笑</button>
				<button class="cu-btn round btn_size btn_position" >可爱</button>
			</view>
			<view class="search_btn" >
				<button class="cu-btn round btn_size btn_position" >科技感</button>
				<button class="cu-btn round btn_size btn_position" >涂鸦字母</button>
				<button class="cu-btn round btn_size btn_position" >ins风</button>
				<button class="cu-btn round btn_size btn_position" >耐脏</button>
			</view>
			
		</view>
		<view class="recent">
			<view class="rencent_title">常用分类
				
			</view>
			<view class="">
				<button class="cu-btn round2 btn_size2 btn_position" style="background-color: rgb(255,245,245);">粉色泡</button>
				<button class="cu-btn round2 btn_size2 btn_position" style="background-color: rgb(243,249,253);">蓝色泡</button>
				<button class="cu-btn round2 btn_size2 btn_position" style="background-color: rgb(243,249,253);">极简</button>
				<button class="cu-btn round2 btn_size2 btn_position" style="background-color: rgb(255,248,241);">个性</button>
				<button class="cu-btn round2 btn_size2 btn_position" style="background-color: rgb(255,247,254);" >红色泡</button>
				<button class="cu-btn round2 btn_size2 btn_position" style="background-color: rgb(244,251,243);">文艺</button>
				<button class="cu-btn round2 btn_size2 btn_position" style="background-color: rgb(243,249,253);">商务</button>
				<button class="cu-btn round2 btn_size2 btn_position" style="background-color: rgb(255,251,232);">黄色泡</button>
				<button class="cu-btn round2 btn_size2 btn_position" style="background-color: rgb(255,248,241);">国风</button>
			</view>
			
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				InputBottom: 0,
				recent_btnlist:[
					{
						name:'少女心',
						color:"pink",
						bgcolor:"rgb(240,240,240)",
					}]
					,
				search_list:[
					{
						name:'黄色',
						color:"",
						bgcolor:"rgb(240,240,240)",
					},
					{
						name:'蓝色',
						color:"",
						bgcolor:"rgb(240,240,240)",
					},
					{
						name:'白色',
						color:"",
						bgcolor:"rgb(240,240,240)",
					},
					{
						name:'黑白',
						color:"",
						bgcolor:"rgb(240,240,240)",
					},
					{
						name:'搞笑',
						color:"red",
						bgcolor:"rgb(240,240,240)",
					},
					{
						name:'可爱',
						color:"",
						bgcolor:"rgb(240,240,240)",
					},
					{
						name:'科技感',
						color:"",
						bgcolor:"rgb(240,240,240)",
					},
					{
						name:'涂鸦字母',
						color:"",
						bgcolor:"rgb(240,240,240)",
					},
					{
						name:'ins风',
						color:"",
						bgcolor:rgb(240,240,240),
					},
					{
						name:'耐脏',
						color:""
						
					},
				
				]	
				
			}
		},
		methods: {
			Toindex(){
				uni.redirectTo({
					url:"../home"
				})
			},
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			}
		}
	}
</script>

<style>
@import url("search.css");
</style>
