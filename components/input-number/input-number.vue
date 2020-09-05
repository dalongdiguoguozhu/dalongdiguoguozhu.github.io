<template>
	<view class="container">
		<view class="sub" @click="clickItem(1)">
			 
		</view>
		<view class="text-wrap">
			<input type="number" v-model="inputValue" maxlength="3" class="input" >
		</view>
		<view class="add" @click="clickItem(2)">
			 
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			minValue:{
				type:Number,
				default:1
			},
			maxValue:{
				type:Number,
				default:999
			},
			
			
		},
		data() {
			return {
				inputValue:1
			}
	
		},
		watch:{
			inputValue(newVal,oldVal){
				// console.log(newVal);
				if(newVal < this.minValue){
					this.inputValue = this.minValue
				}
				if(newVal > this.maxValue){
					this.inputValue = this.maxValue
				}
			}
		},
		methods:{
			clickItem(e){
				if(e === 1){
					this.inputValue --;
					
				}else{
					this.inputValue ++;
					
				}
				
				this.$emit('inputItem',this.inputValue)
			}
		}
	}
</script>

<style>
	.container{
		display: flex;
		flex-direction: row;
		 
		text-align: center;
		width: 150rpx;
		height: 45rpx;
		background-color: #fff;
		/* border: 1px solid #808080; */
		border-radius: 5rpx;
		
	}
	.container .add,.sub{
		position: relative;
		left: 0;
		top: 0;
		background-color: #FFFFFF;
		
		/* width: 30px; */
		flex: 1;
	}
	.container .add::after,.sub::after{
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		width: 40%;
		height: 1px;
		background-color: #666666;
	}
	
	.container .add::before{
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 40%;
		height: 1px;
		background-color: #666666;
		transform: translate(-50%,-50%) rotate(-90deg);
	}
	.text-wrap{
		flex: 1.6;
		
		background-color: rgb(248,248,248);
		/* border: 1px solid #808080; */
	
		 
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.text-wrap .input{
		
		color: #808080;
		
		font-size: 24rpx;
		/* line-height: 40rpx; */
		
 
	}

</style>
