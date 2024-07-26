"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5751],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=l(a),u=r,d=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return a?n.createElement(d,i(i({ref:t},g),{},{components:a})):n.createElement(d,i({ref:t},g))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},18710:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(58168),r=(a(96540),a(15680));const o={description:"This wiki provides detailed steps to set up and run the A-LOAM algorithm on reComputer Jetson using a RoboSense RS32 LiDAR sensor.",title:"Run A-LOAM 3D SLAM",keywords:["A-LOAM","SLAM","reComputer","Jetson nano","ROS"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/a_loam",last_update:{date:"05/7/2024",author:"ZhuYaoHui"}},i="How to run A-LOAM 3D SLAM on reComputer",s={unversionedId:"Edge/NVIDIA_Jetson/Application/Robotics/Software/A_Loam",id:"Edge/NVIDIA_Jetson/Application/Robotics/Software/A_Loam",title:"Run A-LOAM 3D SLAM",description:"This wiki provides detailed steps to set up and run the A-LOAM algorithm on reComputer Jetson using a RoboSense RS32 LiDAR sensor.",source:"@site/docs/Edge/NVIDIA_Jetson/Application/Robotics/Software/A_Loam.md",sourceDirName:"Edge/NVIDIA_Jetson/Application/Robotics/Software",slug:"/a_loam",permalink:"/a_loam",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/Application/Robotics/Software/A_Loam.md",tags:[],version:"current",lastUpdatedBy:"ZhuYaoHui",lastUpdatedAt:171504e4,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{description:"This wiki provides detailed steps to set up and run the A-LOAM algorithm on reComputer Jetson using a RoboSense RS32 LiDAR sensor.",title:"Run A-LOAM 3D SLAM",keywords:["A-LOAM","SLAM","reComputer","Jetson nano","ROS"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/a_loam",last_update:{date:"05/7/2024",author:"ZhuYaoHui"}},sidebar:"ProductSidebar",previous:{title:"Install ROS1",permalink:"/installing_ros1"},next:{title:"RoboSense Lidar with ROS",permalink:"/robosense_lidar"}},p={},l=[{value:"Introduction to A-LOAM",id:"introduction-to-a-loam",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Environment Setup",id:"environment-setup",level:3},{value:"Modify Configuration Files and Source Code",id:"modify-configuration-files-and-source-code",level:3},{value:"Compile the Package",id:"compile-the-package",level:3},{value:"Starting 3D SLAM",id:"starting-3d-slam",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:l},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"how-to-run-a-loam-3d-slam-on-recomputer"},"How to run A-LOAM 3D SLAM on reComputer"),(0,r.yg)("h2",{id:"introduction-to-a-loam"},"Introduction to A-LOAM"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/HKUST-Aerial-Robotics/A-LOAM/tree/devel"},"A-LOAM")," is an advanced implementation of the original LOAM (Lidar Odometry and Mapping) algorithm by J. Zhang and S. Singh. The key features of A-LOAM include:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Real-time LiDAR odometry and mapping."),(0,r.yg)("li",{parentName:"ul"},"Simplified code structure using Eigen and Ceres Solver."),(0,r.yg)("li",{parentName:"ul"},"High performance and robustness in diverse environments.")),(0,r.yg)("p",null,"A-LOAM can be used for various applications including autonomous driving, robotics, and 3D mapping."),(0,r.yg)("p",null,"This wiki provides detailed steps to set up and run the A-LOAM (Advanced LOAM) algorithm on reComputer Jetson Series using a RoboSense RS32 LiDAR sensor. A-LOAM is an advanced implementation of LOAM (Lidar Odometry and Mapping in Real-time) that utilizes Eigen and Ceres Solver for efficient and real-time mapping and localization."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/robotics/software/aloam/fig0.gif"})),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html"},"reComputer J30/40")),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"RoboSense RS32 Lidar"),"."),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Ensure your reComputer is running Jetpack 5.x. We have only tested on Ubuntu 20.04 and ROS Noetic. Follow the ",(0,r.yg)("a",{parentName:"li",href:"/installing_ros1"},"ROS1 installation for reComputer")," as outlined in this guide to complete the ROS environment setup."),(0,r.yg)("li",{parentName:"ul"},"Ensure you follow the tutorial to ",(0,r.yg)("a",{parentName:"li",href:"/robosense_lidar"},"launch the RoboSense RS32 LiDAR on reComputer in ROS"),", and successfully visualize the point cloud data."))))),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg"})),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("h3",{id:"environment-setup"},"Environment Setup"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 1:")," Install gflags, google-glog, suitesparse, cxsparse3, cxsparse.",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install libgflags-dev libgoogle-glog-dev\nsudo apt-get install libsuitesparse-dev libcxsparse3 libcxsparse-dev\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 2:")," Install PCL (Point Cloud Library).",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sudo apt install libpcl-dev\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 3:")," Install Ceres.",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"wget ceres-solver.org/ceres-solver-1.14.0.tar.gz\ntar xvf ceres-solver-1.14.0.tar.gz\ncd ceres-solver-1.14.0\nmkdir build\ncd build\ncmake ..\nmake -j4 \nsudo make install\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 4:")," Clone the A-LOAM code into the src directory of your workspace (~/catkin_ws/src).",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cd ~/catkin_ws/src\ngit clone https://github.com/HKUST-Aerial-Robotics/A-LOAM.git\n")))),(0,r.yg)("h3",{id:"modify-configuration-files-and-source-code"},"Modify Configuration Files and Source Code"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 1:")," Since the A-LOAM algorithm requires the point cloud type to be ",(0,r.yg)("strong",{parentName:"p"},"XYZIRT"),", and the RS32 LiDAR default output is ",(0,r.yg)("strong",{parentName:"p"},"XYZI"),", you need to modify the ",(0,r.yg)("strong",{parentName:"p"},"CMakeLists.txt")," file at line ",(0,r.yg)("strong",{parentName:"p"},"8")," in the ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"~/catkin_ws/src/rslidar_sdk/"))," directory, changing ",(0,r.yg)("strong",{parentName:"p"},"XYZI")," to ",(0,r.yg)("strong",{parentName:"p"},"XYZIRT"),"."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/robotics/software/aloam/fig1.png"}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 2:")," The default point cloud topic that A-LOAM subscribes to is ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"/velodyne_points")),", while the RS32 LiDAR default output topic is ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"/rslidar_points")),". Therefore, modify the topic name at line 26 in the ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"~/catkin_ws/src/rslidar_sdk/config/config.yaml"))," file to ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"/velodyne_points")),"."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/robotics/software/aloam/fig2.png"}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 3:")," If you are using C++14, modify line ",(0,r.yg)("strong",{parentName:"p"},"5")," in the ",(0,r.yg)("strong",{parentName:"p"},"CMakeLists.txt")," file located in the ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"~/catkin_ws/src/A-LOAM/"))," directory, changing ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"C++11"))," to ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"C++14")),"."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/robotics/software/aloam/fig3.png"}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 4:")," If you are using ",(0,r.yg)("strong",{parentName:"p"},"OpenCV 4.x"),", you need to update the OpenCV header file references at line ",(0,r.yg)("strong",{parentName:"p"},"44")," in the ",(0,r.yg)("strong",{parentName:"p"},"scanRegistration.cpp")," file located in the ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"~/catkin_ws/src/A-LOAM/src"))," directory (this step can be skipped if you are using OpenCV 3.x)."),(0,r.yg)("p",{parentName:"li"},"Replace code"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-c++"},"#include <opencv/cv.h>\n")),(0,r.yg)("p",{parentName:"li"},"with"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-c++"},"#include <opencv2/opencv.hpp>\n")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/robotics/software/aloam/fig4.png"}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 5:")," In lines ",(0,r.yg)("strong",{parentName:"p"},"91")," and ",(0,r.yg)("strong",{parentName:"p"},"93")," of ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"~/catkin_ws/src/A-LOAM/src/kittiHelper.cpp")),", change ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"CV_LOAD_IMAGE_GRAYSCALE"))," to ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"cv::IMREAD_GRAYSCALE"))),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/robotics/software/aloam/fig5.png"}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Step 6:")," If you are using ",(0,r.yg)("strong",{parentName:"p"},"tf2"),", modify all ",(0,r.yg)("strong",{parentName:"p"},".cpp")," files ",(0,r.yg)("strong",{parentName:"p"},"(kittiHelper.cpp, laserMapping.cpp, laserOdometry.cpp, scanRegistration.cpp)")," in the ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"~/catkin_ws/src/A-LOAM/src/"))," directory by changing ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"frame_id=/camera_init"))," to ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"frame_id=camera_init")),", removing only the ",(0,r.yg)("strong",{parentName:"p"},"'/'")," symbol."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/robotics/software/aloam/fig6.png"})))),(0,r.yg)("h3",{id:"compile-the-package"},"Compile the Package"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 1:")," Go back to the workspace and recompile the feature pack and reload the environment.",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cd ~/catkin_ws\ncatkin_make\nsource ~/catkin_ws/devel/setup.bash\n")))),(0,r.yg)("h3",{id:"starting-3d-slam"},"Starting 3D SLAM"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 1:")," Running lidar code",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"  roslaunch rslidar_sdk start.launch\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 2:")," Running A loam code",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"roslaunch aloam_velodyne aloam_velodyne_HDL_32.launch\n")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/robotics/software/aloam/fig7.png"})))),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);