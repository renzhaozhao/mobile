/*! Tomcat360.com (c) 2015 
	Author: Renzhao
*/
define("modules/panel",[],function(t,i,n){"use strict";var s=function(t){return this.panel=t||".panel","string"==typeof this.panel&&(this.panel=$(this.panel).first()),this.panel.length?this._init():this};s.prototype={_init:function(){return this.body=this.panel.find(".panel-content").first(),this.toggler=this.panel.find(".title .toggle").first(),this._bindEvents(),this},_bindEvents:function(){var t=this;return this.panel.children("header").click(function(){t.toggle()}),t},_isDisplay:function(){return"none"===this.body.css("display")?!1:!0},toggle:function(){var t=this._isDisplay();return t?this.hide():this.show()},show:function(){return this.body.slideDown(),this},hide:function(){return this.body.slideUp(),this}},n.exports=s});