function calculateMealPlan(){

    //initialize
    const mealsPerDay = document.getElementById("inp_meals_per_day").value;
    const totalCaloriesPerDay = document.getElementById("inp_total_cal").value;
    const calorieOverflowLimit = document.getElementById("inp_over_limit").value;
    const output = document.getElementById("output");

    //create food item list 
    const foods = [
          { name: "Food Item A", calories: 239 },
          { name: "Food Item B", calories: 130 },
          { name: "Food Item C", calories: 155 },
          { name: "Food Item D", calories: 200 },
          { name: "Food Item E", calories: 20 },
          { name: "Food Item F", calories: 500 },
          { name: "Food Item G", calories: 100 },
          { name: "Food Item H", calories: 50 },
          { name: "Food Item I", calories: 10 }
        ];
        
    var foodsCalories = 0;

    for(var f = 0; f < foods.length; f++){
        foodsCalories = foods[f].calories;
    }
    
    //calulate calories per meal
    var CaloPerMeal = totalCaloriesPerDay / mealsPerDay;
        
    //total calories intake perday
    var toalcalories = (totalCaloriesPerDay / calorieOverflowLimit) + calorieOverflowLimit;
    
    //check exceed per day more than 100
    if(toalcalories < 100  || mealsPerDay >= 3){
        output.innerText = "Unable to generate a meal plan.";
        output.style.display = "block";
    }
    if(foodsCalories > totalCaloriesPerDay + calorieOverflowLimit){
        output.innerText = "Unable to generate a meal plan.";
        output.style.display = "block";
    }else{
        //declare arrays
        var meal1 = [];
        var meal2 = [];

        //check number of meals
        if(mealsPerDay == 2){
            var status = false;
            
            //meal 1, first pair create
            for (var i = 0; i < foods.length; i++){
                if (status == false){
                    var food = foods[i];
                    for(var j = 0; j < foods.length; j++){
                        //check foods combination equal to it meal calories
                        if( food.calories + foods[j].calories == (CaloPerMeal / 2)){
                            //add foods to array
                            meal1.push(food.name, foods[j].name);
                            status = true;
                            break;
                        }
                    }
                }
            }

            var status2 = false;
            //meal 1 second pair create
            for (var m = 0; m < foods.length; m++){
              if (status2 == false){
                  var food2 = foods[m];
                  
                  //chek food exists or not in meal
                  if(meal1.includes(food2.name)){
                      continue;
                  }else{
                        
                        for(var n = 0; n < foods.length; n++){
                            //check foot combinatio equal to it meal calories
                            if( food2.calories + foods[n].calories == (CaloPerMeal / 2)){
                                //add foods to array
                                meal1.push(food2.name, foods[n].name);
                                status2 = true;
                                break;
                            }
                        }
                  }
               }
            }

            var status3 = false;
            
            //meal2 create
            for (var t = 0; t < foods.length; t++){
                //chek the meals ok or not
                if(status3 == false){
                    //store food item
                    var food3 = foods[t];
                    
                    for(var r = 0; r < foods.length; r++){
                        //check food combination equalitiy to per meals calories
                        if( food3.calories + foods[r].calories == CaloPerMeal){
                            //store foods in meal array
                            meal2.push(food3.name, foods[r].name);
                            status3 = true;
                            break;
                        }
                    } 
                }
               
                 
            }

            if(meal1.length < 4 || meal2 == 0){
                output.innerText = "Unable to generate a meal plan.";
                output.style.display = "block";
            }
            else{
                //create answer
                var getMealOne = "Meal 1:" + meal1.map(foodM1 => " " + foodM1).toString();
                var getMealTwo = "Meal 2:" + meal2.map(foodM2 => " " + foodM2).toString();

            }
            
        }
        else if(mealsPerDay == 1){
            var status1 = false;
            
            //create meal 
            for (var p = 0; p < foods.length; p++){
                //chek the meals ok or not
                if(status1 == false){
                    //store food item
                    var foodP = foods[p];
                    
                    for(var q = 0; q < foods.length; q++){
                        //check food combination equalitiy to per meals calories
                        if( foodP.calories + foods[q].calories == CaloPerMeal){
                            //store foods in meal array
                            meal1.push(foodP.name, foods[q].name);
                            
                            status1 = true;
                            break;
                        }
                    } 
                }
                else{
                    break;
                }
                
            }


            if(meal1.length == 0){
                output.innerText = "Unable to generate a meal plan.";
                output.style.display = "block";
            }
            else{
                var getMealOne = "Meal 1:" + meal1.map(foodM1 => " " + foodM1).toString();
                var getMealTwo = "";
            }
        }
        
    }
    
    //display meals
    if (getMealTwo.length > 0){
        output.innerHTML = getMealOne + "<br/><br/>" + getMealTwo;
        output.style.display = "block";
    }else{
        output.innerHTML = getMealOne;
        output.style.display = "block";
    } 

   
}


function hiddeOutput(){
    output.style.display = "none";
}


