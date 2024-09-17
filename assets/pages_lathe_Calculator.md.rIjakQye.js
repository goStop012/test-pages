var K=Object.defineProperty;var D=a=>{throw TypeError(a)};var X=(a,i,t)=>i in a?K(a,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[i]=t;var e=(a,i,t)=>X(a,typeof i!="symbol"?i+"":i,t),Y=(a,i,t)=>i.has(a)||D("Cannot "+t);var y=(a,i,t)=>i.has(a)?D("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(a):i.set(a,t);var v=(a,i,t)=>(Y(a,i,"access private method"),t);import{L as Z,T as tt,a as E,b as et,c as P,d as b,e as x,f as $,g as O,h as _,i as nt,j as G,k as it,l as k,m as st,C as ot}from"./chunks/inputValueType.DohdwTWX.js";import{P as n}from"./chunks/Point.BqqaAIQu.js";import{U as V}from"./chunks/Utils.n4EkZCRG.js";import{M as m}from"./chunks/Macro.NyvPo287.js";import{d as at,o as j,c as I,C as ht,F as rt,G as J,j as N,a as dt}from"./chunks/framework.5q7voRLl.js";var z,U;class A{constructor(i={}){y(this,z);e(this,"sideLengthA");e(this,"sideLengthB");e(this,"sideLengthC");e(this,"angle");const{angle:t=0,sideLengthA:s=0,sideLengthB:o=0,sideLengthC:h=0}=i;if(this.angle=t%90,this.sideLengthA=s,this.sideLengthB=o,this.sideLengthC=h,!this.valid())throw new Error(`${this.constructor.name}，Invalid parameters: ${JSON.stringify({angle:t,sideLengthA:s,sideLengthB:o,sideLengthC:h})}`);v(this,z,U).call(this)}valid(){const i=s=>V.isNumber(s)&&s>0;return[this.angle,this.sideLengthA,this.sideLengthB,this.sideLengthC].filter(s=>i(s)).length===2}getSideLengthA(){return m.sqrt(this.sideLengthC**2-this.sideLengthB**2)}getSideLengthB(){return m.sqrt(this.sideLengthC**2-this.sideLengthA**2)}getSideLengthC(){return m.sqrt(this.sideLengthA**2+this.sideLengthB**2)}toPoint(){return new n({x:this.sideLengthA*2,z:this.sideLengthB})}}z=new WeakSet,U=function(){this.angle?this.sideLengthA?(this.sideLengthB=this.sideLengthA*m.tan(this.angle),this.sideLengthC=this.getSideLengthC()):this.sideLengthB?(this.sideLengthA=this.sideLengthB/m.tan(this.angle),this.sideLengthC=this.getSideLengthC()):this.sideLengthC&&(this.sideLengthA=this.sideLengthC*m.cos(this.angle),this.sideLengthB=this.getSideLengthB()):(this.sideLengthA&&this.sideLengthB?this.sideLengthC=this.getSideLengthC():this.sideLengthA&&this.sideLengthC?this.sideLengthB=this.getSideLengthB():this.sideLengthB&&this.sideLengthC&&(this.sideLengthA=this.getSideLengthA()),this.angle=m.acos(this.sideLengthA/this.sideLengthC))};var T,W;const S=class S extends A{constructor(t={}){super(t);y(this,T);e(this,"sideLengthACRC");e(this,"sideLengthBCRC");e(this,"toolRadius");e(this,"toolPositon");const{toolRadius:s=0,toolPositon:o="前刀尖",angle:h,sideLengthA:d,sideLengthB:r,sideLengthC:c}=t;if(s<0)throw new Error(`${this.constructor.name}，当前值：toolRadius = ${s}，取值范围：toolRadius > 0`);this.toolRadius=s,this.toolPositon=o,this.sideLengthACRC=0,this.sideLengthBCRC=0,v(this,T,W).call(this)}static getCrcLength(t,s){return t-t*m.tan(s/2)}toPoint(){return new n({x:this.sideLengthACRC*2,z:this.sideLengthBCRC})}};T=new WeakSet,W=function(){if(!this.angle)throw new Error(`${this.constructor.name}，Triangle angle must be set before calculating CRC.`);this.sideLengthACRC=S.getCrcLength(this.toolRadius,this.angle),this.sideLengthBCRC=S.getCrcLength(this.toolRadius,90-this.angle),this.toolPositon==="后刀尖"&&(this.sideLengthBCRC=this.toolRadius*2-this.sideLengthBCRC,this.sideLengthACRC=new A({angle:this.angle,sideLengthB:this.sideLengthBCRC}).sideLengthA)};let R=S;class w{constructor(i,t){e(this,"startPoint");e(this,"endPoint");this.startPoint=i,this.endPoint=t}get vector(){return this.endPoint.sub(this.startPoint)}get distance(){return m.sqrt(this.vector.x**2+this.vector.y**2)}get unitVector(){return this.vector.div(this.distance)}get middle(){return this.startPoint.add(this.endPoint).div(2)}get slope(){return this.vector.x===0?1/0:this.vector.y/this.vector.x}get angle(){return V.radiansToDegrees(Math.atan2(this.vector.y,this.vector.x))}get increase(){return new n({y:(this.endPoint.y-this.startPoint.y)/2,x:this.endPoint.x-this.startPoint.x})}get direction(){return this.angle===90?"↑":this.angle===270?"↓":this.angle===0?"→":this.angle===180?"←":this.increase.x>0&&this.increase.y<0?"↘":this.increase.x<0&&this.increase.y<0?"↙":this.increase.x>0&&this.increase.y>0?"↗":this.increase.x<0&&this.increase.y>0?"↖":"null"}extendOrShorten(i={}){const{length:s=1,relative:o="startPoint",vertical:h=!0}=i,d=s/1,r=o==="startPoint"?-1:1;let c;h?c=new A({angle:this.angle%90,sideLengthA:1}).toPoint():c=new A({angle:this.angle%90,sideLengthC:1}).toPoint();const g=this[o].y+c.y*Math.sign(this.vector.y)*d*r,l=this[o].x+c.x*Math.sign(this.vector.x)*d*r;return o==="startPoint"?new w(new n({y:g,x:l}),this.endPoint):new w(this.startPoint,new n({y:g,x:l}))}rotateByStart(i){const t=V.degreesToRadians(i),s=Math.cos(t),o=Math.sin(t),h=this.vector.x*s-this.vector.y*o,d=this.vector.x*o+this.vector.y*s;return new w(this.startPoint,new n({x:h,y:d}).add(this.startPoint))}translation(i){return new w(this.startPoint.add(i),this.endPoint.add(i))}}var q,H;class lt{constructor(i={}){y(this,q);e(this,"toolRadius");e(this,"value");e(this,"type");e(this,"u");e(this,"w");const{toolRadius:t=.4,value:s=1,type:o="chamfer"}=i;this.toolRadius=t,this.value=s,this.type=o,v(this,q,H).call(this)}}q=new WeakSet,H=function(){this.type==="chamfer"?(this.w=this.value+R.getCrcLength(this.toolRadius,45),this.u=this.w*2):this.type==="radius"&&(this.w=this.value+this.toolRadius,this.u=this.w*2)};class Q{constructor({quadrant:i="第一象限",pointC:t=new n({x:100,z:0}),angle:s=45,value:o=1,direction:h="逆时针",position:d="外侧",toolRadius:r=.4,frontLineType:c="竖直",afterLineType:g="水平",toolPositon:l="前刀尖"}={}){e(this,"quadrant");e(this,"pointC");e(this,"angle");e(this,"value");e(this,"direction");e(this,"position");e(this,"toolRadius");e(this,"toolPositon");e(this,"frontLineType");e(this,"afterLineType");e(this,"pointA");e(this,"pointB");this.quadrant=i,this.pointC=t,this.angle=s,this.value=o,this.direction=h,this.position=d,this.toolRadius=r,this.frontLineType=c,this.afterLineType=g,this.toolPositon=l}}class ct extends Q{constructor(t={}){const{quadrant:s="第一象限",pointC:o=new n({x:100,z:0}),angle:h=45,value:d=1,direction:r="逆时针",position:c="外侧",toolRadius:g=.4,frontLineType:l="竖直",afterLineType:B="水平"}=t;super(t);e(this,"radius");e(this,"radiusCRC");this.radius=h===45?this.value:void 0;const L=this.calc();this.pointA=L.pointA,this.pointB=L.pointB,this.radiusCRC=L.radiusCRC}calc(){const t=new A({angle:this.angle,sideLengthA:this.value}),s={第一象限:{pointA:new n({x:-(t.sideLengthA*2),z:0}),pointB:new n({x:0,z:-t.sideLengthB})},第四象限:{pointA:new n({x:0,z:-t.sideLengthB}),pointB:new n({x:t.sideLengthA*2,z:0})},第二象限:{pointA:new n({x:0,z:t.sideLengthB}),pointB:new n({x:-(t.sideLengthA*2),z:0})},第三象限:{pointA:new n({x:t.sideLengthA*2,z:0}),pointB:new n({x:0,z:t.sideLengthB})}},o=this.toolRadius!==0,h=this.position==="外侧",d=this.direction==="顺时针",r=o?this.toolRadius:0,c=h?1:-1,g=s[this.quadrant],l=g.pointA.mul(r*c),B=g.pointB.mul(r*c),L=new n(this.pointC).add(g.pointA).add(l),C=new n(this.pointC).add(g.pointB).add(B),u=this.radius??0,p=o?h?u+this.toolRadius:u-this.toolRadius:u;return d?{pointA:C,pointB:L,radiusCRC:p}:{pointA:L,pointB:C,radiusCRC:p}}}class F extends Q{constructor(t={}){const{quadrant:s="第一象限",pointC:o=new n({x:100,z:0}),angle:h=45,value:d=1,direction:r="逆时针",position:c="外侧",toolRadius:g=0}=t;super(t);e(this,"chamfer");e(this,"chamferCRC");e(this,"unitVector");e(this,"length");e(this,"arrowDirection");e(this,"extendFromPointA");this.chamfer=this.angle===45?this.value:void 0;const l=this.calc();this.pointA=l.pointA,this.pointB=l.pointB,this.chamferCRC=l.chamferCRC,this.arrowDirection=new w(this.pointA,this.pointB).direction,this.unitVector=new w(this.pointA,this.pointB).unitVector,this.extendFromPointA=new w(this.pointA,this.pointB).extendOrShorten().startPoint,this.length=new w(this.pointA,this.pointB).distance}calc(){(this.quadrant==="第二象限"||this.quadrant==="第三象限")&&(this.toolPositon="后刀尖");const t=new A({angle:this.angle,sideLengthA:this.value}),s=new R({toolRadius:this.toolRadius,angle:this.angle,sideLengthA:this.value,toolPositon:this.toolPositon}),o={第一象限:{pointA:new n({x:-2,z:0}),pointB:new n({x:0,z:-1})},第四象限:{pointA:new n({x:2,z:0}),pointB:new n({x:0,z:-1})},第二象限:{pointA:new n({x:-2,z:0}),pointB:new n({x:0,z:1})},第三象限:{pointA:new n({x:2,z:0}),pointB:new n({x:0,z:1})}},h={第一象限:{pointA:new n({x:-2,z:0}),pointB:new n({x:0,z:-1})},第四象限:{pointA:new n({x:2,z:0}),pointB:new n({x:0,z:-1})},第二象限:{pointA:new n({x:2,z:0}),pointB:new n({x:0,z:-1})},第三象限:{pointA:new n({x:2,z:0}),pointB:new n({x:0,z:1})}},d=this.toolRadius!==0,r=this.position==="外侧",c=this.direction==="顺时针",g=d?1:0,l=r?1:-1,B={A:o[this.quadrant].pointA,B:o[this.quadrant].pointB},L={A:h[this.quadrant].pointA,B:h[this.quadrant].pointB},C={A:B.A.mul(t.sideLengthA),B:B.B.mul(t.sideLengthB)},u={A:L.A.mul(s.sideLengthACRC).mul(g).mul(l),B:L.B.mul(s.sideLengthBCRC).mul(g).mul(l)};if(c){let M;M=C.A,C.A=C.B,C.B=M}let p=new n(this.pointC).add(C.A),f=new n(this.pointC).add(C.B);return this.frontLineType==="竖直"&&(this.afterLineType==="水平"&&(p=p.add(u.A),f=f.add(u.B)),this.afterLineType==="竖直"&&(p=p.add(u.A),f=f.add(u.A))),this.frontLineType==="水平"&&(this.afterLineType==="水平"&&(p=p.add(u.B),f=f.add(u.B)),this.afterLineType==="竖直"&&(p=p.add(u.B),f=f.add(u.A))),this.chamferCRC=this.chamfer?this.chamfer+R.getCrcLength(this.toolRadius,45)*l:null,{pointA:p,pointB:f,chamferCRC:this.chamferCRC}}}class gt{constructor(i={}){e(this,"startPoint");e(this,"endPoint");e(this,"startExtend");e(this,"endExtend");e(this,"toolRadius");e(this,"taper");e(this,"direction");e(this,"angle");e(this,"oStartPoint");e(this,"oEndPoint");const{startPoint:t=new n({x:100,z:0}),endPoint:s=new n({x:120,z:-10}),startExtend:o=0,endExtend:h=0,toolRadius:d=0}=i;this.startPoint=t,this.endPoint=s;let r=new w(new n(t),new n(s));r.extendOrShorten({length:1,relative:"startPoint"}),this.taper=r.vector.toLathePoint().z,this.angle=r.angle,this.direction=r.direction}}class ut{constructor(i={}){e(this,"startPoint");e(this,"endPoint");e(this,"startExtend");e(this,"endExtend");e(this,"toolRadius");e(this,"taper");e(this,"direction");e(this,"angle");e(this,"oStartPoint");e(this,"oEndPoint");const{startPoint:t=new n({x:100,z:0}),endPoint:s=new n({x:120,z:-10})}=i;this.startPoint=t,this.endPoint=s;const o=new w(new n(t),new n(s));this.taper=o.vector.div(2).toLathePoint().x,this.angle=o.angle,this.direction=o.direction}}const pt=at({__name:"Calculator",setup(a){class i{constructor(o){e(this,"name");e(this,"input");e(this,"output");e(this,"instance");const{name:h,input:d,instance:r}=o;this.name=h,this.input=d,this.instance=r,this.output=new r.constructor(st(d))}}const t=[new i({name:"Tolerance",input:{tolerance:new Z},instance:new tt}),new i({name:"RightTriangeChamferSimple",input:{value:new E(1),type:new et("chamfer"),toolRadius:new P(0)},instance:new lt}),new i({name:"RightTriangeCtypeChamfer",input:{quadrant:new b,pointC:new x(new n({x:100,z:0})),angle:new $(45),value:new E(1),direction:new O("逆时针"),position:new _("外侧"),toolRadius:new P(0)},instance:new F}),new i({name:"RightTriangeRtypeChamfer",input:{quadrant:new b,pointC:new x(new n({x:100,z:0})),value:new nt(1),direction:new O("逆时针"),position:new _("外侧"),toolRadius:new P(0)},instance:new ct}),new i({name:"G90",input:{startPoint:new x(new n({x:100,z:0})),endPoint:new x(new n({x:120,z:-20})),startExtend:new G,endExtend:new G,toolRadius:new P(0)},instance:new ut}),new i({name:"G94",input:{startPoint:new x(new n({x:100,z:0})),endPoint:new x(new n({x:120,z:-20}))},instance:new gt}),new i({name:"RightTriangeCtypeChamfer-第二象限测试",input:{quadrant:new b("第二象限"),pointC:new x(new n({x:12.7,z:-18})),angle:new $(80),value:new E(3.175),direction:new O("顺时针"),position:new _("外侧"),toolRadius:new P(.4),toolPositon:new it("前刀尖"),frontLineType:new k("竖直"),afterLineType:new k("水平")},instance:new F})];return(s,o)=>(j(),I(rt,null,ht(t,h=>J(ot,{data:h,displayHader:!0},null,8,["data"])),64))}}),Bt=JSON.parse('{"title":"Calculator","description":"","frontmatter":{},"headers":[],"relativePath":"pages/lathe/Calculator.md","filePath":"pages/lathe/Calculator.md"}'),wt={name:"pages/lathe/Calculator.md"},Pt=Object.assign(wt,{setup(a){return(i,t)=>(j(),I("div",{"data-pagefind-body":!0},[t[0]||(t[0]=N("h1",{id:"calculator",tabindex:"-1"},[dt("Calculator "),N("a",{class:"header-anchor",href:"#calculator","aria-label":'Permalink to "Calculator"'},"​")],-1)),t[1]||(t[1]=N("p",null,"This is a calculator component.",-1)),J(pt)]))}});export{Bt as __pageData,Pt as default};
