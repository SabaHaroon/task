//Question No:3
var sentence = "welcome to class";
console.log(sentence);
var afterReverse = "Welcome to class";

//reverse string
var reverseallstrings = reverseWord(afterReverse,"");
console.log(reverseallstrings);

var output = reverseWord(reverseallstrings," ");
console.log(output);

function reverseWord(afterReverse,separator){
  return afterReverse.split(separator).reverse().join(separator);
};
// Quetion No:1
console.log("question 1....");function maxsubarr()
{

var arr=[2 , 3 , -2 , 4]
 len=arr.length;
 var sum = 0;
 var max = 0;

 for(i = 0; i < len; i++) {
 sum = 0;
 
 for(j = i; j < len; j++) {
 sum = arr[j];

 if(sum > max)
 max = sum;
 }
 }
 console.log( "Maximum value is :"+ max );
}
maxsubarr();
// question 2

function twoSum(nums, target) {
    // Create a hashmap to store the indices of elements
    const numMap = new Map();
   
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
       
        if (numMap.has(complement)) {
            // Return the indices of the current element and its complement
            return [numMap.get(complement), i];
        }
       
        numMap.set(nums[i], i);
    }
        return [];
}

function amountToCoins(amount, coins) {
   
    coins.sort((a, b) => b - a);
   
        const result = [46];
   
    
    for (let i = 0; i < coins.length; i++) {
       
        const numCoins = Math.floor(amount / coins[i]);
       
       
        for (let j = 0; j < numCoins; j++) {
            result.push(coins[i]);
        }
             
        amount %= coins[i];
    }
      
    return result;
}
 console.log(amountToCoins(46 [25, 10, 5, 2, 1]));

