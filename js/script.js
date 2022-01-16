function Pizzasize(size) {
  this.pSize = size;
}

Pizzasize.prototype.pizzaSize = function() {
  return this.pSize;
}

function Pizzacrust(crust) {
  this.pCrust = crust;
}

Pizzacrust.prototype.pizzaCrust = function() {
  return this.pCrust;
}

function Pizzatopping(toppings) {
  this.pTop = toppings;
}

Pizzatopping.prototype.pizzaTopping = function() {
  return this.pTop + ',';
}

$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({
    'overflow': 'visible'
  });
})



$(document).ready(function() {

  $('#continue').click(function() {
    window.location.href = "/public/home.html";
  });
  $('#understood').click(function() {
    location.reload();
  });
  $('#close').click(function() {
    location.reload();
  });
  $('#cllose').click(function() {
    location.reload();
  });

  $("form#accessories").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("#size input[type='radio']:checked").val();
    var inputtedCrust = $("#crust input[type='radio']:checked").val();
    var sel = $('input[type=checkbox]:checked').map(function(_, el) {
      return $(el).val();
    }).get();


    var newPizzaSize = new Pizzasize(inputtedSize);
    var newPizzaCrust = new Pizzacrust(inputtedCrust);
    var newPizzaTopping = new Pizzatopping(sel);

    function calculateTotal(size, crust, sel) {
      var total = 0;
      switch (size) {
        case 'small':
          total = total + 600;
          break;
        case 'medium':
          total = total + 900;
          break;
        case 'large':
          total = total + 1200;
          break;
      }
      switch (crust) {
        case 'crispy':
          total = total + 100;
          break;
        case 'stuffed':
          total = total + 200;
          break;
        case 'gluten-free':
          total = total + 300;
          break;
      }
      if (sel.includes("onions")) {
        total = total + 50;
      }
      if (sel.includes("pepper")) {
        total = total + 100;
      }
      if (sel.includes("sausage")) {
        total = total + 75;
      }
      if (sel.includes("garlic")) {
        total = total + 55;
      }
      if (sel.includes("cheese")) {
        total = total + 95;
      }
      if (sel.includes("pineapple")) {
        total = total + 60;
      }
      if (sel.includes("b-olives")) {
        total = total + 150;
      }
      if (sel.includes("mushroom")) {
        total = total + 200;
      }

      ($("#addPizza").click(function() {
        total = total * 2;
        $('#total').text('Total:' + total + '/=');
      }));

      ($("#proceed").click(function() {
        $('#bill').append(total + '/=');
      }));


      ($("#delivery").one('click', function() {
        total = total + 200;
        $('#new-bill').append('<p class="content">Your New Bill is:</p>' + total + '/=');
      }));



      $('#siz').append(newPizzaSize.pizzaSize());
      $('#crus').append(newPizzaCrust.pizzaCrust());
      $('#toppin').append(newPizzaTopping.pizzaTopping());
      $('#total').append(total + '/=')




    }

    calculateTotal(inputtedSize, inputtedCrust, sel);





  });
  ($("#delivery").one('click', function() {
    $("#deli").append('A flat fee of 200/= will be applied' + '<div class="name">' +

      '<div class="form-group">' +
      '<label for="name">Name</label>' +
      '<input type="text" class="form-control" id= "name">' +
      '</div>' +
      '<div class="form-group">' +
      '<label for="address">Address</label>' +
      '<input type="text" class="form-control" id= "address">' +
      '</div>' +
      '<div class="form-group">' +
      '<label for="number">Number</label>' +
      '<input type="tel" class="form-control" id= "num">' +
      '</div>' +
      '</div>');

  }));











  if ($("#hawaiian").click(function() {
      $("#specs").modal('show');
    })) {
    $('#name').append('Hawaiian');
  }


  if ($("#boerewors").click(function() {
      $("#specs").modal('show');
    })) {

  }


  if ($("#bbqsteak").click(function() {
      $("#specs").modal('show');
    })) {

  }

  if ($("#regina").click(function() {
      $("#specs").modal('show');
    })) {
    //append pizza name
  }
  if ($("#ppchicken").click(function() {
      $("#specs").modal('show');
    })) {
    //append pizza name
  }
  if ($("#ppchicken").click(function() {
      $("#specs").modal('show');
    })) {
    //append pizza name
  }
  if ($("#ppchicken").click(function() {
      $("#specs").modal('show');
    })) {
    //append pizza name
  }
  if ($("#meat_deluxe").click(function() {
      $("#specs").modal('show');
    })) {
    //append pizza name
  }
  if ($("#veg").click(function() {
      $("#specs").modal('show');
    })) {
    //append pizza name
  }
  if ($("#c_hawaiian").click(function() {
      $("#specs").modal('show');
    })) {
    //append pizza name
  }
  if ($("#spicy_boerewors").click(function() {
      $("#specs").modal('show');
    })) {
    //append pizza name
  }

  ($("#add").click(function() {
    $("#confirm").modal('show');
  }))

  ($("#proceed").click(function() {
    $("#checkout").modal('show');
  }))



});
