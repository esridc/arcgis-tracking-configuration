import{c as t,a as n}from"./p-197ed835.js";import{n as e}from"./p-62d90ff5.js";import{c as s}from"./p-e6be3162.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const r=new RegExp(`\\${"."}(0+)?$`);const i=new RegExp("0+$");class o{constructor(t){if(t instanceof o){return t}const[n,e]=$(t).split(".").concat("");this.value=BigInt(n+e.padEnd(o.DECIMALS,"0").slice(0,o.DECIMALS))+BigInt(o.ROUNDED&&e[o.DECIMALS]>="5");this.isNegative=t.charAt(0)==="-"}getIntegersAndDecimals(){const t=this.value.toString().replace("-","").padStart(o.DECIMALS+1,"0");const n=t.slice(0,-o.DECIMALS);const e=t.slice(-o.DECIMALS).replace(i,"");return{integers:n,decimals:e}}toString(){const{integers:t,decimals:n}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${t}${n.length?"."+n:""}`}formatToParts(t){const{integers:n,decimals:e}=this.getIntegersAndDecimals();const s=t.numberFormatter.formatToParts(BigInt(n));this.isNegative&&s.unshift({type:"minusSign",value:t.minusSign});if(e.length){s.push({type:"decimal",value:t.decimal});e.split("").forEach((t=>s.push({type:"fraction",value:t})))}return s}format(t){const{integers:n,decimals:e}=this.getIntegersAndDecimals();const s=`${this.isNegative?t.minusSign:""}${t.numberFormatter.format(BigInt(n))}`;const r=e.length?`${t.decimal}${e.split("").map((n=>t.numberFormatter.format(Number(n)))).join("")}`:"";return`${s}${r}`}add(t){return o.fromBigInt(this.value+new o(t).value)}subtract(t){return o.fromBigInt(this.value-new o(t).value)}multiply(t){return o._divRound(this.value*new o(t).value,o.SHIFT)}divide(t){return o._divRound(this.value*o.SHIFT,new o(t).value)}}o.DECIMALS=100;o.ROUNDED=true;o.SHIFT=BigInt("1"+"0".repeat(o.DECIMALS));o._divRound=(t,n)=>o.fromBigInt(t/n+(o.ROUNDED?t*BigInt(2)/n%BigInt(2):BigInt(0)));o.fromBigInt=t=>Object.assign(Object.create(o.prototype),{value:t,isNegative:t<BigInt(0)});function c(t){return!(!t||isNaN(Number(t)))}function u(t){if(!t||!d(t)){return""}return m(t,(t=>{let n=false;const s=t.split("").filter(((t,s)=>{if(t.match(/\./g)&&!n){n=true;return true}if(t.match(/\-/g)&&s===0){return true}return e.includes(t)})).reduce(((t,n)=>t+n));return c(s)?new o(s).toString():""}))}const a=/^([-0])0+(?=\d)/;const h=/(?!^\.)\.$/;const l=/(?!^-)-/g;const g=/^-\b0\b\.?0*$/;const f=t=>m(t,(t=>{const n=t.replace(l,"").replace(h,"").replace(a,"$1");return c(n)?g.test(n)?n:new o(n).toString():t}));function m(t,n){if(!t){return t}const e=t.toLowerCase().indexOf("e")+1;if(!e){return n(t)}return t.replace(/[eE]*$/g,"").substring(0,e).concat(t.slice(e).replace(/[eE]/g,"")).split(/[eE]/).map(((t,e)=>e===1?n(t.replace(/\./g,"")):n(t))).join("e").replace(/^e/,"1e")}function $(t){const n=t.split(/[eE]/);if(n.length===1){return t}const e=+t;if(Number.isSafeInteger(e)){return`${e}`}const s=t.charAt(0)==="-";const i=+n[1];const o=n[0].split(".");const c=(s?o[0].substring(1):o[0])||"";const u=o[1]||"";const h=(t,n)=>{const e=Math.abs(n)-t.length;const s=e>0?`${"0".repeat(e)}${t}`:t;const r=`${s.slice(0,n)}${"."}${s.slice(n)}`;return r};const l=(t,n)=>{const e=n>t.length?`${t}${"0".repeat(n-t.length)}`:t;const s=`${e.slice(0,n)}${"."}${e.slice(n)}`;return s};const g=i>0?`${c}${l(u,i)}`:`${h(c,i)}${u}`;return`${s?"-":""}${g.charAt(0)==="."?"0":""}${g.replace(r,"").replace(a,"")}`}function d(t){return e.some((n=>t.includes(n)))}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const p="en";const b=["ar","bg","bs","ca","cs","da","de","el",p,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"];const w=["ar","bg","bs","ca","cs","da","de","de-CH","el",p,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"];const v=["arab","arabext","bali","beng","deva","fullwide","gujr","guru","hanidec","khmr","knda","laoo","latn","limb","mlym","mong","mymr","orya","tamldec","telu","thai","tibt"];const I=t=>v.includes(t);const B=(new Intl.NumberFormat).resolvedOptions().numberingSystem;const E=B==="arab"||!I(B)?"latn":B;const N=t=>I(t)?t:E;function k(t,n="cldr"){const e=n==="cldr"?w:b;if(!t){return p}if(e.includes(t)){return t}t=t.toLowerCase();if(t==="nb"){return"no"}if(n==="t9n"&&t==="pt"){return"pt-BR"}if(t.includes("-")){t=t.replace(/(\w+)-(\w+)/,((t,n,e)=>`${n}-${e.toUpperCase()}`));if(!e.includes(t)){t=t.split("-")[0]}}if(t==="zh"){return"zh-CN"}if(!e.includes(t)){console.warn(`Translations for the "${t}" locale are not available and will fall back to the default, English (en).`);return p}return t}const j=new Set;function x(t){R(t);if(j.size===0){z?.observe(document.documentElement,{attributes:true,attributeFilter:["lang"],subtree:true})}j.add(t)}function R(t){t.effectiveLocale=S(t)}function y(t){j.delete(t);if(j.size===0){z.disconnect()}}const z=s("mutation",(e=>{e.forEach((e=>{const s=e.target;j.forEach((e=>{const r=!n(s,e.el);if(r){return}const i=t(e.el,"[lang]");if(!i){e.effectiveLocale=p;return}const o=i.lang;e.effectiveLocale=i.hasAttribute("lang")&&o===""?p:o}))}))}));function S(n){return n.el.lang||t(n.el,"[lang]")?.lang||document.documentElement.lang||p}class C{constructor(){this.delocalize=t=>this._numberFormatOptions?m(t,(t=>t.trim().replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex))):t;this.localize=t=>this._numberFormatOptions?m(t,(t=>c(t.trim())?new o(t.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):t)):t}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(t){t.locale=k(t?.locale);t.numberingSystem=N(t?.numberingSystem);if(!this._numberFormatOptions&&t.locale===p&&t.numberingSystem===E&&Object.keys(t).length===2||JSON.stringify(this._numberFormatOptions)===JSON.stringify(t)){return}this._numberFormatOptions=t;this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions);this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:false,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const n=new Map(this._digits.map(((t,n)=>[t,n])));const e=new Intl.NumberFormat(this._numberFormatOptions.locale).formatToParts(-12345678.9);this._actualGroup=e.find((t=>t.type==="group")).value;this._group=this._actualGroup.trim().length===0?" ":this._actualGroup;this._decimal=e.find((t=>t.type==="decimal")).value;this._minusSign=e.find((t=>t.type==="minusSign")).value;this._getDigitIndex=t=>n.get(t)}}const O=new C;export{o as B,E as a,N as b,x as c,y as d,k as g,c as i,O as n,u as p,f as s};
//# sourceMappingURL=p-1cdacb7f.js.map