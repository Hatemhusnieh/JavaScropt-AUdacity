function isPrime(integer){
  for(var i =2; i < integer; i++){
    if(integer % i === 0){
      console.log(integer+" is divisble by: "+i);
      return false;
    }
  }
  return true;
}
isPrime(15);
