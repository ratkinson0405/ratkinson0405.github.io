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
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
