"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[637],{3637:(n,e,t)=>{t.r(e),t.d(e,{default:()=>y});var a,r,i,o,s=t(3216),l=t(5706),c=t(5043),d=t(123),p=t(7528),u=t(5903);const h=u.A.div(a||(a=(0,p.A)(["\n  position: relative;\n"]))),x=u.A.div(r||(r=(0,p.A)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100%;\n  height: 100%;\n"]))),g=u.A.ul(i||(i=(0,p.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n\n  margin-top: 32px;\n\n  opacity: ",";\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 32px;\n    margin-top: 50px;\n  }\n\n  @media screen and (min-width: ",") {\n    row-gap: 100px;\n    column-gap: 14px;\n  }\n"])),(n=>{let{isLoading:e}=n;return e?.1:1}),(n=>n.theme.breakpoints.tablet),(n=>n.theme.breakpoints.desktop)),m=u.A.li(o||(o=(0,p.A)(["\n  @media screen and (min-width: ",") {\n    width: calc((100% - 32px) / 2);\n  }\n\n  @media screen and (min-width: ",") {\n    width: calc((100% - 14px * 3) / 4);\n  }\n"])),(n=>n.theme.breakpoints.desktop),(n=>n.theme.breakpoints.desktop));var b=t(4536),f=t(2597),w=t(1210),k=t(5746),A=t(579);function y(){const[n,e]=(0,c.useState)(!1),[t,a]=(0,c.useState)([]),{categoryName:r}=(0,s.g)(),i=(0,c.useRef)({page:1,totalPages:1,limit:8}),o=(0,c.useCallback)((async function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.current.limit;e(!0);const o=r.charAt(0).toUpperCase()+r.slice(1);try{const{data:e}=await(0,l.o2)(o,n,t),{recipes:r,limit:s,page:c,total:d}=e;i.current.totalPages=Math.ceil(d/s),i.current.page=c,a(r)}catch(s){(0,k.U7)(s)}finally{e(!1)}}),[r]),{Component:p}=(0,b.A)({totalPages:i.current.totalPages,page:i.current.page,onFetch:n=>o(n,i.current.limit)});return(0,c.useEffect)((()=>{o()}),[o]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(h,{children:[(0,A.jsx)(g,{isLoading:n,children:t.map((n=>{let{_id:e,title:t,thumb:a}=n;return(0,A.jsx)(m,{children:(0,A.jsx)(d.A,{src:a,title:t,to:"".concat(w.J.RECIPE_PAGE,"/").concat(e)})},e)}))}),n&&(0,A.jsx)(x,{children:(0,A.jsx)(f.A,{})})]}),i.current.totalPages>1&&(0,A.jsx)(p,{})]})}},123:(n,e,t)=>{t.d(e,{A:()=>g});var a,r,i,o,s=t(3216),l=t(7528),c=t(5903);const d=c.A.div(a||(a=(0,l.A)(["\n  position: relative;\n  width: 343px;\n  height: 323px;\n\n  border-radius: ",";\n\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n\n  @media screen and (min-width: calc("," - 1px)) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: calc("," - 1px)) {\n    width: 300px;\n  }\n\n  &:hover {\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  }\n\n  transition: ","; ;\n"])),(n=>{let{theme:e}=n;return e.radii.lg}),(n=>{let{theme:e}=n;return e.breakpoints[1]}),(n=>{let{theme:e}=n;return e.breakpoints[2]}),(n=>{let{theme:e}=n;return e.transitions.create(["box-shadow"])})),p=c.A.img(r||(r=(0,l.A)(["\n  width: 100%;\n  height: 100%;\n\n  object-fit: cover;\n\n  border-radius: ",";\n\n  background-color: rgba(235, 243, 212, 0.2);\n"])),(n=>{let{theme:e}=n;return e.radii.lg})),u=c.A.div(i||(i=(0,l.A)(["\n  position: absolute;\n  bottom: 26px;\n  left: 18px;\n  width: 307px;\n  padding: 16px;\n\n  background-color: ",";\n\n  border-radius: ",";\n\n  @media screen and (min-width: calc("," - 1px)) {\n    width: 300px;\n  }\n\n  @media screen and (min-width: calc("," - 1px)) {\n    bottom: 23px;\n    left: 16px;\n    width: 268px;\n  }\n"])),(n=>{let{theme:e}=n;return e.colors.white[100]}),(n=>{let{theme:e}=n;return e.radii.lg}),(n=>{let{theme:e}=n;return e.breakpoints[1]}),(n=>{let{theme:e}=n;return e.breakpoints[2]})),h=c.A.p(o||(o=(0,l.A)(["\n  margin: auto 0;\n\n  color: ",";\n\n  line-height: 1.25;\n  font-weight: ",";\n"])),(n=>{let{theme:e}=n;return e.colors.gray[500]}),(n=>{let{theme:e}=n;return e.fontWeights.medium}));var x=t(579);function g(n){let{src:e,title:t,to:a}=n;const r=(0,s.Zp)();return(0,x.jsxs)(d,{onClick:()=>r(a),children:[(0,x.jsx)(p,{src:e,alt:t}),(0,x.jsx)(u,{children:(0,x.jsx)(h,{children:t})})]})}},4536:(n,e,t)=>{t.d(e,{A:()=>A});var a=t(8168),r=t(8587),i=t(5043);const o=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function s(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{boundaryCount:e=1,componentName:t="usePagination",count:s=1,defaultPage:l=1,disabled:c=!1,hideNextButton:d=!1,hidePrevButton:p=!1,onChange:u,page:h,showFirstButton:x=!1,showLastButton:g=!1,siblingCount:m=1}=n,b=(0,r.A)(n,o),[f,w]=function(n){let{controlled:e,default:t,name:a,state:r="value"}=n;const{current:o}=i.useRef(void 0!==e),[s,l]=i.useState(t);return[o?e:s,i.useCallback((n=>{o||l(n)}),[])]}({controlled:h,default:l,name:t,state:"page"}),k=(n,e)=>{h||w(e),u&&u(n,e)},A=(n,e)=>{const t=e-n+1;return Array.from({length:t},((e,t)=>n+t))},y=A(1,Math.min(e,s)),v=A(Math.max(s-e+1,e+1),s),j=Math.max(Math.min(f-m,s-e-2*m-1),e+2),C=Math.min(Math.max(f+m,e+2*m+2),v.length>0?v[0]-2:s-1),P=[...x?["first"]:[],...p?[]:["previous"],...y,...j>e+2?["start-ellipsis"]:e+1<s-e?[e+1]:[],...A(j,C),...C<s-e-1?["end-ellipsis"]:s-e>e?[s-e]:[],...v,...d?[]:["next"],...g?["last"]:[]],B=n=>{switch(n){case"first":return 1;case"previous":return f-1;case"next":return f+1;case"last":return s;default:return null}},M=P.map((n=>"number"===typeof n?{onClick:e=>{k(e,n)},type:"page",page:n,selected:n===f,disabled:c,"aria-current":n===f?"true":void 0}:{onClick:e=>{k(e,B(n))},type:n,page:B(n),selected:!1,disabled:c||-1===n.indexOf("ellipsis")&&("next"===n||"last"===n?f>=s:f<=1)}));return(0,a.A)({items:M},b)}var l,c,d,p,u=t(7528),h=t(5903);const x=h.A.ul(l||(l=(0,u.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n\n  width: fit-content;\n  margin: 0 auto 0;\n  margin-top: 50px;\n  padding: 14px 24px;\n\n  background: ",";\n  border-radius: 26px;\n\n  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);\n\n  @media screen and (max-width: calc("," - 0.2px)) {\n    padding: 14px 14px;\n  }\n"])),(n=>{let{theme:e}=n;return e.colors.white[100]}),(n=>{let{theme:e}=n;return e.breakpoints.tablet})),g=h.A.button(c||(c=(0,u.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n\n  width: 27px;\n  height: 27px;\n\n  font-weight: 500;\n  font-size: 12px;\n  line-height: calc(18 / 12);\n  font-feature-settings: 'ss04' on;\n\n  color: ",";\n\n  border-radius: 50%;\n\n  background-color: ",";\n"])),(n=>{let{selected:e,theme:t}=n;return e?t.colors.black[400]:t.colors.gray[900]}),(n=>{let{selected:e,theme:t}=n;return e?t.colors.green[100]:"transparent"})),m=(0,h.A)(g)(d||(d=(0,u.A)(["\n  padding-left: 0;\n  padding-right: 0;\n\n  @media screen and (max-width: calc("," - 0.2px)) {\n    margin-right: 5px;\n  }\n\n  margin-right: 10px;\n  font-size: 24px;\n\n  &:disabled {\n    color: rgba(169, 169, 169, 0.73);\n  }\n"])),(n=>{let{theme:e}=n;return e.breakpoints.tablet})),b=(0,h.A)(g)(p||(p=(0,u.A)(["\n  padding-left: 0;\n  padding-right: 0;\n\n  @media screen and (max-width: calc("," - 0.2px)) {\n    margin-left: 5px;\n  }\n\n  margin-left: 10px;\n  font-size: 24px;\n\n  &:disabled {\n    color: rgba(169, 169, 169, 0.73);\n  }\n"])),(n=>{let{theme:e}=n;return e.breakpoints.tablet}));var f=t(579);function w(n){let{items:e=[]}=n;return(0,f.jsx)(x,{children:null===e||void 0===e?void 0:e.map(((n,e)=>{let{page:t,type:a,selected:r,...i}=n,o=null;switch(a){case"start-ellipsis":case"end-ellipsis":o="...";break;case"next":o=(0,f.jsx)(b,{type:"button",selected:r,...i,"data-type":a,children:">"});break;case"previous":o=(0,f.jsx)(m,{type:"button",selected:r,...i,"data-type":a,children:"<"});break;default:o=(0,f.jsx)(g,{type:"button",selected:r,...i,"data-type":a,children:t})}return(0,f.jsx)("li",{children:o},e)}))})}var k=t(5746);function A(n){let{totalPages:e,page:t,onFetch:a}=n;const{items:r}=s({count:e,defaultPage:1,page:t,onChange:async n=>{const{target:{textContent:e,dataset:r}}=n,i=r.type;let o=t;switch(i){case"next":o+=1;break;case"previous":o-=1;break;case"page":o=+e}a(o),(0,k.eG)(!0)}});return{items:r,Component:()=>(0,f.jsx)(w,{items:r})}}}}]);
//# sourceMappingURL=637.cc0cfde0.chunk.js.map