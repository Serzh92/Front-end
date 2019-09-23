$(".block1").click(function () {
  $(this).toggleClass("highlight");

  if ($(".highlight").length > 0) { 
    $( "#del" ).attr("disabled", false);
  } else {
    $( "#del" ).attr("disabled", true);
  }  
});
$(document).ready(function () {
  $("#del").click(function () {
    $(".highlight").remove();
  });
});


if ($(".highlight").length > 0) { 
  $( "#del" ).attr("disable");
} else {
  $( "#del" ).attr("enabled");
};

$( function() {
  $( "#sort" ).sortable({
    placeholder: "ten"
  }); 
  $( "#sort" ).disableSelection();
} );

