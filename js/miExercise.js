// 购物车
var cart = new Vue({
  el: "#shopping_cart",
  data: {
    cart: []
    // cart: [{ name: "小米手机",count:3}, { name: "小米手环",count:2}],
  },
})

// 轮播图
var main = new Vue({
  el: "#banner",
  data: {
    // 把图片的索引放到imgArr数组中 
    imgArr: ["./img/mib1.jpg", "./img/mib2.webp", "./img/mib3.webp", "./img/mib4.webp", "./img/mib5.webp"],
    index: 0,
    // 定义索引初始值为0（即开始时默认显示第一张图片）
  },
  methods: {
    //点击上一张时，索引值自减，当索引<0时，切换到最后一张 
    prev: function () {
      this.index--;
      if (this.index < 0) {
        this.index = this.imgArr.length - 1;
      };
    },
    //点击下一张时，索引值自增，当索引>数组长度时，切换到第一张 
    next: function () {
      this.index++;
      if (this.index > this.imgArr.length - 1) {
        this.index = 0;
      };
    },
  },
})

// topnav数据
const navList = new Vue({
  el: '#nav_list',
  data: {
    navList: ['小米手机', 'Redmi 红米', '电视', '笔记本', '家电', '路由器', '智能硬件']
  }
})

// 左侧导航数据
const leftMenu = new Vue({
  el: '#left_menu',
  data: {
    leftMenuArr: ['手机 电话卡', '电视 盒子', '笔记本 显示器', '家电 插线板', '出行 穿戴', '智能 路由器', '电源 配件', '健康 儿童', '耳机 音箱', '生活 箱包'],
  }
})

// 右侧导航栏
const right = new Vue({
  el: '#right',
  data: {
    right: [['glyphicon glyphicon-apple', '手机APP'],
    ['glyphicon glyphicon-user', '个人中心'],
    ['glyphicon glyphicon-wrench', '售后服务'],
    ['glyphicon glyphicon-headphones', '人工客服'],
    ['glyphicon glyphicon-shopping-cart', '购物车']]
  }
})

// shortcut数据
const shortCut = new Vue({
  el: '#shortcut',
  data: {
    scArr: [['小米秒杀', 'glyphicon glyphicon-time'],
    ['企业团购', 'glyphicon glyphicon-briefcase'],
    ['F码通道', 'glyphicon glyphicon-flash'],
    ['米粉卡', 'glyphicon glyphicon-floppy-disk'],
    ['以旧换新', 'glyphicon glyphicon-retweet'],
    ['话费充值', 'glyphicon glyphicon-yen']
    ],
  }
})
