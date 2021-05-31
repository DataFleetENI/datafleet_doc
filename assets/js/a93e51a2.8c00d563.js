(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{115:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),u=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,m=s["".concat(a,".").concat(b)]||s[b]||d[b]||o;return t?i.a.createElement(m,l(l({ref:n},p),{},{components:t})):i.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(4),i=t(9),o=(t(0),t(115)),a={id:"api-user-connexion",title:"API Connexion",sidebar_label:"API Connexion",slug:"/api-user-connexion"},l={unversionedId:"api-user-connexion",id:"api-user-connexion",isDocsHomePage:!1,title:"API Connexion",description:"Introduction",source:"@site/docs/api-connexion.md",slug:"/api-user-connexion",permalink:"/api-user-connexion",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api-connexion.md",version:"current",sidebar_label:"API Connexion",sidebar:"someSidebar",previous:{title:"Inscrire des utilisateurs",permalink:"/import-users"},next:{title:"API Enregistrer un utilisateur",permalink:"/api-user-enregistrement"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Mise en place",id:"mise-en-place",children:[{value:"Appel de l&#39;API",id:"appel-de-lapi",children:[]},{value:"Retour de l&#39;API",id:"retour-de-lapi",children:[]}]}],p={toc:c};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"L'api de connexion permet \xe0 un utilisateur de se connecter \xe0 l'application Datafleet.\nElle est appel\xe9 par la page de connexion."),Object(o.b)("p",null,"Elle prend en param\xe8tre d'entr\xe9e les \xe9l\xe9ments de connexion au format JSON:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"idEnterprise"),Object(o.b)("li",{parentName:"ol"},"mail"),Object(o.b)("li",{parentName:"ol"},"password")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"mise-en-place"},"Mise en place"),Object(o.b)("p",null,"Pour tester uniquement l'API, il est possible d'utiliser Postman."),Object(o.b)("p",null,"Lancer le serveur Symfony."),Object(o.b)("h3",{id:"appel-de-lapi"},"Appel de l'API"),Object(o.b)("p",null,"Renseigner l'adresse de l'API : ",Object(o.b)("a",{parentName:"p",href:"https://127.0.0.1:8000/user/connection"},"https://127.0.0.1:8000/user/connection")),Object(o.b)("p",null,"Pr\xe9ciser qu'il s'agt d'une m\xe9thode POST afin qu'il puisse prendre en compte les \xe9l\xe9ments not\xe9 dans le body."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'{\n    "mail" : "exemple@email.com",\n    "idEnterprise" : "",\n    "password" : "exemple"\n}\n')),Object(o.b)("p",null,"L'\xe9l\xe9ment mail ou idEntreprise doit \xeatre compl\xe9t\xe9."),Object(o.b)("h3",{id:"retour-de-lapi"},"Retour de l'API"),Object(o.b)("h4",{id:"succ\xe8s"},"Succ\xe8s"),Object(o.b)("p",null,"R\xe9cup\xe9ration de l'utilisateur l'API retourne au format Json les donn\xe9es de l'utilisateur"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},'{\n    "id": 204,\n    "lastName": "Exemple",\n    "firstName": "Exemple",\n    "mail": "exemple@email.com",\n    "idEnterprise": "57DG908K",\n    "functionUser": "developpeur",\n    "password": "exemple",\n    "phoneNumber": "0987654365",\n    "isFirstConnection": true,\n    "isManager": false,\n    "accidents": [],\n    "adress": null,\n    "managerLoans": [],\n    "driverLoans": [],\n    "occupants": [],\n    "idPreference": null,\n    "idDrivingLicence": null\n}\n')),Object(o.b)("h4",{id:"echec"},"Echec"),Object(o.b)("p",null,"aucun objet JSON n'est retourn\xe9."))}u.isMDXComponent=!0}}]);