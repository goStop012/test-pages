import{_ as V,U as b,p as w,h as S,q as L,v as z,o as p,c as x,j as n,Y as $,ad as E,F as H,C as T,t as f,ae as N,ab as M,a as O,G as j}from"./chunks/framework.5q7voRLl.js";const D=["d"],P={class:"left-aside"},q={class:"right-aside"},A={__name:"Svg",setup(C){const g=b({Mm:{comment:"起点",exp:"M0 0 L100 100",args:`
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
            `}}),i=w(null),h=S(()=>{var s;return g[(s=i.value)==null?void 0:s.slice(0,2)]}),m=w(null),B=()=>{var s;m.value=(s=h.value)==null?void 0:s.exp},u=w(null),r=b({value:100,base:1.1}),o=b({value:[0,0],base:[10,10]});L(()=>{console.log(800*1.1**((r.value-100)/10))});const c=s=>{switch(s){case"out":y("zoom",1),r.value+=10;break;case"in":y("zoom",-1),r.value-=10;break;case"reset":y("zoom",(r.value-100)/10*-1),r.value=100;break}console.log(s,M(r))},d=s=>{switch(s){case"top":v("move",[o.base[0],0]),o.value[0]+=o.base[0];break;case"bottom":v("move",[-o.base[0],0]),o.value[0]-=o.base[0];break;case"left":v("move",[0,o.base[1]]),o.value[1]+=o.base[1];break;case"right":v("move",[0,-o.base[1]]),o.value[1]-=o.base[1];break;case"reset":v("move",[o.value[0]*-1,o.value[1]*-1]),o.value=[0,0];break}console.log(s,M(o))},y=(s,e)=>{k(s,r.base**e)},v=(s,e)=>{k(s,e)},k=(s,e)=>{const l=u.value,t=l.viewBox.baseVal;let a={x:t.x,y:t.y,width:t.width,height:t.height};switch(s){case"zoom":a.width*=e,a.height*=e;break;case"move":a.x+=e[1],a.y+=e[0]*-1;break}l.setAttribute("viewBox",`${a.x} ${a.y} ${a.width} ${a.height}`),console.log(l,a)};return z(()=>{const s=()=>{const l=u.value.getBoundingClientRect(),t={x:0,y:0,width:l.width,height:l.height};u.value.setAttribute("viewBox",`${t.x} ${t.y} ${t.width} ${t.height}`)};window.addEventListener("DOMContentLoaded",s),window.addEventListener("resize",s),u.value.addEventListener("mousemove",e=>{const{width:l,height:t}=u.value.getBoundingClientRect(),a={y:Math.ceil(e.offsetX-l/2),x:Math.ceil(e.offsetY-t/2)};document.querySelector("#app > section > footer").innerText=`x:${a.x}, y:${a.y}`})}),(s,e)=>{var l;return p(),x("section",null,[n("header",null,[$(n("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>i.value=t),onChange:e[1]||(e[1]=t=>B())},[(p(!0),x(H,null,T(g,(t,a)=>(p(),x("option",null,f(a+t.comment),1))),256))],544),[[E,i.value]]),$(n("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>m.value=t)},null,512),[[N,m.value]])]),n("main",null,[n("div",null,[n("input",{type:"button",value:"缩小",onClick:e[3]||(e[3]=t=>c("out"))}),n("input",{type:"button",value:"放大",onClick:e[4]||(e[4]=t=>c("in"))}),n("input",{type:"button",value:"复原",onClick:e[5]||(e[5]=t=>c("reset"))}),e[11]||(e[11]=n("span",null,"|",-1)),n("input",{type:"button",value:"上",onClick:e[6]||(e[6]=t=>d("top"))}),n("input",{type:"button",value:"下",onClick:e[7]||(e[7]=t=>d("bottom"))}),n("input",{type:"button",value:"左",onClick:e[8]||(e[8]=t=>d("left"))}),n("input",{type:"button",value:"右",onClick:e[9]||(e[9]=t=>d("right"))}),n("input",{type:"button",value:"复原",onClick:e[10]||(e[10]=t=>d("reset"))})]),(p(),x("svg",{ref_key:"svgEle",ref:u},[n("path",{d:m.value,stroke:"red","stroke-width":"1",fill:"blue"},null,8,D),e[12]||(e[12]=n("circle",{cx:"0",cy:"0",r:"2",fill:"red"},null,-1))],512))]),n("aside",P,[n("pre",null,f((l=h.value)==null?void 0:l.args.split(`
`).map(t=>t.trim()).join(`
`)),1)]),n("aside",q,[n("pre",null,f(`
`+JSON.stringify({scale:r,step:o},null,2))+`            
          `,1)]),e[13]||(e[13]=n("footer",null,"x:-, y:-",-1))])}}},R=V(A,[["__scopeId","data-v-385e12c0"]]),J=JSON.parse('{"title":"Svg","description":"","frontmatter":{},"headers":[],"relativePath":"pages/lathe/svg.md","filePath":"pages/lathe/svg.md"}'),U={name:"pages/lathe/svg.md"},Q=Object.assign(U,{setup(C){return(g,i)=>(p(),x("div",{"data-pagefind-body":!0},[i[0]||(i[0]=n("h1",{id:"svg",tabindex:"-1"},[O("Svg "),n("a",{class:"header-anchor",href:"#svg","aria-label":'Permalink to "Svg"'},"​")],-1)),i[1]||(i[1]=n("p",null,"This is a svg component.",-1)),j(R)]))}});export{J as __pageData,Q as default};
