import{r as t,j as e,a as u,d as b,y as v}from"./app-CLjUNS9c.js";import{A as f}from"./AuthenticatedLayout-Bd2_gCHZ.js";import{I as d}from"./Input-DK9lwxjU.js";import{L as n,V as r}from"./Validation-C9qN9hEz.js";import{S as N}from"./Select-DRZMYqqQ.js";import"./bootstrap-DV31Mhsh.js";/* empty css            */function A(l){const s=l.errors,m=l.jenis_ketetapan_all,[i,j]=t.useState(""),[o,x]=t.useState(""),[c,p]=t.useState(""),h=async a=>{a.preventDefault(),v.post(route("jenis-pajak.store"),{jenis_ketetapan:i,kode:o,nama:c})};return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Buat KPP"}),e.jsx(f,{children:e.jsxs("div",{className:"p-5",children:[e.jsx("div",{className:"breadcrumbs text-sm",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(b,{href:route("jenis-pajak.index"),children:"Jenis Pajak"})}),e.jsx("li",{children:"Buat"})]})}),e.jsx("div",{className:"card mt-5 bg-base-100 shadow",children:e.jsx("div",{className:"card-body",children:e.jsxs("form",{onSubmit:h,children:[e.jsxs("label",{className:"form-control",children:[e.jsx(n,{name:"Jenis Ketetapan"}),e.jsxs(N,{value:i,onChange:a=>j(a.target.value),placeholder:"Type Here",children:[e.jsx("option",{value:"",children:"Pilih 1"}),m.map((a,k)=>e.jsx("option",{value:a.id,children:a.nama},a.id))]}),s.jenis_ketetapan&&e.jsx(r,{children:s.jenis_ketetapan})]}),e.jsxs("label",{className:"form-control",children:[e.jsx(n,{name:"Kode"}),e.jsx(d,{value:o,onChange:a=>x(a.target.value),placeholder:"Type Here"}),s.kode&&e.jsx(r,{children:s.kode})]}),e.jsxs("label",{className:"form-control",children:[e.jsx(n,{name:"Nama"}),e.jsx(d,{value:c,onChange:a=>p(a.target.value),placeholder:"Type Here"}),s.nama&&e.jsx(r,{children:s.nama})]}),e.jsx("div",{className:"mt-4",children:e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Buat"})})]})})})]})})]})}export{A as default};