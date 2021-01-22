function megaFriend(arr){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j].length<arr[j+1].length){
                arr[j]=arr[j+1];

            }

        }
    return arr;
}
var arr=["alammajajigabi","jalo","kalom","jahamana"];
var element=megaFriend(arr);
console.log(element[0])