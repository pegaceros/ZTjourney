
// Componets

// const node = {
//   img: "img/icon_2.png"
// };
class TlNode extends React.Component {
  render () {
    if (this.props.img) {
      const nodeStyle = {
        backgroundImage: "url(" + this.props.img + ")",
      };
      return (
        <div className="zt-tl-node" style={nodeStyle}>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}


// const eventItem = {
//   title: "title",
//   thumb: "img/thumb_1.jpg",
//   link: "http://www.bilibili.com/video/av5202457/index_1.html"
// };
class EventItem extends React.Component {
  render () {
    console.log(this.props.eventItem);
    const thumbStyle = {
      backgroundImage: "url(" + this.props.eventItem.thumb + ")",
    };
    // <div className="zt-event-thumb" style={thumbStyle}></div>
    // <img className="zt-event-thumb" src={this.props.eventItem.thumb} />
    return (
      <a className="zt-event" href={this.props.eventItem.link} target="_blank">
          <div className="zt-event-thumb" style={thumbStyle}></div>
          <div className="zt-event-title">{this.props.eventItem.title}</div>
      </a>
    )
  }
}

class EventsBlock extends React.Component {
  render () {
    const eventItems = this.props.events.map( (e, idx) =>
      <EventItem key={idx} eventItem={e} />
    );
    return (
      <div className="zt-events-block">
        {eventItems}
      </div>
    )
  }
}

// const content = {
//   title: "Year"
//   position: left, right, full
//   events: [EventItem]
// };
class Content extends React.Component {
  render () {
    const cName = "zt-tl-content " + "content-" + this.props.content.position;

    var eventsGroup = [];
    if (this.props.content.position == "full") {
      const len = this.props.content.events.length;
      const leftEvents = this.props.content.events.slice(0, len/2);
      const rightEvents = this.props.content.events.slice(len/2, len);

      eventsGroup = [leftEvents, rightEvents];
    } else {
      eventsGroup = [this.props.content.events];
    }

    const eventsBlocks = eventsGroup.map( (es, idx) =>
      <EventsBlock events={es} key={idx} />
    );

    return (
      <div className={cName}>
        <h2> hello zhoutao </h2>
        {eventsBlocks}
      </div>
    )
  }
}


// TODO: 编辑内容
class LandingPage extends React.Component {
  render () {
    const pageStyle = {
      backgroundImage: "url(img/bg_0.jpg)",
      backgroundSize: "cover",
    };
    return (
      <div className="section" style={pageStyle}>
          <div className="zt-landing-page">
              <div className="zt-top">
                  <div className="zt-tl-header">
                      <div className="zt-tl-message fade-in-down">
                          <h2>周涛的奇妙冒险</h2>
                          <h3>TaoTao's Marvellous Adventure</h3>
                      </div>

                      <TlNode img="img/icon_2.png" />
                  </div>
              </div>

          </div>
      </div>
    )
  }
}

// TODO: 编辑内容
class EndingPage extends React.Component {
  render () {
    const pageStyle = {
      backgroundImage: "url(img/bg_0.jpg)",
      backgroundSize: "cover",
    };
    return (
      <div className="section" style={pageStyle}>
          <div className="zt-ending-page">
              <div className="zt-bottom">
                  <div className="zt-tl-footer">
                      <TlNode img="img/icon_2.png" />

                      <div className="zt-tl-message fade-in-up">
                          <h2>谢谢您为世界带来美。</h2>
                          <h3>Thank you for bringing beauty into the world!</h3>
                      </div>
                  </div>
              </div>

          </div>
      </div>
    )
  }
}


class Page extends React.Component {
  render() {
    const pageStyle = {
      backgroundImage: "url(" + this.props.page.bgImg + ")",
      backgroundSize: "cover",
    };
    const content1 = {
      position: "full",
      events: this.props.page.events
    }

    const content2 = {
      position: "left",
      events: this.props.page.events
    }

    return (
      <div className="section" style={pageStyle}>
          <div className="zt-tl-block">
              <TlNode img={this.props.page.nodeImg} />
              <Content content={content1} />
          </div>
      </div>
    );
  }
}


class App extends React.Component {
  render() {
    return (
      <div>
        <LandingPage />
        {this.props.pages}
        <EndingPage />
      </div>
    )
  }
}


const pageList = [page1, page2 //, page3, page4, page5,
  // page1, page2, page3, page4, page5,
  // page1, page2, page3, page4, page5,
  // page1, page2, page3, page4, page5,
  // page1, page2, page3, page4, page5
];


// Render

const pages = pageList.map( (page, idx) =>
  <Page key={idx} page={page} />
);



ReactDOM.render(
  <App pages={pages}/>,
  document.getElementById('fullpage')
);

// TODO: set anchors
const anchors = ["Home"].concat(pageList.map( (i, idx) => (idx+1993) + "")).concat(["Thanks"])

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
