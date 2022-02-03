var W=Object.defineProperty,K=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var D=(t,r,o)=>r in t?W(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,F=(t,r)=>{for(var o in r||(r={}))w.call(r,o)&&D(t,o,r[o]);if(b)for(var o of b(r))U.call(r,o)&&D(t,o,r[o]);return t},B=(t,r)=>K(t,_(r));var H=(t,r)=>{var o={};for(var s in t)w.call(t,s)&&r.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&b)for(var s of b(t))r.indexOf(s)<0&&U.call(t,s)&&(o[s]=t[s]);return o};import{j as v,s as n,r as d,x as T,u as N,R as G,a as $,F as Y,f as J,b as Z,B as X,c as q,d as P}from"./vendor.2cb02674.js";const ee=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const g of l.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function o(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=o(i);fetch(i.href,l)}};ee();const e=v.exports.jsx,a=v.exports.jsxs,x=v.exports.Fragment;var te=({})=>{const[t,r]=d.exports.useState(0);return d.exports.useEffect(()=>{r(90)}),e("div",{children:e(re,{style:{width:"100%"},children:e(ne,{style:{width:`${t}vw`}})})})};const re=n.div`
    border-radius: .5rem;
`,ne=n.div`
  background-color: rgb(62, 122, 235);
  height:2rem;
  border-radius: 1rem;
  transition: 4s ease;
  transition-delay: 1s;
`,O=n.button`
  background: transparent;
  outline: none;
  border: none;
  border: 1px solid gray;
  display: flex;
  align-self: center;
  padding: 1rem 0.5rem;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`,oe=({onChange:t})=>e(ie,{children:e(ae,{type:"file",accept:".xlsx, .csv, .xls",onChange:t})}),ie=n.div`
  border: 1px solid gray;
  width: max-content;
`,ae=n.input.attrs({type:"file"})`
&::-webkit-file-upload-button {
  background: transparent;
  border:none;
  border-right:  1px solid gray;
  color: balck;
  cursor: pointer;
  padding: 1em;
}
`,se={AveragePrice:"Average Price",Sector:"Sector",PrevClosingPrice:"Previous Closing Price",QuantityAvailable:"Quantity Available",StockName:"Symbol",UnrealizedPAndL:"Unrealized P&L",MarketPrize:"Previous Closing Price"},le={AveragePrice:"Average Cost Price",Sector:"Sector Name",PrevClosingPrice:"Previous Closing Price",QuantityAvailable:"Quantity",StockName:"Stock Name",RealizedPAndL:"Realized Profit/Loss",UnrealizedPAndL:"Unrealized Profit/Loss",MarketPrize:" Current Market Price"},ce={AveragePrice:"Average Cost Price",Sector:"Sector Name",PrevClosingPrice:"Previous Closing Price",QuantityAvailable:"Quantity",StockName:"Stock Name",UnrealizedPAndL:"Unrealized P&L",MarketPrize:"Current Market Price"},de={Hdfc:{STEEL:"materials","IT - SOFTWARE":"i-t",Others:"other","AGRO CHEMICALS":"other","AUTO ANCILLARIES":"other",AUTOMOBILE:"other",BANKS:"banking","CAPITAL GOODS - ELECTRICAL EQUIPMENT":"other",CHEMICALS:"other","DIAMOND, GEMS AND JEWELLERY":"other","E-COMMERCE/APP BASED AGGREGATOR":"other",ELECTRONICS:"other",ENTERTAINMENT:"other",ETF:"other",FINANCE:"financial",FMCG:"con-dis",HEALTHCARE:"other","HOTELS & RESTAURANTS":"other","INFRASTRUCTURE DEVELOPERS & OPERATORS":"other","IT - HARDWARE & SOFTWARE":"other","MINING / MINERAL PRODUCTS / Non Ferrous metal":"other",MISCELLANEOUS:"other",PACKAGING:"other","PAINTS/VARNISH":"other",PHARMACEUTICALS:"other","PLANTATION & PLANTATION PRODUCTS":"other","POWER GENERATION & DISTRIBUTION":"oil-gas","QUICK SERVICE RESTAURANT":"other",REALTY:"other",REFINERIES:"other",RETAIL:"other","TELECOMM-SERVICE":"other",TEXTILES:"other","TOBACCO PRODUCTS":"other"},Zerodha:{Energy:"oil-gas",Materials:"materials","Information Technology":"i-t",Financials:"financial",Others:"other","AGRO CHEMICALS":"other","AUTO ANCILLARIES":"other",AUTOMOBILE:"other",BANKS:"banking","CAPITAL GOODS - ELECTRICAL EQUIPMENT":"other",CHEMICALS:"other","DIAMOND, GEMS AND JEWELLERY":"other","E-COMMERCE/APP BASED AGGREGATOR":"other",ELECTRONICS:"other",ENTERTAINMENT:"other",ETF:"other",FINANCE:"financial",FMCG:"con-dis",HEALTHCARE:"other","HOTELS & RESTAURANTS":"other","INFRASTRUCTURE DEVELOPERS & OPERATORS":"other","IT - HARDWARE & SOFTWARE":"other","MINING / MINERAL PRODUCTS / Non Ferrous metal":"other",MISCELLANEOUS:"other",PACKAGING:"other","PAINTS/VARNISH":"other",PHARMACEUTICALS:"other","PLANTATION & PLANTATION PRODUCTS":"other","POWER GENERATION & DISTRIBUTION":"oil-gas","QUICK SERVICE RESTAURANT":"other",REALTY:"other",REFINERIES:"other",RETAIL:"other","TELECOMM-SERVICE":"other",TEXTILES:"other","TOBACCO PRODUCTS":"other"},Custom:{"AGRO CHEMICALS":"other","AUTO ANCILLARIES":"other",AUTOMOBILE:"other",BANKS:"banking","CAPITAL GOODS - ELECTRICAL EQUIPMENT":"other",CHEMICALS:"other","DIAMOND, GEMS AND JEWELLERY":"other","E-COMMERCE/APP BASED AGGREGATOR":"other",ELECTRONICS:"other",ENTERTAINMENT:"other",MISCELLANEOUS:"other",FINANCE:"financial",FMCG:"con-dis",HEALTHCARE:"other","HOTELS & RESTAURANTS":"other","INFRASTRUCTURE DEVELOPERS & OPERATORS":"other","IT - HARDWARE & SOFTWARE":"i-t","MINING/MINERAL PRODUCTS/Non Ferrous metal":"materials",PACKAGING:"other","PAINTS/VARNISH":"other",PHARMACEUTICALS:"other","PLANTATION & PLANTATION PRODUCTS":"other","POWER GENERATION & DISTRIBUTION":"oil-gas","QUICK SERVICE RESTAURANT":"other","TELECOMM-SERVICE":"other",TEXTILES:"other"}},y={banking:"BANKING","oil-gas":"Energy","con-dis":"FMCG",materials:"Materials","i-t":"IT",financial:"FINANCE",other:"Others"},he="Zerodha",ge="Hdfc",ue="Custom";localStorage.getItem("broker");function me(t){return new Promise((o,s)=>{const i=new FileReader;i.readAsArrayBuffer(t),i.onload=l=>{const g=l.target.result,u=T.exports.read(g,{type:"buffer"}),E=u.SheetNames[0],c=u.Sheets[E],m=t.name;let p,h;p=m.split("-"),p.length===1?p=m.split("_"):p=m.split("-");const A=p.filter(f=>f==null?void 0:f[0]);if((A==null?void 0:A[0])==="holdings"){localStorage.setItem("broker",he),h=T.exports.utils.sheet_to_json(c,{range:{s:{c:1,r:22},e:{c:13,r:1e5}}});let f=L(h,se,"Zerodha");o(f)}else if((A==null?void 0:A[0])==="Equity"){localStorage.setItem("broker",ge),h=T.exports.utils.sheet_to_json(c,{range:{s:{c:0,r:4},e:{c:13,r:1e5}}});let f=L(h,le,"Hdfc");o(f)}else{localStorage.setItem("broker",ue),h=T.exports.utils.sheet_to_json(c,{range:{s:{c:0,r:1},e:{c:10,r:1e5}}});let f=L(h,ce,"Custom");o(f)}i.onerror=f=>{s(f)}}})}function L(t,r,o){if(o!==null)return t.map(i=>({StockName:i[r.StockName],Sector:de[o][i[r.Sector]],QuantityAvailable:i[r.QuantityAvailable],AveragePrice:i[r.AveragePrice],PrevClosingPrice:i[r.PrevClosingPrice],UnrealizedPAndL:i[r.UnrealizedPAndL],MarketPrize:i[r.MarketPrize]}));console.log("broker not found / null")}function pe(){const[t,r]=d.exports.useState(!1),[o,s]=d.exports.useState();let i=N();const l=E=>{me(E).then(m=>{s(!0),localStorage.setItem("datalist",JSON.stringify(m))})};function g(){o===!0&&i("/Map")}function u(){i("/Map")}return e(x,{children:e(Ae,{children:a(xe,{children:[e(Ce,{children:"Upload Data Sheet"}),e("br",{}),e(j,{children:"Upload the Excel file from your device to access your Stock and Share data"}),e("br",{}),e(oe,{onChange:E=>{const c=E.target.files[0];let p=c.name.split("."),h=p[p.length-1];h==="xls"||h==="xlsx"||h==="csv"?(r(!1),l(c),localStorage.removeItem("datalist")):r(!0)}}),t===!0&&e(Ee,{children:"Invalid file chosen. Please choose a valid Excel file"}),e("br",{}),e(fe,{isActive:o,onClick:g,children:"Upload File"}),e("br",{}),e(Se,{onClick:u,children:"Skip Upload"}),e("br",{}),e(j,{children:"You can always upload anytime from the Upload button in the App"})]})})})}const fe=n(O)`
  background-color: ${t=>t.isActive?"transparent":"gray"};
`,Ee=n.p`
  margin-top:1rem;
  color:red;
`,Ae=n.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
`,Se=n.button`
  background-color: transparent;
  outline: none;
  border: none;
  border: 1px solid gray;
  display: flex;
  align-self: center;
  padding: 1rem 0.5rem;
  text-align: center;
  cursor: pointer;
