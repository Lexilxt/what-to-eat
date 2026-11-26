/* ============================================================
 * data.js —— 全站菜单数据（唯一数据源）
 * ------------------------------------------------------------
 * 数据来源：《一二三楼菜单总表.xlsx》（E:\杭电\作业\生成式人工智能\）。
 * 一楼早餐/菜品价格原表未标 → null，全站显示「待填写」，不得按 0 元计算。
 * 二楼各档口菜名/价格/备注、三楼火锅锅底与菜品/炒菜价格均按原表录入；
 * note 字段为原表备注（单位/口味/热量等）。
 * 麻辣烫食材清单原表未提供 → 仍为占位示例，待补充后替换 groups。
 * 菜品图路径统一 assets/img/菜名.png（文件名非法字符替换为 _）。
 * ============================================================ */

const MENU = {
  c1: {
    "id": "c1",
    "name": "一食堂",
    "categories": [
      {
        "id": "breakfast",
        "name": "早餐",
        "icon": "sun",
        "dishes": [
          {
            "id": "c1-b1",
            "name": "白粥",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/白粥.png"
          },
          {
            "id": "c1-b2",
            "name": "南瓜粥",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/南瓜粥.png"
          },
          {
            "id": "c1-b3",
            "name": "葱油饼",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/葱油饼.png"
          },
          {
            "id": "c1-b4",
            "name": "肉饼",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/肉饼.png"
          },
          {
            "id": "c1-b5",
            "name": "蛋炒饭",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/蛋炒饭.png"
          },
          {
            "id": "c1-b6",
            "name": "炒粉丝",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/炒粉丝.png"
          },
          {
            "id": "c1-b7",
            "name": "茶叶蛋",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/茶叶蛋.png"
          },
          {
            "id": "c1-b8",
            "name": "蒸饺",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/蒸饺.png"
          },
          {
            "id": "c1-b9",
            "name": "麻球",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/麻球.png"
          },
          {
            "id": "c1-b10",
            "name": "麻花",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/麻花.png"
          },
          {
            "id": "c1-b11",
            "name": "刀切",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/刀切.png"
          },
          {
            "id": "c1-b12",
            "name": "豆沙卷",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/豆沙卷.png"
          },
          {
            "id": "c1-b13",
            "name": "巴比肉包",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/巴比肉包.png"
          },
          {
            "id": "c1-b14",
            "name": "萝卜丝饼",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/萝卜丝饼.png"
          },
          {
            "id": "c1-b15",
            "name": "龙游馒头",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/龙游馒头.png"
          },
          {
            "id": "c1-b16",
            "name": "煎蛋",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/煎蛋.png"
          },
          {
            "id": "c1-b17",
            "name": "豆奶",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/豆奶.png"
          },
          {
            "id": "c1-b18",
            "name": "小酸奶",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/小酸奶.png"
          },
          {
            "id": "c1-b19",
            "name": "手抓饼",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/手抓饼.png"
          },
          {
            "id": "c1-b20",
            "name": "拌面",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/拌面.png"
          },
          {
            "id": "c1-b21",
            "name": "蛋黄肉粽",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/蛋黄肉粽.png"
          },
          {
            "id": "c1-b22",
            "name": "榨菜",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/榨菜.png"
          },
          {
            "id": "c1-b23",
            "name": "雪菜饼",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/雪菜饼.png"
          },
          {
            "id": "c1-b24",
            "name": "千层饼",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/千层饼.png"
          },
          {
            "id": "c1-b25",
            "name": "蛋糕",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/蛋糕.png"
          },
          {
            "id": "c1-b26",
            "name": "炒面",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/炒面.png"
          },
          {
            "id": "c1-b27",
            "name": "汤面",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/汤面.png"
          },
          {
            "id": "c1-b28",
            "name": "白煮蛋",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/白煮蛋.png"
          },
          {
            "id": "c1-b29",
            "name": "蛋挞",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/蛋挞.png"
          },
          {
            "id": "c1-b30",
            "name": "小米糕",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/小米糕.png"
          },
          {
            "id": "c1-b31",
            "name": "（自制）肉包",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/（自制）肉包.png"
          },
          {
            "id": "c1-b32",
            "name": "豆沙包",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/豆沙包.png"
          },
          {
            "id": "c1-b33",
            "name": "香菇肉包",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/香菇肉包.png"
          },
          {
            "id": "c1-b34",
            "name": "奶黄包",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/奶黄包.png"
          },
          {
            "id": "c1-b35",
            "name": "糯米饭团",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/糯米饭团.png"
          },
          {
            "id": "c1-b36",
            "name": "红糖馒头",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/红糖馒头.png"
          },
          {
            "id": "c1-b37",
            "name": "枣米糕",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/枣米糕.png"
          },
          {
            "id": "c1-b38",
            "name": "酸奶",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/酸奶.png"
          },
          {
            "id": "c1-b39",
            "name": "现磨豆浆",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/现磨豆浆.png"
          },
          {
            "id": "c1-b40",
            "name": "鸡蛋卷饼",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/鸡蛋卷饼.png"
          },
          {
            "id": "c1-b41",
            "name": "肉夹馍",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/肉夹馍.png"
          },
          {
            "id": "c1-b42",
            "name": "蜜枣米粽",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/蜜枣米粽.png"
          },
          {
            "id": "c1-b43",
            "name": "糍粑油条",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/糍粑油条.png"
          },
          {
            "id": "c1-b44",
            "name": "黑米粥",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/黑米粥.png"
          },
          {
            "id": "c1-b45",
            "name": "粉丝饼",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/粉丝饼.png"
          },
          {
            "id": "c1-b46",
            "name": "鸡蛋饼",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/鸡蛋饼.png"
          },
          {
            "id": "c1-b47",
            "name": "韭菜盒子",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/韭菜盒子.png"
          },
          {
            "id": "c1-b48",
            "name": "炒河粉",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/炒河粉.png"
          },
          {
            "id": "c1-b49",
            "name": "汤米线",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/汤米线.png"
          },
          {
            "id": "c1-b50",
            "name": "烧麦",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/烧麦.png"
          },
          {
            "id": "c1-b51",
            "name": "糖糕",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/糖糕.png"
          },
          {
            "id": "c1-b52",
            "name": "三明治",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/三明治.png"
          },
          {
            "id": "c1-b53",
            "name": "菜包",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/菜包.png"
          },
          {
            "id": "c1-b54",
            "name": "花卷",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/花卷.png"
          },
          {
            "id": "c1-b55",
            "name": "梅干菜包",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/梅干菜包.png"
          },
          {
            "id": "c1-b56",
            "name": "流沙包",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/流沙包.png"
          },
          {
            "id": "c1-b57",
            "name": "豆腐包",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/豆腐包.png"
          },
          {
            "id": "c1-b58",
            "name": "酒酿汤圆",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/酒酿汤圆.png"
          },
          {
            "id": "c1-b59",
            "name": "油条",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/油条.png"
          },
          {
            "id": "c1-b60",
            "name": "纯牛奶",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/纯牛奶.png"
          },
          {
            "id": "c1-b61",
            "name": "小笼包",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/小笼包.png"
          },
          {
            "id": "c1-b62",
            "name": "咸鸭蛋",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/咸鸭蛋.png"
          },
          {
            "id": "c1-b63",
            "name": "鲜肉粽",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/鲜肉粽.png"
          },
          {
            "id": "c1-b64",
            "name": "香肠卷",
            "price": null,
            "type": "breakfast",
            "img": "assets/img/香肠卷.png"
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常菜品",
        "icon": "bowl",
        "dishes": [
          {
            "id": "c1-d1",
            "name": "尖椒小炒肉",
            "price": null,
            "type": "normal",
            "img": "assets/img/尖椒小炒肉.png"
          },
          {
            "id": "c1-d2",
            "name": "蒜蓉鸡柳",
            "price": null,
            "type": "normal",
            "img": "assets/img/蒜蓉鸡柳.png"
          },
          {
            "id": "c1-d3",
            "name": "香菇鸡块",
            "price": null,
            "type": "normal",
            "img": "assets/img/香菇鸡块.png"
          },
          {
            "id": "c1-d4",
            "name": "玉米仔排",
            "price": null,
            "type": "normal",
            "img": "assets/img/玉米仔排.png"
          },
          {
            "id": "c1-d5",
            "name": "炸鸡排",
            "price": null,
            "type": "normal",
            "img": "assets/img/炸鸡排.png"
          },
          {
            "id": "c1-d6",
            "name": "辣子鸡",
            "price": null,
            "type": "normal",
            "img": "assets/img/辣子鸡.png"
          },
          {
            "id": "c1-d7",
            "name": "黑胡椒鸡排",
            "price": null,
            "type": "normal",
            "img": "assets/img/黑胡椒鸡排.png"
          },
          {
            "id": "c1-d8",
            "name": "红烧狮子头",
            "price": null,
            "type": "normal",
            "img": "assets/img/红烧狮子头.png"
          },
          {
            "id": "c1-d9",
            "name": "酸菜鱼",
            "price": null,
            "type": "normal",
            "img": "assets/img/酸菜鱼.png"
          },
          {
            "id": "c1-d10",
            "name": "油爆虾",
            "price": null,
            "type": "normal",
            "img": "assets/img/油爆虾.png"
          },
          {
            "id": "c1-d11",
            "name": "山药排骨",
            "price": null,
            "type": "normal",
            "img": "assets/img/山药排骨.png"
          },
          {
            "id": "c1-d12",
            "name": "尖椒菌菇牛柳",
            "price": null,
            "type": "normal",
            "img": "assets/img/尖椒菌菇牛柳.png"
          },
          {
            "id": "c1-d13",
            "name": "藕片肉丝",
            "price": null,
            "type": "normal",
            "img": "assets/img/藕片肉丝.png"
          },
          {
            "id": "c1-d14",
            "name": "菌菇肉片",
            "price": null,
            "type": "normal",
            "img": "assets/img/菌菇肉片.png"
          },
          {
            "id": "c1-d15",
            "name": "凉拌黄瓜",
            "price": null,
            "type": "normal",
            "img": "assets/img/凉拌黄瓜.png"
          },
          {
            "id": "c1-d16",
            "name": "麻辣豆腐",
            "price": null,
            "type": "normal",
            "img": "assets/img/麻辣豆腐.png"
          },
          {
            "id": "c1-d17",
            "name": "西南瓜炒蛋",
            "price": null,
            "type": "normal",
            "img": "assets/img/西南瓜炒蛋.png"
          },
          {
            "id": "c1-d18",
            "name": "油豆腐白菜",
            "price": null,
            "type": "normal",
            "img": "assets/img/油豆腐白菜.png"
          },
          {
            "id": "c1-d19",
            "name": "清炒毛毛菜",
            "price": null,
            "type": "normal",
            "img": "assets/img/清炒毛毛菜.png"
          },
          {
            "id": "c1-d20",
            "name": "蒜泥西兰花",
            "price": null,
            "type": "normal",
            "img": "assets/img/蒜泥西兰花.png"
          },
          {
            "id": "c1-d21",
            "name": "甜蒸南瓜",
            "price": null,
            "type": "normal",
            "img": "assets/img/甜蒸南瓜.png"
          },
          {
            "id": "c1-d22",
            "name": "玉米甜豆香肠",
            "price": null,
            "type": "normal",
            "img": "assets/img/玉米甜豆香肠.png"
          },
          {
            "id": "c1-d23",
            "name": "土豆牛肉",
            "price": null,
            "type": "normal",
            "img": "assets/img/土豆牛肉.png"
          },
          {
            "id": "c1-d24",
            "name": "腊鸡腿毛豆",
            "price": null,
            "type": "normal",
            "img": "assets/img/腊鸡腿毛豆.png"
          },
          {
            "id": "c1-d25",
            "name": "肉末海带丝",
            "price": null,
            "type": "normal",
            "img": "assets/img/肉末海带丝.png"
          },
          {
            "id": "c1-d26",
            "name": "水蒸蛋",
            "price": null,
            "type": "normal",
            "img": "assets/img/水蒸蛋.png"
          },
          {
            "id": "c1-d27",
            "name": "蒜泥茼蒿",
            "price": null,
            "type": "normal",
            "img": "assets/img/蒜泥茼蒿.png"
          },
          {
            "id": "c1-d28",
            "name": "红烧大排",
            "price": null,
            "type": "normal",
            "img": "assets/img/红烧大排.png"
          },
          {
            "id": "c1-d29",
            "name": "洋葱炒蛋",
            "price": null,
            "type": "normal",
            "img": "assets/img/洋葱炒蛋.png"
          },
          {
            "id": "c1-d30",
            "name": "炸薯条",
            "price": null,
            "type": "normal",
            "img": "assets/img/炸薯条.png"
          },
          {
            "id": "c1-d31",
            "name": "外婆菜炒蛋",
            "price": null,
            "type": "normal",
            "img": "assets/img/外婆菜炒蛋.png"
          },
          {
            "id": "c1-d32",
            "name": "蒜香排骨",
            "price": null,
            "type": "normal",
            "img": "assets/img/蒜香排骨.png"
          },
          {
            "id": "c1-d33",
            "name": "白切肉",
            "price": null,
            "type": "normal",
            "img": "assets/img/白切肉.png"
          },
          {
            "id": "c1-d34",
            "name": "土豆仔排",
            "price": null,
            "type": "normal",
            "img": "assets/img/土豆仔排.png"
          },
          {
            "id": "c1-d35",
            "name": "小炒黄牛肉",
            "price": null,
            "type": "normal",
            "img": "assets/img/小炒黄牛肉.png"
          },
          {
            "id": "c1-d36",
            "name": "拌云丝",
            "price": null,
            "type": "normal",
            "img": "assets/img/拌云丝.png"
          },
          {
            "id": "c1-d37",
            "name": "蛋玉豆腐",
            "price": null,
            "type": "normal",
            "img": "assets/img/蛋玉豆腐.png"
          },
          {
            "id": "c1-d38",
            "name": "木耳炒肉",
            "price": null,
            "type": "normal",
            "img": "assets/img/木耳炒肉.png"
          },
          {
            "id": "c1-d39",
            "name": "酱香筒骨",
            "price": null,
            "type": "normal",
            "img": "assets/img/酱香筒骨.png"
          },
          {
            "id": "c1-d40",
            "name": "虾饼",
            "price": null,
            "type": "normal",
            "img": "assets/img/虾饼.png"
          },
          {
            "id": "c1-d41",
            "name": "水煮肉片",
            "price": null,
            "type": "normal",
            "img": "assets/img/水煮肉片.png"
          },
          {
            "id": "c1-d42",
            "name": "炒猪肝",
            "price": null,
            "type": "normal",
            "img": "assets/img/炒猪肝.png"
          },
          {
            "id": "c1-d43",
            "name": "肉饼蒸蛋",
            "price": null,
            "type": "normal",
            "img": "assets/img/肉饼蒸蛋.png"
          },
          {
            "id": "c1-d44",
            "name": "清蒸鸡腿",
            "price": null,
            "type": "normal",
            "img": "assets/img/清蒸鸡腿.png"
          },
          {
            "id": "c1-d45",
            "name": "红烧翅根",
            "price": null,
            "type": "normal",
            "img": "assets/img/红烧翅根.png"
          },
          {
            "id": "c1-d46",
            "name": "香辣翅根",
            "price": null,
            "type": "normal",
            "img": "assets/img/香辣翅根.png"
          },
          {
            "id": "c1-d47",
            "name": "雪花排条",
            "price": null,
            "type": "normal",
            "img": "assets/img/雪花排条.png"
          },
          {
            "id": "c1-d48",
            "name": "冰火鱼排",
            "price": null,
            "type": "normal",
            "img": "assets/img/冰火鱼排.png"
          },
          {
            "id": "c1-d49",
            "name": "剁椒鱼头",
            "price": null,
            "type": "normal",
            "img": "assets/img/剁椒鱼头.png"
          },
          {
            "id": "c1-d50",
            "name": "香酥鸭腿",
            "price": null,
            "type": "normal",
            "img": "assets/img/香酥鸭腿.png"
          },
          {
            "id": "c1-d51",
            "name": "瘦肉丸",
            "price": null,
            "type": "normal",
            "img": "assets/img/瘦肉丸.png"
          },
          {
            "id": "c1-d52",
            "name": "酱爆茄子",
            "price": null,
            "type": "normal",
            "img": "assets/img/酱爆茄子.png"
          },
          {
            "id": "c1-d53",
            "name": "黄豆芽",
            "price": null,
            "type": "normal",
            "img": "assets/img/黄豆芽.png"
          },
          {
            "id": "c1-d54",
            "name": "绿豆芽",
            "price": null,
            "type": "normal",
            "img": "assets/img/绿豆芽.png"
          },
          {
            "id": "c1-d55",
            "name": "番茄炒蛋",
            "price": null,
            "type": "normal",
            "img": "assets/img/番茄炒蛋.png"
          },
          {
            "id": "c1-d56",
            "name": "莴笋肉丝",
            "price": null,
            "type": "normal",
            "img": "assets/img/莴笋肉丝.png"
          },
          {
            "id": "c1-d57",
            "name": "炒青菜",
            "price": null,
            "type": "normal",
            "img": "assets/img/炒青菜.png"
          },
          {
            "id": "c1-d58",
            "name": "干锅土豆片",
            "price": null,
            "type": "normal",
            "img": "assets/img/干锅土豆片.png"
          },
          {
            "id": "c1-d59",
            "name": "雪菜素几",
            "price": null,
            "type": "normal",
            "img": "assets/img/雪菜素几.png"
          },
          {
            "id": "c1-d60",
            "name": "清炒冬瓜",
            "price": null,
            "type": "normal",
            "img": "assets/img/清炒冬瓜.png"
          },
          {
            "id": "c1-d61",
            "name": "玉米甜豆",
            "price": null,
            "type": "normal",
            "img": "assets/img/玉米甜豆.png"
          },
          {
            "id": "c1-d62",
            "name": "芹菜香干",
            "price": null,
            "type": "normal",
            "img": "assets/img/芹菜香干.png"
          },
          {
            "id": "c1-d63",
            "name": "盐酥鸡",
            "price": null,
            "type": "normal",
            "img": "assets/img/盐酥鸡.png"
          },
          {
            "id": "c1-d64",
            "name": "酥鱼",
            "price": null,
            "type": "normal",
            "img": "assets/img/酥鱼.png"
          },
          {
            "id": "c1-d65",
            "name": "雪菜豆腐",
            "price": null,
            "type": "normal",
            "img": "assets/img/雪菜豆腐.png"
          },
          {
            "id": "c1-d66",
            "name": "尖椒鱿鱼",
            "price": null,
            "type": "normal",
            "img": "assets/img/尖椒鱿鱼.png"
          },
          {
            "id": "c1-d67",
            "name": "蒜泥菠菜",
            "price": null,
            "type": "normal",
            "img": "assets/img/蒜泥菠菜.png"
          },
          {
            "id": "c1-d68",
            "name": "炒胡萝卜",
            "price": null,
            "type": "normal",
            "img": "assets/img/炒胡萝卜.png"
          },
          {
            "id": "c1-d69",
            "name": "海带排骨",
            "price": null,
            "type": "normal",
            "img": "assets/img/海带排骨.png"
          },
          {
            "id": "c1-d70",
            "name": "荷兰豆肉片",
            "price": null,
            "type": "normal",
            "img": "assets/img/荷兰豆肉片.png"
          },
          {
            "id": "c1-d71",
            "name": "大素几块",
            "price": null,
            "type": "normal",
            "img": "assets/img/大素几块.png"
          },
          {
            "id": "c1-d72",
            "name": "青豆虾仁",
            "price": null,
            "type": "normal",
            "img": "assets/img/青豆虾仁.png"
          },
          {
            "id": "c1-d73",
            "name": "干叶豆腐",
            "price": null,
            "type": "normal",
            "img": "assets/img/干叶豆腐.png"
          },
          {
            "id": "c1-d74",
            "name": "卤鸭",
            "price": null,
            "type": "normal",
            "img": "assets/img/卤鸭.png"
          },
          {
            "id": "c1-d75",
            "name": "腐竹",
            "price": null,
            "type": "normal",
            "img": "assets/img/腐竹.png"
          },
          {
            "id": "c1-d76",
            "name": "豆腐炒蛋",
            "price": null,
            "type": "normal",
            "img": "assets/img/豆腐炒蛋.png"
          },
          {
            "id": "c1-d77",
            "name": "包心菜",
            "price": null,
            "type": "normal",
            "img": "assets/img/包心菜.png"
          },
          {
            "id": "c1-d78",
            "name": "蛋饺",
            "price": null,
            "type": "normal",
            "img": "assets/img/蛋饺.png"
          },
          {
            "id": "c1-d79",
            "name": "干菜大块肉",
            "price": null,
            "type": "normal",
            "img": "assets/img/干菜大块肉.png"
          },
          {
            "id": "c1-d80",
            "name": "炸香肠（肉肠）",
            "price": null,
            "type": "normal",
            "img": "assets/img/炸香肠（肉肠）.png"
          },
          {
            "id": "c1-d81",
            "name": "米饭",
            "price": null,
            "type": "normal",
            "img": "assets/img/米饭.png"
          },
          {
            "id": "c1-d82",
            "name": "小酥肉",
            "price": null,
            "type": "normal",
            "img": "assets/img/小酥肉.png"
          },
          {
            "id": "c1-d83",
            "name": "黄豆猪蹄",
            "price": null,
            "type": "normal",
            "img": "assets/img/黄豆猪蹄.png"
          },
          {
            "id": "c1-d84",
            "name": "土豆鸡块",
            "price": null,
            "type": "normal",
            "img": "assets/img/土豆鸡块.png"
          },
          {
            "id": "c1-d85",
            "name": "香干肉丝",
            "price": null,
            "type": "normal",
            "img": "assets/img/香干肉丝.png"
          },
          {
            "id": "c1-d86",
            "name": "白切鸡",
            "price": null,
            "type": "normal",
            "img": "assets/img/白切鸡.png"
          },
          {
            "id": "c1-d87",
            "name": "炸脆皮鸡腿",
            "price": null,
            "type": "normal",
            "img": "assets/img/炸脆皮鸡腿.png"
          },
          {
            "id": "c1-d88",
            "name": "孜然牙签肉",
            "price": null,
            "type": "normal",
            "img": "assets/img/孜然牙签肉.png"
          },
          {
            "id": "c1-d89",
            "name": "福袋",
            "price": null,
            "type": "normal",
            "img": "assets/img/福袋.png"
          },
          {
            "id": "c1-d90",
            "name": "烟熏肉",
            "price": null,
            "type": "normal",
            "img": "assets/img/烟熏肉.png"
          },
          {
            "id": "c1-d91",
            "name": "红烧瓦块鱼",
            "price": null,
            "type": "normal",
            "img": "assets/img/红烧瓦块鱼.png"
          },
          {
            "id": "c1-d92",
            "name": "鱼香肉丝",
            "price": null,
            "type": "normal",
            "img": "assets/img/鱼香肉丝.png"
          },
          {
            "id": "c1-d93",
            "name": "香炸带鱼",
            "price": null,
            "type": "normal",
            "img": "assets/img/香炸带鱼.png"
          },
          {
            "id": "c1-d94",
            "name": "豇豆肉丝",
            "price": null,
            "type": "normal",
            "img": "assets/img/豇豆肉丝.png"
          },
          {
            "id": "c1-d95",
            "name": "炒粉丝",
            "price": null,
            "type": "normal",
            "img": "assets/img/炒粉丝.png"
          },
          {
            "id": "c1-d96",
            "name": "黄瓜炒蛋",
            "price": null,
            "type": "normal",
            "img": "assets/img/黄瓜炒蛋.png"
          },
          {
            "id": "c1-d97",
            "name": "干锅包菜",
            "price": null,
            "type": "normal",
            "img": "assets/img/干锅包菜.png"
          },
          {
            "id": "c1-d98",
            "name": "酸辣土豆丝",
            "price": null,
            "type": "normal",
            "img": "assets/img/酸辣土豆丝.png"
          },
          {
            "id": "c1-d99",
            "name": "葱油金针菇",
            "price": null,
            "type": "normal",
            "img": "assets/img/葱油金针菇.png"
          },
          {
            "id": "c1-d100",
            "name": "莴笋炒蛋",
            "price": null,
            "type": "normal",
            "img": "assets/img/莴笋炒蛋.png"
          },
          {
            "id": "c1-d101",
            "name": "韭菜炒蛋",
            "price": null,
            "type": "normal",
            "img": "assets/img/韭菜炒蛋.png"
          },
          {
            "id": "c1-d102",
            "name": "椒盐土豆",
            "price": null,
            "type": "normal",
            "img": "assets/img/椒盐土豆.png"
          },
          {
            "id": "c1-d103",
            "name": "香干回锅肉",
            "price": null,
            "type": "normal",
            "img": "assets/img/香干回锅肉.png"
          },
          {
            "id": "c1-d104",
            "name": "春笋肉片",
            "price": null,
            "type": "normal",
            "img": "assets/img/春笋肉片.png"
          },
          {
            "id": "c1-d105",
            "name": "毛豆鸡丁",
            "price": null,
            "type": "normal",
            "img": "assets/img/毛豆鸡丁.png"
          },
          {
            "id": "c1-d106",
            "name": "糖醋豆儿",
            "price": null,
            "type": "normal",
            "img": "assets/img/糖醋豆儿.png"
          },
          {
            "id": "c1-d107",
            "name": "酸辣白菜",
            "price": null,
            "type": "normal",
            "img": "assets/img/酸辣白菜.png"
          },
          {
            "id": "c1-d108",
            "name": "干锅花菜",
            "price": null,
            "type": "normal",
            "img": "assets/img/干锅花菜.png"
          },
          {
            "id": "c1-d109",
            "name": "蒜泥生菜",
            "price": null,
            "type": "normal",
            "img": "assets/img/蒜泥生菜.png"
          },
          {
            "id": "c1-d110",
            "name": "油菠菜",
            "price": null,
            "type": "normal",
            "img": "assets/img/油菠菜.png"
          },
          {
            "id": "c1-d111",
            "name": "葱油秋葵",
            "price": null,
            "type": "normal",
            "img": "assets/img/葱油秋葵.png"
          },
          {
            "id": "c1-d112",
            "name": "香肠炒蛋",
            "price": null,
            "type": "normal",
            "img": "assets/img/香肠炒蛋.png"
          },
          {
            "id": "c1-d113",
            "name": "臭豆腐",
            "price": null,
            "type": "normal",
            "img": "assets/img/臭豆腐.png"
          },
          {
            "id": "c1-d114",
            "name": "蚕豆炒蛋",
            "price": null,
            "type": "normal",
            "img": "assets/img/蚕豆炒蛋.png"
          },
          {
            "id": "c1-d115",
            "name": "凉拌皮蛋",
            "price": null,
            "type": "normal",
            "img": "assets/img/凉拌皮蛋.png"
          },
          {
            "id": "c1-d116",
            "name": "啤酒鸭",
            "price": null,
            "type": "normal",
            "img": "assets/img/啤酒鸭.png"
          },
          {
            "id": "c1-d117",
            "name": "骨肉相连",
            "price": null,
            "type": "normal",
            "img": "assets/img/骨肉相连.png"
          },
          {
            "id": "c1-d118",
            "name": "清蒸娃娃菜",
            "price": null,
            "type": "normal",
            "img": "assets/img/清蒸娃娃菜.png"
          },
          {
            "id": "c1-d119",
            "name": "凉拌牛肉",
            "price": null,
            "type": "normal",
            "img": "assets/img/凉拌牛肉.png"
          },
          {
            "id": "c1-d120",
            "name": "黑椒肉粒",
            "price": null,
            "type": "normal",
            "img": "assets/img/黑椒肉粒.png"
          },
          {
            "id": "c1-d121",
            "name": "鸡腿排",
            "price": null,
            "type": "normal",
            "img": "assets/img/鸡腿排.png"
          },
          {
            "id": "c1-d122",
            "name": "油豆腐烧肉",
            "price": null,
            "type": "normal",
            "img": "assets/img/油豆腐烧肉.png"
          },
          {
            "id": "c1-d123",
            "name": "炸香肠土豆",
            "price": null,
            "type": "normal",
            "img": "assets/img/炸香肠土豆.png"
          },
          {
            "id": "c1-d124",
            "name": "炸虾",
            "price": null,
            "type": "normal",
            "img": "assets/img/炸虾.png"
          }
        ]
      }
    ]
  },

  c2: {
    "id": "c2",
    "name": "二食堂",
    "stalls": [
      {
        "id": "jinyun",
        "name": "缙云烧饼",
        "dishes": [
          {
            "id": "c2-jinyun-1",
            "type": "normal",
            "name": "梅干菜五花肉饼",
            "price": 6,
            "img": "assets/img/梅干菜五花肉饼.png",
            "cat": "特色烧饼"
          },
          {
            "id": "c2-jinyun-2",
            "type": "normal",
            "name": "葱加瘦肉饼",
            "price": 8,
            "img": "assets/img/葱加瘦肉饼.png",
            "cat": "特色烧饼"
          },
          {
            "id": "c2-jinyun-3",
            "type": "normal",
            "name": "梅干菜瘦肉饼",
            "price": 8,
            "img": "assets/img/梅干菜瘦肉饼.png",
            "cat": "特色烧饼"
          },
          {
            "id": "c2-jinyun-4",
            "type": "normal",
            "name": "全瘦肉饼",
            "price": 8,
            "img": "assets/img/全瘦肉饼.png",
            "cat": "特色烧饼"
          },
          {
            "id": "c2-jinyun-5",
            "type": "normal",
            "name": "梅干菜薄饼",
            "price": 5,
            "img": "assets/img/梅干菜薄饼.png",
            "cat": "特色烧饼"
          },
          {
            "id": "c2-jinyun-6",
            "type": "normal",
            "name": "白糖饼",
            "price": 5,
            "img": "assets/img/白糖饼.png",
            "cat": "特色烧饼"
          },
          {
            "id": "c2-jinyun-7",
            "type": "normal",
            "name": "葱油饼",
            "price": 5,
            "img": "assets/img/葱油饼.png",
            "cat": "特色烧饼"
          },
          {
            "id": "c2-jinyun-8",
            "type": "normal",
            "name": "温州瘦肉丸（小份）",
            "price": 10,
            "img": "assets/img/温州瘦肉丸（小份）.png",
            "cat": "温州瘦肉丸·馄饨"
          },
          {
            "id": "c2-jinyun-9",
            "type": "normal",
            "name": "温州瘦肉丸（大份）",
            "price": 15,
            "img": "assets/img/温州瘦肉丸（大份）.png",
            "cat": "温州瘦肉丸·馄饨"
          },
          {
            "id": "c2-jinyun-10",
            "type": "normal",
            "name": "鲜肉小馄饨（小份）",
            "price": 6,
            "img": "assets/img/鲜肉小馄饨（小份）.png",
            "cat": "温州瘦肉丸·馄饨"
          },
          {
            "id": "c2-jinyun-11",
            "type": "normal",
            "name": "鲜肉小馄饨（大份）",
            "price": 9,
            "img": "assets/img/鲜肉小馄饨（大份）.png",
            "cat": "温州瘦肉丸·馄饨"
          },
          {
            "id": "c2-jinyun-12",
            "type": "normal",
            "name": "虞师傅泡面",
            "price": 6,
            "img": "assets/img/虞师傅泡面.png",
            "cat": "泡面"
          },
          {
            "id": "c2-jinyun-13",
            "type": "normal",
            "name": "白象泡面",
            "price": 7,
            "img": "assets/img/白象泡面.png",
            "cat": "泡面"
          },
          {
            "id": "c2-jinyun-14",
            "type": "normal",
            "name": "乌冬面",
            "price": 8,
            "img": "assets/img/乌冬面.png",
            "cat": "泡面"
          },
          {
            "id": "c2-jinyun-15",
            "type": "normal",
            "name": "汤达人",
            "price": 10,
            "img": "assets/img/汤达人.png",
            "cat": "泡面"
          },
          {
            "id": "c2-jinyun-16",
            "type": "normal",
            "name": "肉肠",
            "price": 4,
            "img": "assets/img/肉肠.png",
            "cat": "其他小吃"
          },
          {
            "id": "c2-jinyun-17",
            "type": "normal",
            "name": "王中王",
            "price": 2,
            "img": "assets/img/王中王.png",
            "cat": "其他小吃"
          }
        ]
      },
      {
        "id": "bange",
        "name": "拌个饭饭",
        "dishes": [
          {
            "id": "c2-bange-1",
            "type": "normal",
            "name": "任意双拼",
            "price": 16,
            "img": "assets/img/任意双拼.png",
            "cat": "烧鸡饭"
          },
          {
            "id": "c2-bange-2",
            "type": "normal",
            "name": "孜然鸡饭",
            "price": 14,
            "img": "assets/img/孜然鸡饭.png",
            "cat": "烧鸡饭"
          },
          {
            "id": "c2-bange-3",
            "type": "normal",
            "name": "招牌口水鸡",
            "price": 15,
            "img": "assets/img/招牌口水鸡.png",
            "cat": "烧鸡饭"
          },
          {
            "id": "c2-bange-4",
            "type": "normal",
            "name": "肉沫茄子饭",
            "price": 10,
            "img": "assets/img/肉沫茄子饭.png",
            "cat": "烧鸡饭"
          },
          {
            "id": "c2-bange-5",
            "type": "normal",
            "name": "西红柿鸡蛋饭",
            "price": 10,
            "img": "assets/img/西红柿鸡蛋饭.png",
            "cat": "烧鸡饭"
          },
          {
            "id": "c2-bange-6",
            "type": "normal",
            "name": "可乐鸡块饭",
            "price": 13,
            "img": "assets/img/可乐鸡块饭.png",
            "cat": "烧鸡饭"
          },
          {
            "id": "c2-bange-7",
            "type": "normal",
            "name": "卤椒烧鸡饭",
            "price": 13,
            "img": "assets/img/卤椒烧鸡饭.png",
            "cat": "烧鸡饭"
          },
          {
            "id": "c2-bange-8",
            "type": "normal",
            "name": "经典辣子鸡饭",
            "price": 15,
            "img": "assets/img/经典辣子鸡饭.png",
            "cat": "烧鸡饭"
          },
          {
            "id": "c2-bange-9",
            "type": "normal",
            "name": "香辣烧鸡饭",
            "price": 13,
            "img": "assets/img/香辣烧鸡饭.png",
            "cat": "烧鸡饭"
          },
          {
            "id": "c2-bange-10",
            "type": "normal",
            "name": "蜜汁酱鸭饭",
            "price": 14,
            "img": "assets/img/蜜汁酱鸭饭.png",
            "cat": "烧鸡饭"
          },
          {
            "id": "c2-bange-11",
            "type": "normal",
            "name": "咖喱鸡肉饭",
            "price": 14,
            "img": "assets/img/咖喱鸡肉饭.png",
            "cat": "烧鸡饭"
          },
          {
            "id": "c2-bange-12",
            "type": "normal",
            "name": "鱼香肉丝饭",
            "price": 13,
            "img": "assets/img/鱼香肉丝饭.png",
            "cat": "烧鸡饭"
          },
          {
            "id": "c2-bange-13",
            "type": "normal",
            "name": "广式叉烧鸭饭",
            "price": 14,
            "img": "assets/img/广式叉烧鸭饭.png",
            "cat": "烧鸡饭"
          },
          {
            "id": "c2-bange-14",
            "type": "normal",
            "name": "铁板照烧鸡饭",
            "price": 14,
            "img": "assets/img/铁板照烧鸡饭.png",
            "cat": "烧鸡饭"
          },
          {
            "id": "c2-bange-15",
            "type": "normal",
            "name": "酱香小炒鸡",
            "price": 14,
            "img": "assets/img/酱香小炒鸡.png",
            "cat": "烧鸡饭"
          },
          {
            "id": "c2-bange-16",
            "type": "normal",
            "name": "年糕",
            "price": 1.5,
            "img": "assets/img/年糕.png",
            "cat": "炸串精选",
            "note": "每串"
          },
          {
            "id": "c2-bange-17",
            "type": "normal",
            "name": "面筋",
            "price": 2,
            "img": "assets/img/面筋.png",
            "cat": "炸串精选",
            "note": "每串"
          },
          {
            "id": "c2-bange-18",
            "type": "normal",
            "name": "川香鸡柳",
            "price": 3,
            "img": "assets/img/川香鸡柳.png",
            "cat": "炸串精选",
            "note": "每串"
          },
          {
            "id": "c2-bange-19",
            "type": "normal",
            "name": "香肠",
            "price": 3,
            "img": "assets/img/香肠.png",
            "cat": "炸串精选",
            "note": "每串"
          },
          {
            "id": "c2-bange-20",
            "type": "normal",
            "name": "大里脊肉",
            "price": 3,
            "img": "assets/img/大里脊肉.png",
            "cat": "炸串精选",
            "note": "每串"
          },
          {
            "id": "c2-bange-21",
            "type": "normal",
            "name": "星星串",
            "price": 3,
            "img": "assets/img/星星串.png",
            "cat": "炸串精选",
            "note": "每串"
          },
          {
            "id": "c2-bange-22",
            "type": "normal",
            "name": "纯肉排",
            "price": 3,
            "img": "assets/img/纯肉排.png",
            "cat": "炸串精选",
            "note": "每串"
          },
          {
            "id": "c2-bange-23",
            "type": "normal",
            "name": "南瓜串",
            "price": 3,
            "img": "assets/img/南瓜串.png",
            "cat": "炸串精选",
            "note": "每串"
          },
          {
            "id": "c2-bange-24",
            "type": "normal",
            "name": "鱿鱼须",
            "price": 4,
            "img": "assets/img/鱿鱼须.png",
            "cat": "炸串精选",
            "note": "每串"
          },
          {
            "id": "c2-bange-25",
            "type": "normal",
            "name": "安井地瓜丸",
            "price": 4,
            "img": "assets/img/安井地瓜丸.png",
            "cat": "炸串精选",
            "note": "每串"
          },
          {
            "id": "c2-bange-26",
            "type": "normal",
            "name": "鸡肉串",
            "price": 8,
            "img": "assets/img/鸡肉串.png",
            "cat": "炸串精选",
            "note": "30串"
          },
          {
            "id": "c2-bange-27",
            "type": "normal",
            "name": "鸭肠串",
            "price": 8,
            "img": "assets/img/鸭肠串.png",
            "cat": "炸串精选",
            "note": "30串"
          },
          {
            "id": "c2-bange-28",
            "type": "normal",
            "name": "四合一（小份）",
            "price": 8,
            "img": "assets/img/四合一（小份）.png",
            "cat": "炸串精选"
          },
          {
            "id": "c2-bange-29",
            "type": "normal",
            "name": "四合一（中份）",
            "price": 11,
            "img": "assets/img/四合一（中份）.png",
            "cat": "炸串精选"
          },
          {
            "id": "c2-bange-30",
            "type": "normal",
            "name": "四合一（大份）",
            "price": 15,
            "img": "assets/img/四合一（大份）.png",
            "cat": "炸串精选"
          },
          {
            "id": "c2-bange-31",
            "type": "normal",
            "name": "鸡锁骨（小份）",
            "price": 10,
            "img": "assets/img/鸡锁骨（小份）.png",
            "cat": "炸串精选"
          },
          {
            "id": "c2-bange-32",
            "type": "normal",
            "name": "鸡锁骨（大份）",
            "price": 14,
            "img": "assets/img/鸡锁骨（大份）.png",
            "cat": "炸串精选"
          }
        ]
      },
      {
        "id": "jiangxi",
        "name": "江西小炒",
        "dishes": [
          {
            "id": "c2-jiangxi-1",
            "type": "normal",
            "name": "青椒炒蛋",
            "price": 14,
            "img": "assets/img/青椒炒蛋.png",
            "cat": "招牌现炒系列"
          },
          {
            "id": "c2-jiangxi-2",
            "type": "normal",
            "name": "肉沫茄子",
            "price": 12,
            "img": "assets/img/肉沫茄子.png",
            "cat": "招牌现炒系列"
          },
          {
            "id": "c2-jiangxi-3",
            "type": "normal",
            "name": "酸豆角肉沫",
            "price": 12,
            "img": "assets/img/酸豆角肉沫.png",
            "cat": "招牌现炒系列"
          },
          {
            "id": "c2-jiangxi-4",
            "type": "normal",
            "name": "湘味小炒鸡",
            "price": 14,
            "img": "assets/img/湘味小炒鸡.png",
            "cat": "招牌现炒系列"
          },
          {
            "id": "c2-jiangxi-5",
            "type": "normal",
            "name": "辣椒炒肉",
            "price": 14,
            "img": "assets/img/辣椒炒肉.png",
            "cat": "招牌现炒系列"
          },
          {
            "id": "c2-jiangxi-6",
            "type": "normal",
            "name": "农家一碗香",
            "price": 14,
            "img": "assets/img/农家一碗香.png",
            "cat": "招牌现炒系列"
          },
          {
            "id": "c2-jiangxi-7",
            "type": "normal",
            "name": "莴笋炒肉",
            "price": 14,
            "img": "assets/img/莴笋炒肉.png",
            "cat": "招牌现炒系列"
          },
          {
            "id": "c2-jiangxi-8",
            "type": "normal",
            "name": "芹菜炒肉",
            "price": 14,
            "img": "assets/img/芹菜炒肉.png",
            "cat": "招牌现炒系列"
          },
          {
            "id": "c2-jiangxi-9",
            "type": "normal",
            "name": "下饭香干炒肉",
            "price": 14,
            "img": "assets/img/下饭香干炒肉.png",
            "cat": "招牌现炒系列"
          },
          {
            "id": "c2-jiangxi-10",
            "type": "normal",
            "name": "萝卜干炒腊肉",
            "price": 16,
            "img": "assets/img/萝卜干炒腊肉.png",
            "cat": "招牌现炒系列"
          },
          {
            "id": "c2-jiangxi-11",
            "type": "normal",
            "name": "竹笋炒腊肉",
            "price": 16,
            "img": "assets/img/竹笋炒腊肉.png",
            "cat": "招牌现炒系列"
          },
          {
            "id": "c2-jiangxi-12",
            "type": "normal",
            "name": "小炒黄牛肉",
            "price": 17,
            "img": "assets/img/小炒黄牛肉.png",
            "cat": "招牌现炒系列"
          },
          {
            "id": "c2-jiangxi-13",
            "type": "normal",
            "name": "萝卜干干炒牛肉",
            "price": 17,
            "img": "assets/img/萝卜干干炒牛肉.png",
            "cat": "招牌现炒系列"
          },
          {
            "id": "c2-jiangxi-14",
            "type": "normal",
            "name": "香干回锅肉",
            "price": 16,
            "img": "assets/img/香干回锅肉.png",
            "cat": "招牌现炒系列"
          },
          {
            "id": "c2-jiangxi-15",
            "type": "normal",
            "name": "榨菜炒肉",
            "price": 14,
            "img": "assets/img/榨菜炒肉.png",
            "cat": "招牌现炒系列"
          },
          {
            "id": "c2-jiangxi-16",
            "type": "normal",
            "name": "招牌卤肉饭",
            "price": 15,
            "img": "assets/img/招牌卤肉饭.png",
            "cat": "卤肉饭系列"
          },
          {
            "id": "c2-jiangxi-17",
            "type": "normal",
            "name": "椒麻鸡丝饭",
            "price": 14,
            "img": "assets/img/椒麻鸡丝饭.png",
            "cat": "卤肉饭系列"
          },
          {
            "id": "c2-jiangxi-18",
            "type": "normal",
            "name": "招牌香肉饭",
            "price": 15,
            "img": "assets/img/招牌香肉饭.png",
            "cat": "卤肉饭系列"
          },
          {
            "id": "c2-jiangxi-19",
            "type": "normal",
            "name": "黑椒香菇鸡",
            "price": 14,
            "img": "assets/img/黑椒香菇鸡.png",
            "cat": "卤肉饭系列"
          },
          {
            "id": "c2-jiangxi-20",
            "type": "normal",
            "name": "卤香鸡腿饭",
            "price": 15,
            "img": "assets/img/卤香鸡腿饭.png",
            "cat": "卤肉饭系列"
          },
          {
            "id": "c2-jiangxi-21",
            "type": "normal",
            "name": "手切牛肉饭",
            "price": 17,
            "img": "assets/img/手切牛肉饭.png",
            "cat": "卤肉饭系列"
          },
          {
            "id": "c2-jiangxi-22",
            "type": "normal",
            "name": "糖醋青背鸡",
            "price": 14,
            "img": "assets/img/糖醋青背鸡.png",
            "cat": "卤肉饭系列"
          },
          {
            "id": "c2-jiangxi-23",
            "type": "normal",
            "name": "甜辣鸭翅根",
            "price": 14,
            "img": "assets/img/甜辣鸭翅根.png",
            "cat": "卤肉饭系列"
          },
          {
            "id": "c2-jiangxi-24",
            "type": "normal",
            "name": "卤汁肉卷饭",
            "price": 13,
            "img": "assets/img/卤汁肉卷饭.png",
            "cat": "卤肉饭系列"
          },
          {
            "id": "c2-jiangxi-25",
            "type": "normal",
            "name": "卤汁肉肠饭",
            "price": 13,
            "img": "assets/img/卤汁肉肠饭.png",
            "cat": "卤肉饭系列"
          },
          {
            "id": "c2-jiangxi-26",
            "type": "normal",
            "name": "糖醋小酥肉",
            "price": 14,
            "img": "assets/img/糖醋小酥肉.png",
            "cat": "卤肉饭系列"
          },
          {
            "id": "c2-jiangxi-27",
            "type": "normal",
            "name": "蒜香茄子",
            "price": 10,
            "img": "assets/img/蒜香茄子.png",
            "cat": "卤肉饭系列"
          },
          {
            "id": "c2-jiangxi-28",
            "type": "normal",
            "name": "辣卤面筋饭",
            "price": 10,
            "img": "assets/img/辣卤面筋饭.png",
            "cat": "卤肉饭系列"
          },
          {
            "id": "c2-jiangxi-29",
            "type": "normal",
            "name": "辣卤豇豆饭",
            "price": 10,
            "img": "assets/img/辣卤豇豆饭.png",
            "cat": "卤肉饭系列"
          },
          {
            "id": "c2-jiangxi-30",
            "type": "normal",
            "name": "孜然花菜饭",
            "price": 10,
            "img": "assets/img/孜然花菜饭.png",
            "cat": "卤肉饭系列"
          },
          {
            "id": "c2-jiangxi-31",
            "type": "normal",
            "name": "孜然土豆饭",
            "price": 10,
            "img": "assets/img/孜然土豆饭.png",
            "cat": "卤肉饭系列"
          }
        ]
      },
      {
        "id": "fengtian",
        "name": "奉天朱家小馆",
        "dishes": [
          {
            "id": "c2-fengtian-1",
            "type": "normal",
            "name": "小馆招牌牛肉面",
            "price": 16,
            "img": "assets/img/小馆招牌牛肉面.png",
            "cat": "小馆汤面",
            "note": "份"
          },
          {
            "id": "c2-fengtian-2",
            "type": "normal",
            "name": "小馆卤肉面",
            "price": 15,
            "img": "assets/img/小馆卤肉面.png",
            "cat": "小馆汤面",
            "note": "份"
          },
          {
            "id": "c2-fengtian-3",
            "type": "normal",
            "name": "小馆特色羊杂面",
            "price": 14,
            "img": "assets/img/小馆特色羊杂面.png",
            "cat": "小馆汤面",
            "note": "份"
          },
          {
            "id": "c2-fengtian-4",
            "type": "normal",
            "name": "小馆辣肉面",
            "price": 13,
            "img": "assets/img/小馆辣肉面.png",
            "cat": "小馆汤面",
            "note": "份"
          },
          {
            "id": "c2-fengtian-5",
            "type": "normal",
            "name": "小馆猪排面",
            "price": 13,
            "img": "assets/img/小馆猪排面.png",
            "cat": "小馆汤面",
            "note": "份"
          },
          {
            "id": "c2-fengtian-6",
            "type": "normal",
            "name": "小馆鸡柳面",
            "price": 13,
            "img": "assets/img/小馆鸡柳面.png",
            "cat": "小馆汤面",
            "note": "份"
          },
          {
            "id": "c2-fengtian-7",
            "type": "normal",
            "name": "小馆肉燥汤面",
            "price": 11,
            "img": "assets/img/小馆肉燥汤面.png",
            "cat": "小馆汤面",
            "note": "份"
          },
          {
            "id": "c2-fengtian-8",
            "type": "normal",
            "name": "小馆酸豆角汤面",
            "price": 11,
            "img": "assets/img/小馆酸豆角汤面.png",
            "cat": "小馆汤面",
            "note": "份"
          },
          {
            "id": "c2-fengtian-9",
            "type": "normal",
            "name": "小馆酸菜汤面",
            "price": 11,
            "img": "assets/img/小馆酸菜汤面.png",
            "cat": "小馆汤面",
            "note": "份"
          },
          {
            "id": "c2-fengtian-10",
            "type": "normal",
            "name": "小馆清汤面",
            "price": 9,
            "img": "assets/img/小馆清汤面.png",
            "cat": "小馆汤面",
            "note": "份"
          },
          {
            "id": "c2-fengtian-11",
            "type": "normal",
            "name": "小馆辣肉拌面",
            "price": 13,
            "img": "assets/img/小馆辣肉拌面.png",
            "cat": "小馆拌面",
            "note": "份"
          },
          {
            "id": "c2-fengtian-12",
            "type": "normal",
            "name": "鸡柳麻辣拌面",
            "price": 12,
            "img": "assets/img/鸡柳麻辣拌面.png",
            "cat": "小馆拌面",
            "note": "份"
          },
          {
            "id": "c2-fengtian-13",
            "type": "normal",
            "name": "猪排麻酱拌面",
            "price": 13,
            "img": "assets/img/猪排麻酱拌面.png",
            "cat": "麻酱系列",
            "note": "份"
          },
          {
            "id": "c2-fengtian-14",
            "type": "normal",
            "name": "小馆麻酱鸡丝拌面",
            "price": 12,
            "img": "assets/img/小馆麻酱鸡丝拌面.png",
            "cat": "麻酱系列",
            "note": "份"
          },
          {
            "id": "c2-fengtian-15",
            "type": "normal",
            "name": "小馆肉燥拌面",
            "price": 12,
            "img": "assets/img/小馆肉燥拌面.png",
            "cat": "麻酱系列",
            "note": "份"
          },
          {
            "id": "c2-fengtian-16",
            "type": "normal",
            "name": "小馆酸豆角拌面",
            "price": 12,
            "img": "assets/img/小馆酸豆角拌面.png",
            "cat": "麻酱系列",
            "note": "份"
          },
          {
            "id": "c2-fengtian-17",
            "type": "normal",
            "name": "小馆酸菜拌面",
            "price": 12,
            "img": "assets/img/小馆酸菜拌面.png",
            "cat": "麻酱系列",
            "note": "份"
          },
          {
            "id": "c2-fengtian-18",
            "type": "normal",
            "name": "猪排麻辣拌面",
            "price": 13,
            "img": "assets/img/猪排麻辣拌面.png",
            "cat": "麻辣系列",
            "note": "份"
          },
          {
            "id": "c2-fengtian-19",
            "type": "normal",
            "name": "小馆麻辣拌面",
            "price": 9,
            "img": "assets/img/小馆麻辣拌面.png",
            "cat": "麻辣系列",
            "note": "份"
          },
          {
            "id": "c2-fengtian-20",
            "type": "normal",
            "name": "小馆混合炸酱面",
            "price": 12,
            "img": "assets/img/小馆混合炸酱面.png",
            "cat": "小馆炸酱面",
            "note": "份"
          },
          {
            "id": "c2-fengtian-21",
            "type": "normal",
            "name": "小馆招牌炸酱面",
            "price": 12,
            "img": "assets/img/小馆招牌炸酱面.png",
            "cat": "小馆炸酱面",
            "note": "份"
          },
          {
            "id": "c2-fengtian-22",
            "type": "normal",
            "name": "小馆鸡蛋炸酱面",
            "price": 10,
            "img": "assets/img/小馆鸡蛋炸酱面.png",
            "cat": "小馆炸酱面",
            "note": "份"
          },
          {
            "id": "c2-fengtian-23",
            "type": "normal",
            "name": "辣番茄鸡蛋拌面",
            "price": 10,
            "img": "assets/img/辣番茄鸡蛋拌面.png",
            "cat": "小馆炸酱面",
            "note": "份"
          },
          {
            "id": "c2-fengtian-24",
            "type": "normal",
            "name": "加牛肉",
            "price": 7,
            "img": "assets/img/加牛肉.png",
            "cat": "卤味·加料",
            "note": "份"
          },
          {
            "id": "c2-fengtian-25",
            "type": "normal",
            "name": "日式猪排",
            "price": 7,
            "img": "assets/img/日式猪排.png",
            "cat": "卤味·加料",
            "note": "片"
          },
          {
            "id": "c2-fengtian-26",
            "type": "normal",
            "name": "卤五花肉",
            "price": 7,
            "img": "assets/img/卤五花肉.png",
            "cat": "卤味·加料",
            "note": "片"
          },
          {
            "id": "c2-fengtian-27",
            "type": "normal",
            "name": "加羊杂",
            "price": 6,
            "img": "assets/img/加羊杂.png",
            "cat": "卤味·加料",
            "note": "份"
          },
          {
            "id": "c2-fengtian-28",
            "type": "normal",
            "name": "卤虎皮鸭腿",
            "price": 6,
            "img": "assets/img/卤虎皮鸭腿.png",
            "cat": "卤味·加料",
            "note": "个"
          },
          {
            "id": "c2-fengtian-29",
            "type": "normal",
            "name": "加辣肉",
            "price": 5,
            "img": "assets/img/加辣肉.png",
            "cat": "卤味·加料",
            "note": "份"
          },
          {
            "id": "c2-fengtian-30",
            "type": "normal",
            "name": "鸡腿",
            "price": 5,
            "img": "assets/img/鸡腿.png",
            "cat": "卤味·加料",
            "note": "个"
          },
          {
            "id": "c2-fengtian-31",
            "type": "normal",
            "name": "黄金鸡柳",
            "price": 5,
            "img": "assets/img/黄金鸡柳.png",
            "cat": "卤味·加料",
            "note": "份"
          },
          {
            "id": "c2-fengtian-32",
            "type": "normal",
            "name": "加鸡丝",
            "price": 4,
            "img": "assets/img/加鸡丝.png",
            "cat": "卤味·加料",
            "note": "份"
          },
          {
            "id": "c2-fengtian-33",
            "type": "normal",
            "name": "卤肉肠",
            "price": 4,
            "img": "assets/img/卤肉肠.png",
            "cat": "卤味·加料",
            "note": "根"
          },
          {
            "id": "c2-fengtian-34",
            "type": "normal",
            "name": "淀粉肠",
            "price": 3,
            "img": "assets/img/淀粉肠.png",
            "cat": "卤味·加料",
            "note": "根"
          },
          {
            "id": "c2-fengtian-35",
            "type": "normal",
            "name": "狮子头",
            "price": 2,
            "img": "assets/img/狮子头.png",
            "cat": "卤味·加料",
            "note": "个"
          },
          {
            "id": "c2-fengtian-36",
            "type": "normal",
            "name": "炸蛋",
            "price": 2,
            "img": "assets/img/炸蛋.png",
            "cat": "卤味·加料",
            "note": "个"
          },
          {
            "id": "c2-fengtian-37",
            "type": "normal",
            "name": "辣椒",
            "price": 2,
            "img": "assets/img/辣椒.png",
            "cat": "卤味·加料",
            "note": "根"
          },
          {
            "id": "c2-fengtian-38",
            "type": "normal",
            "name": "卤干豆腐",
            "price": 2,
            "img": "assets/img/卤干豆腐.png",
            "cat": "卤味·加料",
            "note": "片"
          },
          {
            "id": "c2-fengtian-39",
            "type": "normal",
            "name": "卤肠",
            "price": 2,
            "img": "assets/img/卤肠.png",
            "cat": "卤味·加料",
            "note": "根"
          },
          {
            "id": "c2-fengtian-40",
            "type": "normal",
            "name": "卤蛋",
            "price": 2,
            "img": "assets/img/卤蛋.png",
            "cat": "卤味·加料",
            "note": "个"
          },
          {
            "id": "c2-fengtian-41",
            "type": "normal",
            "name": "卤豆腐",
            "price": 2,
            "img": "assets/img/卤豆腐.png",
            "cat": "卤味·加料",
            "note": "片"
          }
        ]
      },
      {
        "id": "salad",
        "name": "四季轻食 SALAD SEASON",
        "dishes": [
          {
            "id": "c2-salad-1",
            "type": "normal",
            "name": "经典鸡排 大满配",
            "price": 14.9,
            "img": "assets/img/经典鸡排 大满配.png",
            "cat": "大满配",
            "note": "413 KCAL"
          },
          {
            "id": "c2-salad-2",
            "type": "normal",
            "name": "孜香蜜汁鸡排 大满配",
            "price": 14.9,
            "img": "assets/img/孜香蜜汁鸡排 大满配.png",
            "cat": "大满配",
            "note": "440 KCAL"
          },
          {
            "id": "c2-salad-3",
            "type": "normal",
            "name": "干烤香骨鸡 大满配",
            "price": 14.9,
            "img": "assets/img/干烤香骨鸡 大满配.png",
            "cat": "大满配",
            "note": "415 KCAL"
          },
          {
            "id": "c2-salad-4",
            "type": "normal",
            "name": "去皮鸡腿排 大满配",
            "price": 14.9,
            "img": "assets/img/去皮鸡腿排 大满配.png",
            "cat": "大满配",
            "note": "493 KCAL"
          },
          {
            "id": "c2-salad-5",
            "type": "normal",
            "name": "柠香鸡丝 大满配",
            "price": 14.9,
            "img": "assets/img/柠香鸡丝 大满配.png",
            "cat": "大满配",
            "note": "378 KCAL"
          },
          {
            "id": "c2-salad-6",
            "type": "normal",
            "name": "黑椒牛肉饼 大满配",
            "price": 15.9,
            "img": "assets/img/黑椒牛肉饼 大满配.png",
            "cat": "大满配",
            "note": "480 KCAL"
          },
          {
            "id": "c2-salad-7",
            "type": "normal",
            "name": "嫩烤鱼肉饼 大满配",
            "price": 15.9,
            "img": "assets/img/嫩烤鱼肉饼 大满配.png",
            "cat": "大满配",
            "note": "395 KCAL"
          },
          {
            "id": "c2-salad-8",
            "type": "normal",
            "name": "照烧鸡肉饭（招牌）",
            "price": 14.9,
            "img": "assets/img/照烧鸡肉饭（招牌）.png",
            "cat": "饭类",
            "note": "413 KCAL"
          },
          {
            "id": "c2-salad-9",
            "type": "normal",
            "name": "金枪鱼拌饭（镇店）",
            "price": 15.9,
            "img": "assets/img/金枪鱼拌饭（镇店）.png",
            "cat": "饭类",
            "note": "420 KCAL"
          },
          {
            "id": "c2-salad-10",
            "type": "normal",
            "name": "日式烧牛肉",
            "price": 16.9,
            "img": "assets/img/日式烧牛肉.png",
            "cat": "饭类",
            "note": "460 KCAL"
          },
          {
            "id": "c2-salad-11",
            "type": "normal",
            "name": "日式烧牛肉拼鸡排饭（新品）",
            "price": 15.9,
            "img": "assets/img/日式烧牛肉拼鸡排饭（新品）.png",
            "cat": "饭类",
            "note": "470 KCAL"
          },
          {
            "id": "c2-salad-12",
            "type": "normal",
            "name": "意式番茄肉酱意面",
            "price": 11.9,
            "img": "assets/img/意式番茄肉酱意面.png",
            "cat": "意面",
            "note": "484 KCAL"
          },
          {
            "id": "c2-salad-13",
            "type": "normal",
            "name": "法式黑椒肉酱意面",
            "price": 11.9,
            "img": "assets/img/法式黑椒肉酱意面.png",
            "cat": "意面",
            "note": "464 KCAL"
          }
        ]
      },
      {
        "id": "chenxiao",
        "name": "陈小记绍兴小吃",
        "dishes": [
          {
            "id": "c2-chenxiao-1",
            "type": "normal",
            "name": "炸鸡馍",
            "price": 9,
            "img": "assets/img/炸鸡馍.png",
            "cat": "主食推荐",
            "note": "馍+炸鸡+土豆+生菜"
          },
          {
            "id": "c2-chenxiao-2",
            "type": "normal",
            "name": "烤冷面",
            "price": 8,
            "img": "assets/img/烤冷面.png",
            "cat": "主食推荐",
            "note": "冷面皮+鸡蛋+培根+生菜+洋葱"
          },
          {
            "id": "c2-chenxiao-3",
            "type": "normal",
            "name": "煎饼卷油条",
            "price": 8,
            "img": "assets/img/煎饼卷油条.png",
            "cat": "主食推荐",
            "note": "煎饼+油条"
          },
          {
            "id": "c2-chenxiao-4",
            "type": "normal",
            "name": "鸡蛋灌饼 & 手抓饼",
            "price": 6,
            "img": "assets/img/鸡蛋灌饼 & 手抓饼.png",
            "cat": "主食推荐",
            "note": "饼+鸡蛋+豆皮+生菜"
          },
          {
            "id": "c2-chenxiao-5",
            "type": "normal",
            "name": "杂粮煎饼",
            "price": 6,
            "img": "assets/img/杂粮煎饼.png",
            "cat": "主食推荐",
            "note": "煎饼+鸡蛋+薄脆+生菜+香菜+小葱"
          },
          {
            "id": "c2-chenxiao-6",
            "type": "normal",
            "name": "芝士火鸡面烤冷面",
            "price": 13,
            "img": "assets/img/芝士火鸡面烤冷面.png",
            "cat": "火鸡面系列",
            "note": "烤冷面+芝士+火鸡面"
          },
          {
            "id": "c2-chenxiao-7",
            "type": "normal",
            "name": "蛋包芝士火鸡面",
            "price": 12,
            "img": "assets/img/蛋包芝士火鸡面.png",
            "cat": "火鸡面系列",
            "note": "蛋皮+芝士+火鸡面"
          },
          {
            "id": "c2-chenxiao-8",
            "type": "normal",
            "name": "芝士",
            "price": 5,
            "img": "assets/img/芝士.png",
            "cat": "加料",
            "note": "份"
          }
        ]
      },
      {
        "id": "lanqing",
        "name": "兰青宫 牛肉面·盖浇饭",
        "dishes": [
          {
            "id": "c2-lanqing-1",
            "type": "normal",
            "name": "大盘鸡拌面",
            "price": 16,
            "img": "assets/img/大盘鸡拌面.png",
            "cat": "特色拌面"
          },
          {
            "id": "c2-lanqing-2",
            "type": "normal",
            "name": "土豆牛肉拌面",
            "price": 16,
            "img": "assets/img/土豆牛肉拌面.png",
            "cat": "特色拌面"
          },
          {
            "id": "c2-lanqing-3",
            "type": "normal",
            "name": "青椒牛肉拌面",
            "price": 16,
            "img": "assets/img/青椒牛肉拌面.png",
            "cat": "特色拌面"
          },
          {
            "id": "c2-lanqing-4",
            "type": "normal",
            "name": "辣子鸡拌面",
            "price": 16,
            "img": "assets/img/辣子鸡拌面.png",
            "cat": "特色拌面"
          },
          {
            "id": "c2-lanqing-5",
            "type": "normal",
            "name": "木耳牛肉拌面",
            "price": 16,
            "img": "assets/img/木耳牛肉拌面.png",
            "cat": "特色拌面"
          },
          {
            "id": "c2-lanqing-6",
            "type": "normal",
            "name": "宫爆鸡丁拌面",
            "price": 16,
            "img": "assets/img/宫爆鸡丁拌面.png",
            "cat": "特色拌面"
          },
          {
            "id": "c2-lanqing-7",
            "type": "normal",
            "name": "煸炒拉条子",
            "price": 15,
            "img": "assets/img/煸炒拉条子.png",
            "cat": "特色拌面"
          },
          {
            "id": "c2-lanqing-8",
            "type": "normal",
            "name": "肉沫拌面",
            "price": 15,
            "img": "assets/img/肉沫拌面.png",
            "cat": "特色拌面"
          },
          {
            "id": "c2-lanqing-9",
            "type": "normal",
            "name": "番茄鸡蛋拌面",
            "price": 14,
            "img": "assets/img/番茄鸡蛋拌面.png",
            "cat": "特色拌面"
          },
          {
            "id": "c2-lanqing-10",
            "type": "normal",
            "name": "土豆牛肉盖浇饭",
            "price": 16,
            "img": "assets/img/土豆牛肉盖浇饭.png",
            "cat": "现炒盖浇饭"
          },
          {
            "id": "c2-lanqing-11",
            "type": "normal",
            "name": "青椒牛肉盖浇饭",
            "price": 16,
            "img": "assets/img/青椒牛肉盖浇饭.png",
            "cat": "现炒盖浇饭"
          },
          {
            "id": "c2-lanqing-12",
            "type": "normal",
            "name": "木耳牛肉盖浇饭",
            "price": 16,
            "img": "assets/img/木耳牛肉盖浇饭.png",
            "cat": "现炒盖浇饭"
          },
          {
            "id": "c2-lanqing-13",
            "type": "normal",
            "name": "宫爆鸡丁盖浇饭",
            "price": 16,
            "img": "assets/img/宫爆鸡丁盖浇饭.png",
            "cat": "现炒盖浇饭"
          },
          {
            "id": "c2-lanqing-14",
            "type": "normal",
            "name": "辣子鸡盖浇饭",
            "price": 16,
            "img": "assets/img/辣子鸡盖浇饭.png",
            "cat": "现炒盖浇饭"
          },
          {
            "id": "c2-lanqing-15",
            "type": "normal",
            "name": "大盘鸡盖浇饭",
            "price": 16,
            "img": "assets/img/大盘鸡盖浇饭.png",
            "cat": "现炒盖浇饭"
          },
          {
            "id": "c2-lanqing-16",
            "type": "normal",
            "name": "肉沫盖浇饭",
            "price": 15,
            "img": "assets/img/肉沫盖浇饭.png",
            "cat": "现炒盖浇饭"
          },
          {
            "id": "c2-lanqing-17",
            "type": "normal",
            "name": "番茄鸡蛋盖浇饭",
            "price": 14,
            "img": "assets/img/番茄鸡蛋盖浇饭.png",
            "cat": "现炒盖浇饭"
          },
          {
            "id": "c2-lanqing-18",
            "type": "normal",
            "name": "兰州炒饭",
            "price": 10,
            "img": "assets/img/兰州炒饭.png",
            "cat": "现炒盖浇饭"
          },
          {
            "id": "c2-lanqing-19",
            "type": "normal",
            "name": "蛋炒饭",
            "price": 9,
            "img": "assets/img/蛋炒饭.png",
            "cat": "现炒盖浇饭"
          },
          {
            "id": "c2-lanqing-20",
            "type": "normal",
            "name": "红烧牛肉面",
            "price": 15,
            "img": "assets/img/红烧牛肉面.png",
            "cat": "营养汤面"
          },
          {
            "id": "c2-lanqing-21",
            "type": "normal",
            "name": "酸菜牛肉面",
            "price": 15,
            "img": "assets/img/酸菜牛肉面.png",
            "cat": "营养汤面"
          },
          {
            "id": "c2-lanqing-22",
            "type": "normal",
            "name": "麻辣牛肉面",
            "price": 15,
            "img": "assets/img/麻辣牛肉面.png",
            "cat": "营养汤面"
          },
          {
            "id": "c2-lanqing-23",
            "type": "normal",
            "name": "原味牛肉面",
            "price": 12,
            "img": "assets/img/原味牛肉面.png",
            "cat": "营养汤面"
          },
          {
            "id": "c2-lanqing-24",
            "type": "normal",
            "name": "肉夹馍",
            "price": 8,
            "img": "assets/img/肉夹馍.png",
            "cat": "西北小吃"
          },
          {
            "id": "c2-lanqing-25",
            "type": "normal",
            "name": "五香鸡腿",
            "price": 6,
            "img": "assets/img/五香鸡腿.png",
            "cat": "西北小吃"
          },
          {
            "id": "c2-lanqing-26",
            "type": "normal",
            "name": "香辣丸子",
            "price": 3,
            "img": "assets/img/香辣丸子.png",
            "cat": "西北小吃"
          },
          {
            "id": "c2-lanqing-27",
            "type": "normal",
            "name": "风味香肠",
            "price": 3,
            "img": "assets/img/风味香肠.png",
            "cat": "西北小吃"
          },
          {
            "id": "c2-lanqing-28",
            "type": "normal",
            "name": "现煎蛋",
            "price": 2,
            "img": "assets/img/现煎蛋.png",
            "cat": "西北小吃"
          },
          {
            "id": "c2-lanqing-29",
            "type": "normal",
            "name": "茶叶蛋",
            "price": 2,
            "img": "assets/img/茶叶蛋.png",
            "cat": "西北小吃"
          },
          {
            "id": "c2-lanqing-30",
            "type": "normal",
            "name": "捞汁豆干",
            "price": 1,
            "img": "assets/img/捞汁豆干.png",
            "cat": "西北小吃"
          }
        ]
      },
      {
        "id": "chenbai",
        "name": "陈佰固 金牌猪脚饭",
        "dishes": [
          {
            "id": "c2-chenbai-1",
            "type": "normal",
            "name": "脆皮鸭饭",
            "price": 16,
            "img": "assets/img/脆皮鸭饭.png",
            "cat": "饭类"
          },
          {
            "id": "c2-chenbai-2",
            "type": "normal",
            "name": "金牌猪脚饭",
            "price": 17,
            "img": "assets/img/金牌猪脚饭.png",
            "cat": "饭类"
          },
          {
            "id": "c2-chenbai-3",
            "type": "normal",
            "name": "脆皮鸡饭",
            "price": 16,
            "img": "assets/img/脆皮鸡饭.png",
            "cat": "饭类"
          },
          {
            "id": "c2-chenbai-4",
            "type": "normal",
            "name": "香酥鸡排饭",
            "price": 14,
            "img": "assets/img/香酥鸡排饭.png",
            "cat": "饭类"
          },
          {
            "id": "c2-chenbai-5",
            "type": "normal",
            "name": "黑椒鸡扒饭",
            "price": 14,
            "img": "assets/img/黑椒鸡扒饭.png",
            "cat": "饭类"
          },
          {
            "id": "c2-chenbai-6",
            "type": "normal",
            "name": "鲍汁滑鸡饭",
            "price": 14,
            "img": "assets/img/鲍汁滑鸡饭.png",
            "cat": "饭类"
          },
          {
            "id": "c2-chenbai-7",
            "type": "normal",
            "name": "辣椒炒肉饭",
            "price": 14,
            "img": "assets/img/辣椒炒肉饭.png",
            "cat": "饭类"
          },
          {
            "id": "c2-chenbai-8",
            "type": "normal",
            "name": "水煮肉片饭",
            "price": 14,
            "img": "assets/img/水煮肉片饭.png",
            "cat": "饭类"
          },
          {
            "id": "c2-chenbai-9",
            "type": "normal",
            "name": "卤香大肉肠饭",
            "price": 12,
            "img": "assets/img/卤香大肉肠饭.png",
            "cat": "饭类"
          },
          {
            "id": "c2-chenbai-10",
            "type": "normal",
            "name": "烟熏鸭腿饭",
            "price": 13,
            "img": "assets/img/烟熏鸭腿饭.png",
            "cat": "饭类"
          },
          {
            "id": "c2-chenbai-11",
            "type": "normal",
            "name": "黑金卤肉饭",
            "price": 15,
            "img": "assets/img/黑金卤肉饭.png",
            "cat": "饭类"
          },
          {
            "id": "c2-chenbai-12",
            "type": "normal",
            "name": "香卤鸭腿饭",
            "price": 15,
            "img": "assets/img/香卤鸭腿饭.png",
            "cat": "饭类"
          },
          {
            "id": "c2-chenbai-13",
            "type": "normal",
            "name": "大块牛肉饭",
            "price": 16,
            "img": "assets/img/大块牛肉饭.png",
            "cat": "饭类"
          },
          {
            "id": "c2-chenbai-14",
            "type": "normal",
            "name": "鸡腿",
            "price": 8,
            "img": "assets/img/鸡腿.png",
            "cat": "加料"
          },
          {
            "id": "c2-chenbai-15",
            "type": "normal",
            "name": "鸡翅",
            "price": 6,
            "img": "assets/img/鸡翅.png",
            "cat": "加料"
          },
          {
            "id": "c2-chenbai-16",
            "type": "normal",
            "name": "大肉肠",
            "price": 6,
            "img": "assets/img/大肉肠.png",
            "cat": "加料"
          },
          {
            "id": "c2-chenbai-17",
            "type": "normal",
            "name": "果汁",
            "price": 1,
            "img": "assets/img/果汁.png",
            "cat": "饮品",
            "note": "元/杯，店内消费免费"
          }
        ]
      },
      {
        "id": "chaoyang",
        "name": "朝阳洲 牛肉粉面",
        "dishes": [
          {
            "id": "c2-chaoyang-1",
            "type": "normal",
            "name": "葱爆黄牛肉汤面/粉",
            "price": 16,
            "img": "assets/img/葱爆黄牛肉汤面_粉.png",
            "cat": "招牌推荐",
            "note": "面/粉同价"
          },
          {
            "id": "c2-chaoyang-2",
            "type": "normal",
            "name": "蟹黄肉酱拌面/粉",
            "price": 14,
            "img": "assets/img/蟹黄肉酱拌面_粉.png",
            "cat": "招牌推荐",
            "note": "面/粉同价"
          },
          {
            "id": "c2-chaoyang-3",
            "type": "normal",
            "name": "招牌肉酱拌面/粉",
            "price": 13,
            "img": "assets/img/招牌肉酱拌面_粉.png",
            "cat": "招牌推荐",
            "note": "面/粉同价"
          },
          {
            "id": "c2-chaoyang-4",
            "type": "normal",
            "name": "黑椒腿排拌面/粉",
            "price": 14,
            "img": "assets/img/黑椒腿排拌面_粉.png",
            "cat": "拌面/粉系列"
          },
          {
            "id": "c2-chaoyang-5",
            "type": "normal",
            "name": "椒麻鸡丝拌面/粉",
            "price": 13,
            "img": "assets/img/椒麻鸡丝拌面_粉.png",
            "cat": "拌面/粉系列"
          },
          {
            "id": "c2-chaoyang-6",
            "type": "normal",
            "name": "巴西烤肉拌面/粉",
            "price": 13,
            "img": "assets/img/巴西烤肉拌面_粉.png",
            "cat": "拌面/粉系列"
          },
          {
            "id": "c2-chaoyang-7",
            "type": "normal",
            "name": "水煮肉片拌面/粉",
            "price": 13,
            "img": "assets/img/水煮肉片拌面_粉.png",
            "cat": "拌面/粉系列"
          },
          {
            "id": "c2-chaoyang-8",
            "type": "normal",
            "name": "鱼香肉丝拌面/粉",
            "price": 12,
            "img": "assets/img/鱼香肉丝拌面_粉.png",
            "cat": "拌面/粉系列"
          },
          {
            "id": "c2-chaoyang-9",
            "type": "normal",
            "name": "经典杂酱拌面/粉",
            "price": 11,
            "img": "assets/img/经典杂酱拌面_粉.png",
            "cat": "拌面/粉系列"
          },
          {
            "id": "c2-chaoyang-10",
            "type": "normal",
            "name": "芝麻酱拌面",
            "price": 9,
            "img": "assets/img/芝麻酱拌面.png",
            "cat": "拌面/粉系列"
          },
          {
            "id": "c2-chaoyang-11",
            "type": "normal",
            "name": "南昌拌粉",
            "price": 8,
            "img": "assets/img/南昌拌粉.png",
            "cat": "拌面/粉系列"
          },
          {
            "id": "c2-chaoyang-12",
            "type": "normal",
            "name": "葱油拌面/粉",
            "price": 7,
            "img": "assets/img/葱油拌面_粉.png",
            "cat": "拌面/粉系列"
          },
          {
            "id": "c2-chaoyang-13",
            "type": "normal",
            "name": "水煮肉片汤面/粉",
            "price": 13,
            "img": "assets/img/水煮肉片汤面_粉.png",
            "cat": "特色汤面/粉系列"
          },
          {
            "id": "c2-chaoyang-14",
            "type": "normal",
            "name": "酸菜肉片汤面/粉",
            "price": 12,
            "img": "assets/img/酸菜肉片汤面_粉.png",
            "cat": "特色汤面/粉系列"
          },
          {
            "id": "c2-chaoyang-15",
            "type": "normal",
            "name": "香菇肉丝汤面/粉",
            "price": 12,
            "img": "assets/img/香菇肉丝汤面_粉.png",
            "cat": "特色汤面/粉系列"
          },
          {
            "id": "c2-chaoyang-16",
            "type": "normal",
            "name": "肉酱油泼面",
            "price": 14,
            "img": "assets/img/肉酱油泼面.png",
            "cat": "油泼面系列"
          },
          {
            "id": "c2-chaoyang-17",
            "type": "normal",
            "name": "椒麻鸡丝油泼面",
            "price": 14,
            "img": "assets/img/椒麻鸡丝油泼面.png",
            "cat": "油泼面系列"
          },
          {
            "id": "c2-chaoyang-18",
            "type": "normal",
            "name": "炸酱油泼面",
            "price": 12,
            "img": "assets/img/炸酱油泼面.png",
            "cat": "油泼面系列"
          },
          {
            "id": "c2-chaoyang-19",
            "type": "normal",
            "name": "陕西油泼面",
            "price": 10,
            "img": "assets/img/陕西油泼面.png",
            "cat": "油泼面系列"
          },
          {
            "id": "c2-chaoyang-20",
            "type": "normal",
            "name": "蟹黄土豆泥拌面/粉",
            "price": 14,
            "img": "assets/img/蟹黄土豆泥拌面_粉.png",
            "cat": "土豆泥系列"
          },
          {
            "id": "c2-chaoyang-21",
            "type": "normal",
            "name": "肉酱土豆泥拌面/粉",
            "price": 13,
            "img": "assets/img/肉酱土豆泥拌面_粉.png",
            "cat": "土豆泥系列"
          },
          {
            "id": "c2-chaoyang-22",
            "type": "normal",
            "name": "炸酱土豆泥拌面/粉",
            "price": 11,
            "img": "assets/img/炸酱土豆泥拌面_粉.png",
            "cat": "土豆泥系列"
          },
          {
            "id": "c2-chaoyang-23",
            "type": "normal",
            "name": "网红土豆泥拌面/粉",
            "price": 9,
            "img": "assets/img/网红土豆泥拌面_粉.png",
            "cat": "土豆泥系列"
          },
          {
            "id": "c2-chaoyang-24",
            "type": "normal",
            "name": "腿排（大份）",
            "price": 8,
            "img": "assets/img/腿排（大份）.png",
            "cat": "必点小吃"
          },
          {
            "id": "c2-chaoyang-25",
            "type": "normal",
            "name": "大肉肠",
            "price": 4,
            "img": "assets/img/大肉肠.png",
            "cat": "必点小吃"
          },
          {
            "id": "c2-chaoyang-26",
            "type": "normal",
            "name": "腿排（小份）",
            "price": 4,
            "img": "assets/img/腿排（小份）.png",
            "cat": "必点小吃"
          },
          {
            "id": "c2-chaoyang-27",
            "type": "normal",
            "name": "淀粉肠",
            "price": 3,
            "img": "assets/img/淀粉肠.png",
            "cat": "必点小吃"
          },
          {
            "id": "c2-chaoyang-28",
            "type": "normal",
            "name": "脆骨肠",
            "price": 3,
            "img": "assets/img/脆骨肠.png",
            "cat": "必点小吃"
          },
          {
            "id": "c2-chaoyang-29",
            "type": "normal",
            "name": "兰花串",
            "price": 2.5,
            "img": "assets/img/兰花串.png",
            "cat": "必点小吃"
          },
          {
            "id": "c2-chaoyang-30",
            "type": "normal",
            "name": "煎蛋",
            "price": 2,
            "img": "assets/img/煎蛋.png",
            "cat": "必点小吃"
          },
          {
            "id": "c2-chaoyang-31",
            "type": "normal",
            "name": "卤蛋",
            "price": 2,
            "img": "assets/img/卤蛋.png",
            "cat": "必点小吃"
          },
          {
            "id": "c2-chaoyang-32",
            "type": "normal",
            "name": "豆干",
            "price": 1.5,
            "img": "assets/img/豆干.png",
            "cat": "必点小吃"
          },
          {
            "id": "c2-chaoyang-33",
            "type": "normal",
            "name": "牛肉丸",
            "price": 1,
            "img": "assets/img/牛肉丸.png",
            "cat": "必点小吃"
          },
          {
            "id": "c2-chaoyang-34",
            "type": "normal",
            "name": "鱼丸",
            "price": 1,
            "img": "assets/img/鱼丸.png",
            "cat": "必点小吃"
          },
          {
            "id": "c2-chaoyang-35",
            "type": "normal",
            "name": "自选水饺（250 克）",
            "price": 8.9,
            "img": "assets/img/自选水饺（250 克）.png",
            "cat": "相杰·自选",
            "note": "元/250克"
          },
          {
            "id": "c2-chaoyang-36",
            "type": "normal",
            "name": "自选汤圆（250 克，福明叽黑芝麻）",
            "price": 8.9,
            "img": "assets/img/自选汤圆（250 克，福明叽黑芝麻）.png",
            "cat": "相杰·自选",
            "note": "元/250克"
          }
        ]
      },
      {
        "id": "malatang",
        "name": "西蜀毛哥麻辣烫",
        "special": "malatang",
        "dishes": []
      }
    ]
  },

  c3: {
    "id": "c3",
    "name": "三食堂",
    "hotpot": {
      "bases": [
        {
          "id": "hp-base-1",
          "name": "大锅",
          "price": 22,
          "img": "assets/img/大锅.png",
          "note": "口味可选三鲜/番茄/麻辣"
        },
        {
          "id": "hp-base-2",
          "name": "大锅（鸳鸯锅）",
          "price": 24,
          "img": "assets/img/大锅（鸳鸯锅）.png",
          "note": "口味可选三鲜/番茄/麻辣"
        },
        {
          "id": "hp-base-3",
          "name": "小锅",
          "price": 8,
          "img": "assets/img/小锅.png",
          "note": "口味可选三鲜/番茄/麻辣"
        }
      ],
      "groups": [
        {
          "name": "火锅菜品",
          "items": [
            {
              "id": "hp-1",
              "name": "方便面",
              "price": 2.5,
              "img": "assets/img/方便面.png"
            },
            {
              "id": "hp-2",
              "name": "菠菜面",
              "price": 2.5,
              "img": "assets/img/菠菜面.png"
            },
            {
              "id": "hp-3",
              "name": "手工滑面",
              "price": 3,
              "img": "assets/img/手工滑面.png"
            },
            {
              "id": "hp-4",
              "name": "青菜",
              "price": 1,
              "img": "assets/img/青菜.png"
            },
            {
              "id": "hp-5",
              "name": "菠菜",
              "price": 2.5,
              "img": "assets/img/菠菜.png"
            },
            {
              "id": "hp-6",
              "name": "毛毛菜",
              "price": 2,
              "img": "assets/img/毛毛菜.png"
            },
            {
              "id": "hp-7",
              "name": "娃娃菜",
              "price": 2.5,
              "img": "assets/img/娃娃菜.png"
            },
            {
              "id": "hp-8",
              "name": "香蒿",
              "price": 2.5,
              "img": "assets/img/香蒿.png"
            },
            {
              "id": "hp-9",
              "name": "香菜",
              "price": 2.5,
              "img": "assets/img/香菜.png"
            },
            {
              "id": "hp-10",
              "name": "豆腐",
              "price": 2,
              "img": "assets/img/豆腐.png"
            },
            {
              "id": "hp-11",
              "name": "海带",
              "price": 3,
              "img": "assets/img/海带.png"
            },
            {
              "id": "hp-12",
              "name": "土豆",
              "price": 2,
              "img": "assets/img/土豆.png"
            },
            {
              "id": "hp-13",
              "name": "藕",
              "price": 2.5,
              "img": "assets/img/藕.png"
            },
            {
              "id": "hp-14",
              "name": "西兰花",
              "price": 2.5,
              "img": "assets/img/西兰花.png"
            },
            {
              "id": "hp-15",
              "name": "冬瓜",
              "price": 2,
              "img": "assets/img/冬瓜.png"
            },
            {
              "id": "hp-16",
              "name": "金针菇",
              "price": 2.5,
              "img": "assets/img/金针菇.png"
            },
            {
              "id": "hp-17",
              "name": "香菇",
              "price": 2.5,
              "img": "assets/img/香菇.png"
            },
            {
              "id": "hp-18",
              "name": "平菇",
              "price": 2.5,
              "img": "assets/img/平菇.png"
            },
            {
              "id": "hp-19",
              "name": "鸭血",
              "price": 2.5,
              "img": "assets/img/鸭血.png"
            },
            {
              "id": "hp-20",
              "name": "黄豆芽",
              "price": 1,
              "img": "assets/img/黄豆芽.png"
            },
            {
              "id": "hp-21",
              "name": "生菜",
              "price": 2,
              "img": "assets/img/生菜.png"
            },
            {
              "id": "hp-22",
              "name": "油麦菜",
              "price": 2.5,
              "img": "assets/img/油麦菜.png"
            },
            {
              "id": "hp-23",
              "name": "海鲜菇",
              "price": 3,
              "img": "assets/img/海鲜菇.png"
            },
            {
              "id": "hp-24",
              "name": "蟹味菇",
              "price": 3,
              "img": "assets/img/蟹味菇.png"
            },
            {
              "id": "hp-25",
              "name": "里脊肉",
              "price": 10,
              "img": "assets/img/里脊肉.png"
            },
            {
              "id": "hp-26",
              "name": "火锅川粉",
              "price": 3.5,
              "img": "assets/img/火锅川粉.png"
            },
            {
              "id": "hp-27",
              "name": "绿豆芽",
              "price": 1,
              "img": "assets/img/绿豆芽.png"
            },
            {
              "id": "hp-28",
              "name": "牛肉卷",
              "price": 16,
              "img": "assets/img/牛肉卷.png"
            },
            {
              "id": "hp-29",
              "name": "羊肉卷",
              "price": 16,
              "img": "assets/img/羊肉卷.png"
            },
            {
              "id": "hp-30",
              "name": "小酥肉",
              "price": 6,
              "img": "assets/img/小酥肉.png"
            },
            {
              "id": "hp-31",
              "name": "虾味火锅饺",
              "price": 4,
              "img": "assets/img/虾味火锅饺.png"
            },
            {
              "id": "hp-32",
              "name": "太湖燕饺",
              "price": 4,
              "img": "assets/img/太湖燕饺.png"
            },
            {
              "id": "hp-33",
              "name": "夹心鱼饼",
              "price": 6,
              "img": "assets/img/夹心鱼饼.png"
            },
            {
              "id": "hp-34",
              "name": "开花肠",
              "price": 5,
              "img": "assets/img/开花肠.png"
            },
            {
              "id": "hp-35",
              "name": "啵啵肠",
              "price": 6,
              "img": "assets/img/啵啵肠.png"
            },
            {
              "id": "hp-36",
              "name": "亲亲肠",
              "price": 6,
              "img": "assets/img/亲亲肠.png"
            },
            {
              "id": "hp-37",
              "name": "甜不辣",
              "price": 5,
              "img": "assets/img/甜不辣.png"
            },
            {
              "id": "hp-38",
              "name": "龙虾球",
              "price": 6,
              "img": "assets/img/龙虾球.png"
            },
            {
              "id": "hp-39",
              "name": "包心鱼豆腐",
              "price": 5,
              "img": "assets/img/包心鱼豆腐.png"
            },
            {
              "id": "hp-40",
              "name": "烤鱼棒",
              "price": 5,
              "img": "assets/img/烤鱼棒.png"
            },
            {
              "id": "hp-41",
              "name": "仿蟹柳",
              "price": 6,
              "img": "assets/img/仿蟹柳.png"
            },
            {
              "id": "hp-42",
              "name": "夹心蟹排",
              "price": 6,
              "img": "assets/img/夹心蟹排.png"
            },
            {
              "id": "hp-43",
              "name": "包心贡丸",
              "price": 6,
              "img": "assets/img/包心贡丸.png"
            },
            {
              "id": "hp-44",
              "name": "撒尿肉丸",
              "price": 6,
              "img": "assets/img/撒尿肉丸.png"
            },
            {
              "id": "hp-45",
              "name": "墨鱼丸",
              "price": 6,
              "img": "assets/img/墨鱼丸.png"
            },
            {
              "id": "hp-46",
              "name": "爆汁小鱼丸",
              "price": 5,
              "img": "assets/img/爆汁小鱼丸.png"
            },
            {
              "id": "hp-47",
              "name": "农家蛋饺",
              "price": 6,
              "img": "assets/img/农家蛋饺.png"
            },
            {
              "id": "hp-48",
              "name": "油面筋",
              "price": 3,
              "img": "assets/img/油面筋.png"
            },
            {
              "id": "hp-49",
              "name": "油三角",
              "price": 2,
              "img": "assets/img/油三角.png"
            },
            {
              "id": "hp-50",
              "name": "油豆腐",
              "price": 2,
              "img": "assets/img/油豆腐.png"
            },
            {
              "id": "hp-51",
              "name": "花菜",
              "price": 2.5,
              "img": "assets/img/花菜.png"
            },
            {
              "id": "hp-52",
              "name": "筒骨",
              "price": 15,
              "img": "assets/img/筒骨.png"
            },
            {
              "id": "hp-53",
              "name": "木耳菜",
              "price": 2.5,
              "img": "assets/img/木耳菜.png"
            },
            {
              "id": "hp-54",
              "name": "兰花串",
              "price": 2.5,
              "img": "assets/img/兰花串.png"
            }
          ]
        }
      ]
    },
    "stirfry": [
      {
        "id": "c3-s1",
        "name": "农家小炒肉",
        "type": "normal",
        "price": 20,
        "img": "assets/img/农家小炒肉.png"
      },
      {
        "id": "c3-s2",
        "name": "酸菜鱼",
        "type": "normal",
        "price": 28,
        "img": "assets/img/酸菜鱼.png"
      },
      {
        "id": "c3-s3",
        "name": "玉米排骨煲",
        "type": "normal",
        "price": 28,
        "img": "assets/img/玉米排骨煲.png"
      },
      {
        "id": "c3-s4",
        "name": "红烧鲈鱼",
        "type": "normal",
        "price": 28,
        "img": "assets/img/红烧鲈鱼.png"
      },
      {
        "id": "c3-s5",
        "name": "烤鱼（鲈鱼）",
        "type": "normal",
        "price": 36,
        "img": "assets/img/烤鱼（鲈鱼）.png"
      },
      {
        "id": "c3-s6",
        "name": "油爆虾",
        "type": "normal",
        "price": 34,
        "img": "assets/img/油爆虾.png"
      },
      {
        "id": "c3-s7",
        "name": "香辣小炒鸡",
        "type": "normal",
        "price": 24,
        "img": "assets/img/香辣小炒鸡.png"
      },
      {
        "id": "c3-s8",
        "name": "辣子鸡",
        "type": "normal",
        "price": 24,
        "img": "assets/img/辣子鸡.png"
      },
      {
        "id": "c3-s9",
        "name": "水煮肉片",
        "type": "normal",
        "price": 22,
        "img": "assets/img/水煮肉片.png"
      },
      {
        "id": "c3-s10",
        "name": "水煮牛杂",
        "type": "normal",
        "price": 26,
        "img": "assets/img/水煮牛杂.png"
      },
      {
        "id": "c3-s11",
        "name": "鱼香肉丝",
        "type": "normal",
        "price": 18,
        "img": "assets/img/鱼香肉丝.png"
      },
      {
        "id": "c3-s12",
        "name": "宫保肉丁",
        "type": "normal",
        "price": 18,
        "img": "assets/img/宫保肉丁.png"
      },
      {
        "id": "c3-s13",
        "name": "回锅肉",
        "type": "normal",
        "price": 20,
        "img": "assets/img/回锅肉.png"
      },
      {
        "id": "c3-s14",
        "name": "糖醋里脊（椒盐）",
        "type": "normal",
        "price": 18,
        "img": "assets/img/糖醋里脊（椒盐）.png"
      },
      {
        "id": "c3-s15",
        "name": "糖醋排骨（椒盐）",
        "type": "normal",
        "price": 18,
        "img": "assets/img/糖醋排骨（椒盐）.png"
      },
      {
        "id": "c3-s16",
        "name": "干锅花菜",
        "type": "normal",
        "price": 14,
        "img": "assets/img/干锅花菜.png"
      },
      {
        "id": "c3-s17",
        "name": "尖椒炒蛋",
        "type": "normal",
        "price": 12,
        "img": "assets/img/尖椒炒蛋.png"
      },
      {
        "id": "c3-s18",
        "name": "酸辣土豆丝",
        "type": "normal",
        "price": 8,
        "img": "assets/img/酸辣土豆丝.png"
      },
      {
        "id": "c3-s19",
        "name": "番茄炒蛋",
        "type": "normal",
        "price": 12,
        "img": "assets/img/番茄炒蛋.png"
      },
      {
        "id": "c3-s20",
        "name": "家常蛋玉豆腐",
        "type": "normal",
        "price": 16,
        "img": "assets/img/家常蛋玉豆腐.png"
      },
      {
        "id": "c3-s21",
        "name": "麻婆豆腐",
        "type": "normal",
        "price": 8,
        "img": "assets/img/麻婆豆腐.png"
      },
      {
        "id": "c3-s22",
        "name": "干锅千叶豆腐",
        "type": "normal",
        "price": 16,
        "img": "assets/img/干锅千叶豆腐.png"
      },
      {
        "id": "c3-s23",
        "name": "青椒肉丝",
        "type": "normal",
        "price": 14,
        "img": "assets/img/青椒肉丝.png"
      },
      {
        "id": "c3-s24",
        "name": "干锅手撕包菜",
        "type": "normal",
        "price": 14,
        "img": "assets/img/干锅手撕包菜.png"
      },
      {
        "id": "c3-s25",
        "name": "蒜蓉毛毛菜",
        "type": "normal",
        "price": 10,
        "img": "assets/img/蒜蓉毛毛菜.png"
      },
      {
        "id": "c3-s26",
        "name": "香菇青菜",
        "type": "normal",
        "price": 10,
        "img": "assets/img/香菇青菜.png"
      },
      {
        "id": "c3-s27",
        "name": "蒜蓉菠菜",
        "type": "normal",
        "price": 10,
        "img": "assets/img/蒜蓉菠菜.png"
      },
      {
        "id": "c3-s28",
        "name": "紫菜蛋花汤",
        "type": "normal",
        "price": 2,
        "img": "assets/img/紫菜蛋花汤.png"
      },
      {
        "id": "c3-s29",
        "name": "番茄蛋花汤",
        "type": "normal",
        "price": 2,
        "img": "assets/img/番茄蛋花汤.png"
      },
      {
        "id": "c3-s30",
        "name": "酸辣羹",
        "type": "normal",
        "price": 4,
        "img": "assets/img/酸辣羹.png"
      },
      {
        "id": "c3-s31",
        "name": "香菇肉丝羹",
        "type": "normal",
        "price": 4,
        "img": "assets/img/香菇肉丝羹.png"
      },
      {
        "id": "c3-s32",
        "name": "番茄豆腐羹",
        "type": "normal",
        "price": 4,
        "img": "assets/img/番茄豆腐羹.png"
      }
    ]
  },

  malatang: {
    "stallName": "西蜀毛哥麻辣烫",
    "pricePer50g": 2.38,
    "ricePrice": 1,
    "flavors": [
      "清汤",
      "微辣",
      "中辣",
      "特辣",
      "四川麻辣",
      "番茄",
      "金汤",
      "干拌·微辣",
      "干拌·中辣",
      "干拌·酸甜"
    ],
    "groups": [{ name: '荤菜', items: ['肥牛卷', '羊肉卷', '鸡胸肉', '午餐肉', '鸭血', '毛肚', '虾滑', '牛肉丸'] },
          { name: '丸滑', items: ['撒尿牛丸', '鱼丸', '鱼豆腐', '蟹棒', '蛋饺', '亲亲肠'] },
          { name: '豆制品', items: ['嫩豆腐', '冻豆腐', '腐竹', '豆皮', '油豆腐', '素鸡'] },
          { name: '菌菇', items: ['金针菇', '香菇', '平菇', '木耳', '海鲜菇'] },
          { name: '素菜', items: ['青菜', '娃娃菜', '菠菜', '土豆片', '藕片', '冬瓜', '海带结', '西兰花', '玉米段'] },
          { name: '主食', items: ['方便面', '红薯粉', '宽粉', '年糕', '乌冬面', '米饭'] }
        ].map(g => ({ ...g, items: g.items.map(n => ({ name: n, img: 'assets/img/' + n + '.png' })) })),
    "quickWeights": [
      250,
      350,
      500,
      750
    ]
  }
};

/* 通过 id 查找菜品（含食堂/档口归属） */
function findDish(id) {
  for (const cat of MENU.c1.categories) {
    const d = cat.dishes.find(x => x.id === id);
    if (d) return { dish: d, canteen: '一食堂', stall: cat.name, canteenId: 'c1' };
  }
  for (const s of MENU.c2.stalls) {
    const d = s.dishes.find(x => x.id === id);
    if (d) return { dish: d, canteen: '二食堂', stall: s.name, canteenId: 'c2' };
  }
  const d = MENU.c3.stirfry.find(x => x.id === id);
  if (d) return { dish: d, canteen: '三食堂', stall: '炒菜', canteenId: 'c3' };
  return null;
}