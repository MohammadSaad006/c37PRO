class Food {
  constructor(){
    this.lastFed = null;
  this.foodStock=0;
  this.image=loadImage('Milk.png');
  }
     lastFed  = database.ref('Food');
   
   
    getFoodStock(){
      var foodref = database.ref("Food")
      foodref.on("value",(data)=>{
        this.foodStock = data.val();
      });
      
    }

    deductFood(){
    this.foodStock -= 1;
    }

    updateFoodStock(update){
      database.ref('/').update({
       Food:update,
      })
    }
    lastFed  = database.ref('Food');
    updateFoodStock(foodStock){
     this.foodStock=foodStock;
    }
   
    deductFood(){
      if(this.foodStock>0){
       this.foodStock=this.foodStock-1;
      }
     }
   
     getFoodStock(){
       return this.foodStock;
     }
   
  display(){
    background(46,139,87);
    if (Lastfeed>=12){
      fill("black");
       text("last Feed :"+Lastfeed%12+"PM",100,30)
     }else if(Lastfeed ==0){
      fill("black");
       text("last Feed : 12 AM",100,30)
     }else {
      fill("black");
       text("last Feed : "+Lastfeed+"AM",100,30)
     }
    var x=80,y=100;
    
    imageMode(CENTER);
 
    
    if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
          x=80;
          y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30;
  }
   }
 }
 
 bedroom(){
  background(bedroom,200,500);  
}

garden(){
  background(garden,200,500);  
} 

washroom(){
  background(washroom,200,500); 
}
}