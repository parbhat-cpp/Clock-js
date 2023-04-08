let hrs="";
let min="";
let sec="";
let Set=0;

const HRS=document.getElementById("idHour");
const MIN=document.getElementById("idMin");
const SEC=document.getElementById("idSec");
const buttn=document.getElementById("btn");

setInterval(()=>{
  let d=new Date();
  hrs=d.getHours();
  min=d.getMinutes();
  sec=d.getSeconds();
  if(Set===1){
    
  HRS.textContent=(((hrs%12)===0)?12:hrs%12);
  }
  else{
    
  HRS.textContent=hrs;
  }
  MIN.textContent=min;
  SEC.textContent=sec;
},1000);

buttn.addEventListener("click",()=>{
  if(Set===0){
    
  Set=1;
  if(hrs<12){
    buttn.textContent="AM";
  }
  else{
    buttn.textContent="PM";
  }
  }
  else{
    Set=0;
    buttn.textContent="Switch to 12-hr format";
  }
},false);