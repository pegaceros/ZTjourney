"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Componets

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "section" },
        React.createElement(
          "div",
          { className: "zt-tl-block" },
          React.createElement("div", { className: "zt-tl-node" }),
          React.createElement(
            "div",
            { className: "zt-tl-content left-content" },
            React.createElement(
              "h4",
              { className: "zl-tl-date" },
              this.props.node.date
            ),
            React.createElement(
              "h3",
              { className: "zl-tl-title" },
              this.props.node.title
            ),
            React.createElement(
              "p",
              { className: "zl-tl-description>" },
              this.props.node.description
            )
          ),
          React.createElement(
            "div",
            { className: "zt-tl-content right-content" },
            React.createElement(
              "a",
              { href: this.props.node.link, target: "_blank" },
              React.createElement("img", { src: this.props.node.thumbnail })
            )
          )
        )
      );
    }
  }]);

  return Page;
}(React.Component);

var Pages = function (_React$Component2) {
  _inherits(Pages, _React$Component2);

  function Pages() {
    _classCallCheck(this, Pages);

    return _possibleConstructorReturn(this, (Pages.__proto__ || Object.getPrototypeOf(Pages)).apply(this, arguments));
  }

  _createClass(Pages, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.pages
      );
    }
  }]);

  return Pages;
}(React.Component);

// Dummy data

var node1 = {
  id: "1",
  date: "2015",
  title: "真情无限",
  description: "环保环保环保",
  thumbnail: "img/thumbnail.jpg",
  link: "http://www.bilibili.com/video/av5202457/index_2.html"
};

var node2 = {
  id: "2",
  date: "2016",
  title: "春节联欢晚会2016",
  description: "2016央视春晚主持阵容发布：在中央电视台一号演播大厅主会场的共有六位主持人，分别是周涛、朱军、董卿、撒贝宁、李思思和尼格买提。福建泉州分会场：李佳明、赵琳硕；陕西西安分会场：朱迅、徐杰；广东广州分会场：任鲁豫、邓璐；内蒙古呼伦贝尔分会场：马跃、欧仁图雅。",
  thumbnail: "img/thumbnail.jpg",
  link: "http://www.bilibili.com/video/av5202457/index_1.html"
};

var node3 = {
  id: "3",
  date: "2017",
  title: "Dream",
  description: "BLABLABLABLABLABLABL",
  thumbnail: "img/thumbnail.jpg",
  link: "http://www.bilibili.com/video/av5202457/index_3.html"
};

var nodeList = [node1, node2, node3];

var pageList = nodeList.map(function (node) {
  return React.createElement(Page, { key: node.id, node: node });
});

// Render

ReactDOM.render(React.createElement(Pages, { pages: pageList }), document.getElementById('fullpage'));

// Animation & Action

$('#fullpage').fullpage({
  anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
  sectionsColor: ['#7E8F7C', '#C63D0F', '#1BBC9B'],
  scrollBar: true
});