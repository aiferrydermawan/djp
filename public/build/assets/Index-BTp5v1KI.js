import{j as e,a as x,d as r,y as j}from"./app-CLjUNS9c.js";import{A as o}from"./AuthenticatedLayout-Bd2_gCHZ.js";import{I as m}from"./Input-DK9lwxjU.js";import"./bootstrap-DV31Mhsh.js";/* empty css            */function v(t){const{data:n,links:l,from:d,total:i,per_page:c}=t.permohonan_all,h=async s=>{j.delete(route("jenis-permohonan.destroy",{id:s}))};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"KPP"}),e.jsx(o,{children:e.jsxs("div",{className:"p-5",children:[e.jsx("div",{className:"breadcrumbs text-sm",children:e.jsx("ul",{children:e.jsx("li",{children:"Jenis Permohonan"})})}),e.jsxs("div",{className:"mt-5 flex justify-between",children:[e.jsx("div",{children:e.jsx(m,{className:"w-full max-w-xs",placeholder:"Cari"})}),e.jsx("div",{children:e.jsx(r,{className:"btn btn-primary",href:route("jenis-permohonan.create"),children:"Buat"})})]}),e.jsx("div",{className:"card mt-5 bg-base-100 shadow",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("table",{className:"table table-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"No"}),e.jsx("th",{children:"Nama"}),e.jsx("th",{children:"IKU"}),e.jsx("th",{children:"UU"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:n.map((s,a)=>e.jsxs("tr",{children:[e.jsx("td",{children:d+a}),e.jsx("td",{children:s.nama}),e.jsx("td",{children:s.jatuh_tempo_iku}),e.jsx("td",{children:s.jatuh_tempo_uu}),e.jsxs("td",{children:[e.jsx(r,{className:"btn btn-warning btn-xs mr-1",href:route("jenis-permohonan.edit",{id:s.id}),children:"Edit"}),e.jsx("button",{onClick:()=>h(s.id),className:"btn btn-error btn-xs",children:"Delete"})]})]},s.id))})]}),c<i?e.jsx("div",{className:"join mt-5",children:l.map((s,a)=>s.url&&e.jsx(r,{className:`btn join-item ${s.active?"btn-active":null}`,href:s.url,disabled:s.active,children:s.label},a))}):null]})})]})})]})}export{v as default};