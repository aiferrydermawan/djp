import{r as o,j as a,a as F,y as H}from"./app-BMv87VXb.js";import{A as W}from"./AuthenticatedLayout-DR8Nw1uz.js";import{L as s,V as l}from"./Validation-DVxWKvoX.js";import{N as Y}from"./NPWPInput-CTx4SQ3b.js";import{I as i}from"./Input-CdrWFdVc.js";import{S as J}from"./Select-OcIfu3ej.js";import{D as _}from"./index-DkPj88go.js";import"./bootstrap-DV31Mhsh.js";/* empty css            */function na({errors:e,pk_all:T}){const[b,k]=o.useState(""),[c,S]=o.useState(""),[p,A]=o.useState(""),[d,f]=o.useState(""),[u,G]=o.useState(""),[m,w]=o.useState(""),[j,C]=o.useState(""),[x,P]=o.useState(""),[h,M]=o.useState(""),[y,D]=o.useState(""),[t,v]=o.useState({nomor_surat_pp:"",nomor_sengketa:"",jenis_sengketa:"",nama_wajib_pajak:"",nomor_surat_banding_gugatan_wp:"",nomor_kep_surat_yang_di_banding_gugat:"",no_surat_tugas:"",no_matriks:"",no_surat_tugas_pengganti:"",pk:""}),g=n=>{const{name:r,value:N}=n.target;v({...t,[r]:N})},I=async n=>{n.preventDefault();const r=c?c.toLocaleDateString("en-CA"):null,N=p?p.toLocaleDateString("en-CA"):null,R=d?d.toLocaleDateString("en-CA"):null,L=u?u.toLocaleDateString("en-CA"):null,U=m?m.toLocaleDateString("en-CA"):null,E=j?j.toLocaleDateString("en-CA"):null,K=x?x.toLocaleDateString("en-CA"):null,B=h?h.toLocaleDateString("en-CA"):null,O=y?y.toLocaleDateString("en-CA"):null;H.post(route("input-permintaan.store"),{nomor_surat_pp:t.nomor_surat_pp,tgl_surat_pp:r,tgl_resi_pp:N,tgl_diterima_kanwil:R,nomor_sengketa:t.nomor_sengketa,jenis_sengketa:t.jenis_sengketa,npwp:b,nama_wajib_pajak:t.nama_wajib_pajak,nomor_surat_banding_gugatan_wp:t.nomor_surat_banding_gugatan_wp,tgl_surat_banding_gugatan:L,tgl_diterima_pp:U,nomor_kep_surat_yang_di_banding_gugat:t.nomor_kep_surat_yang_di_banding_gugat,tgl_kep_surat_yang_di_banding_gugat:E,no_surat_tugas:t.no_surat_tugas,tgl_surat_tugas:K,no_matriks:t.no_matriks,tgl_matriks:B,no_surat_tugas_pengganti:t.no_surat_tugas_pengganti,tgl_surat_tugas_pengganti:O,pk:t.pk})};return a.jsxs(W,{children:[a.jsx(F,{children:a.jsx("title",{children:"Input Permintaan"})}),a.jsxs("div",{className:"p-5",children:[a.jsx("div",{className:"breadcrumbs text-sm",children:a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:route("input-permintaan"),children:"Input Permintaan"})}),a.jsx("li",{children:"Buat"})]})}),a.jsx("div",{className:"card mt-5 bg-base-100 shadow",children:a.jsx("div",{className:"card-body",children:a.jsxs("form",{onSubmit:I,children:[a.jsxs("div",{className:"grid grid-cols-2 gap-5",children:[a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(s,{name:"NOMOR SURAT PP"}),a.jsx(i,{type:"text",name:"nomor_surat_pp",placeholder:"Type Here",value:t.nomor_surat_pp,onChange:g}),e.nomor_surat_pp&&a.jsx(l,{children:e.nomor_surat_pp})]}),a.jsx("div",{className:"col-span-1"}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(s,{name:"TGL SURAT PP"}),a.jsx(_,{placeholderText:"kosong",className:"input input-bordered w-full",selected:c,onChange:n=>S(n),dateFormat:"dd-MM-yyyy"}),e.tgl_surat_pp&&a.jsx(l,{children:e.tgl_surat_pput})]}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(s,{name:"TGL RESI PP"}),a.jsx(_,{placeholderText:"kosong",className:"input input-bordered w-full",selected:p,onChange:n=>A(n),dateFormat:"dd-MM-yyyy"}),e.tgl_resi_pp&&a.jsx(l,{children:e.tgl_resi_pprut})]}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(s,{name:"TGL DITERIMA KANWIL"}),a.jsx(_,{placeholderText:"kosong",className:"input input-bordered w-full",selected:d,onChange:n=>f(n),dateFormat:"dd-MM-yyyy"}),e.tgl_diterima_kanwil&&a.jsx(l,{children:e.tgl_diterima_kanwil})]}),a.jsx("div",{}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(s,{name:"NOMOR SENGKETA"}),a.jsx(i,{type:"text",name:"nomor_sengketa",placeholder:"Type Here",value:t.nomor_sengketa,onChange:g}),e.nomor_sengketa&&a.jsx(l,{children:e.nomor_sengketa})]}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(s,{name:"JENIS SENGKETA"}),a.jsx(i,{type:"text",name:"jenis_sengketa",placeholder:"Type Here",value:t.jenis_sengketa,onChange:g}),e.jenis_sengketa&&a.jsx(l,{children:e.jenis_sengketa})]}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(s,{name:"NPWP"}),a.jsx(Y,{value:b,onChange:n=>k(n)}),e.npwp&&a.jsx(l,{children:e.npwp})]}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(s,{name:"NAMA WAJIB PAJAK"}),a.jsx(i,{type:"text",name:"nama_wajib_pajak",placeholder:"Type Here",value:t.nama_wajib_pajak,onChange:g}),e.nama_wajib_pajak&&a.jsx(l,{children:e.nama_wajib_pajak})]}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(s,{name:"NOMOR SURAT BANDING/GUGATAN WP"}),a.jsx(i,{type:"text",name:"nomor_surat_banding_gugatan_wp",placeholder:"Type Here",value:t.nomor_surat_banding_gugatan_wp,onChange:g}),e.nomor_surat_banding_gugatan_wp&&a.jsx(l,{children:e.nomor_surat_banding_gugatan_wp})]}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(s,{name:"TGL SURAT BANDING/GUGATAN"}),a.jsx(_,{placeholderText:"kosong",className:"input input-bordered w-full",selected:u,onChange:n=>G(n),dateFormat:"dd-MM-yyyy"}),e.tgl_surat_banding_gugatan&&a.jsx(l,{children:e.tgl_surat_banding_gugatan})]}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(s,{name:"TGL DITERIMA PP"}),a.jsx(_,{placeholderText:"kosong",className:"input input-bordered w-full",selected:m,onChange:n=>w(n),dateFormat:"dd-MM-yyyy"}),e.tgl_diterima_pp&&a.jsx(l,{children:e.tgl_diterima_pp})]}),a.jsx("div",{}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(s,{name:"NOMOR KEP/SURAT YANG DI BANDING/GUGAT"}),a.jsx(i,{type:"text",name:"nomor_kep_surat_yang_di_banding_gugat",placeholder:"Type Here",value:t.nomor_kep_surat_yang_di_banding_gugat,onChange:g}),e.nomor_kep_surat_yang_di_banding_gugat&&a.jsx(l,{children:e.nomor_kep_surat_yang_di_banding_gugat})]}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(s,{name:"TGL KEP/SURAT YANG DI BANDING/GUGAT"}),a.jsx(_,{placeholderText:"kosong",className:"input input-bordered w-full",selected:j,onChange:n=>C(n),dateFormat:"dd-MM-yyyy"}),e.tgl_kep_surat_yang_di_banding_gugat&&a.jsx(l,{children:e.tgl_kep_surat_yang_di_banding_gugat})]}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(s,{name:"NO SURAT TUGAS"}),a.jsx(i,{type:"text",name:"no_surat_tugas",placeholder:"Type Here",value:t.no_surat_tugas,onChange:g}),e.no_surat_tugas&&a.jsx(l,{children:e.no_surat_tugas})]}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(s,{name:"TGL SURAT TUGAS"}),a.jsx(_,{placeholderText:"kosong",className:"input input-bordered w-full",selected:x,onChange:n=>P(n),dateFormat:"dd-MM-yyyy"}),e.tgl_surat_tugas&&a.jsx(l,{children:e.tgl_surat_tugas})]}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(s,{name:"NO MATRIKS"}),a.jsx(i,{type:"text",name:"no_matriks",placeholder:"Type Here",value:t.no_matriks,onChange:g}),e.no_matriks&&a.jsx(l,{children:e.no_matriks})]}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(s,{name:"TGL MATRIKS"}),a.jsx(_,{placeholderText:"kosong",className:"input input-bordered w-full",selected:h,onChange:n=>M(n),dateFormat:"dd-MM-yyyy"}),e.tgl_matriks&&a.jsx(l,{children:e.tgl_matriks})]}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(s,{name:"NO SURAT TUGAS PENGGANTI"}),a.jsx(i,{type:"text",name:"no_surat_tugas_pengganti",placeholder:"Type Here",value:t.no_surat_tugas_pengganti,onChange:g}),e.no_surat_tugas_pengganti&&a.jsx(l,{children:e.no_surat_tugas_pengganti})]}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(s,{name:"TGL SURAT TUGAS PENGGANTI"}),a.jsx(_,{placeholderText:"kosong",className:"input input-bordered w-full",selected:y,onChange:n=>D(n),dateFormat:"dd-MM-yyyy"}),e.tgl_surat_tugas_pengganti&&a.jsx(l,{children:e.tgl_surat_tugas_pengganti})]}),a.jsxs("label",{className:"form-control",children:[a.jsx(s,{name:"Nama PK"}),a.jsxs(J,{name:"pk",placeholder:"Type Here",value:t.pk,onChange:g,children:[a.jsx("option",{value:"",children:"Pilih 1"}),T.map((n,r)=>a.jsx("option",{value:n.id,children:n.name},r))]}),e.pk&&a.jsx(l,{children:e.pk})]})]}),a.jsx("div",{className:"mt-5",children:a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Buat"})})]})})})]})]})}export{na as default};