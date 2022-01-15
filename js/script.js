function pro() {
    var name = document.getElementById("name").value;
    var add =  document.getElementById("address").value;
    alert(name);
    alert(add);
}



$(document).ready(function() {
    $("#continue").click(function() {
        $("#feedbackModal").modal('show');
      })

    $("#delivery").click(function() {
        $('#deli').append('A fixed delivery fee of 200/= will be applied'+'<div class="form-group">' +
        '<label for="address">Address:</label>' +
        '<input type="text" class="form-control" id="address" placeholder="enter your address">' +
      '</div>');
    })

    $("#proceed").click(function() {
        $(location).attr('href', '../public/home.html');
        
      })

    });