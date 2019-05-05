/**
 * Copy your sorting algorithms in here.
 * They must be named `bubbleSort` and `mergeSort`, and take an array param.
 */

// PLACEHOLDER FUNCTION — REPLACE WITH YOUR BUBBLE SORT IMPLEMENTATION

function bubbleSort (array) {
  var aux
  var contado=0
  var num=1
  for (let index = 0; index < arr.length; index++) {
      for (let j = 0; j < arr.length-1; j++) {
          if(arr[j]>arr[j+1]){
              aux=arr[j]
              arr[j]=arr[j+1]
              arr[j+1]=aux
          }
      }
  } 
  return arr
}

// PLACEHOLDER FUNCTION — REPLACE WITH YOUR MERGE SORT IMPLEMENTATION

/*function split(arr) {
    if (arr.length === 1)return arr
    var mitad = Math.floor(arr.length / 2)
    var izquierda = arr.slice(0, mitad)
    var derecha = arr.slice(mitad)
    return [izquierda,derecha]
}
function mergeSort(arr) {
    var largo = arr.length  
    if (largo <= 1) return arr;  
    return merge(mergeSort(split(arr)), mergeSort(split(arr)));
    
}*/

function merge(derecha,izquierda) {
  var resultado = [];  
  var Lizquierda =izquierda.length, Lderecha= derecha.length; 
  while (Lizquierda > 0 && Lderecha > 0) {  
      if (izquierda[0] <= derecha[0]) {  
          resultado.push(izquierda.shift());  
          Lizquierda--;  
      } else {  
          resultado.push(derecha.shift());  
          Lderecha--;  
   }  
  }  
  if (Lizquierda > 0) {  
      resultado.push.apply(resultado,izquierda);  
  } else if (Lderecha > 0) {  
      resultado.push.apply(resultado, derecha);  
  }  
  return resultado;   
}
function mergeSort(arr) {
  var largo = arr.length, m = Math.floor(largo/2);  
  if (largo <= 1) return arr;  
  return merge(mergeSort(arr.slice(0, m)), mergeSort(arr.slice(m)));
}