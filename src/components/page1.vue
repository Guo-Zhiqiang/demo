<template>
	<div>
		<div class="table">
			<p>课程表</p>
			<table border="1" cellpadding="0" cellspacing="0">
				<thead>
					<tr>
						<th>课时</th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th><th>星期六</th><th>星期日</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item,index in tableData" :row=index+1>
						<td @click="getThis"><input type="text" :disabled="disable" v-model="item.couName"/></td>
						<td @click="getThis"><input type="text" :disabled="disable" v-model="item.mon"/></td>
						<td @click="getThis"><input type="text" :disabled="disable" v-model="item.tue"/></td>
						<td @click="getThis"><input type="text" :disabled="disable" v-model="item.web"/></td>
						<td @click="getThis"><input type="text" :disabled="disable" v-model="item.thu"/></td>
						<td @click="getThis"><input type="text" :disabled="disable" v-model="item.fri"/></td>
						<td @click="getThis"><input type="text" :disabled="disable" v-model="item.sat"/></td>
						<td @click="getThis"><input type="text" :disabled="disable" v-model="item.sun"/></td>
					</tr>
				</tbody>
			</table>
			<div class="btnBox">
			  <el-button type="warning" @click='addrow' size='small'>添加一行</el-button>
			  <el-button :type="btncolor" @click='contable' v-text:context='context' size='small'></el-button>
			  <el-button type="warning" @click='delrow' size='small'>删除一行</el-button>
			</div>
		</div>
		<div class="notes">
			<transition name="fadeNote">
				<div class="showNote" v-if="showNote" :class="{'opacity': isOpacity}">
					<input v-model="noteTitle" type="text"/>
					<textarea v-model="noteContent" rows="11" cols="33"></textarea>
					<div class="confirm" @click='confirmNote'>
						<div class="box1"></div>
						<div class="box2"></div>
						<div class="text">确认编辑</div>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	name: 'index',
  data () {
    return {
      tableData: [],
      row: 0,
      col: 0,
      showNote: false,
      showHeart: true,
      noteIndex: '',
      context: '编辑课程',
      btncolor: 'warning',
      isOpacity: false,
      disable: true,
      noteTitle: '无标题',
      noteContent: '无内容'
    }
  },
  methods: {
  	getThis (e) {
  		this.row = e.target.parentNode.parentNode.getAttribute("row")
  		this.cel = e.path[1].cellIndex
  		this.noteIndex = this.row + "-" + this.cel
  		this.showNote = !this.showNote
  		//note信息
  		this.axios.post('/api/user/page1SelNoteOne', {
        noteIndex : this.noteIndex
      })
      .then((response) => {
      	if(response.data.length){
      		this.noteTitle = response.data[0].titles;
      		this.noteContent = response.data[0].content;
      	}else{
      		this.noteTitle = '暂无标题'
      		this.noteContent = '暂无内容'
      	}
      })
      .catch((response) => {
      })
  	},
  	confirmNote ()	{
  		this.axios.post('/api/user/page1ConfirmEdit', {
        noteIndex : this.noteIndex,
        title: this.noteTitle,
        content: this.noteContent
      })
      .then((response) => {
      	if(response){
      		alert(response.data)
      	}
      })
      .catch((response) => {
      })
  	},
  	addrow () {
  		if (this.tableData.length >= 12) {
  			alert('课程表行数已到上限')
  		} else{
  			//添加一行
	  		this.axios.post('/api/user/page1AddRow', {
	        lastIndex: this.tableData.length
	      })
	      .then((response) => {
	      	if(response){
	      	}
	      }).catch((response) => {
	      })
	      //刷新数据
	      this.axios.get('/api/user/page1ShowCouTable')
		    .then((response) => {
		    	if(response){
		    		console.log(response.data)
		    		this.tableData = response.data
		    	}
		    }).catch((response) => {
		    })
  		}
  	},
  	delrow () {
  		//添加一行
  		this.axios.post('/api/user/page1DelRow', {
        lastIndex: this.tableData.length
      })
      .then((response) => {
      	if(response){
      	}
      }).catch((response) => {
      })
      //刷新数据
      this.axios.get('/api/user/page1ShowCouTable')
	    .then((response) => {
	    	if(response){
	    		this.tableData = response.data
	    	}
	    }).catch((response) => {
	    })
  	},
  	contable ()	{
  		if(this.context == '编辑课程'){
  			this.context = '确认编辑'
  			this.btncolor = 'primary'
  			this.disable = false
  			this.isOpacity = true
  		}else{
  			this.axios.post('/api/user/page1UpdRow', {
	        tableMsg: this.tableData
	      })
	      .then(res => {
	      	if(res.data == '添加成功'){
            this.context = '编辑课程'
            this.btncolor = 'warning'
            this.disable = true
            this.isOpacity = false
            this.showNote = false
	      	}
	      }).catch(err => {
	      })
  		}
  	},
  },
  created () {
		this.axios.get('/api/user/page1ShowCouTable')
    .then((response) => {
    	if(response){
    		this.tableData = response.data
    	}
    }).catch((response) => {
    })
  }
}
</script>

