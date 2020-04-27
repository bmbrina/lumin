(this.webpackJsonplumin=this.webpackJsonplumin||[]).push([[0],{32:function(e,t,a){e.exports=a(51)},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(26),s=a.n(c),o=a(8),i=a(11),u=a(12),l=a(14),d=a(13),m=a(18),p=a(20),v=a(9),h=a(23),y=a(16),f=a.n(y);function b(){var e=Object(h.a)(["\nquery ProductsPrices($currency: Currency) {\n  prices: products {\n    id,\n    price(currency: $currency)\n  }\n}\n"]);return b=function(){return e},e}function E(){var e=Object(h.a)(["\n  query Products($currency: Currency) {\n    products {\n      id,\n      title,\n      image_url,\n      price(currency: $currency)\n    }\n  }\n"]);return E=function(){return e},e}function _(){var e=Object(h.a)(["\n  query Currency {\n    currency\n  }\n"]);return _=function(){return e},e}var C=f()(_()),N=f()(E()),k=f()(b()),g=n.a.createContext(),O=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={showCart:!1,subtotal:0,products:{},currency:"USD",currencyError:!1},r.setCartState=r.setCartState.bind(Object(v.a)(r)),r.setCurrency=r.setCurrency.bind(Object(v.a)(r)),r.addProduct=r.addProduct.bind(Object(v.a)(r)),r.removeProduct=r.removeProduct.bind(Object(v.a)(r)),r.updateProductQty=r.updateProductQty.bind(Object(v.a)(r)),r}return Object(u.a)(a,[{key:"setCartState",value:function(){this.setState((function(e){return{showCart:!e.showCart}}))}},{key:"setCurrency",value:function(e){var t=this;this.props.client.query({query:k,variables:{currency:e},errorPolicy:"all"}).then((function(a){a.errors?t.setState((function(){return{currencyError:!0}})):t.setState((function(){return{currency:e,currencyError:!1}}),(function(){var e=a.data.prices;t.updateProductPrices(e)}))}))}},{key:"addProduct",value:function(e){var t=this,a=this.state.products,r=e.id,n=a[r]?++a[r].quantity:1;this.setState((function(t){return{products:Object(p.a)({},t.products,Object(m.a)({},r,Object(p.a)({},e,{quantity:n})))}}),(function(){t.calculateSubtotal(),t.setCartState()}))}},{key:"setProductsState",value:function(e){var t=this;this.setState((function(){return{products:e}}),(function(){t.calculateSubtotal()}))}},{key:"removeProduct",value:function(e){var t=this.state.products;delete t[e],this.setProductsState(t)}},{key:"updateProductPrices",value:function(e){var t=this.state.products;e.forEach((function(e){var a=e.id,r=e.price;t[a]&&(t[a].price=r)})),this.setProductsState(t)}},{key:"updateProductQty",value:function(e,t){var a=this,r=this.state.products[t],n=r.quantity;switch(e){case"increase":n++;break;case"decrease":n--}n<1?this.removeProduct(t):this.setState((function(e){return{products:Object(p.a)({},e.products,Object(m.a)({},t,Object(p.a)({},r,{quantity:n})))}}),(function(){a.calculateSubtotal()}))}},{key:"calculateSubtotal",value:function(){var e=this.state.products,t=Object.values(e).reduce((function(e,t){return e+t.price*t.quantity}),0);this.setState((function(){return{subtotal:t}}))}},{key:"render",value:function(){return n.a.createElement(g.Provider,{value:{cart:this.state,setCartState:this.setCartState,setCurrency:this.setCurrency,addProduct:this.addProduct,removeProduct:this.removeProduct,updateProductQty:this.updateProductQty}},this.props.children)}}]),a}(r.Component),j=(a(37),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this.context,t=e.cart,a=e.setCartState,r=t.products,c=Object.keys(r).length;return n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"header__container container"},n.a.createElement("img",{className:"header__logo",src:"//cdn.shopify.com/s/files/1/0044/1237/5107/files/black.font.sipmle_360x.png?v=1555959070",alt:"Lumin"}),n.a.createElement("button",{className:"header__cart",onClick:a},n.a.createElement("img",{className:"header__cart-icon",src:"//cdn.shopify.com/s/files/1/0044/1237/5107/files/Image_1_2x_5f1251f7-a674-4496-92be-9cca5561534e.png?v=1581352198",alt:""}),n.a.createElement("span",{className:"header__cart-counter"},c))))}}]),a}(r.Component));j.contextType=g;var P=a(17);a(38);function S(e){var t=e.classList,a=e.text,r=e.clickEvent;return n.a.createElement("button",{className:"btn ".concat(t),onClick:r},a)}S.defaultProps={classList:"btn-primary",text:"Click Me"};var x=function(e){return Number(e).toFixed(2)},w=(a(39),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).addToCart=r.addToCart.bind(Object(v.a)(r)),r}return Object(u.a)(a,[{key:"addToCart",value:function(){(0,this.context.addProduct)(this.props.data)}},{key:"render",value:function(){var e=this.props.data,t=e.id,a=e.title,r=e.image_url,c=e.price;return n.a.createElement("div",{className:"item",key:t},n.a.createElement("div",{className:"item__img-container"},n.a.createElement("img",{src:r,alt:a})),n.a.createElement("h3",{className:"item__title"},a),n.a.createElement("p",{className:"item__price"},"From $",x(c)),n.a.createElement(S,{text:"Add to Cart",classList:"btn-primary item__action",clickEvent:this.addToCart}))}}]),a}(r.Component));function L(e){var t=e.products;return n.a.createElement(n.a.Fragment,null,t.map((function(e){return n.a.createElement(w,{data:e,key:e.id})})))}w.contextType=g,w.defaultProps={product:{id:1,title:"Age Management Collection",image_url:"https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png",price:48}};a(40);function Q(e){var t=e.classList,a=e.show,r=e.text;return n.a.createElement("div",{className:"loader ".concat(t," ").concat(a?"loader--show":"")},n.a.createElement("div",{className:"loader__spinner"}),n.a.createElement("p",{className:"loader__text"},r))}Q.defaultProps={classList:"",show:!1,text:""};a(41);function q(){var e=Object(P.a)(N,{variables:{currency:"USD"}}),t=e.data,a=e.loading,r=e.error;return a?n.a.createElement(Q,{show:a,text:"Loading products..."}):r?n.a.createElement(Q,{text:"Oops, something went wrong!",classList:"error"}):n.a.createElement("section",{className:"products"},n.a.createElement("div",{className:"products__container container"},n.a.createElement(L,{products:t.products})))}a(45);function T(){return n.a.createElement("section",{className:"hero"},n.a.createElement("div",{className:"container"},n.a.createElement("div",null,n.a.createElement("h2",{className:"hero__header"},"All Products"),n.a.createElement("p",{className:"hero__subheader"},"A 360\xb0 look at Lumin"))))}a(46);function $(e){var t=e.classList,a=e.decreaseEvent,r=e.increaseEvent,c=e.count;return n.a.createElement("div",{className:"counter ".concat(t)},n.a.createElement("span",{className:"counter__action",onClick:a},"-"),n.a.createElement("span",{className:"counter__text"},c),n.a.createElement("span",{className:"counter__action",onClick:r},"+"))}$.defaultProps={classList:"",quantity:1};a(47);var D=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).removeItem=r.removeItem.bind(Object(v.a)(r)),r.increaseQty=r.increaseQty.bind(Object(v.a)(r)),r.decreaseQty=r.decreaseQty.bind(Object(v.a)(r)),r}return Object(u.a)(a,[{key:"removeItem",value:function(){(0,this.context.removeProduct)(this.props.id)}},{key:"increaseQty",value:function(){(0,this.context.updateProductQty)("increase",this.props.id)}},{key:"decreaseQty",value:function(){(0,this.context.updateProductQty)("decrease",this.props.id)}},{key:"render",value:function(){var e=this.props.data,t=e.id,a=e.title,r=e.image_url,c=e.price,s=e.quantity,o=s*c;return n.a.createElement("div",{className:"cart-item",key:t},n.a.createElement("button",{className:"cart-item__close",onClick:this.removeItem},"x"),n.a.createElement("div",{className:"cart-item__desc"},n.a.createElement("h3",{className:"cart-item__title"},a),n.a.createElement("div",{className:"cart-item__qty"},n.a.createElement($,{increaseEvent:this.increaseQty,decreaseEvent:this.decreaseQty,count:s}),n.a.createElement("p",{className:"cart-item__price"},"$",x(o)))),n.a.createElement("div",{className:"cart-item__img"},n.a.createElement("img",{src:r,alt:a})))}}]),a}(r.Component);D.contextType=g;a(48);function I(e){var t=e.classList,a=e.text,r=e.changeEvent,c=e.options,s=e.disabled;return n.a.createElement("select",{className:"select ".concat(t),onChange:r,disabled:s},a&&n.a.createElement("option",{value:"",key:0},a),c.map((function(e,t){return n.a.createElement("option",{value:e,key:t+1},e)})))}function A(e){var t=e.disableDropdown,a=e.errorState,r=e.updateCurrency,c=Object(P.a)(C,{variables:{currency:"USD"}}),s=c.data,o=c.loading,i=c.error,u=o||i?["USD","MXN","CAD"]:s.currency,l=a?"select--error":"",d=t?"disabled":"";return n.a.createElement(n.a.Fragment,null,n.a.createElement(I,{classList:"".concat(l),disabled:d,options:u,changeEvent:r}))}I.defaultProps={options:["a","b","c"],disabled:""};a(49);var F=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).updateCurrency=r.updateCurrency.bind(Object(v.a)(r)),r}return Object(u.a)(a,[{key:"renderProducts",value:function(){var e=this.context.cart.products;return Object.keys(e).map((function(t){var a=e[t];return n.a.createElement(D,{data:a,id:t,key:t})}))}},{key:"updateCurrency",value:function(e){(0,this.context.setCurrency)(e.target.value)}},{key:"render",value:function(){var e=this.context,t=e.cart,a=e.setCartState,r=t.currencyError,c=t.showCart,s=t.subtotal,o=this.renderProducts(),i=!1;return o.length||(o=n.a.createElement("p",{className:"cart__products--none"},"There are no items in your cart"),i=!0),n.a.createElement("section",{className:"cart ".concat(c?"cart--open":"")},n.a.createElement("div",{className:"cart__overlay"}),n.a.createElement("div",{className:"cart__content"},n.a.createElement("div",{className:"cart__header"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-4"},n.a.createElement("button",{className:"cart__close",onClick:a},n.a.createElement("img",{src:"//cdn.shopify.com/s/files/1/0044/1237/5107/files/down.png?v=1583510959",alt:""}))),n.a.createElement("div",{className:"col-4"},n.a.createElement("h1",{className:"cart__title"},"Your Cart")),n.a.createElement("div",{className:"col-4"})),n.a.createElement(A,{updateCurrency:this.updateCurrency,errorState:r,disableDropdown:i})),n.a.createElement("div",{className:"cart__products"},o),n.a.createElement("div",{className:"cart__footer"},n.a.createElement("div",{className:"cart__subtotal"},n.a.createElement("span",null,"Subtotal"),n.a.createElement("span",null,"$",x(s))),n.a.createElement(S,{text:"Make this a Subscription (Save 20%)",classList:"btn-secondary btn--alt cart__btn"}),n.a.createElement(S,{text:"Proceed to Checkout",classList:"btn-primary btn--alt cart__btn"}))))}}]),a}(r.Component);F.contextType=g;a(50);var M=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(j,null),n.a.createElement(T,null),n.a.createElement(q,null),n.a.createElement(F,null))},U=new(a(31).a)({uri:"https://pangaea-interviews.now.sh/api/graphql"});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(o.a,{client:U},n.a.createElement(O,{client:U},n.a.createElement(M,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.b6c25f22.chunk.js.map