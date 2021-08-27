$(document).ready(function() {
  $("#searchInput").on("keyup", function() {
    filterResults();
  });
       
  $('#home').click(function() {
    filterResults();
  });

  $('#slides').click(function() {
    filterResults();
  });

  $('#video').click(function() {
    filterResults();
  });

  $('#github').click(function() {
    filterResults();
  });
  
  $('#beginner').click(function() {
    filterResults();
  });

  $('#intermediate').click(function() {
    filterResults();
  });

  $('#advanced').click(function() {
    filterResults();
  });
        
  function filterResults() {
    $("#pageTable tr").filter(function() {
      text = $(this).text().toLowerCase();
      searchValue = $("#searchInput").val().toLowerCase();
      
      isHome = $(this).find("td:eq(2)").html() != "" ? true : false;
      isSlide = $(this).find("td:eq(3)").html() != "" ? true : false;
      isVideo = $(this).find("td:eq(4)").html() != "" ? true : false;
      isGitHub = $(this).find("td:eq(5)").html() != "" ? true : false;
            
      $(this).toggle(text.indexOf(searchValue) > -1 ? true : false);

      isBeginner = $('#beginner').is(':checked');
      isIntermediate = $('#intermediate').is(':checked');
      isAdvanced = $('#advanced').is(':checked');
            
      if (isBeginner || isIntermediate || isAdvanced || isHome || isSlide || isVideo || isGitHub) 
      {
        if ((isBeginner && text.indexOf('beginner') > -1 && searchValue == "") || 
            (isIntermediate && text.indexOf('intermediate') > -1 && searchValue == "") ||
            (isAdvanced && text.indexOf('advanced') > -1 && searchValue == "") ||
            (isHome && searchValue == "") || (isSlide && searchValue == "") || (isVideo && searchValue == "") || (isGitHub && searchValue == ""))
        {
          $(this).toggle(true);
        }
        else if ((isBeginner && text.indexOf('beginner') > -1 && text.indexOf(searchValue) > -1) || 
                 (isIntermediate && text.indexOf('intermediate') > -1 && text.indexOf(searchValue) > -1) ||
                 (isAdvanced && text.indexOf('advanced') > -1 && text.indexOf(searchValue) > -1) ||
                 (isHome && searchValue > -1) || (isSlide && searchValue > -1) || (isVideo && searchValue > -1) || (isGitHub && searchValue > -1))
        {
          $(this).toggle(true);
        }
        else 
        {
          $(this).toggle(false);
        } 
      }           
    });
  };
});
