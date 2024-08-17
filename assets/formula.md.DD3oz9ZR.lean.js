import{_ as H,a4 as V,v as j,y as A,a5 as b,o as f,c as d,j as p,t as h,k as w,F as v,E as y,a6 as M,a7 as C,a as T,a8 as P,a9 as I,e as D,I as L}from"./chunks/framework.CRlq2jPQ.js";const q=["id"],S=["innerHTML"],z={key:0,type:"radio",disabled:""},N=["value"],R=["colspan"],U=["onUpdate:modelValue"],E=["value"],$=["readonly","onUpdate:modelValue"],B={key:0},W={colspan:"4"},J={style:{"text-align":"left"}},Q={__name:"FormulaWidget",props:{config:{type:Object,required:!0}},setup(g){const c=g.config;function _(e){const o={};for(let t in e)o[t]=e[t].value;return o}function x(e){return typeof e=="number"?parseFloat(e.toFixed(4)):typeof e=="string"?e.toString().toUpperCase():e}function a(e,o){const t=Object.keys(o).length,r=e.reduce((s,u)=>Object.keys(u).length>s?Object.keys(u).length:s,-1/0);return t===1&&r!==1?r:void 0}const n=V({items:c.items,select:Object.values(c.items).filter(e=>!e.disabled).length>0?Object.keys(c.items).slice(-1)[0]:void 0,info:void 0}),m=c.calc,i=(e,o)=>{console.log("updateValue",e,o);const t=_(o);if(typeof e=="boolean"||e){const r=m(e,t);if(r&&typeof r=="object"){console.log("result",r);for(let s in r)for(let u in r[s])t[s][u]=x(r[s][u])}console.log("updateValue after",t,o)}else n.info=m(void 0,t).info};return j([()=>n.select,()=>n.items],()=>{console.log("watch",n.select,n.items),i(n.select,n.items)},{immediate:!0,deep:!0}),A(()=>{console.log("mounted",c.name,{items:b(n.items),select:b(n.select)})}),(e,o)=>(f(),d(v,null,[p("h2",{id:w(c).name.toLowerCase().replaceAll(" ","-")},h(w(c).name),9,q),p("section",{innerHTML:w(c).latexHTML},null,8,S),p("table",null,[(f(!0),d(v,null,y(n.items,t=>(f(),d("tr",null,[p("td",null,[t.disabled?(f(),d("input",z)):M((f(),d("input",{key:1,type:"radio",value:t.name,"onUpdate:modelValue":o[0]||(o[0]=r=>n.select=r)},null,8,N)),[[C,n.select]]),T(" "+h(t.name),1)]),(f(!0),d(v,null,y(t.value,(r,s)=>(f(),d("td",{colspan:a(Object.values(_(n.items)),t.value)},[Array.isArray(t.range)?M((f(),d("select",{key:0,"onUpdate:modelValue":u=>t.value[s]=u},[(f(!0),d(v,null,y(t.range,u=>(f(),d("option",{value:u},h(u),9,E))),256))],8,U)),[[P,t.value[s]]]):M((f(),d("input",{key:1,type:"number",readonly:t.name===n.select,"onUpdate:modelValue":u=>t.value[s]=u},null,8,$)),[[I,t.value[s]]])],8,R))),256)),p("td",null,h(t.unit),1),p("td",null,h(t.comment),1)]))),256)),n.info?(f(),d("tr",B,[p("td",W,[p("pre",J,h(n.info),1)])])):D("",!0)])],64))}},K=H(Q,[["__scopeId","data-v-cbc29e57"]]),Z={__name:"Formula",setup(g){function l(a="default",n="默认注释",m=void 0,i="默认单位",e={min:-9999.9999,max:9999.9999},o=!1){(m===void 0||typeof m=="number"||typeof m=="string"||typeof m=="boolean"||Array.isArray(m))&&(m={value_:m});const t={name:a,comment:n,value:m,unit:i,range:e||{min:-9999.9999,max:9999.9999},disabled:o};{let r;Array.isArray(m)?r=m:typeof m=="object"?r=[...Object.values(m).flat()]:r=[m],r.every(s=>typeof s=="boolean")?t.inType="boolean":r.every(s=>typeof s=="string")?t.inType="string":r.every(s=>typeof s=="number")&&(t.inType="number")}return t}function c(...a){const n={};return a.forEach((m,i)=>{n[m.name]=m}),n}const _={Capacity:{name:"功率（Pc）",latexHTML:`
      <math xmlns="http://www.w3.org/1998/Math/MathML" style="display:math;font-size: x-large;">
        <mi>P</mi>
        <mi>c</mi>
        <mo>=</mo>
        <mfrac>
          <mrow>
            <mi>a</mi>
            <mi>p</mi>
            <mo>×</mo>
            <mi>f</mi>
            <mo>×</mo>
            <mi>v</mi>
            <mi>c</mi>
            <mo>×</mo>
            <mi>K</mi>
            <mi>c</mi>
          </mrow>
          <mrow>
            <mn>60</mn>
            <mo>×</mo>
            <msup>
              <mn>10</mn>
              <mrow>
                <mn>3</mn>
              </mrow>
            </msup>
            <mo>×</mo>
            <mi>η</mi>
          </mrow>
        </mfrac>
        <mo stretchy="false">(</mo>
        <mi>k</mi>
        <mi>W</mi>
        <mo stretchy="false">)</mo>
      </math>`,items:c(l("ap","切削深度",1,"mm"),l("f","每转进给量",2,"mm/rev"),l("vc","切削速度",3,"m/min"),l("kc","比切削力",4,"MPa"),l("η","机器效率系数",5,"-",{min:0,max:1}),l("pc","所需功率",6,"kw")),calc:(a,n)=>{const{ap:{value_:m},f:{value_:i},vc:{value_:e},kc:{value_:o},η:{value_:t},pc:{value_:r}}=n;console.log("ap:",m,"f:",i,"vc:",e,"kc:",o,"η:",t,"pc:",r);const s={ap:()=>r*(6*10**3*t)/(i*e*o),f:()=>r*(6*10**3*t)/(m*e*o),vc:()=>r*(6*10**3*t)/(m*i*o),kc:()=>r*(6*10**3*t)/(m*i*e),η:()=>m*i*e*o/(6*10**3*r),pc:()=>m*i*e*o/(6*10**3*t)};if(a)return{[a]:{value_:s[a]()}}}},CuttingTime:{name:"切削时间（Tc）",latexHTML:`
		<math xmlns="http://www.w3.org/1998/Math/MathML" style="display:math;font-size: x-large;">
      <mi>tc</mi>
      <mo>=</mo>
      <mfrac>
        <mrow>
          <mi>l</mi>
          <mi>m</mi>
        </mrow>
        <mi>l</mi>
      </mfrac>
      <mo stretchy="false">(</mo>
      <mi>m</mi>
      <mi>i</mi>
      <mi>n</mi>
      <mo stretchy="false">)</mo>
    </math>`,items:c(l("lm","工件长度",1,"mm"),l("l","每分钟的切削长度",2,"mm/min"),l("tc","切削时间",3,"min")),calc:(a,n)=>{const{lm:{value_:m},l:{value_:i},tc:{value_:e}}=n,o={lm:()=>i*e,l:()=>m/e,tc:()=>m/i};if(a)return{[a]:{value_:o[a]()}}}},SpindleFeed:{name:"主轴进给量（VF）",latexHTML:`
	    <math xmlns="http://www.w3.org/1998/Math/MathML" style="display:math;font-size: x-large;">
        <mi>v</mi>
        <mi>f</mi>
        <mo>=</mo>
        <mi>f</mi>
        <mi>r</mi>
        <mo>×</mo>
        <mi>n</mi>
        <mo stretchy="false">(</mo>
        <mi>m</mi>
        <mi>m</mi>
        <mrow>
        <mo>/</mo>
        </mrow>
        <mi>m</mi>
        <mi>i</mi>
        <mi>n</mi>
        <mo stretchy="false">)</mo>
      </math>`,items:c(l("fr","每转进给量",1,"mm/rev"),l("n","主轴转速",2,"rev/min"),l("vf","主轴(Z轴)进给速度",3,"mm/min")),calc:(a,n)=>{const{fr:{value_:m},n:{value_:i},vf:{value_:e}}=n,o={fr:()=>e/i,n:()=>e/m,vf:()=>m*i};if(a)return{[a]:{value_:o[a]()}}}},CuttingSpeed:{name:"切削速度（vc）",latexHTML:`
      <math xmlns="http://www.w3.org/1998/Math/MathML" style="display:math;font-size: x-large;">
        <mi>v</mi>
        <mi>c</mi>
        <mo>=</mo>
        <mfrac>
          <mrow>
            <mi>π</mi>
            <mo>×</mo>
            <mi>D</mi>
            <mi>m</mi>
            <mo>×</mo>
            <mi>n</mi>
          </mrow>
          <mn>1000</mn>
        </mfrac>
        <mo stretchy="false">(</mo>
        <mi>m</mi>
        <mrow>
          <mo>/</mo>
        </mrow>
        <mi>m</mi>
        <mi>i</mi>
        <mi>n</mi>
        <mo stretchy="false">)</mo>
      </math>`,items:c(l("dm","工件材料直径",1,"mm"),l("n","主轴转速",2,"rev/min"),l("vc","切削速度",3,"m/min")),calc:(a,n)=>{const{dm:{value_:m},n:{value_:i},vc:{value_:e}}=n,o={dm:()=>e*1e3/(Math.PI*i),n:()=>e*1e3/(Math.PI*m),vc:()=>Math.PI*m*i/1e3};if(a)return{[a]:{value_:o[a]()}}}},Feedrate:{name:"进给速度（F）",latexHTML:`
			  <math xmlns="http://www.w3.org/1998/Math/MathML" style="display:'math';font-size: larger;">
				<mi>f</mi>
				<mo>=</mo>
				<mfrac>
				  <mi>l</mi>
				  <mi>n</mi>
				</mfrac>
				<mo stretchy="false">(</mo>
				<mi>m</mi>
				<mi>m</mi>
				<mrow>
				  <mo>/</mo>
				</mrow>
				<mi>r</mi>
				<mi>e</mi>
				<mi>v</mi>
				<mo stretchy="false">)</mo>
			  </math>`,items:c(l("l","每分钟切削长度",1,"mm/min"),l("n","主轴转速",2,"rev/min"),l("f"," 每转进给量",3," mm/rev")),calc:(a,n)=>{const{l:{value_:m},n:{value_:i},f:{value_:e}}=n,o={l:()=>i*e,n:()=>m/e,f:()=>m/i};if(a)return{[a]:{value_:o[a]()}}}},MetalRemovalRate:{name:"金属去除率（Q）",latexHTML:`
      <math xmlns="http://www.w3.org/1998/Math/MathML" style="display:math;font-size: x-large;">
        <mi>Q</mi>
        <mo>=</mo>
        <mi>v</mi>
        <mi>c</mi>
        <mo>×</mo>
        <mi>a</mi>
        <mi>p</mi>
        <mo>×</mo>
        <mi>f</mi>
        <mi>n</mi>
      </math>`,items:c(l("vc","切削速度",1,"m/min"),l("ap","切削深度",2,"mm"),l("f","每转进给量",3,"mm/rev"),l("q","金属去除率",4,"cm^3/min")),calc:(a,n)=>{const{vc:{value_:m},ap:{value_:i},f:{value_:e},q:{value_:o}}=n,t={vc:()=>o/(i*e),ap:()=>o/(m*e),f:()=>o/(m*i),q:()=>m*i*e};if(a)return{[a]:{value_:t[a]()}}}},RoughnessOfSurfa:{name:"理论表面粗糙度（h）",latexHTML:`
      <math xmlns="http://www.w3.org/1998/Math/MathML" style="display:math;font-size: x-large;">
        <mi>h</mi>
        <mo>=</mo>
        <mfrac>
          <msup>
            <mi>f</mi>
            <mrow>
              <mn>2</mn>
            </mrow>
          </msup>
          <mrow>
            <mn>8</mn>
            <mi>r</mi>
            <mi>e</mi>
          </mrow>
        </mfrac>
        <mo>×</mo>
        <mn>1000</mn>
        <mo stretchy="false">(</mo>
        <mi>u</mi>
        <mi>m</mi>
        <mo stretchy="false">)</mo>
      </math>`,items:c(l("fr","每转进给量",1,"mm/rev"),l("re","刀尖圆弧半径",2,"mm"),l("h","表面粗糙度",3,"μm")),calc:(a,n)=>{const{fr:{value_:m},re:{value_:i},h:{value_:e}}=n,o={fr:()=>Math.sqrt(e/1e3*(8*i)),re:()=>m**2/(e/1e3)/8,h:()=>m**2/(8*i)*1e3};if(a)return{[a]:{value_:o[a]()}}}},ThreadEveryCuttingDepth:{name:"三角螺纹每次切削深度",latexHTML:"",items:c(l("ap","总切削深度",void 0,"mm",void 0,!0),l("nap","n 次切削深度",void 0,"mm",void 0,!0)),calc:(a,n)=>{const{ap:{value_:m},nap:{value_:i}}=n,e=()=>{const t=[.3,1],r=[0];for(let s=0;i-1>=s;s++){const u=t[s]??s,k=r.reduce((O,F,ee)=>O+=F);r.push(m/Math.sqrt(i-1)*Math.sqrt(u)-k)}return r},o={};return o.info=[...e()].map(t=>t.toFixed(4)).join(`
`),o}},ThreadCuttingDepth:{name:"三角螺纹切削总深度",latexHTML:"",items:c(l("D","大径",52,"mm",void 0,!0),l("P","螺距",2,"mm",void 0,!0),l("ap","总切削深度",void 0,"mm")),calc:(a,n)=>{const{D:{value_:m},P:{value_:i}}=n,e=.866*i,o=e/8,t=e-o,r={};return r.ap={value_:t},r}}};return(()=>{const a=[];Object.values(_).forEach(n=>{a.push({depth:2,slug:n.name.toLowerCase().replaceAll(" ","-"),text:n.name,children:[]})}),console.log(`creatAstroTableOfContents
`,JSON.stringify(a))})(),(a,n)=>(f(),d(v,null,y(_,(m,i)=>L(K,{config:m},null,8,["config"])),64))}},G=p("h1",{id:"formula",tabindex:"-1"},[T("Formula "),p("a",{class:"header-anchor",href:"#formula","aria-label":'Permalink to "Formula"'},"​")],-1),X=p("p",null,"This is a formula component.",-1),te=JSON.parse('{"title":"Formula","description":"","frontmatter":{},"headers":[],"relativePath":"+formula.md","filePath":"+formula.md"}'),Y={name:"+formula.md"},ne=Object.assign(Y,{setup(g){return(l,c)=>(f(),d("div",null,[G,X,L(Z)]))}});export{te as __pageData,ne as default};
