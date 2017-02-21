$(document).ready(function() {
  $("#listForm").submit(function(event) {
    event.preventDefault();
      var items = ["#item1", "#item2", "#item3"];
      var items2 = []
      items.map(function(item) {
        var outputs = $("input" + item).val();
        items2.push(outputs);
      });
      items2.sort();
      var items3 = items2.map(function(x) {
        return x.toUpperCase();
      });
      items3.forEach(function(y){
      $("#listOutput").append("<li>" + y + "</li>");
    });
  });
});
