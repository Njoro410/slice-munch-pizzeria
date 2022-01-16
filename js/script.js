function Pizza(size,crust,toppings) {
    this.psize = size;
    this.pcrust = crust;
    this.ptoppings = toppings; 
}

Pizza.prototype.pizzaDetails = function () {
    return this.psize + this.pcrust + this.ptoppings;
}


$(document).ready(function() {

    $("form#accessories").submit(function(event) {
        event.preventDefault();

        var inputtedSize = $("#size input[type='radio']:checked").val();
        var inputtedCrust = $("#crust input[type='radio']:checked").val();
        var sel = $('input[type=checkbox]:checked').map(function(_, el) {
            return $(el).val();
        }).get();


        var newPizza = new Pizza(inputtedSize,inputtedCrust,sel);

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

    //     var toppingTotal = sel.length*100;
    //     var finTotal = toppingTotal + total;
    //    alert(finTotal);
        // alert(sel[0]);
        alert(newPizza.pizzaDetails());
         alert(total);
    }
    
    calculateTotal(inputtedSize,inputtedCrust,sel);



    });
    


    if($("#hawaiian").click(function() {
        $("#specs").modal('show');
      })) {
          //append pizza name
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

    

















});