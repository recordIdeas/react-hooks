import{j as t,r as l,a as h}from"./main-ByAEWN6Q.js";import{B as a}from"./button-C-uZPNeR.js";import"./index-BaCJBGw4.js";function d({children:s,x:o,y:e,contentRef:n}){return t.jsx("div",{style:{position:"absolute",pointerEvents:"none",left:0,top:0,transform:`translate3d(${o}px, ${e}px, 0)`},children:t.jsx("div",{ref:n,className:"tooltip",children:s})})}function f({children:s,targetRect:o}){const e=l.useRef(null),[n,r]=l.useState(0);l.useLayoutEffect(()=>{const{height:c}=e.current.getBoundingClientRect();r(c),console.log("Measured tooltip height: "+c)},[]);let i=0,u=0;return o!==null&&(i=o.left,u=o.top-n,u<0&&(u=o.bottom)),h.createPortal(t.jsx(d,{x:i,y:u,contentRef:e,children:s}),document.body)}function p({tooltipContent:s,...o}){const[e,n]=l.useState(null),r=l.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx(a,{...o,ref:r,onPointerEnter:()=>{const i=r.current.getBoundingClientRect();n({left:i.left,top:i.top,right:i.right,bottom:i.bottom})},onPointerLeave:()=>{n(null)}}),e!==null&&t.jsx(f,{targetRect:e,children:s})]})}function b(){return t.jsxs("div",{children:[t.jsx(p,{tooltipContent:t.jsxs("div",{children:["This tooltip does not fit above the button.",t.jsx("br",{}),"This is why it's displayed below instead!"]}),children:"Hover over me (tooltip above)"}),t.jsx("div",{style:{height:50}}),t.jsx(p,{tooltipContent:t.jsx("div",{children:"This tooltip fits above the button"}),children:"Hover over me (tooltip below)"}),t.jsx("div",{style:{height:50}}),t.jsx(p,{tooltipContent:t.jsx("div",{children:"This tooltip fits above the button"}),children:"Hover over me (tooltip below)"})]})}export{b as default};
