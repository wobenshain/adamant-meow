$(document).ready(function() {
  if (!document.getElementById('adamant-modal')) {
    $.extend(true,$,{
      "adamant": {
        "modal": {
          "open": function(target) {
            $(target).addClass('adamant-show');
          },
          "close": function(target) {
            $(target).addClass('adamant-fadeout');
            window.setTimeout(function() {
              $(target).removeClass('adamant-show').removeClass('adamant-fadeout').removeClass('adamant-fadein');
            },1000);
            //$(target).removeClass('adamant-modal-show');
          }
        },
        "location": "https://raw.githubusercontent.com/wobenshain/adamant-meow/adamant_modal"
       }
    });
    $('<link href="'+$.adamant.location+'/adamant-modal/adamant-modal.css" id="adamant-modal" rel="stylesheet" type="text/css" />').prependTo(document.head);
    $('<span class="adamant-modal-background" />').prependTo('[adamant-modal]:not([adamant-modal-static])');
    $(document).on('click','[adamant-modal-close]',function() {
      $.adamant.modal.close($(this).closest('[adamant-modal],[adamant-modal-static]'));
    });
    $(document).on('click','[adamant-modal]',function(e) {
      if ($(this).is(e.target)) {
        $.adamant.modal.close($(this));
      }
    });
    $(document).on('click','[adamant-modal-target]',function() {
      $.adamant.modal.open($(this).attr('adamant-modal-target'));
    });
  }
});
