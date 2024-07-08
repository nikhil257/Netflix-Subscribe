const plan1 = document.querySelectorAll(".plan1");


plan1.forEach(items =>{
    items.addEventListener("click",()=>{
        document.querySelector(".active")?.classList.remove("active");
        items.classList.add("active");
    })
});
