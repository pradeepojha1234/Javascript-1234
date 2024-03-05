const accountId = 122234;
// there are two ways to write a variable 
let accountEmail = "pradeepojha9993@gmail.com"
var accountPassword = "23346"
accountcity = " mungaoli"
let accountState;
// accountId = 8 , not alowed
accountEmail = "hufgebnjgmail.com"
accountPassword = "98786"
accountcity = " ashoknagar "

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountcity);
/*
prefer not to use var 
because of issue in block scope and functional scope 
*/
//  to remove overwritting the code :
console.table([accountId, accountEmail, accountPassword, accountcity, accountState])
