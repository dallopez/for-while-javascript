//set variables
var wrap = document.getElementsByClassName("attack")[0];

let dragonDamage = 10;
let userDamage = 5;

//while loop 
while(dragonDamage > 0 && userDamage > 0){
  var damage = window.prompt("How many hits are you going to attempt to hit the dragon with?");
  
  //damage generator
  hitandDamage = Math.floor(Math.random() * damage) + 1;
  if(hitandDamage > 5){
    dragonDamage = dragonDamage - 1;
  }
  else{
    dragonDamage = dragonDamage - hitandDamage;
  }
  //if dragon dies
  if(dragonDamage > 0){
    runandDamage = Math.floor(Math.random() * 2) + 1;
    userDamage = userDamage - runandDamage;
  }

  else{
    wrap.innerHTML = "User Damage = " + userDamage + ", Dragon Damage = " + dragonDamage + ", User Wins!" ; 
    break;
  }
  //if user dies
  if(userDamage <= 0){
     wrap.innerHTML = "User Damage = " + userDamage + ", Dragon Damage = " + dragonDamage + ", User Wins!" ; 
    break;
  }
  
  
}