// Grab the articles as a json
$.getJSON("/articles", function(data) {
  // For each one
  for (var i = 0; i < data.length; i++) {
    console.log(data);
    // Display the apropos information on the page
    $("#articles").append(
      "<div class='article' data-id='" +
        data[i]._id +
        "'>" +
        "<h2>" +
        data[i].title +
        "</h2>" +
        "<br />" +
        "<a class='link' href='" +
        data[i].link +
        "' target=_blank>" +
        "View article" +
        "</a>" +
        "<p class='summary'>" +
        data[i].summary +
        "</p>" +
        "</div>"
    );
  }
});
