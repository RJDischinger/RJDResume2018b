/* ==alert only operates based on the size of the window that is opened 
     The alert does NOT reset when the window is resized==*/
if($(window).width() > 769) {
 function disp_alert(){alert("Welcome to my WebSite")
 }
} 

function detailList(listId) {
    var x = document.getElementById(listId);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

const toggleJobs = document.getElementById("toggleJobs");
const jobDiv = document.querySelector("article");
toggleJobs.addEventListener("click", () => {
    if (jobDiv.style.display == "none") {
      toggleJobs.textContent = "Hide Jobs";
      jobDiv.style.display = "block";
    } else {
      toggleJobs.textContent = "Show Jobs";                        
      jobDiv.style.display = "none";
    }                         
  });



/*=====jQuery option ===============
==================================*/
$(document).ready(function(){
    $("button").click(function(){
        $("h4").toggle();
    });
});


  