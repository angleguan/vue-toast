webpackJsonp([2,0],{0:function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=o(12),i=s(n),a=o(45),r=s(a);new i.default({el:"body",components:{App:r.default}})},10:function(t,e){},11:function(t,e){},13:function(t,e){t.exports=' <div id=app> <h1> Vue-Toast </h1> <p> A Vue component show tip to user(just like Android system\'s toast). </p><p> </p><p> It will automatically disappear in some seconds :) </p> <p> <button @click=showAbove>Click it be above</button> <vue-toast v-ref:tabove message="I am here" position="top middle" animate=scale></vue-toast> </p> <p> <button @click=showBelow>Click it be below</button> <vue-toast v-ref:tbelow message="I am here" position="bottom middle" animate=opacity></vue-toast> </p> <p> <a href=https://github.com/frehaiku/vue-toast target=_blank>Fork me on Github!</a> </p> </div> '},14:function(t,e){t.exports="<div id=toast-container :style=toaststyle> {{message}} </div> "},43:function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(42),i=s(n);o(11);var a=o(14),r=s(a),u={onHide:function(){},onShow:function(){}},l={scale:{common:{},before:{transform:"scale(0)"},after:{transform:"scale(1)"}},opacity:{common:{},before:{display:"none",opacity:0},after:{display:"block",opacity:1}}},c={"bottom middle":{bottom:"10%",left:"50%",transform:"translateX(-50%)"},"top middle":{top:"10%",left:"50%",transform:"translateX(-50%)"}};e.default={template:r.default,props:{message:{type:String,twoWay:!0},position:{type:String,default:"bottom middle"},sustain:{type:Number,default:2e3},animate:{type:String,default:"scale"},options:{type:Object,coerce:function(t){return(0,i.default)({},u,t)}}},computed:{toaststyle:function(){return(0,i.default)({},this.styleHandler(this.show))}},data:function(){return{show:!1}},methods:{styleHandler:function(t){function e(t,e,o){for(var s in o[t]){var n=o[t][s],i=o[e],a=i[s];"transform"===s&&s in i?(console.log(a+" "+n),o[e][s]=(a+" "+n).replace(/\b([^\s]+)\s+\1/,"$1"),console.log(o[e][s])):o[e][s]=n}}var o=this.position,s=this.animate,n=l[s];n.common=c[o];var i=t?"after":"before";return e("common",i,n),n[i]},showMessage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.options.onShow(),t?this.message=t:null,this.show=!0,this._disappear()},_disappear:function(){var t=this;this._clearTime();var e=document.defaultView.getComputedStyle(this.$el,null).getPropertyValue("transition-duration");this.timeRemain=setTimeout(function(){t.options.onHide(),t.show=!1},this.sustain+1e3*parseFloat(e))},_clearTime:function(){this.timeRemain&&clearTimeout(this.timeRemain)}},detached:function(){this._clearTime()}}},44:function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(43),i=s(n);e.default={components:{VueToast:i.default},methods:{showBelow:function(){this.$refs.tbelow.showMessage()},showAbove:function(){this.$refs.tabove.showMessage()}}}},45:function(t,e,o){var s,n,i={};o(10),s=o(44),n=o(13),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports.default);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(a.template=n),a.computed||(a.computed={}),Object.keys(i).forEach(function(t){var e=i[t];a.computed[t]=function(){return e}})}});
//# sourceMappingURL=app.2afdeb63cc73edf761aa.js.map