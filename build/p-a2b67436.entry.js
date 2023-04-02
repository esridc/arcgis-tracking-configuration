import{r as t,c as i,h as e,H as a,g as n}from"./p-686dc488.js";import{b as c,t as o}from"./p-197ed835.js";import{g as s}from"./p-30b0f762.js";import{i as r}from"./p-62d90ff5.js";import{c as l,d}from"./p-1cdacb7f.js";import{u as m,c as h,d as g,s as u}from"./p-07f9c07c.js";import"./p-5f83161a.js";import"./p-e6be3162.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const f={content:"content",invalid:"invalid",toggle:"toggle",toggleSwitch:"toggle--switch",toggleSwitchContent:"toggle--switch__content",toggleSwitchText:"toggle--switch__text",sectionHeader:"section-header",sectionHeaderText:"section-header__text",statusIcon:"status-icon",valid:"valid"};const p={menuOpen:"chevron-down",menuClosedLeft:"chevron-left",menuClosedRight:"chevron-right",valid:"check-circle",invalid:"exclamation-mark-triangle"};const v="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host([open]){border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}:host(:last-child){border-block-end-width:0px}.toggle{inline-size:100%;border-width:0px;background-color:transparent;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}.toggle--switch,.section-header{margin-inline:0px;margin-block:0.25rem;display:flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;padding-inline:0px;padding-block:0.5rem;font-size:var(--calcite-font-size--1);outline-color:transparent}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header .status-icon{align-self:flex-end}.section-header__text{margin-inline:0.75rem;margin-block:0px;flex:1 1 auto;text-align:initial;word-wrap:anywhere}.toggle--switch calcite-switch{pointer-events:none;margin-inline-start:0.25rem}.toggle--switch .status-icon{margin-inline-start:0.5rem}.toggle--switch__content{display:flex;flex:1 1 auto;align-items:center}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}";const b=class{constructor(e){t(this,e);this.calciteBlockSectionToggle=i(this,"calciteBlockSectionToggle",6);this.guid=s();this.handleHeaderKeyDown=t=>{if(r(t.key)){this.toggleSection();t.preventDefault();t.stopPropagation()}};this.toggleSection=()=>{this.open=!this.open;this.calciteBlockSectionToggle.emit()};this.open=false;this.status=undefined;this.text=undefined;this.toggleDisplay="button";this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale=undefined;this.defaultMessages=undefined}onMessagesChange(){}effectiveLocaleChange(){m(this,this.effectiveLocale)}connectedCallback(){l(this);h(this)}disconnectedCallback(){d(this);g(this)}async componentWillLoad(){await u(this)}renderStatusIcon(){var t;const{status:i}=this;const a=(t=p[i])!==null&&t!==void 0?t:false;const n={[f.statusIcon]:true,[f.valid]:i=="valid",[f.invalid]:i=="invalid"};return!!a?e("calcite-icon",{class:n,icon:a,scale:"s"}):null}render(){const{el:t,messages:i,open:n,text:s,toggleDisplay:r}=this;const l=c(t);const d=n?p.menuOpen:l==="rtl"?p.menuClosedLeft:p.menuClosedRight;const m=n?i.collapse:i.expand;const{guid:h}=this;const g=`${h}-region`;const u=`${h}-button`;const v=r==="switch"?e("div",{"aria-controls":g,"aria-label":m,class:{[f.toggle]:true,[f.toggleSwitch]:true},id:u,onClick:this.toggleSection,onKeyDown:this.handleHeaderKeyDown,tabIndex:0,title:m},e("div",{class:f.toggleSwitchContent},e("span",{class:f.toggleSwitchText},s)),e("calcite-switch",{checked:n,label:m,scale:"s",tabIndex:-1}),this.renderStatusIcon()):e("button",{"aria-controls":g,"aria-label":m,class:{[f.sectionHeader]:true,[f.toggle]:true},id:u,name:m,onClick:this.toggleSection},e("calcite-icon",{icon:d,scale:"s"}),e("span",{class:f.sectionHeaderText},s),this.renderStatusIcon());return e(a,null,v,e("section",{"aria-expanded":o(n),"aria-labelledby":u,class:f.content,hidden:!n,id:g},e("slot",null)))}static get assetsDirs(){return["assets"]}get el(){return n(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};b.style=v;export{b as calcite_block_section};
//# sourceMappingURL=p-a2b67436.entry.js.map