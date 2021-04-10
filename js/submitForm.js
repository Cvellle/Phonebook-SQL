const formElement = document.querySelector(".formEl");
const submitBtn = document.querySelector(".submitBtn");

$(".submitBtn").on("click", function (e) {
  let datastring = $("#formEl").serialize();
  $.ajax({
    type: "POST",
    url: "https://httpbin.org/post",
    data: datastring,
    dataType: "json",
    success: function (data) {
      var obj = JSON.stringify(data);
      alert(obj);
    },
    error: function () {
      $(".result").append("error handing here");
    },
  });
});
