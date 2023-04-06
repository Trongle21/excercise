// indexOf()
//split()
//reverse()
//join()

// Viết function khi truyền vào 1 số tự nhiên. nếu nó được đọc theo hướng từ trái sang phải hoặc từ phải qua trái đều giữ được giá trị

function is_palinddrome(x) {
    if (typeof x !== 'number') {
        console.log('Đây không phải số tự nhiên');
    }
    let num = x.toString();
    let arrNum = num.split('');
    let reverseNum = arrNum.reverse().join("");
    let newNum = parseInt(reverseNum);
    if (newNum === x) {
        console.log('Số có thể đảo ngược')
    } else {
        console.log('số không thể đảo ngược')
    }
    return;
}
console.log(is_palinddrome(232))