`,xe=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`,Ce=n.h2`
  margin:0;
  padding:0;
`,j=n.h5`
  margin:0;
  padding:0;
  text-align: center;
  font-weight: 400;
`;function be(){const[t,r]=d.exports.useState(!0);let o=N();return d.exports.useEffect(()=>{setTimeout(()=>{r(!1)},3500),localStorage.getItem("datalist")!=null&&o("/Map")},[]),e(x,{children:t?e(Te,{children:e(te,{})}):e(pe,{})})}n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;const Te=n.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`,k={banking:[2528,2013],"oil-gas":[1912,2076],"con-dis":[1873,1385],materials:[2270,1319],"i-t":[2925,1063],financial:[2961,249],other:[2313,249],s5:[1659,249],s6:[1333,817],s7:[1365,1758]},z={width:650,height:370,centerY:185},S=.25;function Ne(t){return new Promise((r,o)=>{const s=new Image;s.addEventListener("load",()=>{r({width:s.naturalWidth,height:s.naturalHeight})}),s.addEventListener("error",i=>{o(`${i.type}: ${i.message}`)}),s.src=t})}function Ie(){return 45*(1-S)}const Re=s=>{var i=s,{src:t,onLoad:r}=i,o=H(i,["src","onLoad"]);const[l,g]=d.exports.useState(0);d.exports.useEffect(()=>{u()},[]);function u(){Ne(t).then(c=>{g(c.height)}).catch(c=>{console.log("\u{1F680} ~ file: Building.tsx ~ positioning err",c)})}function E(c){r(c)}return e(x,{children:e(Pe,B(F({src:t,naturalHeight:l},o),{onload:E}))})};var ve=G.memo(Re);const Pe=n.img`
  position: absolute;
  transform: translate(-50%,${({naturalHeight:t})=>-z.centerY+z.height*S-(t||0)*S-Ie()}px) scale(${S}) ;
  ${({sector:t})=>`
    top: ${k[t][0]*S}px;
    left: ${k[t][1]*S}px;
  `}

