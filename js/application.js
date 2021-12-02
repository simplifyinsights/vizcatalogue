$(".search").on("keyup", function () {
  $(".card-search").each(function (i, obj) {
    if (
      $(this).text().toUpperCase().includes($(".search").val().toUpperCase())
    ) {
      $(this).parent().parent().parent().parent().show();
    } else {
      $(this).parent().parent().parent().parent().hide();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems, {});
});
