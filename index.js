//times table print
//declaring function taking parameter
function printTimesTable(number){
var i;
var result;
//multiplication job done here
  for (i=1;i<=10;i++)
  {
    result=number*i;
    console.log(`${number} * ${i} = ${result}`);
  }
}
//calling function
printTimesTable(20);
