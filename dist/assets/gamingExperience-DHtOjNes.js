import{j as a,a as i}from"./index-Cy4XWqUH.js";import{R as r,L as s,T as l,c as o}from"./generateCategoricalChart-DS152WVB.js";import{R as c,P as m,a as e}from"./RadarChart-CbdSZUg8.js";import{P as n,a as x}from"./PolarAngleAxis-CeRm9_YX.js";const d=()=>{const t=[{aspect:"Board Games",familiarity:100,comfort:90},{aspect:"Educational Games",familiarity:70,comfort:85},{aspect:"Role-Playing Games",familiarity:80,comfort:75},{aspect:"Strategy Games",familiarity:85,comfort:80},{aspect:"Digital Games",familiarity:90,comfort:85}];return a.jsx("div",{className:"w-full h-screen bg-white flex flex-col items-center justify-center p-4",children:a.jsxs("div",{className:"w-full max-w-6xl",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4 text-gray-800 text-center",children:"Gaming Experience Profile"}),a.jsx("div",{className:"w-full h-[500px]",children:a.jsx(r,{children:a.jsxs(c,{outerRadius:150,data:t,children:[a.jsx(m,{}),a.jsx(n,{dataKey:"aspect"}),a.jsx(x,{angle:30,domain:[0,100]}),a.jsx(e,{name:"Familiarity",dataKey:"familiarity",stroke:"#026447",fill:"#026447",fillOpacity:.6}),a.jsx(e,{name:"Comfort Level",dataKey:"comfort",stroke:"#2A9D8F",fill:"#2A9D8F",fillOpacity:.6}),a.jsx(s,{}),a.jsx(l,{contentStyle:{backgroundColor:"white",borderRadius:"8px"}})]})})})]})})};o.createRoot(document.getElementById("root")).render(a.jsx(i.StrictMode,{children:a.jsx(d,{})}));