import{j as e,c as d,R as h}from"./index-PYVsvCHP.js";import{R as i}from"./ResponsiveContainer-BQMNexbc.js";import{P as n,a as c}from"./PieChart-Dl1aP_I1.js";import{C as m,T as o,L as x}from"./generateCategoricalChart-P1MD432p.js";import"./PolarAngleAxis-aJZLYRGb.js";const j=()=>{const l=[{name:"Age 17-20",value:1},{name:"Age 21-23",value:4}],r=[{name:"Female",value:2},{name:"Male",value:1},{name:"Non-Binary",value:1}],t=["#026447","#2A9D8F","#8ECABC","#E9F5F3"];return e.jsx("div",{className:"w-full h-screen bg-white flex flex-col items-center justify-center p-4",children:e.jsxs("div",{className:"w-full max-w-6xl",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-gray-800 text-center",children:"Demographics Overview"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"h-[400px]",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-center",children:"Age Distribution"}),e.jsx(i,{children:e.jsxs(n,{children:[e.jsx(c,{data:l,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:120,label:({name:a,percent:s})=>`${a} (${(s*100).toFixed(0)}%)`,children:l.map((a,s)=>e.jsx(m,{fill:t[s%t.length]},`cell-${s}`))}),e.jsx(o,{}),e.jsx(x,{})]})})]}),e.jsxs("div",{className:"h-[400px]",children:[e.jsx("h3",{className:"text-xl font-semibold mb-2 text-center",children:"Gender Distribution"}),e.jsx(i,{children:e.jsxs(n,{children:[e.jsx(c,{data:r,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:120,label:({name:a,percent:s})=>`${a} (${(s*100).toFixed(0)}%)`,children:r.map((a,s)=>e.jsx(m,{fill:t[s%t.length]},`cell-${s}`))}),e.jsx(o,{}),e.jsx(x,{})]})})]})]})]})})};d.createRoot(document.getElementById("root")).render(e.jsx(h.StrictMode,{children:e.jsx(j,{})}));