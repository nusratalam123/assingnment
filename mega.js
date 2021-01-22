function megaFriend(array){

    var maxArray=array[0]; // array ar first value ka define korse maxArray dara

        for(let j=0;j<array.length;j++){

            var elementArray=array[j];
            if(maxArray.length<elementArray.length){ //compeare two array value
                
                maxArray=elementArray;   //if elementArray gather than maxArray then this condition

            }
        }
    return maxArray;
}
var array=["jagangiralam","mdsharafatullah","kalom","jahamana"];

var largeName=megaFriend(array);
console.log(largeName)