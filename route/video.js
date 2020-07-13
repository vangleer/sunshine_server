const express = require('express');
const router = express.Router();
const query = require('../db/index');
var multer = require('multer');
var upload = multer({ dest: 'public/videos/' });
// 服务器根路径
const baseUrl = 'http://localhost:3000/videos/';
// 获取视频
router.get('/getVideos', async (req, res) => {
  const list = await query('select * from videos');
  if (list.length > 0) {
    res.send({
      status: 1,
      msg: '获取成功!',
      data: list,
    });
  } else {
    res.send({
      status: 0,
      msg: '暂无数据!',
    });
  }
});

/**
 * 
 *   "status": 0,
    "file": {
        "fieldname": "video",
        "originalname": "dance.mp4",
        "encoding": "7bit",
        "mimetype": "video/mp4",
        "destination": "public/videos/",
        "filename": "b159570948e244a27bd6a34880f8d74c",
        "path": "public\\videos\\b159570948e244a27bd6a34880f8d74c",
        "size": 10147264
    },
    "data": {
        "url": "http://localhost:3000"
    }
 */

// 添加视频
router.post('/addVideo', upload.single('video'), async (req, res) => {
  if (!req.file) {
    res.send({ status: 0, msg: '请上传文件' });
  }
  const { user_id, content, cate, description } = req.body;
  const url = baseUrl + req.file.filename;
  if (!user_id) return res.send({ status: 0, msg: '请先登录!' });
  if (!content) return res.send({ status: 0, msg: '请先输入视频内容!' });

  // 没有该用户添加
  const current = await query(
    `insert into videos(user_id,url,content,cate,description) values("${user_id}","${url}","${content}","${cate}","${description}")`
  );

  if (current) {
    return res.send({ status: 1, msg: '添加成功' });
  } else {
    return res.send({ status: 0, msg: '添加失败' });
  }
  // res.send({ status: 0, file: req.file, data: req.body });
});
// 登录功能
router.post('/login', async (req, res) => {
  const { mobile, password, code } = req.body;
  if (
    !/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(
      mobile
    )
  ) {
    return res.send({
      status: 0,
      msg: '手机号格式不正确!',
    });
  }

  if (code.toLowerCase() !== codeText) {
    return res.send({
      status: 0,
      msg: '验证码不正确!',
    });
  }

  if (!/^[a-zA-Z]\w{5,17}$/.test(password)) {
    return res.send({
      status: 0,
      msg: '密码格式以字母开头,长度在6~18之间!',
    });
  }
  const user = await query(
    `select username,mobile,password from user where mobile="${mobile}"`
  );
  // console.log()
  if (user.length > 0) {
    return res.send({
      status: 1,
      msg: '登录成功',
      data: user[0],
    });
  } else {
    return res.send({
      status: 0,
      msg: '账号密码错误',
    });
  }
});

// 根据手机号获取用户信息
router.get('/getUser', async (req, res) => {
  const { mobile } = req.query;
  const user = await query(`select * from user where mobile="${mobile}"`);
  if (user.length > 0) {
    return res.send({
      status: 1,
      msg: '获取成功',
      data: user[0],
    });
  } else {
    return res.send({
      status: 0,
      msg: '没有当前用户!',
    });
  }
});

module.exports = router;
