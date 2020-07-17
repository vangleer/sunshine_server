const express = require('express');
const router = express.Router();
const Mock = require('mockjs');
const Random = Mock.Random;
const query = require('../db/index');
Random.extend({
  colors: function (date) {
    var constellations = [
      '#81ab25',
      '#ff9d24',
      '#6b4cd6',
      '#f53a35',
      '#24ff91',
      '#6337dd',
      '#d81dbf',
    ];
    return this.pick(constellations);
  },
});
Random.colors();
//localhost:3000/imgs/source1.mp4
http: Random.extend({
  covers: function (date) {
    var constellations = [
      'http://localhost:3000/imgs/user.jpg',
      'http://localhost:3000/imgs/lun1.jpeg',
      'http://localhost:3000/imgs/lun2.jpg',
      'http://localhost:3000/imgs/lun3.jpg',
      'http://localhost:3000/imgs/lun4.jpg',
      'http://localhost:3000/imgs/lun5.jpg',
      'http://localhost:3000/imgs/study1.jpg',
      'http://localhost:3000/imgs/user2.jpg',
      'http://localhost:3000/imgs/study3.png',
    ];
    return this.pick(constellations);
  },
});
Random.covers();

Random.extend({
  photos: function (date) {
    var constellations = [
      'http://localhost:3000/imgs/user.jpg',
      'http://localhost:3000/imgs/user2.jpg',
      'http://localhost:3000/imgs/lun1.jpeg',
      'http://localhost:3000/imgs/lun2.jpg',
    ];
    return this.pick(constellations);
  },
});
Random.photos();

/** =======================================发现数据============================================ */
// 搜索数据
router.get('/words', (req, res) => {
  const type = req.query.type;
  let data;
  if (type == 0) {
    data = Mock.mock({
      status: 1, // 设置返回status
      'data|100-200': [
        {
          // 设置返回status
          id: '@integer(1,3000)',
          word: '@word',
        },
      ],
    });
  } else if (type == 1) {
    data = Mock.mock({
      status: 1, // 设置返回status
      'data|100-200': [
        {
          // 设置返回status
          id: '@integer(1,3000)',
          word: '@word',
        },
      ],
    });
  } else {
    data = Mock.mock({
      status: 1, // 设置返回status
      'data|100-200': [
        {
          // 设置返回status
          id: '@integer(1,3000)',
          word: '@cname',
        },
      ],
    });
  }
  res.send({
    status: 1,
    data: data,
  });
});

// 获取话题类型
router.get('/getTypes', (req, res) => {
  let data = [
    {
      id: 0,
      title: '生活',
      opt: '',
    },
    {
      id: 1,
      title: '文艺',
      opt: '',
    },
    {
      id: 2,
      title: '旅行',
      opt: '',
    },
    {
      id: 3,
      title: '职场',
      opt: '',
    },
    {
      id: 4,
      title: '时尚',
      opt: '',
    },
    {
      id: 5,
      title: '理财消费',
      opt: '',
    },
    {
      id: 6,
      title: '新知',
      opt: '',
    },
    {
      id: 7,
      title: '英语学习',
      opt: '',
    },
    {
      id: 8,
      title: '趣味',
      opt: '',
    },
  ];
  res.send({
    status: 1,
    data: data,
  });
});

// 获取话题
router.get('/topic', (req, res) => {
  let data = Mock.mock({
    status: 1, // 设置返回status
    'data|12-40': [
      {
        // 设置返回status
        id: '@integer(1,3000)',
        'name|4': '@cword',
        tag: '@cword(1)',
        color: '@colors',
        play_num: '@integer(1,5000)',
        num: '@integer(1,300)',
        collect: '@integer(1,2000)',
        love_num: '@integer(1,2000)',
      },
    ],
  });
  res.send({
    status: 1,
    data: data,
  });
});

// 入门数据
router.get('/introduction', (req, res) => {
  let data = Mock.mock({
    status: 1, // 设置返回status
    'data|12-40': [
      {
        // 设置返回status
        id: '@integer(1,3000)',
        'name|4-12': '@cword',
        tag: '@cword(1)',
        color: '@colors',
        play_num: '@integer(1,5000)',
        num: '@integer(1,300)',
        collect: '@integer(1,2000)',
        love_num: '@integer(1,2000)',
      },
    ],
  });
  res.send({
    status: 1,
    data: data,
  });
});

// 词汇数据97 122
router.get('/vocabulary', (req, res) => {
  let arr = [];
  for (let i = 97; i <= 122; i++) {
    let start = String.fromCharCode(i);
    let data = Mock.mock({
      status: 1, // 设置返回status
      'data|3-8': [
        {
          // 设置返回status
          id: '@integer(1,3000)',
          name: '@word(1,8)',
          tag: '@cword(1)',
          color: '@colors',
          play_num: '@integer(1,5000)',
          num: '@integer(1,300)',
          collect: '@integer(1,2000)',
          love_num: '@integer(1,2000)',
          interpret: '@cword(2,8)',
          symbol: '@word(2,6)',
        },
      ],
    });
    arr.push({
      id: i,
      anchor: start.toUpperCase(),
      list: data.data,
    });
  }

  res.send({
    status: 1,
    data: arr,
  });
});

