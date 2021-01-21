function budgetCalculator(watchNum,phoneNum,laptopNum){
    var watchCost=watchNum*50;  //1 watch=50taka
    var phoneCost=phoneNum*100;  //1 phone=100 taka
    var laptopCost=laptopNum*500; // 1 laptop=500 taka
    var totalcost=watchCost+phoneCost+laptopCost; //totalcost watch phone and laptop ar
    return totalcost;
}
var totaltaka=budgetCalculator(1,2,3);
console.log(totaltaka)