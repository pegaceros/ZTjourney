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
    const thumbStyle = {
      backgroundImage: "url(" + this.props.eventItem.thumb + ")",
    };
    // <div className="zt-event-thumb" style={thumbStyle}></div>
    // <img className="zt-event-thumb" src={this.props.eventItem.thumb} />
    let l = "javascript:void(0)";
    // console.log(this.props.eventItem.links[0]);
    if (this.props.eventItem.links[0]) {
      l = this.props.eventItem.links[0];
    }
    return (
      // TODO: 处理复数 links
      <div className="zt-event">
        <a href={l} target="_blank">
          <div className="zt-event-preview">
            <div className="zt-event-thumb" style={thumbStyle}></div>
            <div className="zt-event-description">
              <div>{this.props.eventItem.description}</div>
            </div>
          </div>
        </a>
        <div className="zt-event-title">
          {this.props.eventItem.title}
        </div>
      </div>
    )
  }
}

class EventsBlock extends React.Component {
  render () {
    const eventItems = this.props.events.map( (e, idx) =>
      <EventItem key={idx} eventItem={e} />
    );
    return (
      <div className="zt-events-block fade-in-up">
        {eventItems}
      </div>
    )
  }
}

// const content = {
//   yearTitle: "Year"
//   position: left, right, full
//   events: [EventItem]
// };
class Content extends React.Component {
  render () {
    const position = this.props.content.position;

    var eventsGroup = [];
    if (position == "full") {
      const len = this.props.content.events.length;
      const mid = Math.ceil(len / 2);
      const leftEvents = this.props.content.events.slice(0, mid);
      const rightEvents = this.props.content.events.slice(mid, len);

      eventsGroup = [leftEvents, rightEvents];
    } else {
      eventsGroup = [this.props.content.events];
    }

    const eventsBlocks = eventsGroup.map( (es, idx) =>
      <EventsBlock events={es} key={idx} />
    );

    // const fadeStyle = (position == "right") ? "fade-in-left" : "fade-in-right";

    const cName = "zt-tl-content " + "content-" + position;
    // const cName2 ="content-title " + fadeStyle;

    return (
      <div className={cName}>
        <h2 className="content-title">{this.props.content.yearTitle}</h2>
        {eventsBlocks}
      </div>
    )
  }
}


// TODO: 编辑内容
class LandingPage extends React.Component {
  render () {
    const pageStyle = {
      backgroundImage: "", //url(img/bg_0.jpeg)
      backgroundSize: "cover",
    };
    return (
      <div className="section" style={pageStyle}>
          <div className="zt-landing-page">
              <div className="zt-top">
                <div>
                  <h1>周涛，2017生日快乐！</h1>
                  <h2>Happy 49th Birthday!</h2>
                  <h5>四舍五入还没满月嘛 ( •̀ᴗ•́ )و ̑̑</h5>
                </div>
                  <div className="zt-tl-header">
                      <div className="zt-tl-message fade-in-down">
                          <h3>TaoTao's Marvellous Adventure</h3>
                      </div>
                      <TlNode img="img/icon000.jpeg" />
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
      backgroundImage: "", //url(img/bg_0.jpeg)
      backgroundSize: "cover",
    };
    return (
      <div className="section" style={pageStyle}>
          <div className="zt-ending-page">
              <div className="zt-bottom">
                  <div className="zt-tl-footer">
                      <TlNode img="img/icon000.jpeg" />
                      <div className="zt-tl-message fade-in-up">
                          <h3>To Be Continued</h3>
                      </div>
                  </div>
                  <div>
                      <h1>感谢您为世界带来美。</h1>
                      <h2>Thank you for bringing beauty into the world.</h2>
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
      backgroundAttachment: "fixed"
    };

    return (
      <div className="section" style={pageStyle}>
          <div className="zt-tl-block">
              {this.props.page.parts}
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
