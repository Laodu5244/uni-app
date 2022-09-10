var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'express服务器已经启动'});
});

// 轮播图
router.get('/api/slide', (req, res)=> {
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Expose-Headers','*')
  res.send({
    "swipers":[
      {
        "id":1,
        "img":"http://m.itheima.com/images/slidead/mobile/20191213180241750x410.jpg"
      },        
      {
        "id":2,
        "img":"http://m.itheima.com/images/slidead/mobile/20190327135101750x410-%E4%BC%A0%E6%99%BA%E9%BB%91%E9%A9%AC%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%B9%BB%E7%81%AF.jpg"
      },
      {
        "id":3,
        "img":"http://m.itheima.com/images/slidead/mobile/20191210154717750-410.jpg"
      }
    ]
  })
})

// 热门列表
router.get('/api/hots', (req, res)=> {
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Expose-Headers','*')
  res.send({
    "hots":[
      {
        "id":1,
        "title":"华为（HUAWEI）荣耀6Plus 16G双4G版",
        "add_time":"2015-04-19T16:51:03.000Z",
        "zhaiyao":"荣耀6 Plus，该机型分为两款型号，分别为PE-",
        "click":0,
        "img_url":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a687e796bb4879cd0e93867177f800da.png?thumb=1&w=200&h=200&f=webp&q=90",
        "sell_price":2195,
        "market_price":2499,
        "stock_quantity":60
      },
      {
        "id":2,
        "title":"小米（HUAWEI）荣耀6Plus 16G双4G版",
        "add_time":"2015-04-19T16:51:03.000Z",
        "zhaiyao":"荣耀6 Plus，该机型分为两款型号，分别为PE-",
        "click":0,
        "img_url":"https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208101511_488638d8f8d5dbcf3b66cd82703ecfb9.png?thumb=1&w=200&h=200&f=webp&q=90",
        "sell_price":1895,
        "market_price":2099,
        "stock_quantity":60
      },
      {
        "id":3,"title":"苹果（HUAWEI）荣耀6Plus 16G双4G版",
        "add_time":"2015-04-19T16:51:03.000Z",
        "zhaiyao":"荣耀6 Plus，该机型分为两款型号，分别为PE-",
        "click":0,
        "img_url":"https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207011810_86ad513472d1423a3fdec8d7d5107038.png?thumb=1&w=200&h=200&f=webp&q=90",
        "sell_price":1395,
        "market_price":1799,
        "stock_quantity":60
      },
      {
        "id":4,"title":"oppo（HUAWEI）荣耀6Plus 16G双4G版",
        "add_time":"https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207012000_0b9df066c110f201154013ac373df1d9.png?thumb=1&w=200&h=200&f=webp&q=90",
        "zhaiyao":"荣耀6 Plus，该机型分为两款型号，分别为PE-",
        "click":0,
        "img_url":"https://img12.360buyimg.com/n1/s450x450_jfs/t1/218526/31/2213/75125/617a596eE902f46dd/e9b2039cf6cec751.jpg.avif",
        "sell_price":2435,
        "market_price":2789,
        "stock_quantity":60
      },
      {
        "id":5,"title":"黑莓（HUAWEI）荣耀6Plus 16G双4G版",
        "add_time":"2015-04-19T16:51:03.000Z",
        "zhaiyao":"荣耀6 Plus，该机型分为两款型号，分别为PE-",
        "click":0,
        "img_url":"https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202207012022_19bbddb6b35c3828f8b53f450c1519a3.png?thumb=1&w=200&h=200&f=webp&q=90",
        "sell_price":5195,
        "market_price":6499,
        "stock_quantity":60
      },
      {
        "id":6,"title":"vivo（HUAWEI）荣耀6Plus 16G双4G版",
        "zhaiyao":"荣耀6 Plus，该机型分为两款型号，分别为PE-",
        "click":0,
        "img_url":"https://img10.360buyimg.com/n7/jfs/t1/205477/24/25374/105602/62ea8873Ee9e0eb02/688a014ea6e18612.jpg.avif",
        "sell_price":1195,
        "market_price":4499,
        "stock_quantity":60
      },
      {
        "id":7,"title":"安卓（HUAWEI）荣耀6Plus 16G双4G版",
        "add_time":"2015-04-19T16:51:03.000Z",
        "zhaiyao":"荣耀6 Plus，该机型分为两款型号，分别为PE-",
        "click":0,
        "img_url":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/211bb83776a8e0c8358732c3f3aa2864.png?thumb=1&w=200&h=200&f=webp&q=90",
        "sell_price":2795,
        "market_price":2299,
        "stock_quantity":60
      },
      {
        "id":8,"title":"ios（HUAWEI）荣耀6Plus 16G双4G版",
        "add_time":"2015-04-19T16:51:03.000Z",
        "zhaiyao":"荣耀6 Plus，该机型分为两款型号，分别为PE-",
        "click":0,
        "img_url":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ed0541d2337dc4fff6e52c2b7f162fe5.jpg?thumb=1&w=200&h=200&f=webp&q=90",
        "sell_price":5053,
        "market_price":6549,
        "stock_quantity":60
      }
    ]
  })
})

