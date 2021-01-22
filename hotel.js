function hotelCost(totalDay){
    var totalCost=0;

    if(totalDay<0||totalDay==0){
        if(totalDay<0){
            return "Days value is negative";
        }
        else{
            return "total cost is zero";
        }
    }
    
    if(totalDay<=10){  //jodi total days 1 thakka 10 tar modha hoy 
        totalCost=totalDay*100; //given that 1 to 10 days hola per day=100 taka
    }
    else if(totalDay<=20){  //jodi total days 20 ar tar modha hoy 
       var firstPart =10*100; //first 10 days ar jonno cost..
       var remainingDay = totalDay-10;   //10 days ar pora baki jai days gulo asa oy gulo remaining days
       var secondPart=remainingDay*80;  //reaming days gulo ka 80 deye gun korse cause 11 thakka 20 day ar din gulo ta 20 taka sar deselo
       totalCost=firstPart+secondPart; //1 thakka 20 hola totalcost

    }
    else{
        var firstPart =10*100;  //jodi total days 1 thakka 10 tar modha hoy 
        var secondPart=10*80;  //jodi total days 11 thakka 20 tar modha hoy 
        var remainingDay = totalDay-20; //20 days ar upora hola baki din gulo ka remaining days dhorse
        var thirdPart=remainingDay*50; //reaming days gulo ka 50 deye gun korse cause 20 days ar upor  din gulo ta 50 taka kora selo
        totalCost=firstPart+secondPart+thirdPart; //total cost for anys days and days gulo 20 ar vase
 
     }

    return totalCost;
}

var totaltaka=hotelCost(-4);
console.log(totaltaka)