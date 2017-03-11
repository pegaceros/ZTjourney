
// Componets

class Page extends React.Component {
  render() {
    return (
      <div className="section">
          <div className="zt-tl-block">
              <div className="zt-tl-node">
              </div>
              <div className="zt-tl-content left-content">
                  <h4 className="zl-tl-date">{this.props.node.date}</h4>
                  <h3 className="zl-tl-title">{this.props.node.title}</h3>
                  <p className="zl-tl-description>">{this.props.node.description}
                  </p>
              </div>
              <div className="zt-tl-content right-content">
                  <a href={this.props.node.link} target="_blank">
                      <img src={this.props.node.thumbnail}></img>
                  </a>
              </div>
          </div>
      </div>
    );
  }
}

class Pages extends React.Component {
  render() {
    return (
      <div>
        {this.props.pages}
      </div>
    )
  }
}



// Dummy data

const node1 = {
  id: "1",
  date: "2015",
  title: "真情无限",
  description: "环保环保环保",
  thumbnail: "img/thumbnail.jpg",
  link: "http://www.bilibili.com/video/av5202457/index_2.html"
};

const node2 = {
  id: "2",
  date: "2016",
  title: "春节联欢晚会2016",
  description: "2016央视春晚主持阵容发布：在中央电视台一号演播大厅主会场的共有六位主持人，分别是周涛、朱军、董卿、撒贝宁、李思思和尼格买提。福建泉州分会场：李佳明、赵琳硕；陕西西安分会场：朱迅、徐杰；广东广州分会场：任鲁豫、邓璐；内蒙古呼伦贝尔分会场：马跃、欧仁图雅。",
  thumbnail: "img/thumbnail.jpg",
  link: "http://www.bilibili.com/video/av5202457/index_1.html"
};

const node3 = {
  id: "3",
  date: "2017",
  title: "Dream",
  description: "BLABLABLABLABLABLABL",
  thumbnail: "img/thumbnail.jpg",
  link: "http://www.bilibili.com/video/av5202457/index_3.html"
};

const nodeList = [node1, node2, node3];


const pageList = nodeList.map( (node) =>
  <Page key={node.id} node={node} />
);


// Render

ReactDOM.render(
  <Pages pages={pageList}/>,
  document.getElementById('fullpage')
);



// Animation & Action

$('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    sectionsColor: ['#7E8F7C', '#C63D0F', '#1BBC9B'],
    scrollBar: true
});
