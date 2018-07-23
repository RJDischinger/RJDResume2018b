/* ==alert only operates based on the size of the window that is opened 
     The alert does NOT reset when the window is resized==*/
if($(window).width() > 769) {
 function disp_alert(){alert("Welcome to my WebSite")
 }
} 

/*========Show/Hide Skills Details===========*/
function detailList(listId) {
    var x = document.getElementById(listId);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

/*========Show/Hide Professional Experience=============*/
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

/*=====jQuery option ==Show/Hide Education and Training=============*/
$(document).ready(function(){
    $(toggleEdTrain).click(function(){
        $("h4").toggle();
    });
});


  
