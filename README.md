# QDU_AFL_V3

this is a wechat mini program for ask for leave in QDU by yourself

## please light the star, it's reall important for me.（请为我点个star，这对我真的很重要）

## keep silence 🤫

## 简介

因为这个小程序访问的人数超出了我的预期，加上腾讯将会在最近（11.11）调整小程序云服务的计费规则。因为买不起腾讯的cloudbase，所以我将这个小程序本来就不多的服务器资源部署到了我的云服务器上。可能速度会受到一定的影响（加载字体的时候）。因为我的服务器的贷款只有10M，下载速度大概2-3MB/s

如果有任何问题请在issue跟我联系

<hr>

腾讯真的恶心，直接填个人信息无法过审，所以我就只能曲线救国了。

信息代码的获取方法在操作指南中

乞望见谅

2022.9.3

<hr>

有些事说是小心也好，说是形式也罢。

但是体现在个人身上，是痛苦与气愤。

我对如是行径感到恶心。

虽然大多是为了自己，如果下次又有魑魅魍魉在人间横行，我依然会用自己的方式祛魅。

2022.9.2

<hr>
某大学终于打开了虚妄的门扉，推倒了染血的藩篱。这是一场胜利，或许是。

有幸看到<b>小圆</b>在此刻退休，目前仍未更新的版本也不会再继续更新了。

对于小圆的退休我并不感到遗憾

> 但愿世间人无病，何妨架上药生尘。

我们还有别的战场要奔赴，哪里有压迫，哪里就有反抗。不合理仍然存在，以真理之名，我仍要与这些恶魔战斗。

无论如何，很高兴看到这一片光辉闪烁着，我们可以暂时唱着欢歌，相拥而眠；不必枕戈待旦，横刀冷对了。

今天，它退休了，但当黑暗再次笼罩之时，我仍将燃起炬火，予你微弱的光芒。

5.26

<hr>

最近校园集结号迁移到微信小程序了，于是我又赶出来一个。

因为是微信小程序，大家能在微信中直接搜索到我就不上传gitee了

从网页到mui到微信小程序这都第三版了，考虑要不要直接uniapp……（那我就快要成为真正的集结号了）

### 早期版本

V2版本：[校园集结号自主请假: 勾勾啊哈哈 (gitee.com)](https://gitee.com/charles-min/QDU_ASLv2)

V1版本：[charlesix59/QDU_self_ASF_web (github.com)](https://github.com/charlesix59/QDU_self_ASF_web)

### 一些废话

> 沉默呵，沉默呵！不在沉默中爆发，就在沉默中灭亡——鲁迅

> 哪里有压迫哪里就有反抗——毛泽东

## 使用方法

1. 自己在微信开发者工具中编译构建运行，并生成测试版 
   1. `git clone https://github.com/charlesix59/QDU_AFL_V3.git`
   2. 导入微信开发者工具
   3. 更改测试appid
   4. 真机调试
2. 在微信小程序界面搜索 <b>小圆季节灏</b>

## 操作指南

- 进入小程序，点击`键入信息`，输入相关的信息（日期时间等选上没有显示，是因为我懒（正确的））

- 点击生成假条

- 不需要每次都键入信息，方便操作

  注意事项：

  1.信息键入每次会储存，如果你不重新填写，生成的假条与上次相同。如果信息没有变化则无需重复填写

  2.键入信息的除时间以外的信息会默认与上次相同，如果不需要更改则只选择时间并提交即可

  3.因为部分资源存放在云服务器中（免费的）所以加载速度会稍慢，请提前10秒钟以上生成需要的界面

### 信息码获取

其实原理非常简单，只需要您填写一个json文件，格式如下：

```json
{
    "name":"你的名字",
    "number":"你的学号",
    "sclass":"你的班级",
    "collage":"你的学院",
    "tname":"你导员的大号",
    "tel":"你的电话",
    "address":"你要去的地方",
    "dormitory":"你的住处"
}
```

复制一份到任意文本编辑器，修改各个值为你需要的值，然后复制，粘贴到小程序中的信息码文本框即可

## 版本信息

- 当前版本：1.1.2

- [x] 0.9.8b 能够使用的版本

- [x] 1.0.0 能够在键入信息界面显示上次键入的信息

- [x] 1.0.1 修改界面最下方两个按钮没有对齐的问题，修改部分显示bug

- [x] 1.1.0 为信息界面添加更多人性化的默认值

- [x] 1.1.2 添加请假证明

- [x] 1.1.3 将个人信息转为代码获取

- [x] 1.1.4 修改tagbar的名字

- [x] 1.1.5 修改只有时间没有日期的bug

- [x] 1.1.6 浮山公寓不能改的bug

- [x] 1.1.7 请假前往的地点消失的bug

- [x] 1.2.0 添加默认日期为当前日期开始，明日结束

- [x] 1.2.1 动画的优化

- [x] 1.2.2 选择时间可以实时可视

- [x] 1.3.0 将静态资源添加到我的云服务器

- [ ] ...more

- [ ] 2.0.0 让整个界面类似原版校园集结号 

## 贡献方法

- 在issue中提出你发现的bug或者建议
- fork
- 为我点亮右上角的star ✨
