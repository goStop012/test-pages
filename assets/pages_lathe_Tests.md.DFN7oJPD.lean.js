var F=Object.defineProperty;var _=(n,s,X)=>s in n?F(n,s,{enumerable:!0,configurable:!0,writable:!0,value:X}):n[s]=X;var d=(n,s,X)=>_(n,typeof s!="symbol"?s+"":s,X);import{d as M,s as h,o as c,c as l,F as r,E as S,j as G,t as m,$ as T,ag as R,p as P,l as Q,_ as w,I as U,a as f}from"./chunks/framework.Cp4JlySx.js";const p=n=>(P("data-v-6cb31a3a"),n=n(),Q(),n),W=p(()=>G("code",{lang:"js"},'const foo = "xp"',-1)),N=["id"],g=p(()=>G("td",null,"Test:",-1)),x={class:"testCode"},v=p(()=>G("td",null,"Input:",-1)),A=["onUpdate:modelValue","onInput"],I=M({__name:"Tests",setup(n){function s(t){return t.replace(/ /gm,"")}function X(t){return t=s(t),t=C(t),t=t.toUpperCase(),t}function C(t){return t.replace(/([a-zA-Z])/gm," $1")}class e{constructor(Z){d(this,"name");d(this,"testCode");d(this,"inputCode");const{name:a,testCode:o}=Z;this.name=a,this.testCode=X(o||""),this.inputCode=""}}const i=h([new e({name:"程序头",testCode:`
刀尖方位号参考图：

前刀架
3--8--4
7-0/9-5
2--6--1

后刀架
2--6--1
7-0/9-5
3--8--4`}),new e({name:"程序头",testCode:`
G99 G97 G40 T0202 S450 M3 
M8`}),new e({name:"程序尾",testCode:`
M5
M9
M30 
8`}),new e({name:"刀具开始",testCode:`
M1 
G40 T0505 G97 S400M4 
M8

M1
G50 S1200
G40 T0505 G96 S120 M4 
M8
`}),new e({name:"刀具结束",testCode:`
G0Z30.
G28W0. 
G28U0.`}),new e({name:"G0",testCode:""}),new e({name:"G1",testCode:""}),new e({name:"G1-C",testCode:`
G1Z0.02
X87.C0.4 
Z-4.45 `}),new e({name:"G1-R",testCode:`
G0 X100.975 Z-141.94 
G1 X108.1Z-155.R0.5 
W-0.9`}),new e({name:"G1-A",testCode:`
G0X94.0 
G1Z0.02
A90.0R0.5
X98.1Z-2.8A-15.R0.5
Z-133.95U-0.06 
X100.975C0.4 
Z-141.94 
X108.1Z-155.R0.5 
W-0.9
U1.`}),new e({name:"G2",testCode:`
T202M3S2000
G1X22.2 Z-1.0F0.07 
G2X20.2Z0.0R1.0F0.04 `}),new e({name:"G3",testCode:`
T1010M3S600
G1X29.5Z-25.0 
G3X25.5Z-27.0R2.0F0.03 `}),new e({name:"G70",testCode:`
G0X112.Z30.
Z1.
G42
G70P11Q19F0.09 
G40
G0Z30. `}),new e({name:"G71",testCode:`
G0X84.Z30. 
Z3.
G41
G71U0.35R0.3 
G71P21Q29U-0.12W0.05F0.21
N21G0X89.
G1Z0.02
X87.C0.4 
Z-4.45 
X85.95A45. 
Z-26.
N29U-1.5 
G40G0Z30.`}),new e({name:"G72",testCode:`
G0X96.5Z20.0 
Z1.2M08
G72W1.3R0.5
G72P1Q2U0.1W0.05F0.2 
N1G0Z-17.5 
G1X89.0
Z-2.65 
X87.7Z-2.0 
X50.0
Z-0.65 
Z0.0X48.7
N2X30.0
G0Z10.0
G28U0.0W0.0

G0 X149.0 S160
Z-21.0
G1 Z-22.1 F0.3
G72 W0.3 R0.2
G72 P5 Q6 W0.1 F0.15
N5 G1 Z-22.2 U0.
G1 X148.8
U-6.2 Z-25.3
X125.1
N6 Z-22.2
G70 P5 Q6 F0.1 S220
G0 Z-21.7
`}),new e({name:"G73",testCode:`
G0X112.Z30.
Z3.
G42
G73U0.35W0.35R2. 
G73P11Q19U0.12W0.05F0.21 
N11G0X94.0 
G1Z0.02
A90.0R0.5
X98.1Z-2.8A-15.R0.5
Z-133.95U-0.06 
X100.975C0.4 
Z-141.94 
X108.1Z-155.R0.5 
W-0.9
N19U1. 
G40
G0Z30.`}),new e({name:"G74",testCode:`
(钻孔)
G0X19.5Z2.0
Z-5.0
G1Z-6.3F0.1
G74R0.2
G74Z-7.5Q12000F0.03
G0Z2.0

G0X35.0Z3.5
G74R0.2
G74Z0.1X16.0 P2650 Q9999F0.1 
G0Z20.0M05 

(端面槽-代码可以有误)
G0X113.5Z2.0 
G1Z0.5F0.5 
G74R0.05 
G74X136.5Z-3.5P2500Q300F0.06 
G1X113.6Z-3.0F0.5

(端面槽)
G1Z-5.3F0.2
G74R0.15 
G74X221.0Z-8.0P5000Q230F0.06 
G1Z-7.7F0.3
`}),new e({name:"G75",testCode:`
(平端面)
G0 X67.0
Z3.3
G75 R0.2
G75 X30.0 Z0.08 P99999 Q400 R0.3 F0.2
G0 Z120.0

(外圆槽)
G0X52.0Z2.0
G1Z-22.5F2.0 
X53.5F0.3
G75R0.05 
G75Z-30.5X57.05P200 Q2500F0.04
G1Z-21.45F0.3`}),new e({name:"G76",testCode:`
(M20xP1.5)
G0 X22. Z-2.
G76 P020060 Q50 R0.02
G76 X19.85 Z-32. P0974 Q50 F1.5

T0404 M03 S600
G0 X13.0
Z1.
G76 P010000 Q60 R0.01
G76 X10.25 Z-24.4 P875 Q60 F1.75
G0 Z120.0
M1
T0202 M03 S1200
G0 X13.0
Z0.0
G1 X-0.89 F0.1
G0 Z0.4
X9.0
G1 X11.9 Z-1.1 F0.06
Z-24.0
X14.0
X15.0 W-0.5
Z-30.0
X18.0
X19.4 W-0.7
G0 Z120.0
M1
T0404 M3 S600
G0 X13.0
Z1.0
G76 P010000 Q60 R0.01
(@精车螺纹 G76-2 Q可能大于P@)
(G76 X87.4 Z-28.0 P1300 Q1460 F2.0)
G76 X10.25 Z-24.4 P875 Q875 F1.75
G0 Z150.0
X100`}),new e({name:"G83",testCode:`
G0X0.0 
Z2.0M08
G83R0.3
G83Z-51.9Q500F0.15 
G0Z20.0M05 

G0X0.0 
Z3.0 
G1Z1.0F0.25
G83Z-5.4Q2000F0.1
G0Z80.0
`}),new e({name:"G90",testCode:`
G40G97T0202M03S600 
G0X116.0Z20.0M08 
Z2.0 
G90X118.1Z-6.5F0.12
X118.8 
X119.5 
G0Z20.0
G28U0.W0.`}),new e({name:"G92",testCode:`
T1212M3S500
G0X26.0
Z-12.0 
G92X23.9Z-23.7F1.5 
X23.75 
X23.6
X23.45 
X23.3
X23.15 
X23.05 
X22.9
X22.8
X22.7
X22.6
X22.5
X22.4
X22.3
X22.2
G0X150.0

T1111
M4S800 
G0X12.Z2.M8
G92X10.Z-7.5R-0.4F0.907
X9.5 
X9.3 
X9.2 
X9.1 
X9.
X8.95
X8.9 
X8.9 
G0X150.Z150.

T404 M3 S300
G0 X40
Z2
G92 X43.3 Z-22 F1.5
X43.6
X43.9
X44.1
X44.3
X44.5
X44.7
X44.9
X45.1
X45.2
X45.2
G0 Z230
M01
T303 M3 S450
G0 X41
Z2
G70 P3 Q4 F0.15
G0 Z180
M01
T404 M3 S300
G0 X40
Z2
G92 X45.2 Z-22 F1.5
X45.2
G0 Z330
X260
M3 S180`}),new e({name:"G94",testCode:`
T303G99M3S400
G0X100.0Z50.0
M8 
G0Z1.5 
G94X-1.0Z1.0F0.15
Z0.5 
Z0.05
G0X134.0 `}),new e({name:"G96",testCode:`
G50S2000
G96S198`})]),u=(t,Z,a)=>{const o=t.target;s(Z.toUpperCase())===s(a.toUpperCase())?o.classList.add("safety"):o.classList.add("danger")};return(t,Z)=>(c(),l(r,null,[W,(c(!0),l(r,null,S(i.value,a=>(c(),l(r,null,[G("h2",{id:a.name.toLowerCase().replaceAll(" ","-")},m(a.name),9,N),G("table",null,[G("tr",null,[g,G("td",null,[G("pre",null,[G("code",x,m(a.testCode),1)])])]),G("tr",null,[v,G("td",null,[T(G("textarea",{class:"inputCode","onUpdate:modelValue":o=>a.inputCode=o,onInput:o=>u(o,a.testCode,a.inputCode)},null,40,A),[[R,a.inputCode]])])])])],64))),256))],64))}}),b=w(I,[["__scopeId","data-v-6cb31a3a"]]),L=G("h1",{id:"tests",tabindex:"-1"},[f("Tests "),G("a",{class:"header-anchor",href:"#tests","aria-label":'Permalink to "Tests"'},"​")],-1),V=G("p",null,"This is a Tests component.",-1),k=JSON.parse('{"title":"Tests","description":"","frontmatter":{},"headers":[],"relativePath":"pages/lathe/Tests.md","filePath":"pages/lathe/Tests.md"}'),$={name:"pages/lathe/Tests.md"},y=Object.assign($,{setup(n){return(s,X)=>(c(),l("div",{"data-pagefind-body":!0},[L,V,U(b)]))}});export{k as __pageData,y as default};
