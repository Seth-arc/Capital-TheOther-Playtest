import{j as t,c as i,R as s}from"./index-MIIIfamC.js";import{R as l,L as o,T as r}from"./generateCategoricalChart-Dumob5Aa.js";import{R as n,P as d,a}from"./RadarChart-CVfKAOTZ.js";import{P as c,a as m}from"./PolarAngleAxis-DFzCPub7.js";const x=()=>{const e=[{component:"Game board",quality:5,durability:4.5},{component:"Cards",quality:4.8,durability:4.2},{component:"Tokens",quality:4.2,durability:4},{component:"Profile Sheets",quality:4.5,durability:4.3}];return t.jsx("div",{className:"w-full h-screen bg-white flex flex-col items-center justify-center p-4",children:t.jsxs("div",{className:"w-full max-w-6xl",children:[t.jsx("h2",{className:"text-2xl font-bold mb-4 text-gray-800 text-center",children:"Component Quality Assessment"}),t.jsx("div",{className:"w-full h-[500px]",children:t.jsx(l,{children:t.jsxs(n,{outerRadius:150,data:e,children:[t.jsx(d,{}),t.jsx(c,{dataKey:"component"}),t.jsx(m,{angle:30,domain:[0,5]}),t.jsx(a,{name:"Quality",dataKey:"quality",stroke:"#026447",fill:"#026447",fillOpacity:.6}),t.jsx(a,{name:"Durability",dataKey:"durability",stroke:"#2A9D8F",fill:"#2A9D8F",fillOpacity:.6}),t.jsx(o,{}),t.jsx(r,{contentStyle:{backgroundColor:"white",borderRadius:"8px"}})]})})})]})})};i.createRoot(document.getElementById("root")).render(t.jsx(s.StrictMode,{children:t.jsx(x,{})}));