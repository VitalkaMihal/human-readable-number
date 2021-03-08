module.exports = function toReadable (number) {
   let arr = number.toString().split('');
   let arr19 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
   let arr1019 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   let arr2090 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
     if (number === 0){
       return 'zero';
   } else if (number <= 9) {
     return arr19[number];
   } else if ( 10 <= number && number <=19) {
     return arr1019[number - 10];
   } else if (20 <= number && number <= 99) {
    if (+arr[1] === 0) {
        return arr2090[+arr[0] - 2]; 
      } else {
     return arr2090[+arr[0] - 2] + ' ' + arr19[+arr[1]];
      }
   } else if ( 100 <= number && number <= 999) {
       if (number % 100 === 0){
           return arr19[+arr[0]] + ' ' + 'hundred';
       } else {
     return arr19[+arr[0]] + ' ' + 'hundred' + ' ' + moduleexports(number % 100);
   }
  }
}
