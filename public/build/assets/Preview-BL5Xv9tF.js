import{r as s,j as a,a as T}from"./app-BMv87VXb.js";import{A as I}from"./AuthenticatedLayout-DR8Nw1uz.js";import{L as n,V as r}from"./Validation-DVxWKvoX.js";import{I as u}from"./Input-CdrWFdVc.js";import{S as p}from"./Select-OcIfu3ej.js";import{D as j}from"./index-DkPj88go.js";import{N as L}from"./NumberInput-DzsNnoXi.js";import"./bootstrap-DV31Mhsh.js";/* empty css            */function Z({errors:l,permohonan:t,amar_putusan_all:x}){const h=e=>e.toString().replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,"."),[b,C]=s.useState(t.nomor_lpad),g=t.tanggal_diterima?new Date(t.tanggal_diterima):null,[N,J]=s.useState(t.nama_wp),[K,E]=s.useState(t.npwp),[k,W]=s.useState(t.jenis_permohonan.nama),[f,F]=s.useState(t.jenis_pajak.nama),[v,G]=s.useState(t.masa_pajak),[P,R]=s.useState(t.tahun_pajak),[_,V]=s.useState(t.nomor_ketetapan),[S,i]=s.useState(""),[A,o]=s.useState(""),[M,c]=s.useState(""),[w,d]=s.useState(""),[y,m]=s.useState("");return s.useEffect(()=>{if(t.data_keputusan!=null){const e=t.data_keputusan;i(e.jenis_keputusan),o(e.no_keputusan),c(e.tanggal_keputusan?new Date(e.tanggal_keputusan):null),d(e.amar_keputusan_id),m(h(e.nilai_akhir_menurut_keputusan))}},[t]),a.jsxs(a.Fragment,{children:[a.jsx(T,{title:"Preview Data Keputusan"}),a.jsx(I,{children:a.jsxs("div",{className:"p-5",children:[a.jsx("div",{className:"breadcrumbs text-sm",children:a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:route("monitoring.pencarian-sk"),children:"Pencarian SK"})}),a.jsx("li",{children:"Preview"})]})}),a.jsx("div",{className:"card mt-5 bg-base-100 shadow",children:a.jsx("div",{className:"card-body",children:a.jsx("form",{children:a.jsxs("div",{className:"grid grid-cols-4 gap-5",children:[a.jsxs("label",{className:"form-control col-span-2",children:[a.jsx(n,{name:"Nomor LPAD"}),a.jsx(u,{value:b,disabled:!0})]}),a.jsxs("label",{className:"form-control col-span-2",children:[a.jsx(n,{name:"TGL DITERIMA (TGL LPAD/TGL CAP POS)"}),a.jsx(j,{placeholderText:"kosong",className:"input input-bordered",selected:g,dateFormat:"dd-MM-yyyy",disabled:!0})]}),a.jsxs("label",{className:"form-control col-span-2",children:[a.jsx(n,{name:"Nama WP"}),a.jsx(u,{value:N,disabled:!0})]}),a.jsxs("label",{className:"form-control col-span-2",children:[a.jsx(n,{name:"NPWP"}),a.jsx(u,{value:K,disabled:!0})]}),a.jsxs("label",{className:"form-control col-span-2",children:[a.jsx(n,{name:"Jenis Permohonan"}),a.jsx(u,{value:k,disabled:!0})]}),a.jsxs("label",{className:"form-control col-span-2",children:[a.jsx(n,{name:"Jenis Pajak"}),a.jsx(u,{value:f,disabled:!0})]}),a.jsxs("label",{className:"form-control col-span-2",children:[a.jsx(n,{name:"Masa Pajak"}),a.jsx(u,{value:v,disabled:!0})]}),a.jsxs("label",{className:"form-control col-span-2",children:[a.jsx(n,{name:"Tahun Pajak"}),a.jsx(u,{value:P,disabled:!0})]}),a.jsxs("label",{className:"form-control col-span-2",children:[a.jsx(n,{name:"Nomor Ketetapan"}),a.jsx(u,{value:_,disabled:!0})]}),a.jsx("div",{className:"col-span-2"}),a.jsxs("label",{className:"form-control col-span-2",children:[a.jsx(n,{name:"Jenis Keputusan"}),a.jsxs(p,{value:S,onChange:e=>i(e.target.value),disabled:!0,children:[a.jsx("option",{value:"",children:"Pilih 1"}),a.jsx("option",{value:"keberatan",children:"Keberatan"}),a.jsx("option",{value:"non keberatan",children:"Non Keberatan"})]}),l.jenisKeputusan&&a.jsx(r,{children:l.jenisKeputusan})]}),a.jsxs("label",{className:"form-control col-span-2",children:[a.jsx(n,{name:"No Keputusan"}),a.jsx(u,{type:"text",value:A,onChange:e=>o(e.target.value),placeholder:"Kosong",disabled:!0}),l.noKeputusan&&a.jsx(r,{children:l.noKeputusan})]}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(n,{name:"Tanggal Keputusan"}),a.jsx(j,{placeholderText:"kosong",className:"input input-bordered",selected:M,onChange:e=>c(e),dateFormat:"dd-MM-yyyy",disabled:!0}),l.tanggalKeputusan&&a.jsx(r,{children:l.tanggalKeputusan})]}),a.jsxs("label",{className:"form-control col-span-2",children:[a.jsx(n,{name:"Amar Putusan"}),a.jsxs(p,{value:w,onChange:e=>d(e.target.value),placeholder:"Kosong",disabled:!0,children:[a.jsx("option",{value:"",children:"Pilih 1"}),x.map((e,D)=>a.jsx("option",{value:e.id,children:e.nama},e.id))]}),l.amarKeputusanId&&a.jsx(r,{children:l.amarKeputusanId})]}),a.jsxs("label",{className:"form-control col-span-1",children:[a.jsx(n,{name:"Nilai Akhir Menurut Keputusan"}),a.jsx(L,{value:y,placeholder:"Kosong",onChange:e=>m(e),disabled:!0}),l.nilaiAkhirMenurutKeputusan&&a.jsx(r,{children:l.nilaiAkhirMenurutKeputusan})]}),a.jsx("div",{className:"col-span-4",children:a.jsx("a",{href:route("monitoring.pencarian-sk"),className:"btn btn-warning",children:"Kembali"})})]})})})})]})})]})}export{Z as default};