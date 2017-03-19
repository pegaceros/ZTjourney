
// 10 年
// TODO: deal with links

// const data2002 = [
//   {
//     "title": "中央电视台春节联欢晚会",
//     "description": "周涛的出场时间很短，仅仅在开场和结尾处短短的几分钟。一句“夜已深了，兴犹未尽”千回百转。",
//     "links": [
//       "http://www.bilibili.com/video/av5202457/index_13.html"
//     ]
//   },
//   {
//     "title": "公安部春节晚会《盛世金盾情》",
//     "description": "周涛的表演大方自然，一如主持时的沉稳大气，又不失幽默诙谐，拿捏得当。",
//     "links": [
//       "http://www.tudou.com/programs/view/dWofBNMtASc/?tpa=dW5pb25faWQ9MTAzMDkzXzEwMDAwMl8wMV8wMQ&fromvsogou=1"
//     ]
//   },
//   {
//     "title": "《青山林海歌飞扬》中央电视台心连心赴伊春慰问演出",
//     "description": "周涛与几位艺术家老师的航班由于天气原因延误，最后连夜坐火车赶到演出现场。整场演出依然呈现出自己最好的状态。",
//     "links": [
//       "http://www.56.com/u45/v_NTg0OTg2NTA.html",
//       "http://www.56.com/u14/v_NTg1MDAzNzk.html"
//     ]
//   },
//   {
//     "title": "《情系大别山》2002年中央电视台心连心艺术团赴安徽霍山慰问演出",
//     "description": "本身就是安徽人的周涛对家乡的热爱自是溢于言表，那一句“嗯你们安徽人都是好样的”更是满满的对家乡的喜爱和身为安徽人的自豪。",
//     "links": [
//       "http://www.tudou.com/programs/view/QV1azjzAmDI/"
//     ]
//   },
// ]


// const data2010 = [
//   {
//     "title": "走进世博大型明星文艺晚会",
//     "description": "周涛主持2010年上海旅游年启动仪式",
//     "links": ["http://v.youku.com/v_show/id_XMTQ0MTM3Njg0.html"]
//   },
//   {
//     "title": "全国检查系统迎新年主题晚会为了正义的誓言",
//     "description": "晚会由著名央视节目主持人周涛、朱军、张泽群与来自北京市检察院的检察官韩冰共同主持。",
//     "links": ["http://www.tudou.com/programs/view/vl-JwbPUEc0/"]
//   },
//   {
//     "title": "2010年央视春节联欢晚会",
//     "description": "周涛从1996年起连续16年主持央视春节联欢晚会，是迄今为止连续主持春晚最多的女主持。",
//     "links": ["http://www.iqiyi.com/v_19rrgzaj7c.html"]
//   },
//   {
//     "title": "中央电视台戏曲春节晚会",
//     "description": "周涛主持我国博大精深、缤纷荟萃的艺术晚会",
//     "links": ["http://www.tudou.com/listplay/OUndYPSvFio/aO3-wF_jHEs.html"]
//   },
//   {
//     "title": "百花迎春晚会",
//     "description": "周涛主持艺术节春节大联欢晚会",
//     "links": ["http://www.tudou.com/programs/view/5hA7Nonl3Qg/"]
//   },
// ]


const createEventItem = (year, num, links, title, description) => {
  const thumb = ["img/thumb/", year, "-", num, ".jpg"]

  const item = {
    title: title,
    thumb: thumb.join(""),
    description: description,
    links: links
    // TODO:
  }
  return item
}

const createContent = (year, title, position, dataArray1,  offset=0) => {
  const es = dataArray1.map( (i, idx) =>
    createEventItem(year, idx+1+offset, i.links, i.title, i.description)
  )
  const content = {
    yearTitle: title,
    position: position,
    events:es
  }
  return content
}
