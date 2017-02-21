$(document).ready(function() {
  $("#listForm").submit(function(event) {
    event.preventDefault();
      var items = ["item1", "item2", "item3"];
      items.forEach(function(item) {
        var outputs = $("input#" + item).val();
        var outputsCaps = outputs.map(function(output){
          return output.toUpperCase();
        });
        $("#listOutput").append("<li>" + outputsCaps + "</li>");
      });
    });
  });
