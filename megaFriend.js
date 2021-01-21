function megaFriend(array){
    var c=0;
    var unique=[];
    for( var i=0;i<array.length;i++){
        var c=array[i].length;
        unique.push(c);
        c=0;
    for(var j=0;j<unique.length;i++){
    var max=unique[0];
    if(unique[i]>max){
        max=unique[i];
    }
    } }
    return max;
}
var array=["alam","jalom","kaloma","jahamana"];
var element=megaFriend(array);
console.log(max)