<style scoped>
	.table{
		background-color: transparent;
		cursor: pointer;
		display: inline-block;
		vertical-align: top;
	}
	.table p{
		width: 48vw;
		text-align: center;
		margin-bottom: 10px;
		font-size: 20px;
		color: #444;
	}
	.table table{
		color: #444;
		font: 14px "微软雅黑";
	}
	.table th, .table td{
		width: 6vw;
		height: 5vh;
		text-align: center;
	}
	.table td input{
		width: 6vw;
		height: 5vh;
		border: none;
		outline: medium;
		text-align: center;
		color: #555;
		font: 14px "微软雅黑";
		background-color: transparent;
	}
	.notes{
		display: inline-block;
		width: 25vw;
		height: 60vh;
		margin-left: 6.5vw;
		vertical-align: top;
	}
	.showNote{
		width: 100%;
		height: 500px;
		background: url(../assets/note_bg5.jpg) no-repeat;
		background-size: 100% 100%;
		position: relative;
	}
	.showNote input{
		background-color: transparent;
		border: none;
		color: #444;
		font-size: 24px;
		outline: medium;
		text-align: center;
		padding: 60px 45px 30px;
	}
	.showNote textarea{
		text-indent: 2em;
		overflow-x: hidden;
		line-height: 24px;
		border: none;
		background-color: transparent;
		color: #444;
		outline: medium;
		font-size: 18px;
		padding-left: 45px;
		resize: none;
	}
	.showNote .confirm{
		position: absolute;
		width: 140px;
		height: 40px;
		left: 50%;
		margin-left: -70px !important;
		bottom: 60px;
	}
	.confirm .box1, .confirm .box2{
		border-left: 30px solid transparent;
		border-right: 30px solid transparent;
		width: 80px;
		position: absolute;
	}
	.confirm .box1{
		border-bottom: 40px solid #482f20;
		border-top: 40px solid transparent;
		top: -40px;
		transition: all .2s ease;
	}
	.confirm .box2{
		border-bottom: 40px solid transparent;
		border-top: 40px solid #482f20;
		top: 0px;
		transition: all .2s ease;
	}
	.confirm:hover .box1{
		border-bottom: 40px solid #933;
	}
	.confirm:hover .box2{
		border-top: 40px solid #933;
	}
	.confirm .text{
		position: absolute;
		width: inherit;
		text-align: center;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		color: #fff;
	}
	.btnBox{
		margin-top: 3vh;
		text-align: right;
	}
	.btnBox .el-button:nth-of-type(2){
		margin: 0px 2vw;
	}
	.opacity{
		opacity: 0;
	}
	.fadeNote-enter-active{
		transition: all .5s ease-in-out;
	}
	.fadeNote-leave-active{
		transition: all .1s ease-in-out;
	}
	.fadeNote-enter, .fadeNote-leave-to{
		transform: translateY(100px);
		opacity: 0;
	}
</style>
