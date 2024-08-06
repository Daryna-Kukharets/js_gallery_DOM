"use strict";
const ul = document.querySelector("ul");
const largeImg = document.getElementById("largeImg");
ul.addEventListener("click", (e)=>{
    e.preventDefault();
    const element = event.target.closest(".list-item__link");
    largeImg.src = element.href;
});

//# sourceMappingURL=index.f75de5e1.js.map
