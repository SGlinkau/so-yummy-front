"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[116],{5116:(e,n,t)=>{t.r(n),t.d(n,{default:()=>G});var i,a,r,s=t(5043),o=t(4536),c=t(5746),d=t(2317),p=t(803),l=t(7528),m=t(5903),u=t(5719);const g=m.A.section(i||(i=(0,l.A)(["\n  --section-padding-top: 50px;\n  --section-padding-bottom: 100px;\n  padding-top: var(--section-padding-top);\n  padding-bottom: var(--section-padding-bottom);\n\n  @media screen and (min-width: ",") {\n    --section-padding-top: 72px;\n    --section-padding-bottom: 200px;\n  }\n\n  @media screen and (min-width: ",") {\n    --section-padding-top: 100px;\n    --section-padding-bottom: 100px;\n  }\n"])),(e=>e.theme.breakpoints.tablet),(e=>e.theme.breakpoints.desktop)),h=(0,m.A)(u.m)(a||(a=(0,l.A)([""]))),x=m.A.h2(r||(r=(0,l.A)(["\n  --title-margin-bottom: 50px;\n\n  margin-bottom: var(--title-margin-bottom);\n\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 1;\n  letter-spacing: -0.02em;\n  font-feature-settings: 'liga' off;\n\n  color: ",";\n\n  @media screen and (min-width: ",") {\n    --title-margin-bottom: 100px;\n\n    font-size: 32px;\n  }\n\n  @media screen and (min-width: ",") {\n    font-size: 44px;\n  }\n"])),(e=>{let{theme:n}=e;return n.colors.gray[400]}),(e=>e.theme.breakpoints.tablet),(e=>e.theme.breakpoints.desktop));var f=t(579);const v=(0,s.createContext)({});function b(e){let{children:n,value:t}=e;return(0,f.jsx)(v.Provider,{value:t,children:n})}var j,k=t(5706);const A=m.A.ul(j||(j=(0,l.A)(["\n  --list-gap: 18px;\n\n  display: flex;\n  flex-direction: column;\n  gap: var(--list-gap);\n\n  @media screen and (min-width: ",") {\n    --list-gap: 40px;\n  }\n\n  @media screen and (min-width: ",") {\n    --list-gap: 50px;\n  }\n"])),(e=>e.theme.breakpoints.tablet),(e=>e.theme.breakpoints.desktop));var w=t(8164),y=t(1210),R=t(5173),C=t.n(R);const F=C().shape({_id:C().string.isRequired,thumb:C().string.isRequired,title:C().string.isRequired,time:C().string.isRequired,description:C().string.isRequired}).isRequired;var P;const q=m.A.li(P||(P=(0,l.A)([""])));function _(e){let{recipe:n}=e;const{removeRecipeFromFavorite:t}=(0,s.useContext)(v);return(0,f.jsx)(q,{children:(0,f.jsx)(w.A,{recipe:n,onDelete:async()=>{await t(n._id)},to:"".concat(y.J.RECIPE_PAGE,"/").concat(n._id)})})}C().arrayOf(C().shape({...F})).isRequired;function E(e){let{recipes:n}=e;return(0,f.jsx)(A,{children:null===n||void 0===n?void 0:n.map((e=>(0,f.jsx)(_,{recipe:e},e._id)))})}var z=t(2597);function S(){const e=(0,s.useRef)({page:1,totalPages:1}),[n,t]=(0,s.useState)([]),[i,a]=(0,s.useState)(!1),r=(0,s.useCallback)((async function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;a(!0);try{const{data:a}=await(0,k.LK)(n,i),{recipes:r,limit:s,total:o,page:c}=a;e.current.totalPages=Math.ceil(o/s),e.current.page=c,t(r)}catch(r){(0,c.U7)(r)}finally{a(!1)}}),[]),l=(0,s.useCallback)((async t=>{const i=1===n.length?1===e.current.page?1:e.current.page-1:e.current.page;await(0,k.pj)(t),await r(i)}),[r,n]),{Component:m}=(0,o.A)({totalPages:e.current.totalPages,page:e.current.page,onFetch:r});return(0,s.useEffect)((()=>{r()}),[r]),(0,f.jsx)(g,{children:(0,f.jsxs)(h,{children:[(0,f.jsx)(x,{children:"Favorites"}),(0,f.jsx)(b,{value:{removeRecipeFromFavorite:l},children:i?(0,f.jsx)(z.A,{}):n.length>0?(0,f.jsx)(E,{recipes:n}):(0,f.jsx)(p.A,{message:d.d.favoritesNotFound})}),e.current.totalPages>1&&(0,f.jsx)(m,{})]})})}var D=t(6283);function G(){return(0,D.b)(),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(S,{})})}}}]);
//# sourceMappingURL=116.9b962f0a.chunk.js.map