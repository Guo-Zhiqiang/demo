<template>
	<div class="login">
		<div class="box">
			<h1>学生信息管理系统</h1>
			<form>
				<el-input placeholder="请输入用户名" v-model="username" clearable></el-input><br />
				<el-input type="password" placeholder="请输入密码" v-model="pwd" clearable></el-input><br />
	      <el-button type="primary" @click="addUser">登录</el-button>
	    </form>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      pwd: ''
    }
  },
  methods: {
    alertErr() {
      this.$message({
        showClose: true,
        message: '用户名或密码错误！',
        type: 'error'
      });
    },
    alertNull() {
      this.$message({
        showClose: true,
        message: '用户名或密码不能为空！',
        type: 'error'
      });
    },
    addUser() {
      var name = this.username;
      var pwd = this.pwd;
      if (name && pwd) {
        this.axios.post('/api/user/loginCheck', {
          username: name,
          pwd: pwd
        })
          .then(res => {
            if(res.data.errorCode === 10001){
              console.log(res)
              this.$router.push({path: '/index'});
            }else{
              this.alertErr()
            }
          })
          .catch(err => {
            console.log(err);
          })
      } else {
        this.alertNull()
      }
    }
  }
}
</script>

<style scoped>
.login{
	width: 100vw;
	height: 100vh;
	position: absolute;
	background: url(../assets/login_bg.jpg) no-repeat no-repeat;
	background-size: cover;
}
.box{
	width: 600px;
	height: 400px;
	text-align: center;
	position: absolute;
	left: 50%;
	top: 10%;
	margin-left: -300px;
	padding-top: 50px;
	border-radius: 10px;
	box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.1) inset;
	background-color: rgba(0,0,0,.6);
}
.box h1{
	margin-bottom: 80px;
	color: #fff;
	letter-spacing: 3px;
}
.box .el-input{
	width: 380px;
}
.box .el-input:last-of-type{
	margin: 20px 0px 20px;

}
</style>
