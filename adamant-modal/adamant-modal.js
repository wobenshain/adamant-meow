$(document).ready(function() {
  $.extend(true,$,{
    "adamant": {
      "modal": {
        "open": function(target) {
          
        },
        "close": function(target) {
          $(target).removeClass('adamant-modal-show');
        }
      }
    }
  });
  $('head').append($('<link href="adamant-modal.css" rel="stylesheet" type="text/css"></link>'));
  $('body').on('click','[adamant-modal-close]',function() {
    $.adamant.modal.close($(this).closest('[adamant-modal]'));
  });
  $('body').on('click','[adamant-modal]',function(e) {
    var target = $(e.target);
    alert('x');
    if ($('[adamant-modal]').has(target)) {
      target.css('border','1px solid blue');
    }
  });
});
