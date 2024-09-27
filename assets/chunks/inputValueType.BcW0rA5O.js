var S=Object.defineProperty;var D=t=>{throw TypeError(t)};var F=(t,e,a)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var i=(t,e,a)=>F(t,typeof e!="symbol"?e+"":e,a),O=(t,e,a)=>e.has(t)||D("Cannot "+a);var d=(t,e,a)=>(O(t,e,"read from private field"),a?a.call(t):e.get(t)),g=(t,e,a)=>e.has(t)?D("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),B=(t,e,a,l)=>(O(t,e,"write to private field"),l?l.call(t,a):e.set(t,a),a),N=(t,e,a)=>(O(t,e,"access private method"),a);import{d as defineComponent,U as reactive,p as ref,h as computed,q as watch,o as openBlock,c as createElementBlock,k as unref,t as toDisplayString,e as createCommentVNode,j as createBaseVNode,a as createTextVNode,Y as withDirectives,ad as vModelSelect,F as Fragment,C as renderList,n as normalizeClass,af as vModelDynamic,_ as _export_sfc}from"./framework.5q7voRLl.js";import{U as Utils}from"./Utils.DC-NElVd.js";import{P as Point}from"./Point.DhzxLGKq.js";const _hoisted_1=["id"],_hoisted_2={key:0},_hoisted_3=["value"],_hoisted_4=["onUpdate:modelValue"],_hoisted_5=["value"],_hoisted_6={class:"point"},_hoisted_7=["type","onUpdate:modelValue","readonly"],_hoisted_8={key:1},_hoisted_9=["type","onUpdate:modelValue","readonly"],_hoisted_10={colspan:"2",class:"danger"},_sfc_main=defineComponent({__name:"CalculatorWidget",props:{data:{type:Object,required:!0},displayHader:{type:Boolean,default:!1}},setup(t){const e=t,{name:a,keyOption:l,input:h,output:b,className:U}=e.data,c=reactive({...h,...b}),V=ref((l==null?void 0:l.value)||void 0),_=computed(()=>{var o;return((o=V.value)==null?void 0:o.split("+").map(s=>s.trim()))||[]}),L=computed(()=>_.value.length?_.value:Object.keys(h)),E=computed(()=>Utils.difference(Object.keys(c),L.value)),T=computed(()=>L.value.reduce((o,s)=>(o[s]=c[s],o),{})),k=ref(""),w=ref(""),R=o=>{if(Utils.isObject(o)&&Object.keys(o).join("")==="xy"){const{x:s,y:r}=o;return Utils.objectFormat(new Point({x:s,y:r}).toLathePoint())}return Utils.isNumber(o)?Utils.formatNumber(o,5):o},A=()=>{L.value.forEach(s=>{var n;const r=(n=h[s])==null?void 0:n.constructor;try{r&&new r(c[s])}catch(p){throw w.value=s,new Error(p instanceof Error?p.message:String(p))}w.value=""})};return watch(T,()=>{try{A();const o=new U(T.value);Object.keys(c).forEach(s=>{s!=="keyOption"&&(c[s]=R(o[s]))}),k.value=""}catch(o){k.value=o instanceof Error?o.message:"Unknown error",console.error(o)}},{immediate:!0,deep:!0}),(o,s)=>(openBlock(),createElementBlock(Fragment,null,[t.displayHader?(openBlock(),createElementBlock("h2",{key:0,id:unref(a).toLowerCase().replaceAll(" ","-")},toDisplayString(unref(a)),9,_hoisted_1)):createCommentVNode("",!0),createBaseVNode("table",null,[_.value.length?(openBlock(),createElementBlock("tr",_hoisted_2,[s[1]||(s[1]=createBaseVNode("td",null,[createBaseVNode("input",{type:"radio",disabled:""}),createTextVNode("keyOption")],-1)),createBaseVNode("td",null,[withDirectives(createBaseVNode("select",{"onUpdate:modelValue":s[0]||(s[0]=r=>V.value=r)},[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(l).options,r=>(openBlock(),createElementBlock("option",{value:r},toDisplayString(r),9,_hoisted_3))),256))],512),[[vModelSelect,V.value]])])])):createCommentVNode("",!0),(openBlock(!0),createElementBlock(Fragment,null,renderList(c,(r,n)=>{var p;return openBlock(),createElementBlock("tr",{key:n},[createBaseVNode("td",null,[s[2]||(s[2]=createBaseVNode("input",{type:"radio",disabled:""},null,-1)),createTextVNode(toDisplayString(n),1)]),createBaseVNode("td",{class:normalizeClass({danger:w.value===n})},[(p=unref(h)[n])!=null&&p.options?withDirectives((openBlock(),createElementBlock("select",{key:0,"onUpdate:modelValue":u=>c[n]=u},[(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(h)[n].options,u=>(openBlock(),createElementBlock("option",{value:u},toDisplayString(u),9,_hoisted_5))),256))],8,_hoisted_4)),[[vModelSelect,c[n]]]):(openBlock(),createElementBlock(Fragment,{key:1},[r instanceof Object?(openBlock(!0),createElementBlock(Fragment,{key:0},renderList(r,(u,C)=>(openBlock(),createElementBlock("span",_hoisted_6,[createBaseVNode("label",null,toDisplayString(C),1),withDirectives(createBaseVNode("input",{type:typeof u=="string"?"text":"number","onUpdate:modelValue":x=>c[n][C]=x,readonly:E.value.includes(n)},null,8,_hoisted_7),[[vModelDynamic,c[n][C]]])]))),256)):(openBlock(),createElementBlock("span",_hoisted_8,[withDirectives(createBaseVNode("input",{type:typeof r=="string"?"text":"number","onUpdate:modelValue":u=>c[n]=u,readonly:E.value.includes(n)},null,8,_hoisted_9),[[vModelDynamic,c[n]]])]))],64))],2)])}),128)),createBaseVNode("tr",null,[createBaseVNode("td",_hoisted_10,toDisplayString(k.value),1)])])],64))}}),CalculatorWidget=_export_sfc(_sfc_main,[["__scopeId","data-v-3c2ca117"]]);var m,v,f,y,$;class Tolerance{constructor(t={}){g(this,y);i(this,"tolerance");g(this,m);g(this,v);g(this,f);i(this,"maximum");i(this,"nominal");i(this,"minimum");const{tolerance:e="62 0.05 -0.05"}=t;this.tolerance=e,N(this,y,$).call(this)}}m=new WeakMap,v=new WeakMap,f=new WeakMap,y=new WeakSet,$=function(){const value=this.tolerance.split(" ").filter(t=>t);B(this,m,eval(value.at(0))||0),B(this,v,parseFloat(value.at(1))||0),B(this,f,parseFloat(value.at(2))||0),this.maximum=d(this,m)+d(this,v),this.nominal=d(this,m)+(d(this,v)+d(this,f))/2,this.minimum=d(this,m)+d(this,f)};function isValidRange(t,e,a){return t>=e&&t<=a}class BaseOptionClass{constructor(e,a){i(this,"options");i(this,"value");if(this.options=a,this.value=e||a[0],!this.isValid())throw new Error(`${this.constructor.name} 当前值：${this.value} 取值范围：${this.options.join(", ")}`)}isValid(){return this.options.includes(this.value)}}function createOptionClass(t,e){return class extends BaseOptionClass{constructor(a){super(a||t,e)}}}const LQuadrant=createOptionClass("第一象限",["第一象限","第四象限","第二象限","第三象限"]),LDirection=createOptionClass("逆时针",["逆时针","顺时针"]),LChamferType=createOptionClass("chamfer",["chamfer","radius"]),LPosition=createOptionClass("外侧",["外侧","内侧"]),LChamferValueType=createOptionClass("Uhalf",["Uhalf","W"]),LRightTriangleOfTwoSidesOptions=createOptionClass("sideA + sideB",["sideA + sideB","sideB + sideC","sideA + sideC"]),LRightTriangleOfAngleAndSideOptions=createOptionClass("angleA + sideA",["angleA + sideA","angleA + sideB","angleA + sideC","angleB + sideA","angleB + sideB","angleB + sideC"]),LTriangleThreadType=createOptionClass("OD",["OD","ID"]);class LAngle{constructor(e=45){i(this,"value");if(this.value=e,!isValidRange(this.value,-360,360))throw new Error(`${this.constructor.name}，当前值：${this.value}，取值范围：-360 到 360`)}}class LLength{constructor(e=0){i(this,"value");if(this.value=e,!isValidRange(this.value,0,1e3))throw new Error(`${this.constructor.name}，当前值：${this.value}，取值范围：0 到 1000`)}}class LDiameter{constructor(e=0){i(this,"value");if(this.value=e,!isValidRange(this.value,0,1e3))throw new Error(`${this.constructor.name}，当前值：${this.value}，取值范围：0 到 1000`)}}class LPitch{constructor(e=0){i(this,"value");if(this.value=e,!isValidRange(this.value,0,1e3))throw new Error(`${this.constructor.name}，当前值：${this.value}，取值范围：0 到 1000`)}}class LChamferValue{constructor(e=0){i(this,"value");if(this.value=e,!isValidRange(this.value,0,100))throw new Error(`${this.constructor.name}，当前值：${this.value}，取值范围：0 到 100`)}}class LRadius{constructor(e=0){i(this,"value");if(this.value=e,!isValidRange(this.value,0,1e3))throw new Error(`${this.constructor.name}，当前值：${this.value}，取值范围：0 到 1000`)}}class LToolRadius{constructor(e=0){i(this,"value");if(this.value=e,!isValidRange(this.value,0,1e3))throw new Error(`${this.constructor.name}，当前值：${this.value}，取值范围：0 到 1000`)}}class LTolerance{constructor(e="60"){i(this,"value");if(this.value=e,!(this.value.split(" ").filter(l=>l).map(l=>parseFloat(l)).length>=1))throw new Error(`${this.constructor.name}，当前值：${this.value}，值格式为：62 0.05 -0.05`)}}class LPoint{constructor(e=new Point({x:0,z:0})){i(this,"value");this.value=e;const a="value > -1000 && value < 1000";if(!Object.values(this.value).every(h=>isValidRange(h,-1e3,1e3)))throw new Error(`${this.constructor.name}，当前值：${JSON.stringify(this.value)}，取值范围：${a}`)}}function LtoValue(t){const e={};for(let a in t)e[a]=Utils.isObject(t[a])&&"value"in t[a]?t[a].value:t[a];return e}export{CalculatorWidget as C,LTolerance as L,Tolerance as T,LRightTriangleOfTwoSidesOptions as a,LLength as b,LRightTriangleOfAngleAndSideOptions as c,LAngle as d,LChamferValue as e,LChamferType as f,LToolRadius as g,LQuadrant as h,LPoint as i,LChamferValueType as j,LDirection as k,LPosition as l,LRadius as m,LTriangleThreadType as n,LDiameter as o,LPitch as p,LtoValue as q};
