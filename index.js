$("#car-photo").attr(
  "src",
  "https://mc-astro.github.io/tesla-roadster-colors/img/midnight.jpg"
);

$(".text").text("Midnight Silver Metallic");


let renderColors = (data) => {
  $.each(data, function () {
    let color = $('<span>').addClass('color mx-auto').css("background-color", this.color);
    $('.collor-wrapper').append(color);

    color.on("click", () => {
      $("#car-photo").attr(
        "src",
        `https://mc-astro.github.io/tesla-roadster-colors/img/${this.img}.jpg`
      );
      $(".text").text(this.title);
    });
  });
};

let getColors = () =>
  $.ajax({
    url: "https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json",
    dataType: "json",
    success: function (res) {
      renderColors(res);
    }
  });

getColors();