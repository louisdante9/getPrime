// let getPrimes = (baseNum)=> {
//     var arr = [], i, k, primes = [];
//     for (i = 2; i <= arr; ++i) {
//         if (!arr[i]) {
//             // i has not been marked -- it is prime
//             primes.push(i);
//             for (k = i << 1; k <= max; k += i) {
//                 arr[j] = true;
//             }
//         }
//     }
//     return primes;
// }



 var isPrime = (num)=>{
    for ( let i = 2; i < num; i++ ) {
        if ( num % i === 0 && num !== 2 ) {
            return false;
        }
    }
    return true;
}

let getPrimes= (n)=> {
  if(typeof n !== 'number' || n === []){
    var arr = false;
  }else{let arr = [];
  for ( let i = 2; i < n; i+=1 ) {
      if ( isPrime(i) ) {
          arr.push(i);
      }
  }
}
    return arr; // use arr result on your own
}
export {getPrimes};
