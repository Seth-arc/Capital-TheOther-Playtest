import{j as e,c as r,R as i}from"./client-BwJwQkL7.js";import{R as s,L as o,T as n}from"./generateCategoricalChart-DOo20ZE7.js";import{R as l,P as c,a}from"./RadarChart-CQPUTn2b.js";import{P as m,a as d}from"./PolarAngleAxis-D29iny6m.js";const p=()=>{const t=[{area:"Game Mechanics",priority:80,impact:90},{area:"Learning Integration",priority:75,impact:85},{area:"Component Design",priority:70,impact:75},{area:"Player Interaction",priority:65,impact:80},{area:"Time Management",priority:85,impact:70}];return e.jsx("div",{className:"w-full h-screen bg-white flex flex-col items-center justify-center p-4",children:e.jsxs("div",{className:"w-full max-w-6xl",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-gray-800 text-center",children:"Areas for Improvement"}),e.jsx("div",{className:"w-full h-[500px]",children:e.jsx(s,{children:e.jsxs(l,{outerRadius:150,data:t,children:[e.jsx(c,{}),e.jsx(m,{dataKey:"area"}),e.jsx(d,{angle:30,domain:[0,100]}),e.jsx(a,{name:"Priority Level",dataKey:"priority",stroke:"#026447",fill:"#026447",fillOpacity:.6}),e.jsx(a,{name:"Potential Impact",dataKey:"impact",stroke:"#2A9D8F",fill:"#2A9D8F",fillOpacity:.6}),e.jsx(o,{}),e.jsx(n,{contentStyle:{backgroundColor:"white",borderRadius:"8px"}})]})})})]})})};r.createRoot(document.getElementById("root")).render(e.jsx(i.StrictMode,{children:e.jsx(p,{})}));