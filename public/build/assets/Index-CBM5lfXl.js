import{j as a,a as l,d}from"./app-CLjUNS9c.js";import{A as r}from"./AuthenticatedLayout-Bd2_gCHZ.js";import{I as h}from"./Input-DK9lwxjU.js";import"./bootstrap-DV31Mhsh.js";/* empty css            */function m(e){const{data:n,meta:t}=e.permohonanAll;return a.jsxs(a.Fragment,{children:[a.jsx(l,{title:"Input Permohonan KEB dan NKEB"}),a.jsx(r,{children:a.jsxs("div",{className:"p-5",children:[a.jsx("div",{className:"breadcrumbs text-sm",children:a.jsx("ul",{children:a.jsx("li",{children:"Penelitian Formal"})})}),a.jsx("div",{className:"mt-5 flex justify-between",children:a.jsx("div",{children:a.jsx(h,{className:"max-w-xs",placeholder:"No LPAD"})})}),a.jsx("div",{className:"card mt-5 bg-base-100 shadow",children:a.jsx("div",{className:"card-body",children:a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"table table-xs",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"No"}),a.jsx("th",{children:"No LPAD"}),a.jsx("th",{children:"Tanggal LPAD"}),a.jsx("th",{children:"Nama WP"}),a.jsx("th",{children:"NPWP"}),a.jsx("th",{children:"Jenis Permohonan"}),a.jsx("th",{children:"Jenis Pajak"}),a.jsx("th",{children:"Masa Pajak"}),a.jsx("th",{children:"Tahun Pajak"}),a.jsx("th",{children:"Nomor Ketetapan"}),a.jsx("th",{children:"Nama Pelaksana"}),a.jsx("th",{children:"Seksi Pelaksana"}),a.jsx("th",{children:"Sisa Waktu"}),a.jsx("th",{children:"Penelitian Formal"}),a.jsx("th",{})]})}),a.jsxs("tbody",{children:[n.map((s,i)=>a.jsxs("tr",{children:[a.jsx("th",{children:"1"}),a.jsx("td",{children:s.nomor_lpad}),a.jsx("td",{children:s.tanggal_lpad}),a.jsx("td",{children:s.nama_wp}),a.jsx("td",{children:s.npwp}),a.jsx("td",{children:s.jenis_permohonan}),a.jsx("td",{children:s.jenis_pajak}),a.jsx("td",{children:s.masa_pajak}),a.jsx("td",{children:s.tahun_pajak}),a.jsx("td",{children:s.nomor_ketetapan}),a.jsx("td",{children:s.pelaksana}),a.jsx("td",{children:s.seksi_pelaksana}),a.jsx("td",{children:s.sisa_waktu}),a.jsx("td",{children:s.status_penelitian_formal}),a.jsx("td",{children:a.jsx(d,{className:"btn btn-warning btn-xs mr-1",href:route("penelitian-formal.edit",s.id),children:"Edit"})})]},s.id)),n.length==0?a.jsx("tr",{children:a.jsx("th",{colSpan:"13",children:"Kosong"})}):null]})]})})})})]})})]})}export{m as default};