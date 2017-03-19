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

// for (const d of data) {
//   const node = <TlNode img="img/icon000.jpeg" />
//   console.log(d.year+ ", "+ d.chopIdx + ", typeof(d.chopIdx): " + typeof(d.chopIdx));
// if(d.chopIdx > 0) {
//   const content1 = <Content content={createContent(d.year, d.year, "full", d.data.slice(0, d.chopIdx))} />
//   const content2 = <Content content={createContent(d.year, "", "full", d.data.slice(d.chopIdx, d.length), d.chopIdx)} />
//
//   pageStack.push(
//     {bgImg: "", parts:[node, content1]},
//     {bgImg: "", parts:[content2]}
//   )
// } else {
//   const content = <Content content={createContent(d.year, d.year, "full", d.data)} />
//   pageStack.push(
//     {bgImg: "", parts:[node, content]},
//   )
// }
// }


var nodes = data.map(function (d, idx) {
  return React.createElement(TlNode, { img: "img/icon000.jpeg" });
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

// {bgImg: "", parts:[node, content]},

var pageGenerator = function pageGenerator(idx, parts) {
  return { idx: i, bgImg: "", parts: parts };
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
// const c09 = contentGenerator(i++)
// pageStack.push(
//   pageGenerator( j++, [
//     nodes[i], c09[0],
//   ] )
// )
// pageStack.push(
//   pageGenerator( j++, [
//     c09[1]
//   ] )
// )

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