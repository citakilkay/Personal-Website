$(document).ready(function(){
    window.onscroll = function(){
        scrollFunction()
    };


    function scrollFunction() {
    
        var element1 = document.getElementById("navbar-scroll");
        var element2 = document.getElementById("logo-scroll");


        if (document.documentElement.scrollTop > 50){
            element1.classList.add("stickyNavbar");
            element2.classList.add("stickyLogo");
        } 
        else{
            element1.classList.remove("stickyNavbar");
            element2.classList.remove("stickyLogo");
        }
    
    
    }
    
          
                var typed = new Typed('.typed1', {
                strings: ["Ilkay Citak." , "an Architect." , "a Web Developer." , "a Designer."],
                typeSpeed: 70,
                backSpeed:45,
                startDelay:400,
                backDelay:600,
                loop:true,
                loopCount:700
            
            });
    var waypoint = new Waypoint({
        element: document.getElementById('about-id'),
        handler: function() {
        
            var a = document.querySelectorAll('.progress-bar');
            a[0].setAttribute("style", "width:90%; transition:2.5s all");
            a[1].setAttribute("style", "width:82%; transition:2.2s all");
            a[2].setAttribute("style", "width:80%; transition:2.5s all");
            a[3].setAttribute("style", "width:75%; transition:1.9s all");
            a[4].setAttribute("style", "width:75%; transition:1.9s all");
            a[5].setAttribute("style", "width:70%; transition:2.4s all");
            a[6].setAttribute("style", "width:60%; transition:2.2s all");
        },
        offset:'80%'
})
    
    
});
