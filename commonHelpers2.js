import{e as l}from"./assets/errorIcon-3dd30987.js";/* empty css                      */import{i as r}from"./assets/vendor-77e16229.js";const n="/goit-js-hw-10/assets/success-286069d5.svg",s=document.querySelector(".form");s.addEventListener("submit",t=>{t.preventDefault();const o=s.delay.value,i=s.state.value;new Promise((e,a)=>{setTimeout(()=>{i==="fulfilled"?e(o):a(o)},o)}).then(e=>{r.success({iconUrl:n,message:`Fulfilled promise in ${e}ms`,messageColor:"#ffffff",backgroundColor:"#59A10D",progressBarColor:"#326101",progressBarEasing:"linear",position:"topRight"})}).catch(e=>{r.error({iconUrl:l,message:`Rejected promise in ${e}ms`,messageColor:"#ffffff",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",progressBarEasing:"linear",position:"topRight"})}),s.reset()});
//# sourceMappingURL=commonHelpers2.js.map
