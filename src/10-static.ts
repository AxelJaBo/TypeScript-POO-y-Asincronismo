console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(1,2,2,8,1,0));

class MyMath {
  static readonly PI=3.14;
  static max(...numbers: number[]){
    return numbers.reduce((max, item)=> max >= item ? max: item, 0);
  }
}

// const math = new MyMath();
// math.PI;

console.log('MyMath', MyMath.PI);
const numbers = [122,2,1,12,9,11111];
console.log('MyMath.max', MyMath.max(...numbers));
