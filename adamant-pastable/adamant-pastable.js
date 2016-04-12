$(function() {
  if (!document.getElementById('adamant-pastable')) {
    $.extend(true,$,{
      "adamant": {
        "pastable": {
          "functions": {}
        },
        "location": "http://wobenshain.github.io/adamant-meow"
       }
    });
    $('<link href="'+$.adamant.location+'/adamant-pastable/adamant-pastable.css" id="adamant-pastable" rel="stylesheet" type="text/css" />').prependTo(document.head);
    $(document).on('paste','[adamant-pastable] textarea',function() {
      var pastefunction = $.adamant.pastable.functions[$(e.target).parent().attr('adamant-pastable')];
      var data = $(e.target).val();
      setTimeout(function() {
        pastefunction(data);
      },1);
    });
  }
});