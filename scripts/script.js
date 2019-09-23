$("#min").click(function () 
{items = $('#sort .block1');
arItems = $.makeArray(items);
arItems .sort(function(a, b) {
	return $(b).data("sort") - $(a).data("sort")
});
$(arItems).appendTo("#sort");
});

$("#max").click(function () 
{items = $('#sort .block1');
arItems = $.makeArray(items);
arItems .sort(function(a, b) {
	return $(a).data("sort") - $(b).data("sort")
});
$(arItems).appendTo("#sort");
});