(function () {
  var menu = document.querySelector('.js-menu');
  var selectGuests = document.querySelector('.js-guests');
  menu.addEventListener('click', function () {
    menu.classList.toggle('opened');
  });
  selectGuests.addEventListener('change', function(e) {
    var numberGuests = parseInt(selectGuests.value);
    var guests = document.querySelectorAll('.guest');
    for (var i = 0; i < guests.length; i += 1) {
      guests[i].classList.remove('show');
      guests[i].querySelector('input').required = false;
    }
    for (var i = 0; i < numberGuests; i += 1) {
      var guestInput = document.querySelector('.guest-' + (i+1));
      guestInput.classList.add('show');
      guestInput.querySelector('input').required = true;
    }
  });
  document.querySelector(".js-rsvp").addEventListener('submit', function(e) {
    e.preventDefault();
    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      swal({
        type: 'success',
        title: 'Obrigado!',
        text: 'Sua presença foi confirmada.',
        showConfirmButton: false,
        timer: 3000
      });
      return document.querySelector(".js-rsvp").reset();
    });
  });
}());
