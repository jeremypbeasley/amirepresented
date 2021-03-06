// INPUT FIELDS

$(document).ready(function() {
  $('input.InputText').each(function() {
    $(this).on('focus', function() {
      $(this).parent('.FormItem').addClass('active');
    });
    $(this).on('blur', function() {
      if ($(this).val().length == 0) {
       $(this).parent('.FormItem').removeClass('active');
      }
      if ($(this).val() != '') {
        $(this).parent('.FormItem').addClass('active');
      }
    });
  });
});

// SNACKBARS

function templateSnackbar(id, message, type) {
  var snackbarType = "";
  if (type == "notif") {
    snackbarType = "TypeNotif";
  }
  if (type == "conf") {
    snackbarType = "TypeConf";
  }
  if (type == "error") {
    snackbarType = "TypeError";
  }
  return [
    '<div class="Snackbar ' + snackbarType + '" id="' + id + '"><span>' + message + '</span></div>'
  ].join('\n');
}

function displaySnackbar(message, type) {
  var newSnackbarId = "Snackbar_" + Math.random().toString(36).substr(2, 10);
  $('#SnackbarCont').append(templateSnackbar(newSnackbarId, message, type))
  setTimeout(
    function(){
      $('#' + newSnackbarId).addClass("Active");
    },
  100);
  setTimeout(
    function(){
      $('#' + newSnackbarId).removeClass("Active");
    },
  3000);
  setTimeout(
    function(){
      $('#' + newSnackbarId).remove();
    },
  3200);
}

$('.SnackbarTrigger').click(function() {
  displaySnackbar($(this).attr('data-msg'), $(this).attr('data-type'));
});

// OVERLAYS

$('.Overlay').hide();

function openOverlay() {
  $('.Overlay').show();
  $('.OverlayScrim').show();
  setTimeout(function(){
    $('.Overlay').addClass("Active");
    $('.OverlayScrim').addClass("Active");
  }, 1);
}

function closeOverlay() {
  $('.Overlay').removeClass("Active");
  $('.OverlayScrim').removeClass("Active");
  setTimeout(function(){
    $('.Overlay').hide();
    $('.OverlayScrim').hide();
    $('.Overlay .OverlayContent').html("");
    $('.OverlayCity, .OfficialRoster, .ShareContainer, .OverlaySiteCredit').fadeTo(0, 0);
  }, 100);
}

function populateOverlay(content) {
  $('.Overlay .OverlayContent').html(content);
}

$(".OverlayClose").click(function() {
  closeOverlay();
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    closeOverlay();
  }
});

$(".OverlayScrim").click(function() {
  closeOverlay();
});



// $(".OverlayClose").click(function() {
//   closeOverlay();
// });
// // $(".Overlay").on("swipe",function(){
// //   CloseOverlay();
// // });
//
// $(document).keyup(function(e) {
//   if (e.keyCode == 27) {
//     closeOverlay();
//   }
// });
