(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{138:function(e,t,a){"use strict";a.r(t);a(162),a(49);var n=a(0),r=a.n(n),i=a(142),c=a(163),l=a.n(c),o=(a(35),a(7)),s=a.n(o),u=a(4),m=a.n(u),d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeLightbox:!1,currentImage:0},a.toggleLightbox=function(e){a.setState({activeLightbox:!a.state.activeLightbox,currentImage:e})},a}return s()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.images,n=t.thumbStyle,i=this.state,c=i.activeLightbox,l=i.currentImage;return r.a.createElement(r.a.Fragment,null,c?r.a.createElement(g,{close:function(){return e.toggleLightbox()},image:a[l]}):null,r.a.createElement("div",{className:"lightbox--thumbnail-gallery"},a.map(function(t,a){return r.a.createElement(h,{onClick:function(){return e.toggleLightbox(a)},src:t.src,title:t.title,styls:n,key:"thumb-"+a})})))},t}(r.a.Component);d.propTypes={images:m.a.arrayOf(m.a.object),thumbOptions:m.a.object};var f=d,h=function(e){var t=e.src,a=e.title,n=e.styles,i=e.onClick;return r.a.createElement("img",{className:"lightbox--thumbnail",onClick:i,style:Object.assign({},{width:75,height:75},n),alt:a,src:t})},g=function(e){var t=e.image,a=e.close;return r.a.createElement("div",{className:"lightbox--body"},r.a.createElement("div",{className:"lightbox--flex vert-ctr horz-ctr"},r.a.createElement("div",{className:"lightbox--image-container"},r.a.createElement("span",{onClick:a,className:"lightbox-close-btn"},"✖"),r.a.createElement("img",{className:"lightbox--image",src:t.src,alt:t.title}))))};a.d(t,"query",function(){return p});t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"container"},t.examples.items.map(function(e,t){return r.a.createElement("div",{className:"work-description",key:e.name+"-"+t},r.a.createElement("div",{className:"assets"},r.a.createElement("img",{className:"work-image",alt:e.portfolioImage.title,src:e.portfolioImage.file.url}),r.a.createElement("div",{className:"work-links"},e.webLinks?e.webLinks.map(function(t,a){var n=t.displayText,i=t.url,c=t.icon;return r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer",key:e.name+"-link-"+a},r.a.createElement("div",{className:"button"},r.a.createElement("i",{className:"fa fa-"+c})," ",n))}):null),e.screenShots?r.a.createElement(f,{images:e.screenShots.map(function(e){var t=e.file;return{src:t.url,title:t.fileName}})}):null),r.a.createElement("div",{className:"content"},r.a.createElement("h3",{className:"title-header"},e.name),r.a.createElement("h5",{className:"sub-header"},e.role),l()(e.description.description),r.a.createElement("h3",null,"Skills Performed"),e.techItems.map(function(t,a){return r.a.createElement("div",{className:"tech-item",key:e.name+"-tech-"+a},t)})))}))))};var p="964307333"},140:function(e,t,a){var n;e.exports=(n=a(143))&&n.default||n},141:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(139),o=a.n(l);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(140),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(34);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},142:function(e,t,a){"use strict";a(26);var n=a(0),r=a.n(n),i=a(141),c=a(145);a(144);t.a=function(e){var t=e.children;e.location;return r.a.createElement("div",null,r.a.createElement(c.Helmet,null,r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"})),r.a.createElement("header",null,r.a.createElement("div",{className:"header-container"},r.a.createElement("div",{className:"logo"},r.a.createElement(i.Link,{to:"/"},"{gy}")),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement(l,{route:"Portfolio"}),r.a.createElement(l,{route:"About"}),r.a.createElement(l,{route:"Contact"}))))),t)};var l=function(e){var t=e.route,a="undefined"!=typeof window&&window.location.pathname.replace(/\//g,"")===t.toLowerCase();return r.a.createElement("li",{className:a?"active-link":""},r.a.createElement(i.Link,{to:"/"+t.toLowerCase()},t))}},143:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(48),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},144:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-6f527a44f9f2e933aec8.js.map