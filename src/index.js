module.exports = function solveSudoku(matrix) {
   
   
    

    //var indices = [];
    //var result_arr = [];
    
  var arr = [
    [5, 3, 4, 6, 7, 8, 9, 0, 0],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]; 

     
for (i = 0; i < result_arr.length; i++) {
    
   result_arr[i]
}
    /*
    
    
    var arr = [  
    [6, 5, 0, 7, 3, 0, 0, 8, 0],
    [0, 0, 0, 4, 8, 0, 5, 3, 0],
    [8, 4, 0, 9, 2, 5, 0, 0, 0],
    [0, 9, 0, 8, 0, 0, 0, 0, 0],
    [5, 3, 0, 2, 0, 9, 6, 0, 0],
    [0, 0, 6, 0, 0, 0, 8, 0, 0],
    [0, 0, 9, 0, 0, 0, 0, 0, 6],
    [0, 0, 7, 0, 0, 0, 0, 5, 0],
    [1, 6, 5, 3, 9, 0, 4, 7, 0]
];
    
    
    
for (i = 0; i < 9; i++) {
             
        
// дырки чисел в массивах arr[0]
Array.prototype.diff = function(a) {
return this.filter(function(i){return a.indexOf(i) < 0;});
};

var mas1 = arr[i], mas2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = mas2.diff(mas1);
//console.info(result);
        
        result_arr.push(result); 

    
}
    
    
for (i = 0; i < 9; i++) {
var array = arr[i]; //arr[0]
var element = 0;
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}

//console.log(indices);
        
    }
    
    for(i=0; i<indices.length; i++)
    
   var removed = myFish.splice(indices[i], 0, 'drum');
    
    
    
          /* for(k=0; k < indices.length; k++)
        
                      for(i=0; i < 9; i++)
                          
                        var s = indices[i];
                          console.log(arr[i][s]); */
                          
                          
              
///////////////////////////////////////////// если arr[i][7] = indices[0] ???? FALSE.

         //for (k = 0; k < 9; k++)
        
        //console.log(arr[i][k]);
        //var array = [2, 5, 9, 0, 0];
        //array.indexOf(0);
    
    
    
//-------------------------------- индексы нулей
/* var indices = [];
var array = [1, 2, 4, 0, 0]; //arr[0]
var element = 0;
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}

console.log(indices); */
//-------------------------------- индексы нулей
    
 
//-- чего не хватает то?
    

    
///-- чего не хватает то?
    
   
    
    
    
    
    
    //1 ) чек строки. находим нули и каких чисел не хватает. 2) проходим по колонке сверху вниз если А == A то FALSE
    
    
    
 /* ////////////////////////////////////////////// ЧЕК КОЛОНОК!
 
 var arr = [
    [5, 3, 4, 6, 7, 8, 9, 0, 0],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]; 

var result_arr = [

[1,2],
[5,4,7,9],

];
     
for (i = 0; i < arr.length; i++) 
    
   for (k = 0; k < 9; k++)
   console.log(arr[k][i]);
   
   */ //////////////////////////////////////////////////////////
    
    
    
    
    
    
    
  /* //////////////////////////////////////////////////////////// чек строк  
    
    
var arr = [
    [5, 3, 4, 6, 7, 8, 9, 0, 0],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]; 

var result_arr = [

[1,2]

];
     
for (i = 0; i < arr.length; i++) 
    
   for (k = 0; k < 9; k++)
   console.log(arr[i][k]);
    
    
    
//////////////////////////////////////////////////////////////////////
    
    
}





*/  
    
     var arr = [
    [5, 3, 4, 6, 7, 8, 9, 0, 0],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]; 

var result_arr = [

[1,2]

];
     
for (i = 0; i < arr.length; i++) 
    
   for (k = 0; k < 9; k++)
   //console.log(arr[k][i]);

   if(arr[k][i] === 0){
   

     for (k = 0; k < 9; k++)
        
               

   //for (t = 0; t < 9; t++)          
             
         if(arr[k][i] === result_arr[0][1]) {
             console.log(false);
         }
    //console.log(arr[k][i]);
    //for (z = 0; z < result_arr.length; ++z) 
    //console.log(result_arr[z][z]);
   }






var xd = [

[1,2]

];

function razbor (xd) {
    
    for (i = 0; i < xd.length; i++) 
       for (k = 0; k < i; k++)
         return xd[i][k];
          
    
}


















