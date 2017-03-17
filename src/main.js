
// Componets

// const node = {
//   img: "img/icon_2.png"
// };
class TlNode extends React.Component {
  render () {
    const nodeStyle = {
      backgroundImage: "url(" + this.props.img + ")",
    };
    return (
      <div className="zt-tl-node" style={nodeStyle}>
      </div>
    )
  }
}


// const eventItem = {
//   title: "title",
//   thumb: "img/thumb_1.jpg",
//   link: "http://www.bilibili.com/video/av5202457/index_1.html"
// };
class EventItem extends React.Component {
  render () {
    const thumbStyle = {
      backgroundImage: "url(" + this.props.eventItem.thumb + ")",
    };
    return (
      <a className="zt-event" href={this.props.eventItem.link} target="_blank">
          <div className="zt-event-thumb" style={thumbStyle}></div>
          <div className="zt-event-title">{this.props.eventItem.title}</div>
      </a>
    )
  }
}


// TODO: 编辑内容
class LandingPage extends React.Component {
  render () {
    const pageStyle = {
      backgroundImage: "url(img/bg_0.jpg)",
      backgroundSize: "cover",
    };
    return (
      <div className="section" style={pageStyle}>
          <div className="zt-landing-page">
              <div className="zt-top">
                  <div className="zt-tl-header">
                      <div className="zt-tl-message fade-in-down">
                          <h2>周涛的奇妙冒险</h2>
                          <h3>TaoTao's Marvellous Adventure</h3>
                      </div>

                      <TlNode img="img/icon_2.png" />
                  </div>
              </div>

          </div>
      </div>
    )
  }
}

// TODO: 编辑内容
class EndingPage extends React.Component {
  render () {
    const pageStyle = {
      backgroundImage: "url(img/bg_0.jpg)",
      backgroundSize: "cover",
    };
    return (
      <div className="section" style={pageStyle}>
          <div className="zt-ending-page">
              <div className="zt-bottom">
                  <div className="zt-tl-footer">
                      <TlNode img="img/icon_2.png" />

                      <div className="zt-tl-message fade-in-up">
                          <h2>谢谢您为世界带来美。</h2>
                          <h3>Thank you for bringing beauty into the world!</h3>
                      </div>
                  </div>
              </div>

          </div>
      </div>
    )
  }
}


// const page = {
//   nodeImg: "img/icon_1.png",
//   bgImg: "img/bg_1.jpg",
//   date: "2015",
//   title: "真情无限",
//   description: "环保环保环保",
//   thumbnail: "img/thumbnail_2.jpg",
//   link: "http://www.bilibili.com/video/av5202457/index_2.html",
//   eventItem: eventItem
// };
class Page extends React.Component {
  render() {
    const pageStyle = {
      backgroundImage: "url(" + this.props.page.bgImg + ")",
      backgroundSize: "cover",
    };

    return (
      <div className="section" style={pageStyle}>
          <div className="zt-tl-block">
              <TlNode img={this.props.page.nodeImg} />
              <div className="zt-tl-content fade-in-right">
                  <h4 className="zl-tl-date">{this.props.page.date}</h4>
                  <h3 className="zl-tl-title">{this.props.page.title}</h3>
                  <p className="zl-tl-description>">{this.props.page.description}
                  </p>
              </div>
              <div className="zt-tl-content fade-in-left">
                  <EventItem eventItem={this.props.page.eventItem} />
              </div>
          </div>
      </div>
    );
  }
}

// class Page extends React.Component {
//   render() {
//     const pageStyle = {
//       backgroundImage: "url(" + this.props.page.bgImg + ")",
//       backgroundSize: "cover",
//     };
//
//     return (
//       <div className="section" style={pageStyle}>
//           <div className="zt-tl-block">
//               <TlNode img={this.props.page.nodeImg} />
//               <div className="zt-tl-content">
//                   <h4 className="zl-tl-date">{this.props.page.date}</h4>
//                   <h3 className="zl-tl-title">{this.props.page.title}</h3>
//                   <p className="zl-tl-description>">{this.props.page.description}
//                   </p>
//               </div>
//               <div className="zt-tl-content">
//                   <a href={this.props.page.link} target="_blank">
//                       <img src="" data-src={this.props.page.thumbnail}></img>
//                   </a>
//               </div>
//           </div>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <LandingPage />
        {this.props.pages}
        <EndingPage />
      </div>
    )
  }
}



// Dummy data

const eventItem1 = {
  title: "2016春晚",
  thumb: "img/thumb_1.jpg",
  link: "http://www.bilibili.com/video/av5202457/index_1.html"
};
const eventItem2 = {
  title: "2015中国谜语大会",
  thumb: "img/thumb_2.jpg",
  link: "http://www.bilibili.com/video/av5202457/index_2.html"
};
const eventItem3 = {
  title: "筑梦路上",
  thumb: "img/thumb_3.jpg",
  link: "http://www.bilibili.com/video/av5202457/index_3.html"
};

const page1 = {
  nodeImg: "img/icon_1.png",
  bgImg: "img/bg_1.jpg",
  date: "date1",
  title: "真情无限",
  description: "环保环保环保",
  thumbnail: "img/thumbnail_2.jpg",
  link: "http://www.bilibili.com/video/av5202457/index_2.html",
  eventItem: eventItem1
};

const page2 = {
  nodeImg: "img/icon_2.png",
  bgImg: "img/bg_2.jpg",
  date: "date2",
  title: "春节联欢晚会2016",
  description: "2016央视春晚主持阵容发布：在中央电视台一号演播大厅主会场的共有六位主持人，分别是周涛、朱军、董卿、撒贝宁、李思思和尼格买提。福建泉州分会场：李佳明、赵琳硕；陕西西安分会场：朱迅、徐杰；广东广州分会场：任鲁豫、邓璐；内蒙古呼伦贝尔分会场：马跃、欧仁图雅。",
  thumbnail: "img/thumbnail_1.jpg",
  link: "http://www.bilibili.com/video/av5202457/index_1.html",
  eventItem: eventItem2
};

const page3 = {
  nodeImg: "img/icon_1.png",
  bgImg: "img/bg_3.jpg",
  date: "date3",
  title: "Dream",
  description: "BLABLABLABLABLABLABL",
  thumbnail: "img/thumbnail_2.jpg",
  link: "http://www.bilibili.com/video/av5202457/index_3.html",
  eventItem: eventItem3
};


const pageList = [page1, page2, page3, page1, page2, page3,
  page1, page2, page3, page1, page2, page3,
  page1, page2, page3, page1, page2, page3,
  page1, page2, page3, page1, page2, page3
];


// Render

const pages = pageList.map( (page, idx) =>
  <Page key={idx} page={page} />
);



ReactDOM.render(
  <App pages={pages}/>,
  document.getElementById('fullpage')
);

// TODO: set anchors
const anchors = ["Home"].concat(pageList.map( (i, idx) => (idx+1992) + "")).concat(["Thanks"])

// Animation & Action

$('#fullpage').fullpage({
    anchors: anchors,
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: anchors,
    // scrollBar: true

    afterLoad: (anchorLink, index) => {
      // console.log(anchorLink + " is loaded");
      const section = "[data-anchor='"+anchorLink+ "']";
      const selectors = [
        section + " .fade-in-up",
        section + " .fade-in-down",
        section + " .fade-in-left",
        section + " .fade-in-right"
      ];

      const ele = $(selectors.join(","));
      ele.css({
        "opacity": "1",
        "transform": "translate(0, 0)",
        "-webkit-transform": "translate(0, 0)",
        "-moz-transform": "translate(0, 0)",
      });
    }
});
