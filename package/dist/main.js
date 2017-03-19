"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// const pageList = [page1, page2 //, page3, page4, page5,
//   // page1, page2, page3, page4, page5,
//   // page1, page2, page3, page4, page5,
//   // page1, page2, page3, page4, page5,
//   // page1, page2, page3, page4, page5
// ];
//
//
// // Render
//
// const pages = pageList.map( (page, idx) =>
//   <Page key={idx} page={page} />
// );


// const node10 = <TlNode img="img/icon00.jpeg" />
// const c10 = <Content content={createContent(2010, data2010, "right")} />
//
// const node02 = <TlNode img="img/icon_2.png" />
// const c02 = <Content content={createContent(2002, data2002, "left")} />
//
// const p1 = {
//   bgImg: "",
//   parts: [node02, c02]
// }
//
// const p2 = {
//   bgImg: "",
//   parts: [node02, c02, node10, c10]
// }
//
// const pageData = [p1, p2]

// 分页
// 2009 28
// 2011 19
// 2012 19
// 2014 22
// 2015 29
// 2016 26

// ----------

var position = ["left", "right", "full"];
// const layout = [0, 1, 0, 2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
//
// const pageData = data.map( (d, idx) => {
//   const node = <TlNode img="img/icon_2.png" /> // change image name
//   const content = <Content content={createContent(d.year, d.year, d.data, position[layout[idx]])} />
//
//   return {bgImg: "", parts:[node, content]}
// }
// )
//
// const appPages = pageData.map( (p, idx) =>
//   <Page key={idx} page={p} />
// )


// ----------

var pageStack = [];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var d = _step.value;

    var node = React.createElement(TlNode, { img: "img/icon_2.png" });
    console.log(d.year + ", " + d.chopIdx + ", typeof(d.chopIdx): " + _typeof(d.chopIdx));
    if (d.chopIdx > 0) {
      var content1 = React.createElement(Content, { content: createContent(d.year, d.year, position[2], d.data.slice(0, d.chopIdx)) });
      var content2 = React.createElement(Content, { content: createContent(d.year, "", position[2], d.data.slice(d.chopIdx, d.length), d.chopIdx) });

      pageStack.push({ bgImg: "", parts: [node, content1] }, { bgImg: "", parts: [content2] });
    } else {
      var content = React.createElement(Content, { content: createContent(d.year, d.year, position[2], d.data) });
      pageStack.push({ bgImg: "", parts: [node, content] });
    }
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var appPages = pageStack.map(function (p, idx) {
  return React.createElement(Page, { key: idx, page: p });
});

ReactDOM.render(React.createElement(App, { pages: appPages }), document.getElementById('fullpage'));

// TODO: set anchors
var anchors = ["Home"].concat(pageStack.map(function (p, idx) {
  return idx + 1 + "";
})).concat(["Thanks"]);

// Animation & Action

$('#fullpage').fullpage({
  anchors: anchors,
  navigation: true,
  navigationPosition: "right",
  navigationTooltips: anchors,
  // scrollBar: true
  responsiveSlides: true,
  responsiveWidth: 1200,
  responsiveHeight: 720,

  afterLoad: function afterLoad(anchorLink, index) {
    // console.log(anchorLink + " is loaded");
    var section = "[data-anchor='" + anchorLink + "']";
    var selectors = [section + " .fade-in-up", section + " .fade-in-down", section + " .fade-in-left", section + " .fade-in-right"];

    var ele = $(selectors.join(","));
    ele.css({
      "opacity": "1",
      "transform": "translate(0, 0)",
      "-webkit-transform": "translate(0, 0)",
      "-moz-transform": "translate(0, 0)"
    });
  }
});