// 短语数据97 122
router.get('/phrase', (req, res) => {
  let arr = [];
  for (let i = 97; i <= 122; i++) {
    let start = String.fromCharCode(i);
    let data = Mock.mock({
      status: 1, // 设置返回status
      'data|3-8': [
        {
          // 设置返回status
          id: '@integer(1,3000)',
          name: '@word(4,20)',
          tag: '@cword(1)',
          color: '@colors',
          play_num: '@integer(1,5000)',
          num: '@integer(1,300)',
          collect: '@integer(1,2000)',
          love_num: '@integer(1,2000)',
          interpret: '@cword(2,8)',
          symbol: '@word(2,6)',
        },
      ],
    });
    arr.push({
      id: i,
      anchor: start.toUpperCase(),
      list: data.data,
    });
  }

  res.send({
    status: 1,
    data: arr,
  });
});

// 今日任务
router.get('/todayTask', (req, res) => {
  let data = Mock.mock({
    status: 1, // 设置返回status
    data: {
      // 设置返回status
      id: '@integer(1,3000)',
      name: '@word(6,60)',
      tag: '@cword(1)',
      color: '@colors',
      play_num: '@integer(1,5000)',
      num: '@integer(1,300)',
      'videos|1-8': ['@covers'],
      collect: '@integer(1,2000)',
      love_num: '@integer(1,2000)',
      isCollect: false,
    },
  });
  res.send({
    status: 1,
    data: data,
  });
});

// 推荐练习
router.get('/romPractice', (req, res) => {
  let data = Mock.mock({
    status: 1, // 设置返回status
    'data|3-10': [
      {
        // 设置返回status
        'id|+1': '@integer(1,3000)',
        tag: '@cword(1)',
        color: '@colors',
        name: '@cname',
        play_num: '@integer(1,5000)',
        'videos|1-8': ['@covers'],
        num: '@integer(1,300)',
        love_num: '@integer(1,2000)',
        share_num: '@integer(1,2000)',
        comment_num: '@integer(1,2000)',
        isLove: '@boolean',
        isCollect: false,
        cover: '@covers',
        photo: '@photos',
      },
    ],
  });
  res.send({
    status: 1,
    data: data,
  });
});

// 社区精选
router.get('/comSelect', (req, res) => {
  let data = Mock.mock({
    status: 1, // 设置返回status
    'data|3-6': [
      {
        // 设置返回status
        id: '@integer(1,3000)',
        name: '@cname',
        love_num: '@integer(1,5000)',
        word: '@word(10,60)',
        'tip|': '#' + '@cword(2,8)',
        cover: '@covers',
        photo: '@photos',
      },
    ],
  });
  res.send({
    status: 1,
    data: data,
  });
});

// 猜您喜欢
router.get('/youLike', (req, res) => {
  let data = Mock.mock({
    status: 1, // 设置返回status
    'data|3-10': [
      {
        // 设置返回status
        id: '@integer(1,3000)',
        tag: '@cword(1)',
        color: '@colors',
        name: '@cname',
        play_num: '@integer(1,5000)',
        'videos|1-8': ['@covers'],
        num: '@integer(1,300)',
        paragraph: '@word(30,400)',
        collect: '@integer(1,2000)',
        love_num: '@integer(1,2000)',
        share_num: '@integer(1,2000)',
        comment_num: '@integer(1,2000)',
        isLove: '@boolean',
        isCollect: '@boolean',
        cover: '@covers',
        photo: '@photos',
      },
    ],
  });
  res.send({
    status: 1,
    data: data,
  });
});

/** =======================================社区数据============================================ */
// 作品区
router.get('/workList', (req, res) => {
  let data = Mock.mock({
    status: 1, // 设置返回status
    'data|3-12': [
      {
        // 设置返回status
        id: '@integer(1,3000)',
        name: '@cname',
        love_num: '@integer(1,5000)',
        word: '@word(10,60)',
        'tip|': '#' + '@cword(2,8)',
        cover: '@covers',
        photo: '@photos',
        title: '@cword(2,8)',
        isLove: false,
        width: 100,
        height: '@integer(120,300)',
      },
    ],
  });
  res.send({
    status: 1,
    data: data,
  });
});

// 关注
router.get('/attentionList', (req, res) => {
  let data = Mock.mock({
    status: 1, // 设置返回status
    'data|3-12': [
      {
        // 设置返回status
        id: '@integer(1,3000)',
        name: '@cname',
        love_num: '@integer(1,5000)',
        word: '@word(10,60)',
        commentText: '',
        'tip|': '#' + '@cword(2,8)',
        cover: '@covers',
        photo: '@photos',
        title: '@cword(2,8)',
        isLove: false,
        comment_num: '@integer(1,1000)',
        add_time: '@integer(1,100)',
      },
    ],
  });
  res.send({
    status: 1,
    data: data,
  });
});

// 作品区
router.get('/tallyBookList', (req, res) => {
  let data = Mock.mock({
    status: 1, // 设置返回status
    'data|3-8': [
      {
        // 设置返回status
        id: '@integer(1,3000)',
        name: '@cname',
        love_num: '@integer(1,5000)',
        word: '@word(10,60)',
        'tip|': '#' + '@cword(2,8)',
        photo: '@photos',
        title: '@cword(2,8)',
        Hear_num: '@integer(1,5000)',
        spoke_num: '@integer(1,5000)',
        isLove: false,
        comment_num: '@integer(1,1000)',
        add_time: '@integer(1,100)',
        'goals|4-10': [
          {
            cover: '@covers',
          },
        ],
      },
    ],
  });
  res.send({
    status: 1,
    data: data,
  });
});
module.exports = router;
