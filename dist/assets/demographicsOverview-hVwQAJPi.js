import{j as e,c as o,R as h}from"./index-MIIIfamC.js";import{R as n,C as r,T as c,L as x}from"./generateCategoricalChart-Dumob5Aa.js";import{P as d,a as m}from"./PieChart-x3msdI8K.js";import"./PolarAngleAxis-DFzCPub7.js";const j=()=>{const t=[{name:"Age 17-20",value:1},{name:"Age 21-23",value:4}],i=[{name:"Female",value:2},{name:"Male",value:1},{name:"Non-Binary",value:1}],l=["#026447","#2A9D8F","#8ECABC","#E9F5F3"];return e.jsx("div",{className:"w-full h-screen bg-white flex flex-col items-center justify-center p-4",children:e.jsxs("div",{className:"w-full max-w-6xl",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-gray-800 text-center",children:"Demographics Overview"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"h-[400px]",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-center",children:"Age Distribution"}),e.jsx(n,{children:e.jsxs(d,{children:[e.jsx(m,{data:t,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:120,label:({name:a,percent:s})=>`${a} (${(s*100).toFixed(0)}%)`,children:t.map((a,s)=>e.jsx(r,{fill:l[s%l.length]},`cell-${s}`))}),e.jsx(c,{}),e.jsx(x,{})]})})]}),e.jsxs("div",{className:"h-[400px]",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-center",children:"Gender Distribution"}),e.jsx(n,{children:e.jsxs(d,{children:[e.jsx(m,{data:i,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:120,label:({name:a,percent:s})=>`${a} (${(s*100).toFixed(0)}%)`,children:i.map((a,s)=>e.jsx(r,{fill:l[s%l.length]},`cell-${s}`))}),e.jsx(c,{}),e.jsx(x,{})]})})]})]})]})})};o.createRoot(document.getElementById("root")).render(e.jsx(h.StrictMode,{children:e.jsx(j,{})}));