const express = require('express');
const router = express.Router();
const Mock = require('mockjs')
const Random = Mock.Random
const query = require('../db/index');
Random.extend({
  colors: function (date) {
    var constellations = ['#81ab25', '#ff9d24', '#6b4cd6', '#f53a35', '#24ff91', '#6337dd', '#d81dbf']
    return this.pick(constellations)
  }
})
Random.colors()

// 搜索数据
router.get('/words', (req, res) => {
  const type = req.query.type
  let data
  if (type == 0) {
    data = Mock.mock({
      "status": 1, // 设置返回status 
      "data|100-200": [{ // 设置返回status 
        "id|+1": 1,
        "word": '@word'
      }]
    })
  } else if (type == 1) {
    data = Mock.mock({
      "status": 1, // 设置返回status 
      "data|100-200": [{ // 设置返回status 
        "id|+1": 1,
        "word": '@word'
      }]
    })
  } else {
    data = Mock.mock({
      "status": 1, // 设置返回status 
      "data|100-200": [{ // 设置返回status 
        "id|+1": 1,
        "word": '@cname'
      }]
    })
  }
  res.send({
    status: 1,
    data: data
  })
})

// 获取话题类型
router.get('/getTypes', (req, res) => {
  let data = [{
      id: 0,
      title: '生活',
      opt: ''
    },
    {
      id: 1,
      title: '文艺',
      opt: ''
    },
    {
      id: 2,
      title: '旅行',
      opt: ''
    },
    {
      id: 3,
      title: '职场',
      opt: ''
    },
    {
      id: 4,
      title: '时尚',
      opt: ''
    },
    {
      id: 5,
      title: '理财消费',
      opt: ''
    },
    {
      id: 6,
      title: '新知',
      opt: ''
    },
    {
      id: 7,
      title: '英语学习',
      opt: ''
    },
    {
      id: 8,
      title: '趣味',
      opt: ''
    }
  ]
  res.send({
    status: 1,
    data: data
  })
})

// 获取话题
router.get('/topic', (req, res) => {
  let data = Mock.mock({
    "status": 1, // 设置返回status 
    "data|12-40": [{ // 设置返回status 
      "id|+1": 1,
      "word|4": '@cword',
      color: '@colors'
    }]
  })
  res.send({
    status: 1,
    data: data
  })
})

// 入门数据
router.get('/introduction', (req, res) => {
  let data = Mock.mock({
    "status": 1, // 设置返回status 
    "data|12-40": [{ // 设置返回status 
      "id|+1": 1,
      "word|4-12": '@cword'
    }]
  })
  res.send({
    status: 1,
    data: data
  })
})

// 词汇数据97 122
router.get('/vocabulary', (req, res) => {
  let arr = []
  for (let i = 97; i <= 122; i++) {
    let start = String.fromCharCode(i)
    let data = Mock.mock({
      "status": 1, // 设置返回status 
      "data|3-8": [{ // 设置返回status 
        "id|+1": 1,
        "word|1": start + '@word'
      }]
    })
    arr.push({
      id: i,
      anchor: start.toUpperCase(),
      list: data.data
    })
  }

  res.send({
    status: 1,
    data: arr
  })
})

// 短语数据97 122
router.get('/phrase', (req, res) => {
  let arr = []
  for (let i = 97; i <= 122; i++) {
    let start = String.fromCharCode(i)
    let data = Mock.mock({
      "status": 1, // 设置返回status 
      "data|3-8": [{ // 设置返回status 
        "id|+1": 1,
        "word|1": start + '@word(10,20)'
      }]
    })
    arr.push({
      id: i,
      anchor: start.toUpperCase(),
      list: data.data
    })
  }

  res.send({
    status: 1,
    data: arr
  })
})

// 推荐练习
router.get('/romPractice', (req, res) => {
  let data = Mock.mock({
    "status": 1, // 设置返回status 
    "data|3-10": [{ // 设置返回status 
      "id|+1": 1,
      "tag": '@cword(1)',
      "color": '@colors',
      "name": '@cname',
      "play_num": '@integer(1,5000)',
      "videos": '@integer(1,8)',
      "num": '@integer(1,300)'
    }]
  })
  res.send({
    status: 1,
    data: data
  })
})

// 社区精选
router.get('/comSelect', (req, res) => {
  let data = Mock.mock({
    "status": 1, // 设置返回status 
    "data|3-6": [{ // 设置返回status 
      "id|+1": 1,
      "name": '@cname',
      "love_num": '@integer(1,5000)',
      "word": '@word(10,60)',
      "tip|1": '#' + '@cword(4,12)'
    }]
  })
  res.send({
    status: 1,
    data: data
  })
})

// 猜您喜欢
router.get('/youLike', (req, res) => {
  let data = Mock.mock({
    "status": 1, // 设置返回status 
    "data|3-10": [{ // 设置返回status 
      "id|+1": 1,
      "tag": '@cword(1)',
      "color": '@colors',
      "name": '@cname',
      "play_num": '@integer(1,5000)',
      "videos": '@integer(1,8)',
      "num": '@integer(1,300)',
      "paragraph": '@word(30,400)',
      "collect": '@integer(1,2000)',
      "love_num": '@integer(1,2000)',
      "share_num": '@integer(1,2000)',
      "comment_num": '@integer(1,2000)',
      isLove: '@boolean',
      isCollect: '@boolean'
    }]
  })
  res.send({
    status: 1,
    data: data
  })
})
module.exports = router;