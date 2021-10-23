let btn = document.querySelectorAll(".faq");
btn.forEach(ele => {
    ele.addEventListener("click", (e) => {
        if(ele.classList.contains("active")){
            ele.classList.remove("active");
        }else{
            btn.forEach((ele) => {
                ele.classList.remove("active");
            })
            e.currentTarget.classList.toggle("active");
        }
    })
})