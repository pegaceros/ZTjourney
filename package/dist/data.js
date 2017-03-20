"use strict";

var blessing = [{
    "message": "周涛姐生日快乐。这是第一次为你庆生认识你是《综艺大观》，《掌声响起来》让我永远难忘我会永远爱你的",
    "name": "小馨"
}, {
    "message": "周老师生日快乐噢~今年刚刚14岁的我，成长的路上一直都有你的陪伴！周老师要注意身体，家庭幸福美满~",
    "name": "梓萌"
}, {
    "message": "岁月晕染了你的眉眼，始终不变的是你的初心。愿你一生喜乐无忧，永远是那个温婉而又不失刚强的小姑娘。",
    "name": "斯琪_Qi"
}, {
    "message": "周主任！生日快乐！很高兴这是陪你过的第二个生日，一年里您让我学会了如何去认真做事，做好事。希望您身体健康，开心幸福！我爱您！",
    "name": "踹儿"
}, {
    "message": "你是人间的四月天，每天都会多爱你一点，愿世界温柔以待我的小姑娘，陪伴是最长情的告白，周老师生日快乐！",
    "name": "荼荼"
}, {
    "message": "主任生日快乐！愿你的四十九岁依然被上天眷顾，噢，那也是你自己努力修来的福分呀。祝安宁和悦。",
    "name": "Emma"
}, {
    "message": "周老师生日快乐，愿你未来每一天都是好心情，幸福安康",
    "name": "Eclair1017"
}, {
    "message": "周老师生日快乐，祝您以后每天都开开心心，蜜桃们一直在你身边，不离不弃，相信我们会陪你度过每一个属于您的3.23。我们爱您，周老师。",
    "name": "伊万"
}, {
    "message": "君生我未生，我生君已老。幸不生逢时，得已见君好。一日三餐愿：一愿春光好，二愿诸事了，三愿君不老。",
    "name": "周慕卿"
}, {
    "message": "斯人若彩虹，遇上方知有。谢谢您这样温柔的对待这个世界，生日快乐。愿您幸福安康，万事顺意。",
    "name": " 罐头"
}, {
    "message": "在最美好的年华里遇见你是我最幸运的事。亲爱的周甜甜，生日快乐。愿你被世界温柔相待、一切安好",
    "name": "小丫头"
}, {
    "message": "愿平安喜樂，長命無憂。歲月靜好，一路相隨，當滄海不再成桑田，足矣。",
    "name": "阿紫"
}, {
    "message": "乍见之欢不如久伴不厌，陪伴是最长情的告白，愿能给你世间最美的告白。",
    "name": "王小乖"
}, {
    "message": "愿你得你所想，有你所愿。周老师生快。",
    "name": "喵哥"
}, {
    "message": "无论时光过去多少年，还是会有怦然心动的感觉啊，成为蜜桃的第五个年头，生日快乐，一切如意，我的周老师！",
    "name": "八月的酱桃"
}, {
    "message": "以前我用耳朵听到你，后来我用眼睛看见你。此刻最想说的是：周老师您好，周老师谢谢您，周老师生日快乐！",
    "name": "陸子"
}, {
    "message": "遇见你的时间，刚刚好。爱上你的时间不长，但我不怨艾，毕竟，此生相遇已然足够。愿你在自己的世界里永远自由，生日快乐！",
    "name": "沐沐"
}, {
    "message": "有多喜欢你呢，想把你藏起来不让别人看见，只有我一个人能看的那种喜欢。亲爱的周老师 生日快乐！",
    "name": "柚子"
}, {
    "message": "觉得这世间在美好的词也不能形容你在我心中的美，亲爱的周老师，生日快乐，有生的日子天天快乐！",
    "name": "慕木"
}, {
    "message": "春天出生的姑娘啊，愿你的笑容永远像春天的阳光般灿烂，愿你永远都有春天般的心情！！生日快乐！！！",
    "name": "千皓呀"
}, {
    "message": "最珍重的就是你留在我身上的，如同河川留给地形一样的，你对我的改变。敲打了很多次也删了很多遍，其实最想说的还是生日快乐啊周老师，我很想你。",
    "name": "熊猫"
}, {
    "message": "时光缱倦了你的眉眼，你惊艳了我的年华。从此心中想的是你，口中念的是你，最心心念念的只有你 愿你安，盼你安",
    "name": "夂州"
}, {
    "message": "你是世上最酷的周涛涛，想给你整个世界的欢喜。祝最酷的周老师生日平安喜乐。",
    "name": "Librak"
}, {
    "message": "你是这世上无与伦比的美丽！周老师，生日快乐！",
    "name": "啊粒"
}, {
    "message": "许是你生于三月，每每看你便觉如春风般温柔、春阳般明媚。感谢你惊艳了我的春天。亲爱的周主持，生日快乐。",
    "name": "亦美"
}, {
    "message": "周老师，遇见你的我比没有遇见你的我变得更好了，所以，感谢你。如果见到你，我会说，谢谢你。",
    "name": "瑾诺"
}, {
    "message": "您给了我们整个最美的年华，我们只能给您最真挚的爱和最诚恳的祝福。生日快乐小公主，愿您此后岁月无忧。",
    "name": "墨白"
}];

var createEventItem = function createEventItem(year, num, links, title, description) {
    var thumb = ["img/thumb/", year, "-", num, ".jpg"];

    var item = {
        title: title,
        thumb: thumb.join(""),
        description: description,
        links: links
        // TODO:
    };
    return item;
};

var createContent = function createContent(year, title, position, dataArray1) {
    var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    var es = dataArray1.map(function (i, idx) {
        return createEventItem(year, idx + 1 + offset, i.links, i.title, i.description);
    });
    var content = {
        yearTitle: title,
        position: position,
        events: es
    };
    return content;
};