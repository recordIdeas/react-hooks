import{r,j as e,C as f}from"./index-CBUAL_Sk.js";import{C as g}from"./row-6I5UDcT-.js";import{t as h,C as p}from"./index-R9XYaUg3.js";import{F as m}from"./index-DF03DMTT.js";import{I as d}from"./index-sYPxD2e9.js";import{S as v}from"./index-sLq5KEQC.js";import{B as k}from"./button-DmeZGmee.js";import"./index-BCjnTuH3.js";import"./useLocale-DcSCGN72.js";const o=r.createContext(null),c=r.createContext(null);function Y(){const[t,n]=r.useState(!1);return e.jsxs(P,{theme:t,children:[e.jsx(g,{checked:t,onChange:s=>{n(s.target.checked)},children:" Use dark mode"}),e.jsx(U,{})]})}function P({children:t,theme:n}){const[s,a]=r.useState(null);return e.jsx(c.Provider,{value:n,children:e.jsx(o.Provider,{value:{currentUser:s,setCurrentUser:a},children:t})})}function U(){const{currentUser:t}=r.useContext(o);return e.jsx(N,{title:"welcome",children:t!==null?e.jsx(b,{}):e.jsx(F,{})})}function N({title:t,children:n}){const s=r.useContext(c);return e.jsx(f,{theme:{algorithm:s?h.darkAlgorithm:h.defaultAlgorithm},children:e.jsx(p,{title:e.jsx("h2",{children:t}),children:n})})}function b(){const{currentUser:t}=r.useContext(o);return e.jsxs("p",{children:["You logged in as ",t.name,"."]})}function F(){const n="button-"+r.useContext(c),{currentUser:s,setCurrentUser:a}=r.useContext(o),[i,j]=r.useState(""),[l,C]=r.useState(""),x=i.trim()!==""&&l.trim()!=="";return s!==null?e.jsxs("p",{children:["You logged in as ",s.name,"."]}):e.jsxs(m,{children:[e.jsx(m.Item,{label:"First name",name:"firstName",value:i,onChange:u=>j(u.target.value),rules:[{required:!0,message:"Please input your first name!"}],children:e.jsx(d,{})}),e.jsx(m.Item,{label:"Last name",name:"lastName",value:l,onChange:u=>C(u.target.value),rules:[{required:!0,message:"Please input your last name!"}],children:e.jsx(d,{})}),e.jsxs(v,{children:[e.jsx(k,{className:n,disabled:!x,onClick:()=>{a({name:i+" "+l})},children:"login in"}),!x&&e.jsx("i",{children:"Fill in both fields."})]})]})}export{Y as default};
