$(document).ready(function() {
    // Ajouter une classe active au lien de la section active dans la barre de navigation
    $('.navbar-nav .nav-link').click(function() {
      $('.navbar-nav .nav-link').removeClass('active');
      $(this).addClass('active');
    });
  
    // Animation de défilement fluide pour les liens de navigation
    $('.navbar-nav .nav-link, .footer-nav .nav-link').click(function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 1000);
    });
  
    // Animation au survol des compétences
    $('.skills ul li').hover(function() {
      $(this).addClass('animated pulse');
    }, function() {
      $(this).removeClass('animated pulse');
    });
  
    // Animation d'apparition lors du défilement
    $(window).scroll(function() {
      $('.fade-in').each(function() {
        var position = $(this).offset().top;
        var topOfWindow = $(window).scrollTop() + $(window).height();
        if (position < topOfWindow) {
          $(this).addClass('animated fadeIn');
        }
      });
    });
  
    // Affichage d'une notification après l'envoi du formulaire de contact
    $('#contact-form').submit(function(e) {
      e.preventDefault();
      var form = $(this);
      $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
        success: function(response) {
          $('.notification').fadeIn().delay(3000).fadeOut();
          form.trigger('reset');
        }
      });
    });
  });
  