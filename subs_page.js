


$(document).ready(function () {
  $('input[type="checkbox"]').change(function () {
    if ($(this).is(":checked")) {
      // Show Yearly
      $('.monthly-price, .monthly-plan').addClass("d-none");
      $('.yearly-price, .yearly-plan').removeClass("d-none");
    } else {
      // Show Monthly
      $('.monthly-price, .monthly-plan').removeClass("d-none");
      $('.yearly-price, .yearly-plan').addClass("d-none");
    }
  });

  $('.card').mouseenter(function (event) {
    $('.card').removeClass("card-selected");
    $(event.currentTarget).addClass("card-selected");
  });
});


