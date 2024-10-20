"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47623],{15680:(e,t,i)=>{i.d(t,{xA:()=>p,yg:()=>y});var o=i(96540);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(i),h=n,y=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return i?o.createElement(y,a(a({ref:t},p),{},{components:i})):o.createElement(y,a({ref:t},p))}));function y(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,a[1]=s;for(var d=2;d<r;d++)a[d]=i[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}h.displayName="MDXCreateElement"},71385:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=i(9668),n=(i(96540),i(15680));const r={description:"Deploy AI model from SenseCraft on Watcher",title:"Training Model for Watcher",image:"https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png",slug:"/training_model_for_watcher",sidebar_position:2,last_update:{date:"10/9/2024",author:"Jason"}},a="Training Model for Watcher",s={unversionedId:"Sensor/SenseCAP/SenseCAP_Watcher/Applications/watcher_train_model",id:"Sensor/SenseCAP/SenseCAP_Watcher/Applications/watcher_train_model",title:"Training Model for Watcher",description:"Deploy AI model from SenseCraft on Watcher",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Watcher/Applications/watcher_train_model.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Watcher/Applications",slug:"/training_model_for_watcher",permalink:"/training_model_for_watcher",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Watcher/Applications/watcher_train_model.md",tags:[],version:"current",lastUpdatedBy:"Jason",lastUpdatedAt:1728432e3,formattedLastUpdatedAt:"Oct 9, 2024",sidebarPosition:2,frontMatter:{description:"Deploy AI model from SenseCraft on Watcher",title:"Training Model for Watcher",image:"https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png",slug:"/training_model_for_watcher",sidebar_position:2,last_update:{date:"10/9/2024",author:"Jason"}},sidebar:"ProductSidebar",previous:{title:"What does Watcher do",permalink:"/what_does_watcher_do"},next:{title:"Smart Home",permalink:"/smart_main_page"}},l={},d=[{value:"SenseCraft Website Setup AI Model",id:"sensecraft-website-setup-ai-model",level:2},{value:"Step 1 . Open SenseCraft Website",id:"step-1--open-sensecraft-website",level:3},{value:"Step 2 . Setup training type",id:"step-2--setup-training-type",level:3},{value:"Step 3 . Collect data",id:"step-3--collect-data",level:3},{value:"Step 4 . Select Model",id:"step-4--select-model",level:3},{value:"Step 5 . Descriptive model",id:"step-5--descriptive-model",level:3},{value:"Step 6 . Set model parameters",id:"step-6--set-model-parameters",level:3},{value:"SenseCraft APP Setup Watcher",id:"sensecraft-app-setup-watcher",level:2},{value:"Step 1 . Choose your Watcher",id:"step-1--choose-your-watcher",level:3},{value:"Step 2 . Find Manually Set Up Task and enter",id:"step-2--find-manually-set-up-task-and-enter",level:3},{value:"Step 3 . Check &#39;Use TinyML Model&#39;",id:"step-3--check-use-tinyml-model",level:3},{value:"Step 4 . Find the model you deployed",id:"step-4--find-the-model-you-deployed",level:3},{value:"Step 5 . Set up threshold and condition",id:"step-5--set-up-threshold-and-condition",level:3},{value:"Step 6 . Set up Task Name",id:"step-6--set-up-task-name",level:3},{value:"Step 7 . Wait Watcher Deploy Model",id:"step-7--wait-watcher-deploy-model",level:3},{value:"Watcher AI Model Display",id:"watcher-ai-model-display",level:2},{value:"Result demonstration",id:"result-demonstration",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...i}=e;return(0,n.yg)(c,(0,o.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"training-model-for-watcher"},"Training Model for Watcher"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png",style:{width:1e3,height:"auto"}})),(0,n.yg)("p",null,"This WiKi article will teach you how to use our SenseCraft to train your own AI model and deploy it on our Watcher. It will be a very interesting process. If you still don't know what SenseCraft is, please click ",(0,n.yg)("a",{parentName:"p",href:"https://sensecraft.seeed.cc/"},"here"),". This is a platform that allows us to deploy various open-source AI models on Seeed Studio devices."),(0,n.yg)("h2",{id:"sensecraft-website-setup-ai-model"},"SenseCraft Website Setup AI Model"),(0,n.yg)("h3",{id:"step-1--open-sensecraft-website"},"Step 1 . Open ",(0,n.yg)("a",{parentName:"h3",href:"https://sensecraft.seeed.cc/"},"SenseCraft")," Website"),(0,n.yg)("p",null,'Click on "Products" in the top menu bar to see the dropdown options, and then select "SenseCraft AI"Click.'),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/1.png",style:{width:800,height:"auto"}})),(0,n.yg)("h3",{id:"step-2--setup-training-type"},"Step 2 . Setup training type"),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"We recommend using Grove Vision AI (V2) to collect training data from the camera here , Because Watcher uses the same chip as Grove Vision AI V2 (Arm Cortex-M55), so Grove Vision AI V2 was chosen to train Watcher's model , the best device to use for taking photos is the one deployed to, which will directly affect the final accuracy.")))),(0,n.yg)("p",null,"For convenience, a computer camera is used here to capture data . "),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/2.png",style:{width:800,height:"auto"}})),(0,n.yg)("h3",{id:"step-3--collect-data"},"Step 3 . Collect data"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Training steps")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Add Category"),(0,n.yg)("li",{parentName:"ul"},"Modify your Category tags"),(0,n.yg)("li",{parentName:"ul"},'click "Hold to Record" In the category you have chosen'),(0,n.yg)("li",{parentName:"ul"},"chose Grove Vision AI(V2)"),(0,n.yg)("li",{parentName:"ul"},"Start Traning")),(0,n.yg)("p",null,"In Collect Classification Data you can add the category you want , in here , I added car and doll as my category and modified the tags."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/3.png",style:{width:800,height:"auto"}})),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"The more data obtained and the clearer the pixels, the better the training results will be.")),(0,n.yg)("p",null,'After Training , you need to click "Click here"tags Under Start Training.'),(0,n.yg)("h3",{id:"step-4--select-model"},"Step 4 . Select Model"),(0,n.yg)("p",null,"you can see your Model file after training completion"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"click your Mode file"),(0,n.yg)("li",{parentName:"ul"},'click "Save to SenseCraft"')),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/4.png",style:{width:800,height:"auto"}})),(0,n.yg)("h3",{id:"step-5--descriptive-model"},"Step 5 . Descriptive model"),(0,n.yg)("p",null,"Please provide your ",(0,n.yg)("strong",{parentName:"p"},"Model Name"),", ",(0,n.yg)("strong",{parentName:"p"},"Model Excerpt"),", ",(0,n.yg)("strong",{parentName:"p"},"Model Introduction"),", ",(0,n.yg)("strong",{parentName:"p"},"Model Deployment Preparation"),". If you make the model public, this information will be very helpful to everyone. This is just a test, so it is written hastily."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/5(2).png",style:{width:800,height:"auto"}})),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Select SenseCAP Watcher and Grove-Vision AI V2 in Supported Devices.")),(0,n.yg)("h3",{id:"step-6--set-model-parameters"},"Step 6 . Set model parameters"),(0,n.yg)("p",null,"You can choose the AI Framework you want based on your model."),(0,n.yg)("p",null,"Confidence Threshold"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Confidence refers to the level of certainty or probability assigned by a model to its predictions.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Confidence is the degree of certainty or probability that a model has of its predicted results. It is usually expressed as a percentage, ranging from 0% to 100%."))),(0,n.yg)("p",null,"IOU Threshold"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"IoU is used to assess the accuracy of predicted bounding boxes compared to truth bounding boxes.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"IoU is an important indicator for evaluating the performance of object detection models. It measures the degree of overlap between the predicted bounding box and the actual bounding box.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"0% indicates no overlap.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"100% indicates complete overlap."))),(0,n.yg)("p",null,"After setting everything up, click Confirm."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/6.png",style:{width:800,height:"auto"}})),(0,n.yg)("p",null,"Return to Pretrained Models and click on My Own Models to see the model you have trained."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/7.png",style:{width:800,height:"auto"}})),(0,n.yg)("h2",{id:"sensecraft-app-setup-watcher"},"SenseCraft APP Setup Watcher"),(0,n.yg)("h3",{id:"step-1--choose-your-watcher"},"Step 1 . Choose your Watcher"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/20.jpg",style:{width:300,height:"auto"}})),(0,n.yg)("h3",{id:"step-2--find-manually-set-up-task-and-enter"},"Step 2 . Find Manually Set Up Task and enter"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/21.jpg",style:{width:300,height:"auto"}})),(0,n.yg)("h3",{id:"step-3--check-use-tinyml-model"},"Step 3 . Check 'Use TinyML Model'"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/22.jpg",style:{width:300,height:"auto"}})),(0,n.yg)("h3",{id:"step-4--find-the-model-you-deployed"},"Step 4 . Find the model you deployed"),(0,n.yg)("p",null,"Enter the name or scroll down to find your deployed AI model and check it"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/23.jpg",style:{width:300,height:"auto"}})),(0,n.yg)("h3",{id:"step-5--set-up-threshold-and-condition"},"Step 5 . Set up threshold and condition"),(0,n.yg)("p",null,"Confidence is the degree of confidence a model has in its predicted results, typically expressed as a value between 0 and 1, or a percentage between 0% and 100%.\nFor example, a confidence level of 80% in the model output indicates an 80% probability that it believes the prediction is correct."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/24.jpg",style:{width:300,height:"auto"}})),(0,n.yg)("h3",{id:"step-6--set-up-task-name"},"Step 6 . Set up Task Name"),(0,n.yg)("p",null,"Set the task name so that you can directly send it to the viewer to execute your model"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/25.jpg",style:{width:300,height:"auto"}})),(0,n.yg)("h3",{id:"step-7--wait-watcher-deploy-model"},"Step 7 . Wait Watcher Deploy Model"),(0,n.yg)("p",null,"Once you have selected the AI model and set the corresponding parameters, you can wait for the viewer to download it"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/26.jpg",style:{width:500,height:"auto"}})),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"During this period, the download may fail due to other external issues. You only need to reselect and set the parameters, and continue downloading.")),(0,n.yg)("h2",{id:"watcher-ai-model-display"},"Watcher AI Model Display"),(0,n.yg)("h3",{id:"result-demonstration"},"Result demonstration"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/gif.gif",style:{width:500,height:"auto"}})),(0,n.yg)("p",null,"This is the simple display effect of my AI model on Watcher , Looking forward to everyone's AI models shining brightly on Watcher!"),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"table-center"},(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}u.isMDXComponent=!0}}]);