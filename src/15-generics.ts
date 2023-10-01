// function getValue(value: unknown){
//   return value;
// }

// function getValue(value: string | number){
//   return value;
// }

function getValue<myType>(value: myType){
  const array: myType[] = [value];
  return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([11,1,1]).forEach;
