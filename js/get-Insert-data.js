let portfolio = document.querySelector(".portfolio");
portfolio.classList.add("waitting")
// array of projects's data.
let ProjectsData = [];
// my personal access token.
const myPAT = "9090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";
// a key in repo's descreption to know that is avaliable repo.
const myKey = "- existing in the portfolio.";
//
let responsState = 0;


// function to create the projects cards
function createElements(){
    for(let i = 0; i < ProjectsData.length; i++ ){
        //createing main elements
        let card = document.createElement("div");
        let frontF = document.createElement("div");
        let backF = document.createElement("div");
        //adding calsses
        card.className = "project-card col-12 col-md-5 ";
        frontF.className = "face front-face";
        backF.className = "face back-face";
        //adding ProjectsData and innerHtml to the main elements
        frontF.innerHTML = ` 
          <img src="${(ProjectsData[i].img).toLowerCase()}" alt="" />
          <button class="front-flib"><i class="fa fa-share" aria-hidden="true"></i></button>`;
        backF.innerHTML = `          
        <span class="project-name">- ${ProjectsData[i].name}</span>
          <div class="card-buttons">
            <button class="view"><a href="${ProjectsData[i].live_url}" class="" target="_blank"> <span>Live Watch</span> <i class="fas fa-eye"></i></a> </button>
            <button class="code"><a href="${ProjectsData[i].repo_url}" class="" target="_blank"> <span>code source</span> <i class="fab fa-github"></i></a></button>
          </div>
          <span class="project-date">- Done At : ${ProjectsData[i].date}</span>
          <span class="project-l">- projects languages:</span>
          <div class="languages-progress">
          </div>
          <button class="back-flib"><i class="fa fa-share" aria-hidden="true"></i></button>`;
          // appending elements to each other
          card.appendChild(frontF);
          card.appendChild(backF);
          // append the card to the portfolio
          document.querySelector(".portfolio .container .holder").appendChild(card);

          // creating and adding the languages progress to each projects
          for(let j = 0;j<ProjectsData[i].progress.length;j++){
          // creating elements
          let card = document.createElement("div"); 
          let rating = document.createElement("div"); 
          // adding classes
          card.className = "progress-card";
          rating.className ="rating";
          // adding data
          rating.innerHTML =`
          <h2>
          <span class="counter" data-target=${ProjectsData[i].progress[j][1]}>${ProjectsData[i].progress[j][1]}</span>
          <span class="persent">%</span>
          <span class="language">${ProjectsData[i].progress[j][0]}</span>
          </h2>
          `;
          for(let q =0;q<50;q++){
          rating.innerHTML += `<span class="block" style="transform: rotate(${`${7.2 * q}deg`}); animation-delay: ${q / 90}s;"></span>`;
          }
          card.appendChild(rating);
          let cardProgres = parseInt(card.querySelector(".counter").getAttribute("data-target"));
          card.querySelectorAll(`.rating .block:nth-child(-n+${Math.floor(cardProgres / 2) + 1})`).forEach((e)=>{
            e.classList.add("light-block")
          })
          // adding tto project card
          document.querySelectorAll(`.portfolio .container .holder .project-card .languages-progress`)[i].appendChild(card)
        }
    };
    
    //adding functionality to the buttons in the card
    document.querySelectorAll(".portfolio .container .holder .project-card .front-face button").forEach((btn,ind)=>{
        btn.addEventListener("click",()=>{
           document.querySelectorAll(".portfolio .container .holder .project-card")[ind].classList.add("flipped");
           // adding animation to the languages progresses
           setTimeout(()=>{
            document.querySelectorAll(`.portfolio .container .holder .project-card:nth-child(${ind + 1}) .rating .block`).forEach((block)=>{
              block.classList.add("animated")
            })
           },200)
        })
    })
    document.querySelectorAll(".portfolio .container .holder .project-card .back-face .back-flib").forEach((btn,ind)=>{
        btn.addEventListener("click",()=>{
           document.querySelectorAll(".portfolio .container .holder .project-card")[ind].classList.remove("flipped");
           // adding animation to the languages progresses
            document.querySelectorAll(`.portfolio .container .holder .project-card:nth-child(${ind + 1}) .rating .block`).forEach((block)=>{
              block.classList.remove("animated")
            })
        })
    })
} 


// funvtion to calc prijects languages as persent.
function languagesProgress(languagesObj) {
    // cariable needed for the calculation
    let sum = 0;
    // languages objects's keys as array
    let lkeys = Object.keys(languagesObj);
    // languages objects's values as array
    let lValus = Object.values(languagesObj);
    // calc the sum of the languages values
    for (let i = 0; i < lValus.length; i++) {
        sum += lValus[i];
    }
    // retern the persent for each language
    let ProgressArr = lkeys.map((ele, ind) => {
      let persent = `${(lValus[ind] / sum) * 100}`;
        return [ele, persent.substring(0,4)];
    });
    return ProgressArr;
    }

// get request for the prohects data.
function fetchData(){
    // get request for data.
    axios
        .get("https://api.github.com/users/abd-alkareem/repos", {
        headers: {
            Authorization: `token ${myPAT.substring(4,myPAT.length+1)}`,
        },
        })
        // this request will retern all the repos on my github 
        .then(function (response) {   
            // looping on the respons which containe my all repos
          let validRepo = [];
          response.data.forEach((repo)=>{
            // filterring the repos to retern the repos which is a project's repo
            if(repo.description && repo.description.slice(0, 28) == myKey ){
              validRepo.push(repo);
            }
          });
          // now we heve all the valid repo in array
          return validRepo;
        }).then(validRepo =>{
          // a counter we need it to know that all the requests are done
          let requestCounter = 0;
          // variable that contain the projects lingth
          let dataLength = validRepo.length; 
          // now we will loop on all projects and send a request to get information about project's languages
          validRepo.forEach((repo,ind)=>{
            axios
                .get(`${repo.languages_url}`, {
                    headers: {
                    Authorization: `token ${myPAT.substring(4,myPAT.length+1)}`,
                    },
                  })
                  .then(language=> {
                    // when the we get the response we will add the information to our array
                    validRepo[ind] = [validRepo[ind],{languages:language.data,name:repo.name,}];
                    // counter++ to calc the number of finished requests
                    requestCounter++;
                    // if the number of finished requests == the number of the projects that mean all requests are done 
                    if(requestCounter == dataLength){
                      // looping on the data
                      validRepo.forEach((element)=>{
                        let data = element[0];
                        let language = element[1].languages;
                        // creating an object that contain the needed data from the reasponses and add it to the projects's data array
                        ProjectsData.push({
                          name:data.name,
                          date: data.created_at.slice(0, 10),
                          repo_url: data.clone_url,
                          live_url: `https://abd-alkareem.github.io/${data.name}`,
                          img: `./image/sites/${data.name}.png`,
                          progress: languagesProgress(language),              
                         });
                      });
                      // inset the number of trainning projects
                      document.querySelector(".trainning-projects ").innerHTML = ProjectsData.length;
                      // now the data is ready so we will call the functoin that cerate our projects's card
                      createElements();
                      // closing the loader on portfolio section
                      setTimeout(()=>{
                        portfolio.classList.remove("waitting");
                      },300);
                    }
                  })
                })
          })

  }

fetchData();
//insert the number of projects

