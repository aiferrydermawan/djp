import{r as m,j as e,a as d,d as x,y as h}from"./app-BEjPPcJp.js";import{A as j}from"./AuthenticatedLayout-DJtp9H3o.js";import{I as u}from"./Input-DBkf9ioI.js";import{L as p,V as f}from"./Validation-Dsvv-6Ep.js";import"./bootstrap-DV31Mhsh.js";/* empty css            */function L(s){const t=s.title,r=s.kategori,i=s.errors,n=b(t),[o,l]=m.useState(""),c=async a=>{a.preventDefault(),h.post(route("referensi.store"),{nama:o,kategori:r})};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:n}),e.jsx(j,{children:e.jsxs("div",{className:"p-5",children:[e.jsx("div",{className:"breadcrumbs text-sm",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(x,{href:route("referensi.index",{kategori:r}),children:n})}),e.jsx("li",{children:"Buat"})]})}),e.jsx("div",{className:"card mt-5 bg-base-100 shadow",children:e.jsx("div",{className:"card-body",children:e.jsxs("form",{onSubmit:c,children:[e.jsxs("label",{className:"form-control",children:[e.jsx(p,{name:"Nama"}),e.jsx(u,{onChange:a=>l(a.target.value),placeholder:"Type Here"}),i.nama&&e.jsx(f,{children:i.nama})]}),e.jsx("div",{className:"mt-4",children:e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Buat"})})]})})})]})})]})}function b(s){return s.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()).join(" ")}export{L as default};