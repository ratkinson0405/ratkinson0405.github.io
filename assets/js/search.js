$(document).ready(function() {
  $("#searchInput").on("keyup", function() {
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

  $('#pawsey').click(function() {
    filterResults();
  });

  $('#external').click(function() {
    filterResults();
  });
  
  function filterResults() {
    $("#pageTable tr").filter(function() {
      text = $(this).text().toLowerCase();
      searchValue = $("#searchInput").val().toLowerCase();
      
      $(this).toggle(text.indexOf(searchValue) > -1 ? true : false);

      isCore = $('#core').is(':checked');
      isIntermediate = $('#intermediate').is(':checked');
      isAdvanced = $('#advanced').is(':checked');

      isSupercomputing = $('#supercomputing').is(':checked');
      
      isPawsey = $('#pawsey').is(':checked');
      isExternal = $('#external').is(':checked');
      
      if (isCore || isIntermediate || isAdvanced || isSupercomputing || isPawsey || isExternal) 
      {
        tag = $(this).find("td:eq(1)").html().toLowerCase();        
        if (searchValue == "" &&
            (isCore && tag.indexOf('core') > -1) || 
            (isIntermediate && tag.indexOf('intermediate') > -1) ||
            (isAdvanced && tag.indexOf('advanced') > -1) ||
            (isSupercomputing && tag.indexOf('supercomputing') > -1) ||
            (isPawsey && tag.indexOf('pawsey') > -1) ||
            (isExternal && tag.indexOf('external') > -1))
        {
          $(this).toggle(true);
        }
        else if (text.indexOf(searchValue) > -1 &&
                 (isCore && tag.indexOf('core') > -1) || 
                 (isIntermediate && tag.indexOf('intermediate') > -1) ||
                 (isAdvanced && tag.indexOf('advanced') > -1) ||
                 (isSupercomputing && tag.indexOf('supercomputing') > -1) ||
                 (isPawsey && tag.indexOf('pawsey') > -1) ||
                 (isExternal && tag.indexOf('external') > -1))
        {
          $(this).toggle(true);
        }
        else 
        {
          $(this).toggle(false);
        } 
      }
      
      sortTable();
    });
  };
});

window.onload = function sortTableByName() {
  sortTable();
}

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("trainingTable");
  switching = true;

  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;

      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
