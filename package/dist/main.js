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


var position = ["left", "right", "full"];
var layout = [0, 1, 0];

var pageData = data.map(function (d, idx) {
  var node = React.createElement(TlNode, { img: "img/icon00.jpeg" }); // change image name
  var content = React.createElement(Content, { content: createContent(d.year, d.data, position[layout[idx]]) });

  return { bgImg: "", parts: [node, content] };
});

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
  responsiveWidth: 80000,
  responsiveHeight: 48000,

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