(()=>{"use strict";var e="Сохранение...",t="Сохранить",n=document.querySelector(".profile__avatar-conteiner"),r=document.querySelector(".profile__title"),o=document.querySelector(".profile__subtitle"),i=document.querySelector(".profile__button-edit"),a=document.querySelector(".profile__button-full"),c=document.querySelector(".popup__close_add"),u=document.querySelector(".popup__input-name"),l=document.querySelector(".popup__input-name_type_user-job"),s=document.querySelector(".popup__close-edit"),f=document.querySelector(".cards"),p={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input-name_error"},h=document.forms.avatar,d=document.forms.register,y=document.forms.create;function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){m(e,t),t.add(e)}function w(e,t,n){m(e,t),t.set(e,n)}function m(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function g(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,S(e,t,"get"))}function k(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,S(e,t,"set"),n),n}function S(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var E=new WeakMap,O=new WeakMap,j=new WeakMap,C=new WeakMap,T=new WeakMap,P=new WeakMap,L=new WeakMap,q=new WeakSet,W=new WeakSet,M=new WeakSet,R=function(){function e(t,n,r,o,i){var a=t.data,c=t.handleCardClick,u=t.handleDeleteClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,M),b(this,W),b(this,q),w(this,E,{writable:!0,value:void 0}),w(this,O,{writable:!0,value:void 0}),w(this,j,{writable:!0,value:void 0}),w(this,C,{writable:!0,value:void 0}),w(this,T,{writable:!0,value:void 0}),w(this,P,{writable:!0,value:void 0}),w(this,L,{writable:!0,value:void 0}),this._data=a,k(this,E,i),k(this,O,c),k(this,j,o),k(this,C,u),k(this,T,n),k(this,P,!1),k(this,L,r)}var t,n;return t=e,(n=[{key:"handleBasketClick",value:function(){this._element.remove(),this._element=null}},{key:"changeLikeStatus",value:function(e){this._element.querySelector(".card__button_type_like").classList.toggle("card__button_type_on"),this._element.querySelector(".card__likes__statistics").textContent=e}},{key:"generateCard",value:function(){var e=this;this._element=_(this,q,x).call(this);var t=this._element.querySelector(".card__image");return this._element.querySelector(".card__likes__statistics").textContent=this._data.likes.length,t.src=this._data.link,t.alt=this._data.name,this._data.likes.forEach((function(t){t._id===g(e,j)&&(e._element.querySelector(".card__button_type_like").classList.toggle("card__button_type_on"),k(e,P,!0))})),this._data.owner._id!==g(this,j)&&(this._element.querySelector(".card__button_trash").style="display:none"),this._element.querySelector(".card__title").textContent=this._data.name,_(this,M,I).call(this),this._element}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(){return document.querySelector(g(this,E)).content.querySelector(".card").cloneNode(!0)}function B(){g(this,P)?(g(this,L).call(this,this),k(this,P,!1)):(g(this,T).call(this,this),k(this,P,!0))}function I(){var e=this;this._element.querySelector(".card__button_type_like").addEventListener("click",(function(){_(e,W,B).call(e)})),this._element.querySelector(".card__button_trash").addEventListener("click",(function(t){g(e,C).call(e,e)})),this._element.querySelector(".card__image").addEventListener("click",(function(){g(e,O).call(e)}))}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t,n){z(e,t),t.set(e,n)}function z(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function U(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,N(e,t,"get"))}function V(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,N(e,t,"set"),n),n}function N(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var J=new WeakMap,F=new WeakMap,H=new WeakMap,G=new WeakSet,K=new WeakMap,Q=new WeakMap,X=new WeakMap,Y=function(){function e(t,n){var r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),z(this,r=G),r.add(this),A(this,J,{writable:!0,value:void 0}),A(this,F,{writable:!0,value:void 0}),A(this,H,{writable:!0,value:void 0}),A(this,K,{writable:!0,value:function(e){var t=e.parentNode.querySelector(".".concat(e.id,"-error"));(function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n})(o,G,Z).call(o,e),t.textContent=e.validationMessage}}),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"setButtonState",(function(e){e?(U(o,H).disabled=!1,U(o,H).classList.remove(U(o,J).inactiveButtonClass)):(U(o,H).disabled=!0,U(o,H).classList.add(U(o,J).inactiveButtonClass))})),A(this,Q,{writable:!0,value:function(e){var t=U(o,F),n=e.target;U(o,K).call(o,n),o.setButtonState(t.checkValidity()),n.validationMessage?n.classList.add(U(o,J).inputErrorClass):n.classList.remove(U(o,J).inputErrorClass)}}),A(this,X,{writable:!0,value:function(e){e.preventDefault();var t=e.target;t.checkValidity()&&t.reset()}}),V(this,J,t),V(this,F,n),V(this,H,U(this,F).querySelector(U(this,J).submitButtonSelector))}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){var e=this;U(this,F).addEventListener("submit",U(this,X)),U(this,F).addEventListener("input",(function(t){return U(e,Q).call(e,t,U(e,J))}))}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Z(e){return e.setCustomValidity(""),e.validity.valueMissing?(e.setCustomValidity("Вы пропустили это поле"),!1):e.validity.typeMismatch&&"url"===e.type?(e.setCustomValidity("Введите адрес сайта"),!1):e.checkValidity()}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ee(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function te(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,re(e,t,"get"))}function ne(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,re(e,t,"set"),n),n}function re(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var oe=new WeakMap,ie=new WeakMap,ae=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ee(this,oe,{writable:!0,value:void 0}),ee(this,ie,{writable:!0,value:void 0}),ne(this,oe,r),ne(this,ie,n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.slice().reverse().forEach((function(e){return te(t,oe).call(t,e)}))}},{key:"render",value:function(e){te(this,oe).call(this,e)}},{key:"reversArray",value:function(e){e.revers()}},{key:"addItem",value:function(e){te(this,ie).prepend(e)}}])&&$(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ce(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ue(e,t){se(e,t),t.add(e)}function le(e,t,n){se(e,t),t.set(e,n)}function se(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function fe(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,de(e,t,"get"))}function pe(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function he(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,de(e,t,"set"),n),n}function de(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var ye=new WeakMap,ve=new WeakMap,be=new WeakSet,we=new WeakSet,me=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),ue(this,we),ue(this,be),le(this,ye,{writable:!0,value:void 0}),le(this,ve,{writable:!0,value:void 0}),he(this,ye,document.querySelector(t)),he(this,ve,pe(this,be,_e).bind(this))}var t,n;return t=e,(n=[{key:"open",value:function(){fe(this,ye).classList.add("popup_opened"),document.addEventListener("keydown",fe(this,ve))}},{key:"renderLoading",value:function(e){var t=fe(this,ye).querySelector(".popup__button");t.classList.toggle("popup__button_disabled"),t.textContent=e}},{key:"setEventListeners",value:function(){var e=this;fe(this,ye).addEventListener("click",pe(this,we,ge).bind(this)),fe(this,ye).querySelector(".popup__close").addEventListener("click",(function(){e.close()}))}},{key:"close",value:function(){fe(this,ye).classList.remove("popup_opened"),document.removeEventListener("keydown",fe(this,ve))}}])&&ce(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _e(e){"Escape"===e.key&&this.close()}function ge(e){(e.target.querySelector(".popup__content")||e.target.querySelector(".popup__items"))&&this.close()}function ke(e){return ke="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ke(e)}function Se(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ee(){return Ee="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Oe(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},Ee.apply(this,arguments)}function Oe(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Pe(e)););return e}function je(e,t){return je=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},je(e,t)}function Ce(e,t){if(t&&("object"===ke(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Te(e)}function Te(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Pe(e){return Pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Pe(e)}function Le(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function qe(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,Me(e,t,"get"))}function We(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,Me(e,t,"set"),n),n}function Me(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var Re=new WeakMap,xe=new WeakMap,Be=new WeakMap,Ie=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&je(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Pe(r);if(o){var n=Pe(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Ce(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),Le(Te(t=i.call(this,e)),Re,{writable:!0,value:void 0}),Le(Te(t),xe,{writable:!0,value:void 0}),Le(Te(t),Be,{writable:!0,value:void 0}),We(Te(t),Re,document.querySelector(e)),We(Te(t),xe,qe(Te(t),Re).querySelector(".popup__image-title")),We(Te(t),Be,qe(Te(t),Re).querySelector(".popup__image")),t}return t=a,(n=[{key:"open",value:function(e,t){qe(this,xe).textContent=e,qe(this,Be).src=t,qe(this,xe).alt=e,Ee(Pe(a.prototype),"open",this).call(this)}}])&&Se(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(me);function De(e){return De="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},De(e)}function Ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ze(){return ze="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Ue(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},ze.apply(this,arguments)}function Ue(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Fe(e)););return e}function Ve(e,t){return Ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Ve(e,t)}function Ne(e,t){if(t&&("object"===De(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Je(e)}function Je(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Fe(e){return Fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Fe(e)}function He(e,t,n){Ge(e,t),t.set(e,n)}function Ge(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Ke(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,Xe(e,t,"get"))}function Qe(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,Xe(e,t,"set"),n),n}function Xe(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var Ye=new WeakMap,Ze=new WeakMap,$e=new WeakMap,et=new WeakMap,tt=new WeakSet,nt=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ve(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Fe(r);if(o){var n=Fe(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Ne(this,e)});function a(e){var t,n,r,o=e.popupSelector,c=e.callbackSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),Ge(n=Je(t=i.call(this,o)),r=tt),r.add(n),He(Je(t),Ye,{writable:!0,value:void 0}),He(Je(t),Ze,{writable:!0,value:void 0}),He(Je(t),$e,{writable:!0,value:void 0}),He(Je(t),et,{writable:!0,value:void 0}),Qe(Je(t),Ye,document.querySelector(o)),Qe(Je(t),Ze,c),Qe(Je(t),$e,Ke(Je(t),Ye).querySelector(".popup__form")),Qe(Je(t),et,Ke(Je(t),Ye).querySelectorAll(".popup__input")),t}return t=a,(n=[{key:"close",value:function(){Ke(this,$e).reset(),ze(Fe(a.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;ze(Fe(a.prototype),"setEventListeners",this).call(this),Ke(this,$e).addEventListener("submit",(function(t){t.preventDefault(),Ke(e,Ze).call(e,function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}(e,tt,rt).call(e))}))}}])&&Ae(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(me);function rt(){var e={};return Ke(this,et).forEach((function(t){e[t.name]=t.value})),e}function ot(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function it(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function at(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,ut(e,t,"get"))}function ct(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,ut(e,t,"set"),n),n}function ut(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var lt=new WeakMap,st=new WeakMap,ft=new WeakMap,pt=function(){function e(t){var n=t.name,r=t.job,o=t.selectorAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),it(this,lt,{writable:!0,value:void 0}),it(this,st,{writable:!0,value:void 0}),it(this,ft,{writable:!0,value:void 0}),ct(this,lt,document.querySelector(n)),ct(this,st,document.querySelector(r)),ct(this,ft,document.querySelector(o))}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{subtitle:at(this,st).textContent,title:at(this,lt).textContent,avatar:at(this,ft)}}},{key:"setUserInfo",value:function(e,t){at(this,lt).textContent=e,at(this,st).textContent=t}},{key:"setProfileAvatar",value:function(e){at(this,ft).src=e.avatar}}])&&ot(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ht(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function dt(e,t){var n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t);return function(e,t){return t.get?t.get.call(e):t.value}(e,n)}var yt=new WeakMap,vt=function(){function e(t){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o={writable:!0,value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n=this,r=yt),r.set(n,o),this.url=t.url,this.headers=t.headers}var t,n;return t=e,(n=[{key:"UserInfo",value:function(){return fetch(this.url+"/users/me",{method:"GET",headers:this.headers}).then(dt(this,yt))}},{key:"updateInfo",value:function(e){return fetch(this.url+"/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.username,about:e.userjob})}).then(dt(this,yt))}},{key:"getInitialCards",value:function(){return fetch(this.url+"/cards",{method:"GET",headers:this.headers}).then(dt(this,yt))}},{key:"createCard",value:function(e){return fetch(this.url+"/cards",{method:"POST",headers:this.headers,body:JSON.stringify({name:e.cardname,link:e.photo})}).then(dt(this,yt))}},{key:"deleteCard",value:function(e){var t=e._data._id;return fetch(this.url+"/cards/"+t,{method:"DELETE",headers:this.headers,body:JSON.stringify({id:t})}).then(dt(this,yt))}},{key:"likeCard",value:function(e){var t=e;return fetch(this.url+"/cards/"+t+"/likes/",{method:"PUT",headers:this.headers}).then(dt(this,yt))}},{key:"dislikeCard",value:function(e){var t=e;return fetch(this.url+"/cards/"+t+"/likes/",{method:"DELETE",headers:this.headers,body:JSON.stringify({id:t})}).then(dt(this,yt))}},{key:"updateAvatar",value:function(e){return fetch(this.url+"/users/me/avatar",{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(dt(this,yt))}},{key:"getAllNeededData",value:function(){return Promise.all([this.getInitialCards(),this.UserInfo()])}}])&&ht(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function bt(e){return bt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bt(e)}function wt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function mt(){return mt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_t(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},mt.apply(this,arguments)}function _t(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Et(e)););return e}function gt(e,t){return gt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},gt(e,t)}function kt(e,t){if(t&&("object"===bt(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return St(e)}function St(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Et(e){return Et=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Et(e)}function Ot(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var jt=new WeakMap,Ct=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&gt(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Et(r);if(o){var n=Et(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return kt(this,e)});function a(e){var t,n,r,o,c=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),n=St(t=i.call(this,c)),o={writable:!0,value:void 0},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n,r=jt),r.set(n,o),function(e,t,n){(function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}})(e,Ot(e,t,"set"),n)}(St(t),jt,document.querySelector(c)),t}return t=a,(n=[{key:"close",value:function(){mt(Et(a.prototype),"close",this).call(this)}},{key:"setSubmitHanlder",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e,t=this;(this,e=jt,function(e,t){return t.get?t.get.call(e):t.value}(this,Ot(this,e,"get"))).addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmit()})),mt(Et(a.prototype),"setEventListeners",this).call(this)}}])&&wt(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(me),Tt=new nt({popupSelector:".popup-edit",callbackSubmitForm:function(n){Tt.renderLoading(e),Mt.updateInfo(n).then((function(e){Wt.setUserInfo(e.name,e.about)})).catch((function(e){console.log(e)})).finally((function(){Tt.renderLoading(t)})),Tt.close()}}),Pt=new nt({popupSelector:".popup-add",callbackSubmitForm:function(n){Pt.renderLoading(e),Mt.createCard(n).then((function(e){console.log(e),At.render(e),Pt.close()})).catch((function(e){console.log(e)})).finally((function(){Pt.renderLoading(t)}))}}),Lt=new Ct({popupSelector:".popup_confirm"}),qt=new nt({popupSelector:".popup_avatar",callbackSubmitForm:function(n){qt.renderLoading(e),Mt.updateAvatar(n).then((function(e){Wt.setProfileAvatar(e),console.log(e),qt.close()})).catch((function(e){console.log(e)})).finally((function(){qt.renderLoading(t)}))}}),Wt=new pt({name:".profile__title",job:".profile__subtitle",selectorAvatar:".profile__image"}),Mt=new vt({url:"https://mesto.nomoreparties.co/v1/cohort-42",headers:{authorization:"470ad620-2a28-423a-83e5-333c76ae2cdf","Content-Type":"application/json"}});Mt.UserInfo().then((function(e){r.textContent=e.name,o.textContent=e.about,console.log(e,"uzer_id")})).catch((function(e){console.log(e)})),i.addEventListener("click",(function(){Tt.open(),u.value=Wt.getUserInfo().title,l.value=Wt.getUserInfo().subtitle})),s.addEventListener("click",(function(){Tt.close()})),a.addEventListener("click",(function(){Pt.open(),Vt.setButtonState(!1)})),c.addEventListener("click",(function(){Pt.close()}));var Rt=new Ie(".popup_photo");Rt.setEventListeners();var xt,Bt=function(e){Mt.likeCard(e._data._id).then((function(t){e.changeLikeStatus(t.likes.length)})).catch((function(e){console.log(e)}))},It=function(e){Mt.dislikeCard(e._data._id).then((function(t){e.changeLikeStatus(t.likes.length)})).catch((function(e){console.log(e)}))},Dt=function(e){Lt.open(),Lt.setSubmitHanlder((function(){Lt.renderLoading("удаление..."),Mt.deleteCard(e).then((function(){Lt.close(),e.handleBasketClick()})).catch((function(e){console.log(e)})).finally((function(){Lt.renderLoading("да")}))}))},At=new ae({renderer:function(e){At.addItem(function(e){return new R({data:e,handleCardClick:function(){Rt.open(e.name,e.link)},handleDeleteClick:Dt},Bt,It,xt,".template").generateCard()}(e))}},f);Mt.getAllNeededData().then((function(e){xt=e[1]._id,console.log(e[1]._id,"dd"),At.renderItems(e[0]),Wt.setUserInfo(e[1].name,e[1].about),console.log(e),Wt.setProfileAvatar(e[1].avatar),document.querySelector(".profile__image").src=e[1].avatar})).catch((function(e){console.log(e)})),n.addEventListener("click",(function(){qt.open(),zt.setButtonState(!1),console.log(document.forms[3])})),Pt.setEventListeners(),Tt.setEventListeners(),Lt.setEventListeners(),qt.setEventListeners();var zt=new Y(p,h),Ut=new Y(p,d),Vt=new Y(p,y);Ut.enableValidation(),Vt.enableValidation(),zt.enableValidation()})();