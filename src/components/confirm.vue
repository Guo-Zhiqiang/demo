<template>
	<transition name='fadeConfirm'>
		<div class="coverAll" v-if="showConfirm"></div>
		<div class="confirm-box" v-if="showConfirm">
			<p class="head"><i class="el-icon-info"></i>提示</p>
			<hr />
			<p class="body" v-text="confirmMsg"></p>
			<hr />
			<el-button size='small' type="primary">确认</el-button>
			<el-button size='small'>取消</el-button>
		</div>
	</transition>
</template>

<script>
	export default {
		data ()	{
			return {
				showConfirm: true,
				confirmMsg: '这是一段提示信息这是一段提示信息'
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
	.confirm-box{
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
	}
	.confirm-box .head{
		margin: 15px 30px;
		font-size: 18px;
	}
	.confirm-box .head i{
		margin-right: 10px;
		font-size: 22px;
		vertical-align: bottom;
		color: #2c2;
	}
	.confirm-box .body{
		margin: 30px 30px;
		font-size: 14px;
		height: 30px;
	}
	.confirm-box .el-button{
		margin: 10px 0;
		float: right;
	}
	.confirm-box .el-button:first-of-type{
		margin: 10px 30px;
	}
</style>