import{j as e,c as a,R as s}from"./index-PYVsvCHP.js";import{R as r}from"./ResponsiveContainer-BQMNexbc.js";import{L as o,a as t}from"./LineChart-v8XAQ0GQ.js";import{C as i,X as d,Y as m}from"./YAxis-BvttB2g_.js";import{T as g,L as c}from"./generateCategoricalChart-P1MD432p.js";const l=()=>{const n=[{phase:"Setup",engagement:3.8,understanding:3.2,interaction:3.5},{phase:"Early Game",engagement:4.2,understanding:3.8,interaction:4},{phase:"Mid Game",engagement:4.5,understanding:4.3,interaction:4.5},{phase:"Late Game",engagement:4.8,understanding:4.6,interaction:4.7},{phase:"End Game",engagement:4.9,understanding:4.8,interaction:4.8}];return e.jsx("div",{className:"w-full h-screen bg-white flex flex-col items-center justify-center p-4",children:e.jsxs("div",{className:"w-full max-w-6xl",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4 text-gray-800 text-center",children:"Engagement Progression Through Game"}),e.jsx("div",{className:"w-full h-[500px]",children:e.jsx(r,{children:e.jsxs(o,{data:n,margin:{top:20,right:30,left:20,bottom:10},children:[e.jsx(i,{strokeDasharray:"3 3"}),e.jsx(d,{dataKey:"phase"}),e.jsx(m,{domain:[0,5]}),e.jsx(g,{contentStyle:{backgroundColor:"white",borderRadius:"8px"}}),e.jsx(c,{}),e.jsx(t,{type:"monotone",dataKey:"engagement",stroke:"#026447",strokeWidth:2,name:"Player Engagement"}),e.jsx(t,{type:"monotone",dataKey:"understanding",stroke:"#2A9D8F",strokeWidth:2,name:"Game Understanding"}),e.jsx(t,{type:"monotone",dataKey:"interaction",stroke:"#8ECABC",strokeWidth:2,name:"Player Interaction"})]})})})]})})};a.createRoot(document.getElementById("root")).render(e.jsx(s.StrictMode,{children:e.jsx(l,{})}));