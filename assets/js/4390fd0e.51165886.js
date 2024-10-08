"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73484],{15680:(e,i,t)=>{t.d(i,{xA:()=>k,yg:()=>m});var l=t(96540);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function r(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);i&&(l=l.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,l)}return t}function n(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?r(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function y(e,i){if(null==e)return{};var t,l,a=function(e,i){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),w=function(e){var i=l.useContext(o),t=i;return e&&(t="function"==typeof e?e(i):n(n({},i),e)),t},k=function(e){var i=w(e.components);return l.createElement(o.Provider,{value:i},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var i=e.children;return l.createElement(l.Fragment,{},i)}},p=l.forwardRef((function(e,i){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,k=y(e,["components","mdxType","originalType","parentName"]),d=w(t),p=a,m=d["".concat(o,".").concat(p)]||d[p]||s[p]||r;return t?l.createElement(m,n(n({ref:i},k),{},{components:t})):l.createElement(m,n({ref:i},k))}));function m(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var r=t.length,n=new Array(r);n[0]=p;var y={};for(var o in i)hasOwnProperty.call(i,o)&&(y[o]=i[o]);y.originalType=e,y[d]="string"==typeof e?e:a,n[1]=y;for(var w=2;w<r;w++)n[w]=t[w];return l.createElement.apply(null,n)}return l.createElement.apply(null,t)}p.displayName="MDXCreateElement"},78406:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>n,default:()=>s,frontMatter:()=>r,metadata:()=>y,toc:()=>w});var l=t(9668),a=(t(96540),t(15680));const r={description:"Weekly Wiki",title:"Weekly Wiki",keywords:["weeely wiki"],image:"https://files.seeedstudio.com/wiki/IndexWiki/logo_image.jpg",last_update:{date:"10/08/2024",author:"Frank"}},n=void 0,y={unversionedId:"weekly_wiki",id:"weekly_wiki",title:"Weekly Wiki",description:"Weekly Wiki",source:"@site/docs/weekly_wiki.md",sourceDirName:".",slug:"/weekly_wiki",permalink:"/weekly_wiki",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/weekly_wiki.md",tags:[],version:"current",lastUpdatedBy:"Frank",lastUpdatedAt:1728345600,formattedLastUpdatedAt:"Oct 8, 2024",frontMatter:{description:"Weekly Wiki",title:"Weekly Wiki",keywords:["weeely wiki"],image:"https://files.seeedstudio.com/wiki/IndexWiki/logo_image.jpg",last_update:{date:"10/08/2024",author:"Frank"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with Seeed Studio Wiki Platform",permalink:"/Getting_Started"},next:{title:"Sensors and Sensing",permalink:"/Sensor_Network"}},o={},w=[{value:"Greetings",id:"greetings",level:2},{value:"Latest Wiki Launched",id:"latest-wiki-launched",level:2},{value:"Using VNC on reComputer Jetson",id:"using-vnc-on-recomputer-jetson",level:3},{value:"Using MID360 LiDAR on reComputer Jetson",id:"using-mid360-lidar-on-recomputer-jetson",level:3},{value:"MR60BHA2 mmWave Sensor with Home Assistant",id:"mr60bha2-mmwave-sensor-with-home-assistant",level:3},{value:"The Efforts of Contributor",id:"the-efforts-of-contributor",level:2},{value:"Seeed Studio XIAO RP2040 with NuttX(RTOS)",id:"seeed-studio-xiao-rp2040-with-nuttxrtos",level:3},{value:"Past Weekly wiki",id:"past-weekly-wiki",level:2}],k={toc:w},d="wrapper";function s(e){let{components:i,...t}=e;return(0,a.yg)(d,(0,l.A)({},k,t,{components:i,mdxType:"MDXLayout"}),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/IndexWiki/logo.png"})),(0,a.yg)("h2",{id:"greetings"},"Greetings"),(0,a.yg)("p",null,"This is Frank in Seeed Studio and welcome to the Seeed Studio weekly wiki! Each Monday, I will introduce you our latest wiki, including the ones related to our new products, the interesting projects published by Seeed Studio, and the tutorials, introductions, etc... You name it."),(0,a.yg)("p",null,'\u2728 For each week, when a collaborator contributes a project or fixes something important, we put the stars at the end of title of "Weekly Wiki" for more people be able to see their efforts\ud83d\udc4d.'),(0,a.yg)("p",null,"Today is October 7th, and a brand new week has begun! Check out what Seeed Studio did last week!"),(0,a.yg)("h2",{id:"latest-wiki-launched"},"Latest Wiki Launched"),(0,a.yg)("h3",{id:"using-vnc-on-recomputer-jetson"},(0,a.yg)("a",{parentName:"h3",href:"https://wiki.seeedstudio.com/vnc_for_recomputer/"},"Using VNC on reComputer Jetson")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/reComputer/Application/vnc_for_jetson/fig4.png"})),(0,a.yg)("p",null,"VNC is a remote desktop tool that allows you to remotely control your reComputer Nvidia Jetson form ohter PC devices, with real-time access to the graphical desktop. This wiki describes how to install and use VNC on the reComputer Nvidia Jetson."),(0,a.yg)("h3",{id:"using-mid360-lidar-on-recomputer-jetson"},(0,a.yg)("a",{parentName:"h3",href:"https://wiki.seeedstudio.com/mid360/"},"Using MID360 LiDAR on reComputer Jetson")),(0,a.yg)("p",null,"MID360 LIDAR sensors provide high-precision 3D point cloud data for various applications. This guide focuses on setting up the MID360 on a ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html"},"reComputer J30/40")," device running ROS Noetic."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/robotics/hardware/MID360/reesult.png"})),(0,a.yg)("p",null,"This wiki provides a step-by-step guide to install and set up MID360 LiDAR on ",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html"},"reComputer J30/40")," Jetson using ROS, and visualize point cloud data."),(0,a.yg)("h3",{id:"mr60bha2-mmwave-sensor-with-home-assistant"},(0,a.yg)("a",{parentName:"h3",href:"https://wiki.seeedstudio.com/ha_with_mr60bha2/"},"MR60BHA2 mmWave Sensor with Home Assistant")),(0,a.yg)("p",null,"The MR60BHA2 is a 60GHz mmWave Breathing and Heartbeat Detection Sensor module designed for integration with the XIAO ESP32C6 microcontroller. This advanced sensor utilizes millimeter-wave technology to provide non-invasive monitoring of vital signs and presence detection."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-light-on.jpg"})),(0,a.yg)("p",null,"This guide aims to provide a clear and comprehensive walkthrough for integrating the MR60BHA2 mmWave Sensor with Home Assistant using the XIAO ESP32C6 microcontroller. By following this guide, users will learn how to set up the sensor for heartbeat detection, connect it to their Home Assistant environment, and utilize ESPHome to manage and monitor the device effectively. "),(0,a.yg)("h2",{id:"the-efforts-of-contributor"},"The Efforts of Contributor"),(0,a.yg)("h3",{id:"seeed-studio-xiao-rp2040-with-nuttxrtos"},(0,a.yg)("a",{parentName:"h3",href:"https://wiki.seeedstudio.com/xiao-rp2040-with-nuttx/"},"Seeed Studio XIAO RP2040 with NuttX(RTOS)")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://nuttx.apache.org/"},"NuttX")," is a mature real-time operating system (RTOS) widely recognized for its standards compliance and small footprint. One of NuttX's main features is its scalability, which allows it to be used in environments ranging from 8-bit microcontrollers to 64-bit systems. This flexibility is achieved through adherence to POSIX and ANSI standards, enabling you to experiment with similar NuttX features across a wide range of chips from different architectures, families, and semiconductor vendors."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{200}",src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/NuttX/nuttx.svg"})),(0,a.yg)("p",null,"Additionally, NuttX offers many advanced and useful features, such as USB, Ethernet, Audio, and Graphics subsystems. These characteristics make NuttX an attractive choice for developers seeking a versatile, robust RTOS capable of operating on various types of hardware."),(0,a.yg)("p",null,"NuttX supports a vast and continually expanding number of boards. ",(0,a.yg)("a",{parentName:"p",href:"https://nuttx.apache.org/docs/latest/platforms/"},"The official documentation")," provides a comprehensive list of supported boards, organized by architecture and System-on-Chip (SoC) series. For instance, the ",(0,a.yg)("a",{parentName:"p",href:"https://nuttx.apache.org/docs/latest/platforms/arm/rp2040/boards/seeed-xiao-rp2040/index.html"},"Seeed Studio Xiao RP2040")," page in the NuttX documentation offers detailed descriptions of each supported feature and instructions on how to utilize them."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Check on ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6"},"GitHub")," for more information."),(0,a.yg)("li",{parentName:"ul"},"We will be really appreciate if you can ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35179519"},"share your ideas")," with us! ")),(0,a.yg)("h2",{id:"past-weekly-wiki"},"Past Weekly wiki"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Click here"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki227"},"weekly wiki on 2.27th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki306"},"weekly wiki on 3.06th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki313"},"weekly wiki on 3.13th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki320"},"weekly wiki on 3.20th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki327"},"weekly wiki on 3.27th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki403"},"weekly wiki on 4.03rd")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki410"},"weekly wiki on 4.10th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki417"},"weekly wiki on 4.17th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki424"},"weekly wiki on 4.24th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki515"},"weekly wiki on 5.15th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki522"},"weekly wiki on 5.22nd")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki529"},"weekly wiki on 5.29th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki605"},"weekly wiki on 6.05th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki612"},"weekly wiki on 6.12th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki619"},"weekly wiki on 6.19th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki703"},"weekly wiki on 7.03th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki710"},"weekly wiki on 7.10th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki717"},"weekly wiki on 7.17th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki724"},"weekly wiki on 7.24th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki731"},"weekly wiki on 7.31th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki807"},"weekly wiki on 8.07th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki821"},"weekly wiki on 8.21st")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki828"},"weekly wiki on 8.28th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki911"},"weekly wiki on 9.11st")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki918"},"weekly wiki on 9.18th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki925"},"weekly wiki on 9.25th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1009"},"weekly wiki on 10.9th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1016"},"weekly wiki on 10.16th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1023"},"weekly wiki on 10.23th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1030"},"weekly wiki on 10.30th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1106"},"weekly wiki on 11.06th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1113"},"weekly wiki on 11.13th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1120"},"weekly wiki on 11.20th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1127"},"weekly wiki on 11.27th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1204"},"weekly wiki on 12.04th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1211"},"weekly wiki on 12.11th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1218"},"weekly wiki on 12.18th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki1225"},"weekly wiki on 12.25th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240108"},"weekly wiki on 2024.1.08th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240115"},"weekly wiki on 2024.1.15th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240122"},"weekly wiki on 2024.1.22nd")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240129"},"weekly wiki on 2024.1.29th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240219"},"weekly wiki on 2024.2.19th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240226"},"weekly wiki on 2024.2.26th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240304"},"weekly wiki on 2024.3.04th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240311"},"weekly wiki on 2024.3.11th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240318"},"weekly wiki on 2024.3.18th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240325"},"weekly wiki on 2024.3.25th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240401"},"weekly wiki on 2024.4.01st")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240408"},"weekly wiki on 2024.4.08th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240415"},"weekly wiki on 2024.4.15th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240422"},"weekly wiki on 2024.4.22nd")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240429"},"weekly wiki on 2024.4.29th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240506"},"weekly wiki on 2024.5.06th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240513"},"weekly wiki on 2024.5.13th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240520"},"weekly wiki on 2024.5.20th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240527"},"weekly wiki on 2024.5.27th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240603"},"weekly wiki on 2024.6.03rd")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240610"},"weekly wiki on 2024.6.10th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240617"},"weekly wiki on 2024.6.17th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240624"},"weekly wiki on 2024.6.24th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240701"},"weekly wiki on 2024.7.01st")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240708"},"weekly wiki on 2024.7.08th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240716"},"weekly wiki on 2024.7.16th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240722"},"weekly wiki on 2024.7.22th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240729"},"weekly wiki on 2024.7.29th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240805"},"weekly wiki on 2024.8.05th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240812"},"weekly wiki on 2024.8.12th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240819"},"weekly wiki on 2024.8.19th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240826"},"weekly wiki on 2024.8.26th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240902"},"weekly wiki on 2024.9.02nd")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240909"},"weekly wiki on 2024.9.09th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240918"},"weekly wiki on 2024.9.16th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240923"},"weekly wiki on 2024.9.23th")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki240930"},"weekly wiki on 2024.9.30th")))))}s.isMDXComponent=!0}}]);