`;var I;(function(t){t.Map="/assets/Map.png",t.Building="/assets/Building.png"})(I||(I={}));const Oe=({children:t,containerChild:r})=>e(Le,{children:a(Me,{children:[e(ke,{children:r}),t]})});var ye=G.memo(Oe);const Le=n.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`,ke=n.div`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1000;
`,Me=n.div`
  width: ${3077*S}px;
  height: ${3454*S}px;
  position: relative;
  /* background-color: blue; */
  background-image: url(${I.Map});
  background-repeat: no-repeat;
  background-size: cover;
`,we=Object.keys(k).filter(t=>!t.startsWith("s")),Ue=({})=>{const t=N();function r(l){console.log("\u{1F680} ~ file: MapPage.tsx ~ line 13 ~ onBuildingClick ~ sector",l),t("/Portfolio/"+l)}const o=d.exports.useMemo(()=>we.map(l=>{function g(){r(l)}return e(ve,{src:I.Building,onClick:g,sector:""+l},l+"")}),[]);function s(){localStorage.removeItem("datalist"),localStorage.removeItem("broker"),t(-1)}const i=d.exports.useMemo(()=>e(De,{onClick:s,children:" Upload "}),[]);return a(ye,{containerChild:i,children:[o,e("h6",{children:"Build v1.0"})]})},De=n(O)`
  background-color: #0000FF7F;
  backdrop-filter: blur(1px);
  padding: 0.5rem 0.8rem;
`,Fe=({Sector:t})=>a(Ge,{children:[e(He,{children:t}),e(Be,{children:e($e,{children:e("p",{children:"No shares owned in this company / No shares available in this sector"})})})]}),Be=n.div`
    width: 100%;
    padding: 1rem 1rem 0 1rem;
`,He=n.h1`
    align-self: flex-start;
    text-decoration: underline;
    border-bottom: 1px solid gray;
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
    font-size: 14px;
`,Ge=n.div`
    background: white;
    /* padding: 0 1rem 0; */
    margin: 1rem;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    width:80%;
    border-radius: 10px;
`,$e=n.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-bottom: 1rem;
`;n.p`
    margin:0;
    font-size: 14px;
    text-align:start;
    /* margin-right:4rem; */
