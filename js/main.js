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


// projects data
let data = [
    {
        projectName:"CASINO",
        projectURL:"casino-003.surge.sh",
        cardImage:"./image/sites/casino.png",
        projectRepo:"https://github.com/Abd-alkareem/casino.git",
    },
    {
        projectName:"XTRA BLOG",
        projectURL:"xtra-blog003.surge.sh",
        cardImage:"./image/sites/xtra blog.png",
        projectRepo:"https://github.com/Abd-alkareem/xtra-blog.git",

    },
    {
        projectName:"THE WAY SHOP",
        projectURL:"the-wayshop003.surge.sh",
        cardImage:"./image/sites/the way shop.png",
        projectRepo:"https://github.com/Abd-alkareem/the-Way-Shop.git",
    },
    {
        projectName:"ASTRO MOTION",
        projectURL:"astro-motion003.surge.sh",
        cardImage:"./image/sites/astro motion.png",
        projectRepo:"https://github.com/Abd-alkareem/astro-motion.git",
    },
    {
        projectName:"POP",
        projectURL:"pop-003.surge.sh",
        cardImage:"./image/sites/pop.png",
        projectRepo:"https://github.com/Abd-alkareem/Pop.git",
    },
    {
        projectName:"FOOD HUT",
        projectURL:"food-hut003.surge.sh",
        cardImage:"./image/sites/food hut.png",
        projectRepo:"https://github.com/Abd-alkareem/Food-Hut.git",
    },
    {
        projectName:"VERTEX",
        projectURL:"vertex-003.surge.sh",
        cardImage:"./image/sites/vertex.png",
        projectRepo:"https://github.com/Abd-alkareem/vertex.git",
    },
    {
        projectName:"HIGHTECH",
        projectURL:"hightech-003.surge.sh",
        cardImage:"./image/sites/hightech.png",
        projectRepo:"https://github.com/Abd-alkareem/hightech.git",
    },
    {
        projectName:"PLOT LIST",
        projectURL:"plotlist-003.surge.sh",
        cardImage:"./image/sites/plotlist-1.png",
        projectRepo:"https://github.com/Abd-alkareem/Plotlist.git",
    },
    {
        projectName:"sentra",
        projectURL:"sentra-003.surge.sh",
        cardImage:"./image/sites/sentra.png",
        projectRepo:"https://github.com/Abd-alkareem/sentra.git",
    },
    {
        projectName:"job entry",
        projectURL:"job-entry003.surge.sh",
        cardImage:"./image/sites/job_entry.png",
        projectRepo:"https://github.com/Abd-alkareem/job-entry",
    },
    {
        projectName:"barber shop",
        projectURL:"barber-shop003.surge.sh",
        cardImage:"./image/sites/barber-shop.png",
        projectRepo:"https://github.com/Abd-alkareem/barber-shop",
    },
    {
        projectName:"finexo",
        projectURL:"finexo-003.surge.sh",
        cardImage:"./image/sites/finexo.png",
        projectRepo:"https://github.com/Abd-alkareem/finexo-by-Abd",
    },
    {
        projectName:"to do list",
        projectURL:"abd-alkareem.github.io/to-do-list/",
        cardImage:"./image/sites/to-do-003.png",
        projectRepo:"https://github.com/Abd-alkareem/to-do-list",
    },
    {
        projectName:"guess the word",
        projectURL:"abd-alkareem.github.io/guess-the-word",
        cardImage:"./image/sites/guess-the-word.png",
        projectRepo:"https://github.com/Abd-alkareem/guess-the-word",
    },
    {
        projectName:"memory game",
        projectURL:"abd-alkareem.github.io/memory-game",
        cardImage:"./image/sites/memory-game.png",
        projectRepo:"https://github.com/Abd-alkareem/memory-game",
    },
];

// function to create the projects cards
function createElements(){
    for(let i = 0; i < data.length; i++ ){
        //createing main elements
        let card = document.createElement("div");
        let frontF = document.createElement("div");
        let backF = document.createElement("div");
        //adding calsses
        card.className = "project-card col-12 col-md-5 col-lg-3";
        frontF.className = "face front-face";
        backF.className = "face back-face";
        //adding data and innerHtml to the main elements
        frontF.innerHTML = ` 
          <img src="${data[i].cardImage}" alt="" />
          <button class="front-flib"><i class="fa fa-share" aria-hidden="true"></i></button>`;
        backF.innerHTML = `          
        <span class="project-name">- ${data[i].projectName}</span>
          <div class="card-buttons">
            <button class="view"><a href="" class="${data[i].projectURL}" target="_blank"> <span>Live Watch</span> <i class="fas fa-eye"></i></a> </button>
            <button class="code"><a href="" class="${data[i].projectRepo}" target="_blank"> <span>code source</span> <i class="fab fa-github"></i></a></button>
          </div>
          <span class="project-date">- Done At : 10/5/2022</span>
          <button class="back-flib"><i class="fa fa-share" aria-hidden="true"></i></button>`;
          // appending elements to each other
          card.appendChild(frontF);
          card.appendChild(backF);
          //
          document.querySelector(".portfolio .container .holder").appendChild(card);
    };
    //adding functionality to the buttons in the card
    document.querySelectorAll(".portfolio .container .holder .project-card .front-face button").forEach((btn,ind)=>{
        btn.addEventListener("click",()=>{
           document.querySelectorAll(".portfolio .container .holder .project-card")[ind].classList.add("flipped");
        })
    })
    document.querySelectorAll(".portfolio .container .holder .project-card .back-face .back-flib").forEach((btn,ind)=>{
        btn.addEventListener("click",()=>{
           document.querySelectorAll(".portfolio .container .holder .project-card")[ind].classList.remove("flipped");
        })
    })
} 
createElements();

//insert the number of projects
document.querySelector(".trainning-projects ").innerHTML = data.length;

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