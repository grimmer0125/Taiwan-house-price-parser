//NOTE Or change houseConst.js .json

exports.TaipeiDistricts= {
  //key為3碼郵遞區號
  "中正區": "100",
  "大同區": "103",
  "中山區": "104",
  "松山區": "105",
  "大安區": "106",
  "萬華區": "108",
  "信義區": "110",
  "士林區": "111",
  "北投區": "112",
  "內湖區": "114",
  "南港區": "115",
  "文山區": "116",

  // "100": "中正區",
  // "103": "大同區",
  // "104": "中山區",
  // "105": "松山區",
  // "106": "大安區",
  // "108": "萬華區",
  // "110": "信義區",
  // "111": "士林區",
  // "112": "北投區",
  // "114": "內湖區",
  // "115": "南港區",
  // "116": "文山區"
}

//一季, 某一city
//A, B資料可能各有1萬筆, 如果都先只readCSV, 要存兩萬筆
//如果是區資料, 可能是北市13區, 先read完, 都存在 array裡, A資料家起來也會是1萬筆

//所以可以是// dataA[totoal]


exports.cityCode = {
  "C": {
    name: "基隆市"
    // dataA: {price, number, total}
    // dataB:
    // price:
    // districts: {
    //     "108":{
    //       // x dataA:[] //step1: read & save A
    //       // x dataB:[] //step2: read & save A
    //       totalA:0
    //       totalB:0
    //       price = 0; //step3: cal A & B
    //       priceA = 0;
    //       priceB = 0;
    //       numberA = 0;
    //       numberB = 0;
    //     }
    // }
  },
  "A": {
    name: "臺北市"
  },
  "F": {
    name: "新北市"
  },
  "H": {
    name: "桃園市"
  },
  "O": {
    name: "新竹市"
  },
  "J": {
    name: "新竹縣"
  },
  "K": {
    name: "苗栗縣"
  },
  "B": {
    name: "臺中市"
  },
  "M": {
    name: "南投縣"
  },
  "N": {
    name: "彰化縣"
  },
  "P": {
    name: "雲林縣"
  },
  "I": {
    name: "嘉義市"
  },
  "Q": {
    name: "嘉義縣"
  },
  "D": {
    name: "臺南市"
  },
  "E": {
    name: "高雄市"
  },
  "T": {
    name: "屏東縣"
  }, //,它的A, ios讀不到!!
  "G": {
    name: "宜蘭縣"
  },
  "U": {
    name: "花蓮縣"
  },
  "V": {
    name: "臺東縣"
  },
  "X": {
    name: "澎湖縣"
  },
  "W": {
    name: "金門縣"
  },
  "Z": {
    name: "連江縣"
  }
};