for(let i=1;i<=100;++i){
    let str = "";
    //1 is not prime..so skipping 1
      if(i>1 && checkPrime(i)){
          str += `prime number. `;
      }
      if(i%3 === 0 && i%5 === 0){
          str += 'FizzBuzz';
      }
      else if(i%3 === 0){
          str += 'Fizz';
      }
      else if(i%5 === 0){
          str += 'Buzz';
      }
      else{
          //str += `${i}`;
      }
      console.log(`${i},${str}`);
  }
  function checkPrime(num){
      for(let i=2;i<=Math.sqrt(num);++i){
          if(num%i === 0){
              return false;
          }
      }
      return true;
  }