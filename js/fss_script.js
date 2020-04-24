function language() {
  var text = document.getElementById("content");
  var lang = document.getElementById("lang");
  if (text.innerHTML.indexOf("office") != -1)  {
    text.innerHTML = "<span class='fr' id='lang' onclick='language()'>En </span><span style='color: black;' class='minus' onclick='plusDivs(-1)'>&larr;</span> <span style='color: black;' class='plus' onclick='plusDivs(+1)'>&rarr;</span><p >Future Simple <br> Studio<br><br>Studio Future Simple est un bureau d'architecture et de design, fondé à Montréal par Christine Djerrahian. Nous collaborons sur des projets d'architecture, d'intérieur, et d’objets. Nos réalisations ont pour but de créer un équilibre durable entre fonctionnalité et beauté. <br> <br> Avant de fonder Studio Future Simple, Christine a travaillé à Montréal et à New York pendant 12 ans où elle a mené à terme des projets pour divers clients internationaux incluant Louis Vuitton, Equinox, Doğuş, NASA, et Shvo. Ses accomplissements ont fait l'objet de nombreuses publications, incluant dans le New York Times, Wallpaper, Sight Unseen, Dezeen et Fast Company. Christine a obtenu des maîtrises en architecture de l'Université McGill et de l’Université Columbia.  </p><p style='padding-top:13%'><a class='linkMobile' target='blank' href='mailto:info@futuresimple.studio'>info@futuresimple.studio</a><a href='https://www.instagram.com/futuresimplestudio/' target='_blank'>Instagram</a></p>";
    lang.innerHTML = "En";
  } else {
    text.innerHTML = "<span class='fr' id='lang' onclick='language()'>Fr </span><span style='color: black;' class='minus' onclick='plusDivs(-1)'>&larr;</span> <span style='color: black;' class='plus' onclick='plusDivs(+1)'>&rarr;</span><p >Future Simple <br> Studio<br><br>Future Simple Studio is a Montreal-based architecture and design office founded by Christine Djerrahian. We work on buildings, interiors, and objects. Our projects seek a lasting balance of purpose and beauty. <br> <br> Prior to Future Simple Studio, Christine spent 12 years working in New York and Montreal where she led projects for international clients including Louis Vuitton, Equinox, Doğuş, NASA, and Shvo. Her work has been featured in the New York Times, Wallpaper, Sight Unseen, Dezeen, and Fast Company. Christine holds masters degrees in Architecture from McGill and Columbia Universities.</p><p style='padding-top:26%'><a class='linkMobile' target='blank' href='mailto:info@futuresimple.studio'>info@futuresimple.studio</a><a href='https://www.instagram.com/futuresimplestudio/' target='_blank'>Instagram</a></p>";
    lang.innerHTML = "Fr";
  }
}
$(document).ready(function(){
    $("#content").html("<span class='fr' id='lang' onclick='language()'>Fr </span><span style='color: black;' class='minus' onclick='plusDivs(-1)'>&larr;</span> <span style='color: black;' class='plus' onclick='plusDivs(+1)'>&rarr;</span><p >Future Simple <br> Studio<br><br>Future Simple Studio is a Montreal-based architecture and design office founded by Christine Djerrahian. We work on buildings, interiors, and objects. Our projects seek a lasting balance of purpose and beauty. <br> <br> Prior to Future Simple Studio, Christine spent 12 years working in New York and Montreal where she led projects for international clients including Louis Vuitton, Equinox, Doğuş, NASA, and Shvo. Her work has been featured in the New York Times, Wallpaper, Sight Unseen, Dezeen, and Fast Company. Christine holds masters degrees in Architecture from McGill and Columbia Universities.</p><p style='padding-top:26%'><a class='linkMobile' target='blank'  href='mailto:info@futuresimple.studio'>info@futuresimple.studio</a><a href='https://www.instagram.com/futuresimplestudio/' target='_blank'>Instagram</a></p>");
    
    function playslider(){
      first();
      setTimeout(second,1000)
      setTimeout(third,2000)
      setTimeout(forth,3000)
      setTimeout(fifth,4000)
      setTimeout(sixth,5000)
      setTimeout(seventh,5200)

      function first(){
        $("#img5").animate({opacity: '0'},);
        $(".first").animate({opacity: '1'}, "slow");
      }

      function second(){
        $(".second").animate({opacity: '1'}, "slow");
        $("#img2").animate({opacity: '1'}, "slow");
      }

      function third(){
        $(".third").animate({opacity: '1'}, "slow");
      }

      function forth(){
        $(".forth").animate({opacity: '1'}, "slow");
        $("#img3").animate({opacity: '1'}, "slow");
        $("#img1").animate({opacity: '0'}, "slow");
      }

      function fifth(){
        $(".fifth").animate({opacity: '1'}, "slow");
        $("#img2").animate({opacity: '0'}, "slow");
      }

      function sixth(){
        $("#img2, #img3").animate({opacity: '0'}, "fast");
        $(".sixth").animate({opacity: '1'}, "slow");
        $("#social, #email").animate({opacity: '1'}, "slow");
      }

      function seventh(){
        $("#sliderTwo").css("display", "block");
        $("#sliderTwo").animate({opacity: '1'}, "slow");
      }
    }  

    function playslider2(){
      setTimeout(first, 1000)
      setTimeout(second,2000)
      setTimeout(third,3000)
      setTimeout(forth,4000)
      setTimeout(fifth,5000)
      setTimeout(sixth,6000)
      setTimeout(seventh,7000)

      function first(){
        $(".first").animate({opacity: '1'}, "slow");
      }

      function second(){
        $(".second").animate({opacity: '1'}, "slow");
      }

      function third(){
        $(".third").animate({opacity: '1'}, "slow");
      }

      function forth(){
        $(".forth").animate({opacity: '1'}, "slow");
      }

      function fifth(){
        $(".fifth").animate({opacity: '1'}, "slow");
      }

      function sixth(){
        $(".sixth").animate({opacity: '1'}, "slow");
      }

      function seventh(){
        $("#sliderTwo").css("display", "block");
        $("#sliderTwo").animate({opacity: '1'}, "slow");
      }
    }  

var screen = $(window)    
  if (screen.width() < 834) {
    $("#img4").animate({opacity: '1'}, 100);
    playslider2();
    }
    else {
      playslider(); 
    }   
});


