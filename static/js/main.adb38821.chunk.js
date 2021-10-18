(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{26:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(9),o=a.n(c),s=(a(26),a(3)),i=a(4),l=a(6),u=a(5),d=a(0),h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:""},e.getSearchValue=function(t){e.setState({searchValue:t.target.value})},e.submitSearchValue=function(t){t.preventDefault(),e.props.onSubmit(e.state.searchValue),e.reset()},e.reset=function(){e.setState({searchValue:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.submitSearchValue,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchValue,onChange:this.getSearchValue})]})})}}]),a}(n.Component),j=h,p=a(11),m=a(20),b=a.n(m);function g(e){var t=e.onLoadMoreClick;return Object(d.jsx)("div",{className:"more",children:Object(d.jsx)("button",{type:"submit",className:"Button",onClick:t,children:"Load More"})})}function f(e){var t=e.webformatURL,a=e.onOpen,n=e.largeImageURL;return Object(d.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return a(n)},children:Object(d.jsx)("img",{src:t,alt:"nice",className:"ImageGalleryItem-image"})})}var O=a(21);function v(){return Object(d.jsx)("div",{className:"spinner",children:Object(d.jsxs)("div",{children:[Object(d.jsx)(O.a,{size:"35",className:"icon-spiner"}),"Loading..."]})})}var y=document.querySelector("#modal-root"),x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(d.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:"Modal",children:this.props.children})}),y)}}]),a}(n.Component),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={baseApi:"https://pixabay.com/api/",myApiKey:"22969021-19f1494240440c9eacf690dfa",page:1,pictures:[],error:null,largeUrl:"",showModal:!1,status:"idle"},e.getPictures=function(t){var a=t.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}}));e.setState({pictures:[].concat(Object(p.a)(e.state.pictures),Object(p.a)(a))}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.onLoadMoreClick=function(){e.setState({page:e.state.page+1})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.takeModalPicture=function(t){e.setState({largeUrl:t,showModal:!0})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,r=n.baseApi,c=n.myApiKey,o=n.page,s=e.inputValue,i=this.props.inputValue,l=t.page,u=this.state.page;s===i&&l===u||(this.setState({status:"pending"}),function(e,t,a,n){return b.a.get("".concat(t,"?q=").concat(e,"&page=").concat(n,"&key=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))}(i,r,c,o).then((function(e){if(0===e.length)return a.setState({status:"rejected"});a.getPictures(e)})).then(this.setState({status:"resolved"})).catch((function(e){return a.setState({error:e,status:"rejected"})})))}},{key:"render",value:function(){var e=this.state,t=e.pictures,a=e.status,n=e.showModal,r=e.largeUrl,c=this.takeModalPicture,o=this.toggleModal,s=this.onLoadMoreClick;return"idle"===a?Object(d.jsx)("div",{className:"startPage",children:"Enter Something"}):"pending"===a?Object(d.jsx)(v,{}):"rejected"===a?Object(d.jsx)("div",{className:"info",children:Object(d.jsx)("b",{children:"An Error occurred. Try again."})}):"resolved"===a?Object(d.jsxs)("div",{children:[Object(d.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(d.jsx)(f,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,onOpen:c},e.id)}))}),n&&Object(d.jsxs)(x,{onClose:o,children:[Object(d.jsx)("img",{src:r,alt:"modal-img"}),Object(d.jsx)("button",{type:"button",onClick:o,children:"Close Modal"})]}),Object(d.jsx)(g,{onLoadMoreClick:s})]}):void 0}}]),a}(n.Component),w=function(e){var t=e.children;return Object(d.jsx)("div",{children:t})},k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,inputValue:""},e.handleFormSubmit=function(t){e.setState({inputValue:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(w,{children:[Object(d.jsx)(j,{onSubmit:this.handleFormSubmit}),Object(d.jsx)(S,{inputValue:this.state.inputValue})]})})}}]),a}(n.Component);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.adb38821.chunk.js.map