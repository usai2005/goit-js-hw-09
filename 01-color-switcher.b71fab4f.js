!function(){var e=document.querySelector("body"),t=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),o=null;function d(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){t.disabled=!0,n.disabled=!1,e.style.backgroundColor=d(),o=setInterval((function(){e.style.backgroundColor=d()}),1e3)})),n.addEventListener("click",(function(){clearInterval(o),n.disabled=!0,t.disabled=!1})),n.disabled=!0}();
//# sourceMappingURL=01-color-switcher.b71fab4f.js.map