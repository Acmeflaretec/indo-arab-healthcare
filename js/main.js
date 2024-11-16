  (function ($) {
  "use strict";
  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");          
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Team carousel
  $(".team-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: false,
    dots: false,
    loop: true,
    margin: 50,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Testimonial carousel

  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: true,
    dots: true,
    loop: true,
    margin: 0,
    // rtl:true,
    nav: true,
    navText: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Fact Counter

  $(document).ready(function () {
    $(".counter-value").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2000,
            easing: "easeInQuad",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  });

  
    // Bind the submit event to the form
    $("#submit-form").on("submit", function (e) {
      e.preventDefault(); // Prevent default form submission behavior
  
      if (!e.target.checkValidity()) {
        e.stopPropagation();
        alert("Please fill in all required fields."); // Optional: add a user-friendly message
        return;
      }
  
      // Show spinner and disable the submit button
      let submitButton = $("#submit-button");
      submitButton.html(
        '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...'
      ).prop("disabled", true);
  
      // Perform AJAX request
      $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxu7pY11pNq4eD8bffsPotzoO55Prw6BI5BhddMgi8zk5g1N2wE72uPv_-kbD4dPesB/exec",
        data: $(this).serialize(),
        method: "POST",
        success: function (response) {
          alert("Form submitted successfully");
          $("#submit-form")[0].reset(); // Reset form fields
          submitButton.html("Submit").prop("disabled", false); // Reset button text and state
        },
        error: function (err) {
          alert("Something went wrong. Please try again.");
          submitButton.html("Submit").prop("disabled", false); // Reset button text and state
        },
      });
    });
  })(jQuery);
  