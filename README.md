# MetroHistory
本项目可以快速可视化显示世界上任意国家或城市的轨道交通发展历程，
只需要准备好数据。

Demo网址：https://uahh.magiconch.com/metro-history/



### 实现原理
项目输入为Json数据，数据包含每条地铁站点的坐标，建设和开通时间等信息。
Json由models/model.py解析，并直接生成js文件。
由templates/index.html直接显示。
地图使用百度地图API，显示使用Echarts。

### 如何准备Json数据？
Json格式：
```bash
"metro": [
    [
      {
        "rgb": "234, 27, 57", //地铁线颜色，RGB
        "history": [
          [1990, 1993, 3, 7], //表示第三站到第七站，由1990年开工，1993年通车
          [1990, 1995, 7, 15],
          [1994, 1996, 0, 3],
          [1999, 2004, 15, 24],
          [2004, 2007, 24, 27]
        ]
      },
      [
        "1号线",      //线路名称
        "莘庄",       //站名
        0,           //站序号
        31.116581,   //站经纬度
        121.391623
      ],
      ...
      ...
      ...
      [
        "1号线",
        "富锦路",
        27,
        31.398683,
        121.43103
      ]
    ]
]
```

### 如何使用？
首先克隆：
```bash
git clone https://github.com/Uahh/MetroHistory
```

在models/model.py的main函数中配置好信息：
```bash
    auto_js = Auto_Js('data/Shanghai_Metro.json')  # 数据文件
    auto_js.set_center('[121.3803798526, 31.1128250311]')  # 地图初始经纬坐标
    auto_js.set_zoom('11.5')  # 地图缩放等级
    auto_js.set_play_interval('1000')  # 动画播放每帧间隔(ms)
    auto_js.set_loop('false')  # 是否循环播放
    auto_js.dump('./static/js/Shanghai_Metro.js')  # js文件导出目录 
```
直接运行即可：
```bash
python models/model.py
```
效果可在index.html中查看。