`;const je=({Stock_Name:t,NumberOfSharesOwned:r,onClick:o})=>a(ze,{children:[a(Qe,{children:[e(Ve,{children:t}),a(We,{children:["No. of shares owned ",e("br",{})," ",r," "]})]}),a(Ke,{onClick:o,children:["Expand ",">"]})]}),ze=n.div`
    background: white;
    padding: 1rem;
    margin: 1rem;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    width:80%;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
`,Qe=n.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin: 1rem 0 1rem 1rem;
`,Ve=n.h1`
    margin:0;
    font-size: 14px;
    align-self: flex-start;
`,We=n.p`
    margin:0;
    font-size: 14px;
    text-align:center;
    margin-right:4rem;
`,Ke=n.button`
    outline: none;
    border: none;
    background: transparent;
    align-self:flex-end;
    text-decoration: underline;
`,_e=({Stock_Name:t,NumberOfSharesOwned:r,Sector:o,BoughtPrice:s,CurrentMarketPrice:i})=>a(Ze,{children:[e(Je,{children:t}),a(Ye,{children:[a(Q,{children:[a(R,{children:["Sector Name ",e("br",{})," ",o," "]}),a(R,{children:["No. of shares owned ",e("br",{})," ",r," "]})]}),a(Q,{children:[a(R,{children:["Bought Price ",e("br",{})," ",s," "]}),a(R,{children:["Current Market Price ",e("br",{})," ",i," "]})]})]})]}),Ye=n.div`
    width: 100%;
    padding: 1rem 1rem 0 1rem;
`,Je=n.h1`
    align-self: center;
    text-decoration: underline;
    border-bottom: 1px solid gray;
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
    font-size: 14px;
`,Ze=n.div`
    background: white;
    /* padding: 0 1rem 0; */
    margin: 1rem;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    width:80%;
    border-radius: 10px;
`,Q=n.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-bottom: 1rem;
`,R=n.p`
    margin:0;
    font-size: 14px;
    text-align:start;
    /* margin-right:4rem; */
