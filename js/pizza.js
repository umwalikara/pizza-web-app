function pizzaorder(pizzasize, pizzacrust, pizzatopping, pizzaquantity) {
    this.pizzasize = pizzasize;
    this.pizzacrust =pizzacrust ;
    this.pizzatopping=pizzatopping;
    this.pizzaquantity=pizzaquantity;
    this.pizzaprice=0;

  }
pizzaorder.prototype.pizzapizza = function() { 
    if (this.pizzasize==="small"){
        this.pizzaprice+=1000;
      }
    else if(this.pizzasize==="medium"){
        this.pizzaprice+=1500;
      }
    else if(this.pizzasize==="large"){
        this.pizzaprice+=3000; 
      }
    if(this.pizzacrust==="option1"){
        this.pizzaprice+=500;
      }
    else if(this.pizzacrust==="option2"){
        this.pizzaprice+=700;
      }
    else if(this.pizzacrust==="option3"){
        this.pizzaprice+=1500;
      }
    if(this.pizzatopping==="top1"){
        this.pizzaprice+=1500;
      }
    else if(this.pizzatopping==="top2"){
        this.pizzaprice+=2000;
      }
    else if(this.pizzatopping==="top3"){
        this.pizzaprice+=4000;
      }
    return this.pizzaprice;
}