$(document).ready(function() {
    $(".animation").maCouleur({
      width: "100px",
      height: "100px"
    }, 1000, function() {
      $(".animation").maCouleur({
        width: "50px",
        height: "50px"
      }, 1000);
    });
  });
  
  
  
  