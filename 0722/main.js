// function solution(phone_number) {
//     var answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
//     return answer;
// }

// function solution(numbers) {
//     let answer = [0,1,2,3,4,5,6,7,8,9];
//     diff = answer.filter((item) => !numbers.includes(item));
//     diff = diff.reduce(function (sum, item) {
//         return sum + item;
//        })
//     return diff;
// }

// function solution(arr, divisor) {
//     let answer = [];
//     for(let i =0; i<arr.length;i++){
//         if(arr[i] % divisor ===0){
//             answer.push(arr[i]);
//             answer.sort((a, b) => a - b);

            
//         }

//     }
//     if(answer.length ===0){
//         answer.push(-1);
        
//     }
//     return answer;
// }


