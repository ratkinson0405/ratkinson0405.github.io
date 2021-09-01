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
  
  $('#core').click(function() {
    filterResults();
  });

  $('#intermediate').click(function() {
    filterResults();
  });

  $('#advanced').click(function() {
    filterResults();
  });

  $('#supercomputing').click(function() {
    filterResults();
  });
  
  function filterResults() {
    $("#pageTable tr").filter(function() {
      text = $(this).text().toLowerCase();
      searchValue = $("#searchInput").val().toLowerCase();
      
      $(this).toggle(text.indexOf(searchValue) > -1 ? true : false);

      isHome = $('#home').is(':checked');
      isSlide = $('#slides').is(':checked');
      isVideo = $('#video').is(':checked');
      isGitHub = $('#github').is(':checked');

      isCore = $('#core').is(':checked');
      isIntermediate = $('#intermediate').is(':checked');
      isAdvanced = $('#advanced').is(':checked');

      isSupercomputing = $('#supercomputing').is(':checked');
      
      if (isCore || isIntermediate || isAdvanced || isHome || isSlide || isVideo || isGitHub || isSupercomputing) 
      {
        tag = $(this).find("td:eq(1)").html().toLowerCase();        
        if (searchValue == "" &&
            (isCore && tag.indexOf('core') > -1) || 
            (isIntermediate && tag.indexOf('intermediate') > -1) ||
            (isAdvanced && tag.indexOf('advanced') > -1) ||
            (isSupercomputing && tag.indexOf('supercomputing') > -1) ||
            (isHome && $(this).find("td:eq(2)").html() != "") || 
            (isSlide && $(this).find("td:eq(3)").html() != "") || 
            (isVideo && $(this).find("td:eq(4)").html() != "") || 
            (isGitHub && $(this).find("td:eq(5)").html() != ""))
        {
          $(this).toggle(true);
        }
        else if (text.indexOf(searchValue) > -1 &&
                 (isCore && tag.indexOf('core') > -1) || 
                 (isIntermediate && tag.indexOf('intermediate') > -1) ||
                 (isAdvanced && tag.indexOf('advanced') > -1) ||
                 (isSupercomputing && tag.indexOf('supercomputing') > -1) ||
                 (isHome && $(this).find("td:eq(2)").html() != "") || 
                 (isSlide && $(this).find("td:eq(3)").html() != "") || 
                 (isVideo && $(this).find("td:eq(4)").html() != "") || 
                 (isGitHub && $(this).find("td:eq(5)").html() != ""))
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
