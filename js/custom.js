const navigation = document.querySelector(".sidebar");

$('.add-new-fields-wrapper').click(function(){
  $(this).toggleClass('show');
});

// Change the selector if needed
var $table = $('table.table'),
    $bodyCells = $table.find('tbody tr:first').children(),
    colWidth;

// Adjust the width of thead cells when window resizes
$(window).resize(function() {
    // Get the tbody columns width array
    colWidth = $bodyCells.map(function() {
        return $(this).width();
    }).get();
    
    // Set the width of thead columns
    $table.find('thead tr').children().each(function(i, v) {
        $(v).width(colWidth[i]);
    });    
}).resize(); // Trigger resize handler
document.getElementById("input").addEventListener("change", (e) => {
  document.getElementById("span").innerText = e.target.files[0].name;
});