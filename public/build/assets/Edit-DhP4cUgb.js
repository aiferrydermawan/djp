import{r as p,j as e,a as x,y as h}from"./app-DG7v06VC.js";import{A as k}from"./AuthenticatedLayout-kNOa4Uno.js";import{L as l,V as n}from"./Validation-8u4um2o9.js";import{N as g}from"./NPWPInput-DMfpDsax.js";import{I as r}from"./Input-DcgijFoS.js";import"./bootstrap-DV31Mhsh.js";/* empty css            */function A({errors:a,permintaan:s}){const[d,u]=p.useState(s.npwp),[t,c]=p.useState({nomor_urut:s.nomor_urut,nomor_surat_pp:s.nomor_surat_pp,tgl_surat_pp:s.tgl_surat_pp,tgl_resi_pp:s.tgl_resi_pp,tgl_diterima_kanwil:s.tgl_diterima_kanwil,nomor_sengketa:s.nomor_sengketa,jenis_sengketa:s.jenis_sengketa,nomor_surat_ke_dkb:s.surat_jawaban?s.surat_jawaban.nomor_surat_ke_dkb:"",tgl_surat_ke_dkb:s.surat_jawaban?s.surat_jawaban.tgl_surat_ke_dkb:"",nomor_surat_ke_pp:s.surat_jawaban?s.surat_jawaban.nomor_surat_ke_pp:"",tgl_surat_ke_pp:s.surat_jawaban?s.surat_jawaban.tgl_surat_ke_pp:""}),_=o=>{const{name:i,value:j}=o.target;c({...t,[i]:j})},m=async o=>{o.preventDefault(),h.put(route("surat-jawaban.update",s.id),{nomor_surat_ke_dkb:t.nomor_surat_ke_dkb,tgl_surat_ke_dkb:t.tgl_surat_ke_dkb,nomor_surat_ke_pp:t.nomor_surat_ke_pp,tgl_surat_ke_pp:t.tgl_surat_ke_pp})};return e.jsxs(k,{children:[e.jsx(x,{children:e.jsx("title",{children:"Surat Jawaban"})}),e.jsxs("div",{className:"p-5",children:[e.jsx("div",{className:"breadcrumbs text-sm",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:route("surat-jawaban"),children:"Surat Jawaban"})}),e.jsx("li",{children:"Edit"})]})}),e.jsx("div",{className:"card mt-5 bg-base-100 shadow",children:e.jsx("div",{className:"card-body",children:e.jsxs("form",{onSubmit:m,children:[e.jsxs("div",{className:"grid grid-cols-2 gap-5",children:[e.jsxs("label",{className:"form-control col-span-1",children:[e.jsx(l,{name:"NOMOR URUT"}),e.jsx(r,{type:"text",name:"nomor_urut",placeholder:"Type Here",value:t.nomor_urut,onChange:_,disabled:!0}),a.nomor_urut&&e.jsx(n,{children:a.nomor_urut})]}),e.jsxs("label",{className:"form-control col-span-1",children:[e.jsx(l,{name:"NOMOR SURAT PP"}),e.jsx(r,{type:"text",name:"nomor_surat_pp",placeholder:"Type Here",value:t.nomor_surat_pp,onChange:_,disabled:!0}),a.nomor_surat_pp&&e.jsx(n,{children:a.nomor_surat_pp})]}),e.jsxs("label",{className:"form-control col-span-1",children:[e.jsx(l,{name:"TGL SURAT PP"}),e.jsx(r,{type:"date",name:"tgl_surat_pp",placeholder:"Type Here",value:t.tgl_surat_pp,onChange:_,disabled:!0}),a.tgl_surat_pp&&e.jsx(n,{children:a.tgl_surat_pput})]}),e.jsxs("label",{className:"form-control col-span-1",children:[e.jsx(l,{name:"TGL RESI PP"}),e.jsx(r,{type:"date",name:"tgl_resi_pp",placeholder:"Type Here",value:t.tgl_resi_pp,onChange:_,disabled:!0}),a.tgl_resi_pp&&e.jsx(n,{children:a.tgl_resi_pprut})]}),e.jsxs("label",{className:"form-control col-span-1",children:[e.jsx(l,{name:"TGL DITERIMA KANWIL"}),e.jsx(r,{type:"date",name:"tgl_diterima_kanwil",placeholder:"Type Here",value:t.tgl_diterima_kanwil,onChange:_,disabled:!0}),a.tgl_diterima_kanwil&&e.jsx(n,{children:a.tgl_diterima_kanwil})]}),e.jsx("div",{}),e.jsxs("label",{className:"form-control col-span-1",children:[e.jsx(l,{name:"NOMOR SENGKETA"}),e.jsx(r,{type:"text",name:"nomor_sengketa",placeholder:"Type Here",value:t.nomor_sengketa,onChange:_,disabled:!0}),a.nomor_sengketa&&e.jsx(n,{children:a.nomor_sengketa})]}),e.jsxs("label",{className:"form-control col-span-1",children:[e.jsx(l,{name:"JENIS SENGKETA"}),e.jsx(r,{type:"text",name:"jenis_sengketa",placeholder:"Type Here",value:t.jenis_sengketa,onChange:_,disabled:!0}),a.jenis_sengketa&&e.jsx(n,{children:a.jenis_sengketa})]}),e.jsxs("label",{className:"form-control col-span-1",children:[e.jsx(l,{name:"NPWP"}),e.jsx(g,{value:d,onChange:o=>u(o),disabled:!0}),a.npwp&&e.jsx(n,{children:errorsnpwpnomor_urut})]}),e.jsxs("label",{className:"form-control col-span-1",children:[e.jsx(l,{name:"NAMA WAJIB PAJAK"}),e.jsx(r,{type:"text",name:"nama_wajib_pajak",placeholder:"Type Here",value:t.nama_wajib_pajak,onChange:_,disabled:!0}),a.nama_wajib_pajak&&e.jsx(n,{children:a.nama_wajib_pajak})]}),e.jsxs("label",{className:"form-control col-span-1",children:[e.jsx(l,{name:"NOMOR SURAT KE DKB"}),e.jsx(r,{type:"text",name:"nomor_surat_ke_dkb",placeholder:"Type Here",value:t.nomor_surat_ke_dkb,onChange:_}),a.nomor_surat_ke_dkb&&e.jsx(n,{children:a.nomor_surat_ke_dkb})]}),e.jsxs("label",{className:"form-control col-span-1",children:[e.jsx(l,{name:"TGL SURAT KE DKB"}),e.jsx(r,{type:"date",name:"tgl_surat_ke_dkb",placeholder:"Type Here",value:t.tgl_surat_ke_dkb,onChange:_}),a.tgl_surat_ke_dkb&&e.jsx(n,{children:a.tgl_surat_ke_dkb})]}),e.jsxs("label",{className:"form-control col-span-1",children:[e.jsx(l,{name:"NOMOR SURAT KE PP"}),e.jsx(r,{type:"text",name:"nomor_surat_ke_pp",placeholder:"Type Here",value:t.nomor_surat_ke_pp,onChange:_}),a.nomor_surat_ke_pp&&e.jsx(n,{children:a.nomor_surat_ke_pp})]}),e.jsxs("label",{className:"form-control col-span-1",children:[e.jsx(l,{name:"TGL SURAT KE PP"}),e.jsx(r,{type:"date",name:"tgl_surat_ke_pp",placeholder:"Type Here",value:t.tgl_surat_ke_pp,onChange:_}),a.tgl_surat_ke_pp&&e.jsx(n,{children:a.tgl_surat_ke_pp})]})]}),e.jsx("div",{className:"mt-5",children:e.jsx("button",{type:"submit",className:"btn btn-warning",children:"Edit"})})]})})})]})]})}export{A as default};