`,Xe=({})=>{const[t,r]=d.exports.useState(!1),{sector:o="materials"}=$();console.log(o);const[s,i]=d.exports.useState(!1),[l,g]=d.exports.useState(),[u,E]=d.exports.useState();d.exports.useEffect(()=>{r(!1),c()},[o]);function c(){const m=localStorage.getItem("datalist");let h=JSON.parse(m||"[]").filter(A=>A.Sector==o);console.log(h),h.length===0&&r(!0),g(h.slice(0,5))}return e(qe,{children:s?e(x,{children:e(x,{children:e(_e,{Stock_Name:u.StockName,NumberOfSharesOwned:u.QuantityAvailable,Sector:y[u.Sector],BoughtPrice:u.AveragePrice,CurrentMarketPrice:u.MarketPrize})})}):a(x,{children:[l==null?void 0:l.map((m,p)=>e(x,{children:e(je,{Stock_Name:m.StockName,NumberOfSharesOwned:m.QuantityAvailable,onClick:()=>{i(!0),E(m)}},p)})),t&&e(Fe,{Sector:y[o]})]})})},qe=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,et=({})=>a(rt,{children:[a(tt,{children:[a(M,{children:[a(C,{children:["Total Share ",e("br",{})," ","20"," "]}),a(C,{children:["Total Value ",e("br",{})," $","10,000"," "]})]}),a(M,{children:[a(C,{children:["Positive/Negative",e("br",{})," \u2191","+1.02%"," "]}),e(C,{})]})]}),a(M,{children:[a(nt,{children:["Stock Market Cap Level:",e("br",{})," Level1 "]}),e(C,{})]})]}),tt=n.div`
    width: 100%;
    padding: 1rem 1rem 0 1rem;
    border-bottom: 1.5px solid black;
    /* border: 1px solid black; */
`,rt=n.div`
    background: white;
    /* padding: 0 1rem 0; */
    margin-top: 1rem;
    display:flex;
    justify-content: center;
    align-items: center;
    align-self: center  ;
    flex-direction: column;
    /* border: 1px solid black; */
    width:100%;
    border-radius: 10px;
`,M=n.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-bottom: 1rem;
`,C=n.p`
    margin:0;
    font-size: 14px;
    text-align:center;
    width: 100%;
`,nt=n(C)`
    margin-top: 1rem;
    text-align: start;
    display: flex;
    justify-content: center;
`,ot=({})=>{const[t,r]=d.exports.useState("tab1");return a(it,{children:[a(at,{className:"nav",children:[e(V,{className:t==="tab1"?"active":"",onClick:()=>{r("tab1")},children:"All Shares"}),e(V,{className:t==="tab2"?"active":"",onClick:()=>{r("tab2")},children:"Portfolio Summary"})]}),e("div",{children:t==="tab1"?e(Xe,{}):e(et,{})})]})},it=n.div`
    width: 100%;
`,at=n.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    padding: 0;
`,V=n.li`
    width: 50%;
    padding: 1rem;
    list-style: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.7s;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border: 2px solid black;


    &:nth-child(2) {
        border-radius: 0;
        border-top-right-radius: 1rem;
        border-top-left-radius: 1rem;
   };

    &.active {
        background: #39A2DB;
    }
    

`,st=({})=>{let t=N();const{sector:r="banking"}=$();function o(){t(-1)}return e(ct,{children:a(dt,{children:[a(ht,{children:[a(gt,{children:[y[r]," Sector - Portfolio"]}),a(O,{onClick:o,children:[e(lt,{children:e(Y,{icon:J})}),"Exit"]})]}),e(ot,{})]})})},lt=n.div`
    margin-right: 0.5rem;
`,ct=n.div`
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
`,dt=n.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 425px;
`,ht=n.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 1rem;
`,gt=n.p`
    margin:0;
    text-align: center;
    font-weight: bold;
`;const ut=document.getElementById("root");Z.exports.render(e(X,{children:a(q,{children:[e(P,{path:"/",element:e(be,{})}),e(P,{path:"Map",element:e(Ue,{})}),e(P,{path:"Portfolio/:sector",element:e(st,{})})]})}),ut);
