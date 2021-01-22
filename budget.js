function budgetCalculator(watchNum, phoneNum, laptopNum){

    if(watchNum<0&&phoneNum<0&&laptopNum<0){
        return "Error calculation"; //koita phone,watch,laptop ar value nagetive hota para na
    }
    
     if(watchNum>=0||watchNum<0){
         if(watchNum<0){
             var watchCost=0;
         }
         else{
     watchCost=watchNum*50;  //1 watch=50 taka
         }
     }

     if(phoneNum>=0||phoneNum<0){
        if(phoneNum<0){
            var phoneCost=0;
        }
        else{
    phoneCost=phoneNum*100;  //1 phone = 100 taka
        }
    }

    if(laptopNum>=0||laptopNum<0){
        if(laptopNum<0){
            var laptopCost=0;
        }
        else{
    laptopCost=laptopNum*500;  //1 laptop = 500 taka
        }
    }

    var totalcost=watchCost+phoneCost+laptopCost; //totalcost watch phone and laptop ar
    return totalcost;
}
//var totaltaka=budgetCalculator(-1,2,3);
//var totaltaka=budgetCalculator(1,2,3);
var totaltaka=budgetCalculator(-1,-2,-3);
console.log(totaltaka)