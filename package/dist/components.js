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
      if (this.props.img) {
        var nodeStyle = {
          backgroundImage: "url(" + this.props.img + ")"
        };
        return React.createElement("div", { className: "zt-tl-node", style: nodeStyle });
      } else {
        return React.createElement("div", null);
      }
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
      console.log(this.props.eventItem);
      var thumbStyle = {
        backgroundImage: "url(" + this.props.eventItem.thumb + ")"
      };
      // <div className="zt-event-thumb" style={thumbStyle}></div>
      // <img className="zt-event-thumb" src={this.props.eventItem.thumb} />
      return (
        // TODO: 处理复数 links
        React.createElement(
          "a",
          { className: "zt-event", href: this.props.eventItem.links[0], target: "_blank" },
          React.createElement("div", { className: "zt-event-thumb", style: thumbStyle }),
          React.createElement(
            "div",
            { className: "zt-event-title" },
            this.props.eventItem.title
          )
        )
      );
    }
  }]);

  return EventItem;
}(React.Component);

var EventsBlock = function (_React$Component3) {
  _inherits(EventsBlock, _React$Component3);

  function EventsBlock() {
    _classCallCheck(this, EventsBlock);

    return _possibleConstructorReturn(this, (EventsBlock.__proto__ || Object.getPrototypeOf(EventsBlock)).apply(this, arguments));
  }

  _createClass(EventsBlock, [{
    key: "render",
    value: function render() {
      var eventItems = this.props.events.map(function (e, idx) {
        return React.createElement(EventItem, { key: idx, eventItem: e });
      });
      return React.createElement(
        "div",
        { className: "zt-events-block fade-in-up" },
        eventItems
      );
    }
  }]);

  return EventsBlock;
}(React.Component);

// const content = {
//   yearTitle: "Year"
//   position: left, right, full
//   events: [EventItem]
// };


var Content = function (_React$Component4) {
  _inherits(Content, _React$Component4);

  function Content() {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
  }

  _createClass(Content, [{
    key: "render",
    value: function render() {
      var cName = "zt-tl-content " + "content-" + this.props.content.position;

      var eventsGroup = [];
      if (this.props.content.position == "full") {
        var len = this.props.content.events.length;
        var leftEvents = this.props.content.events.slice(0, len / 2);
        var rightEvents = this.props.content.events.slice(len / 2, len);

        eventsGroup = [leftEvents, rightEvents];
      } else {
        eventsGroup = [this.props.content.events];
      }

      var eventsBlocks = eventsGroup.map(function (es, idx) {
        return React.createElement(EventsBlock, { events: es, key: idx });
      });

      return React.createElement(
        "div",
        { className: cName },
        React.createElement(
          "h2",
          null,
          " ",
          this.props.content.yearTitle,
          " "
        ),
        eventsBlocks
      );
    }
  }]);

  return Content;
}(React.Component);

// TODO: 编辑内容


var LandingPage = function (_React$Component5) {
  _inherits(LandingPage, _React$Component5);

  function LandingPage() {
    _classCallCheck(this, LandingPage);

    return _possibleConstructorReturn(this, (LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).apply(this, arguments));
  }

  _createClass(LandingPage, [{
    key: "render",
    value: function render() {
      var pageStyle = {
        backgroundImage: "url(img/bg_0.jpeg)",
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
                { className: "zt-tl-message fade-in-down" },
                React.createElement(
                  "h2",
                  null,
                  "\u5468\u6D9B\u7684\u5947\u5999\u5192\u9669"
                ),
                React.createElement(
                  "h3",
                  null,
                  "TaoTao's Marvellous Adventure"
                )
              ),
              React.createElement(TlNode, { img: "img/icon_2.png" })
            )
          )
        )
      );
    }
  }]);

  return LandingPage;
}(React.Component);

// TODO: 编辑内容


var EndingPage = function (_React$Component6) {
  _inherits(EndingPage, _React$Component6);

  function EndingPage() {
    _classCallCheck(this, EndingPage);

    return _possibleConstructorReturn(this, (EndingPage.__proto__ || Object.getPrototypeOf(EndingPage)).apply(this, arguments));
  }

  _createClass(EndingPage, [{
    key: "render",
    value: function render() {
      var pageStyle = {
        backgroundImage: "url(img/bg_0.jpeg)",
        backgroundSize: "cover"
      };
      return React.createElement(
        "div",
        { className: "section", style: pageStyle },
        React.createElement(
          "div",
          { className: "zt-ending-page" },
          React.createElement(
            "div",
            { className: "zt-bottom" },
            React.createElement(
              "div",
              { className: "zt-tl-footer" },
              React.createElement(TlNode, { img: "img/icon_2.png" }),
              React.createElement(
                "div",
                { className: "zt-tl-message fade-in-up" },
                React.createElement(
                  "h2",
                  null,
                  "\u611F\u8C22\u60A8\u4E3A\u4E16\u754C\u5E26\u6765\u7F8E\u3002"
                ),
                React.createElement(
                  "h3",
                  null,
                  "Thank you for bringing beauty into the world!"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return EndingPage;
}(React.Component);

var Page = function (_React$Component7) {
  _inherits(Page, _React$Component7);

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
          this.props.page.parts
        )
      );
    }
  }]);

  return Page;
}(React.Component);

var App = function (_React$Component8) {
  _inherits(App, _React$Component8);

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
        this.props.pages,
        React.createElement(EndingPage, null)
      );
    }
  }]);

  return App;
}(React.Component);