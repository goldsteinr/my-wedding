(function () {
  var menu = document.querySelector('.js-menu');
  menu.addEventListener('click', function () {
    menu.classList.toggle('opened');
  });
  window.sr = ScrollReveal();
  sr.reveal('.reveal');
  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 50,
    speed: 800,
  });
  document.querySelector(".js-rsvp").addEventListener('submit', function(e) {
    e.preventDefault();
    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      swal({
        type: 'success',
        title: 'Obrigado!',
        text: 'Sua presença foi confirmada!',
        showConfirmButton: false,
        timer: 3000
      });
      return document.querySelector(".js-rsvp").reset();
    });
  });
}());
