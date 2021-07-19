$("h1").click(function() {
  $("h1").css("color", "purple");
});

$("button").click(function() {
  $("h1").css("color", "purple");
});

$("input").keypress(function(event) {
  console.log(event.key);
  $("h1").text(event.key);
})

$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
