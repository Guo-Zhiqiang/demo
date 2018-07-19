<template>
	<div class="Alert">
		<div class="coverAll" v-if="showAlert"></div>
		<transition name='fadeAlert'>
			<div class="alert-box" v-if="showAlert">
				<p class="head"><i class="el-icon-info"></i>提示</p>
				<hr />
				<p class="body" v-text="alertMsg"></p>
				<hr />
				<el-button size='small' type="primary">确认</el-button>
				<el-button size='small'>取消</el-button>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		data ()	{
			return {
				showAlert: false,
				alertMsg: '这是一段提示信息这是一段提示信息'
			}
		}
	}
</script>

<style scoped>
	.coverAll{
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0,0,0,.5);
	}
	.alert-box{
		width: 400px;
		height: 200px;
		background-color: #fff;
		position: absolute;
		top: 20vh;
		left: 50vw;
		margin-left: -200px;
		border-radius: 3px;
		color: #555;
		font-family: helvetica;
		z-index: 100;
	}
	.alert-box .head{
		margin: 15px 30px;
		font-size: 18px;
	}
	.alert-box .head i{
		margin-right: 10px;
		font-size: 22px;
		vertical-align: bottom;
		color: #2c2;
	}
	.alert-box .body{
		margin: 30px 30px;
		font-size: 14px;
		height: 30px;
	}
	.alert-box .el-button{
		margin: 10px 0;
		float: right;
	}
	.alert-box .el-button:first-of-type{
		margin: 10px 30px;
	}
	.fadeAlert-enter-active, .fadeAlert-leave-active{
		transition: all .4s ease-out;
	}
	.fadeAlert-enter{
		transform: translateY(-300px);
	}
	.fadeAlert-leave-to{
		transform: translateY(-300px);
	}
</style>