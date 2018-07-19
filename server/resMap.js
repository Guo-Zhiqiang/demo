var resMap = {
  // 用户
  isNull: {
    errorCode: 10000,
    resultData: {
      message: '参数为空'
    }
  },
  isSuccess: {
    errorCode: 10001,
    resultData: {
      message: '上传成功'
    }
  },
  isError: {
    errorCode: 10002,
    resultData: {
      message: '参数错误'
    }
  }
}

module.exports = resMap;
