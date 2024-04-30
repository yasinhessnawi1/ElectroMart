(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,n,t){e.exports=t.p+"static/media/logo.f04ee572.png"},23:function(e,n,t){e.exports=t(34)},34:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(17),l=t(5),c=t(3),i=t(4),s=t(9),d=t(18),b=t.n(d),u=t(8);const m=Object(a.createContext)(),p=(e,n)=>{switch(n.type){case"ADD_ITEM":return e.find(e=>e.ID===n.payload.ID)?e.map(e=>e.ID===n.payload.ID?{...e,quantity:e.quantity+1}:e):[...e,{...n.payload,quantity:1}];case"REMOVE_ITEM":return e.filter(e=>e.ID!==n.payload);case"UPDATE_ITEM_QUANTITY":return n.payload.quantity<1?e.filter(e=>e.ID!==n.payload.ID):e.map(e=>e.ID===n.payload.ID?{...e,quantity:n.payload.quantity}:e);default:return e}};function g(e){let{children:n}=e;const[t,o]=Object(a.useReducer)(p,[],()=>{const e=localStorage.getItem("cart");return e?JSON.parse(e):[]});Object(a.useEffect)(()=>{localStorage.setItem("cart",JSON.stringify(t))},[t]);return r.a.createElement(m.Provider,{value:{cartItems:t,addToCart:e=>{o({type:"ADD_ITEM",payload:e})},removeFromCart:e=>{console.log("Removing product with ID:",e),o({type:"REMOVE_ITEM",payload:e})},updateItemQuantity:(e,n)=>{console.log("Updating product",e,"to quantity",n),o({type:"UPDATE_ITEM_QUANTITY",payload:{ID:e,quantity:n}})}}},n)}const f=Object(a.createContext)(null),h=e=>{let{children:n}=e;const[t,o]=Object(a.useState)({isLoggedIn:!1,username:"",role:"guest"});return r.a.createElement(f.Provider,{value:{user:t,loginUser:(e,n)=>{o({isLoggedIn:!0,username:e,role:n})},logoutUser:()=>{o({isLoggedIn:!1,username:"",role:"guest"})}}},n)};var x=t(36);var E,j,y,O,v,w,k,C,I,S,z,D,T,A,M;const q=i.b.div(E||(E=Object(c.a)(["\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n"]))),F=i.b.div(j||(j=Object(c.a)(["\n    display: flex;\n    align-items: center;\n"]))),U=i.b.span(y||(y=Object(c.a)(["\n    font-size: 16px;\n    color: #333;\n    margin-left: 5px; // Ensures spacing between icon and text\n"]))),_=Object(i.b)(s.b)(O||(O=Object(c.a)(["\n    display: flex;\n    align-items: center;\n    color: #333; // Icon color\n    position: relative;\n"]))),N=i.b.span(v||(v=Object(c.a)(["\n    position: absolute;\n    top: -8px;\n    right: -8px;\n    background-color: #dc3545; // Badge background color\n    color: white;\n    border-radius: 50%;\n    padding: 2px 6px;\n    font-size: 12px;\n    font-weight: bold;\n"]))),L=i.b.header(w||(w=Object(c.a)(["\n    background-color: #fff;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n    padding: 0 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 60px;\n    z-index: 1000;\n"]))),P=i.b.div(k||(k=Object(c.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 250px;\n    height: 100%;\n    background: #f7f7f7; // Light grey background for a soft look\n    box-shadow: 4px 0 15px rgba(0, 0, 0, 0.2);\n    transform: translateX(",");\n    transition: transform 0.3s ease-in-out;\n    z-index: 1500;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    box-sizing: border-box;\n"])),e=>e.$show?"0":"-100%"),Y=i.b.div(C||(C=Object(c.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    display: ",";\n    z-index: 1400;\n    transition: opacity 0.3s ease-in-out;\n"])),e=>e.$show?"block":"none"),$=Object(i.b)(s.b)(I||(I=Object(c.a)(["\n    padding: 12px 16px;\n    font-size: 16px;\n    color: #333;\n    text-decoration: none;\n    border-bottom: 1px solid #eaeaea; // Add a subtle separator between items\n\n    &:hover {\n        background-color: #eaeaea; // Hover effect for better user experience\n        color: #000;\n    }\n"]))),B=Object(i.b)(s.b)(S||(S=Object(c.a)(["\n    display: flex;\n    \n    align-items: center;\n    text-decoration: none;\n    color: inherit;\n"]))),V=i.b.img(z||(z=Object(c.a)(["\n    width: auto;\n    height: auto;\n    max-height: 40px;\n    max-width: 40px;\n"]))),G=i.b.div(D||(D=Object(c.a)(["\n    margin-left: 5px;\n    font-size: medium;\n    font-weight: bold;\n    color: #333;\n"]))),J=i.b.div(T||(T=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height: 25px;\n    cursor: pointer;\n\n    span {\n        display: block;\n        width: 25px;\n        height: 3px;\n        background-color: #333;\n        transition: background-color 0.2s;\n    }\n\n    &:hover {\n        span {\n            background-color: #555; // Darken the hamburger lines on hover\n        }\n    }\n"]))),R=i.b.span(A||(A=Object(c.a)(["\n    margin-left: 10px;\n    font-size: 16px;\n    color: #333;\n"]))),H=i.b.div(M||(M=Object(c.a)(["\n    display: flex;\n    align-items: center;\n    gap: 20px;\n"])));var Q,X,K,W,Z,ee=function(){const{cartItems:e}=Object(a.useContext)(m),{user:n}=Object(a.useContext)(f),[t,o]=Object(a.useState)(!1),[l,c]=Object(a.useState)(""),[i,d]=Object(a.useState)([]),[p,g]=Object(a.useState)([]);Object(a.useEffect)(()=>{"categories"===l?(async()=>{try{return(await x.a.get("https://electromart-server-bc815d5b516d.herokuapp.com/categories")).data}catch(e){throw e}})().then(e=>d(e)):"brands"===l&&(async()=>{try{return(await x.a.get("https://electromart-server-bc815d5b516d.herokuapp.com/brand")).data}catch(e){throw e}})().then(e=>g(e))},[l]);const h=()=>{o(!1),c("")},E=e=>{c(e)},j=()=>{const{user:e}=Object(a.useContext)(f);return e.isLoggedIn?r.a.createElement(F,{as:s.b,to:"/profile"},r.a.createElement(u.m,{size:24}),r.a.createElement(U,null,e.username)):r.a.createElement(F,{as:s.b,to:"/login"},r.a.createElement(u.m,{size:24}),r.a.createElement(U,null,"Login"))};return r.a.createElement(L,null,r.a.createElement(q,{onClick:e=>{e.stopPropagation(),o(!t)}},r.a.createElement(J,{title:"Menu"},t?r.a.createElement(u.j,{size:24}):r.a.createElement(u.b,{size:24})),r.a.createElement(R,null,"Menu")),r.a.createElement(B,{to:"/"},r.a.createElement(V,{src:b.a,alt:"Logo"}),r.a.createElement(G,null,"ElectroMart")),r.a.createElement(H,null,r.a.createElement(_,{to:"/cart"},r.a.createElement(u.h,{size:24}),e.length>0&&r.a.createElement(N,null,e.reduce((e,n)=>e+n.quantity,0))),r.a.createElement(j,null)),t&&r.a.createElement(Y,{$show:t,onClick:h}),r.a.createElement(P,{$show:t},"categories"===l?[r.a.createElement($,{key:"back",onClick:()=>c("")},"Back"),...i.map(e=>r.a.createElement($,{key:e.id,onClick:h},e.name))]:"brands"===l?[r.a.createElement($,{key:"back",onClick:()=>c("")},"Back"),...p.map(e=>r.a.createElement($,{key:e.id,onClick:h},e.name))]:[{role:"any",label:"Display Categories",action:()=>E("categories")},{role:"any",label:"Display Brands",action:()=>E("brands")},{role:"any",label:"About Us",path:"/about"},{role:"guest",label:"Login",path:"/login"},{role:"guest",label:"Sign Up",path:"/signup"},{role:"user",label:"Your Info",path:"/info"},{role:"user",label:"Your Orders",path:"/orders"},{role:"user",label:"Delete Account",path:"/delete-account"},{role:"admin",label:"Add Product",path:"/add-product"}].filter(e=>"any"===e.role||"guest"===e.role&&!n.isLoggedIn||e.role===n.role).map(e=>e.action?r.a.createElement($,{key:e.label,onClick:e.action},e.label):r.a.createElement($,{key:e.label,as:s.b,to:e.path,onClick:h},e.label))))};const ne=i.b.div(Q||(Q=Object(c.a)(["\n    position: relative;\n    display: flex;\n    overflow: hidden;\n    width: 100%;\n    height: 400px; // Adjust height for better visual\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n"]))),te=i.b.div(X||(X=Object(c.a)(["\n    flex: 0 0 auto;\n    width: 100%;\n    transition: transform 0.5s;\n    background: #eee;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n"]))),ae=i.b.img(K||(K=Object(c.a)(["\n    width: 100%;\n    max-width: 1290px;\n    object-fit: contain; // Ensure images are fully visible\n    height: 100%;\n"]))),re=i.b.button(W||(W=Object(c.a)(["\n    position: absolute;\n    left: 10px;\n    top: 50%;\n    transform: translateY(-50%);\n    background: rgba(0, 0, 0, 0.5);\n    color: white;\n    border: none;\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n"]))),oe=Object(i.b)(re)(Z||(Z=Object(c.a)(["\n    left: auto;\n    right: 10px;\n"])));var le,ce,ie,se,de,be=()=>{const[e,n]=Object(a.useState)(0);return Object(a.useEffect)(()=>{const e=setInterval(()=>{n(e=>(e+1)%3)},3e3);return()=>clearInterval(e)},[]),r.a.createElement(ne,null,r.a.createElement(te,{style:{transform:"translateX(-".concat(100*e,"%)")}},r.a.createElement(ae,{src:"/ElectroMart/banners/1.png",alt:"First slide"})),r.a.createElement(te,{style:{transform:"translateX(-".concat(100*e,"%)")}},r.a.createElement(ae,{src:"/ElectroMart/banners/2.png",alt:"Second slide"})),r.a.createElement(te,{style:{transform:"translateX(-".concat(100*e,"%)")}},r.a.createElement(ae,{src:"/ElectroMart/banners/3.png",alt:"Third slide"})),r.a.createElement(re,{onClick:()=>n(e=>(e-1+3)%3)},"<"),r.a.createElement(oe,{onClick:()=>n(e=>(e+1)%3)},">"))};const ue=i.b.div(le||(le=Object(c.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    position: relative;\n    margin: 20px;\n"]))),me=i.b.input(ce||(ce=Object(c.a)(["\n    padding: 8px 15px;\n    width: 100%;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    margin-right: 10px;\n"]))),pe=i.b.button(ie||(ie=Object(c.a)(["\n    padding: 8px 15px;\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n\n    &:hover {\n        background-color: #0056b3;\n    }\n"]))),ge=i.b.div(se||(se=Object(c.a)(["\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  background: white;\n  border: 1px solid #ccc;\n  border-top: none;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n"]))),fe=Object(i.b)(s.b)(de||(de=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  border-bottom: 1px solid #eee;\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    background-color: #f8f9fa;\n  }\n\n  img {\n    width: 50px;\n    height: 50px;\n    object-fit: cover;\n    margin-right: 10px;\n  }\n\n  div {\n    display: flex;\n    flex-direction: column;\n  }\n\n  span {\n    font-size: 16px;\n  }\n\n  .price {\n    color: #007bff;\n    font-weight: bold;\n  }\n"])));var he,xe,Ee=function(e){let{onSearch:n}=e;const[t,o]=Object(a.useState)(""),[l,c]=Object(a.useState)([]),i=async()=>{if(t.trim())try{const e=await(async e=>{try{const n="https://electromart-server-bc815d5b516d.herokuapp.com/search-products/".concat(e),t=await fetch(n);if(!t.ok)throw new Error("Network response was not ok "+t.statusText);return await t.json()}catch(n){throw console.error("There was a problem with the fetch operation:",n),n}})(t);c(e)}catch(e){console.error("Error searching products:",e)}else c([])};return r.a.createElement(ue,null,r.a.createElement(me,{type:"text",placeholder:"Search products...",value:t,onChange:e=>o(e.target.value),onKeyUp:i}),r.a.createElement(pe,{onClick:i},"Search"),l.length>0&&r.a.createElement(ge,null,l.map(e=>r.a.createElement(fe,{key:e.ID,to:"/product/".concat(e.ID)},r.a.createElement("img",{src:e.image||"/ElectroMart/banners/placeholder40.jpg",alt:e.name}),r.a.createElement("div",null,r.a.createElement("span",null,e.name),r.a.createElement("span",{className:"price"},"$",e.price.toFixed(2)))))))},je=t(21);const ye=i.b.div(he||(he=Object(c.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 7vh;\n"]))),Oe=i.b.button(xe||(xe=Object(c.a)(["\n    background-color: #007bff;\n    color: #fff;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 5px;\n    font-size: 16px;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n\n    &:hover {\n        background-color: #0056b3;\n    }\n\n    &:disabled {\n        background-color: #ccc;\n        cursor: not-allowed;\n    }\n"])));var ve,we,ke,Ce,Ie;const Se=i.b.div(ve||(ve=Object(c.a)(["\n    min-width: 300px;\n    margin: 10px; // Keep margin constant to avoid layout shifts\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n    align-self: center;\n    align-items: center;\n    border-radius: 10px;\n    overflow: hidden;\n    transition: transform 0.3s ease, box-shadow 0.3s ease; // Smooth transition for hover\n    &:hover {\n        transform: translateY(-5px) scale(1.03); // Lift and slightly enlarge the card\n        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); // Enhance shadow for better visual effect\n    }\n"]))),ze=i.b.img(we||(we=Object(c.a)(["\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n"]))),De=i.b.div(ke||(ke=Object(c.a)(["\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n"]))),Te=i.b.h5(Ce||(Ce=Object(c.a)(["\n    margin: 5px 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; // Prevent long names from breaking layout\n"]))),Ae=i.b.p(Ie||(Ie=Object(c.a)(["\n    color: #007bff;\n"])));var Me,qe=function(e){let{product:n}=e;const{addToCart:t}=Object(a.useContext)(m);return r.a.createElement(s.b,{to:"/product/".concat(n.ID),style:{textDecoration:"none",color:"inherit"}},r.a.createElement(Se,null,r.a.createElement(ze,{src:n.image||"/ElectroMart/banners/placeholder150.jpg",alt:n.name}),r.a.createElement(De,null,r.a.createElement(Te,null,"   ",n.name," "),r.a.createElement(Ae,null,"$",n.price.toFixed(2))),r.a.createElement(ye,null,r.a.createElement(Oe,{className:"btn btn-primary",name:n.ID,onClick:e=>{e.preventDefault(),t(n)}},"Add to cart"))))};var Fe,Ue,_e=i.b.button(Me||(Me=Object(c.a)(["\n    background: linear-gradient(145deg, #ddeef8, #9ea3a8);\n    color: black;\n    border: none;\n    border-radius: 50px;\n    padding: 10px 25px;\n    font-size: 70%;\n    cursor: pointer;\n    margin: 10px;\n    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);\n    transition: all 0.2s ease-in-out;\n    font-weight: bold; // Make text stand out\n    text-transform: uppercase; // Stylistic choice for filter buttons\n\n    &:hover {\n        background: linear-gradient(145deg, #007bdf, #004bac);\n        box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.3);\n        transform: scale(1.05);\n    }\n\n    &:active {\n        background: linear-gradient(145deg, #0061bf, #003c8f);\n        box-shadow: inset 2px 4px 6px rgba(0, 0, 0, 0.2);\n    }\n\n    &:focus {\n        outline: none;\n        box-shadow: 0 0 0 3px rgba(38, 143, 255, 0.5);\n    }\n"])));const Ne=i.b.div(Fe||(Fe=Object(c.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    gap: 20px;\n    padding: 0 10px;\n"]))),Le=i.b.div(Ue||(Ue=Object(c.a)(["\n    display: flex;\n    flex-wrap: wrap; // Allow the container to wrap items\n    gap: 5px;\n    flex-direction: row;\n    align-items: center;\n    padding: 0 10px;\n    margin-bottom: 20px; // Add some margin for spacing from content below\n\n    @media (max-width: 768px) {\n        justify-content: center; // Center align on smaller screens\n        gap: 10px; // Increase gap for better touch targets on smaller screens\n    }\n"])));var Pe,Ye,$e,Be,Ve=function(e){let{results:n}=e;const[t,o]=Object(a.useState)([]),[l,c]=Object(a.useState)(!1),[i,s]=Object(a.useState)([]);Object(a.useEffect)(()=>{n&&0!==n.length?(o(n),s(n),c(!1)):(c(!0),(async()=>{const e=await fetch("https://electromart-server-bc815d5b516d.herokuapp.com/products");if(!e.ok)throw new Error("An error occurred while fetching the data: "+e.status);return e.json()})().then(e=>{o(e),s(e),c(!1)}).catch(e=>{console.log("Error fetching products:",e.message),c(!1)}))},[n]);const d=e=>{const n=t.filter(n=>n.category===e);s(n)},b=()=>r.a.createElement(Ne,null,[1,2,3,4,5,6].map(e=>r.a.createElement("div",{key:e},r.a.createElement(je.a,{height:300}))));return r.a.createElement("div",null,r.a.createElement(Le,null,r.a.createElement(_e,{onClick:()=>s(t)},"All"),r.a.createElement(_e,{onClick:()=>d("Appliances")},"Appliances"),r.a.createElement(_e,{onClick:()=>d("TV & Home Theater")},"TV & Home Theater"),r.a.createElement(_e,{onClick:()=>d("Computers & Tablets")},"Computers & Tablets"),r.a.createElement(_e,{onClick:()=>d("Headphones and speaker")},"Headphones and speaker"),r.a.createElement(_e,{onClick:()=>d("Phones")},"Phones"),r.a.createElement(_e,{onClick:()=>d("Video Games")},"Video Games"),r.a.createElement(_e,{onClick:()=>d("Cameras")},"Cameras")),r.a.createElement(Ne,null,l?r.a.createElement(b,null):i.map(e=>r.a.createElement(qe,{key:e.ID,product:e}))))};const Ge=i.b.footer(Pe||(Pe=Object(c.a)(["\n    background-color: #8c979e; // Dark background for footer\n    color: #fff; // White text color for contrast\n    text-align: center;\n    position: relative;\n    bottom: 0;\n    width: 100%;\n    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);\n    line-height: 1.5;\n    padding: 20px 0; // Adjust padding for better spacing\n    font-size: 14px;\n"]))),Je=i.b.p(Ye||(Ye=Object(c.a)(["\n  margin: 0;\n  padding: 0;\n  font-size: 14px;\n"]))),Re=i.b.div($e||($e=Object(c.a)(["\n    margin-top: 10px;\n    display: flex;\n    justify-content: center;\n"]))),He=i.b.a(Be||(Be=Object(c.a)(["\n  color: #fff;\n  font-size: 20px;\n  transition: color 0.3s;\n  margin: 0 15px;\n\n    &:hover {\n    color: #f8d210;  // Gold color on hover\n  }\n"])));var Qe=function(){return r.a.createElement(Ge,null,r.a.createElement(Je,null,"\xa9 2024 ElectroMart, Inc. All rights reserved."),r.a.createElement(Re,null,r.a.createElement(He,{href:"#","aria-label":"Facebook"},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement(He,{href:"#","aria-label":"Twitter"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement(He,{href:"#","aria-label":"Instagram"},r.a.createElement("i",{className:"fa fa-instagram"}))))};var Xe,Ke,We,Ze,en,nn,tn,an,rn,on=function(){const[e,n]=Object(a.useState)([]);return Object(l.o)()("/"),r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null),r.a.createElement(Ee,{onSearch:e=>{n(e)}}),r.a.createElement(be,null),r.a.createElement(Ve,{results:e}),r.a.createElement(Qe,null))};const ln=i.b.div(Xe||(Xe=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 40px 20px;\n    min-height: 80vh;\n    background-color: #f8f9fa;\n"]))),cn=i.b.img(Ke||(Ke=Object(c.a)(["\n    width: 100%;\n    height: 100%;\n    max-height: 500px;\n    object-fit: cover;\n    border-radius: 12px;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n"]))),sn=i.b.div(We||(We=Object(c.a)(["\n    background-color: #ffffff;\n    padding: 25px;\n    align-items: center;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n    width: 100%;\n    max-width: 500px;\n    margin-top: 20px;\n    text-align: center;\n"]))),dn=i.b.h1(Ze||(Ze=Object(c.a)(["\n    color: #333;\n    margin-bottom: 10px;\n"]))),bn=i.b.p(en||(en=Object(c.a)(["\n    font-size: 24px;\n    color: #28a745;\n    font-weight: bold;\n"]))),un=i.b.p(nn||(nn=Object(c.a)(["\n    color: #666;\n    margin-top: 15px;\n"]))),mn=i.b.p(tn||(tn=Object(c.a)(["\n    color: #333;\n    font-size: 16px;\n    line-height: 1.5;\n"]))),pn=i.b.button(an||(an=Object(c.a)(["\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    padding: 10px 20px;\n    font-size: 18px;\n    cursor: pointer;\n    margin-top: 20px;\n    transition: background-color 0.2s;\n\n    &:hover {\n        background-color: #0056b3;\n    }\n"]))),gn=i.b.p(rn||(rn=Object(c.a)(["\n    color: #dc3545;\n    font-size: 20px;\n"])));var fn,hn,xn,En,jn,yn,On,vn,wn,kn,Cn,In,Sn=function(){const{id:e}=Object(l.q)(),[n,t]=Object(a.useState)(null),[o,c]=Object(a.useState)(!0),[i,s]=Object(a.useState)(null),{addToCart:d}=Object(a.useContext)(m);return Object(a.useEffect)(()=>{(async e=>{const n=await fetch("https://electromart-server-bc815d5b516d.herokuapp.com/products/"+e);if(!n.ok)throw new Error("An error occurred while fetching the data: "+n.status);return n.json()})(e).then(e=>{console.log("Product data:",e),t(e),c(!1)}).catch(e=>{s("Error fetching product: ".concat(e.message)),c(!1)})},[e]),o?r.a.createElement(ln,null,r.a.createElement(gn,null,"Loading...")):i?r.a.createElement(ln,null,r.a.createElement(gn,null,i)):r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null),r.a.createElement(ln,null,n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(cn,{src:n.image||"/ElectroMart/banners/placeholder300.jpg",alt:n.name}),r.a.createElement(sn,null,r.a.createElement(dn,null,n.name),r.a.createElement(bn,null,"$",n.price.toFixed(2)),r.a.createElement(un,null,n.description),r.a.createElement(mn,null,"Stock Quantity: ",n.stock_quantity),r.a.createElement(mn,null,"Brand ID: ",n.brand_id),r.a.createElement(mn,null,"Category ID: ",n.category_id),r.a.createElement(pn,{onClick:e=>{e.preventDefault(),d(n)}},"Add to Cart")))),r.a.createElement(Qe,null))};const zn=i.b.div(fn||(fn=Object(c.a)(["\n    width: 80%;\n    margin: 2rem auto;\n    padding: 2rem;\n    background-color: #f8f9fa;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    position: relative; // Positioning context for absolute elements inside\n"]))),Dn=i.b.p(hn||(hn=Object(c.a)(["\n    font-size: 1.5rem;\n    font-weight: bold;\n    text-align: right;\n    margin-top: 20px;\n"]))),Tn=i.b.h1(xn||(xn=Object(c.a)(["\n    text-align: center;\n    color: #333;\n"]))),An=i.b.div(En||(En=Object(c.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem;\n    border-bottom: 1px solid #ccc;\n"]))),Mn=i.b.div(jn||(jn=Object(c.a)(["\n    display: flex;\n    align-items: center;\n"]))),qn=i.b.img(yn||(yn=Object(c.a)(["\n    width: 60px;\n    height: 60px;\n    object-fit: cover;\n    margin-right: 10px;\n    border-radius: 5px;\n"]))),Fn=i.b.h4(On||(On=Object(c.a)(["\n    font-size: 1.2rem;\n    color: #555;\n"]))),Un=i.b.p(vn||(vn=Object(c.a)(["\n    color: #666;\n"]))),_n=i.b.button(wn||(wn=Object(c.a)(["\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    font-size: 24px; // Bigger icon for better interaction\n    color: #007bff;\n\n    &:hover {\n        color: #0056b3;\n    }\n"]))),Nn=Object(i.b)(_n)(kn||(kn=Object(c.a)(["\n    color: red; // Red color specifically for remove action\n"]))),Ln=Object(i.b)(s.b)(Cn||(Cn=Object(c.a)(["\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    color: #007bff;\n    font-size: 24px;\n"]))),Pn=i.b.button(In||(In=Object(c.a)(["\n    background-color: #28a745;\n    color: white;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 5px;\n    cursor: pointer;\n    margin-top: 20px;\n    width: 100%;\n    font-size: 18px;\n\n    &:hover {\n        background-color: #218838;\n    }\n"])));var Yn,$n,Bn,Vn,Gn,Jn,Rn,Hn,Qn,Xn,Kn,Wn,Zn,et=function(){const{cartItems:e,addToCart:n,removeFromCart:t,updateItemQuantity:o}=Object(a.useContext)(m),l=e.reduce((e,n)=>e+n.price*n.quantity,0);return 0===e.length?r.a.createElement(zn,null,r.a.createElement(Ln,{to:"/"},r.a.createElement(u.a,null)),r.a.createElement("p",null,"Your cart is empty.")):r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null),r.a.createElement(zn,null,r.a.createElement(Ln,{to:"/"},r.a.createElement(u.a,null)),r.a.createElement(Tn,null,"Your Cart"),e.map(e=>r.a.createElement(An,{key:e.id},r.a.createElement(Mn,null,r.a.createElement(qn,{src:e.image||"/ElectroMart/banners/placeholder60.jpg",alt:e.name}),r.a.createElement("div",null,r.a.createElement(Fn,null,e.name),r.a.createElement(Un,null,"$",e.price," x ",e.quantity))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(_n,{onClick:()=>{n(e)}},r.a.createElement(u.g,null)),r.a.createElement(_n,{onClick:()=>{var n;o((n=e).ID,n.quantity-1)}},r.a.createElement(u.f,null)),r.a.createElement(Nn,{onClick:()=>{return n=e.ID,void t(n);var n}},r.a.createElement(u.k,null)))))),r.a.createElement(Dn,null,"Total: $",l.toFixed(2)),r.a.createElement(Pn,{onClick:()=>alert("function coming soon ")},"Checkout")),r.a.createElement(Qe,null))};const nt=Object(i.c)(Yn||(Yn=Object(c.a)(["\n    from { opacity: 0; }\n    to { opacity: 1; }\n"]))),tt=Object(i.c)($n||($n=Object(c.a)(["\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n"]))),at=i.b.div(Bn||(Bn=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    background: linear-gradient(to right, #6a11cb, #2575fc);\n"]))),rt=i.b.div(Vn||(Vn=Object(c.a)(["\n    width: 90%;\n    max-width: 400px;\n    padding: 2rem;\n    background-color: #fff;\n    border-radius: 10px;\n    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n    text-align: center;  // Align text in the center for better aesthetics\n"]))),ot=i.b.h2(Gn||(Gn=Object(c.a)(["\n    color: #333;  // Choose a color that fits your brand\n    font-size: 2.5rem;  // Makes the title larger\n    font-weight: 700;  // Makes the font bolder\n    margin: 0 0 2rem 0;  // Adds more space below the title\n    text-align: center;\n    font-family: Geneva,sans-serif; \n"]))),lt=i.b.form(Jn||(Jn=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n"]))),ct=i.b.div(Rn||(Rn=Object(c.a)(["\n    position: relative;\n    width: 100%;\n    margin-bottom: 1rem;\n"]))),it=i.b.input(Hn||(Hn=Object(c.a)(["\n    padding: 0.5rem 0.5rem 0.5rem 2.5rem;\n    font-size: 1rem;\n    width: 100%;\n    border: 2px solid transparent;\n    border-radius: 5px;\n    &:focus {\n        border-color: #0056b3;\n        outline: none;\n    }\n"]))),st=i.b.span(Qn||(Qn=Object(c.a)(["\n    position: absolute;\n    top: 50%;\n    left: 10px;\n    transform: translateY(-50%);\n    color: #aaa;\n"]))),dt=i.b.button(Xn||(Xn=Object(c.a)(["\n    background-color: #007bff;\n    color: white;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 1rem;\n    transition: background-color 0.2s, transform 0.2s;\n    &:hover {\n        background-color: #0056b3;\n    }\n    &:active {\n        transform: scale(0.98);\n    }\n"]))),bt=i.b.p(Kn||(Kn=Object(c.a)(["\n    color: red;\n    animation: "," 0.3s ease-out;\n"])),nt),ut=Object(i.b)(u.i)(Wn||(Wn=Object(c.a)(["\n  animation: "," 2s linear infinite;\n"])),tt),mt=Object(i.b)(s.b)(Zn||(Zn=Object(c.a)(["\n    color: #007bff;\n    text-decoration: none;\n    margin-top: 1rem;\n    &:hover {\n        text-decoration: underline;\n    }\n"])));var pt,gt,ft,ht,xt,Et,jt,yt,Ot,vt,wt,kt,Ct=function(){const[e,n]=Object(a.useState)(""),[t,o]=Object(a.useState)(""),[c,i]=Object(a.useState)(""),[s,d]=Object(a.useState)(!1),b=Object(l.o)(),{loginUser:m}=Object(a.useContext)(f);return r.a.createElement(at,null,r.a.createElement(rt,null,r.a.createElement(ot,null,"Login to ElectroMart"),r.a.createElement(lt,{onSubmit:async n=>{n.preventDefault(),d(!0);try{const n=await(async(e,n)=>{try{const t=JSON.stringify({username:e,password:n});return console.log(t),await fetch("https://electromart-server-bc815d5b516d.herokuapp.com/login",{method:"POST",body:t})}catch(t){return console.error("Error fetching login:",t),null}})(e,t);if(200===n.status){const t=await n.json();localStorage.setItem("token",t.token);const a=await(async e=>{try{const n=await x.a.get("https://electromart-server-bc815d5b516d.herokuapp.com/protected",{headers:{Authorization:"Bearer ".concat(e)}});if(200===!n.status)throw new Error("An error occurred while fetching the data: "+n.status);return n.data.role}catch(n){return console.error("Error fetching role:",n),null}})(t.token);m(e,a),b("/")}else i("Invalid username or password")}catch(a){console.error("Login error:",a),i("An error occurred")}d(!1)}},r.a.createElement(ct,null,r.a.createElement(st,null,r.a.createElement(u.l,null)),r.a.createElement(it,{type:"text",placeholder:"Username",value:e,onChange:e=>n(e.target.value)})),r.a.createElement(ct,null,r.a.createElement(st,null,r.a.createElement(u.e,null)),r.a.createElement(it,{type:"password",placeholder:"Password",value:t,onChange:e=>o(e.target.value)})),c&&r.a.createElement(bt,null,c),r.a.createElement(dt,{type:"submit"},s?r.a.createElement(ut,null):"Login"),r.a.createElement(mt,{to:"/signup"},"Not a user? Sign up here!"))))};const It=Object(i.c)(pt||(pt=Object(c.a)(["\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n"]))),St=Object(i.c)(gt||(gt=Object(c.a)(["\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n"]))),zt=i.b.div(ft||(ft=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    background: linear-gradient(to right, #6a11cb, #2575fc);\n"]))),Dt=i.b.div(ht||(ht=Object(c.a)(["\n    width: 90%;\n    max-width: 400px;\n    padding: 2rem;\n    background-color: #fff;\n    border-radius: 10px;\n    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);\n    text-align: center;\n"]))),Tt=i.b.h2(xt||(xt=Object(c.a)(["\n    color: #333;\n    font-size: 2.5rem;\n    font-weight: 700;\n    margin: 0 0 2rem 0;\n    text-align: center;\n    font-family: Geneva, sans-serif;\n"]))),At=i.b.form(Et||(Et=Object(c.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n"]))),Mt=i.b.div(jt||(jt=Object(c.a)(["\n    position: relative;\n    width: 100%;\n    margin-bottom: 1rem;\n"]))),qt=i.b.input(yt||(yt=Object(c.a)(["\n    padding: 0.5rem 0.5rem 0.5rem 2.5rem;\n    font-size: 1rem;\n    width: 100%;\n    border: 2px solid transparent;\n    border-radius: 5px;\n\n    &:focus {\n        border-color: #0056b3;\n        outline: none;\n    }\n"]))),Ft=i.b.span(Ot||(Ot=Object(c.a)(["\n    position: absolute;\n    top: 50%;\n    left: 10px;\n    transform: translateY(-50%);\n    color: #aaa;\n"]))),Ut=i.b.button(vt||(vt=Object(c.a)(["\n    background-color: #007bff;\n    color: white;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 1rem;\n    transition: background-color 0.2s, transform 0.2s;\n\n    &:hover {\n        background-color: #0056b3;\n    }\n\n    &:active {\n        transform: scale(0.98);\n    }\n"]))),_t=i.b.p(wt||(wt=Object(c.a)(["\n    color: red;\n    animation: "," 0.3s ease-out;\n"])),It),Nt=Object(i.b)(u.i)(kt||(kt=Object(c.a)(["\n    animation: "," 2s linear infinite;\n"])),St);var Lt=function(){const[e,n]=Object(a.useState)({username:"",password:"",email:"",first_name:"",last_name:"",address:""}),[t,o]=Object(a.useState)(""),[c,i]=Object(a.useState)(!1),s=Object(l.o)(),d=e=>{const{name:t,value:a}=e.target;n(e=>({...e,[t]:a}))};return r.a.createElement(zt,null,r.a.createElement(Dt,null,r.a.createElement(Tt,null,"Sign Up"),r.a.createElement(At,{onSubmit:async n=>{n.preventDefault(),i(!0);try{201===(await(async e=>{try{return console.log("Form data:",e),await fetch("http://localhost:8081/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}catch(n){throw n}})(e)).status?(i(!1),s("/login"),alert("User created successfully, login to continue")):(o("Failed to create user, check your input and try again"),i(!1))}catch(t){o("Failed to create user, check your input and try again"),i(!1),console.log("Error creating user:",t)}}},r.a.createElement(Mt,null,r.a.createElement(Ft,null,r.a.createElement(u.l,null)),r.a.createElement(qt,{name:"username",type:"text",placeholder:"Username",value:e.username,onChange:d,required:!0})),r.a.createElement(Mt,null,r.a.createElement(Ft,null,r.a.createElement(u.e,null)),r.a.createElement(qt,{name:"password",type:"password",placeholder:"Password",value:e.password,onChange:d,required:!0})),r.a.createElement(Mt,null,r.a.createElement(Ft,null,r.a.createElement(u.c,null)),r.a.createElement(qt,{name:"email",type:"email",placeholder:"Email",value:e.email,onChange:d,required:!0})),r.a.createElement(Mt,null,r.a.createElement(Ft,null,r.a.createElement(u.l,null)),r.a.createElement(qt,{name:"first_name",type:"text",placeholder:"First Name",value:e.first_name,onChange:d,required:!0})),r.a.createElement(Mt,null,r.a.createElement(Ft,null,r.a.createElement(u.l,null)),r.a.createElement(qt,{name:"last_name",type:"text",placeholder:"Last Name",value:e.last_name,onChange:d,required:!0})),r.a.createElement(Mt,null,r.a.createElement(Ft,null,r.a.createElement(u.d,null)),r.a.createElement(qt,{name:"address",type:"text",placeholder:"Address",value:e.address,onChange:d,required:!0})),t&&r.a.createElement(_t,null,t),r.a.createElement(Ut,{type:"submit"},c?r.a.createElement(Nt,null):"Sign Up"))))};var Pt,Yt=function(){return r.a.createElement(h,null,r.a.createElement(g,null,r.a.createElement(s.a,{basename:"/ElectroMart"},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",element:r.a.createElement(on,null),exact:!0}),r.a.createElement(l.a,{path:"/product/:id",element:r.a.createElement(Sn,null)}),r.a.createElement(l.a,{path:"/cart",element:r.a.createElement(et,null)}),r.a.createElement(l.a,{path:"*",element:r.a.createElement("h1",null,"404 Not Found")}),r.a.createElement(l.a,{path:"/login",element:r.a.createElement(Ct,null)}),r.a.createElement(l.a,{path:"/signup",element:r.a.createElement(Lt,null)})))))};var $t=Object(i.a)(Pt||(Pt=Object(c.a)(["\n    * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n\n    body {\n        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n        line-height: 1.6;\n        font-size: 16px;\n        color: #333;\n        background-color: #f4f4f4;\n    }\n\n    h1, h2, h3, h4, h5, h6 {\n        color: #333;\n        margin-top: 0.5em;\n        margin-bottom: 0.5em;\n    }\n\n    h1 { font-size: 2.25em; }\n    h2 { font-size: 2em; }\n    h3 { font-size: 1.75em; }\n    h4 { font-size: 1.5em; }\n    h5 { font-size: 1.25em; }\n    h6 { font-size: 1em; }\n\n    p {\n        color: #666;\n    }\n\n    a {\n        color: #0056b3;\n        text-decoration: none;\n        &:hover, &:focus {\n            color: #003975;\n            text-decoration: underline;\n        }\n        &:focus {\n            outline: 3px solid #0056b3;\n            outline-offset: 2px;\n        }\n    }\n    input, button {\n        font-family: inherit; // Ensure buttons and inputs use the same font\n    }\n\n    button {\n        cursor: pointer; // All buttons should have a pointer cursor\n        &:disabled {\n            opacity: 0.7; // Visually indicate if a button is disabled\n        }\n    }\n    .padding { padding: 1em; }\n    .margin { margin: 1em; }\n"])));const Bt=document.getElementById("root");Object(o.createRoot)(Bt).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($t,null),r.a.createElement(Yt,null)))}},[[23,1,2]]]);
//# sourceMappingURL=main.01bfab87.chunk.js.map