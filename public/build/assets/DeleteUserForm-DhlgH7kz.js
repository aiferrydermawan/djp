import{r as i,m,b as Ge,e as ee,j as f,W as ze}from"./app-BMv87VXb.js";import{T as Ke,I as Xe}from"./TextInput-J-MkiAE7.js";import{I as Je}from"./InputLabel-BCWSR2kb.js";import{s as Qe,o as v,t as se,U as C,y as S,e as ie,u as I,p as Ze,C as D,g as Ee,T as et,f as be,l as N,c as xe,O as he,b as tt,d as V,q as X}from"./transition-Q6oFoavm.js";import{d as nt,n as B,O as G,M as k,f as te,s as ne,m as ue,e as F,t as J,N as rt,g as ot,I as j,y as lt,a as at,r as st}from"./keyboard-_KpZhvhq.js";import"./bootstrap-DV31Mhsh.js";/* empty css            */function $e(e,t,n,r){let o=Qe(n);i.useEffect(()=>{e=e??window;function a(s){o.current(s)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function Te(e){let t=v(e),n=i.useRef(!1);i.useEffect(()=>(n.current=!1,()=>{n.current=!0,se(()=>{n.current&&t()})}),[t])}var A=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(A||{});function it(){let e=i.useRef(0);return nt("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Ce(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let ut="div";var Se=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Se||{});function ct(e,t){let n=i.useRef(null),r=S(n,t),{initialFocus:o,containers:a,features:s=30,...l}=e;ie()||(s=1);let u=B(n);pt({ownerDocument:u},!!(s&16));let p=mt({ownerDocument:u,container:n,initialFocus:o},!!(s&2));gt({ownerDocument:u,container:n,containers:a,previousActiveElement:p},!!(s&8));let c=it(),d=v(b=>{let h=n.current;h&&(P=>P())(()=>{I(c.current,{[A.Forwards]:()=>{G(h,k.First,{skipElements:[b.relatedTarget]})},[A.Backwards]:()=>{G(h,k.Last,{skipElements:[b.relatedTarget]})}})})}),x=Ze(),y=i.useRef(!1),$={ref:r,onKeyDown(b){b.key=="Tab"&&(y.current=!0,x.requestAnimationFrame(()=>{y.current=!1}))},onBlur(b){let h=Ce(a);n.current instanceof HTMLElement&&h.add(n.current);let P=b.relatedTarget;P instanceof HTMLElement&&P.dataset.headlessuiFocusGuard!=="true"&&(De(h,P)||(y.current?G(n.current,I(c.current,{[A.Forwards]:()=>k.Next,[A.Backwards]:()=>k.Previous})|k.WrapAround,{relativeTo:b.target}):b.target instanceof HTMLElement&&F(b.target)))}};return m.createElement(m.Fragment,null,!!(s&4)&&m.createElement(te,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:ne.Focusable}),D({ourProps:$,theirProps:l,defaultTag:ut,name:"FocusTrap"}),!!(s&4)&&m.createElement(te,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:ne.Focusable}))}let dt=C(ct),M=Object.assign(dt,{features:Se});function ft(e=!0){let t=i.useRef(J.slice());return ue(([n],[r])=>{r===!0&&n===!1&&se(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=J.slice())},[e,J,t]),v(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function pt({ownerDocument:e},t){let n=ft(t);ue(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&F(n())},[t]),Te(()=>{t&&F(n())})}function mt({ownerDocument:e,container:t,initialFocus:n},r){let o=i.useRef(null),a=Ee();return ue(()=>{if(!r)return;let s=t.current;s&&se(()=>{if(!a.current)return;let l=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===l){o.current=l;return}}else if(s.contains(l)){o.current=l;return}n!=null&&n.current?F(n.current):G(s,k.First)===rt.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[r]),o}function gt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let a=Ee();$e(e==null?void 0:e.defaultView,"focus",s=>{if(!o||!a.current)return;let l=Ce(n);t.current instanceof HTMLElement&&l.add(t.current);let u=r.current;if(!u)return;let p=s.target;p&&p instanceof HTMLElement?De(l,p)?(r.current=p,F(p)):(s.preventDefault(),s.stopPropagation(),F(u)):F(r.current)},!0)}function De(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Pe=i.createContext(!1);function ht(){return i.useContext(Pe)}function re(e){return m.createElement(Pe.Provider,{value:e.force},e.children)}function vt(e){let t=ht(),n=i.useContext(Re),r=B(e),[o,a]=i.useState(()=>{if(!t&&n!==null||be.isServer)return null;let s=r==null?void 0:r.getElementById("headlessui-portal-root");if(s)return s;if(r===null)return null;let l=r.createElement("div");return l.setAttribute("id","headlessui-portal-root"),r.body.appendChild(l)});return i.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),i.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),o}let yt=i.Fragment;function wt(e,t){let n=e,r=i.useRef(null),o=S(et(c=>{r.current=c}),t),a=B(r),s=vt(r),[l]=i.useState(()=>{var c;return be.isServer?null:(c=a==null?void 0:a.createElement("div"))!=null?c:null}),u=i.useContext(oe),p=ie();return N(()=>{!s||!l||s.contains(l)||(l.setAttribute("data-headlessui-portal",""),s.appendChild(l))},[s,l]),N(()=>{if(l&&u)return u.register(l)},[u,l]),Te(()=>{var c;!s||!l||(l instanceof Node&&s.contains(l)&&s.removeChild(l),s.childNodes.length<=0&&((c=s.parentElement)==null||c.removeChild(s)))}),p?!s||!l?null:Ge.createPortal(D({ourProps:{ref:o},theirProps:n,defaultTag:yt,name:"Portal"}),l):null}let Et=i.Fragment,Re=i.createContext(null);function bt(e,t){let{target:n,...r}=e,o={ref:S(t)};return m.createElement(Re.Provider,{value:n},D({ourProps:o,theirProps:r,defaultTag:Et,name:"Popover.Group"}))}let oe=i.createContext(null);function xt(){let e=i.useContext(oe),t=i.useRef([]),n=v(a=>(t.current.push(a),e&&e.register(a),()=>r(a))),r=v(a=>{let s=t.current.indexOf(a);s!==-1&&t.current.splice(s,1),e&&e.unregister(a)}),o=i.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,i.useMemo(()=>function({children:a}){return m.createElement(oe.Provider,{value:o},a)},[o])]}let $t=C(wt),Tt=C(bt),le=Object.assign($t,{Group:Tt});function Ct(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const St=typeof Object.is=="function"?Object.is:Ct,{useState:Dt,useEffect:Pt,useLayoutEffect:Rt,useDebugValue:Ft}=ee;function Lt(e,t,n){const r=t(),[{inst:o},a]=Dt({inst:{value:r,getSnapshot:t}});return Rt(()=>{o.value=r,o.getSnapshot=t,Q(o)&&a({inst:o})},[e,r,t]),Pt(()=>(Q(o)&&a({inst:o}),e(()=>{Q(o)&&a({inst:o})})),[e]),Ft(r),r}function Q(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!St(n,r)}catch{return!0}}function kt(e,t,n){return t()}const Nt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jt=!Nt,Mt=jt?kt:Lt,Ot="useSyncExternalStore"in ee?(e=>e.useSyncExternalStore)(ee):Mt;function At(e){return Ot(e.subscribe,e.getSnapshot,e.getSnapshot)}function It(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...a){let s=t[o].call(n,...a);s&&(n=s,r.forEach(l=>l()))}}}function Bt(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,a=e-o;n.style(r,"paddingRight",`${a}px`)}}}function Ht(){return ot()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(a=>a()).some(a=>a.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let l=xe();l.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>l.dispose()))}let a=(o=window.scrollY)!=null?o:window.pageYOffset,s=null;t.addEventListener(e,"click",l=>{if(l.target instanceof HTMLElement)try{let u=l.target.closest("a");if(!u)return;let{hash:p}=new URL(u.href),c=e.querySelector(p);c&&!r(c)&&(s=c)}catch{}},!0),t.addEventListener(e,"touchstart",l=>{if(l.target instanceof HTMLElement)if(r(l.target)){let u=l.target;for(;u.parentElement&&r(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(l.target,"touchAction","none")}),t.addEventListener(e,"touchmove",l=>{if(l.target instanceof HTMLElement)if(r(l.target)){let u=l.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&l.preventDefault()}else l.preventDefault()},{passive:!1}),t.add(()=>{var l;let u=(l=window.scrollY)!=null?l:window.pageYOffset;a!==u&&window.scrollTo(0,a),s&&s.isConnected&&(s.scrollIntoView({block:"nearest"}),s=null)})})}}:{}}function Ut(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Wt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let R=It(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:xe(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Wt(n)},o=[Ht(),Bt(),Ut()];o.forEach(({before:a})=>a==null?void 0:a(r)),o.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});R.subscribe(()=>{let e=R.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&R.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&R.dispatch("TEARDOWN",n)}});function Yt(e,t,n){let r=At(R),o=e?r.get(e):void 0,a=o?o.count>0:!1;return N(()=>{if(!(!e||!t))return R.dispatch("PUSH",e,n),()=>R.dispatch("POP",e,n)},[t,e]),a}let Z=new Map,O=new Map;function ve(e,t=!0){N(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function o(){var s;if(!r)return;let l=(s=O.get(r))!=null?s:1;if(l===1?O.delete(r):O.set(r,l-1),l!==1)return;let u=Z.get(r);u&&(u["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",u["aria-hidden"]),r.inert=u.inert,Z.delete(r))}let a=(n=O.get(r))!=null?n:0;return O.set(r,a+1),a!==0||(Z.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),o},[e,t])}function _t({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let o=i.useRef((r=n==null?void 0:n.current)!=null?r:null),a=B(o),s=v(()=>{var l,u,p;let c=[];for(let d of e)d!==null&&(d instanceof HTMLElement?c.push(d):"current"in d&&d.current instanceof HTMLElement&&c.push(d.current));if(t!=null&&t.current)for(let d of t.current)c.push(d);for(let d of(l=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?l:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(o.current)||d.contains((p=(u=o.current)==null?void 0:u.getRootNode())==null?void 0:p.host)||c.some(x=>d.contains(x))||c.push(d));return c});return{resolveContainers:s,contains:v(l=>s().some(u=>u.contains(l))),mainTreeNodeRef:o,MainTreeNode:i.useMemo(()=>function(){return n!=null?null:m.createElement(te,{features:ne.Hidden,ref:o})},[o,n])}}let ce=i.createContext(()=>{});ce.displayName="StackContext";var ae=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ae||{});function qt(){return i.useContext(ce)}function Vt({children:e,onUpdate:t,type:n,element:r,enabled:o}){let a=qt(),s=v((...l)=>{t==null||t(...l),a(...l)});return N(()=>{let l=o===void 0||o===!0;return l&&s(0,n,r),()=>{l&&s(1,n,r)}},[s,n,r,o]),m.createElement(ce.Provider,{value:s},e)}let Fe=i.createContext(null);function Le(){let e=i.useContext(Fe);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Le),t}return e}function Gt(){let[e,t]=i.useState([]);return[e.length>0?e.join(" "):void 0,i.useMemo(()=>function(n){let r=v(a=>(t(s=>[...s,a]),()=>t(s=>{let l=s.slice(),u=l.indexOf(a);return u!==-1&&l.splice(u,1),l}))),o=i.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return m.createElement(Fe.Provider,{value:o},n.children)},[t])]}let zt="p";function Kt(e,t){let n=j(),{id:r=`headlessui-description-${n}`,...o}=e,a=Le(),s=S(t);N(()=>a.register(r),[r,a.register]);let l={ref:s,...a.props,id:r};return D({ourProps:l,theirProps:o,slot:a.slot||{},defaultTag:zt,name:a.name||"Description"})}let Xt=C(Kt),Jt=Object.assign(Xt,{});var Qt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Qt||{}),Zt=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Zt||{});let en={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},z=i.createContext(null);z.displayName="DialogContext";function H(e){let t=i.useContext(z);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,H),n}return t}function tn(e,t,n=()=>[document.body]){Yt(e,t,r=>{var o;return{containers:[...(o=r.containers)!=null?o:[],n]}})}function nn(e,t){return I(t.type,en,e,t)}let rn="div",on=he.RenderStrategy|he.Static;function ln(e,t){let n=j(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:a,initialFocus:s,role:l="dialog",__demoMode:u=!1,...p}=e,[c,d]=i.useState(0),x=i.useRef(!1);l=function(){return l==="dialog"||l==="alertdialog"?l:(x.current||(x.current=!0,console.warn(`Invalid role [${l}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let y=tt();o===void 0&&y!==null&&(o=(y&V.Open)===V.Open);let $=i.useRef(null),b=S($,t),h=B($),P=e.hasOwnProperty("open")||y!==null,de=e.hasOwnProperty("onClose");if(!P&&!de)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!P)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!de)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let w=o?0:1,[U,ke]=i.useReducer(nn,{titleId:null,descriptionId:null,panelRef:i.createRef()}),L=v(()=>a(!1)),fe=v(g=>ke({type:0,id:g})),W=ie()?u?!1:w===0:!1,Y=c>1,pe=i.useContext(z)!==null,[Ne,je]=xt(),Me={get current(){var g;return(g=U.panelRef.current)!=null?g:$.current}},{resolveContainers:K,mainTreeNodeRef:_,MainTreeNode:Oe}=_t({portals:Ne,defaultContainers:[Me]}),Ae=Y?"parent":"leaf",me=y!==null?(y&V.Closing)===V.Closing:!1,Ie=pe||me?!1:W,Be=i.useCallback(()=>{var g,T;return(T=Array.from((g=h==null?void 0:h.querySelectorAll("body > *"))!=null?g:[]).find(E=>E.id==="headlessui-portal-root"?!1:E.contains(_.current)&&E instanceof HTMLElement))!=null?T:null},[_]);ve(Be,Ie);let He=Y?!0:W,Ue=i.useCallback(()=>{var g,T;return(T=Array.from((g=h==null?void 0:h.querySelectorAll("[data-headlessui-portal]"))!=null?g:[]).find(E=>E.contains(_.current)&&E instanceof HTMLElement))!=null?T:null},[_]);ve(Ue,He),lt(K,L,!(!W||Y));let We=!(Y||w!==0);$e(h==null?void 0:h.defaultView,"keydown",g=>{We&&(g.defaultPrevented||g.key===at.Escape&&(g.preventDefault(),g.stopPropagation(),L()))}),tn(h,!(me||w!==0||pe),K),i.useEffect(()=>{if(w!==0||!$.current)return;let g=new ResizeObserver(T=>{for(let E of T){let q=E.target.getBoundingClientRect();q.x===0&&q.y===0&&q.width===0&&q.height===0&&L()}});return g.observe($.current),()=>g.disconnect()},[w,$,L]);let[Ye,_e]=Gt(),qe=i.useMemo(()=>[{dialogState:w,close:L,setTitleId:fe},U],[w,U,L,fe]),ge=i.useMemo(()=>({open:w===0}),[w]),Ve={ref:b,id:r,role:l,"aria-modal":w===0?!0:void 0,"aria-labelledby":U.titleId,"aria-describedby":Ye};return m.createElement(Vt,{type:"Dialog",enabled:w===0,element:$,onUpdate:v((g,T)=>{T==="Dialog"&&I(g,{[ae.Add]:()=>d(E=>E+1),[ae.Remove]:()=>d(E=>E-1)})})},m.createElement(re,{force:!0},m.createElement(le,null,m.createElement(z.Provider,{value:qe},m.createElement(le.Group,{target:$},m.createElement(re,{force:!1},m.createElement(_e,{slot:ge,name:"Dialog.Description"},m.createElement(M,{initialFocus:s,containers:K,features:W?I(Ae,{parent:M.features.RestoreFocus,leaf:M.features.All&~M.features.FocusLock}):M.features.None},m.createElement(je,null,D({ourProps:Ve,theirProps:p,slot:ge,defaultTag:rn,features:on,visible:w===0,name:"Dialog"}))))))))),m.createElement(Oe,null))}let an="div";function sn(e,t){let n=j(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:a,close:s}]=H("Dialog.Overlay"),l=S(t),u=v(c=>{if(c.target===c.currentTarget){if(st(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),s()}}),p=i.useMemo(()=>({open:a===0}),[a]);return D({ourProps:{ref:l,id:r,"aria-hidden":!0,onClick:u},theirProps:o,slot:p,defaultTag:an,name:"Dialog.Overlay"})}let un="div";function cn(e,t){let n=j(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:a},s]=H("Dialog.Backdrop"),l=S(t);i.useEffect(()=>{if(s.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[s.panelRef]);let u=i.useMemo(()=>({open:a===0}),[a]);return m.createElement(re,{force:!0},m.createElement(le,null,D({ourProps:{ref:l,id:r,"aria-hidden":!0},theirProps:o,slot:u,defaultTag:un,name:"Dialog.Backdrop"})))}let dn="div";function fn(e,t){let n=j(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:a},s]=H("Dialog.Panel"),l=S(t,s.panelRef),u=i.useMemo(()=>({open:a===0}),[a]),p=v(c=>{c.stopPropagation()});return D({ourProps:{ref:l,id:r,onClick:p},theirProps:o,slot:u,defaultTag:dn,name:"Dialog.Panel"})}let pn="h2";function mn(e,t){let n=j(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:a,setTitleId:s}]=H("Dialog.Title"),l=S(t);i.useEffect(()=>(s(r),()=>s(null)),[r,s]);let u=i.useMemo(()=>({open:a===0}),[a]);return D({ourProps:{ref:l,id:r},theirProps:o,slot:u,defaultTag:pn,name:"Dialog.Title"})}let gn=C(ln),hn=C(cn),vn=C(fn),yn=C(sn),wn=C(mn),ye=Object.assign(gn,{Backdrop:hn,Panel:vn,Overlay:yn,Title:wn,Description:Jt});function we({className:e="",disabled:t,children:n,...r}){return f.jsx("button",{...r,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function En({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const a=()=>{r&&o()},s={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return f.jsx(X,{show:t,as:i.Fragment,leave:"duration-200",children:f.jsxs(ye,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:a,children:[f.jsx(X.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:f.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),f.jsx(X.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:f.jsx(ye.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${s}`,children:e})})]})})}function bn({type:e="button",className:t="",disabled:n,children:r,...o}){return f.jsx("button",{...o,type:e,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function Ln({className:e=""}){const[t,n]=i.useState(!1),r=i.useRef(),{data:o,setData:a,delete:s,processing:l,reset:u,errors:p}=ze({password:""}),c=()=>{n(!0)},d=y=>{y.preventDefault(),s(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>x(),onError:()=>r.current.focus(),onFinish:()=>u()})},x=()=>{n(!1),u()};return f.jsxs("section",{className:`space-y-6 ${e}`,children:[f.jsxs("header",{children:[f.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),f.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),f.jsx(we,{onClick:c,children:"Delete Account"}),f.jsx(En,{show:t,onClose:x,children:f.jsxs("form",{onSubmit:d,className:"p-6",children:[f.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),f.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),f.jsxs("div",{className:"mt-6",children:[f.jsx(Je,{htmlFor:"password",value:"Password",className:"sr-only"}),f.jsx(Ke,{id:"password",type:"password",name:"password",ref:r,value:o.password,onChange:y=>a("password",y.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),f.jsx(Xe,{message:p.password,className:"mt-2"})]}),f.jsxs("div",{className:"mt-6 flex justify-end",children:[f.jsx(bn,{onClick:x,children:"Cancel"}),f.jsx(we,{className:"ms-3",disabled:l,children:"Delete Account"})]})]})})]})}export{Ln as default};