function Pizzasize(size) {
    this.pSize = size;
}

Pizzasize.prototype.pizzaSize = function () {
    return this.pSize;
}
function Pizzacrust(crust) {
    this.pCrust = crust;
}

Pizzacrust.prototype.pizzaCrust = function () {
    return this.pCrust;
}
function Pizzatopping(toppings) {
    this.pTop = toppings;
}

Pizzatopping.prototype.pizzaTopping = function () {
    return this.pTop + ',';
}



$(document).ready(function() {

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

        function calculateTotal(size,crust,sel) {
        var total = 0;
        switch(size) {
            case 'small' :
                total=total + 600;
                break;
            case 'medium' :
                total=total + 900;
            break;
            case 'large' :
                total=total + 1200;
             break;
        }
        switch(crust) {
            case 'crispy':
                total= total + 100;
                break;
            case 'stuffed':
                total= total + 200;
                break;
            case 'gluten-free':
                    total= total + 300;
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

        
         $('#siz').append(newPizzaSize.pizzaSize());
         $('#crus').append(newPizzaCrust.pizzaCrust());
         $('#toppin').append(newPizzaTopping.pizzaTopping());
         $('#total').append(total + '/=')
    }
    
    calculateTotal(inputtedSize,inputtedCrust,sel);
    
    

    });
    


    if($("#hawaiian").click(function() {
        $("#specs").modal('show');
      })) {
          $('#name').append('Hawaiian')
      } 
      if($("#boerewors").click(function() {
        $("#specs").modal('show');
      })) {
          //append pizza name
      }
      if($("#bbqsteak").click(function() {
        $("#specs").modal('show');
      })) {
          //append pizza name
      }
      if($("#regina").click(function() {
        $("#specs").modal('show');
      })) {
          //append pizza name
      }
      if($("#ppchicken").click(function() {
        $("#specs").modal('show');
      })) {
          //append pizza name
      }
      if($("#ppchicken").click(function() {
        $("#specs").modal('show');
      })) {
          //append pizza name
      }
      if($("#ppchicken").click(function() {
        $("#specs").modal('show');
      })) {
          //append pizza name
      }
      if($("#meat_deluxe").click(function() {
        $("#specs").modal('show');
      })) {
          //append pizza name
      }
      if($("#veg").click(function() {
        $("#specs").modal('show');
      })) {
          //append pizza name
      }
      if($("#c_hawaiian").click(function() {
        $("#specs").modal('show');
      })) {
          //append pizza name
      }
      if($("#spicy_boerewors").click(function() {
        $("#specs").modal('show');
      })) {
          //append pizza name
      }

      ($("#add").click(function() {
        $("#checkout").modal('show');
      }))

    

















});