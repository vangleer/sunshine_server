const express = require('express');
const router = express.Router();
const query = require('../db/index');
var multer = require('multer');
var upload = multer({
  dest: 'public/videos/'
});
// 服务器根路径
const baseUrl = 'http://localhost:3000/videos/';
// 获取视频
router.get('/getVideos', async (req, res) => {
  const list = await query(
    'select v.*,u.username,u.nickname,u.mobile from videos v left join user u on v.user_id=u.id'
  );
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

// 添加视频
router.post('/addVideo', upload.single('video'), async (req, res) => {
  if (!req.file) {
    res.send({
      status: 0,
      msg: '请上传文件'
    });
  }
  const {
    user_id,
    content,
    cate,
    description
  } = req.body;
  const url = baseUrl + req.file.filename;
  if (!user_id) return res.send({
    status: 0,
    msg: '请先登录!'
  });
  if (!content) return res.send({
    status: 0,
    msg: '请先输入视频内容!'
  });

  // 没有该用户添加
  const current = await query(
    `insert into videos(user_id,url,content,cate,description) values("${user_id}","${url}","${content}","${cate}","${description}")`
  );

  if (current) {
    return res.send({
      status: 1,
      msg: '添加成功'
    });
  } else {
    return res.send({
      status: 0,
      msg: '添加失败'
    });
  }
  // res.send({ status: 0, file: req.file, data: req.body });
});

// 点赞功能
router.post('/dianzhan', async (req, res) => {
  let id = req.query.id
  let love = req.body.love
  // 写入数据库
  const result = await query(
    `update videos set love_num="${love}" where id="${id}"`
  );
  if (result) {
    return res.send({
      status: 1,
      msg: '点赞成功!'
    })
  } else {
    return res.send({
      status: 0,
      msg: '点赞失败!'
    })
  }

});

module.exports = router;