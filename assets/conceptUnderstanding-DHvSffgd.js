import{j as a,c as t,R as i}from"./client-DZ5iR5sc.js";import{R as s,L as o,T as c}from"./generateCategoricalChart-B6-Dvcm1.js";import{R as r,P as l,a as e}from"./RadarChart-CFVESAaQ.js";import{P as d,a as p}from"./PolarAngleAxis-CLgl6g5l.js";const x=()=>{const n=[{concept:"Identity-Economic Relations",understanding:4.8,application:4.5},{concept:"Types of Capital",understanding:4.9,application:4.7},{concept:"Economic Barriers",understanding:4.6,application:4.4},{concept:"Intersectionality",understanding:4.5,application:4.3},{concept:"Capital Exchange",understanding:4.7,application:4.6}];return a.jsx("div",{className:"w-full h-screen bg-white flex flex-col items-center justify-center p-4",children:a.jsxs("div",{className:"w-full max-w-6xl",children:[a.jsx("h2",{className:"text-2xl font-bold mb-4 text-gray-800 text-center",children:"Concept Understanding vs Application"}),a.jsx("div",{className:"w-full h-[500px]",children:a.jsx(s,{children:a.jsxs(r,{outerRadius:150,data:n,children:[a.jsx(l,{}),a.jsx(d,{dataKey:"concept"}),a.jsx(p,{angle:30,domain:[0,5]}),a.jsx(e,{name:"Theoretical Understanding",dataKey:"understanding",stroke:"#026447",fill:"#026447",fillOpacity:.6}),a.jsx(e,{name:"Practical Application",dataKey:"application",stroke:"#2A9D8F",fill:"#2A9D8F",fillOpacity:.6}),a.jsx(o,{}),a.jsx(c,{contentStyle:{backgroundColor:"white",borderRadius:"8px"}})]})})})]})})};t.createRoot(document.getElementById("root")).render(a.jsx(i.StrictMode,{children:a.jsx(x,{})}));