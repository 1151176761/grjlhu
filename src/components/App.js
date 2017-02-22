import React from 'react';
import Skill from './Skill';
import Info from './Info';
import Gong from './Gong';
import Item from './Item';
import Xiangmu from './Xiangmu';
import Pingjia from './Pingjia';
require('styles/App.css')
class App extends React.Component{
  constructor(){
    super()
    this.state={
      info: {
        title: "个人信息",
        detail: ["姓名：胡斌",
          "年龄：23",
            "民族：汉族",
            "现居地：北京",
            "电话：18410316929",
            "工作经验：三年",
            "邮箱：1151176761@qq.com",
            "学历 : 大专",
            "籍贯：山西省 吕梁市",
            "个人简历 : https://1151176761.github.io"
        ]
      },
      qiuz: {
        title: "求职意向",
        detail: ["期望职位：WEB前端工程师/HTML5工程师",
          "工作地区：北京",
          "期望月薪：8K-10K元/月",
          "目前状况：刚刚离职，可立即入职"
        ]
      },
      jineng:{
        title:"专业技能",
        detail:["1.掌握JavaScript语言,对CSS,HTML,JS的优化有一定的研究和了解，对前端技术保持跟踪和学习研究的态度；",
      "2.熟悉WEB标准化，能够熟练运用DIV+CSS、CSS3、HTML5、JQuery、Ajax、Json等技术来完成PC端布局及交互效果；",
      "3.熟悉H5，CSS3新特性，掌握rem布局，能够熟练运用HTML5技术搭建移动端页面，并且熟练解决适配等问题。",
      "4.熟悉媒体查询，了解Bootstrap，swiper框架，能够制作符合规范的响应式网站；",
      "5.熟悉AngularJS，VueJS等MVC框架，了解SUI具备一定的设计基础，偏好简约风格；",
      "6.熟练使用git/svn等版本管理工具进行团队开发；",
      "7.熟练使用grunt构建工具及yoman等前端自动化开发工具；",
      "8.熟练css的快速开发系统less的使用；",
      "9.了解NodeJS，能够实现和MySql数据库的链接及部分操作；",
      "10.了解react，能够独立完成react的前端项目，实现组件化开发；",
      "11.熟练使用Photoshop、WebStorm、Dreamweaver、HBuilder、Sublime Text等常用网页制作软件；"
        ]
      },
      xiangmu:{
        title:"项目经验",
        detail:[{a:"天天超市（Web APP）",
                 b:"项目描述：该项目是一个电商类型的网站，类似淘宝，天猫一样，是属于B2C模式",
                 c:"项目职责：1.进行移动端页面书写HTML5+CSS3+Js 实现交互效果 终端兼容性 2.网站的页面制作 / 网页动态效果的实现 / 该项目CSS 开发规范与约束的编写/json后台数据的调取。"},
                {a:"微心情（somenote: https://github.com/1151176761/hunote.git）",
                  b:"项目描述：这个项目是一个类似记事本的APP， 实现了登录、 注册 、发表，查看，删除，修改等功能。",
                  c:"项目职责：1.负责项目的前期预研，可行性报告；2.主要该网站的HTML和CSS页面制作；3.运用了Angular 和 Bootstarp等技术；4.负责该项目的页面设计，页面的编写；5.调取ajax, 并实现数据的增删改查；6.完成的页面进行维护和对网站前端性能做相应的优化 。"
                 },
                {a:"蓝铅笔（http://www.lanqb.com/）",
                 b:"项目描述：蓝铅笔是一个从事艺术绘画设计的网站，主要运用Html5，Css3，jQuery，Swiper，Jquery.lazyload.js，媒体查询等技术，支持多终端访问浏览。",
                 c:"项目职责：1.参与该项目前端页面HTML5+CSS3的编写以及一些动态效果的添加。2.和后台协商接口文档，使用AJAX实现页面内容的动态添加。3.对页面交互体验提出建设性建议."},
        ]
      },
      ping:{
        title:"自我评价",
        detail:["1.熟练掌握前端的开发技术，具有团队合作意识，能够吃苦耐劳，能和客户保持良性关系。",
          "2.具备项目经验，了解工作流程，可以做到有效简洁的工作沟通，对工作认真负责,服从管理。",
          "3.学习能力强，喜欢关注前端技术公众号和博客（CSDN,前端大全等），不断学习及研究，渴望进步。",
          "4.喜欢运动，喜欢大脑思维处于灵敏活跃状态."
        ]
      }
    }
  }
  render(){
    return(
      <div>
      <Item />
      <div className="content">
        <div className="content-l">
            <div className="content-ll">
                <div className="content-lll"></div>
            </div>
        </div>
      <div className="content-y">
      <Info aaa={this.state.info} />
      <Skill qiuy={this.state.qiuz} />
      <Skill qiuy={this.state.jineng} />
      <Gong />
      <Xiangmu bbb={this.state.xiangmu} />
      <Pingjia ccc={this.state.ping} />
       </div>
      </div>
    </div>
  )
 }
}
export default App;
