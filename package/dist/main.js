"use strict";

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


var node10 = React.createElement(TlNode, { img: "img/icon_1.png" });
var c10 = React.createElement(Content, { content: createContent(2010, data10, "right") });

var node02 = React.createElement(TlNode, { img: "img/icon_2.png" });
var c02 = React.createElement(Content, { content: createContent(2002, data02, "left") });

var p1 = {
  bgImg: "",
  parts: [node02, c02]
};

var p2 = {
  bgImg: "",
  parts: [node10, c10, node02, c02]
};

var pageData = [p1, p2];

var appPages = pageData.map(function (p, idx) {
  return React.createElement(Page, { key: idx, page: p });
});

ReactDOM.render(React.createElement(App, { pages: appPages }), document.getElementById('fullpage'));

// TODO: set anchors
var anchors = ["Home"].concat(appPages.map(function (i, idx) {
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
  responsiveWidth: 800,
  responsiveHeight: 480,

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