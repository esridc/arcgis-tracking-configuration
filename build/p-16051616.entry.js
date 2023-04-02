import{r as t,c as i,h as a,g as e}from"./p-686dc488.js";import{f as s,g as n}from"./p-197ed835.js";import{u as c}from"./p-7b97aed3.js";import{c as r,d as o,g as l}from"./p-168b9271.js";import{a as h,s as d,c as p}from"./p-04967691.js";import{c as u,d as f}from"./p-1cdacb7f.js";import{c as m}from"./p-e6be3162.js";import{c as b,s as g,d as v,u as y}from"./p-07f9c07c.js";import"./p-30b0f762.js";import"./p-5f83161a.js";import"./p-62d90ff5.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.2.0
 */const w={wrapper:"wrapper",confirmChangesButton:"confirm-changes-button",cancelEditingButton:"cancel-editing-button",inputWrapper:"input-wrapper",cancelEditingButtonWrapper:"cancel-editing-button-wrapper",enableEditingButton:"enable-editing-button",controlsWrapper:"controls-wrapper"};const k="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block}:host([scale=s]) .controls-wrapper{block-size:1.5rem}:host([scale=m]) .controls-wrapper{block-size:2rem}:host([scale=l]) .controls-wrapper{block-size:2.75rem}:host(:not([editing-enabled]):not([disabled])) .wrapper:hover{background-color:var(--calcite-ui-foreground-2)}.wrapper{box-sizing:border-box;display:flex;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.wrapper .input-wrapper{flex:1 1 0%}.controls-wrapper{display:flex}:host([disabled]) .cancel-editing-button-wrapper{border-color:var(--calcite-ui-border-2)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}";const C=class{constructor(a){t(this,a);this.calciteInlineEditableEditCancel=i(this,"calciteInlineEditableEditCancel",6);this.calciteInlineEditableEditConfirm=i(this,"calciteInlineEditableEditConfirm",6);this.calciteInternalInlineEditableEnableEditingChange=i(this,"calciteInternalInlineEditableEnableEditingChange",6);this.mutationObserver=m("mutation",(()=>this.mutationObserverCallback()));this.enableEditing=()=>{var t,i;this.valuePriorToEditing=(t=this.inputElement)===null||t===void 0?void 0:t.value;this.editingEnabled=true;(i=this.inputElement)===null||i===void 0?void 0:i.setFocus();this.calciteInternalInlineEditableEnableEditingChange.emit()};this.disableEditing=()=>{this.editingEnabled=false};this.cancelEditing=()=>{if(this.inputElement){this.inputElement.value=this.valuePriorToEditing}this.disableEditing();this.enableEditingButton.setFocus();if(!this.editingEnabled&&!!this.shouldEmitCancel){this.calciteInlineEditableEditCancel.emit()}};this.escapeKeyHandler=async t=>{var i;if(t.defaultPrevented){return}if(t.key==="Escape"){t.preventDefault();this.cancelEditing()}if(t.key==="Tab"&&this.shouldShowControls){if(!t.shiftKey&&t.target===this.inputElement){t.preventDefault();this.cancelEditingButton.setFocus()}if(!!t.shiftKey&&t.target===this.cancelEditingButton){t.preventDefault();(i=this.inputElement)===null||i===void 0?void 0:i.setFocus()}}};this.cancelEditingHandler=async t=>{t.preventDefault();this.cancelEditing()};this.enableEditingHandler=async t=>{if(this.disabled||t.target===this.cancelEditingButton||t.target===this.confirmEditingButton){return}t.preventDefault();if(!this.editingEnabled){this.enableEditing()}};this.confirmChangesHandler=async t=>{t.preventDefault();this.calciteInlineEditableEditConfirm.emit();try{if(this.afterConfirm){this.loading=true;await this.afterConfirm();this.disableEditing();this.enableEditingButton.setFocus()}}catch(t){}finally{this.loading=false}};this.disabled=false;this.editingEnabled=false;this.loading=false;this.controls=false;this.scale=undefined;this.afterConfirm=undefined;this.messages=undefined;this.messageOverrides=undefined;this.defaultMessages=undefined;this.effectiveLocale=undefined}disabledWatcher(t){if(this.inputElement){this.inputElement.disabled=t}}editingEnabledWatcher(t,i){if(this.inputElement){this.inputElement.editingEnabled=t}if(!t&&!!i){this.shouldEmitCancel=true}}onMessagesChange(){}connectedCallback(){var t;r(this);u(this);b(this);(t=this.mutationObserver)===null||t===void 0?void 0:t.observe(this.el,{childList:true});this.mutationObserverCallback()}async componentWillLoad(){h(this);await g(this)}componentDidLoad(){d(this)}disconnectedCallback(){var t;o(this);f(this);v(this);(t=this.mutationObserver)===null||t===void 0?void 0:t.disconnect()}componentDidRender(){c(this)}render(){return a("div",{class:w.wrapper,onClick:this.enableEditingHandler,onKeyDown:this.escapeKeyHandler},a("div",{class:w.inputWrapper},a("slot",null)),a("div",{class:w.controlsWrapper},a("calcite-button",{appearance:"transparent",class:w.enableEditingButton,disabled:this.disabled,iconStart:"pencil",kind:"neutral",label:this.messages.enableEditing,onClick:this.enableEditingHandler,scale:this.scale,style:{opacity:this.editingEnabled?"0":"1",width:this.editingEnabled?"0":"inherit"},type:"button",ref:t=>this.enableEditingButton=t}),this.shouldShowControls&&[a("div",{class:w.cancelEditingButtonWrapper},a("calcite-button",{appearance:"transparent",class:w.cancelEditingButton,disabled:this.disabled,iconStart:"x",kind:"neutral",label:this.messages.cancelEditing,onClick:this.cancelEditingHandler,scale:this.scale,type:"button",ref:t=>this.cancelEditingButton=t})),a("calcite-button",{appearance:"solid",class:w.confirmChangesButton,disabled:this.disabled,iconStart:"check",kind:"brand",label:this.messages.confirmChanges,loading:this.loading,onClick:this.confirmChangesHandler,scale:this.scale,type:"button",ref:t=>this.confirmEditingButton=t})]))}blurHandler(){if(!this.controls){this.disableEditing()}}effectiveLocaleChange(){y(this,this.effectiveLocale)}async setFocus(){var t;await p(this);(t=this.el)===null||t===void 0?void 0:t.focus()}mutationObserverCallback(){var t;this.updateSlottedInput();this.scale=this.scale||((t=this.inputElement)===null||t===void 0?void 0:t.scale)||s(this.el,"scale",undefined)}onLabelClick(){this.setFocus()}updateSlottedInput(){const t=n(this.el,{matches:"calcite-input"});this.inputElement=t;if(!t){return}this.inputElement.disabled=this.disabled;this.inputElement.label=this.inputElement.label||l(this)}get shouldShowControls(){return this.editingEnabled&&this.controls}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return e(this)}static get watchers(){return{disabled:["disabledWatcher"],editingEnabled:["editingEnabledWatcher"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};C.style=k;export{C as calcite_inline_editable};
//# sourceMappingURL=p-16051616.entry.js.map