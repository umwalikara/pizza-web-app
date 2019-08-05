var PizzatotalPrice =[];
function pizzaOrder(pizzaSize, pizzaCrust, pizzaTopping, pizzaQuantity) {
    this.pizzaSize = pizzaSize;
    this.pizzaCrust =pizzaCrust ;
    this.pizzaTopping=pizzaTopping;
    this.pizzaQuantity=pizzaQuantity;
    this.pizzaPrice=0;

  }
pizzaOrder.prototype.pizzaPizza = function() { 
    if (this.pizzaSize==="small"){
        this.pizzaPrice+=1000;
      }
    else if(this.pizzaSize==="medium"){
        this.pizzaPrice+=1500;
      }
    else if(this.pizzaSize==="large"){
        this.pizzaPrice+=3000; 
      }
    if(this.pizzaCrust==="option1"){
        this.pizzaPrice+=500;
      }
    else if(this.pizzaCrust==="option2"){
        this.pizzaPrice+=700;
      }
    else if(this.pizzaCrust==="option3"){
        this.pizzaPrice+=1500;
      }
    if(this.pizzaTopping==="top1"){
        this.pizzaPrice+=1500;
      }
    else if(this.pizzaTopping==="top2"){
        this.pizzaPrice+=2000;
      }
    else if(this.pizzaTopping==="top3"){
        this.pizzaPrice+=4000;
      }
    return this.pizzaPrice;
}
pizzaOrder.prototype.finalCost = function () {
    var TotalPrice = 0;
    for (var i = 0; i < PizzatotalPrice.length; i ++) {
      TotalPrice += PizzatotalPrice[i];
    }
    return TotalPrice;
    }

    pizzaOrder.prototype.tatolCharge = function(){
       return this.deliveryCharge;
    }
    $(document).ready(function() {
        $("#btn").click(function(event) {
            event.preventDefault();
          var pizzaSize = $("select#size").val();
          console.log(pizzaSize);
          var pizzaCrust = $("input.cru").val();
          var pizzaTopping = $("input.topp").val();
          var pizzaDetails = (pizzaSize + ": " + pizzaCrust + ", " + pizzaTopping);
          var newPizzaOrder = new pizzaOrder(pizzaSize, pizzaCrust,pizzaTopping);
          newPizzaOrder.pizzaPizza();
          PizzatotalPrice.push(newPizzaOrder.pizzaPrice);
          $("#pizzaDetails").show();
          $("#price").text(newPizzaOrder.finalCost());
          $("#pizzaDetails").append("<p>" + pizzaDetails + "</p>");
          $("#size,.cru, .topp").val("");
        });
    })