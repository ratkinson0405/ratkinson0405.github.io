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
        if ((isCore && text.indexOf('core') > -1 && searchValue == "") || 
            (isIntermediate && text.indexOf('intermediate') > -1 && searchValue == "") ||
            (isAdvanced && text.indexOf('advanced') > -1 && searchValue == "") ||
            (isSupercomputing && text.indexOf('supercomputing') > -1 && searchValue == "") ||
            (isHome && $(this).find("td:eq(2)").html() != "" && searchValue == "") || 
            (isSlide && $(this).find("td:eq(3)").html() != "" && searchValue == "") || 
            (isVideo && $(this).find("td:eq(4)").html() != "" && searchValue == "") || 
            (isGitHub && $(this).find("td:eq(5)").html() != "" && searchValue == ""))
        {
          $(this).toggle(true);
        }
        else if ((isCore && text.indexOf('core') > -1 && text.indexOf(searchValue) > -1) || 
                 (isIntermediate && text.indexOf('intermediate') > -1 && text.indexOf(searchValue) > -1) ||
                 (isAdvanced && text.indexOf('advanced') > -1 && text.indexOf(searchValue) > -1) ||
                 (isSupercomputing && text.indexOf('supercomputing') > -1 && text.indexOf(searchValue) > -1) ||
                 (isHome && $(this).find("td:eq(2)").html() != "" && text.indexOf(searchValue) > -1) || 
                 (isSlide && $(this).find("td:eq(3)").html() != "" && text.indexOf(searchValue) > -1) || 
                 (isVideo && $(this).find("td:eq(4)").html() != "" && text.indexOf(searchValue) > -1) || 
                 (isGitHub && $(this).find("td:eq(5)").html() != "" && text.indexOf(searchValue) > -1))
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
