$(document).ready(function() {
  $("#searchInput").on("keyup", function() {
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
      
      slides = $(this).find("td:eq(3)").html();
            
      $(this).toggle(text.indexOf(searchValue) > -1 ? true : false);

      isBeginner = $('#beginner').is(':checked');
      isIntermediate = $('#intermediate').is(':checked');
      isAdvanced = $('#advanced').is(':checked');
            
      if (isBeginner || isIntermediate || isAdvanced) 
      {
        if ((isBeginner && text.indexOf('beginner') > -1 && searchValue == "") || 
            (isIntermediate && text.indexOf('intermediate') > -1 && searchValue == "") ||
            (isAdvanced && text.indexOf('advanced') > -1 && searchValue == "")) 
        {
          $(this).toggle(true);
        }
        else if ((isBeginner && text.indexOf('beginner') > -1 && text.indexOf(searchValue) > -1) || 
                 (isIntermediate && text.indexOf('intermediate') > -1 && text.indexOf(searchValue) > -1) ||
                 (isAdvanced && text.indexOf('advanced') > -1 && text.indexOf(searchValue) > -1)) 
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
