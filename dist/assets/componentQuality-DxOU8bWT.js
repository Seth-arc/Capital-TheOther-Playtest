import{j as a,c as i,a as s}from"./index-CUglp1nl.js";import{R as l,L as o,T as r}from"./generateCategoricalChart-CZXE2bEU.js";import{R as n,P as d,a as t}from"./RadarChart-CHY3zUJM.js";import{P as c,a as m}from"./PolarAngleAxis-H8h0E1WQ.js";const x=()=>{const e=[{component:"Game board",quality:5,durability:4.5},{component:"Cards",quality:4.8,durability:4.2},{component:"Tokens",quality:4.2,durability:4},{component:"Profile Sheets",quality:4.5,durability:4.3}];return a.jsx("div",{className:"w-full h-screen bg-white flex flex-col items-center justify-center p-4",children:a.jsxs("div",{className:"w-full max-w-6xl",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4 text-gray-800 text-center",children:"Component Quality Assessment"}),a.jsx("div",{className:"w-full h-[500px]",children:a.jsx(l,{children:a.jsxs(n,{outerRadius:150,data:e,children:[a.jsx(d,{}),a.jsx(c,{dataKey:"component"}),a.jsx(m,{angle:30,domain:[0,5]}),a.jsx(t,{name:"Quality",dataKey:"quality",stroke:"#026447",fill:"#026447",fillOpacity:.6}),a.jsx(t,{name:"Durability",dataKey:"durability",stroke:"#2A9D8F",fill:"#2A9D8F",fillOpacity:.6}),a.jsx(o,{}),a.jsx(r,{contentStyle:{backgroundColor:"white",borderRadius:"8px"}})]})})})]})})};i.createRoot(document.getElementById("root")).render(a.jsx(s.StrictMode,{children:a.jsx(x,{})}));