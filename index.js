import bootstrap from "bootstrap";
import $ from "jquery"
import Popper from "popper.js"


$("#modal-btn").on("click",(function(){
  $(".modal1").show();
}));

$(".close").click(function(){
 $(".modal1").hide();
});

window.onclick = function(event) 
{
 if (event.target == $(".modal1")[0]) 
 {
     $(".modal1").hide();
 }
}


let curSlide = 0;
const slides = $(".slider-slide");
const sliderPrevButton = $("#slider-button-prev");
const sliderNextButton = $("#slider-button-next");


sliderNextButton.click(function(){changeSlide(curSlide + 1), buttonToggle(curSlide + 1)});
sliderPrevButton.click(function(){changeSlide(curSlide - 1), buttonToggle(curSlide - 1)});





function changeSlide(slide)
{
 if (slide<0)
     return;

 if(slide==slides.length)
     return;
      
 slides[curSlide].classList.toggle("active");
 slides[slide].classList.toggle("active");
 curSlide = slide;
}

function buttonToggle(slide)
{
 if (slide==-1)
     sliderPrevButton.hide();
 else
     sliderPrevButton.show();
 if(slide==slides.length)
     sliderNextButton.hide();
 else
     sliderNextButton.show();
}