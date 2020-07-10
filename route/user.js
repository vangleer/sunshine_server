const express = require('express')
const router = express.Router()
const query = require('../db/index')
// 获取所有的用户
router.get('/userList', async (req, res) => {
  const users = await query('select * from user')
  res.json(users)
})

// 获取所有的用户
router.post('/login', (req, res) => {
  const {
    username,
    password
  } = req.body

  res.send({
    username,
    password
  })
})

module.exports = router