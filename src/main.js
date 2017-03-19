



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


const position = ["left", "right", "full"]
const layout = [0, 1, 0, 2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]

const pageData = data.map( (d, idx) => {
  const node = <TlNode img="img/icon_2.png" /> // change image name
  const content = <Content content={createContent(d.year, d.data, position[layout[idx]])} />

  return {bgImg: "", parts:[node, content]}
}
)


const appPages = pageData.map( (p, idx) =>
  <Page key={idx} page={p} />
)


ReactDOM.render(
  <App pages={appPages}/>,
  document.getElementById('fullpage')
);

// TODO: set anchors
const anchors = ["Home"].concat(data.map( (d, idx) => (d.year) + "")).concat(["Thanks"])

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
