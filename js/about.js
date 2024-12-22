$(document).ready(function () {
    // Feedback Form Submission
    $("#feedbackForm").on("submit", function (e) {
      e.preventDefault(); // Prevent actual form submission
      const name = $("#name").val();
      const email = $("#email").val();
      const message = $("#message").val();
  
      if (name && email && message) {
        $("#feedback-message")
          .css("color", "green")
          .html(`Thank you for your feedback, ${name}!`);
      } else {
        $("#feedback-message")
          .css("color", "red")
          .html("Please fill out all fields before submitting.");
      }
  
      // Reset form fields
      $(this).trigger("reset");
    });
  
    // Toggling Hours Section
    $("#toggle-hours").on("click", function () {
      const options = {
        duration: 1000,
        easing: "swing",
        complete: () => {
          alert("Hours section toggled!");
        }
      };
      $(".about-hours").toggle(options);
    });
  
    // Add Focus Effect to Form Inputs
    $("#feedbackForm input, #feedbackForm textarea").on("focus", function () {
      $(this).addClass("focused-input");
    });
  
    $("#feedbackForm input, #feedbackForm textarea").on("blur", function () {
      $(this).removeClass("focused-input");
    });
  
    // Navigation Hover Effect
    $("header nav a").hover(
      function () {
        $(this).css("color", "#2ecc71");
      },
      function () {
        $(this).css("color", "");
      }
    );
  });
  