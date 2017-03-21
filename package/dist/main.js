"use strict";

var pageStack = [];

var nodes = data.map(function (d, idx) {
  return React.createElement(TlNode, { img: "img/icon/icon_" + (idx % 18 + 1) + ".jpg" });
});

var contentGenerator = function contentGenerator(idx) {
  if (idx < data.length) {
    var d = data[idx];

    if (d.chopIdx > 0) {
      var content1 = React.createElement(Content, { content: createContent(d.year, d.year, "full", d.data.slice(0, d.chopIdx)) });
      var content2 = React.createElement(Content, { content: createContent(d.year, "", "full", d.data.slice(d.chopIdx, d.length), d.chopIdx) });

      return [content1, content2];
    } else {
      var content = React.createElement(Content, { content: createContent(d.year, d.year, d.position, d.data) });

      return [content];
    }
  }
};

var bg = ["img/bg/bg_1.png", "img/bg/bg_2.png", "img/bg/bg_3.png", "img/bg/bg_4.png", "img/bg/bg_5.png"];
var pageGenerator = function pageGenerator(idx, parts) {
  var bgP = ["10% 0%", "90% 0%"];
  return { idx: i, bgImg: bg[idx % 5], bgPosition: bgP[idx % 2], parts: parts };
};

var i = 0;
var j = 0;

//93 95 96
pageStack.push(pageGenerator(j++, [nodes[i], contentGenerator(i++), nodes[i], contentGenerator(i++), nodes[i], contentGenerator(i++)]));

//97 98
pageStack.push(pageGenerator(j++, [nodes[i], contentGenerator(i++), nodes[i], contentGenerator(i++)]));

// ~00
pageStack.push(pageGenerator(j++, [nodes[i], contentGenerator(i++), nodes[i], contentGenerator(i++)]));

// ~02
pageStack.push(pageGenerator(j++, [nodes[i], contentGenerator(i++), nodes[i], contentGenerator(i++)]));

// ~04
pageStack.push(pageGenerator(j++, [nodes[i], contentGenerator(i++), nodes[i], contentGenerator(i++)]));

//~06
pageStack.push(pageGenerator(j++, [nodes[i], contentGenerator(i++), nodes[i], contentGenerator(i++)]));

//~07
pageStack.push(pageGenerator(j++, [nodes[i], contentGenerator(i++)]));

// ~08
pageStack.push(pageGenerator(j++, [nodes[i], contentGenerator(i++)]));

// ~09
pageStack.push(pageGenerator(j++, [nodes[i], contentGenerator(i++)]));

// ~10
pageStack.push(pageGenerator(j++, [nodes[i], contentGenerator(i++)]));

// ~11
pageStack.push(pageGenerator(j++, [nodes[i], contentGenerator(i++)]));

// ~12
pageStack.push(pageGenerator(j++, [nodes[i], contentGenerator(i++)]));
// const c12 = contentGenerator(i++)
// pageStack.push(
//   pageGenerator( j++, [
//     nodes[i], c12[0],
//   ] )
// )
// pageStack.push(
//   pageGenerator( j++, [
//     c12[1]
//   ] )
// )

// ~13
pageStack.push(pageGenerator(j++, [nodes[i], contentGenerator(i++)]));

// ~14
pageStack.push(pageGenerator(j++, [nodes[i], contentGenerator(i++)]));

// ~15
pageStack.push(pageGenerator(j++, [nodes[i], contentGenerator(i++)]));

// ~16
pageStack.push(pageGenerator(j++, [nodes[i], contentGenerator(i++)]));

// ~17
pageStack.push(pageGenerator(j++, [nodes[i], contentGenerator(i++)]));

var appPages = pageStack.map(function (p, idx) {
  return React.createElement(Page, { key: idx, page: p });
});

ReactDOM.render(React.createElement(App, { pages: appPages }), document.getElementById('fullpage'));

var anchors = ["Home", "1993~96", "1997~98", "1999~00", "2001~02", "2003~04", "2005~06", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "Thanks"];

// Animation & Action

$('#fullpage').fullpage({
  anchors: anchors,
  navigation: true,
  navigationPosition: "right",
  navigationTooltips: anchors,
  // scrollBar: true
  autoScrolling: false,
  fitToSection: false,
  // responsiveSlides: true,
  // responsiveWidth: 12000,
  // responsiveHeight: 7200,

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