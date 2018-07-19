<template>
	<div>
		<div>
			<template>
				<div class="block">
					<el-date-picker v-model="dieTime" type="date" placeholder="选择日期">
					</el-date-picker>
				</div>
			</template>
			<!--<el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>-->
			<div v-if="overD >= 0">
				<ul>
					<li>{{overD}}天</li>
					<li>{{overH}}小时</li>
					<li>{{overM}}分钟</li>
					<li>{{overS}}秒钟</li>
				</ul>
			</div>
			<div v-else>
				<span>请选择去世日期</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				activeIndex: '1',
				curTime: 0,
				inter: 1,
				now: new Date(),
				dieTime: new Date('2000-0-0'),
			}
		},
		methods: {
			getCurTime() {
				var _this = this
				this.inter = setInterval(function() {
					 _this.now = new Date()
				}, 1000)
			},
			clearI() {
				clearInterval(this.inter)
			}
		},
		created() {
			this.getCurTime()
		},
		computed: {
			differ ()	{
				return this.dieTime.getTime() - this.now.getTime();
			},
			overD () {
				return parseInt(this.differ/(1000 * 60 * 60 * 24))
			},
			overH () {
				return parseInt(this.differ/(1000 * 60 * 60) - this.overD * 24)
			},
			overM () {
				return parseInt(this.differ/(1000 * 60) - this.overD * 24 * 60 - this.overH * 60)
			},
			overS () {
				return parseInt(this.differ/(1000) - this.overD * 24 * 60 * 60 - this.overH * 60 * 60 - this.overM * 60)
			}
		}
	}
</script>

<style scoped>

</style>
