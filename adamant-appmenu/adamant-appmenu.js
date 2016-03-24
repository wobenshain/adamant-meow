$(document).ready(function() {
  if (!document.getElementById('adamant-appmenu')) {
    $.extend(true,$,{
      "adamant": {
        "appmenu": {
          "open": function(target) {
            var target = $(target);
            var prev = target.prev();
            var open = $("[adamant-appmenu-app].adamant-appmenu-show");
            if (open.length > 0) {
              $.adamant.appmenu.close(open);
              window.setTimeout(function() {
                target.remove();
                target.insertAfter(prev);
                target.addClass("adamant-appmenu-show");
              },500);
            } else {
              target.remove();
              target.insertAfter(prev);
              target.addClass("adamant-appmenu-show");
            }
          },
          "close": function(target) {
            var target = $(target);
            var prev = target.prev();
            target.remove();
            target.insertAfter(prev);
            $(target).addClass("adamant-appmenu-close");
            window.setTimeout(function() {
              $(target).removeClass("adamant-appmenu-show");
              $(target).removeClass("adamant-appmenu-close");
            },500);
          }
        },
        "location": "http://wobenshain.github.io/adamant-meow/"
       }
    });
    $('<link href="'+$.adamant.location+'/adamant-appmenu/adamant-appmenu.css" id="adamant-modal" rel="stylesheet" type="text/css" />').prependTo(document.head);
    $('[adamant-appmenu]').on('click','[adamant-appmenu-app]:not(.adamant-appmenu-show) [adamant-appmenu-appicon]',function(e) {
      var target = $(e.target).closest("[adamant-appmenu-app]");
      $.adamant.appmenu.open(target);
    });
    $('[adamant-appmenu]').on('click','[adamant-appmenu-app].adamant-appmenu-show [adamant-appmenu-appicon], [adamant-appmenu-app].adamant-appmenu-show [adamant-appmenu-appheader]', function(e) {
      var target = $(e.target).closest("[adamant-appmenu-app]");
      var reference = target.attr("href");
      window.location = reference;
    });
    $(document).on("click",function(e) {
      if ($(e.target).closest("[adamant-appmenu-app]").length < 1) {
        $.adamant.appmenu.close($("[adamant-appmenu-app].adamant-appmenu-show"));
      }
    });
  }
});
