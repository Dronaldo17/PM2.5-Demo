'use strict'


var log4js = require('log4js');
var logger = log4js.getLogger();

var cheerio = require('cheerio'),
    charset = require('superagent-charset'),
    request = require('superagent');

charset(request);

var fs  = require('fs')

const air_rank_best_url = "http://tianqi.2345.com/air-rank.htm";


const air_rank_worst_url = "http://tianqi.2345.com/air-rank-rev.htm";

var air_rank_datasource = {
    air_rank_best(callback){
        request.get(air_rank_best_url)
            .charset('gbk')
            .set('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36')
            .end(function (err, sres) {
                if (!!err) {
                    logger.debug("请求失败");
                    callback(err);
                }
                else {
                    logger.debug("请求成功");

                    var html = sres.text;

                    var $ = cheerio.load(html);

                    let meta = $('.main-unit').find('li');

                    let list = []


                    for (var i = 1;i < meta.length ; i++){

                        let rank = $('.main-unit').find('li')[i].children[0].children[0]['data'];
                        let city = $('.main-unit').find('li')[i].children[1].children[0].children[0]['data']
                        let href = $('.main-unit').find('li')[i].children[1].children[0].children[0]['parent']['attribs']['href'];
                        let province = $('.main-unit').find('li')[i].children[1].children[0]['next'].children[0]['data'];
                        let point = $('.main-unit').find('li')[i].children[2].children[0]['data'];
                        let order = $('.main-unit').find('li')[i].children[3].children[0]['next']['data'];


                        let dict = {}

                        dict['rank'] = rank;
                        dict['city'] = city;
                        dict['href'] = href;
                        dict['province'] = province;
                        dict['point'] = point;
                        dict['order'] = order;

                        list.push(dict)
                    }

                    let string = JSON.stringify(list)

                    callback(string);
                }
            });
        },

        //最差空气排行
    air_rank_worst(callback){
        request.get(air_rank_worst_url)
            .charset('gbk')
            .set('User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36')
            .end(function (err, sres) {
                if (!!err) {
                    logger.debug("请求失败");
                    callback(err);
                }
                else {
                    logger.debug("请求成功");

                    var html = sres.text;

                    var $ = cheerio.load(html);

                    let meta = $('.main-unit').find('li');

                    let list = []


                    for (var i = 1;i < meta.length ; i++){

                        let rank = $('.main-unit').find('li')[i].children[0].children[0]['data'];
                        let city = $('.main-unit').find('li')[i].children[1].children[0].children[0]['data']
                        let href = $('.main-unit').find('li')[i].children[1].children[0].children[0]['parent']['attribs']['href'];
                        let province = $('.main-unit').find('li')[i].children[1].children[0]['next'].children[0]['data'];
                        let point = $('.main-unit').find('li')[i].children[2].children[0]['data'];
                        let order = $('.main-unit').find('li')[i].children[3].children[0]['next']['data'];


                        let dict = {}

                        dict['rank'] = rank;
                        dict['city'] = city;
                        dict['href'] = href;
                        dict['province'] = province;
                        dict['point'] = point;
                        dict['order'] = order;

                        list.push(dict)
                    }

                    let string = JSON.stringify(list)
                    callback(string);
                }
            });
    }


};


module.exports = air_rank_datasource;


// air_rank_datasource.air_rank_best((result)=>{
//     fs.writeFile('air_rank_best.json',result,()=>{
//         logger.debug("最优空气排行 已保存")
//     })
// })

air_rank_datasource.air_rank_worst((result)=>{
    fs.writeFile('air_rank_worst.json',result,()=>{
        logger.debug("最差空气排行 已保存")
    })
})