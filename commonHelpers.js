import{e as f}from"./assets/errorIcon-3dd30987.js";/* empty css                      */import{f as h,i as p}from"./assets/vendor-77e16229.js";const s=document.querySelector("#datetime-picker"),t=document.querySelector("[data-start]"),y=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]");let r;t.disabled=!0;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(a){r=Date.parse(a[0]),console.log(r),r<Date.now()?(p.error({message:"Please choose a date in the future",messageColor:"#ffffff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",position:"topRight",iconUrl:f}),t.disabled=!0):t.disabled=!1}};h(s,C);t.addEventListener("click",E);function E(){t.disabled=!0,s.disabled=!0;const a=setInterval(()=>{let c=r-Date.now();function d(e){const i=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:u,minutes:l,seconds:m}}const o=d(c);function n(e){return String(e).padStart(2,"0")}y.textContent=n(o.days),S.textContent=n(o.hours),b.textContent=n(o.minutes),g.textContent=n(o.seconds),c<=1e3&&(clearInterval(a),s.disabled=!1)},1e3)}
//# sourceMappingURL=commonHelpers.js.map