// 导入express
const express = require('express');
// 导入path
const path = require('path');
// 导入cors
const cors = require('cors');
// 导入body-parser
const bodyParser = require('body-parser');
// 创建服务器
const app = express();
// user路由
const userRouter = require('./route/user')
// 视频路由
const videoRouter = require('./route/video')
// 反馈路由
const feedbackRouetr = require('./route/feedback')
// mock数据
const mockRouter = require('./route/myMock')
// 释放静态资源
app.use(express.static(path.join(__dirname, 'public')));
// 解决跨域问题
app.use(cors());
// 解决获取post请求获取参数的问题
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// 使用路由
app.use('/user', userRouter)
app.use('/video', videoRouter)
app.use('/mock', mockRouter)
app.use('/feedback', feedbackRouetr)

// 监听端口
app.listen(3000, () => {
  console.log('server is running at: http://localhost:3000');
});