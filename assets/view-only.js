document.addEventListener("DOMContentLoaded",()=>{
 const protectedArea=t=>t instanceof Element && !!t.closest(".article,.sidebar,.toc") && !t.closest("input,textarea,[contenteditable='true']");
 ["contextmenu","copy","cut","dragstart","selectstart"].forEach(type=>document.addEventListener(type,e=>{if(protectedArea(e.target))e.preventDefault();}));
 document.addEventListener("keydown",e=>{const k=(e.key||"").toLowerCase(),m=e.ctrlKey||e.metaKey;const blocked=(m&&["c","x","s","p","u","a"].includes(k))||(m&&e.shiftKey&&["i","j","c"].includes(k))||k==="f12";if(blocked&&protectedArea(e.target)){e.preventDefault();e.stopPropagation();}},true);
});