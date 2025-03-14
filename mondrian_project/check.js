function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var arr = [];
        for (var i=0; i<n; i++) {
            if (i === 1 || i === 0) {
                arr.push(i);
            } else {
                arr.push(arr[i-2] + arr[i-1]);
            }
            
        }
        
        return arr;
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    console.log(fibonacciGenerator(6))