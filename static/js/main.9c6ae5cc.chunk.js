(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,n,t){e.exports=t.p+"static/media/logo.f04ee572.png"},23:function(e,n,t){e.exports=t(34)},34:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(17),l=t(8),c=t(3),i=t(4),s=t(5),d=t(18),p=t.n(d),b=t(9);const u=Object(a.createContext)(),m=(e,n)=>{switch(n.type){case"ADD_ITEM":return e.find(e=>e.ID===n.payload.ID)?e.map(e=>e.ID===n.payload.ID?{...e,quantity:e.quantity+1}:e):[...e,{...n.payload,quantity:1}];case"REMOVE_ITEM":return e.filter(e=>e.ID!==n.payload);case"UPDATE_ITEM_QUANTITY":return n.payload.quantity<1?e.filter(e=>e.ID!==n.payload.ID):e.map(e=>e.ID===n.payload.ID?{...e,quantity:n.payload.quantity}:e);default:return e}};function g(e){let{children:n}=e;const[t,o]=Object(a.useReducer)(m,[],()=>{const e=localStorage.getItem("cart");return e?JSON.parse(e):[]});Object(a.useEffect)(()=>{localStorage.setItem("cart",JSON.stringify(t))},[t]);return r.a.createElement(u.Provider,{value:{cartItems:t,addToCart:e=>{o({type:"ADD_ITEM",payload:e})},removeFromCart:e=>{console.log("Removing product with ID:",e),o({type:"REMOVE_ITEM",payload:e})},updateItemQuantity:(e,n)=>{console.log("Updating product",e,"to quantity",n),o({type:"UPDATE_ITEM_QUANTITY",payload:{ID:e,quantity:n}})}}},n)}const f=Object(a.createContext)({user:{isLoggedIn:!1,role:"guest"},setUser:()=>{}}),h=e=>{let{children:n}=e;const[t,o]=Object(a.useState)({isLoggedIn:!1,role:"guest"});return r.a.createElement(f.Provider,{value:{user:t,setUser:o}},n)};var x=t(36);var E,j,y,O,w,v,k,C,I,z,D,S,T,A,M;const q=s.b.div(E||(E=Object(i.a)(["\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n"]))),P=s.b.div(j||(j=Object(i.a)(["\n    display: flex;\n    align-items: center;\n"]))),F=s.b.span(y||(y=Object(i.a)(["\n    font-size: 16px;\n    color: #333;\n    margin-left: 5px; // Ensures spacing between icon and text\n"]))),U=Object(s.b)(l.b)(O||(O=Object(i.a)(["\n    display: flex;\n    align-items: center;\n    color: #333; // Icon color\n    position: relative;\n"]))),_=s.b.span(w||(w=Object(i.a)(["\n    position: absolute;\n    top: -8px;\n    right: -8px;\n    background-color: #dc3545; // Badge background color\n    color: white;\n    border-radius: 50%;\n    padding: 2px 6px;\n    font-size: 12px;\n    font-weight: bold;\n"]))),N=s.b.header(v||(v=Object(i.a)(["\n    background-color: #fff;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n    padding: 0 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 60px;\n    z-index: 1000;\n"]))),L=s.b.div(k||(k=Object(i.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 250px;\n    height: 100%;\n    background: #f7f7f7; // Light grey background for a soft look\n    box-shadow: 4px 0 15px rgba(0, 0, 0, 0.2);\n    transform: translateX(",");\n    transition: transform 0.3s ease-in-out;\n    z-index: 1500;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    box-sizing: border-box;\n"])),e=>e.$show?"0":"-100%"),V=s.b.div(C||(C=Object(i.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    display: ",";\n    z-index: 1400;\n    transition: opacity 0.3s ease-in-out;\n"])),e=>e.$show?"block":"none"),Y=Object(s.b)(l.b)(I||(I=Object(i.a)(["\n    padding: 12px 16px;\n    font-size: 16px;\n    color: #333;\n    text-decoration: none;\n    border-bottom: 1px solid #eaeaea; // Add a subtle separator between items\n\n    &:hover {\n        background-color: #eaeaea; // Hover effect for better user experience\n        color: #000;\n    }\n"]))),$=Object(s.b)(l.b)(z||(z=Object(i.a)(["\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: inherit;\n"]))),B=s.b.img(D||(D=Object(i.a)(["\n    height: 40px;\n"]))),R=s.b.div(S||(S=Object(i.a)(["\n    margin-left: 10px;\n    font-size: 24px;\n    font-weight: bold;\n    color: #333;\n"]))),H=s.b.div(T||(T=Object(i.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height: 25px;\n    cursor: pointer;\n\n    span {\n        display: block;\n        width: 25px;\n        height: 3px;\n        background-color: #333;\n        transition: background-color 0.2s;\n    }\n\n    &:hover {\n        span {\n            background-color: #555; // Darken the hamburger lines on hover\n        }\n    }\n"]))),Q=s.b.span(A||(A=Object(i.a)(["\n    margin-left: 10px;\n    font-size: 16px;\n    color: #333;\n"]))),G=s.b.div(M||(M=Object(i.a)(["\n    display: flex;\n    align-items: center;\n    gap: 20px;\n"])));var J,X,K,W,Z,ee=function(){const{cartItems:e}=Object(a.useContext)(u),{user:n}=Object(a.useContext)(f),[t,o]=Object(a.useState)(!1),[c,i]=Object(a.useState)(""),[s,d]=Object(a.useState)([]),[m,g]=Object(a.useState)([]);Object(a.useEffect)(()=>{"categories"===c?(async()=>{try{return(await x.a.get("http://localhost:8081/categories")).data}catch(e){console.error("Error fetching categories:",e)}})().then(e=>d(e)):"brands"===c&&(async()=>{try{return(await x.a.get("http://localhost:8081/brand")).data}catch(e){console.error("Error fetching brands:",e)}})().then(e=>g(e))},[c]);const h=()=>{o(!1),i("")},E=e=>{i(e)};return r.a.createElement(N,null,r.a.createElement(q,{onClick:e=>{e.stopPropagation(),o(!t)}},r.a.createElement(H,{title:"Menu"},t?r.a.createElement(b.f,{size:24}):r.a.createElement(b.b,{size:24})),r.a.createElement(Q,null,"Menu")),r.a.createElement($,{to:"/"},r.a.createElement(B,{src:p.a,alt:"Logo"}),r.a.createElement(R,null,"ElectroMart")),r.a.createElement(G,null,r.a.createElement(U,{to:"/cart"},r.a.createElement(b.e,{size:24}),e.length>0&&r.a.createElement(_,null,e.reduce((e,n)=>e+n.quantity,0))),r.a.createElement(P,{as:l.b,to:"/login"},r.a.createElement(b.h,{size:24}),r.a.createElement(F,null,"Login"))),t&&r.a.createElement(V,{$show:t,onClick:h}),r.a.createElement(L,{$show:t},"categories"===c?[r.a.createElement(Y,{key:"back",onClick:()=>i("")},"Back"),...s.map(e=>r.a.createElement(Y,{key:e.id,onClick:h},e.name))]:"brands"===c?[r.a.createElement(Y,{key:"back",onClick:()=>i("")},"Back"),...m.map(e=>r.a.createElement(Y,{key:e.id,onClick:h},e.name))]:[{role:"any",label:"Display Categories",action:()=>E("categories")},{role:"any",label:"Display Brands",action:()=>E("brands")},{role:"any",label:"About Us",path:"/about"},{role:"guest",label:"Login",path:"/login"},{role:"guest",label:"Sign Up",path:"/signup"},{role:"user",label:"Your Info",path:"/info"},{role:"user",label:"Your Orders",path:"/orders"},{role:"user",label:"Delete Account",path:"/delete-account"},{role:"admin",label:"Add Product",path:"/add-product"}].filter(e=>"any"===e.role||"guest"===e.role&&!n.isLoggedIn||e.role===n.role).map(e=>e.action?r.a.createElement(Y,{key:e.label,onClick:e.action},e.label):r.a.createElement(Y,{key:e.label,as:l.b,to:e.path,onClick:h},e.label))))};const ne=s.b.div(J||(J=Object(i.a)(["\n    position: relative;\n    display: flex;\n    overflow: hidden;\n    width: 100%;\n    height: 400px; // Adjust height for better visual\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n"]))),te=s.b.div(X||(X=Object(i.a)(["\n    flex: 0 0 auto;\n    width: 100%;\n    transition: transform 0.5s;\n    background: #eee;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n"]))),ae=s.b.img(K||(K=Object(i.a)(["\n    width: 100%;\n    max-width: 1290px;\n    object-fit: contain; // Ensure images are fully visible\n    height: 100%;\n"]))),re=s.b.button(W||(W=Object(i.a)(["\n    position: absolute;\n    left: 10px;\n    top: 50%;\n    transform: translateY(-50%);\n    background: rgba(0, 0, 0, 0.5);\n    color: white;\n    border: none;\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n"]))),oe=Object(s.b)(re)(Z||(Z=Object(i.a)(["\n    left: auto;\n    right: 10px;\n"])));var le,ce,ie,se,de,pe=()=>{const[e,n]=Object(a.useState)(0);return Object(a.useEffect)(()=>{const e=setInterval(()=>{n(e=>(e+1)%3)},3e3);return()=>clearInterval(e)},[]),r.a.createElement(ne,null,r.a.createElement(te,{style:{transform:"translateX(-".concat(100*e,"%)")}},r.a.createElement(ae,{src:"/ElectroMart/banners/1.png",alt:"First slide"})),r.a.createElement(te,{style:{transform:"translateX(-".concat(100*e,"%)")}},r.a.createElement(ae,{src:"/ElectroMart/banners/2.png",alt:"Second slide"})),r.a.createElement(te,{style:{transform:"translateX(-".concat(100*e,"%)")}},r.a.createElement(ae,{src:"/ElectroMart/banners/3.png",alt:"Third slide"})),r.a.createElement(re,{onClick:()=>n(e=>(e-1+3)%3)},"<"),r.a.createElement(oe,{onClick:()=>n(e=>(e+1)%3)},">"))};const be=s.b.div(le||(le=Object(i.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    position: relative;\n    margin: 20px;\n"]))),ue=s.b.input(ce||(ce=Object(i.a)(["\n    padding: 8px 15px;\n    width: 100%;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    margin-right: 10px;\n"]))),me=s.b.button(ie||(ie=Object(i.a)(["\n    padding: 8px 15px;\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n\n    &:hover {\n        background-color: #0056b3;\n    }\n"]))),ge=s.b.div(se||(se=Object(i.a)(["\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  background: white;\n  border: 1px solid #ccc;\n  border-top: none;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n"]))),fe=Object(s.b)(l.b)(de||(de=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  border-bottom: 1px solid #eee;\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    background-color: #f8f9fa;\n  }\n\n  img {\n    width: 50px;\n    height: 50px;\n    object-fit: cover;\n    margin-right: 10px;\n  }\n\n  div {\n    display: flex;\n    flex-direction: column;\n  }\n\n  span {\n    font-size: 16px;\n  }\n\n  .price {\n    color: #007bff;\n    font-weight: bold;\n  }\n"])));var he,xe,Ee=function(e){let{onSearch:n}=e;const[t,o]=Object(a.useState)(""),[l,c]=Object(a.useState)([]),i=async()=>{if(t.trim())try{const e=await(async e=>{try{console.log(e);const n="http://localhost:8081/search-products/".concat(e),t=await fetch(n);if(!t.ok)throw new Error("Network response was not ok "+t.statusText);return await t.json()}catch(n){throw console.error("There was a problem with the fetch operation:",n),n}})(t);c(e)}catch(e){console.error("Error searching products:",e)}else c([])};return r.a.createElement(be,null,r.a.createElement(ue,{type:"text",placeholder:"Search products...",value:t,onChange:e=>o(e.target.value),onKeyUp:i}),r.a.createElement(me,{onClick:i},"Search"),l.length>0&&r.a.createElement(ge,null,l.map(e=>r.a.createElement(fe,{key:e.ID,to:"/product/".concat(e.ID)},r.a.createElement("img",{src:e.image||"/ElectroMartplaceholder40.jpg",alt:e.name}),r.a.createElement("div",null,r.a.createElement("span",null,e.name),r.a.createElement("span",{className:"price"},"$",e.price.toFixed(2)))))))},je=t(21);const ye=s.b.div(he||(he=Object(i.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 7vh;\n"]))),Oe=s.b.button(xe||(xe=Object(i.a)(["\n    background-color: #007bff;\n    color: #fff;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 5px;\n    font-size: 16px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n\n    &:hover {\n        background-color: #0056b3;\n    }\n\n    &:disabled {\n        background-color: #ccc;\n        cursor: not-allowed;\n    }\n"])));var we,ve,ke,Ce,Ie;const ze=s.b.div(we||(we=Object(i.a)(["\n    max-width: 300px;\n    min-width: 300px;\n    margin: 10px; // Keep margin constant to avoid layout shifts\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    overflow: hidden;\n    transition: transform 0.3s ease, box-shadow 0.3s ease; // Smooth transition for hover\n    &:hover {\n        transform: translateY(-5px) scale(1.03); // Lift and slightly enlarge the card\n        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); // Enhance shadow for better visual effect\n    }\n"]))),De=s.b.img(ve||(ve=Object(i.a)(["\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n"]))),Se=s.b.div(ke||(ke=Object(i.a)(["\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n"]))),Te=s.b.h5(Ce||(Ce=Object(i.a)(["\n    margin: 5px 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; // Prevent long names from breaking layout\n"]))),Ae=s.b.p(Ie||(Ie=Object(i.a)(["\n    color: #007bff;\n"])));var Me,qe=function(e){let{product:n}=e;const{addToCart:t}=Object(a.useContext)(u);return r.a.createElement(l.b,{to:"/product/".concat(n.ID),style:{textDecoration:"none",color:"inherit"}},r.a.createElement(ze,null,r.a.createElement(De,{src:n.image||"/ElectroMartplaceholder150.jpg",alt:n.name}),r.a.createElement(Se,null,r.a.createElement(Te,null,"   ",n.name," "),r.a.createElement(Ae,null,"$",n.price.toFixed(2))),r.a.createElement(ye,null,r.a.createElement(Oe,{className:"btn btn-primary",name:n.ID,onClick:e=>{e.preventDefault(),t(n)}},"Add to cart"))))};var Pe,Fe,Ue=s.b.button(Me||(Me=Object(i.a)(["\n    background: linear-gradient(145deg, #ddeef8, #9ea3a8);\n    color: black;\n    border: none;\n    border-radius: 50px;\n    padding: 10px 25px;\n    font-size: 70%;\n    cursor: pointer;\n    margin: 10px;\n    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);\n    transition: all 0.2s ease-in-out;\n    font-weight: bold; // Make text stand out\n    text-transform: uppercase; // Stylistic choice for filter buttons\n\n    &:hover {\n        background: linear-gradient(145deg, #007bdf, #004bac);\n        box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.3);\n        transform: scale(1.05);\n    }\n\n    &:active {\n        background: linear-gradient(145deg, #0061bf, #003c8f);\n        box-shadow: inset 2px 4px 6px rgba(0, 0, 0, 0.2);\n    }\n\n    &:focus {\n        outline: none;\n        box-shadow: 0 0 0 3px rgba(38, 143, 255, 0.5);\n    }\n"])));const _e=s.b.div(Pe||(Pe=Object(i.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    gap: 20px;\n    padding: 0 10px;\n"]))),Ne=s.b.div(Fe||(Fe=Object(i.a)(["\n    display: flex;\n    flex-wrap: wrap; // Allow the container to wrap items\n    gap: 5px;\n    flex-direction: row;\n    align-items: center;\n    padding: 0 10px;\n    margin-bottom: 20px; // Add some margin for spacing from content below\n\n    @media (max-width: 768px) {\n        justify-content: center; // Center align on smaller screens\n        gap: 10px; // Increase gap for better touch targets on smaller screens\n    }\n"])));var Le,Ve,Ye,$e,Be=function(e){let{results:n}=e;const[t,o]=Object(a.useState)([]),[l,c]=Object(a.useState)(!1),[i,s]=Object(a.useState)([]);Object(a.useEffect)(()=>{n&&0!==n.length?(o(n),s(n),c(!1)):(c(!0),(async()=>{const e=await fetch("http://localhost:8081/products");if(!e.ok)throw new Error("An error occurred while fetching the data: "+e.status);return e.json()})().then(e=>{o(e),s(e),c(!1)}).catch(e=>{console.log("Error fetching products:",e.message),c(!1)}))},[n]);const d=e=>{const n=t.filter(n=>n.category===e);s(n)},p=()=>r.a.createElement(_e,null,[1,2,3,4,5,6].map(e=>r.a.createElement("div",{key:e},r.a.createElement(je.a,{height:300}))));return r.a.createElement("div",null,r.a.createElement(Ne,null,r.a.createElement(Ue,{onClick:()=>s(t)},"All"),r.a.createElement(Ue,{onClick:()=>d("Appliances")},"Appliances"),r.a.createElement(Ue,{onClick:()=>d("TV & Home Theater")},"TV & Home Theater"),r.a.createElement(Ue,{onClick:()=>d("Computers & Tablets")},"Computers & Tablets"),r.a.createElement(Ue,{onClick:()=>d("Headphones and speaker")},"Headphones and speaker"),r.a.createElement(Ue,{onClick:()=>d("Phones")},"Phones"),r.a.createElement(Ue,{onClick:()=>d("Video Games")},"Video Games"),r.a.createElement(Ue,{onClick:()=>d("Cameras")},"Cameras")),r.a.createElement(_e,null,l?r.a.createElement(p,null):i.map(e=>r.a.createElement(qe,{key:e.ID,product:e}))))};const Re=s.b.footer(Le||(Le=Object(i.a)(["\n    background-color: #8c979e; // Dark background for footer\n    color: #fff; // White text color for contrast\n    text-align: center;\n    position: relative;\n    bottom: 0;\n    width: 100%;\n    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);\n    line-height: 1.5;\n    padding: 20px 0; // Adjust padding for better spacing\n    font-size: 14px;\n"]))),He=s.b.p(Ve||(Ve=Object(i.a)(["\n  margin: 0;\n  padding: 0;\n  font-size: 14px;\n"]))),Qe=s.b.div(Ye||(Ye=Object(i.a)(["\n    margin-top: 10px;\n    display: flex;\n    justify-content: center;\n"]))),Ge=s.b.a($e||($e=Object(i.a)(["\n  color: #fff;\n  font-size: 20px;\n  transition: color 0.3s;\n  margin: 0 15px;\n\n    &:hover {\n    color: #f8d210;  // Gold color on hover\n  }\n"])));var Je=function(){return r.a.createElement(Re,null,r.a.createElement(He,null,"\xa9 2024 ElectroMart, Inc. All rights reserved."),r.a.createElement(Qe,null,r.a.createElement(Ge,{href:"#","aria-label":"Facebook"},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement(Ge,{href:"#","aria-label":"Twitter"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement(Ge,{href:"#","aria-label":"Instagram"},r.a.createElement("i",{className:"fa fa-instagram"}))))};var Xe,Ke,We,Ze,en,nn,tn,an,rn,on=function(){const[e,n]=Object(a.useState)([]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null),r.a.createElement(Ee,{onSearch:e=>{n(e)}}),r.a.createElement(pe,null),r.a.createElement(Be,{results:e}),r.a.createElement(Je,null))};const ln=s.b.div(Xe||(Xe=Object(i.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 40px 20px;\n    min-height: 80vh;\n    background-color: #f8f9fa;\n"]))),cn=s.b.img(Ke||(Ke=Object(i.a)(["\n    width: 100%;\n    max-width: 500px;\n    height: auto;\n    object-fit: cover;\n    border-radius: 12px;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n"]))),sn=s.b.div(We||(We=Object(i.a)(["\n    background-color: #ffffff;\n    padding: 25px;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n    width: 100%;\n    max-width: 500px;\n    margin-top: 20px;\n    text-align: center;\n"]))),dn=s.b.h1(Ze||(Ze=Object(i.a)(["\n    color: #333;\n    margin-bottom: 10px;\n"]))),pn=s.b.p(en||(en=Object(i.a)(["\n    font-size: 24px;\n    color: #28a745;\n    font-weight: bold;\n"]))),bn=s.b.p(nn||(nn=Object(i.a)(["\n    color: #666;\n    margin-top: 15px;\n"]))),un=s.b.p(tn||(tn=Object(i.a)(["\n    color: #333;\n    font-size: 16px;\n    line-height: 1.5;\n"]))),mn=s.b.button(an||(an=Object(i.a)(["\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    padding: 10px 20px;\n    font-size: 18px;\n    cursor: pointer;\n    margin-top: 20px;\n    transition: background-color 0.2s;\n\n    &:hover {\n        background-color: #0056b3;\n    }\n"]))),gn=s.b.p(rn||(rn=Object(i.a)(["\n    color: #dc3545;\n    font-size: 20px;\n"])));var fn,hn,xn,En,jn,yn,On,wn,vn,kn,Cn,In=function(){const{id:e}=Object(c.q)(),[n,t]=Object(a.useState)(null),[o,l]=Object(a.useState)(!0),[i,s]=Object(a.useState)(null),{addToCart:d}=Object(a.useContext)(u);return Object(a.useEffect)(()=>{(async e=>{const n=await fetch("http://localhost:8081/products/"+e);if(!n.ok)throw new Error("An error occurred while fetching the data: "+n.status);return n.json()})(e).then(e=>{console.log("Product data:",e),t(e),l(!1)}).catch(e=>{s("Error fetching product: ".concat(e.message)),l(!1)})},[e]),o?r.a.createElement(ln,null,r.a.createElement(gn,null,"Loading...")):i?r.a.createElement(ln,null,r.a.createElement(gn,null,i)):r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null),r.a.createElement(ln,null,n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(cn,{src:n.image||"../../public/placeholder300.jpg",alt:n.name}),r.a.createElement(sn,null,r.a.createElement(dn,null,n.name),r.a.createElement(pn,null,"$",n.price.toFixed(2)),r.a.createElement(bn,null,n.description),r.a.createElement(un,null,"Stock Quantity: ",n.stock_quantity),r.a.createElement(un,null,"Brand ID: ",n.brand_id),r.a.createElement(un,null,"Category ID: ",n.category_id),r.a.createElement(mn,{onClick:e=>{e.preventDefault(),d(n)}},"Add to Cart")))),r.a.createElement(Je,null))};const zn=s.b.div(fn||(fn=Object(i.a)(["\n    width: 80%;\n    margin: 2rem auto;\n    padding: 2rem;\n    background-color: #f8f9fa;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    position: relative; // Positioning context for absolute elements inside\n"]))),Dn=s.b.h1(hn||(hn=Object(i.a)(["\n    text-align: center;\n    color: #333;\n"]))),Sn=s.b.div(xn||(xn=Object(i.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem;\n    border-bottom: 1px solid #ccc;\n"]))),Tn=s.b.div(En||(En=Object(i.a)(["\n    display: flex;\n    align-items: center;\n"]))),An=s.b.img(jn||(jn=Object(i.a)(["\n    width: 60px;\n    height: 60px;\n    object-fit: cover;\n    margin-right: 10px;\n    border-radius: 5px;\n"]))),Mn=s.b.h4(yn||(yn=Object(i.a)(["\n    font-size: 1.2rem;\n    color: #555;\n"]))),qn=s.b.p(On||(On=Object(i.a)(["\n    color: #666;\n"]))),Pn=s.b.button(wn||(wn=Object(i.a)(["\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    font-size: 24px; // Bigger icon for better interaction\n    color: #007bff;\n\n    &:hover {\n        color: #0056b3;\n    }\n"]))),Fn=Object(s.b)(Pn)(vn||(vn=Object(i.a)(["\n    color: red; // Red color specifically for remove action\n"]))),Un=Object(s.b)(l.b)(kn||(kn=Object(i.a)(["\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    color: #007bff;\n    font-size: 24px;\n"]))),_n=s.b.button(Cn||(Cn=Object(i.a)(["\n    background-color: #28a745;\n    color: white;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 5px;\n    cursor: pointer;\n    margin-top: 20px;\n    width: 100%;\n    font-size: 18px;\n\n    &:hover {\n        background-color: #218838;\n    }\n"])));var Nn=function(){const{cartItems:e,addToCart:n,removeFromCart:t,updateItemQuantity:o}=Object(a.useContext)(u);return 0===e.length?r.a.createElement(zn,null,r.a.createElement(Un,{to:"/"},r.a.createElement(b.a,null)),r.a.createElement("p",null,"Your cart is empty.")):r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null),r.a.createElement(zn,null,r.a.createElement(Un,{to:"/"},r.a.createElement(b.a,null)),r.a.createElement(Dn,null,"Your Cart"),e.map(e=>r.a.createElement(Sn,{key:e.id},r.a.createElement(Tn,null,r.a.createElement(An,{src:e.image||"/ElectroMartplaceholder60.jpg",alt:e.name}),r.a.createElement("div",null,r.a.createElement(Mn,null,e.name),r.a.createElement(qn,null,"$",e.price," x ",e.quantity))),r.a.createElement("div",null,r.a.createElement(Pn,{onClick:()=>{n(e)}},r.a.createElement(b.d,null)),r.a.createElement(Pn,{onClick:()=>{var n;o((n=e).ID,n.quantity-1)}},r.a.createElement(b.c,null)),r.a.createElement(Fn,{onClick:()=>{return n=e.ID,void t(n);var n}},r.a.createElement(b.g,null))))),r.a.createElement(_n,{onClick:()=>console.log("Proceed to checkout")},"Checkout")),r.a.createElement(Je,null))};var Ln,Vn=function(){return r.a.createElement(h,null,r.a.createElement(g,null,r.a.createElement(l.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/",element:r.a.createElement(on,null),exact:!0}),r.a.createElement(c.a,{path:"/product/:id",element:r.a.createElement(In,null)}),r.a.createElement(c.a,{path:"/cart",element:r.a.createElement(Nn,null)})))))};var Yn=Object(s.a)(Ln||(Ln=Object(i.a)(["\n    * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n\n    body {\n        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n        line-height: 1.6;\n        font-size: 16px;\n        color: #333;\n        background-color: #f4f4f4;\n    }\n\n    h1, h2, h3, h4, h5, h6 {\n        color: #333;\n        margin-top: 0.5em;\n        margin-bottom: 0.5em;\n    }\n\n    h1 { font-size: 2.25em; }\n    h2 { font-size: 2em; }\n    h3 { font-size: 1.75em; }\n    h4 { font-size: 1.5em; }\n    h5 { font-size: 1.25em; }\n    h6 { font-size: 1em; }\n\n    p {\n        color: #666;\n    }\n\n    a {\n        color: #0056b3;\n        text-decoration: none;\n        &:hover, &:focus {\n            color: #003975;\n            text-decoration: underline;\n        }\n        &:focus {\n            outline: 3px solid #0056b3;\n            outline-offset: 2px;\n        }\n    }\n    input, button {\n        font-family: inherit; // Ensure buttons and inputs use the same font\n    }\n\n    button {\n        cursor: pointer; // All buttons should have a pointer cursor\n        &:disabled {\n            opacity: 0.7; // Visually indicate if a button is disabled\n        }\n    }\n    .padding { padding: 1em; }\n    .margin { margin: 1em; }\n"])));const $n=document.getElementById("root");Object(o.createRoot)($n).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Yn,null),r.a.createElement(Vn,null)))}},[[23,1,2]]]);
//# sourceMappingURL=main.9c6ae5cc.chunk.js.map