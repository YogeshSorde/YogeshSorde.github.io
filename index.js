
// menuBar.classList.remove("none")
document.querySelector(".home").addEventListener("click",()=>{
    document.querySelector("#home").scrollIntoView();
  
})

document.querySelector(".about").addEventListener("click",()=>{
   document.querySelector("#about").scrollIntoView();
  
})

document.querySelector(".skills").addEventListener("click",()=>{
   document.querySelector("#skills").scrollIntoView();
  
})

document.querySelector(".projects").addEventListener("click",()=>{
   document.querySelector("#projects").scrollIntoView();
  
})

document.querySelector(".res-projects-class").addEventListener("click",()=>{
   document.querySelector("#res-projects").scrollIntoView();
   console.log("clicked")
  
})

document.querySelector("#prtf").addEventListener("click" , ()=>{
   window.open("https://github.com/YogeshSorde","_blank") ;
})

document.querySelector("#lkdn").addEventListener("click" , ()=>{
   window.open("https://www.linkedin.com/in/yogesh-sorde-195486274/","_blank");
})



document.querySelector(".contact").addEventListener("click",()=>{
   document.querySelector("#contact").scrollIntoView();
  
})

document.querySelector("#resume-button-1").addEventListener("click",()=>{
   window.location.href="https://drive.google.com/uc?export=download&id=1OSYO0UHmCp_rflSQshtUuh2KsI0wPpiP";
   window.open("https://drive.google.com/file/d/1OSYO0UHmCp_rflSQshtUuh2KsI0wPpiP/view?usp=share_link","_blank") ;
})


document.querySelector("#resume-button-2").addEventListener("click",()=>{
   window.location.href="https://drive.google.com/uc?export=download&id=1OSYO0UHmCp_rflSQshtUuh2KsI0wPpiP";
  window.open("https://drive.google.com/file/d/1OSYO0UHmCp_rflSQshtUuh2KsI0wPpiP/view?usp=share_link","_blank") ;
})





document.querySelector(".travelDep").addEventListener("click",()=>{
  window.open("https://capable-choux-e6b2b2.netlify.app/","_blank") ;
})


document.querySelector(".travelGit").addEventListener("click",()=>{
   window.open("https://github.com/YogeshSorde/Den_Decor","_blank") ;
})


document.querySelector(".travelGitRes").addEventListener("click",()=>{
   window.open("https://github.com/YogeshSorde/Den_Decor","_blank") ;
})

document.querySelector(".travelDepRes").addEventListener("click",()=>{
   window.open("https://capable-choux-e6b2b2.netlify.app/","_blank") ;
})



document.querySelector(".mailGit").addEventListener("click",()=>{
   window.open("https://github.com/YogeshSorde/blushing-harmony-5466","_blank") ;
})


document.querySelector(".mailGitRes").addEventListener("click",()=>{
   window.open("https://github.com/YogeshSorde/blushing-harmony-5466","_blank") ;
})


document.querySelector(".mailDep").addEventListener("click",()=>{
   window.open("https://flourishing-meerkat-03f2f8.netlify.app/","_blank") ;
})

document.querySelector(".mailDepRes").addEventListener("click",()=>{
   window.open("https://flourishing-meerkat-03f2f8.netlify.app/","_blank") ;
})


document.querySelector(".edGit").addEventListener("click",()=>{
   window.open("https://github.com/YogeshSorde/puzzling-tiger-7832" , "_blank") ;
})

document.querySelector(".edPre").addEventListener("click",()=>{
   window.open("https://luminous-starlight-512cd1.netlify.app/" , "_blank") ;
})


document.querySelector(".edGitRes").addEventListener("click",()=>{
   window.open("https://github.com/YogeshSorde/puzzling-tiger-7832" , "_blank") ;
})

document.querySelector(".edPreRes").addEventListener("click",()=>{
   window.open("https://luminous-starlight-512cd1.netlify.app/" , "_blank") ;
})


document.querySelector(".makeGit").addEventListener("click",()=>{
   window.open("https://github.com/YogeshSorde/savvy-street-3531" , "_blank") ;
})

document.querySelector(".makePre").addEventListener("click",()=>{
   window.open("https://youtu.be/W8t1OV6Dec0" , "_blank") ;
})

document.querySelector(".makeGitRes").addEventListener("click",()=>{
   window.open("https://github.com/YogeshSorde/savvy-street-3531" , "_blank") ;
})

document.querySelector(".makePreRes").addEventListener("click",()=>{
   window.open("https://youtu.be/W8t1OV6Dec0" , "_blank") ;
})




document.querySelector(".linkedIn").addEventListener("click",()=>{
   window.open("https://www.linkedin.com/in/yogesh-sorde-195486274/","_blank") ;
})

document.querySelector(".portfolio").addEventListener("click",()=>{
   console.log("clicked")
   window.open("https://github.com/YogeshSorde","_blank") ;
})

const mediaQuery = window.matchMedia('(min-width: 1001px)');

// Check if the media query matches


let menuButton=document.getElementById("menu");
//  console.log(menuButton)
let menuBar=document.querySelector("#nav-menu>div:nth-child(2)");

mediaQuery.addEventListener('change',(event) => {
   if (event.matches) {
       // menuBar.style="display:flex";

     
    }
 });
let click_count=0;
menuButton.addEventListener("click",()=>{
   click_count++;



   if (menuButton.classList.contains('fa-xmark')) {
       menuButton.classList.remove("fa-bars");
       menuButton.classList.add("fa-xmark");
       menuBar.style="display:flex";
     } else {
       // menuBar.style="display:none";
       menuButton.classList.add("fa-bars");
       menuButton.classList.remove("fa-xmark");
     }

   // console.log(click_count)
   if(click_count%2==0){
       menuBar.style="display:none";
       menuButton.classList.add("fa-bars");
       menuButton.classList.remove("fa-xmark");
   }else{
       menuButton.classList.remove("fa-bars");
       menuButton.classList.add("fa-xmark");
       menuBar.style="display:flex";
   }
})

