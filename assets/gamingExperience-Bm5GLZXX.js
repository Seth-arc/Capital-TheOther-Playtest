import{j as a,c as i,R as r}from"./index-PYVsvCHP.js";import{R as s}from"./ResponsiveContainer-BQMNexbc.js";import{R as o,P as l,a as e}from"./RadarChart-9pBq9fuC.js";import{P as c,a as m}from"./PolarAngleAxis-aJZLYRGb.js";import{L as n,T as x}from"./generateCategoricalChart-P1MD432p.js";const d=()=>{const t=[{aspect:"Board Games",familiarity:100,comfort:90},{aspect:"Educational Games",familiarity:70,comfort:85},{aspect:"Role-Playing Games",familiarity:80,comfort:75},{aspect:"Strategy Games",familiarity:85,comfort:80},{aspect:"Digital Games",familiarity:90,comfort:85}];return a.jsx("div",{className:"w-full h-screen bg-white flex flex-col items-center justify-center p-4",children:a.jsxs("div",{className:"w-full max-w-6xl",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4 text-gray-800 text-center",children:"Gaming Experience Profile"}),a.jsx("div",{className:"w-full h-[500px]",children:a.jsx(s,{children:a.jsxs(o,{outerRadius:150,data:t,children:[a.jsx(l,{}),a.jsx(c,{dataKey:"aspect"}),a.jsx(m,{angle:30,domain:[0,100]}),a.jsx(e,{name:"Familiarity",dataKey:"familiarity",stroke:"#026447",fill:"#026447",fillOpacity:.6}),a.jsx(e,{name:"Comfort Level",dataKey:"comfort",stroke:"#2A9D8F",fill:"#2A9D8F",fillOpacity:.6}),a.jsx(n,{}),a.jsx(x,{contentStyle:{backgroundColor:"white",borderRadius:"8px"}})]})})})]})})};i.createRoot(document.getElementById("root")).render(a.jsx(r.StrictMode,{children:a.jsx(d,{})}));