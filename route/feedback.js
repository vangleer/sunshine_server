const express = require('express');
const router = express.Router();
const query = require('../db/index');
var multer = require('multer');
var upload = multer({
  dest: 'public/imgs/',
});
// 服务器根路径
const baseUrl = 'http://localhost:3000/imgs/';
router.get('/test', (req, res) => {
  res.send('yes')
})
// 添加反馈
router.post('/addFeedback', upload.array('imgs', 6), async (req, res) => {
  const {
    user_id,
    content,
    type
  } = req.body;
  if (req.files.length <= 0) {
    res.send({
      status: 0,
      msg: '请上传文件',
    });
  }
  let url = ''
  req.files.forEach(item => {
    const src = baseUrl + item.filename
    url += src + ','
  })

  if (!user_id)
    return res.send({
      status: 0,
      msg: '请先登录!',
    });
  if (!content)
    return res.send({
      status: 0,
      msg: '请先输入视频内容!',
    });
  if (!type)
    return res.send({
      status: 0,
      msg: '请选择问题类型!',
    });
  // 没有该用户添加
  const current = await query(
    `insert into feedback(user_id,img,content,type) values("${user_id}","${url}","${content}","${type}")`
  );
  if (current) {
    return res.send({
      status: 1,
      msg: '添加成功',
    });
  } else {
    return res.send({
      status: 0,
      msg: '添加失败',
    });
  }
});

module.exports = router;