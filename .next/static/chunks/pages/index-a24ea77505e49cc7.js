(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1329)}])},1329:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var i=n(5893),r=n(7294),a=n(7114),u=n(6076),s=JSON.parse('{"Mt":[{"inputs":[{"internalType":"string","name":"_greeting","type":"string"},{"internalType":"uint256","name":"_number","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"getGreeting","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"greeting","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"number","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"resetGreeting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"resetNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reverseGreeting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newGreeting","type":"string"}],"name":"setGreeting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newNumber","type":"uint256"}],"name":"setNumber","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');let l=()=>{let[e,t]=(0,r.useState)(""),[n,l]=(0,r.useState)(""),[o,c]=(0,r.useState)(0),[p,y]=(0,r.useState)(""),[g,b]=(0,r.useState)(null),[w,m]=(0,r.useState)(null);(0,r.useEffect)(()=>{let e=async()=>{try{let e=new a.Q(window.ethereum);await e.send("eth_requestAccounts",[]);let n=e.getSigner(),i=new u.CH("0x5FbDB2315678afecb367f032d93F642f64180aa3",s.Mt,n);b(e),m(i);let r=await i.getGreeting(),l=await i.getNumber();t(r),c(l.toString())}catch(e){console.error("Initialization error:",e)}};e()},[]);let h=async()=>{try{let e=await w.setGreeting(n);await e.wait();let i=await w.getGreeting();t(i),l("")}catch(e){console.error("Set Greeting error:",e)}},d=async()=>{try{let e=await w.setNumber(parseInt(p));await e.wait();let t=await w.getNumber();c(t.toString()),y("")}catch(e){console.error("Set Number error:",e)}},f=async()=>{try{let e=await w.resetGreeting();await e.wait();let n=await w.getGreeting();t(n)}catch(e){console.error("Reset Greeting error:",e)}},x=async()=>{try{let e=await w.resetNumber();await e.wait();let t=await w.getNumber();c(t.toString())}catch(e){console.error("Reset Number error:",e)}},N=async()=>{try{let e=await w.reverseGreeting();await e.wait();let n=await w.getGreeting();t(n)}catch(e){console.error("Reverse Greeting error:",e)}};return(0,i.jsx)("div",{style:{backgroundColor:"#748275",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:"white"},children:(0,i.jsxs)("div",{style:{backgroundColor:"#5a5a5a",padding:"20px",borderRadius:"10px",textAlign:"center",width:"300px"},children:[(0,i.jsx)("h1",{children:"Assessment Dapp"}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("h2",{children:["Current Greeting: ",e]}),(0,i.jsx)("input",{type:"text",value:n,onChange:e=>l(e.target.value),placeholder:"Enter new greeting"}),(0,i.jsx)("button",{onClick:h,children:"Set Greeting"}),(0,i.jsx)("button",{onClick:f,children:"Reset Greeting"}),(0,i.jsx)("button",{onClick:N,children:"Reverse Greeting"})]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("h2",{children:["Current Number: ",o]}),(0,i.jsx)("input",{type:"number",value:p,onChange:e=>y(e.target.value),placeholder:"Enter new number"}),(0,i.jsx)("button",{onClick:d,children:"Set Number"}),(0,i.jsx)("button",{onClick:x,children:"Reset Number"})]})]})})};var o=l},6601:function(){}},function(e){e.O(0,[774,433,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);