webpackJsonp([1],{"5Tap":function(e,t){},"9M+g":function(e,t){},GcMe:function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("fZjL"),a=i.n(s),n=(i("Jmt5"),i("9M+g"),i("7+uW")),l=i("Dd8w"),o=i.n(l),r=i("sUu7"),c=i("wGWZ");Object(r.c)("required",o()({},c.required,{message:"The field is required!"})),Object(r.c)("regex",o()({},c.required,{message:"{_field_}!"}));var u={components:{ValidationObserver:r.a,ValidationProvider:r.b},data:function(){return{activeStep:0,choose:!1,checked:!1,checkbox:!1,showOption:!1,formSteps:[{title:"About You",fields:[{label:"Full Name",message:"The field is required!",value:"",valid:!0,pattern:/^[A-Za-z ]+$/,error:"The field is required!"},{label:"Email",message:"The field must be email!",value:"",valid:!0,pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,error:"The field is required!"}]},{title:"About your Company",fields:[{label:"Your Company Name",message:"The field is required!",value:"",valid:!0,pattern:/^[A-Za-z ]+$/,error:"The field is required!"},{label:"Number of Employees",message:"Should be a valid value!",value:"",valid:!0,pattern:/^[0-9]+$/,error:"The field is required!"}]},{title:"Finishing Up",label:"From Where did you hear about us",value:"-- Choose anwser --",fields:[]}],options:[{value:"Friend"},{value:"Facebook"},{value:"Website"}]}},methods:{nextStep:function(){this.activeStep++},preivousStep:function(){0!==this.activeStep&&this.activeStep--},checkFieldAll:function(){var e=!0;this.formSteps[this.activeStep].fields.forEach(function(t){t.pattern.test(t.value)?t.valid=!0:(e=!1,t.valid=!1)}),e&&this.nextStep()},selectedOption:function(e){this.formSteps[this.formSteps.length-1].value=e,this.showOption=!1,this.choose=!0},resetForm:function(){this.activeStep=0,this.formSteps.forEach(function(e){e.fields.forEach(function(e){e.value=""})})},sendInfo:function(e){}}},d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("section",{staticClass:"tabs"},[i("div",{staticClass:"tabs-mark"},[i("div",{staticClass:"tabs-mark__acitve",style:{width:34*(e.activeStep+1)+"%"}})]),e._v(" "),i("div",{staticClass:"row tabs-wrapper"},e._l(e.formSteps,function(t,s){return i("div",{key:s,staticClass:"col-lg-4 col-md-4 tabs-item p-0"},[i("div",{class:{active:s===e.activeStep}},[i("div",{staticClass:"tabs-title"},[i("p",{staticClass:"tabs-title__indx"},[e._v(e._s(s+1))]),e._v(" "),i("p",{staticClass:"tabs-title__cont"},[e._v(e._s(e.formSteps[s].title))])])])])}),0),e._v(" "),i("div",{staticClass:"tabs-content tabs-wrapper"},[i("ValidationObserver",[i("form",{on:{submit:function(e){e.preventDefault()}}},e._l(e.formSteps[e.activeStep].fields,function(t,s){return i("div",{key:s,staticClass:"input-field"},[i("ValidationProvider",{attrs:{name:t.message,rules:{required:!0,regex:t.pattern}},scopedSlots:e._u([{key:"default",fn:function(s){var a=s.errors;return[i("label",{staticClass:"input-field__label"},[e._v(e._s(t.label))]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"field.value"}],staticClass:"input-field__text",class:{"input-error":a[0]},attrs:{type:"text",value:"field.value",required:"required"},domProps:{value:t.value},on:{input:function(i){i.target.composing||e.$set(t,"value",i.target.value)}}}),e._v(" "),i("span",{staticClass:"input-field__error"},[e._v(e._s(a[0]))])]}}],null,!0)})],1)}),0)]),e._v(" "),e.activeStep===e.formSteps.length-1?i("div",{staticClass:"position-relative"},[i("span",[e._v(e._s(e.formSteps[e.activeStep].label))]),e._v(" "),i("div",{staticClass:"select-option position-relative",class:{"input-error":!e.choose},on:{click:function(t){e.showOption=!e.showOption}}},[i("span",{staticClass:"select-option__cont"},[e._v(e._s(e.formSteps[e.activeStep].value))]),e._v(" "),i("span",{staticClass:"input-field__icon"})]),e._v(" "),i("p",{staticClass:"input-field__error",style:[e.choose?{display:"none"}:{display:"block"}]},[e._v("\n          The field is required!\n        ")]),e._v(" "),e.showOption?i("div",{staticClass:"select-option__list"},[i("ul",e._l(e.options,function(t,s){return i("li",{key:s,on:{click:function(i){return e.selectedOption(t.value)}}},[i("p",[e._v(e._s(t.value))])])}),0)]):e._e(),e._v(" "),i("form",{staticClass:"chekbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var i=e.checked,s=t.target,a=!!s.checked;if(Array.isArray(i)){var n=e._i(i,null);s.checked?n<0&&(e.checked=i.concat([null])):n>-1&&(e.checked=i.slice(0,n).concat(i.slice(n+1)))}else e.checked=a}}}),e._v(" "),i("label",[e._v(" I accept terms & conditions")]),e._v(" "),i("p",{staticClass:"input-field__error p-0",style:[e.checked?{display:"none"}:{display:"block"}]},[e._v("\n            The field is required!\n          ")])])]):e._e()],1),e._v(" "),i("div",{staticClass:"tabs-action"},[e.activeStep>=0&&e.activeStep+1<e.formSteps.length?i("button",{staticClass:"btn tabs-action__btn tabs-btn--green",on:{click:e.preivousStep}},[e._v("\n        previous\n      ")]):e._e(),e._v(" "),e.activeStep+1<e.formSteps.length?i("button",{staticClass:"btn tabs-action__btn tabs-btn--blue",on:{click:e.checkFieldAll}},[e._v("\n        next\n      ")]):e._e(),e._v(" "),e.activeStep===e.formSteps.length-1?i("button",{staticClass:"btn tabs-action__btn tabs-btn--blue",on:{click:e.resetForm}},[e._v("\n        reset\n      ")]):e._e(),e._v(" "),e.activeStep===e.formSteps.length-1?i("button",{staticClass:"btn tabs-action__btn tabs-btn--green",on:{click:function(t){return e.sendInfo(e.checked)}}},[e._v("\n        send\n      ")]):e._e()])])])},staticRenderFns:[]};var p={name:"App",components:{VeeValidateForm:i("VU/8")(u,d,!1,function(e){i("5Tap")},"data-v-0a3313f0",null).exports}},v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("VeeValidateForm")],1)},staticRenderFns:[]},f=i("VU/8")(p,v,!1,null,null,null).exports,_=i("tg9W"),h=i("Tqaz");i("GcMe");a()(c).forEach(function(e){Object(r.c)(e,c[e])}),n.default.config.productionTip=!1,n.default.component("ValidationProvider",_.a),n.default.component("ValidationObserver",r.a),n.default.use(h.a),n.default.use(h.b),new n.default({el:"#app",components:{App:f},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.ae5ecac123cc20657594.js.map