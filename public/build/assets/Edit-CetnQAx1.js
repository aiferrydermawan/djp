import{r as i,j as e,a as k,d as b,y as v}from"./app-gDpkVdDz.js";import{A as f}from"./AuthenticatedLayout-KkOJKzlz.js";import{I as j}from"./Input-xQ6ELg0X.js";import{L as r,V as l}from"./Validation-BcU4NbHi.js";import{S as N}from"./Select-DtOH1ZX9.js";import"./bootstrap-DV31Mhsh.js";/* empty css            */function A(t){const s=t.errors,m=t.jenis_ketetapan_all,n=t.jenis_pajak,[d,x]=i.useState(n.jenis_ketetapan_id),[o,p]=i.useState(n.kode),[c,h]=i.useState(n.nama),u=async a=>{a.preventDefault(),v.put(route("jenis-pajak.update",n.id),{jenis_ketetapan:d,kode:o,nama:c})};return e.jsxs(e.Fragment,{children:[e.jsx(k,{title:"Edit Jenis Pajak"}),e.jsx(f,{children:e.jsxs("div",{className:"p-5",children:[e.jsx("div",{className:"breadcrumbs text-sm",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(b,{href:route("jenis-pajak.index"),children:"Jenis Pajak"})}),e.jsx("li",{children:"Edit"})]})}),e.jsx("div",{className:"card mt-5 bg-base-100 shadow",children:e.jsx("div",{className:"card-body",children:e.jsxs("form",{onSubmit:u,children:[e.jsxs("label",{className:"form-control",children:[e.jsx(r,{name:"Jenis Ketetapan"}),e.jsxs(N,{value:d,onChange:a=>x(a.target.value),placeholder:"Type Here",children:[e.jsx("option",{value:"",children:"Pilih 1"}),m.map((a,g)=>e.jsx("option",{value:a.id,children:a.nama},a.id))]}),s.jenis_ketetapan&&e.jsx(l,{children:s.jenis_ketetapan})]}),e.jsxs("label",{className:"form-control",children:[e.jsx(r,{name:"Kode"}),e.jsx(j,{value:o,onChange:a=>p(a.target.value),placeholder:"Type Here"}),s.kode&&e.jsx(l,{children:s.kode})]}),e.jsxs("label",{className:"form-control",children:[e.jsx(r,{name:"Nama"}),e.jsx(j,{value:c,onChange:a=>h(a.target.value),placeholder:"Type Here"}),s.nama&&e.jsx(l,{children:s.nama})]}),e.jsx("div",{className:"mt-4",children:e.jsx("button",{type:"submit",className:"btn btn-warning",children:"Edit"})})]})})})]})})]})}export{A as default};