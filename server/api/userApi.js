var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
var $res = require('../resMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();

//登录
router.post('/loginCheck', (req, res) => {
    var sql = $sql.user.select;
    var params = req.body;
    conn.query(sql, [params.username, params.pwd], function(err, rows) {
        if (err) {
          res.send('用户名或密码错误')
        }
        if (rows != '') {
      	  res.send($res.isSuccess);
        }
        if(rows == ''){
        	res.send($res.isError)
        }
    })
});

//获取课程表
router.get('/page1ShowCouTable', (req, res) => {
    var sql = $sql.page1.selectC;
    conn.query(sql, function(err, rows) {
        if (err) {
          console.log(err);
        }
        if (rows) {
      	  res.send(rows);
        }
    })
});

//添加一行
router.post('/page1AddRow', (req, res) => {
    var sql = $sql.page1.addOneC;
    var params = req.body;
    conn.query(sql, [params.lastIndex + 1], function(err, rows) {
        if (err) {
          console.log(err);
        }
        if (rows) {
      	  res.send('添加成功');
        }
    })
});

//删除一行
router.post('/page1DelRow', (req, res) => {
    var sql = $sql.page1.delOneC;
    var params = req.body;
    conn.query(sql, [params.lastIndex], function(err, rows) {
        if (err) {
          console.log(err);
        }
        if (rows) {
      	  res.send('添加成功');
        }
    })
});

//编辑数据
router.post('/page1UpdRow', (req, res) => {
    var sql1 = $sql.page1.delAllC;
    var sql2 = $sql.page1.insertC;
    var params = req.body.tableMsg;
    var newparams = [];
    for(var i=0; i<params.length; i++){
    	var newpa = [];
			for(k in params[i]){
				newpa.push(params[i][k])
			}
			newparams.push(newpa)
    }
    conn.query(sql1, [], function(err, rows) {
        if (err) {
          console.log(err);
        }
    })
		conn.query(sql2, [newparams], function(err, rows) {
      if (err) {
        console.log(err);
      }
      if (rows) {
    	  res.send('添加成功');
      }
    })
});

//note查看
router.post('/page1SelNoteOne', (req, res) => {
    var sql = $sql.page1.selectN;
    var params = req.body.noteIndex
    conn.query(sql, [params], function(err, rows) {
      if (err) {
        console.log(err);
      }
      if (rows) {
    	  res.send(rows);
      }
    })
});

//添加
router.post('/page1ConfirmEdit', (req, res) => {
    var sql1 = $sql.page1.insnoteN;
    var sql2 = $sql.page1.updnoteN;
    var sql3 = $sql.page1.selectN;
    var params = req.body
    conn.query(sql3, [params.noteIndex], function(err, rows) {
      if (err) {
        console.log(err);
      }
      if (rows.length == 0) {
      	conn.query(sql1, [params.noteIndex, params.title, params.content], function(err, rows) {
		      if (err) {
		        console.log(err);
		      }
		      if (rows) {
		    	  res.send('添加成功');
		      }
		    })
      }else{
      	conn.query(sql2, [params.title, params.content, params.noteIndex], function(err, rows) {
		      if (err) {
		        console.log(err);
		      }
		      if (rows) {
		    	  res.send('修改成功');
		      }
		    })
      }
    })
});

module.exports = router;
