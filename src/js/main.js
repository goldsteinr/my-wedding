(function () {
  var menu = document.querySelector('.js-menu');
  menu.addEventListener('click', function () {
    menu.classList.toggle('opened');
  });
  $(".js-rsvp").submit(function(e) {
    e.preventDefault();
    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      alert("Thank you!");
    });
  });
}());
