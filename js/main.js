//logic for minu-btn
let minuBtn = document.querySelector(".sidebar .minu-btn");
minuBtn.addEventListener("click",()=>{
    document.querySelectorAll(".sidebar .minu-btn span").forEach((span)=>{
        span.classList.toggle("active");
    })
    document.querySelector(".sidebar ").classList.toggle("active");
})

//logic for the links in the sidebar
let links = document.querySelectorAll(".sidebar .links li");
links.forEach((a)=>{
    a.addEventListener("click",()=>{
        links.forEach((li)=>{
            li.classList.remove("active");
        })
        a.classList.add("active");
        document.querySelectorAll(".sidebar .minu-btn span").forEach((span)=>{
        span.classList.remove("active");
        })
        document.querySelector(".sidebar ").classList.remove("active");

    })
})




// sitting bar 
//open btn
document.querySelector(".sitting-bar .buttons .open-sitting").addEventListener("click",(e)=>{
    document.querySelector(".sitting-bar").classList.toggle("active");
    e.target.classList.toggle("active")
})
//colors
document.querySelectorAll(".sitting-bar .colors li").forEach((li)=>{
    li.addEventListener("click",(event)=>{
        document.querySelectorAll(".sitting-bar .colors li").forEach((ele)=>{
            ele.classList.remove("active");
        })
    li.classList.add("active");
    document.documentElement.style.setProperty("--main-color",li.getAttribute("main-color"));
    document.documentElement.style.setProperty("--secound-color",li.getAttribute("sec-color"));
    document.documentElement.style.setProperty("--alt-color",li.getAttribute("alt-color"));
    document.documentElement.style.setProperty("--card-bg",li.getAttribute("card-bg"));
    })
})

//format the active links in the sidebar
let sections = [];
document.querySelectorAll(".sec").forEach((sec,i)=>{
    sections[i] = sec.offsetTop;
});

window.onscroll = ()=>{
    for(let i = 0;i<sections.length;i++){
        if(window.scrollY > sections[i] - 350){
        document.querySelectorAll(".sidebar ul li ").forEach((e)=>{
            e.classList.remove("active");
            
        })
        document.querySelectorAll(".sidebar ul li ")[i].classList.add("active");        
        }
    }
}



//logic for contact section
let filds = document.querySelectorAll(".in-fild");
let sendBtn = document.querySelector(".sendBtn");

sendBtn.addEventListener("click",()=>{
    setTimeout(()=>{
        filds.forEach((fild)=>{
            fild.value = "";
        })
    },100)
})