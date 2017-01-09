var fs = require('fs')
var log4js = require('log4js');
var logger = log4js.getLogger();



var dict = {}
var json = {}

json['title'] = "空气质量指数（AQI）与PM2.5的关系";
json['content'] = "空气质量指数(AQI)的取值方法为：在PM2.5，PM10等六种主要污染物中，根据其浓度分别计算对应AQI值，" +
    "然后取数值最大的那个作为最终报告的AQI值；PM2.5指空气中直径≤2.5微米的颗粒物，其数值一般来源于实测浓度值并计算得出。" +
    "两者的取值途径完全不同，所以我们为了更严谨的呈现出空气质量情况，选择将空气质量指数(AQI)和PM2.5分榜列出。"


// let scoreList = ['0-50','51-100','101-150','151-200','201-300','300']
//
// let airList = ['空气优','空气良','轻度污染','中度污染','重度污染','严重污染'];
//
// let desList = ['可多参加户外活动呼吸新鲜空气','除少数对某些污染物特别容易过敏的人群外，其他人群可以正常进行室外活动。',
//     '敏感人群需减少体力消耗较大的户外活动','敏感人群应尽量减少外出，一般人群适当减少户外运动。',
//     '敏感人群应停止户外运动，一般人群尽量减少户外运动。','除有特殊需要的人群外，尽量不要留在室外。'];
//
// let list = []
//
// for(var i = 0;i < 6;i++){
//     let score = scoreList[i]
//     let air = airList[i]
//     let des = desList[i]
//
//     let tmpDict = {}
//     tmpDict['score'] = score;
//     tmpDict['air'] = air;
//     tmpDict['des'] = des;
//
//     list.push(tmpDict);
// }

//
// 0-35	空气优	可多参加户外活动呼吸新鲜空气。
// 35-75	空气良	除少数对某些污染物特别容易过敏的人群外，其他人群可以正常进行室外活动。
// 75-115	轻度污染	敏感人群需减少体力消耗较大的户外活动。
// 115-150	中度污染	敏感人群应尽量减少外出，一般人群适当减少户外运动。
// 150-250	重度污染	敏感人群应停止户外运动，一般人群尽量减少户外运动。
// 250-500	严重污染	除有特殊需要的人群外，尽量不要留在室外。





let scoreList = ['0-35','35-75','75-115','115-150','150-250','250-500']

let airList = ['空气优','空气良','轻度污染','中度污染','重度污染','严重污染'];

let desList = ['可多参加户外活动呼吸新鲜空气','除少数对某些污染物特别容易过敏的人群外，其他人群可以正常进行室外活动。',
    '敏感人群需减少体力消耗较大的户外活动','敏感人群应尽量减少外出，一般人群适当减少户外运动。',
    '敏感人群应停止户外运动，一般人群尽量减少户外运动。','除有特殊需要的人群外，尽量不要留在室外。'];

let list = []

for(var i = 0;i < 6;i++){
    let score = scoreList[i]
    let air = airList[i]
    let des = desList[i]

    let tmpDict = {}
    tmpDict['score'] = score;
    tmpDict['air'] = air;
    tmpDict['des'] = des;

    list.push(tmpDict);
}


// logger.debug(list)

json['pm2p5_detail'] = JSON.stringify(list)

let jsonString = JSON.stringify(json)

logger.debug(jsonString)

fs.writeFile('./data/pm2p5help.json',jsonString,()=>{
        logger.debug("pm2.5帮助已保存")
})