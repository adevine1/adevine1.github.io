$('.card').hide();

$(document).ready(function() {

  console.log("document ready");

  $(".dropdown-item").click(function (e) {
      let chapterNumber=e.target.innerHTML;
      console.log(chapterNumber);
      $('.card').hide();
      $(`.card${chapterNumber}`).show();
      if (chapterNumber==="all") {
        $('.card').show();
      }
  })
})