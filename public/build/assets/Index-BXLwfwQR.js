import{j as e,a as h,d as t,y as j}from"./app-BET5ui4t.js";import{A as m}from"./AuthenticatedLayout-CP5STAM9.js";import{I as o}from"./Input-WVdirFem.js";import"./bootstrap-DV31Mhsh.js";/* empty css            */function v(r){const{data:d,links:i,from:l,total:n,per_page:c}=r.users,x=async s=>{j.delete(route("pegawai.destroy",{id:s}))};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Pegawai"}),e.jsx(m,{children:e.jsxs("div",{className:"p-5",children:[e.jsx("div",{className:"breadcrumbs text-sm",children:e.jsx("ul",{children:e.jsx("li",{children:"Pegawai"})})}),e.jsxs("div",{className:"mt-5 flex justify-between",children:[e.jsx("div",{children:e.jsx(o,{className:"w-full max-w-xs",placeholder:"Cari"})}),e.jsx("div",{children:e.jsx(t,{className:"btn btn-primary",href:route("pegawai.create"),children:"Buat"})})]}),e.jsx("div",{className:"card mt-5 bg-base-100 shadow",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("table",{className:"table table-xs",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"No"}),e.jsx("th",{children:"Nama Lengkap"}),e.jsx("th",{children:"Email"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:d.map((s,a)=>e.jsxs("tr",{children:[e.jsx("td",{children:l+a}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.detail.ip}),e.jsxs("td",{children:[e.jsx(t,{className:"btn btn-warning btn-xs mr-1",href:route("pegawai.edit",{id:s.id}),children:"Edit"}),e.jsx("button",{onClick:()=>x(s.id),className:"btn btn-error btn-xs",children:"Delete"})]})]},s.id))})]}),c<n?e.jsx("div",{className:"join mt-5",children:i.map((s,a)=>s.url&&e.jsx(t,{className:`btn join-item ${s.active?"btn-active":null}`,href:s.url,disabled:s.active,children:s.label},a))}):null]})})]})})]})}export{v as default};