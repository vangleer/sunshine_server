const express = require('express');
const router = express.Router();
const query = require('../db/index');
const svgCaptcha = require('svg-captcha');
var multer = require('multer');
var upload = multer({
  dest: 'public/imgs/',
});
const baseUrl = 'http://localhost:3000/imgs/';
// 验证码配置文件;
var codeConfig = {
  size: 4, // 验证码长度
  ignoreChars: '0o1i', // 验证码字符中排除 0o1i
  noise: 2, // 干扰线条的数量
  height: 40,
  width: 200,
};
let codeText = '';
// 获取验证码
router.get('/getCode', (req, res) => {
  let captcha = svgCaptcha.create(codeConfig);
  codeText = captcha.text.toLowerCase();
  // codeText.
  console.log(codeText);
  res.type('svg');
  res.status(200).send(captcha.data);
});

// 注册功能
router.post('/register', async (req, res) => {
  const {
    mobile,
    password,
    code
  } = req.body;

  if (
    !/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(
      mobile
    )
  ) {
    return res.send({
      status: 0,
      msg: '手机号个格式正确!',
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
      msg: '密码长度在6~18之间!',
    });
  }
  const user = await query(
    `select username,mobile,password from user where mobile="${mobile}"`
  );
  // console.log()
  if (user.length > 0) {
    return res.send({
      status: 0,
      msg: '该用户已存在!',
    });
  }
  // 没有该用户添加
  const current = await query(
    `insert into user(username,mobile,password,add_time) values("${mobile}","${mobile}","${password}","${Date.now()}")`
  );
  if (current) {
    return res.send({
      status: 1,
      msg: '注册成功'
    });
  } else {
    return res.send({
      status: 0,
      msg: '注册失败'
    });
  }
});
// 登录功能
router.post('/login', async (req, res) => {
  const {
    mobile,
    password,
    code
  } = req.body;
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
      msg: '账号密码错误'
    });
  }
});

// 根据手机号获取用户信息
router.get('/getUser', async (req, res) => {
  const {
    mobile
  } = req.query;
  const user = await query(`select * from user where mobile="${mobile}"`);

  if (user) {
    return res.send({
      status: 1,
      msg: '获取成功',
      data: user[0],
    });
  } else {
    return res.send({
      status: 0,
      msg: '没有当前用户!'
    });
  }
});

// 修改用户
router.post('/editUser', async (req, res) => {
  let {
    user_id,
    nickname,
    gender,
    identity,
    birthday,
    city,
    signature
  } = req.body
  if (!user_id) {
    return res.send({
      status: 0,
      msg: '修改失败!'
    });
  }
  const user = await query(`update user set birthday="${birthday}",city="${city}",gender="${gender}",identity="${identity}",nickname="${nickname}",signature="${signature}" where id="${user_id}"`);
  if (user.length > 0) {
    return res.send({
      status: 1,
      msg: '修改成功'
    });
  } else {
    return res.send({
      status: 0,
      msg: '修改失败!'
    });
  }
});

// 添加头像
router.post('/addPhoto', upload.single('photo'), async (req, res) => {
  if (!req.file) {
    res.send({
      status: 0,
      msg: '请上传文件',
    });
  }
  const {
    user_id,
  } = req.body;
  const url = baseUrl + req.file.filename;
  if (!user_id)
    return res.send({
      status: 0,
      msg: '请先登录!',
    });

  // 没有该用户添加
  const current = await query(
    `update user set icon="${url}" where id="${user_id}"`
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
  // res.send({ status: 0, file: req.file, data: req.body });
});

module.exports = router;