// 社区图片
router.get('/api/pictures', (req, res)=> {
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Expose-Headers','*')
  res.send({
    "pictures":[
      {
        "title":"家居生活",
        "id":0,
        "url":"https://img1.baidu.com/it/u=1764125183,1536301141&fm=253&fmt=auto&app=138&f=JPEG?w=754&h=500",
        "detale":"欧式风格继承了巴洛克风格中豪华、动感、多变的视觉效果"
      },
      {
        "title":"摄影设计",
        "id":1,
        "url":"https://img1.baidu.com/it/u=1817913525,40126509&fm=253&fmt=auto&app=138&f=JPEG?w=576&h=500",
        "detale":"建筑空间 | 公共空间设计"
      },
      {
        "title":"明星美女",
        "id":2,
        "url":"https://img2.baidu.com/it/u=4014142651,1497434694&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
        "detale":"清新迷人美女魅力清纯写真"
      },
      {
        "title":"空间设计",
        "id":3,
        "url":"https://img0.baidu.com/it/u=2932602061,517956172&fm=253&fmt=auto&app=138&f=PNG?w=500&h=333",
        "detale":"商业空间设计案例，高端网红商业空间"
      },
      {
        "title":"户型装饰",
        "id":4,
        "url":"https://img2.baidu.com/it/u=372210523,2430376062&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=401",
        "detale":"欧式风格继承了巴洛克风格中豪华、动感、多变的视觉效果"
      },
      {
        "title":"广告摄影",
        "id":5,
        "url":"https://img0.baidu.com/it/u=3515477066,3319203147&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=426",
        "detale":"形象广告片拍摄专业影视制作团队"
      },
      {
        "title":"摄影学习",
        "id":6,
        "url":"https://img0.baidu.com/it/u=1117480260,2571911044&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=571",
        "detale":"世界10大最著名商品广告摄影师作品赏析"
      },
      {
        "title":"摄影器材",
        "id":7,
        "url":"https://img2.baidu.com/it/u=3511456782,3685832522&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=407",
        "detale":"青豆广告商业摄影vs眼睛广告摄影"
      },
      {
        "title":"明星写真",
        "id":8,
        "url":"https://img0.baidu.com/it/u=1030763454,2233557802&fm=253&fmt=auto&app=120&f=JPEG?w=559&h=500",
        "detale":"刘亦菲海报写真美女神明星宿舍壁纸寝室装饰画卧室挂画芯白纸酒吧"
      },
      {
        "title":"清纯甜美",
        "id":9,
        "url":"https://img1.baidu.com/it/u=1203852704,1902864000&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
        "detale":"angelababy暗黑风高清桌面壁纸-大陆明星-壁纸下载-美桌网"
      },
      {
        "title":"古典美女",
        "id":10,
        "url":"https://img1.baidu.com/it/u=1491488703,577934765&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=692",
        "detale":"近年来中国最美女明星评选如果给你选择你会选择谁呢"
      },
      {
        "title":"书籍推荐",
        "id":11,
        "url":"https://img1.baidu.com/it/u=2892815924,4215300856&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=334",
        "detale":"cafa·young媒 | 书籍推荐(4月上)"
      },
      {
        "title":"音乐艺术",
        "id":12,
        "url":"https://img1.baidu.com/it/u=3871218720,4086717364&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=443",
        "detale":"原创蓝色创意音乐主题背景展板海报设计版权可商用"
      },
      {
        "title":"美术鉴赏",
        "id":13,
        "url":"https://img1.baidu.com/it/u=3205410867,1029406628&fm=253&fmt=auto&app=120&f=JPEG?w=650&h=490",
        "detale":"智慧宝贝绘画馆少儿美术作品"
      },
      {
        "title":"旅游出行",
        "id":14,
        "url":"https://img2.baidu.com/it/u=1216369833,158469673&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
        "detale":"浙江乌镇图片大全111"
      },
      {
        "title":"热门景点",
        "id":15,
        "url":"https://img0.baidu.com/it/u=3825190529,2197777217&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
        "detale":"凤凰古城旅游风景桌面壁纸"
      }
    ]
  })
})
// "add_time":"2015-04-12T03:50:28.000Z",
// 资讯列表
router.get('/api/news', (req, res)=> {
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Expose-Headers','*')
  res.send({
    "news":[
      {
        "title":"家居生活",
        "id":0,
        "add_time":"2015-04-12T03:50:28.000Z",
        "url":"https://img1.baidu.com/it/u=1764125183,1536301141&fm=253&fmt=auto&app=138&f=JPEG?w=754&h=500",
        "detale":"欧式风格继承了巴洛克风格中豪华、动感、多变的视觉效果"
      },
      {
        "title":"摄影设计",
        "id":1,
        "add_time":"2017-04-12T03:50:28.000Z",
        "url":"https://img1.baidu.com/it/u=1817913525,40126509&fm=253&fmt=auto&app=138&f=JPEG?w=576&h=500",
        "detale":"建筑空间 | 公共空间设计"
      },
      {
        "title":"明星美女",
        "id":2,
        "add_time":"2022-05-12T03:50:28.000Z",
        "url":"https://img2.baidu.com/it/u=4014142651,1497434694&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
        "detale":"清新迷人美女魅力清纯写真"
      },
      {
        "title":"空间设计",
        "id":3,
        "add_time":"2022-02-04T03:50:28.000Z",
        "url":"https://img0.baidu.com/it/u=2932602061,517956172&fm=253&fmt=auto&app=138&f=PNG?w=500&h=333",
        "detale":"商业空间设计案例，高端网红商业空间"
      },
      {
        "title":"户型装饰",
        "id":4,
        "add_time":"2021-03-04T03:50:28.000Z",
        "url":"https://img2.baidu.com/it/u=372210523,2430376062&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=401",
        "detale":"欧式风格继承了巴洛克风格中豪华、动感、多变的视觉效果"
      },
      {
        "title":"广告摄影",
        "id":5,
        "add_time":"2018-07-04T03:50:28.000Z",
        "url":"https://img0.baidu.com/it/u=3515477066,3319203147&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=426",
        "detale":"形象广告片拍摄专业影视制作团队"
      },
      {
        "title":"摄影学习",
        "id":6,
        "add_time":"2009-11-04T03:50:28.000Z",
        "url":"https://img0.baidu.com/it/u=1117480260,2571911044&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=571",
        "detale":"世界10大最著名商品广告摄影师作品赏析"
      },
      {
        "title":"摄影器材",
        "id":7,
        "add_time":"2020-07-06T03:50:28.000Z",
        "url":"https://img2.baidu.com/it/u=3511456782,3685832522&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=407",
        "detale":"青豆广告商业摄影vs眼睛广告摄影"
      },
      {
        "title":"明星写真",
        "id":8,
        "add_time":"2019-10-04T03:50:28.000Z",
        "url":"https://img0.baidu.com/it/u=1030763454,2233557802&fm=253&fmt=auto&app=120&f=JPEG?w=559&h=500",
        "detale":"刘亦菲海报写真美女神明星宿舍壁纸寝室装饰画卧室挂画芯白纸酒吧"
      },
      {
        "title":"清纯甜美",
        "id":9,
        "add_time":"2021-06-04T03:50:28.000Z",
        "url":"https://img1.baidu.com/it/u=1203852704,1902864000&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
        "detale":"angelababy暗黑风高清桌面壁纸-大陆明星-壁纸下载-美桌网"
      },
      {
        "title":"古典美女",
        "id":10,
        "add_time":"2022-02-04T03:50:28.000Z",
        "url":"https://img1.baidu.com/it/u=1491488703,577934765&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=692",
        "detale":"近年来中国最美女明星评选如果给你选择你会选择谁呢"
      },
      {
        "title":"书籍推荐",
        "id":11,
        "add_time":"2021-01-25T03:50:28.000Z",
        "url":"https://img1.baidu.com/it/u=2892815924,4215300856&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=334",
        "detale":"cafa·young媒 | 书籍推荐(4月上)"
      },
      {
        "title":"音乐艺术",
        "id":12,
        "add_time":"2021-09-25T03:50:28.000Z",
        "url":"https://img1.baidu.com/it/u=3871218720,4086717364&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=443",
        "detale":"原创蓝色创意音乐主题背景展板海报设计版权可商用"
      },
      {
        "title":"美术鉴赏",
        "id":13,
        "add_time":"2021-01-25T03:50:28.000Z",
        "url":"https://img1.baidu.com/it/u=3205410867,1029406628&fm=253&fmt=auto&app=120&f=JPEG?w=650&h=490",
        "detale":"智慧宝贝绘画馆少儿美术作品"
      },
      {
        "title":"旅游出行",
        "id":14,
        "add_time":"2020-08-25T03:50:28.000Z",
        "url":"https://img2.baidu.com/it/u=1216369833,158469673&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
        "detale":"浙江乌镇图片大全111"
      },
      {
        "title":"热门景点",
        "id":15,
        "add_time":"2020-12-07T03:50:28.000Z",
        "url":"https://img0.baidu.com/it/u=3825190529,2197777217&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
        "detale":"凤凰古城旅游风景桌面壁纸"
      }
    ],
    "text":"<p>\r\n\t房企一季度销售业绩已经陆续公布，克而瑞研究中心统计数据显示，今年一季度，TOP20的房企仅6家实现业绩同比增长。\r\n</p>\r\n<p>\r\n\t<b>多家企业销售下滑</b> \r\n</p>\r\n<p>\r\n\t记者了解到，虽然恒大、融创一季度交出了不错的答卷，但是，万科等排名靠前的房企均出现销售下滑。其中万科公布前三个月销售金额为460.6亿元，同比去年的542.3亿元减少15%，而碧桂园公布，截至2015年3月31日止三个月，集团共实现合同销售金额约177.3亿元，同比下跌44.32%。\r\n</p>\r\n<p>\r\n\t<b>此外，一季度多家企业的利润跌幅超过50%。数据显示，万科预计2015年1月至3月归属于上市公司股东的净利润为6亿~7亿元，比上年同期下降54%至61%。</b> \r\n</p>\r\n<p>\r\n\t<b>趋势</b> \r\n</p>\r\n<p>\r\n\t<b>地价占比上升及去库存压力下&nbsp;房企利润回归</b> \r\n</p>\r\n<p>\r\n\t中原地产首席分析师张大伟称，一季度房企销售及利润普遍下滑，主要是因为企业销售节奏的变化，“大部分企业在2013年完成情况非常好，预留了大量签约结转到2014年。但2014年整体企业完成情况较差，大部分企业反而透支了2015年年初的签约，导致2015年签约不尽如人意。”\r\n</p>\r\n<p>\r\n\t同时，张大伟表示，大多数城市住房供大于求，价格过高，未来增值不确定，已经不再是最佳投资选择，因此房地产投资需求也出现显著回落。\r\n</p>\r\n<p>\r\n\t而易居房地产研究院研究员严跃进则表示，一季度部分房企还是坚持降价促销的策略，对此出现利润下滑也是符合预期的。随着地价占房价比例越来越高，开发商利润空间不断被挤压。同时，很多房企目前的营销费用还是比较大的，也会损耗房企利润。\r\n</p>\r\n<p>\r\n\t此外，严跃进说，从长期看，地价占比上升与去库存压力将成为长期趋势，房企已告别高利润时代，回归正常利润成为趋势。\r\n</p>\r\n<p>\r\n\t不过，张大伟认为，3月下半月市场告别签约淡季。部分城市出现小阳春现象，预计整体市场的走势将会继续向好，后续改善型需求的入市量将会有所增加。\r\n</p>\r\n<p>\r\n\t<b>分析：</b> \r\n</p>\r\n<p>\r\n\t<b>房企打响去库存促销战</b> \r\n</p>\r\n<p>\r\n\t“对于房地产市场来说，出现退房的原因有两种：1.收房的时候质量差。2.房价下调。无理由退房对于中国90%成交是期房的房地产市场现状来说，这的确是解决了购房者对房屋质量的担忧。”中原地产首席分析师张大伟对记者表示，后续预计也会有更多企业学习借鉴。\r\n</p>\r\n<p>\r\n\t而亚太城市房地产研究院院长谢逸枫则表示，恒大2015年率先打出全国项目“无理由退房”计划第一枪，意味正式打响房企主动去库存的促销战。\r\n</p>\r\n<p>\r\n\t“承诺无理由退房，意味着开发商承担更多的风险，在资金方面承受更大压力，后续肯定会有企业跟风。”知名地产评论人赵卓文表示。\r\n</p>\r\n<p>\r\n\t因此，有业内人士认为，无理由退房可能加速市场优胜劣汰。夏海钧回应称，中国房地产市场高峰时有五六万家房地产开发企业，现在还有两三万家。市场竞争、行业洗牌再洗掉两万多家，剩几百几千家很正常，“到那时行业整体素质会更高”。\r\n</p>\r\n<p>\r\n\t“在目前这个市场周期，恒大提出无理由退房，也的确更多是为了去库存营销的努力，从营销上看，对增加成交量肯定有帮助。”张大伟表示。\r\n</p>\r\n<p>\r\n\t“常规的降价促销已经无法触及购房者的神经，房企必须使出浑身解数吸引购房者。另一方面是购房者对价格敏感性在减弱，对降价没有之前那么敏感，购房者普遍存在买涨不买跌，无理由退房主要是打消购房者对房价不断下降的顾虑。目的在于制造市场 上涨 预期，引导购房者对后市乐观的态度。”谢逸枫认为。\r\n</p>\r\n<p>\r\n\t也有部分业内人士对“无理由退房”的操作性心存疑虑。\r\n</p>\r\n<p>\r\n\t<b>相关新闻</b> \r\n</p>\r\n<p>\r\n\t<b>恒大宣布全国范围内无理由退房</b> \r\n</p>\r\n<p>\r\n\t恒大地产集团昨日宣布，自今日起，将在全国所有楼盘住宅实施无理由退房，该措施覆盖全国147个城市的305个楼盘。恒大副总裁夏海钧表示，希望住宅“包退”成为市场新常态。\r\n</p>\r\n<p>\r\n\t<b>今日起买恒大房“包退货”</b> \r\n</p>\r\n<p>\r\n\t昨日下午，恒大宣布，全国所有楼盘住宅从4月16日8时起正式实施无理由退房，覆盖恒大所有在售住宅，遍布全国147个城市的305个楼盘。\r\n</p>\r\n<p>\r\n\t恒大集团承诺：凡购买恒大所有楼盘住宅的客户，若已履行《楼宇认购书》、《商品房买卖合同》的各项义务，并且无任何违约行为，则自签署《商品房买卖合同》及《无理由退房协议书》之日起至办理入住手续前的任何时间内，均可无理由退房。\r\n</p>\r\n<p>\r\n\t最新数据显示，2015年1~3月，恒大累计合约销售金额约305.4亿元，其中3月实现合约销售额137.1亿元，&nbsp;恒大地产2014年全年销售额达1315亿元，2015年销售目标定为1500亿元，较2014年目标增36.4%\r\n</p>"
  })
})

module.exports = router;
