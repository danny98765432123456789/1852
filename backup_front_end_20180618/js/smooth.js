var jump=function(e){

e.preventDefault();                        //prevent "hard" jump
  var target = $(this).attr("href");       //get the target

      //perform animated scrolling
      $('html,body').animate(
        {
          scrollTop: $(target).offset().top - document.getElementById('header').offsetHeight - 5  //get top-position of target-element and set it as scroll target
        },1000,function()                  //scrolldelay: 1 seconds
        {
          location.hash = target;          //attach the hash (#jumptarget) to the pageurl
        });
      }

  $(document).ready(function()
  {
    $('a[href*="#"]').bind("click", jump); //get all hrefs
    return false;
  });
