



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



const node10 = <TlNode img="img/icon_1.png" />
const c10 = <Content content={createContent(2010, data10, "right")} />

const node02 = <TlNode img="img/icon_2.png" />
const c02 = <Content content={createContent(2002, data02, "left")} />

const p1 = {
  bgImg: "",
  parts: [node02, c02]
}

const p2 = {
  bgImg: "",
  parts: [node10, c10, node02, c02]
}

const pageData = [p1, p2]

const appPages = pageData.map( (p, idx) =>
  <Page key={idx} page={p} />
)


ReactDOM.render(
  <App pages={appPages}/>,
  document.getElementById('fullpage')
);

// TODO: set anchors
const anchors = ["Home"].concat(appPages.map( (i, idx) => (idx+1) + "")).concat(["Thanks"])

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
