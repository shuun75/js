$(document).ready(function() {
  let count = 0
  $("#start").click(function() {
    let timerId = setInterval(function() {
      count++
      second = count % 60
      minute = (Math.floor(count % 3600 / 60))
      hour = (Math.floor(count / 3600))
      
      // タイマー停止
      $("#stop").click(function() {
        clearInterval(timerId);
      });
      
      // タイマーリセット
      $("#reset").click(function() {
        clearInterval(timerId);
        count = null;
        $("#second, #minute, #hour").text(0);
      });
      
      $("#second").text(second);
      $("#minute").text(minute);
      $("#hour").text(hour);
    }, 1000);
  });
  // ボタンの活性・非活性
  $("#stop, #reset").prop("disabled", true);
  
  $("#start").click(function() {
    $("#start").prop("disabled", true);
    $("#stop, #reset").prop("disabled", false);
  });
  
  $("#stop").click(function() {
    $("#start").prop("disabled", false);
    $("#stop").prop("disabled", true)
  });
  
  $("#reset").click(function() {
    $("#start").prop("disabled", false);
    $("#stop, #reset").prop("disabled", true);
  })
});
