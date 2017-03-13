"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Componets

// const node = {
//   img: "img/icon_2.png"
// };
var TlNode = function (_React$Component) {
  _inherits(TlNode, _React$Component);

  function TlNode() {
    _classCallCheck(this, TlNode);

    return _possibleConstructorReturn(this, (TlNode.__proto__ || Object.getPrototypeOf(TlNode)).apply(this, arguments));
  }

  _createClass(TlNode, [{
    key: "render",
    value: function render() {
      var nodeStyle = {
        backgroundImage: "url(" + this.props.img + ")"
      };
      return React.createElement("div", { className: "zt-tl-node", style: nodeStyle });
    }
  }]);

  return TlNode;
}(React.Component);

// const eventItem = {
//   title: "title",
//   thumb: "img/thumb_1.jpg",
//   link: "http://www.bilibili.com/video/av5202457/index_1.html"
// };


var EventItem = function (_React$Component2) {
  _inherits(EventItem, _React$Component2);

  function EventItem() {
    _classCallCheck(this, EventItem);

    return _possibleConstructorReturn(this, (EventItem.__proto__ || Object.getPrototypeOf(EventItem)).apply(this, arguments));
  }

  _createClass(EventItem, [{
    key: "render",
    value: function render() {
      var thumbStyle = {
        backgroundImage: "url(" + this.props.eventItem.thumb + ")"
      };
      return React.createElement(
        "a",
        { className: "zt-event", href: this.props.eventItem.link, target: "_blank" },
        React.createElement("div", { className: "zt-event-thumb", style: thumbStyle }),
        React.createElement(
          "div",
          { className: "zt-event-title" },
          this.props.eventItem.title
        )
      );
    }
  }]);

  return EventItem;
}(React.Component);

// TODO: 编辑内容


var LandingPage = function (_React$Component3) {
  _inherits(LandingPage, _React$Component3);

  function LandingPage() {
    _classCallCheck(this, LandingPage);

    return _possibleConstructorReturn(this, (LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).apply(this, arguments));
  }

  _createClass(LandingPage, [{
    key: "render",
    value: function render() {
      var pageStyle = {
        backgroundImage: "url(img/bg_0.jpg)",
        backgroundSize: "cover"
      };
      return React.createElement(
        "div",
        { className: "section", style: pageStyle },
        React.createElement(
          "div",
          { className: "zt-landing-page" },
          React.createElement(
            "div",
            { className: "zt-top" },
            React.createElement(
              "div",
              { className: "zt-tl-header" },
              React.createElement(
                "div",
                { className: "zt-tl-message" },
                React.createElement(
                  "h2",
                  null,
                  "\u5468\u6D9B\u7684\u5947\u5999\u65C5\u7A0B"
                ),
                React.createElement(
                  "h3",
                  null,
                  "TaoTao's Marvellous Adventure"
                )
              )
            )
          ),
          React.createElement(TlNode, { img: "img/icon_2.png" })
        )
      );
    }
  }]);

  return LandingPage;
}(React.Component);

// const page = {
//   id: "1",
//   nodeImg: "img/icon_1.png",
//   bgImg: "img/bg_1.jpg",
//   date: "2015",
//   title: "真情无限",
//   description: "环保环保环保",
//   thumbnail: "img/thumbnail_2.jpg",
//   link: "http://www.bilibili.com/video/av5202457/index_2.html",
//   eventItem: eventItem
// };

var Page = function (_React$Component4) {
  _inherits(Page, _React$Component4);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      var pageStyle = {
        backgroundImage: "url(" + this.props.page.bgImg + ")",
        backgroundSize: "cover"
      };

      return React.createElement(
        "div",
        { className: "section", style: pageStyle },
        React.createElement(
          "div",
          { className: "zt-tl-block" },
          React.createElement(TlNode, { img: this.props.page.nodeImg }),
          React.createElement(
            "div",
            { className: "zt-tl-content" },
            React.createElement(
              "h4",
              { className: "zl-tl-date" },
              this.props.page.date
            ),
            React.createElement(
              "h3",
              { className: "zl-tl-title" },
              this.props.page.title
            ),
            React.createElement(
              "p",
              { className: "zl-tl-description>" },
              this.props.page.description
            )
          ),
          React.createElement(
            "div",
            { className: "zt-tl-content" },
            React.createElement(EventItem, { eventItem: this.props.page.eventItem })
          )
        )
      );
    }
  }]);

  return Page;
}(React.Component);

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

var App = function (_React$Component5) {
  _inherits(App, _React$Component5);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(LandingPage, null),
        this.props.pages
      );
    }
  }]);

  return App;
}(React.Component);

// Dummy data

var eventItem1 = {
  title: "2016春晚",
  thumb: "img/thumb_1.jpg",
  link: "http://www.bilibili.com/video/av5202457/index_1.html"
};
var eventItem2 = {
  title: "2015中国谜语大会",
  thumb: "img/thumb_2.jpg",
  link: "http://www.bilibili.com/video/av5202457/index_2.html"
};
var eventItem3 = {
  title: "筑梦路上",
  thumb: "img/thumb_3.jpg",
  link: "http://www.bilibili.com/video/av5202457/index_3.html"
};

var page1 = {
  id: "1",
  nodeImg: "img/icon_1.png",
  bgImg: "img/bg_1.jpg",
  date: "date1",
  title: "真情无限",
  description: "环保环保环保",
  thumbnail: "img/thumbnail_2.jpg",
  link: "http://www.bilibili.com/video/av5202457/index_2.html",
  eventItem: eventItem1
};

var page2 = {
  id: "2",
  nodeImg: "img/icon_2.png",
  bgImg: "img/bg_2.jpg",
  date: "date2",
  title: "春节联欢晚会2016",
  description: "2016央视春晚主持阵容发布：在中央电视台一号演播大厅主会场的共有六位主持人，分别是周涛、朱军、董卿、撒贝宁、李思思和尼格买提。福建泉州分会场：李佳明、赵琳硕；陕西西安分会场：朱迅、徐杰；广东广州分会场：任鲁豫、邓璐；内蒙古呼伦贝尔分会场：马跃、欧仁图雅。",
  thumbnail: "img/thumbnail_1.jpg",
  link: "http://www.bilibili.com/video/av5202457/index_1.html",
  eventItem: eventItem2
};

var page3 = {
  id: "3",
  nodeImg: "img/icon_1.png",
  bgImg: "img/bg_3.jpg",
  date: "date3",
  title: "Dream",
  description: "BLABLABLABLABLABLABL",
  thumbnail: "img/thumbnail_2.jpg",
  link: "http://www.bilibili.com/video/av5202457/index_3.html",
  eventItem: eventItem3
};

var pageList = [page1, page2, page3];

// Render

var pages = pageList.map(function (page) {
  return React.createElement(Page, { key: page.id, page: page });
});

ReactDOM.render(React.createElement(App, { pages: pages }), document.getElementById('fullpage'));

// Animation & Action

$('#fullpage').fullpage({
  anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
  // sectionsColor: ['#7E8F7C', '#C63D0F', '#1BBC9B'],
  scrollBar: true
});