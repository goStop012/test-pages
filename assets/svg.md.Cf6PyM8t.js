import{_ as B,W as h,s as w,h as V,v as L,y as z,o as v,c as p,j as o,$ as M,af as E,F as H,E as T,ag as I,t as f,ad as C,p as N,l as O,I as j,a as D}from"./chunks/framework.Cn6CLnPL.js";const k=r=>(N("data-v-385e12c0"),r=r(),O(),r),P=k(()=>o("span",null,"|",-1)),A=["d"],R=k(()=>o("circle",{cx:"0",cy:"0",r:"2",fill:"red"},null,-1)),q={class:"left-aside"},F={class:"right-aside"},J=k(()=>o("footer",null,"x:-, y:-",-1)),Q={__name:"Svg",setup(r){const g=h({Mm:{comment:"起点",exp:"M0 0 L100 100",args:`
            - x
            - y
            -
            - dx
            - dy
            `},Ll:{comment:"直线",exp:"M0 0 L100 100",args:`
            - x
            - y
            -
            - dx
            - dy
            `},Hh:{comment:"水平线",exp:"M0 0 H100",args:`
            - x
            -
            - dx
            `},Vv:{comment:"垂直线",exp:"M0 0 V100",args:`
            - y
            -
            - dy
            `},Cc:{comment:"三次贝塞尔曲线",exp:"M0 0  C200 50 250 250 200 200",args:`
            - x1 y1
            - x2 y2
            - x y
            -
            - dx1 dy1
            - dx2 dy2
            - dx dy
            `},Ss:{comment:"平滑三次贝塞尔曲线",exp:"M0 0 S200 50 250 250",args:`
            - x2 y2
            - x y
            -
            - dx2 dy2
            - dx dy
            `},Qq:{comment:"二次贝塞尔曲线",exp:"M0 0 Q200 50 250 250",args:`
            - x1 y1
            - x y
            -
            - dx1 dy1
            - dx dy
            `},Tt:{comment:"平滑二次贝塞尔曲线",exp:"M0 0 T50 50",args:`
            - x y
            -
            - dx dy
            `},Aa:{comment:"椭圆曲线",exp:"M0 0 V25  a25 25 0 0 1 -25 25 h-25",args:`
            - rx ry 椭圆半径，值相同时为圆
            - x-axis-rotation 延 X 轴旋转角度
            - large-arc-flag 大/小弧线
            - sweep-flag 顺/逆时针
            - x y
            -
            - dx dy
            `},Zz:{comment:"闭合曲线",exp:"M0 0 H100",args:`
            -
            `}}),x=w(null),$=V(()=>{var s;return g[(s=x.value)==null?void 0:s.slice(0,2)]}),m=w(null),S=()=>{var s;m.value=(s=$.value)==null?void 0:s.exp},d=w(null),i=h({value:100,base:1.1}),n=h({value:[0,0],base:[10,10]});L(()=>{console.log(800*1.1**((i.value-100)/10))});const y=s=>{switch(s){case"out":b("zoom",1),i.value+=10;break;case"in":b("zoom",-1),i.value-=10;break;case"reset":b("zoom",(i.value-100)/10*-1),i.value=100;break}console.log(s,C(i))},u=s=>{switch(s){case"top":c("move",[n.base[0],0]),n.value[0]+=n.base[0];break;case"bottom":c("move",[-n.base[0],0]),n.value[0]-=n.base[0];break;case"left":c("move",[0,n.base[1]]),n.value[1]+=n.base[1];break;case"right":c("move",[0,-n.base[1]]),n.value[1]-=n.base[1];break;case"reset":c("move",[n.value[0]*-1,n.value[1]*-1]),n.value=[0,0];break}console.log(s,C(n))},b=(s,e)=>{_(s,i.base**e)},c=(s,e)=>{_(s,e)},_=(s,e)=>{const l=d.value,t=l.viewBox.baseVal;let a={x:t.x,y:t.y,width:t.width,height:t.height};switch(s){case"zoom":a.width*=e,a.height*=e;break;case"move":a.x+=e[1],a.y+=e[0]*-1;break}l.setAttribute("viewBox",`${a.x} ${a.y} ${a.width} ${a.height}`),console.log(l,a)};return z(()=>{const s=()=>{const l=d.value.getBoundingClientRect(),t={x:0,y:0,width:l.width,height:l.height};d.value.setAttribute("viewBox",`${t.x} ${t.y} ${t.width} ${t.height}`)};window.addEventListener("DOMContentLoaded",s),window.addEventListener("resize",s),d.value.addEventListener("mousemove",e=>{const{width:l,height:t}=d.value.getBoundingClientRect(),a={y:Math.ceil(e.offsetX-l/2),x:Math.ceil(e.offsetY-t/2)};document.querySelector("#app > section > footer").innerText=`x:${a.x}, y:${a.y}`})}),(s,e)=>{var l;return v(),p("section",null,[o("header",null,[M(o("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>x.value=t),onChange:e[1]||(e[1]=t=>S())},[(v(!0),p(H,null,T(g,(t,a)=>(v(),p("option",null,f(a+t.comment),1))),256))],544),[[E,x.value]]),M(o("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>m.value=t)},null,512),[[I,m.value]])]),o("main",null,[o("div",null,[o("input",{type:"button",value:"缩小",onClick:e[3]||(e[3]=t=>y("out"))}),o("input",{type:"button",value:"放大",onClick:e[4]||(e[4]=t=>y("in"))}),o("input",{type:"button",value:"复原",onClick:e[5]||(e[5]=t=>y("reset"))}),P,o("input",{type:"button",value:"上",onClick:e[6]||(e[6]=t=>u("top"))}),o("input",{type:"button",value:"下",onClick:e[7]||(e[7]=t=>u("bottom"))}),o("input",{type:"button",value:"左",onClick:e[8]||(e[8]=t=>u("left"))}),o("input",{type:"button",value:"右",onClick:e[9]||(e[9]=t=>u("right"))}),o("input",{type:"button",value:"复原",onClick:e[10]||(e[10]=t=>u("reset"))})]),(v(),p("svg",{ref_key:"svgEle",ref:d},[o("path",{d:m.value,stroke:"red","stroke-width":"1",fill:"blue"},null,8,A),R],512))]),o("aside",q,[o("pre",null,f((l=$.value)==null?void 0:l.args.split(`
`).map(t=>t.trim()).join(`
`)),1)]),o("aside",F,[o("pre",null,f(`
`+JSON.stringify({scale:i,step:n},null,2))+`            
          `,1)]),J])}}},U=B(Q,[["__scopeId","data-v-385e12c0"]]),X=o("h1",{id:"svg",tabindex:"-1"},[D("Svg "),o("a",{class:"header-anchor",href:"#svg","aria-label":'Permalink to "Svg"'},"​")],-1),W=o("p",null,"This is a svg component.",-1),G=JSON.parse('{"title":"Svg","description":"","frontmatter":{},"headers":[],"relativePath":"+svg.md","filePath":"+svg.md"}'),Y={name:"+svg.md"},K=Object.assign(Y,{setup(r){return(g,x)=>(v(),p("div",{"data-pagefind-body":!0},[X,W,j(U)]))}});export{G as __pageData,K as default};
