$(document).ready(function() {
  var id = $("#phone").val();
  var priority = $("#priority").val();

  //THis is te code for enqueuing
  $("#sumbit").click(function() {
    $.ajax({
            url:"/JustCome/waitlist/enqueue",
            type: "get",
            data: {
              patientID: id,
              priority: priority,
            },
            dataType: "json",
            success: function(response) {
              alert("Data sent");
            },
            failure: function(xhr) {
              alert("failed");
            },
          });
  });
//This is the code for dequeuing
  $("#next").click(function() {
    $.ajax({
            url:"/JustCome/waitlist/dequeue",
            type: "GET",
            success: function(data) {
              alert(data);
            },
            failure: function(xhr) {
              alert("failed");
            },
          });
  });
});
