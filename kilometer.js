function kilometerToMeter(number){

    if(number<0){
        return "Distance is not a negative value"; //if number ar value negative hola error dekhaba
    }

    var meterValue=number*1000; //convert the value of kilometer to meter and we know 1 kilometer=1000 meter
    return meterValue;

    
}

var result=kilometerToMeter(3);
console.log(result)