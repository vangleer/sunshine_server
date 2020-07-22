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
// http:localhost:3000/imgs/source1.mp4
Random.extend({
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

Random.extend({
  colors2: function (date) {
    var constellations = [
      '#81ab25',
      '#ff9d24',
      '#6b4cd6',
      '#f53a35',
      '#24ff91',
      '#6337dd',
      '#d81dbf',
      '#9499f5',
      '#ecbea7',
      '#b5b9c2',
      '#dedede',
    ];
    return this.pick(constellations);
  },
});
Random.colors2();
Random.extend({
  videos: function (date) {
    var constellations = [
      'http://localhost:3000/videos/source1.mp4',
      'http://localhost:3000/videos/source2.mp4',
      'http://localhost:3000/videos/source3.mp4',
      'http://localhost:3000/videos/c1d378e0f4e7efdce19ecbd387cbe297',
      'http://localhost:3000/videos/f9b04969a35cb198153274a5db05dba5',
      'http://localhost:3000/videos/0b69a3c97e2321381b3e7f9191f28c8f',
      'http://localhost:3000/videos/8586a3a59784dbba0add440c1dc30827',
    ];
    return this.pick(constellations);
  },
});
Random.videos();
// 随机视频

/** =======================================发现数据============================================ */
// 搜索数据
router.get('/words', (req, res) => {
  const type = req.query.type;
  let data;
  if (type == 0) {
    data = Mock.mock({
      status: 1, // 设置返回status
      'data|100-200': [{
        // 设置返回status
        id: '@integer(1,3000)',
        word: '@sentence(1)',
      }, ],
    });
  } else if (type == 1) {
    data = Mock.mock({
      status: 1, // 设置返回status
      'data|100-200': [{
        // 设置返回status
        id: '@integer(1,3000)',
        word: '@sentence(1,4)',
      }, ],
    });
  } else {
    data = Mock.mock({
      status: 1, // 设置返回status
      'data|100-200': [{
        // 设置返回status
        id: '@integer(1,3000)',
        word: '@cname',
      }, ],
    });
  }
  res.send({
    status: 1,
    data: data,
  });
});

// 获取话题类型
router.get('/getTypes', (req, res) => {
  let data = [{
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
    'data|12-40': [{
      // 设置返回status
      id: '@integer(1,3000)',
      'name|4': '@cword',
      tag: '@cword(1)',
      color: '@colors',
      play_num: '@integer(1,5000)',
      num: '@integer(1,300)',
      collect: '@integer(1,2000)',
      love_num: '@integer(1,2000)',
    }, ],
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
    'data|12-40': [{
      // 设置返回status
      id: '@integer(1,3000)',
      'name|4-12': '@cword',
      tag: '@cword(1)',
      color: '@colors',
      play_num: '@integer(1,5000)',
      num: '@integer(1,300)',
      collect: '@integer(1,2000)',
      love_num: '@integer(1,2000)',
    }, ],
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
      'data|3-8': [{
        // 设置返回status
        id: '@integer(1,3000)',
        name: '@sentence(1)',
        tag: '@cword(1)',
        color: '@colors',
        play_num: '@integer(1,5000)',
        num: '@integer(1,300)',
        collect: '@integer(1,2000)',
        love_num: '@integer(1,2000)',
        interpret: '@cword(2,8)',
        symbol: '@word(2,6)',
      }, ],
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
      'data|3-8': [{
        // 设置返回status
        id: '@integer(1,3000)',
        name: '@sentence(1,3)',
        tag: '@cword(1)',
        color: '@colors',
        play_num: '@integer(1,5000)',
        num: '@integer(1,300)',
        collect: '@integer(1,2000)',
        love_num: '@integer(1,2000)',
        interpret: '@cword(2,8)',
        symbol: '@word(2,6)',
      }, ],
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
      name: '@cword(2,8)',
      words: '@sentence(2,10)',
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
    'data|3-10': [{
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
    }, ],
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
    'data|3-6': [{
      // 设置返回status
      id: '@integer(1,3000)',
      name: '@cname',
      love_num: '@integer(1,5000)',
      word: '@sentence(2,8)',
      'tip|': '#' + '@cword(2,8)',
      cover: '@covers',
      photo: '@photos',
    }, ],
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
    'data|3-10': [{
      // 设置返回status
      id: '@integer(1,3000)',
      tag: '@cword(1)',
      color: '@colors',
      name: '@cname',
      play_num: '@integer(1,5000)',
      'videos|1-8': ['@covers'],
      num: '@integer(1,300)',
      paragraph: '@paragraph(1,4)',
      collect: '@integer(1,2000)',
      love_num: '@integer(1,2000)',
      share_num: '@integer(1,2000)',
      comment_num: '@integer(1,2000)',
      isLove: '@boolean',
      isCollect: '@boolean',
      cover: '@covers',
      photo: '@photos',
    }, ],
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
    'data|3-12': [{
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
    }, ],
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
    'data|3-12': [{
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
    }, ],
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
    'data|3-8': [{
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
      'goals|4-10': [{
        cover: '@covers',
      }, ],
    }, ],
  });
  res.send({
    status: 1,
    data: data,
  });
});

/** =======================================个人信息============================================ */
// 目标与数据
router.get('/goalData', (req, res) => {
  let data = Mock.mock({
    status: 1, // 设置返回status
    data: {
      // 设置返回status
      id: '@integer(1,3000)',
      name: '@cname',
      day_time: '@integer(1,2000)',
      sum_time: '@integer(1000,5000)',
      level: '@cword(2,4)',
      hearing_num: '@integer(1,100)',
      spoke_num: '@integer(1,100)',

      topic: {
        num: '@integer(1,100)',
        title: '口语',
        color: '@colors',
      },
      words: {
        title: '词汇',
        num: '@integer(1,100)',
        color: '@colors',
      },
      phrase: {
        title: '短语',
        num: '@integer(1,100)',
        color: '@colors',
      },
    },
  });
  res.send({
    status: 1,
    data: data,
  });
});

// 难度调整
router.get('/adjustList', (req, res) => {
  let data = Mock.mock({
    status: 1, // 设置返回status
    data: [{
        // 设置返回status
        id: '@integer(1,3000)',
        easy: {
          title: '入门',
          'tags|1-4': [{
            tag: '@word(3,8)',
            color: '@colors',
          }, ],
          tips: ['@cword(8,20)', '@cword(8,20)', '@cword(8,20)'],
          down: ' 进行简单的日常对话',
          img: '@covers',
        },
      },
      {
        // 设置返回status
        id: '@integer(1,3000)',
        easy: {
          title: '简单',
          'tags|1-4': [{
            tag: '@word(3,8)',
            color: '@colors',
          }, ],
          tips: ['@cword(8,20)', '@cword(8,20)', '@cword(8,20)'],
          down: ' 进行日常对话,描述经历,表达简单的观点',
          img: '@covers',
        },
      },
      {
        // 设置返回status
        id: '@integer(1,3000)',
        easy: {
          title: '进阶',
          'tags|1-4': [{
            tag: '@word(3,8)',
            color: '@colors',
          }, ],
          tips: ['@cword(8,20)', '@cword(8,20)', '@cword(8,20)'],
          down: ' 进行日常对话,描述经历,表达简单的观点',
          img: '@covers',
        },
      },
      {
        // 设置返回status
        id: '@integer(1,3000)',
        easy: {
          title: '真实世界',
          'tags|1-4': [{
            tag: '@word(3,8)',
            color: '@colors',
          }, ],
          tips: ['@cword(8,20)', '@cword(8,20)', '@cword(8,20)'],
          down: ' 进行日常对话,描述经历,表达简单的观点',
          img: '@covers',
        },
      },
      {
        // 设置返回status
        id: '@integer(1,3000)',
        easy: {
          title: '精通',
          'tags|1-4': [{
            tag: '@word(3,8)',
            color: '@colors',
          }, ],
          tips: ['@cword(8,20)', '@cword(8,20)', '@cword(8,20)'],
          down: ' 进行日常对话,描述经历,表达简单的观点',
          img: '@covers',
        },
      },
    ],
  });
  res.send({
    status: 1,
    data: data,
  });
});

// 喜欢和收藏
router.get('/loveList', (req, res) => {
  let data = Mock.mock({
    status: 1, // 设置返回status
    'data|3-8': [{
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
      cover: '@covers',
    }, ],
  });
  res.send({
    status: 1,
    data: data,
  });
});

// 个人勋章
router.get('/', (req, res) => {
  let data = Mock.mock({
    status: 1, // 设置返回status
    data: {
      // 设置返回status
      id: '@integer(1,3000)',
      name: '@cname',
      Hear_num: '@integer(1,5000)',
      spoke_num: '@integer(1,5000)',
      model: '@integer(1,200)',
      'grow_model|3-20': [{
        id: '@integer(1,3000)',
        star: '@integer(0,3)',
        day: '@integer(10,200)',
        title: '@cword(2,6)',
        color: '@colors2',
      }, ],
      'level_model|3-20': [{
        id: '@integer(1,3000)',
        star: '@integer(0,3)',
        day: '@integer(10,200)',
        title: '@cword(2,6)',
        color: '@colors2',
      }, ],
    },
  });
  res.send({
    status: 1,
    data: data,
  });
});

// 我的积分
router.get('/integralData', (req, res) => {
  let data = Mock.mock({
    status: 1, // 设置返回status
    data: {
      // 设置返回status
      id: '@integer(1,3000)',
      name: '@cname',
      Hear_num: '@integer(1,5000)',
      sum: '@integer(1,5000)',
      day: '@integer(1,100)',
      'types|6-20': [{
        title: '@cword(2,12)',
        type: '@cword(2,12)',
        add: '@integer(1,100)',
      }, ],
    },
  });
  res.send({
    status: 1,
    data: data,
  });
});
// 获取动态
router.get('/getActiveList', (req, res) => {
  let data = Mock.mock({
    status: 1, // 设置返回status
    'data|5-12': [{
      // 设置返回status
      id: '@integer(1,3000)',
      name: '@cname',
      month: '@integer(1,12)',
      day: '@integer(1,30)',
      num: '@integer(1,3000)',
      daka_num: '@integer(1234567891,45649841154451)',
    }, ]
  });
  res.send({
    status: 1,
    data: data,
  });
});

// 随机获取一个视频
router.get('/getVideo', (req, res) => {
  let data = Mock.mock({
    status: 1, // 设置返回status
    'data': {
      // 设置返回status
      id: '@integer(1,3000)',
      name: '@cname',
      love_num: '@integer(1,5000)',
      word: '@sentence(3,8)',
      commentText: '',
      'tip|': '#' + '@cword(2,8)',
      cover: '@covers',
      photo: '@photos',
      video: '@videos',
      title: '@cword(2,8)',
      isLove: false,
      comment_num: '@integer(1,1000)',
      share_num: '@integer(1,1000)',
      add_time: '@time',
    },
  });
  res.send({
    status: 1,
    data: data,
  });
});

// 获取视频的评论
// 随机获取一个视频
router.get('/getVideoComments', (req, res) => {
  let data = Mock.mock({
    status: 1, // 设置返回status
    'data|1-8': [{
      // 设置返回status
      id: '@integer(1,3000)',
      nickname: '@cname',
      love_num: '@integer(1,500)',
      word: '@sentence(3,8)',
      txt: '@csentence(1,20)',
      icon: '@photos',
      title: '@cword(2,8)',
      isLove: false,
      comment_num: '@integer(1,1000)',
      share_num: '@integer(1,1000)',
      add_time: '@date(T)',
    }],
  });
  res.send({
    status: 1,
    data: data,
  });
});
module.exports = router;