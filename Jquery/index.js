$(function () {
  $("h1").css("color", "red");
  $("button").addClass('but');
  $("button").html("<em>hello</em>");
  $("img").attr('src', 'https://static.wikia.nocookie.net/heros/images/2/20/Rick_Sanchez_Infobox.jpg/revision/latest/top-crop/width/360/height/450?cb=20200625183743&path-prefix=fr');
  $("button").on("click", function() {
    $("img").fadeToggle(400);
  });
});
